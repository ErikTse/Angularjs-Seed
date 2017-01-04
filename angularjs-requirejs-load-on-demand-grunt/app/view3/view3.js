'use strict';

define([
	'common/route/routeRegister'
], function (register) {

    register.controller('View3Ctrl', ['$scope', '$injector', function ($scope, $injector) {

        $scope.details = 'view3 detail';

    }]);
});
