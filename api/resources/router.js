// build your `/api/resources` router here

const router = require("express").Router()
const Resource = require("./model")

router.get("/", (req, res, next) => {
  Resource.getAllResources()
  .then(resources => {
    res.status(200).json(resources)
  })
  .catch(error => {
    next(error)
  })
})

router.post("/", (req, res, next) => {
  const newResource = req.body
  
  Resource.addResource(newResource)
  .then(() => {
    res.status(201).json(newResource)
  })
  .catch(error => {
    next(error)
  })
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "Something wrong inside of the resources-router",
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router