const { gql } = require('apollo-server-express')

module.exports.typeDefs = gql`
  interface Node {
    id: ID!
  }
`

module.exports.resolvers = {
  Node: {
    __resolveType: (parent, args, ctx, info) => {
      return info.parentType
    }
  }
}
