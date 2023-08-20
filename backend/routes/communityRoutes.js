const express = require("express")
const { protect } = require("../middleware/authMiddleware")
const {createCommunityChat , propertyChange, CommunitySearch, addToGroup, removeFromGroup, showCommunity, showUserCommunity } = require("../controllers/communityControllers")
const router = express.Router()

router.post('/create', protect, createCommunityChat);
router.route('/update').put(protect, propertyChange)
router.route('/').get(protect, CommunitySearch)
router.route('/groupAdd').put(protect,addToGroup)
router.route('/groupRemove').put(protect,removeFromGroup)
router.route('/cu').get(showCommunity)
router.route('/myCommunities').get(protect,showUserCommunity)

module.exports = router;