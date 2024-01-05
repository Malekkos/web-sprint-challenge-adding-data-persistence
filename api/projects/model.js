// build your `Project` model here

const db = require("../../data/dbConfig")

async function getAllProjects() {
  const data = await db("projects")
  data.forEach(field => {
      if(field.project_completed === 0) {
        field.project_completed = false
      } else {
        field.project_completed = true
      }
  })
    
  return data
}

async function addProject(details) {
  const data = await db("projects")
  .insert(details)
  
  return data
}

module.exports = { getAllProjects, addProject }