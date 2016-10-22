'use strict';

angular.module('myApp.view1.StudentService', ['ngResource'])

  .factory('Studentservice',['$resource',function($resource){

        return $resource('http://studentliste.herokuapp.com/students/:id.json', {student: '@i'})
        
  }]);

//angular.module('myApp.view1.StudentService').factory('Studentservice', ['$resource', function ($resource) {
//    return $resource('http://jsonplaceholder.typicode.com/users/:user.json',{user: "@user"});