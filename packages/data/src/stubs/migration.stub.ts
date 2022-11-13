/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Knex } from 'knex';

const tableName = '';

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable(tableName, (t) => {
        t.increments();
    });
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable(tableName);
}
