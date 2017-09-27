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
        $rootScope.navpos = function (pos) {
            switch (pos){
                case 1:
                    $scope.position ={
                        one: "active",
                        two: "",
                        three: "",
                        four: ""
                    };
                    break;
                case 2:
                    $scope.position ={
                        one: "",
                        two: "active",
                        three: "",
                        four: ""
                    };
                    break;
                case 3:
                    $scope.position ={
                        one: "",
                        two: "",
                        three: "active",
                        four: ""
                    };
                    break;
                case 4:
                    $scope.position ={
                        one: "",
                        two: "",
                        three: "",
                        four: "active"
                    };
                    break;
            }
        };
        $rootScope.navpos(1);
        $scope.home = function () {
            $rootScope.navpos(1);
        };
        $scope.alert ={
            hide: true
        };
        $scope.navbar = {
            logout: true
        };
        $rootScope.logState = function (state) {
            if(state){
                $scope.navbar = {
                    logout: false
                }
            } else {
                $scope.navbar = {
                    logout: true
                }
            }
        };
        $scope.clickOut = function () {
                $rootScope.user.auth = false;
                $rootScope.user.token = "";
                $rootScope.logState(false);
                $rootScope.navpos(1);
        };
        $rootScope.clickOut = $scope.clickOut;
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