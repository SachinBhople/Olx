const userController = require("../controllers/user.controller")

const router = require("express").Router()


router

    .put("/verify-email", userController.verfiyUserEmail)

module.exports = router
