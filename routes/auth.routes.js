const adminController = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/register-admin", adminController.registerAdmin)


module.exports = router

