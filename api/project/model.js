// build your `Project` model here

const db = require("../../data/dbConfig")

async function getAll() {
  const data = await db("project")
  return data
}

module.exports = { getAll }