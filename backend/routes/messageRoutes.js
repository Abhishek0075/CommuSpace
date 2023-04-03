const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const { sendMessage } = require('../controllers/messageControllers')
const remover = require('../controllers/remover')
const router = express.Router()

router.route('/').post(protect, sendMessage)
router.route('/remove').get(remover)
// router.route('/:communityId').get(protect ,allMessage)  

module.exports = router