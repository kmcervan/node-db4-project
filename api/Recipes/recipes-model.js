const db = require('../../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}
function getShoppingList(recipe_id) {
    return db('sandwich as a')
            .join('ingredients as i', 'a.ingredient_id', 'i.ingredient_id')
            .select('i.ingredient_name', 'a.quantity', 'a.quantity_type')
            .where('a.recipe_id', recipe_id)
}
function getInstructions(recipe_id) {
    return db('sandwich').where('recipe_id', recipe_id).first()
}