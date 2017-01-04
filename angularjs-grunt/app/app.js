'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.webConfig'
])
.config(['$httpProvider', function ($httpProvider) {

    //-------------$httpProvider--------------

    $httpProvider.defaults.withCredentials = true;      //÷ß≥÷øÁ”Ú∑¢ÀÕcookies
}])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/view1' });
}]);


