'use strict';

angular.module('myApp.view1', ['ngRoute', 'StudentService'])

  .controller('View1Ctrl', ['$scope','StudentService',function($scope, StudentService) {

    $scope.students = StudentService.query(function(){
      console.log($scope.students)
    });
    
}]);