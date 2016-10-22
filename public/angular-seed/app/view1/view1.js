'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.view1.StudentService'])

.config(['$routeProvider', function( $routeProvider) {

  $routeProvider
    .when('app/view1', {
    templateUrl: 'app/view1/view1.html',
    controller: 'View1Ctrl'
    });

}])

  .controller('View1Ctrl', ['$scope','Studentservice', function($scope, Studentservice) {

    $scope.students = Studentservice.query(function(){
      console.log($scope.students)
    });
//    $scope.users = Studentservice.query();
}]);