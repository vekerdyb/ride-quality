(() => {

  let TabsRouting = ($stateProvider) => {
    $stateProvider
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "modules/tabs/Tabs.html"
      })
    ;
  };

  TabsRouting.$inject = ['$stateProvider'];
  let dependencies = [
    'ionic'
  ];

  angular.module('riqu.tabs.routing', dependencies)
    .config(TabsRouting)
})();
