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
    const resource = await db('project_resource')
                            .select("resource_name", "resource_description")
                            .join('projects', 'project_resource.project_id', '=', 'projects.id')
                            .join('resources', 'project_resource.resource_id', '=', 'resources.id')
                            .where('projects.id', id)
    return{
        ...project,
        project_completed: (project.project_completed === 0) ? false : true,
        task: task.map(t =>{
            return {
                ...t,
                task_completed: (t.task_completed === 0) ? false : true,
               }
        }),
        resource
    }

}

function findTask(){
    return db('task').leftJoin('projects', 'task.project_id', '=', 'projects.id').select('task_description','notes','task_completed','project_id','project_name', 'project_description')
}



async function postProject(project){

    await db('projects').insert(project);

    return db('projects').where({ project_name: project.project_name})
}

async function postResource(resources){

    await db('resources').insert(resources);

    return db('resources').where({resource_name: resources.resource_name})
}
module.exports = {
    findProjects,
    findResources,
    findProjectById,
    findTask,
    postResource,
    postProject
}