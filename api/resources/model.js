// build your `Resource` model here

const db = require("../../data/dbConfig")

async function getAllResources() {
  const data = await db("resources")
  
  return data
}

module.exports = { getAllResources }