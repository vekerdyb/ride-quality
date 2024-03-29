// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('riqu', [
  'ionic',
  'riqu.config',
  'riqu.measurements',
  'riqu.logs',
  'riqu.tabs'
])

  .run(($ionicPlatform) => {
    $ionicPlatform.ready(() => {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

  .config(($urlRouterProvider) => {
    // if none of the states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/record');

  })

  .config(['lockerProvider', (lockerProvider) => {
    lockerProvider.defaults({
      driver: 'local',
      namespace: 'riqu',
      separator: '.',
      eventsEnabled: true,
      extend: {}
    });
  }])

;
