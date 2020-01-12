
exports.up = async function(knex) {
    await knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.string('project_description');
        tbl.boolean('project_completed');
    });

    await knex.schema.createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128).notNullable();
        tbl.string('resource_description');
    });

    await knex.schema.createTable('task', tbl => {
        tbl.increments();
        tbl.string('task_description').notNullable();
        tbl.string('notes');
        tbl.boolean('task_completed');
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects') .onDelete("CASCADE").onUpdate("CASCADE")
        // tbl.integer('species_id').unsigned().notNullable().references('id').inTable('species')
        
    });
    await knex.schema.createTable('project_resource', tbl => {
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onDelete("CASCADE").onUpdate("CASCADE");
        tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources').onDelete("CASCADE").onUpdate("CASCADE");
        tbl.primary(['project_id', 'resource_id'])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_resource');
    await knex.schema.dropTableIfExists('task');
    await knex.schema.dropTableIfExists('resources');
    await knex.schema.dropTableIfExists('projects');
};
