'use strict';

angular
  .module('itunesWebUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    //$httpProvider.defaults.headers.common = 'Content-Type: application/json';
    //$httpProvider.defaults.headers.common.Accept = 'application/json';    
    //$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  
  .factory('itunesService', function($http, $q){
      var api_url = "http://127.0.0.1:8081/api/itunes/2.0";
      return {
        play: function(){
          var url = api_url + "/play";
          var defer = $q.defer();
          $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {
            defer.resolve(data);
          })
          .error(function (data, status, headers, config) {
            defer.reject(status);
          });
          return defer.promise;
        },
        pause: function(){
          var url = api_url + "/pause";
          var defer = $q.defer();
          $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {
            defer.resolve(data);
          })
          .error(function (data, status, headers, config) {
            defer.reject(status);
          });
          return defer.promise;
        },
        next: function(){
          var url = api_url + "/next";
          var defer = $q.defer();
          $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {
            defer.resolve(data);
          })
          .error(function (data, status, headers, config) {
            defer.reject(status);
          });
          return defer.promise;
        },
        prev: function(){
          var url = api_url + "/prev";
          var defer = $q.defer();
          $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {
            defer.resolve(data);
          })
          .error(function (data, status, headers, config) {
            defer.reject(status);
          });
          return defer.promise;
        },
        quit: function(){
          var url = api_url + "/quit";
          var defer = $q.defer();
          $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {
            defer.resolve(data);
          })
          .error(function (data, status, headers, config) {
            defer.reject(status);
          });
          return defer.promise;
        },
        status: function(){

          var url = api_url + "/status";
          var defer = $q.defer();
          $http({method: 'GET', url: url}).success(function (data, status, headers, config) {
            defer.resolve(data);
          }).error(function (data, status, headers, config) {
            defer.reject(status);
          });
          return defer.promise;
        }
      }

  });
