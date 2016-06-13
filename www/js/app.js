// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($rootScope, $ionicPlatform, $timeout) {

  var logSuccess = function(){
    for(var i=0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  };
  var logError = function() {
    for(var i=0; i < arguments.length; i++) {
      console.error(arguments[i]);
    }
  };

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $rootScope.initializeCardflight();

  });

  $rootScope.initializeCardflight = function() {
    var params = {
      apiToken: "00a7d971d0ed1ae6a82337990346ebf6",
      accountToken: "acc_0b67c68d1f21525d"
    }

    ServPlugin.initializeCardReader(logSuccess, logError, params);

    ServPlugin.waitForCardSwipe({type: 'manual'});
  }

  // Show toast notification, then hide it 5 seconds later
  $rootScope.showToastNotification = function(message) {
    console.log("TOAST WHAT: " + message);
    $timeout.cancel($rootScope.toastNotificationTimeout);
    $rootScope.toastNotification = message;

    $rootScope.toastNotificationTimeout = $timeout(function() {
      $rootScope.toastNotification = "";
    }, 5000);
  }


    // CardFlight reader event listeners
  document.addEventListener("readerIsAttached", function(event) {
    $rootScope.$apply(function() {
      $rootScope.cardReaderStatus = "attached (not readable)";
      $rootScope.$broadcast("cardAttached");
      $rootScope.showToastNotification("Card reader attached. Attempting connection.");
    });
  }, false);

  document.addEventListener("readerIsDisconnected", function(event) {
    $rootScope.$apply(function() {
      $rootScope.cardReaderStatus = "disconnected";
      $rootScope.$broadcast("cardDisconnected");
      $rootScope.showToastNotification("Card reader disconnected from device.");
    });
  }, false);

  document.addEventListener("readerIsConnecting", function(event) {
    $rootScope.$apply(function() {
      $rootScope.cardReaderStatus = "connecting...";
      $rootScope.$broadcast("cardConnecting");
      $rootScope.showToastNotification("Card reader disconnected from device.");
    });
  }, false);

  document.addEventListener("readerIsConnected", function(event) {
    $rootScope.$apply(function() {
      $rootScope.cardReaderStatus = "connected";
      $rootScope.$broadcast("cardConnected");
      $rootScope.showToastNotification("Card reader successfully connected!");
    });
  }, false);

  // Events for manual card entry
  document.addEventListener("manualCardInvalid", function(event) {
    $rootScope.$apply(function() {
      $rootScope.$broadcast("manualCardInvalid");
    });
  }, false);

  document.addEventListener("manualCardValid", function(event) {
    $rootScope.$apply(function() {
      $rootScope.$broadcast("manualCardValid");
    });
  }, false);

  // Events for EMV entry
  document.addEventListener("emvBatteryLow", function(event) {
    $rootScope.$apply(function() {
      $rootScope.$broadcast("emvBatteryLow");
      $rootScope.showToastNotification("EMV reader battery is low. Please charge it.");
    });
  }, false);

  document.addEventListener("emvCardRemoved", function(event) {
    $rootScope.$apply(function() {
      $rootScope.$broadcast("emvCardRemoved");
    });
  }, false);

  document.addEventListener("emvCardDipped", function(event) {
    $rootScope.$apply(function() {
      $rootScope.$broadcast("emvCardDipped");
    });
  }, false);

  document.addEventListener("processingEMVCard", function(event) {
    $rootScope.$apply(function() {
      $rootScope.$broadcast("processingEMVCard", {data: event["detail"]["data"]});
    });
  }, false);

  document.addEventListener("emvMessage", function(event) {
    $rootScope.$apply(function() {
      $rootScope.$broadcast("emvMessage", {message: event["detail"]["message"]});
    });
  }, false);

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // Each tab has its own nav history stack:

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
