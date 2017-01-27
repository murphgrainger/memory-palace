(function() {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    function ListController(cardService) {
        const vm = this;

        vm.$onInit = function() {
            vm.items = []
        }

        vm.postItem = function() {
            vm.items.push(vm.item)
            delete vm.item
        }

    }
})();;
