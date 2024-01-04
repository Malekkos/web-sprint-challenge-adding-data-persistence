// build your `/api/tasks` router here

const router = require("express").Router()
const Task = require("./model")

router.get("*", (req, res, next) => {
  res.json({ message: "Inside of the task Router!"})
})


module.exports = router