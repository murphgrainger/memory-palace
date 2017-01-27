exports.seed = function(knex, Promise) {

    return knex.raw('DELETE FROM "image"; ALTER SEQUENCE image_id_seq RESTART WITH 1')
        .then(function() {

            const imageSeed = [

                {
                    image_url: 'http://www.1wallpaperhd.com/wp-content/uploads/Funny/FTP1/1920x1080/Funny%20kitchen%20Wallpapers%20HD%201920x1080.jpg',

                },{
                    image_url: 'http://4.bp.blogspot.com/-0XZ6CmGZYbg/T5g4WxIFKxI/AAAAAAAACW4/FFG7tY9t1SI/s640/zach-galifianakis-by-martin-schoeller-5i05so1me-124984-530-353.jpg',

                }, {
                    image_url: 'http://www.foundshit.com/pictures/creative/cactus-couch.jpg',

                }, {
                    image_url: 'http://cdn.hiconsumption.com/wp-content/uploads/2012/06/Zombie-Garden-Gnomes.jpg',

                },{
                    image_url: 'http://www.freakingnews.com/pictures/104000/Gollum-Knocking-at-the-Door-in-a-Magritte-Painting--104429.jpg',

                },{
                    image_url: 'https://i.ytimg.com/vi/ubhYSs9otS0/hqdefault.jpg',

                },{
                    image_url: 'http://tranquilmonkey.com/wp-content/uploads/2014/06/cool-beddings-2.jpg',

                },{
                    image_url: 'http://www.freakingnews.com/pictures/69000/Shark-Mailbox--69440.jpg',
                  
                },

            ];

            return knex('image').insert(imageSeed);

        })
};
