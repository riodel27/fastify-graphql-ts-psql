/* eslint-disable consistent-return */
import { AuthenticationError, ApolloError } from 'apollo-server-fastify';

import User from '../../modules/models/User';

import UserRepository from '../../modules/repository/User';

export default {
  Query: {
    async users(): Promise<User[] | undefined> {
      try {
        return await UserRepository.Find({});
      } catch (error) {
        // 1. for debugging error? -> where to capture and store the real error like maybe database error.
        // 2. where to format the error for the client(reactjs)
        throw new ApolloError('Internal server error');
      }
    },
    async authenticationError() {
      throw new AuthenticationError('must authenticate');
    },
  },
};
