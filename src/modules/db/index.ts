import fp from 'fastify-plugin';
import { createConnection } from 'typeorm';
import Users from '../models/User';

export default fp(async (fastify, opts: {}, next) => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'fastify_db',
    entities: [Users],
  });
  console.log('successfully connected');
  next();
});
