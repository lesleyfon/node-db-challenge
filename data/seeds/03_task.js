exports.seed = function(knex){
return knex('task').insert([
        {
            task_description: 'task description',
            notes: 'the task notes',
            task_completed: false, // or true
            project_id: 1
          },
          {
            task_description: 'another task description',
            notes: 'the task notes',
            task_completed: false,
            project_id: 2 // or true
          },
        {
            task_description: 'second task',
            notes: 'the task notes',
            task_completed: false,
            project_id: 1 // or true
          },
          {
            task_description: 'another task description',
            notes: 'the task notes',
            task_completed: false,
            project_id: 2// or true
          },
        {
            task_description: 'task description',
            notes: 'the task notes',
            task_completed: false,
            project_id: 2 // or true
          },
          {
            task_description: 'another task description',
            notes: 'the task notes',
            task_completed: false,
            project_id:  3// or true
          },
        ])
    }










            
       