'use strict';

angular.module('myApp.Studentlist.StudentService', ['ngResource'])

  .factory('Studentservice',['$resource',function($resource){

        return $resource('https://studentliste.herokuapp.com/students/:id')
        
  }]);