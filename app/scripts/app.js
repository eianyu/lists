'use strict';

/**
 * @ngdoc overview
 * @name eialistsApp
 * @description
 * # eialistsApp
 *
 * Main module of the application.
 */
angular
  .module('eialistsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ParseService',
    'ngStorage'
  ])
   
  .run(['ParseSDK', '$rootScope', function(ParseSDK, $rootScope){
      $rootScope.home = '';
  }])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/lists', {
        templateUrl: 'views/lists.html',
        controller: 'SignupCtrl'
      })
      .when('/interests', {
        templateUrl: 'views/interests.html',
        controller: 'SignupCtrl'
      })
      .when('/thankyou', {
         templateUrl: 'views/thankyou.html',
         controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }]);
