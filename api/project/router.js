// build your `/api/projects` router here

const router = require("express").Router()
const Project = require("./model")

router.get("*", (req, res, next) => {
  res.json({ message: "Inside of the project Router!"})
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "Something wrong inside of the project-router",
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router