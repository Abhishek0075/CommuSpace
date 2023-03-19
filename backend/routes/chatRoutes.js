const express = require("express")
const { protect } = require("../middleware/authMiddleware")
const createCommunityChat = require("../controllers/chatControllers")
const router = express.Router()

// router.route('/').post(protect, accessChat)
// router.route('/').get(protect,fetchChats)
router.route('/create').post(protect,createCommunityChat)
// router.route('/rename').put(protect,renameGroupChat)
// router.route('/groupRemove').put(protect,removeFromGroup)
// router.route('/groupAdd').put(protect,addToGroup)

module.exports = router