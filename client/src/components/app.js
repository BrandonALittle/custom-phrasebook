
angular.module('phrasebook', ['phraseList', 'googleTranslate', 'translateBox'])
  .controller('PhrasebookController', function(googleTranslate){
    this.phrases = Window.translateData.data.translations;
    this.translateService = googleTranslate;
    this.search = function(data) {
    };
    this.processResults = (data) => {
      this.phrases.push(data);
    }
  })

  .component('app', {
    controller: 'PhrasebookController',

    template:
              `
                <div id="app container">
                  <div id="userList"><h1>Brandon's Phrases</h1></div>
                  <translate-box service="$ctrl.translateService" processResults="$ctrl.processResults"></translate-box>
                  <phrase-list id="phrases" phrases="$ctrl.phrases"></phrase-list>
                  </div>
                </div>
              `
  });