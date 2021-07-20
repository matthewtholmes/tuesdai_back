
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
  table.increments('user_id').primary(); // adds an auto incrementing PK column
  table.string('name');
  table.boolean('admin').defaultTo(false);
  table.timestamps(true, true); // adds created_at and updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
