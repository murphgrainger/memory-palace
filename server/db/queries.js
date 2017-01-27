const knex = require('./knex');

module.exports = {

    addItem: function(body) {
        console.log(body);
        return knex("list")
            .insert({
                item: body.item,
                image_url: 1
            }, '*')
    },

    getImages: function() {
        return knex("image")
    }

};
