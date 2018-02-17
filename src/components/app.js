
angular.module('phrasebook', ['searchBox', 'phraseList'])
  .controller('PhrasebookController', function(googleTranslate){
    this.phrases = Window.translateData.data.translations;
    this.searchService = googleTranslate;
    this.search = function(data) {
    }
  })

  .component('app', {
    controller: 'PhrasebookController',

    template: `
                <div id="app container">
                  <div id="userList"><h1>Brandon's Phrases</h1></div>
                  <search-box service="$ctrl.searchService" processResults="$ctrl.processResults"></search-box>
                  <phrase-list id="phrases" phrases="$ctrl.phrases"></phrase-list>
                  </div>
                </div>
              `
  });