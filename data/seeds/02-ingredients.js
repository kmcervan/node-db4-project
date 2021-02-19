
exports.seed = function(knex) {

    return knex('ingredients').insert([
      {ingredients_id: 1, ingredient_name: 'bread'},
      {ingredients_id: 2, ingredient_name: 'mayo'},
      {ingredients_id: 3, ingredient_name: 'ham'},
      {ingredients_id: 4, ingredient_name: 'turkey'},
      {ingredients_id: 5, ingredient_name: 'cheese'}
    ]);
  
};
