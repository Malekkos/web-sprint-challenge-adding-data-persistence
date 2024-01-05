// build your `Task` model here

const db = require("../../data/dbConfig")

async function getAllTasks() {
  const data = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "=", "t.project_id")
    .select("project_name", "project_description", "task_description", "task_notes", "task_completed", "task_id")
  data.forEach(task => {
    if(task.task_completed === 0) {
      task.task_completed = false
    } else {
      task.task_completed = true
    }
  })
  return data
}

async function addTask(newTask) {
  const data = await db("tasks")
    .insert(newTask)

    return data
}





module.exports = { getAllTasks, addTask }