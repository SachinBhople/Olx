
// admin register
// admin verify otp
// admin login
// admin logout

// user register
// user verify email
// user login
// user logout

const asyncHandler = require("express-async-handler")
const validator = require("validator")
const { checkEmpty } = require("../utils/checkEmpty")
const bcrypt = require("bcryptjs")
const Admin = require("../models/Admin")

exports.registerAdmin = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const { isError, error } = checkEmpty({ name, email, password })

    if (isError) {
        return res.status(400).json({ message: "All Feilds Required", error })
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "invaild Email" })
    }
    // if (!validator.isStrongPassword(password)) {
    //     return res.status(400).json({ message: "Provide strong Password" })
    // }
    const IsFound = await Admin.findOne({ email })
    if (IsFound) {
        return res.status(400).json({ messsage: "email Alerdy Registerd With us" })
    }
    const hash = await bcrypt.hash(password, 10)
    await Admin.create({ name, email, password: hash })
    res.json({ message: "admin register Success" })

})


exports.loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const { isError, error } = checkEmpty({ email, password })
    if (isError) {
        return res.status(401).json({ message: "All Fields Requpred", error })
    }
    if (!validator.isEmail(email)) {
        return res.status(401).json({ message: "Indivaid Email" })

    }
    const result = await Admin.findOne({ email })
    if (!result) {
        return res.status(401).json({ messsage: process.env.NODE_ENV === "devlopment" ? "invaild Email" : "invaild Creaditals" })
    }
    const verify = await bcrypt.compare(password, result.password)

    if (!verify) {
        return res.status(401).json({ messsage: process.env.NODE_ENV === "devlopment" ? "invaild Password" : "invaild Creaditals" })
    }

    //send otp

    const otp = Math.floor(10000 + Math.random() * 900000)

})