
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('team_tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Matt', admin: true},
        {name: 'Ray', admin: true},
        {name: 'Noah', admin: false},
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('team_tasks').insert([
        { task: 'do stuff', user_id: 3, status: 'good', priority: 'important'},
        { task: 'do other stuff', user_id: 2, status: 'great', priority: 'not important'},
        { task: 'do more stuff', user_id: 1, status: 'bad', priority: 'top'}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('users_tasks').insert([
        {task_id: 1, user_id: 3},
        {task_id: 2, user_id: 2},
        {task_id: 3, user_id: 1},
      ]);
    })
};

// Team_tasks
// -----
// ID
// USER ASSIGNED
// TASK
// STATUS
// PRIORITY