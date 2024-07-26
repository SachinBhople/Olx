const mongoose = require("mongoose")

const userSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dzbbujtzt/image/upload/v1721291255/hero_cuplvt.png"
        // required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileverified: {
        type: Boolean,
        default: false
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    emailCode: {
        type: String,
    },
    mobileCode: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    mobile: {
        type: Number,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("user", userSchma)