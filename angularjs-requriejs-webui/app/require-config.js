'use strict';

require.config({
    paths: {
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/angular/angular-route'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute': {
            deps: ['angular'],
            exports: 'angularRoute'
        }
    },
    //deps: [],

    baseUrl: '/app',
});

require([
	'angular',
	'app'
], function (angular, app) {
    angular.element().ready(function () {
        // bootstrap the app manually
        angular.bootstrap(document, ['myApp']);
    });
}
);