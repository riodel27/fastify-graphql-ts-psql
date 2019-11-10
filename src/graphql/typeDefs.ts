import { gql } from 'apollo-server-fastify'

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  type Query {
		users: [User]
  }
`;