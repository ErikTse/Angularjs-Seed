
define(['common/route/routeRegister'],
    function (register) {

        register.directive('view3Directive', [function () {
            return {
                //scope: {
                //    text: "@Attributes",  //@ 或 @attr - 将本地作用域成员成员和DOM属性绑定。绑定结果总是一个字符串
                //    twoWayBind: "=Bindings",  //= 或 =expression(表达式) - 在本地作用域属性和父作用域属性间建立一个双向的绑定
                //    oneWayBind: "&Expressions"   //& 或 &attr - 提供了一种能在父作用域下执行表达式的方法
                //},
                restrict: "E",
                replace: true,
                template: '<p>this is view3 directive</p>',
                link: function (scope, element, attrs) {

                }
            }
        }]);
    });