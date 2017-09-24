angular.module('AdminApp',[])
    .controller('AdminCrt', function ($scope, $rootScope) {
        $rootScope.test='root';
        $scope.test='test';
    });