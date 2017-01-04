/*! angularjs-grunt - v1.0.0 - 2015-07-06 */'use strict';

angular.module('myApp.view2', ['ngRoute', 'myApp.view2.services'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    });
}])

.controller('View2Ctrl', ['$http', '$scope', 'view2Service', function ($http, $scope, view2Service) {


    //��������DomReady
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
angular.module('myApp.view2.services', ['myApp.webConfig'])
    .factory('view2Service', ['$http', 'webConfig', function ($http, webConfig) {
        var serviceInstance = {};

        //加载数据
        serviceInstance.loadValues = function (successCallback, errorCallback) {

            var webApiUrl = webConfig.generateWebApiUrl('values');//'http://localhost:52082/api/values';
            $http.get(webApiUrl)
                .success(function (data, status, headers, config) {
                    if (successCallback != undefined && successCallback != null) {
                        successCallback(data);
                    }
                })
                .error(function (data) {
                    if (errorCallback != undefined && errorCallback != null) {
                        errorCallback(data.Message);
                    }
                });
        };

        return serviceInstance;
    }]);