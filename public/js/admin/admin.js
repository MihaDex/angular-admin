angular.module('AdminApp',[])
    .controller('AdminCrt', function ($scope, $rootScope, $http, $location) {
        $rootScope.navpos(4);
        $scope.auth=false;
        $scope.showControl = false;
        if($rootScope.user){
            if($rootScope.user.auth){
                $scope.auth=true;
                var data = {
                    type: "getcomputers",
                    token: $rootScope.user.token
                };
                $http.post('/server/index.php', data).then(function (resp) {
                    if (resp.data.auth) {
                        console.log(resp.data);
                        $scope.computers = resp.data.computers;
                    } else {
                        $rootScope.alert (0, "Необходима повторная авторизация!");
                        $rootScope.clickOut();
                        $location.path('/singin');
                    }
                });

                $scope.addComputer = function () {
                    var data = {
                        type: "addcomputer",
                        name: $scope.computerName,
                        ip: $scope.computerIp,
                        token: $rootScope.user.token
                    };
                    $http.post('/server/index.php', data).then(function (resp) {
                        if (resp.data.auth) {
                            console.log(resp.data);
                            $scope.computers = resp.data.computers;
                        } else {
                            $rootScope.alert (0, "Необходима повторная авторизация!");
                            $rootScope.clickOut();
                            $location.path('/singin');
                        }
                    });

                };

                $scope.alert = function (comp) {
                    console.log(comp);
                    $scope.showControl = true;
                    $scope.controll = comp;
                }

            } else {
                $rootScope.alert (0, "Для начала работы пройдите авторизацию!");
            }
        } else {
            $rootScope.alert (0, "Для начала работы пройдите авторизацию!");
        }
    });