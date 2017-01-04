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