(() => {

  function Popup($ionicPopup) {
    return {
      error(message, fn) {
        let alertPopup = $ionicPopup.alert({
          title: 'An error has occured.',
          template: message
        });
        return alertPopup.then((res) => {
          if (angular.isDefined(fn)) {
            fn();
          }
          console.log('The user has been alerted: ', message);
        });
      }
    }
  }

  Popup.$inject = [
    '$ionicPopup'
  ];

  let dependencies = [
    'ionic'
  ];

  angular.module('riqu.popups.service', dependencies)
    .factory('Popup', Popup)
})();
