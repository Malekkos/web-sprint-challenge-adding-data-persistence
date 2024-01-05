// build your `Resource` model here

const db = require("../../data/dbConfig")

async function getAllResources() {
  const data = await db("resources")
  
  return data
}

async function addResource(resource) {
  const data = await db("resources")
    .insert(resource)
  
  return data
} 

module.exports = { getAllResources, addResource }