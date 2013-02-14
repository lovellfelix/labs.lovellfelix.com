'use strict';

var labsApp = angular.module('labsApp', [])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:projectId', {
        templateUrl: 'views/detail.html', 
        controller: "DetailCtrl"})
     
      .otherwise({
        redirectTo: '/'
      });
  }]);