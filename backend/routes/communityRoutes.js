const express = require("express")
const { protect } = require("../middleware/authMiddleware")
const {createCommunityChat , propertyChange, CommunitySearch } = require("../controllers/communityControllers")
const router = express.Router()

router.route('/create').post(protect,createCommunityChat)
router.route('/update').put(protect, propertyChange)
router.route('/').get(protect, CommunitySearch)
// router.route('/').post(protect, accessChat)
// router.route('/').get(protect,fetchChats)
// router.route('/groupAdd').put(protect,addToGroup)
// router.route('/groupRemove').put(protect,removeFromGroup)

module.exports = router