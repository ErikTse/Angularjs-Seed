/*! angularjs-grunt - v1.0.0 - 2015-07-06 */angular.module('myApp.webConfig', ['myApp.webConfig.webConfigProvider'])

    //配置webAPI
.config(['webConfigProvider', function (webConfigProvider) {

    webConfigProvider.setWebApiHost = 'localhost';
    webConfigProvider.setWebApiPort = '52082';
}])




//webconfig provider
//设置，获取webApi地址
angular.module('myApp.webConfig.webConfigProvider', [])
.provider('webConfig', function () {

    // WebApi 的基本URL（发布网站、调整端口号等场景时，请直接修改下面的数据地址。）
    var WebApiHost = "localhost";
    var WebApiPort = "52082";

    //设置webApi的host地址
    setWebApiHost = function (host) {
        webApiHost = host;
    };

    //设置webApi的port
    setWebApiPort = function (port) {
        WebApiPort = port;
    };

    //此变量和函数是可以在任何传入了’myProvider‘的控制器中进行访问
    this.$get = function () {
        return {

            // 获得WebApi的基础ServerHost
            getWebApiBaseUrl: function () {
                var webApiBaseUrl = 'http://' + WebApiHost + ':' + WebApiPort + '/';
                return webApiBaseUrl;
            },

            // 生成完整的WebApi-api调用地址
            generateWebApiUrl: function (controllerName) {
                var webApiBaseUrl = this.getWebApiBaseUrl() + 'api/';    //结果范例： 'http://localhost:56701/api/';
                return (webApiBaseUrl + controllerName);
            }
        }
    }
});