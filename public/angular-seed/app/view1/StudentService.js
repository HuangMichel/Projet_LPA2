'use strict';

angular.module('myApp.view1.StudentService', ['ngResource','ngRoute'])

  .factory('StudentService',['$resource',function($resource){

         return $resource('/students/:id')
        
  }] );