const express = require("express")
const router =  express.Router()
const { registerUser ,authUser, allUsers} = require("../controllers/userControllers")
const { protect } = require("../middleware/authMiddleware")

router.post('/',registerUser)
router.get('/' ,protect,allUsers) // Route for /user/ post and get
router.post('/login',authUser) // Route for /user/login/ post and get
module.exports = router