var bookStoreAppModule=angular.module('bookStoreApp',['ngRoute','bookStoreCtr']);

bookStoreAppModule.config(function($routeProvider){
    $routeProvider.when('/list',{
        templateUrl:"view/booklist.html",
        controller:"booklistCtr"
    }).when('/hello',{
        templateUrl:"view/hello.html",
        controller:"bookhelloCtr"
    }).otherwise({
        redirectTo:'/hello'
    });

});