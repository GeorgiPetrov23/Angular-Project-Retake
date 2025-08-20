const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/logout' ,logout);
router.post('/register', register);
router.post('/login', login);

module.exports = router;