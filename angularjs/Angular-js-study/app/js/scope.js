var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
    $scope.ctrlFlavor="百威";
}])
myModule.directive("drink", function() {
    return {
        restrict:'AE',
        scope:{
            flavor:'@'
        },
        template:"<div>{{flavor}}</div>"
        // ,
        // link:function(scope,element,attrs){
        //  scope.flavor=attrs.flavor;
        // }
    }
});


myModule.controller('MyCtrl1', ['$scope', function($scope){
    $scope.ctrlFlavor="百威";
}])
myModule.directive("drink1", function() {
    return {
        restrict:'AE',
        scope:{
            flavor:'='
        },
        template:'<input type="text" ng-model="flavor"/>'
    }
});


myModule.controller('MyCtrl2', ['$scope', function($scope){
    $scope.sayHello=function(name){
        alert("Hello "+name);
    }
}])
myModule.directive("greeting", function() {
    return {
        restrict:'AE',
        scope:{
            greet:'&'
        },
        template:'<input type="text" ng-model="userName" /><br/>'+
                 '<button class="btn btn-default" ng-click="greet({name:userName})">Greeting</button><br/>'
    }
});