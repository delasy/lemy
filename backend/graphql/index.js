const jwt = require('jsonwebtoken')
const validator = require('validator')
const _ = require('lodash')
const {
  AuthenticationError,
  SchemaDirectiveVisitor,
  makeExecutableSchema,
  gql
} = require('apollo-server-express')
const { GraphQLScalarType, Kind } = require('graphql')

const { User } = require('../models')

module.exports.context = async ({ req }) => {
  const ctx = {
    app: req.app,
    user: null
  }

  const { authorization = '' } = req.headers

  if (authorization === '') {
    return ctx
  }

  const token = authorization.replace('Bearer ', '')

  if (validator.isJWT(token)) {
    try {
      const { userId } = await jwt.verify(token, process.env.SECRET)
      const user = await User.findByPk(userId)

      if (user !== null) {
        return { ...ctx, user }
      }
    } catch {
    }
  }

  throw new AuthenticationError('Invalid token')
}

const uuidValue = (value) => {
  return validator.isUUID(value, 4) ? value : null
}

const initialResolvers = {
  UUID: new GraphQLScalarType({
    name: 'UUID',
    parseLiteral (ast) {
      return ast.kind === Kind.STRING ? uuidValue(ast.value) : null
    },
    parseValue: uuidValue,
    serialize: uuidValue
  })
}

const initialTypeDefs = gql`
  directive @guest on FIELD | FIELD_DEFINITION
  directive @user on FIELD | FIELD_DEFINITION

  type Mutation
  type Query

  scalar DateTime
  scalar UUID
`

const resolvers = [initialResolvers]
const typeDefs = [initialTypeDefs]

const nodes = [
  require('./node'),
  require('./user')
]

for (const node of nodes) {
  if (node.resolvers) {
    resolvers.push(node.resolvers)
  }

  if (node.typeDefs) {
    typeDefs.push(node.typeDefs)
  }
}

class GuestDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition (field) {
    const { resolve } = field

    field.resolve = function (root, args, ctx, info) {
      if (ctx.user !== null) {
        throw new AuthenticationError('Authenticated')
      }

      return resolve.call(this, root, args, ctx, info)
    }
  }
}

class UserDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition (field) {
    const { resolve } = field

    field.resolve = function (root, args, ctx, info) {
      if (ctx.user === null) {
        throw new AuthenticationError('Unauthenticated')
      }

      return resolve.call(this, root, args, ctx, info)
    }
  }
}

module.exports.schema = makeExecutableSchema({
  inheritResolversFromInterfaces: true,
  resolvers: _.merge(...resolvers),
  schemaDirectives: {
    guest: GuestDirective,
    user: UserDirective
  },
  typeDefs: typeDefs
})
