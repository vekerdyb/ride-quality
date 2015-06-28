(() => {

  let MeasurementsRouting = ($stateProvider) => {
    $stateProvider
      .state('record', {
        parent: 'tab',
        url: '/record',
        views: {
          'tab-record': {
            templateUrl: 'modules/measurements/record/Record.html',
            controller: 'RecordController as record'
          }
        }
      })
    ;
  };

  MeasurementsRouting.$inject = ['$stateProvider'];
  let dependencies = [
    'ionic'
  ];

  angular.module('riqu.measurements.routing', dependencies)
    .config(MeasurementsRouting)
})();
