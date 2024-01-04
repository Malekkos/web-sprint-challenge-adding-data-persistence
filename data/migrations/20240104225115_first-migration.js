/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("project", table => {

  })
  await knex.schema.createTable("resource", table => {})
  await knex.schema.createTable("task", table => {})
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
