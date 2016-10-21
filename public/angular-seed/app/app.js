'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ngResource',
    'StudentService'
])

.config(['$routeProvider', '$locationProvider', 
        function( $routeProvider, $locationProvider) {
          
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
    })
  
    .otherwise({redirectTo: '/view1'
    });
}]);
