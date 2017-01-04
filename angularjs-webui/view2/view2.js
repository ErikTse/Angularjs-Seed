'use strict';

angular.module('myApp.view2', ['ngRoute', 'myApp.view2.services'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    });
}])

.controller('View2Ctrl', ['$http', '$scope', 'view2Service', function ($http, $scope, view2Service) {


    //º”‘ÿÕÍ±œDomReady
    angular.element(document).ready(function () {

        view2Service.loadValues(
            //success
            function (data) {
                $scope.values = data;
            },
            //fail
            function (message) {
                alert(message);
            }
        );
    });
}]);