// build your `/api/resources` router here

const router = require("express").Router()
const Resource = require("./model")

router.get("*", (req, res, next) => {
  res.json({ message: "Inside of the resource Router!"})
})


module.exports = router