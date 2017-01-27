(function() {
    'use strict';

    angular
        .module('app')
        .component('listView', {
            controller: 'ListController',
            templateUrl: 'list/list.template.html'
        });

})();
