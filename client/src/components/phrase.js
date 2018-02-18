angular.module('phrase', [])
  .controller('phraseController', function() {
    this.languages = {
      es: 'Spanish',
      en: 'English',
      vi: 'Vietnamese'
    }
  })

  .component('phrase', {
    controller: 'phraseController',
    bindings: {
      phrase: '<'
    },
    template: `
                <div class="left">{{$ctrl.phrase.phrase}}</div>
                <span>{{$ctrl.phrase.translatedText}}</span>
                <div class="right">{{$ctrl.languages[$ctrl.phrase.targetL]}}</div>

              `
  });