
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id')
      .primary();

    table.string('email')
      .notNullable()
      .unique();

    table.string('username', 50)
      .notNullable()
      .unique();

    table.string('password')
      .notNullable();

    table.boolean('is_active')
      .notNullable();

    table.integer('permission_id')
      .unsigned()
      .defaultTo(1);

    table.timestamps();

    table.foreign('permission_id', 'fk_permission_id_users')
      .references('id')
      .inTable('permissions')
      .onDelete('NO ACTION')
      .onUpdate('NO ACTION');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
