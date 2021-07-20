
exports.up = function(knex) {
  return knex.schema.createTable('team_tasks', table => {
    table.increments('task_id').primary(); // adds an auto incrementing PK column
    table.string('task');
    table.integer('user_id')
    table.string('status');
    table.string('priority')
    table.timestamps(true, true); // adds created_at and updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('team_tasks');
};

// Team_tasks
// -----
// ID
// USER ASSIGNED
// TASK
// STATUS
// PRIORITY

// 'user_id'
// 'status'
// 'priority'
