
import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("investment_categories", table => {
    table.increments("id")
      .primary();

    table.string("name", 100)
      .notNullable();
          
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("investment_categories");
}
