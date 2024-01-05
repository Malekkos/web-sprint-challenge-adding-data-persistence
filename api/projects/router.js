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
  
  console.log(details)
  Project.addProject(details)
  .then(() => {
    if(!details.project_completed) {
      details.project_completed = false
    } else if(details.project_completed === 0) {
      details.project_completed = false
    } else {
      details.project_completed = true
    }
    console.log(details)
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