
angular.module('phrasebook', ['phraseList', 'googleTranslate', 'translateBox'])
  .controller('PhrasebookController', function(googleTranslate){
    this.translateService = googleTranslate;

    this.processResults = (data) => {
      this.phrases = data.data;
    }

    this.removePhrase = (phrase) => {
      let process = this.processResults;
      googleTranslate.deletePhrase(phrase, function() {
        googleTranslate.getPhrases(process);
      });
    }

    googleTranslate.getPhrases(this.processResults);
  })

  .component('app', {
    controller: 'PhrasebookController',

    template:
              `
                <div id="app container">
                  <div id="userList"><h1>Your Phrases</h1>
                    <translate-box service="$ctrl.translateService" result="$ctrl.processResults" phrases="$ctrl.phrases"></translate-box>
                    <phrase-list id="phrases" phrases="$ctrl.phrases" delete="$ctrl.removePhrase"></phrase-list>
                  </div>
                  </div>
                </div>
              `
  });