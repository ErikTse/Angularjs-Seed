'use strict';

define([
	'common/route/routeRegister'
], function (register) {

    register.controller('View2Ctrl', ['$scope', '$injector', function ($scope, $injector) {

        //加载view2/ctrl2.js文件，手动注入
        require(['view2/ctrl2'], function (ctrl2) {
            // injector method takes an array of modules as the first argument
            // if you want your controller to be able to use components from
            // any of your other modules, make sure you include it together with 'ng'
            // Furthermore we need to pass on the $scope as it's unique to this controller
            $injector.invoke(ctrl2, this, { '$scope': $scope });
        })

    }]);
});
