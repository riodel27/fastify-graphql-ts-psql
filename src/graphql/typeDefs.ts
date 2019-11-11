/* eslint-disable no-tabs */
import { gql } from 'apollo-server-fastify';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }
  type Query {
		users: [User]
  }
`;

export default typeDefs;
