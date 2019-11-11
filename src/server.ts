import fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { ApolloServer } from 'apollo-server-fastify';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import db from './modules/db';

const app: fastify.FastifyInstance<
Server,
IncomingMessage,
ServerResponse
> = fastify();

const start = async () => {
  try {
    app.register(db, {/** pass db variables here */ });
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    app.register(server.createHandler());
    await app.listen(3000, '0.0.0.0');
  } catch (error) {
    console.log('error: ', error);
    app.log.error(error);
    process.exit(1);
  }
};

process.on('uncaughtException', (error) => {
  console.error(error);
});

process.on('unhandledRejection', (error) => {
  console.error(error);
});

start();
