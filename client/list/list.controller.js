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
            console.log(data);
            vm.item = {
                title: data.title
            }
            cardService.getItems(vm.item).then(function(item) {
                delete vm.item
            })
        }
    }
})();
