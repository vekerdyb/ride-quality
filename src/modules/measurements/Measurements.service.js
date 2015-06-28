(() => {

  function Measurement($q, locker) {
    let id;
    return {
      start(newId) {
        var deferred = $q.defer();
        id = newId;
        locker.put('measurements-' + id, []);
        deferred.resolve(true);
        return deferred.promise;
      },
      save: function(measurement) {
        var deferred = $q.defer();
        locker.put('measurements-' + id, function (current) {
          current.push(measurement);
          return current;
        });
        deferred.resolve(true);
        return deferred.promise;
      },
      all() {
        var deferred = $q.defer();
        deferred.resolve(locker.all());
        return deferred.promise;
      }
    }

  }

  Measurement.$inject = [
    '$q',
    'locker'
  ];

  let dependencies = [
    'angular-locker'
  ];

  angular.module('riqu.measurements.service', dependencies)
    .factory('Measurement', Measurement)
})();
