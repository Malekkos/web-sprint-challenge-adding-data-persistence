// build your `Project` model here

const db = require("../../data/dbConfig")

async function getAll() {
  const data = await db("project")
  console.log(data)
  data.forEach(field => {
    console.log(field.project_completed)
    if(field.project_completed === 0) {
      field.project_completed = false
    } else {
      field.project_completed = true
    }
  })
  return data
}

module.exports = { getAll }