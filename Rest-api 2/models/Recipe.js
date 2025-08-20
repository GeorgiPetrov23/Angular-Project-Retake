const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String
    },
    ingredients: [String],
    instructions: {
        type: String
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    imageUrl: {
        type: String
    },
});

module.exports = mongoose.model('Recipe', recipeSchema);