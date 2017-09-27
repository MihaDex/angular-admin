angular.module('RegApp',[])
    .controller('RegCrt', function ($scope,$rootScope,$http,$location) {
        $rootScope.navpos(2);
        $scope.reg = function () {
            if ($scope.password === $scope.password1 && $scope.email && $scope.password) {
                var data = {
                    type: "registration",
                    password: $scope.password,
                    email: $scope.email
                };
                $http.post('/server/index.php', data).then(function (resp) {
                    if(resp.data.auth){
                        $rootScope.alert (1, "Пользователь зарегистрирован");
                        $rootScope.user = {
                            auth: true,
                            token: resp.data.token
                        };
                        $rootScope.logState(true);
                        $location.path('/admin');
                    }
                    else {
                        $rootScope.alert (0, "Такой пользователь уже существует");
                    }
                })
            }else {
                $rootScope.alert (0, "Форма регистрации неверно заполнена!");
            }
        }
    });