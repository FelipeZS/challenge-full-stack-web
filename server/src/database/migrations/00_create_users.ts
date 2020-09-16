import Knex from 'knex';

export async function up(Knex: Knex) {
  return Knex.schema.createTable('users', table => {
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('ra').primary();
    table.string('cpf').notNullable();
  });
}

export async function down(Knex: Knex) {
  return Knex.schema.dropTable('users');
}