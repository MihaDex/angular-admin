angular.module('RegApp',[])
    .controller('RegCrt', function ($scope,$rootScope,$http) {
        $scope.reg = function () {
            /*
            $http({method: 'GET', url: '/server/index.php'})
                .then(function success(response) {
                    alert(response.data);
                })*/
            var data = {
                login: $scope.login,
                password: $scope.password,
                email: $scope.email
            };
            $http.post('/server/index.php', data).then(function (resp) {
                console.log(resp.data);
            })
        }
    });