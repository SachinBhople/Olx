const authController = require("../controllers/auth.controller")

const router = require("express").Router()



router
    .post("/register-admin", authController.registerAdmin)
    .post("/login-admin", authController.loginAdmin)
    .post("/verify-admin-otp", authController.verifyOTP)
    .post("/logout-admin", authController.logoutAdmin)

    .post("/register-mobile-user", authController.regiterUser)
    .post("/login-mobile-user", authController.loginUser)
    .post("/logout-mobile-user", authController.loginUser)


module.exports = router
