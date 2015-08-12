'use strict';

/**
 * @ngdoc service
 * @name eialistsApp.dataService
 * @description
 * # dataService
 * Factory in the eialistsApp.
 */
angular.module('eialistsApp')
  .factory('dataService', function () {
    var Response = Parse.Object.extend('Response');

    // Public API here
    return {
      save: function(data) {
        var response = new Response();
        var lists = [];
        var interests = [];
         
        JSON.parse(JSON.stringify(data.lists), function(k, v){
          if(v === true ){ lists.push(k); }
          return v;
        });

        JSON.parse(JSON.stringify(data.interests), function(k, v){
          if(v){ interests.push(k); }
          return v;
        });
        console.log(lists);
        console.log(interests);
        response.set('name', data.name);
        response.set('email', data.email);
        response.set('frequency', data.frequency.toString());
        response.set('lists', lists);
        response.set('interests', interests);

        response.save().then(function(data){
          console.log('Successfully saved data');
        }, function(error){ 
          console.log('Error: ' + ' ' + error.message);
        });
      }
    };
  });
