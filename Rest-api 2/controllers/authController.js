const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret } = require('../config');

const authCookieName = 'auth-cookie';

exports.register = async (req, res) => {
    const {email, username, password, rePassword } = req.body;
    try {
        const user = await User.create({email, username, password});
        const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1d' });
        res.cookie(authCookieName, token, {httpOnly: true});
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'User already exists' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password.trim(), user.password.trim());
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1d' });
    res.cookie(authCookieName, token, {httpOnly: true});
    res.status(200).send(user);
};

exports.logout = async (req, res) => {
    try {
        // Clear the authentication cookie
        res.clearCookie('auth-cookie', {httpOnly: true});
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during logout' });
    }
};