// 这里是routerUI启动js
var myUIRoute = angular.module('MyUIRoute', ['ui.router', 'ngAnimate','mystate']);
//这里实例化模块，依赖于我们新加入的模块 ui.router
myUIRoute.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "view/state1.html"
            //这里没有调用任何控制器
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "view/state1.list.html",
            controller: "state1.list"
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "view/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "view/state2.list.html",
            controller: function($scope) {
                $scope.things = ["B", "Set", "Of", "Things"];
            }
        });
});
