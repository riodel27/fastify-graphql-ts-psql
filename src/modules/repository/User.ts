/* eslint-disable consistent-return */
import { getRepository } from 'typeorm';

import UserEntity from '../models/User';

export default {
  async FindOne(query: any): Promise<UserEntity | undefined> {
    try {
      const User = getRepository(UserEntity);
      const user = await User.findOne(query);
      return user;
    } catch (error) {
      throw Error(error);
    }
  },
  async Find(query: any): Promise<UserEntity[] | undefined> {
    try {
      const User = getRepository(UserEntity);
      const users = await User.find(query);
      return users;
    } catch (error) {
      throw Error(error);
    }
  },
};
