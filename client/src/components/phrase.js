angular.module('phrase', [])
  .controller('phraseController', function() {

  })

  .component('phrase', {
    controller: 'phraseController',
    bindings: {
      phrase: '<'
    },
    template: `
                <h3>English Phrase: {{$ctrl.phrase.phrase}}</h3>
                <h3>{{$ctrl.phrase.translatedText}}<h3>
              `
  });