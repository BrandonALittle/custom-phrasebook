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
      phrase: '<',
      delete: '<'
    },
    template: ` <div class="delete" ng-click="$ctrl.delete($ctrl.phrase)"></div>
                <div class="left"><h4>{{$ctrl.languages[$ctrl.phrase.sourceL]}}</h4><p class="original">{{$ctrl.phrase.phrase}}</p></div>
                <div class="right"><h4>{{$ctrl.languages[$ctrl.phrase.targetL]}}</h4><p class="translated">{{$ctrl.phrase.translatedText}}</p></div>

              `
  });