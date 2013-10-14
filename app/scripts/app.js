'use strict';

angular.module('sitdownApp', ['ui.codemirror', 'angularLocalStorage', 'dropstore-ng'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
