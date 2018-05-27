var MyApp= angular.module('MyApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',
        {
          templateUrl: './src/app/new-place/new-place.component.html',
          controller: window.environmentController
        })
      .otherwise({ redirectTo: '/' });
  });
