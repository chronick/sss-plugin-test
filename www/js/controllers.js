angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

  $scope.title = 'Serv Test';
  $scope.fn = function(arg) {
    console.log(arg);
  };
  $scope.manualSwipe = function() {
    ServPlugin.waitForCardSwipe(function(){}, function(){}, {type: 'manual'});
  }
  $scope.cardSwipe = function() {
    ServPlugin.waitForCardSwipe(function(){}, function(){}, {type: 'swipe'});
  }
  $scope.emvSwipe = function() {
    ServPlugin.waitForCardSwipe(function(){}, function(){}, {type: 'emv'});
  }
});
