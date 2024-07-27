
const asyncHandler = require("express-async-handler")
const User = require("../models/User")
const sendEmail = require("../utils/email")

exports.VerifyUserEmail = asyncHandler(async (req, res) => {
    const result = await User.findById(req.loggedInUser)
    const otp = Math.floor(10000 + Math.random() * 900000)
    await User.findByIdAndUpdate(req.loggedInUser, { emailCode: otp })
    await sendEmail({
        to: result.email,
        subject: "Verify Email",
        message: `<h1> your OTP is ${otp}</h1>`
    })
    res.json({ message: "Verify User Email Success" })
})
