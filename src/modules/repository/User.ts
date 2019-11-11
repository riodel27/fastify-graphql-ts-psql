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
      console.log('error: ', error);
    }
  },
  async Find(query: any): Promise<UserEntity[] | undefined> {
    try {
      const User = getRepository(UserEntity);
      const users = await User.find();
      return users;
    } catch (error) {
      console.log('error: ', error);
    }
  },
};
