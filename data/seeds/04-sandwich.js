
exports.seed = function(knex) {

      return knex('sandwich').insert([
        {recipe_id: 1, instructions_id: 1, ingredients_id: 1, quantity: 2, quantity_type: 'slice(s)'},
        {recipe_id: 1, instructions_id: 2, ingredients_id: 2, quantity: 1, quantity_type: 'tblsp'},
        {recipe_id: 1, instructions_id: 2, ingredients_id: 3, quantity: 1, quantity_type: 'slice'},
        {recipe_id: 1, instructions_id: 3},
        {recipe_id: 2, instructions_id: 1, ingredients_id: 1, quantity: 2, quantity_type: 'slice(s)'},
        {recipe_id: 2, instructions_id: 2, ingredients_id: 2, quantity: 1, quantity_type: 'tblsp'},
        {recipe_id: 2, instructions_id: 2, ingredients_id: 2, quantity: 1, quantity_type: 'slice(s)'},
        {recipe_id: 2, instructions_id: 3},
        {recipe_id: 3, instructions_id: 1, ingredients_id: 1, quantity: 2, quantity_type: 'slice(s)'},
        {recipe_id: 3, instructions_id: 2, ingredients_id: 2, quantity: 2, quantity_type: 'slice(s)'},
        {recipe_id: 3, instructions_id: 3},
      ]);
};
