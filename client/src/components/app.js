
angular.module('phrasebook', ['phraseList', 'googleTranslate', 'translateBox'])
  .controller('PhrasebookController', function(googleTranslate){
    this.translateService = googleTranslate;
    // this.search = function(data) {
    // };
    this.processResults = (data) => {
      this.phrases = data.data;
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
                    <phrase-list id="phrases" phrases="$ctrl.phrases"></phrase-list>
                  </div>
                  </div>
                </div>
              `
  });