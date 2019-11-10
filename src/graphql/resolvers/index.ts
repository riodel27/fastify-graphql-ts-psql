import { usersResolver } from './users'

export const resolvers = {
	Query: {
		...usersResolver.Query
	}
}