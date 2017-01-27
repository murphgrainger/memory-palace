(function() {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    function ListController(cardService) {
        const vm = this;
        vm.$onInit = function() {
            cardService.getCourses().then(function(courses) {
                vm.courses = courses;
                console.log(courses);
            })
        }
    }
})();
