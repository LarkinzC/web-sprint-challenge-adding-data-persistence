/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
    })
    .createTable('resources', table => {
        table.increments('resource_id')
    })
    .createTable('tasks', table => {
        table.increments('task_id')
    })
    .createTable('project_resources', table => {
        table.increments('pro_res_id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
