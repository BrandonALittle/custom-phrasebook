angular.module('googleTranslate', [])
  .service('googleTranslate', function($http) {
    console.log(`I'm gonna search`);
    this.search = function(query, callback) {
      $http.post('http://127.0.0.1:3000/phrases', {
          phrase: query,
          source: 'en',
          target: 'vi'
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(function(response) {
        if (callback) {
          callback(response);
        }
      }, function(response) {
        console.log('An error occured with the translation attempt');
      });
    }

    this.getPhrases = function(callback) {
      $http.get('http://127.0.0.1:3000/phrases')
        .then(function success(response) {
          console.log("service module [line 26] returns : ", response);
          callback(response);// assign results to app data
        }, function error(response) {
          console.log('Phrases were not fetched from server [googleTranslate.js line 28]');
        });
    }
  })