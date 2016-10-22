'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ngResource',
    'myApp.view1.StudentService'
])

.config(['$routeProvider', '$locationProvider', 
        function( $routeProvider, $locationProvider) {
          
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('app/view1', {
    templateUrl: 'app/view1/view1.html',
    controller: 'View1Ctrl'
    })
  
    .otherwise({redirectTo: 'app/view1'
    });
}]);
