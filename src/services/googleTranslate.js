angular.module('phrasebook')
  .service('googleTranslate', function($http) {
    this.search = function(query, callback) {
      $http.get('http://127.0.0.1/phrases', {
        params: {
          phrase: query.phrase,
          source: sourceL,
          target: targetL,
          format: 'text'
        }
      })
      .then(function({data}) {
        if (callback) {
          callback(data);
        }
      })
      .catch(function({data}){
        data.error.errors.forEach(function(error) {
          console.log('An error occurred: ', error);
        });
      });
    }
  })