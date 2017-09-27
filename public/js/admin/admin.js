angular.module('AdminApp',[])
    .controller('AdminCrt', function ($scope, $rootScope) {
        $rootScope.navpos(4);
        $scope.auth=true;
        if($rootScope.user){
            if($rootScope.user.auth){
                $scope.auth=false;

            } else {
                $rootScope.alert (0, "Для начала работы пройдите авторизацию!");
            }
        } else {
            $rootScope.alert (0, "Для начала работы пройдите авторизацию!");
        }
    });