'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.view1.StudentService'])

  .controller('View1Ctrl', ['$scope','Studentservice', function($scope, Studentservice) {

    $scope.students = Studentservice.query(function(){
     console.log($scope.students)
    });
//    $scope.users = Studentservice.query();
}]);