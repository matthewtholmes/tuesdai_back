
exports.up = function(knex) {
  return knex.schema.createTable('users_tasks', table => {
    table.integer('task_id')
    table.integer('user_id')
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_tasks');
};
