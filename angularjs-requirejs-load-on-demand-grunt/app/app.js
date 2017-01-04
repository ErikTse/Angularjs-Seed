'use strict';

define([
	'angular',
	'angularRoute',
    'common/route/routeRegister',
    'common/route/routeResolver',
    'common/version/version'
], function (angular) {

    // Declare app level module which depends on views, and components
    var app = angular.module('myApp', [
		'ngRoute',
        'routeRegister',
        'routeResolver',
        'myApp.version'
    ]);

    ////��̬ע������
    //app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    //   function ($controllerProvider, $compileProvider, $filterProvider, $provide) {

    //       //��¼ע������������ص�controller�����ֶ�ע�ᣬ��Ȼ�����Ҳ���controller���쳣
    //       app.register =
    //       {
    //           controller: $controllerProvider.register,
    //           directive: $compileProvider.directive,
    //           filter: $filterProvider.register,
    //           factory: $provide.factory,
    //           service: $provide.service
    //       };
    //   }]);

    //·������
    app.config(['$routeProvider', 'routeResolverProvider',
    function ($routeProvider, routeResolverProvider) {

        //Change default views and controllers directory using the following:
        //routeResolverProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');

        //Define routes - controllers will be loaded dynamically
        var route = routeResolverProvider.route;

        $routeProvider
            //route.resolve() now accepts the convention to use (name of controller & view) as well as the 
            //path where the controller or view lives in the controllers or views folder if it's in a sub folder. 
            //For example, the controllers for customers live in controllers/customers and the views are in views/customers.
            //The controllers for orders live in controllers/orders and the views are in views/orders
            //The second parameter allows for putting related controllers/views into subfolders to better organize large projects
            ////Thanks to Ton Yeung for the idea and contribution

            //.when('/customers', route.resolve('Customers', 'customers/', 'vm'))
            //.when('/customeredit/:customerId', route.resolve('CustomerEdit', 'customers/', 'vm', true))

            .when('/view1', route.resolveEx({
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl',
                dependencies: ['/app/view1/view1.js']
            }))

            .when('/view2', route.resolveEx({
                templateUrl: 'view2/view2.html',
                controller: 'View2Ctrl',
                dependencies: ['/app/view2/view2.js']
            }))

            .when('/view3', route.resolveEx({
                templateUrl: 'view3/view3.html',
                controller: 'View3Ctrl',
                dependencies: ['/app/view3/view3.js', '/app/view3/view3Directive.js']
            }))

            .otherwise({ redirectTo: '/view1' });

    }]);

    return app;
});
