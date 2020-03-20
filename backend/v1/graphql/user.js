const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const { UserInputError, gql } = require('apollo-server-express')

const { EmailVerification, User } = require('../models')

module.exports.typeDefs = gql`
  enum UserGender {
    FEMALE
    MALE
    TRANS
  }

  enum UserType {
    CLIENT
    FREELANCER
  }

  input SignInInput {
    email: String!
    password: String!
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    type: UserType!
  }

  input VerifyEmailInput {
    code: String!
  }

  type CurrentUser implements Node {
    id: ID!
    firstName: String!
    lastName: String!
    nickname: String
    username: String
    email: String!
    phoneNumber: String
    type: UserType!
    description: String
    gender: UserGender
    dateOfBirth: Date
    createdAt: DateTime!
    deletedAt: DateTime
    emailVerifiedAt: DateTime
    phoneNumberVerifiedAt: DateTime
    updatedAt: DateTime!
  }
  
  type ResendVerificationEmailPayload {
    result: Boolean!
  }

  type SignInPayload {
    token: String!
  }

  type SignUpPayload {
    token: String!
  }
  
  type VerifyEmailPayload {
    result: Boolean!
  }

  extend type Query {
    currentUser: CurrentUser! @user
  }

  extend type Mutation {
    signIn (input: SignInInput!): SignInPayload! @guest
    signUp (input: SignUpInput!): SignUpPayload! @guest
    resendVerificationEmail: ResendVerificationEmailPayload! @user
    verifyEmail (input: VerifyEmailInput!): VerifyEmailPayload! @user
  }
`

module.exports.resolvers = {
  Mutation: {
    resendVerificationEmail: async (parent, args, ctx) => {
      if (ctx.user.emailVerifiedAt !== null) {
        throw new UserInputError('Email is already verified')
      }

      const emailVerifications = await ctx.user.getEmailVerifications({
        where: {
          createdAt: {
            [Sequelize.Op.gt]: Sequelize.literal(
              'NOW() - INTERVAL \'1 minute\''
            )
          }
        }
      })

      if (emailVerifications.length !== 0) {
        throw new UserInputError('Verification email was already sent')
      }

      const emailVerification = await EmailVerification.create({
        userId: ctx.user.id,
        code: User.generateOTP()
      })

      await ctx.app.mailer.sendMail({
        from: process.env.SMTP_EMAIL,
        to: ctx.user.email,
        subject: 'Verification Code',
        text: emailVerification.code
      })

      return { result: true }
    },
    signIn: async (parent, args) => {
      const { email, password } = args.input

      if (!validator.isEmail(email)) {
        throw new UserInputError('Invalid email', {
          invalidArgs: ['email']
        })
      } else if (!validator.isLength(password, { min: 6 })) {
        throw new UserInputError('Invalid password', {
          invalidArgs: ['password']
        })
      }

      const user = await User
        .scope({ method: ['email', email] })
        .findOne()

      if (user === null) {
        throw new UserInputError('Invalid email or password', {
          invalidArgs: ['email', 'password']
        })
      }

      const passwordsMatch = await bcrypt.compare(password, user.password)

      if (!passwordsMatch) {
        throw new UserInputError('Invalid email or password', {
          invalidArgs: ['email', 'password']
        })
      }

      const token = jwt.sign({ userId: user.id }, process.env.SECRET, {
        expiresIn: '7d'
      })

      return { token }
    },
    signUp: async (parent, args, ctx) => {
      const { firstName, lastName, email, password, type } = args.input

      if (!validator.isLength(firstName, { min: 1 })) {
        throw new UserInputError('Invalid firstName', {
          invalidArgs: ['firstName']
        })
      } else if (!validator.isLength(lastName, { min: 1 })) {
        throw new UserInputError('Invalid lastName', {
          invalidArgs: ['lastName']
        })
      } else if (!validator.isEmail(email)) {
        throw new UserInputError('Invalid email', {
          invalidArgs: ['email']
        })
      } else if (!validator.isLength(password, { min: 6 })) {
        throw new UserInputError('Invalid password', {
          invalidArgs: ['password']
        })
      } else if (!validator.isIn(type, ['client', 'freelancer'])) {
        throw new UserInputError('Invalid type', {
          invalidArgs: ['type']
        })
      }

      const emailExists = await User
        .scope({ method: ['email', email] })
        .findOne()

      if (emailExists !== null) {
        throw new UserInputError('This email is already taken', {
          invalidArgs: ['email']
        })
      }

      const passwordHash = await bcrypt.hash(password, 10)

      const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordHash,
        type: type
      })

      const emailVerification = await EmailVerification.create({
        userId: user.id,
        code: User.generateOTP()
      })

      await ctx.app.mailer.sendMail({
        from: process.env.SMTP_EMAIL,
        to: user.email,
        subject: 'Verification Code',
        text: emailVerification.code
      })

      const token = jwt.sign({ userId: user.id }, process.env.SECRET, {
        expiresIn: '7d'
      })

      return { token }
    },
    verifyEmail: async (parent, args, ctx) => {
      if (ctx.user.emailVerifiedAt !== null) {
        throw new UserInputError('Email is already verified')
      }

      const { code } = args.input

      if (
        !validator.isLength(code, { min: 6, max: 6 }) ||
        !validator.isNumeric(code, { no_symbols: true })
      ) {
        throw new UserInputError('Invalid code', {
          invalidArgs: ['code']
        })
      }

      const emailVerifications = await ctx.user.getEmailVerifications({
        where: { code }
      })

      if (emailVerifications.length === 0) {
        throw new UserInputError('Incorrect code', {
          invalidArgs: ['code']
        })
      }

      const emailVerification = emailVerifications[0]

      ctx.user.emailVerifiedAt = new Date()

      await Promise.all([
        ctx.user.save(),
        emailVerification.destroy()
      ])

      return { result: true }
    }
  },
  Query: {
    currentUser: (parent, args, ctx) => {
      return ctx.user
    }
  },
  UserGender: {
    FEMALE: 'female',
    MALE: 'male',
    TRANS: 'trans'
  },
  UserType: {
    CLIENT: 'client',
    FREELANCER: 'freelancer'
  }
}
