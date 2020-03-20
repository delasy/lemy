const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserInputError, gql } = require('apollo-server-express')

const { User } = require('../models')

module.exports.typeDefs = gql`
  type SignInPayload {
    accessToken: String!
    refreshToken: String!
  }

  type CurrentUser {
    createdAt: DateTime!
    databaseId: UUID!
    id: ID!
    updatedAt: DateTime!
  }

  type User {
    createdAt: DateTime!
    databaseId: UUID!
    id: ID!
    updatedAt: DateTime!
  }

  extend type Mutation {
    signIn (input: SignInInput!): SignInPayload! @guest
  }

  extend type Query {
    currentUser: CurrentUser! @user
  }

  input SignInInput {
    emailOrUsername: String
    password: String!
    phone: String
  }
`

module.exports.resolvers = {
  Mutation: {
    signIn: async (parent, args) => {
      const { emailOrUsername, password, phone } = args.input
      let user

      if (
        (
          typeof emailOrUsername === 'undefined' &&
          typeof phone === 'undefined'
        ) || (
          typeof emailOrUsername !== 'undefined' &&
          typeof phone !== 'undefined'
        )
      ) {
        throw new UserInputError('Invalid login', {
          invalidArgs: ['emailOrUsername', 'phone']
        })
      } else if (typeof phone !== 'undefined') {
        if (!User.isPhone(phone)) {
          throw new UserInputError('Invalid phone', {
            invalidArgs: ['phone']
          })
        }

        user = await User.findOneByPhone(phone)

        if (user === null) {
          throw new UserInputError('Invalid phone', {
            invalidArgs: ['phone']
          })
        }
      } else {
        if (
          !User.isEmail(emailOrUsername) &&
          !User.isUsername(emailOrUsername)
        ) {
          throw new UserInputError('Invalid email or username', {
            invalidArgs: ['emailOrUsername']
          })
        }

        user = await User.findOneByEmailOrUsername(emailOrUsername)

        if (user === null) {
          throw new UserInputError('Invalid email or username', {
            invalidArgs: ['emailOrUsername']
          })
        }
      }

      if (!User.isPassword(password)) {
        throw new UserInputError('Invalid password', {
          invalidArgs: ['password']
        })
      }

      const passwordsMatch = await bcrypt.compare(password, user.password)

      if (!passwordsMatch) {
        throw new UserInputError('Invalid password', {
          invalidArgs: ['password']
        })
      }

      const expMinutes = Math.floor(Math.random() * 51) + 10

      const accessToken = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * expMinutes,
        sub: user.id
      }, process.env.SECRET)

      const refreshToken = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 10 * 365 * 24 * 60 * 60,
        sub: user.id
      }, process.env.SECRET)

      return { accessToken, refreshToken }
    }
  },
  Query: {
    currentUser: (parent, args, ctx) => {
      return ctx.user
    }
  }
}
