const User = require('../models/User.js');
const mongoose = require('mongoose');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id,);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user' });
    }
};

exports.getProfileInfo = async (req, res, next) => {
  try {
    const userId = req.user.id;       // set by your auth middleware
    if (!userId) return res.status(401).json({ message: 'Not authenticated' });

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user id' });
    }

    const user = await User.findById(userId).select('-password -__v');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// exports.getProfileInfo = async (req, res) => {
//     try {
//         const { _id: userId } = req.user;
//         User.findOne({ _id: userId }, { password: 0, __v: 0 })
//         res.status(200).json(user);
//     } catch (error) {
        
//     }
// }
