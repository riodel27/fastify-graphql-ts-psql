import UserRepository from '../../modules/repository/User'
import User from '../../modules/models/User'

export const usersResolver = {
	Query: {
		async users(): Promise<User[] | undefined> {
			try {
				return await UserRepository.Find({})
			} catch (error) {
				console.log('error: ', error)
			}
		}
	}
}