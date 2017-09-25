angular.module('RegApp',[])
    .controller('RegCrt', function ($scope,$rootScope,$http) {
        $scope.reg = function () {
            //$rootScope.test();
            if ($scope.password === $scope.password1 && $scope.email && $scope.password) {
                var data = {
                    password: $scope.password,
                    email: $scope.email
                };
                $http.post('/server/index.php', data).then(function (resp) {
                    $rootScope.alert (1, "Данные получены с сервера!");
                    console.log(resp.data);
                })
            }else {
                $rootScope.alert (0, "Форма регистрации неверно заполнена!");
            }
        }
    });