angular.module('AdminApp',[])
    .controller('AdminCrt', function ($scope, $rootScope, $http, $location) {
        $rootScope.navpos(4);
        $scope.auth=false;
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
                    } else {
                        $rootScope.alert (0, "Необходима повторная авторизация!");
                        $rootScope.clickOut();
                        $location.path('/singin');
                    }
                })
            } else {
                $rootScope.alert (0, "Для начала работы пройдите авторизацию!");
            }
        } else {
            $rootScope.alert (0, "Для начала работы пройдите авторизацию!");
        }
    });