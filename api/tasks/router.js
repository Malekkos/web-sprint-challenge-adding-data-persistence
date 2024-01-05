// build your `/api/tasks` router here

const router = require("express").Router()
const Task = require("./model")

router.get("/", (req, res, next) => {

  Task.getAllTasks()
  .then(tasks => {
    res.status(200).json(tasks)
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