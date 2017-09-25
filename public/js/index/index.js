angular.module('RoutingApp', ['Helper','ngRoute','RegApp','SinginApp','AdminApp'])
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
    }])
    .controller('IndexCrt', function ($scope, $rootScope) {
        $scope.alert ={
            hide: true
        };
        $scope.clickAlert = function () {
            $scope.alert ={
                hide: true
            };
        };
        $rootScope.alert = function (type, text) {
            switch (type) {
                case 1:
                    $scope.alert = {
                        hide: false,
                        class: "alert-success",
                        text: text
                    };
                    break;
                case 0:
                    $scope.alert = {
                        hide: false,
                        class: "alert-danger",
                        text: text
                    };
                    break
            }
        };
    });