'use strict';

/**
 * @ngdoc service
 * @name ParseSDK 
 * @description
 * # parseService
 * Factory in the ParseSDK.
 */
angular.module('ParseService', [])
  .factory('ParseSDK', function () {
  
    /** 
     * Initialize Parse with API ID and API Key
     */
    Parse.initialize('Rm4mk7bk8QzrofVATbIuJ4r6cPjo9lx7jukJL7er', 'CJ48fmbpCxp7qYWWGKyp1PKVxiXE2Y0Yc6QJh9GV');
    // Public API here
    return { ParseInitialized: true };
  });
