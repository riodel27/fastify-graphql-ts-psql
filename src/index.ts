import fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { ApolloServer } from 'apollo-server-fastify'
import { typeDefs } from './graphql/typeDefs'
import { resolvers } from './graphql/resolvers'

const app: fastify.FastifyInstance<
	Server,
	IncomingMessage,
	ServerResponse
> = fastify()

const start = async () => {
	try {
		const server = new ApolloServer({
			typeDefs,
			resolvers
		})
		app.register(server.createHandler())
		await app.listen(3000, '0.0.0.0')
	} catch (error) {
		app.log.error(error)
		process.exit(1)
	}
}

process.on('uncaughtException', error => {
	console.error(error)
})

process.on("unhandledRejection", error => {
	console.error(error);
});

start()