import knex from 'knex';
import config from './knexfile';

const conn = config;
const db = knex(conn);

export default db;
