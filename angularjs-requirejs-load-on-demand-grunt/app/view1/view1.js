'use strict';

define([
	'common/route/routeRegister'
], function (register) {

    //ÊÖ¶¯×¢²ácontroller
    register.controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.viewDetail = 'view1 detail';
    }]);
});

