(function() {
    'use strict';

    angular
        .module('app')
        .service('cardService', cardService)

    function cardService($http) {
        this.getItems = function() {
            return $http.get('api/items').then(function(response) {
                const items = response.data.items
                return items
            })
        }

    }

}())
