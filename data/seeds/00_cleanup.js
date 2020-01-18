
exports.seed = async function(knex) {
  await knex('project_resource').truncate();
  await knex('task').truncate();
  await knex('resources').truncate();
  await knex('projects').truncate();
};
