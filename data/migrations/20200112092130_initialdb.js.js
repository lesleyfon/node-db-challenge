
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
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('task');
    await knex.schema.dropTableIfExists('resources');
    await knex.schema.dropTableIfExists('projects');
};
