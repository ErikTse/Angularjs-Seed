'use strict';

define([
    'angular',
    'common/version/version-directive',
    'common/version/interpolate-filter'],
	function(angular, versionDirective, interpolateFilter) {
		angular.module('myApp.version', [
		  'myApp.version.interpolate-filter',
		  'myApp.version.version-directive'
		])
		.value('version', '0.3');
});