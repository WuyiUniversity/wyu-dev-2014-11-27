//这个是程序的控制器


var bookStoreCtr=angular.module("bookStoreCtr",[]);
//该模块是主模块所依赖的模块

bookStoreCtr.controller("booklistCtr",['$scope',function($scope){
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
    //初始化数组显示
    $scope.pageClass='list';
}]);



bookStoreCtr.controller("bookhelloCtr",['$scope',function($scope){
  $scope.msg="hello world";
  $scope.text={msg:"hello ng-bind"};

  $scope.pageClass='hello';
}]);



bookStoreCtr.controller("bookloginCtr",['$scope',function($scope){
    $scope.UserInfo={
        email:"123123213@qq.com",
        password:"111",
        autoLogin:true

    };


$scope.password={show:true};


    $scope.showData=function(){
        console.log($scope.UserInfo);
        $scope.isRed=true;
    }

    $scope.setData=function(){
        $scope.UserInfo.email='love@qq.com';
        $scope.isGreen=true;
    }

    $scope.showPassword=function(){
        $scope.password.show = !$scope.password.show;
    }

     $scope.pageClass='login';
}]);

bookStoreCtr.controller("bookcssCtr",['$scope',function($scope){
    $scope.txt={css:"css3"};
    $scope.pageClass="css3";
}]);




var mystateModuel=new angular.module("mystate",[]);
mystateModuel.controller('state1.list', ['$scope', function($scope){
    $scope.items = ["A", "List", "Of", "Items"];
}])