
exports.seed = function(knex, Promise) {

    return knex('recipes').insert([
      {recipe_id: 1, recipe_name: 'Ham Sandwich'},
      {recipe_id: 2, recipe_name: 'Turkey Sandwich'},
      {recipe_id: 3, recipe_name: 'Cheese Sandwich'}
    ]);

};
