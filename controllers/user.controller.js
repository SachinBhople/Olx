
const asyncHandler = require("express-async-handler")
const User = require("../models/User")
const sendEmail = require("../utils/email")

exports.VerifyUserEmail = asyncHandler(async (req, res) => {
    const result = await User.findById(req.loggedInUser)
    if (!result) {
        return res.status(401).json({ message: "You are Not Logged in Please Login Again" })
    }
    const otp = Math.floor(10000 + Math.random() * 900000)
    await User.findByIdAndUpdate(req.loggedInUser, { emailCode: otp })
    await sendEmail({
        to: result.email,
        subject: "Verify Email",
        message: `<h1> your OTP is ${otp}</h1>`
    })
    res.json({ message: "Verify User Email Success" })
})



exports.verifyEmailOtp = asyncHandler(async (req, res) => {
    const { otp } = req.body
    const result = await User.findById(req.loggedInUser)
    if (!result) {
        return res.status(401).json({ message: "You are Not Logged in Please Login Again" })
    }
    if (otp != result.emailCode) {
        return res.status(400).json({ message: "Invaild Otp" })
    }
    await User.findByIdAndUpdate(req.loggedInUser, { emailVerified: true })
    res.json({ message: "Email Verify Success" })
})
exports.verifymobileOtp = asyncHandler(async (req, res) => {
    const { otp } = req.body
    const result = await User.findById(req.loggedInUser)
    if (!result) {
        return res.status(401).json({ message: "You are Not Logged in Please Login Again" })
    }
    if (otp != result.mobileCode) {
        return res.status(400).json({ message: "Invaild Otp" })
    }
    await User.findByIdAndUpdate(req.loggedInUser, { mobileverified: true })
    res.json({ message: "Mobile Verify Success" })
})