(function() {
    'use strict';

    angular.module('app').config(config)


    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true)

        $stateProvider
            .state({
                name: 'app',
                abstract: true,
                component: 'app',
            })
            .state({
                name: 'home',
                parent: 'app',
                url: '/',
                component: 'listView',
            })
            .state({
                name: 'playground',
                parent: 'app',
                url: '/playground/',
                component: 'playGround',
            })
    }

}());
