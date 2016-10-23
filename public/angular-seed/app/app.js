'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngRoute',
    'myApp.Studentlist',
    'myApp.view2',
    'myApp.version',
    'ngResource',
    'myApp.Studentlist.StudentService'
])

.config(['$locationProvider', '$routeProvider',
        function($locationProvider, $routeProvider) {
          
  $locationProvider.hashPrefix('!');
          
  $routeProvider.otherwise({redirectTo: '/Students'});
          
}]);
