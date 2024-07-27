const userController = require("../controllers/user.controller")
const { userProtected } = require("../middlewares/Protected")

const router = require("express").Router()


router

    .post("/verify-email", userProtected, userController.VerifyUserEmail)
    .post("/verify-user-email-otp", userProtected, userController.verifyEmailOtp)
    .post("/verify-user-mobile-otp", userProtected, userController.verifymobileOtp)

module.exports = router
