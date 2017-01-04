'use strict';
//动态注入
define(['angular', ], function () {
    var app = angular.module('routeRegister', []);

    app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
            //保存依赖注册器到app

            //app.register =
            //{
            //    controller: $controllerProvider.register,
            //    directive: $compileProvider.directive,
            //    filter: $filterProvider.register,
            //    factory: $provide.factory,
            //    service: $provide.service
            //};

            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;

        }]);

    return app;
});
