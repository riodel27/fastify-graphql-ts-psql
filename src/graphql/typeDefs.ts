import { gql } from 'apollo-server-fastify'

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }
  type Query {
		users: [User]
  }
`;