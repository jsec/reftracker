/* eslint-disable turbo/no-undeclared-env-vars */
import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const config = {
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME
    },
    migrations: {
        directory: 'migrations',
        stub: 'stubs/migration.stub.ts'
    },
    seeds: {
        directory: 'seeds',
        stub: 'stubs/seed.stub.ts'
    },
    ...knexSnakeCaseMappers
} as Knex.Config;

export default config;
