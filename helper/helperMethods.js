const db = require('./../project/db');


function findProjects() {
    return db('projects')
}

function findResources (){
    return db('resources');
}
async function findProjectById(id){
    const project = await db('projects').where({id: id}).first();
    const task = await db('task').where('project_id', id)

    return{
        ...project,
        project_completed: (project.project_completed === 0) ? false : true,
        task: task.map(t =>{
            return {
                ...t,
                task_completed: (t.task_completed === 0) ? false : true,
               }
        })
    }

}

// knex('users')
//   .join('contacts', 'users.id', '=', 'contacts.user_id')
//   .select('users.id', 'contacts.phone')
module.exports = {
    findProjects,
    findResources,
    findProjectById,
}