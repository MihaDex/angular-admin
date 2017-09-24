angular.module('RoutingApp', ['ngRoute','RegApp','SinginApp','AdminApp'])
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html'
            })
            .when('/admin', {
                templateUrl: 'admin.html'
            })
            .when('/singin', {
                templateUrl: 'singin.html'
            })
            .when('/reg', {
                templateUrl: 'reg.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);