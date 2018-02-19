angular.module('googleTranslate', [])
  .service('googleTranslate', function($http) {
    this.search = function(query, callback) {
      $http.post('http://127.0.0.1:3000/phrases', {
          phrase: query,
          source: 'en',
          target: 'es'
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
          callback(response);// assign results to app data
        }, function error(response) {
          console.log('Phrases were not fetched from server');
        });
    }

    this.deletePhrase = function(phrase, callback) {
      $http.delete(`http://127.0.0.1:3000/phrases`, {params: {'phrase': JSON.stringify(phrase)}})
        .then(function success(response) {
          console.log('I received a response');
          callback();
        }, function error(response) {
          console.log('Failed to deleted phrase');
        });
    }
  })