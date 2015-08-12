'use strict';

/**
 * @ngdoc function
 * @name eialistsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eialistsApp
 */
angular.module('eialistsApp')
  .controller('MainCtrl', ['$scope', '$location', '$route', '$rootScope', function ($scope, $location, $route, $rootScope) {
    $rootScope.home = function (){
      return true;
    }

  }]);
