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

.config(['$locationProvider', '$routeProvider', '$resourceProvider',
        function($locationProvider, $routeProvider, $resourceProvider) {
          
  $locationProvider.hashPrefix('!');
          
  $routeProvider.otherwise({redirectTo: '/Students'});
  
  $resourceProvider.defaults.stripTrailingSlashes = false;
//  $resourceProvider.defaults.useXDomain = true;
//  $resourceProvider.defaults.withCredentials = true;
//  delete $resourceProvider.defaults.headers.common["X-Requested-With"];
//  $resourceProvider.defaults.headers.common["Accept"] = "app/json";
//  $resourceProvider.defaults.headers.common["Content-Type"] = "app/json";
          
}]);
