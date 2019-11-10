import { usersResolver } from './user'

export const resolvers = {
	Query: {
		...usersResolver.Query
	}
}