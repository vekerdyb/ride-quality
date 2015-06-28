(() => {

  class RecordController {
    constructor($cordovaDeviceMotion, Measurement, MeasurementHelper, Popup) {
      let options = {frequency: 1000 / 25};
      this.running = false;
      this.buttonText = "Start recording";
      this.$cordovaDeviceMotion = $cordovaDeviceMotion;
      this.Measurement = Measurement;
      this.MeasurementHelper = MeasurementHelper;
      this.Popup = Popup;
    }

    measurementSaved(result) {
    }

    measurementSaveFailed(error) {
      this.stop();
      this.Popup.error('Could not save recorded data.');
    }

    measurementReceived(result) {
      result.id = this.id;
      this.currentAcceleration = result;
      this.Measurement.save(result).then(
        this.measurementSaved.bind(this),
        this.measurementSaveFailed.bind(this)
      );
    }

    measurementFailed() {
      this.stop()
    }

    toggleWatch() {
      if (this.running) {
        this.stop(this.watch);
      } else {
        let id = this.start();
        try {
          this.watch = this.$cordovaDeviceMotion.watchAcceleration(this.options);
          this.watch.then(
            null,
            this.measurementFailed.bind(this),
            this.measurementReceived.bind(this)
          );
        } catch (e) {
          this.Popup.error('The sensor data cannot be read');
          this.stop();
        }
      }

    }

    recordingStarted() {
      this.buttonText = "Stop recording";
      this.running = true;
    }

    start() {
      var newId = this.MeasurementHelper.getNewId();
      this.Measurement.start(newId).then(
        this.recordingStarted.bind(this)
      );
      return newId;
    }

    stop(watch) {
      this.buttonText = "Start recording";
      this.running = false;
      if (angular.isDefined(this.watch)) {
        this.watch.clearWatch();
      }
    }
  }

  RecordController.$inject = [
    '$cordovaDeviceMotion',
    'Measurement',
    'MeasurementHelper',
    'Popup'
  ];

  let dependencies = [
    'ngCordova',
    'riqu.measurements.service',
    'riqu.measurements.helper.service',
    'riqu.popups.service'
  ];

  angular.module('riqu.measurements.record.controller', dependencies)
  .controller('RecordController', RecordController)
})();