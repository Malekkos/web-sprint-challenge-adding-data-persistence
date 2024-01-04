/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("project", table => {
    table.increments("project_id").notNullable()
  })
  await knex.schema.createTable("resource", table => {
    table.increments("resource_id").notNullable()
  })
  await knex.schema.createTable("task", table => {
    table.increments("task_id").notNullable
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("task")
  await knex.schema.dropTableIfExists("resource")
  await knex.schema.dropTableIfExists("project")
};
