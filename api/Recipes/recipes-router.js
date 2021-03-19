const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed son!'})
    })
})

router.get('/ingredients/:id', (req, res)=>{
    const {id} = req.params;
    Recipes.getShoppingList(id)
    .then(ingredients => {
        res.status(200).json(ingredients);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = router;