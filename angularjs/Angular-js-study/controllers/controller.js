//控制器
function HelloController ($scope) {
    // 前端定义的一个HelloController 
    $scope.greeting={ text:"hello"};
}

function Cinput ($scope){
    $scope.greeting={};
}

function ShoppingCart ($scope) {
    //购物车控制器
    $scope.items=[
    {title:"one",quanity:8,price:3.58},
    {title:"tow",quanity:8,price:4.58},
    {title:"three",quanity:8,price:3.98}
    ];

    //alert($scope.items[1].title);
    
    $scope.remove=function(index){
        $scope.items.splice(index,1);
       //删除选择条目
    }
}


var myAppModule=angular.module("myApp",[]);
//建立一个关联myApp模块的对象

myAppModule.controller("ShowMsg",function($scope){
    var Msg={};
    Msg.text="hello world  I love you";
    $scope.Msg=Msg; //将Msg 赋予$scope 到前端去显示
});


myAppModule.controller("Update",function($scope){
    $scope.funding={str:0};
    $scope.compute=function() {
        $scope.funding.need=$scope.funding.str*10;
    }

    $scope.reqFunding=function(){
        window.alert("Sorry, please get more");
    }
});

myAppModule.directive("hello",function(){
    return {
        restrict:'E',
        template:"<div>hello world</div>",
        replace:false
    }
});



myAppModule.controller("ctr1",function($scope,$rootScope){
    //注意 这里的rootScope 中的中间的S 是大写的
    $scope.text={name:"xiaoming"};
    $rootScope.text1={rootmsg:"root Msg"};
})

myAppModule.controller("ctr2",function($scope){
})



myAppModule.controller("EventCtr",function($scope){
    $scope.count=0;

    $scope.$on("myEvent",function(){
        $scope.count++;
    });
});



var bookStoreCtr=angular.module("bookStoreCtr",[]);

bookStoreCtr.controller("booklistCtr",function($scope){
        $scope.books=[{
        title:"one",
        author:"Aone"
    },{
        title:"two",
        author:"Btwo"
    },{
        title:"two",
        author:"Btwo"
    }]
});



bookStoreCtr.controller("bookhelloCtr",function($scope){
  $scope.msg="hello world";
});