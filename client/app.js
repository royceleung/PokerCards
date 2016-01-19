angular.module('myApp', [
  'ngRoute', 
  'myApp.flashCards', 
  'myApp.services',
  'myApp.pokerCards'
])

.config(function($routeProvider) {
  $routeProvider
    .otherwise({
      redirectTo: '/flashCards'
    });
});