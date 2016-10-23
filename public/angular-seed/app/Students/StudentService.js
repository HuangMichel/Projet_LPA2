'use strict';

angular.module('myApp.Studentlist.StudentService', ['ngResource'])

  .factory('Studentservice',['$resource',function($resource){
    var data = $resource('/students/:id.json',{students: '@id'});
    return data;
  }]);