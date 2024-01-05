// build your `/api/tasks` router here

const router = require("express").Router()
const Task = require("./model")

router.get("/", (req, res, next) => {

  Task.getAllTasks()
  .then(tasks => {
    res.status(200).json(tasks)
  })
  .catch(error => {
    next(error)
  })
})

router.post("/", (req, res, next) => {
  const newTask = req.body

  if(!newTask.task_notes) {
    newTask.task_notes = null
    } 
  if (!newTask.task_completed || newTask.task_completed === 0) {
    newTask.task_completed = false
    }
  if(newTask.task_completed === 1) {
    newTask.task_completed = true
  } 
  Task.addTask(newTask)
  .then(() => {
    res.status(201).json(newTask)
  })
  .catch(error => {
    next(error)
  })
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "Something wrong inside of the tasks-router",
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router