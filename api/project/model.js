// build your `Project` model here

const db = require("../../data/dbConfig")

async function getAll() {
  const data = await db("project")
  data.forEach(field => {
    if(field.project_completed === 0) {
      field.project_completed = false
    } else {
      field.project_completed = true
    }
  })
  return data
}

module.exports = { getAll }