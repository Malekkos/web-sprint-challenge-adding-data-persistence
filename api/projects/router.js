// build your `/api/projects` router here

const router = require("express").Router()
const Project = require("./model")

router.get("/", (req, res, next) => {
  Project.getAll()
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(error => {
    next(error)
  })
})

router.post("/", (req, res, next) => {
  const details = req.body
  Project.addProject(details)
  .then(() => {
    res.status(201).json(details)
  })
  .catch(error => {
    next(error)
  })
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "Something wrong inside of the projects-router",
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router