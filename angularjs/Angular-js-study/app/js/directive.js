var directiveMod=angular.module("MyDirective",[]);
//定义一个模块


directiveMod.directive('hello',  function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'AECM', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<p>hello world</p>',
        // templateUrl: '',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    };
});


directiveMod.run( function($templateCache){
    $templateCache.put("h","view/login.html");
})

directiveMod.directive('hello1',  function($templateCache){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<p>替换了内容<div ng-transclude></div></p>',
        // templateUrl: $templateCache.get("h"),//这是一个模板路径
        // replace: false,
        transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            //iElm 是用来绑定DOM上的监听时间的，下面就是鼠标进入事件
            iElm.bind("mouseenter",function(){
                $scope.$apply(iAttrs.howtoload);
                console.log($scope.$apply(iAttrs.a));
            });
        }
    };
});


directiveMod.controller('myhello1', function($scope){
    $scope.loadData=function(){
        console.log("正在加载数据……1");
    }
    
})

directiveMod.controller('myhello2', function($scope){
    $scope.loadData2=function(){
        console.log("正在加载数据……2");
    }
    
})



var MyDirective=angular.module("MyDirective2",[]);

MyDirective.directive('superman', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: function($scope, $element, $attrs, $transclude) {
            $scope.abilities=[];
            // 
            this.addStrength=function(){ //想变量添加
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        // template: 'hello',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            iElm.addClass('btn btn-primary');
            iElm.bind("mouseenter", function() {
                console.log($scope.abilities);
            });
        }
    };
});


MyDirective.directive("strength", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            // 这里的supermanCtrl 就是我们所依赖的父控制器（可以调用我们上面用this定义的方法）
            supermanCtrl.addStrength();
        }
    }
});
MyDirective.directive("speed", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});
MyDirective.directive("light", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});