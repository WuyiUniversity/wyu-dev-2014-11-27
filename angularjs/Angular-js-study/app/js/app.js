//程序的主要入口

var bookStoreAppModule=angular.module('bookStoreApp',['ngRoute','ngAnimate','bookStoreCtr']);
//这是程序的主要模块   后面的该模块所依赖的模块

bookStoreAppModule.config(function($routeProvider){
    //根据Url选择模板还有控制器
    $routeProvider.when('/list',{
        templateUrl:"view/booklist.html",
        controller:"booklistCtr"
    }).when('/hello',{
        templateUrl:"view/hello.html",
        controller:"bookhelloCtr"
    }).when('/css',{
        templateUrl:"view/css3.html",
        controller:"bookcssCtr"
    }).when('/login',{
        templateUrl:"view/login.html",
        controller:"bookloginCtr"
    }).otherwise({
        redirectTo:'/css'
    });

});