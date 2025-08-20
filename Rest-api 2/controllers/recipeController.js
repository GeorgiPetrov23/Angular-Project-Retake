const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
    const { title, ingredients, instructions, imageUrl } = req.body;
    try {
        const recipe = await Recipe.create({
            title,
            ingredients,
            instructions,
            imageUrl,
            createdBy: req.user.id
        });
        res.status(201).json(recipe);
    } catch (err) {
        res.status(500).json({ message: 'Error creating recipe' });
    }
};

exports.getAllRecipes = async (req, res) => {
    const recipes = await Recipe.find().populate('createdBy', 'username');
    res.json(recipes);
};

exports.getRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id).populate('createdBy', 'username');
    if (!recipe) return res.status(404).json({ message: 'Not found' });
    res.json(recipe);
};

exports.updateRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Not found' });
    if (recipe.createdBy.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });
    Object.assign(recipe, req.body);
    await recipe.save();
    res.json(recipe);
};

exports.deleteRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'samoubii se' });
    if (recipe.createdBy.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });
    await recipe.deleteOne();
    res.json({ message: 'Deleted' });
};

exports.likeRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Not found' });
    const userId = req.user.id;
    if (recipe.likes.includes(userId)) {
        recipe.likes.pull(userId);
    } else {
        recipe.likes.push(userId);
    }
    await recipe.save();
    res.json({ likes: recipe.likes.length });
};