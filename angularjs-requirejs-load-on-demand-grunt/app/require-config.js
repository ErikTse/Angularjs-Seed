'use strict';

require.config({
    //path映射那些不直接放置于baseUrl下的模块名.
    //设置path时起始位置是相对于baseUrl的，除非该path设置以"/"开头或含有URL协议（如http:）。
    //用于模块名的path不应含有.js后缀，因为一个path有可能映射到一个目录。路径解析机制会自动在映射模块名到path时添加上.js后缀。
    paths: {
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/angular/angular-route'
    },

    //为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。
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

    //所有模块的查找根路径。
    //如未显式设置baseUrl，则默认值是加载require.js的HTML所处的位置。如果用了data-main属性，则该路径就变成baseUrl。
    baseUrl: '/app',
});

//启动
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