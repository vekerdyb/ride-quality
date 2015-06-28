(() => {

  class LogsController {

    constructor(Measurement) {
      Measurement.all().then(
        this.measurementsReceived.bind(this)
      );
    }

    measurementsReceived(measurements) {
      this.logs = measurements;
    }
  }

  LogsController.$inject = [
    'Measurement'
  ];

  let dependencies = [
    'riqu.measurements.service'
  ];

  angular
    .module('riqu.logs.controller', dependencies)
    .controller('LogsController', LogsController);
})();