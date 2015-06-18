angular.module('starter.services', ['ionic'])

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })

  .factory('Popup', ['$ionicPopup', function ($ionicPopup) {
    return {
      error: function (message) {
        var alertPopup = $ionicPopup.alert({
          title: 'An error has occured.',
          template: message
        });
        alertPopup.then(function (res) {
          console.log('The user has been alerted: ', message);
        });

      }
    }

  }])

  .factory('MeasurementsHelper', function () {
    return {
      getNewId: function () {
        return new Date().getTime();
      }
    }
  })

  .factory('Measurements', ['locker', '$q', function(locker, $q) {
    var id;
    return {
      start: function (newId) {
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
      all: function () {
        var deferred = $q.defer();
        deferred.resolve(locker.all());
        return deferred.promise;
      }
    }
  }])
;
