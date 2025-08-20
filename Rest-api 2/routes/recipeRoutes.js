const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
    likeRecipe
} = require('../controllers/recipeController');

router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.post('/', auth, createRecipe);
router.put('/:id', auth, updateRecipe);
router.delete('/:id', auth, deleteRecipe);

module.exports = router;