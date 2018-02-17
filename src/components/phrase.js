angular.module('phrase', [])
  .controller('phraseController', function() {

  })

  .component('phrase', {
    controller: 'phraseController',
    bindings: {
      phrase: '<'
    },
    template: `
                <h5>Banana<h5>
              `
  });