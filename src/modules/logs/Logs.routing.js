(() => {

  let LogsRouting = ($stateProvider) => {
    $stateProvider
      .state('logs', {
        parent: 'tab',
        url: '/logs',
        views: {
          'tab-logs': {
            templateUrl: 'modules/logs/Logs.html',
            controller: 'LogsController as logs'
          }
        }
      })
    ;
  };

  LogsRouting.$inject = ['$stateProvider'];
  let dependencies = [
    'ionic'
  ];

  angular.module('riqu.logs.routing', dependencies)
    .config(LogsRouting)
})();
