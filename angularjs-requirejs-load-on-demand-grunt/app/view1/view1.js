'use strict';

define([
	'common/route/routeRegister'
], function (register) {

    //�ֶ�ע��controller
    register.controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.viewDetail = 'view1 detail';
    }]);
});

