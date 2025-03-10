/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("projects", table => {
    table.increments("project_id").notNullable()
    table.string("project_name", 100).notNullable()
    table.string("project_description")
    table.boolean("project_completed").defaultTo(false)
  })
  await knex.schema.createTable("resources", table => {
    table.increments("resource_id").notNullable()
    table.string("resource_name", 100).notNullable().unique()
    table.string("resource_description")
  })
  await knex.schema.createTable("tasks", table => {
    table.increments("task_id").notNullable()
    table.string("task_description").notNullable()
    table.string("task_notes")
    table.boolean("task_completed").defaultTo(false)
    table.integer("project_id")
      .unsigned()
      .notNullable()
      .references("project_id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("RESTRICT")
  })
  await knex.schema.createTable("project_resources", table => {
    table.increments("p_r_id").notNullable()
    table.integer("project_id")
      .unsigned()
      .notNullable()
      .references("project_id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("RESTRICT")
    table.integer("resource_id")
      .unsigned()
      .notNullable()
      .references("resource_id")
      .inTable("resources")
      .onDelete("RESTRICT")
      .onUpdate("RESTRICT")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};
