const express = require("express")
const router =  express.Router()
const { registerUser ,authUser, allUsers} = require("../controllers/userControllers")

router.post('/',registerUser)
router.get('/' ,allUsers) // Route for /user/ post and get
router.post('/login',authUser) // Route for /user/login/ post and get
module.exports = router