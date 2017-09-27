angular.module('SinginApp',[])
    .controller('SinginCrt', function ($scope,$rootScope,$http,$location) {
        $rootScope.navpos(3);
        $scope.login = function () {
            if($scope.email && $scope.password) {
                var data = {
                    type: "login",
                    password: $scope.password,
                    email: $scope.email
                };
                $http.post('/server/index.php', data).then(function (resp) {
                    $rootScope.alert (1, "Данные получены с сервера!");
                    if(resp.data.auth){
                        $rootScope.alert (1, "Авторизация прошла успешно!");
                        $rootScope.user = {
                            token: resp.data.token,
                            auth: true
                        };
                        $rootScope.logState(true);
                        $location.path('/admin');
                    } else {
                        $rootScope.alert (0, "Нет такого пользователя!");
                    }
                })
            }
            else {
                $rootScope.alert (0, "Форма регистрации неверно заполнена!");
            }
        }
    });