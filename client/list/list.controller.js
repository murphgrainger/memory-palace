(function() {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    function ListController(cardService) {
        const vm = this;
        vm.$onInit = function() {

        }

        vm.postItem = function(data) {
            vm.item = {
                title: data.title
            }
            cardService.addPost(vm.item).then(function(item) {
                delete vm.item
                postService.getPost().then(function(item) {
                    vm.items = item
                })
            })
        }
    }
})();
