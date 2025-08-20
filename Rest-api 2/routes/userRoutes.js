const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, getProfileInfo } = require('../controllers/usersController.js');
const auth = require('../middleware/authMiddleware.js');

router.get('/', getAllUsers)
router.get('/profile', auth, getProfileInfo)
router.get('/:id', getUserById)

module.exports = router;