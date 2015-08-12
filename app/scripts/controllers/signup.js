'use strict';

/**
 * @ngdoc function
 * @name eialistsApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the eialistsApp
 */
angular.module('eialistsApp')
  .controller('SignupCtrl', ['$scope', '$rootScope', '$localStorage', '$sessionStorage', '$location', 'dataService', function ($scope, $rootScope, $localStorage, $sessionStorage, $location, dataService) {
    $rootScope.home = '';
    
    $scope.$storage = $localStorage.$default({
      frequency: 2
    });
    $scope.data = $scope.$storage;
    /**
     * @name go
     * @type method 
     * @description 
     * # go
     * convenience method to navigate between routes
     */
    $scope.go = function(path) {
      $location.path(path);
    };
    /**
     * @name submitData
     * @type method
     * @description 
     * # submitData
     * persist user data to parse
     */
    $scope.submitData = function() {
      if($scope.data.name != '' || $scope.data.email != '' || (typeof($scope.data.name) == 'undefined') || (typeof($scope.data.email) == 'undefined')){
        dataService.save($scope.data);
        $scope.go('/thankyou');
        $localStorage.$reset();
      }else {
        return;
        alert("We can't seem to find your name and email :(");
      }

    };
  }]);

