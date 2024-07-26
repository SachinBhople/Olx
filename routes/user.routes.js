const userController = require("../controllers/user.controller")
const { userProtected } = require("../middlewares/Protected")

const router = require("express").Router()


router

    .put("/verify-email", userProtected, userController.verfiyUserEmail)

module.exports = router
