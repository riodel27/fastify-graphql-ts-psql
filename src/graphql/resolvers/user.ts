/* eslint-disable consistent-return */
import UserRepository from '../../modules/repository/User';
import User from '../../modules/models/User';

export default {
  Query: {
    async users(): Promise<User[] | undefined> {
      try {
        return await UserRepository.Find({});
      } catch (error) {
        console.log('error: ', error);
      }
    },
  },
};
