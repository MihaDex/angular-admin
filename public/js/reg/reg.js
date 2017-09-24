angular.module('RegApp',[])
    .controller('RegCrt', function ($scope,$rootScope,$http) {
        $scope.reg = function () {
            $http({method: 'GET', url: '/server/index.php'})
                .then(function success(response) {
                    alert(response.data);
                })
        }
    });