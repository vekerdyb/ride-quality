(() => {

  function Popup($ionicPopup) {
    return {
      error(message) {
        var alertPopup = $ionicPopup.alert({
          title: 'An error has occured.',
          template: message
        });
        alertPopup.then(function (res) {
          console.log('The user has been alerted: ', message);
        });
      }
    }
  }

  MeasurementsHelper.$inject = [
    '$ionicPopup'
  ];

  let dependencies = [
    'ionic'
  ];

  angular.module('riqu.popups.service', dependencies)
    .factory('Popup', Popup)
})();
