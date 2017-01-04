'use strict';

define(['angular'], function (angular) {

    var routeResolver = function () {

        this.$get = function () {
            return this;
        };

        //路由配置
        this.routeConfig = function () {
            var viewsDirectory = '/app/',
                controllersDirectory = '/app/',

            setBaseDirectories = function (viewsDir, controllersDir) {
                viewsDirectory = viewsDir;
                controllersDirectory = controllersDir;
            },

            getViewsDirectory = function () {
                return viewsDirectory;
            },

            getControllersDirectory = function () {
                return controllersDirectory;
            };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        //路由异步加载
        this.route = function (routeConfig) {

            var resolve = function (baseName, path, controllerAs, secure) {
                if (!path)
                    path = '';

                var routeDef = {};
                routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
                routeDef.controller = baseName + 'Controller';

                if (controllerAs)
                    routeDef.controllerAs = controllerAs;
                routeDef.secure = (secure) ? secure : false;

                routeDef.resolve = {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {
                        var dependencies = [routeConfig.getControllersDirectory() + path + baseName + '.js'];
                        return resolveDependencies($q, $rootScope, dependencies);
                    }]
                };

                return routeDef;
            },

            //route={
            //       templateUrl:***,
            //       controller:***,
            //       controllerAs:***,
            //       secure:***,
            //}
            resolveEx = function (route) {
                var routeDef = {};
                routeDef.templateUrl = routeConfig.getViewsDirectory() + route.templateUrl;
                routeDef.controller = route.controller;
                if (route.controllerAs)
                    routeDef.controllerAs = route.controllerAs;
                routeDef.secure = route.secure ? route.secure : false;

                routeDef.resolve = {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {
                        var dependencies = route.dependencies;
                        return resolveDependencies($q, $rootScope, dependencies);
                    }]
                };

                return routeDef;
            },

            resolveDependencies = function ($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply()
                });

                return defer.promise;
            };


            return {
                resolve: resolve,
                resolveEx: resolveEx
            }
        }(this.routeConfig);

    };

    var servicesApp = angular.module('routeResolver', []);

    //Must be a provider since it will be injected into module.config()    
    servicesApp.provider('routeResolver', routeResolver);
});
