const express = require("express")
const router =  express.Router()
const { registerUser } = require("../controllers/userControllers")


router.route('/users').post(registerUser)
// router.route('/login',authUser)

module.exports = router