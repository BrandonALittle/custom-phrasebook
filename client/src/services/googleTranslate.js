angular.module('googleTranslate', [])
  .service('googleTranslate', function($http) {
    console.log(`I'm gonna search`);
    this.search = function(query, callback) {
      $http.post('http://127.0.0.1:3000/phrases', {
          phrase: query,
          source: 'en',
          target: 'es',
          format: 'text'
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
  })