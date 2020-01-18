exports.seed = function(knex){
    return knex('projects').insert([
        {
            project_name: 'first project',
            project_description: 'the project description',
            project_completed: true, // or true, the database will return 1 for true and 0 for false
           
        },
        {
            project_name: 'second project',
            project_description: 'the second project description',
            project_completed: false, // or true, the database will return 1 for true and 0 for false
           
        },
        {
            project_name: 'Third project',
            project_description: 'the third project description',
            project_completed: false, // or true, the database will return 1 for true and 0 for false
           
        }
    ]);
}