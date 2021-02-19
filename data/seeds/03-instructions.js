
exports.seed = function(knex) {

      return knex('instructions').insert([
        {instructions_id: 1, details: 'toast'},
        {instructions_id: 2, details: 'add'},
        {instructions_id: 3, details: 'enjoy!'},
      ]);
};
