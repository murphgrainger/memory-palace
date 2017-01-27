exports.up = function(knex, Promise) {
return knex.schema.createTable('list', table => {
  table.increments();
  table.text('item').notNullable();
  table.integer('image_id').references('image.id').unsigned().onDelete('cascade');
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('list');
};
