angular.module('myApp.webConfig', ['myApp.webConfig.webConfigProvider'])

    //配置webAPI
.config(['webConfigProvider', function (webConfigProvider) {

    webConfigProvider.setWebApiHost = 'localhost';
    webConfigProvider.setWebApiPort = '52082';
}])



