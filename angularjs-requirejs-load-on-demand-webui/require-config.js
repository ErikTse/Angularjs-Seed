'use strict';

require.config({
    //pathӳ����Щ��ֱ�ӷ�����baseUrl�µ�ģ����.
    //����pathʱ��ʼλ���������baseUrl�ģ����Ǹ�path������"/"��ͷ����URLЭ�飨��http:����
    //����ģ������path��Ӧ����.js��׺����Ϊһ��path�п���ӳ�䵽һ��Ŀ¼��·���������ƻ��Զ���ӳ��ģ������pathʱ�����.js��׺��
    paths: {
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/angular/angular-route'
    },

    //Ϊ��Щû��ʹ��define()������������ϵ������ģ���"�����ȫ�ֱ���ע��"�ͽű��������͵������á�
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

    //����ģ��Ĳ��Ҹ�·����
    //��δ��ʽ����baseUrl����Ĭ��ֵ�Ǽ���require.js��HTML������λ�á��������data-main���ԣ����·���ͱ��baseUrl��
    baseUrl: '/app',
});

//����
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