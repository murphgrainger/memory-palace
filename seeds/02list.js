exports.seed = function(knex, Promise) {

    return knex.raw('DELETE FROM "list"; ALTER SEQUENCE list_id_seq RESTART WITH 1')
        .then(function() {

            const listSeed = [

                {
                    item: 'eggs',

                },{
                    item: 'milk',

                }, {
                    item: '8 bottles of ketchup',

                }, {
                    item: 'email Eddie',

                },{
                    item: 'wash socks',

                },{
                    item: 'make friends',

                },{
                    item: 'clean bathroom',

                },

            ];

            return knex('list').insert(listSeed);

        })
};
