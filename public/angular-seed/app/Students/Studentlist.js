'use strict';

angular.module('myApp.Studentlist', ['ngRoute', 'myApp.Studentlist.StudentService'])
.config(['$routeProvider', function( $routeProvider) {

  $routeProvider
    .when('/Students', {
    templateUrl: 'app/Students/Students.html',
    controller: 'StudentsCtrl'
    });

}])

  .controller('StudentsCtrl', ['$scope','Studentservice', function($scope, Studentservice) {

    $scope.students = Studentservice.query();
    
}]);