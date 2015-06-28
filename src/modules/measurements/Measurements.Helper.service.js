(() => {

  function MeasurementsHelper() {
    return {
      getNewId() {
        return new Date().getTime();
      }
    }
  }

  MeasurementsHelper.$inject = [
  ];

  let dependencies = [
  ];

  angular.module('riqu.measurements.helper.service', dependencies)
    .factory('MeasurementsHelper', MeasurementsHelper)
})();
