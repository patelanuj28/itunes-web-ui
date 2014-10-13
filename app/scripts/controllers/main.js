'use strict';

angular.module('itunesWebUiApp')
  .controller('MainCtrl', function ($scope, itunesService, $location, $http, $window, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var failureCb = function (status) {
		console.log(status);
	}

  $scope.status = "Anuj Patel";

  function status(data){
    $scope.track = data.track;  
    $scope.album = data.album; 
    $scope.playlist = data.playlist; 
    $scope.artist = data.artist; 
  }
    
  $scope.status = function () {  	
  	itunesService.status().then(function (data) {
    status(data)	
  	}, failureCb);
	};

  $scope.play = function () {   
    itunesService.play().then(function(data){status(data)});
  };
  $scope.next = function () {   
    itunesService.next().then(function(data){status(data)});
  };
	
  $scope.prev = function () {   
    itunesService.prev().then(function(data){status(data)});
  };
  $scope.pause = function () {   
    itunesService.pause().then(function(data){status(data)});
  };
  $scope.quit = function () {   
    itunesService.quit().then(function(data){status(data)});
  };
  
  $scope.intervalFunction = function(){
    $timeout(function() {
      $scope.status();
      $scope.intervalFunction();
    }, 10000)
  };
  
  $scope.status();
  //$scope.intervalFunction();
	
  })
  .controller('ContactCtrl', function ($scope, itunesService, $location, $http, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];    
  });
