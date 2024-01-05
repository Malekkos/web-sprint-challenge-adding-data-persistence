// build your `/api/resources` router here

const router = require("express").Router()
const Resource = require("./model")

router.get("*", (req, res, next) => {
  res.json({ message: "Inside of the resource Router!"})
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "Something wrong inside of the resources-router",
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router