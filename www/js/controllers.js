angular.module('starter.controllers', ['ngCordova'])

  .controller('DashCtrl', function ($scope, $cordovaDeviceMotion, Popup, MeasurementsHelper, Measurements) {
    function start() {
      var newId = MeasurementsHelper.getNewId();
      Measurements.start(newId).then(
        function () {
          $scope.buttonText = "Stop recording";
          $scope.running = true;
        }
      );
      return newId;
    }

    function stop(watch) {
      $scope.buttonText = "Start recording";
      $scope.running = false;
      if (angular.isDefined(watch)) {
        watch.clearWatch();
      }
    }

    var options = {frequency: 1000 / 25};
    $scope.running = false;
    $scope.buttonText = "Start recording";
    var watch;
    $scope.toggleWatch = function () {
      if ($scope.running) {
        stop(watch);
      } else {
        var id = start();
        try {
          watch = $cordovaDeviceMotion.watchAcceleration(options);
          watch.then(
            null,
            function (error) {
              stop();
            },
            function (result) {
              result.id = id;
              $scope.currentAcceleration = result;
              Measurements.save(result).then(
                function (sucess) {

                },
                function (failure) {
                  stop();
                  Popup.error('Could not save recorded data.');
                }
              )
            });
        } catch (e) {
          Popup.error('The sensor data cannot be read');
          stop();
        }
      }
    }
  })

  .controller('LogsCtrl', function ($scope, Measurements) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    Measurements.all().then(
      function(measurements) {
        $scope.logs = measurements;
      }
    );
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
