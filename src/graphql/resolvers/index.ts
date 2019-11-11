import usersResolver from './user';

export default {
  Query: {
    ...usersResolver.Query,
  },
};
