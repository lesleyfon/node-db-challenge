const db = require('./../project/db');


function findProjects() {
    return db('projects')
}

function findResources (){
    return db('resources');
}

module.exports = {
    findProjects,
    findResources
}