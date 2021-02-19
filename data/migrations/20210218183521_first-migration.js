
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl=> {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 128).notNullable()
  })
  .createTable('ingredients', tbl=> {
      tbl.increments('ingredients_id')
      tbl.string('ingredient_name', 128).notNullable()
  })
  .createTable('instructions', tbl=>{
      tbl.increments('instructions_id')
      tbl.string('details', 128)
  })
  .createTable('sandwich', tbl=>{
      tbl.integer('recipe_id').references('recipes_id').inTable('recipes').onDelete('RESTRICT')
      tbl.integer('instructions_id').references('instructions_id').inTable('instructions').onDelete('RESTRICT')
      tbl.integer('ingredient_id').references('ingredient_id').inTable('ingredients').onDelete('RESTRICT')
      tbl.decimal('quantity')
      tbl.text('quantity_type')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('instructions')
  .dropTableIfExists('sandwich')
};
