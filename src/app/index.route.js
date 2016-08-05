(function () {
    'use strict';

    angular
            .module('omp')
            .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
                .state('menu', {
                    url: '/',
                    abstract: true,
                    cache: false,
                    templateUrl: 'app/menu/menu.html',
                    controller: 'menuController',
                    controllerAs: 'menu'
                })
                .state('menu.home', {
                    url: 'home',
                    templateUrl: 'app/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'home'
                });

        $urlRouterProvider.otherwise('home');
    }

})();
