"use strict";angular.module("eialistsApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ParseService","ngStorage"]).run(["ParseSDK","$rootScope",function(a,b){b.home=""}]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/signup",{templateUrl:"views/signup.html",controller:"SignupCtrl"}).when("/lists",{templateUrl:"views/lists.html",controller:"SignupCtrl"}).when("/interests",{templateUrl:"views/interests.html",controller:"SignupCtrl"}).when("/thankyou",{templateUrl:"views/thankyou.html",controller:"SignupCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("eialistsApp").controller("MainCtrl",["$scope","$location","$route","$rootScope",function(a,b,c,d){d.home=function(){return!0}}]),angular.module("eialistsApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("eialistsApp").controller("SignupCtrl",["$scope","$rootScope","$localStorage","$sessionStorage","$location","dataService",function(a,b,c,d,e,f){b.home="",a.$storage=c.$default({frequency:2}),a.data=a.$storage,a.go=function(a){e.path(a)},a.submitData=function(){(""!=a.data.name||""!=a.data.email||"undefined"==typeof a.data.name||"undefined"==typeof a.data.email)&&(f.save(a.data),a.go("/thankyou"),c.$reset())}}]),angular.module("ParseService",[]).factory("ParseSDK",function(){return Parse.initialize("Rm4mk7bk8QzrofVATbIuJ4r6cPjo9lx7jukJL7er","CJ48fmbpCxp7qYWWGKyp1PKVxiXE2Y0Yc6QJh9GV"),{ParseInitialized:!0}}),angular.module("eialistsApp").factory("dataService",function(){var a=Parse.Object.extend("Response");return{save:function(b){var c=new a,d=[],e=[];JSON.parse(JSON.stringify(b.lists),function(a,b){return b===!0&&d.push(a),b}),JSON.parse(JSON.stringify(b.interests),function(a,b){return b&&e.push(a),b}),console.log(d),console.log(e),c.set("name",b.name),c.set("email",b.email),c.set("frequency",b.frequency.toString()),c.set("lists",d),c.set("interests",e),c.save().then(function(a){console.log("Successfully saved data")},function(a){console.log("Error:  "+a.message)})}}});