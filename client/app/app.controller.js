(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$http']

    function AppController($http) {
        const vm = this;
        vm.$onInit = function() {}
    }
})();
