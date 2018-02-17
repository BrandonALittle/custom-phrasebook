
angular.module('phrasebook', ['searchBox', 'phraseList'])
  .controller('PhrasebookController', function(){
    this.phrases = Window.translateData.data.translations;
  })

  .component('app', {
    controller: 'PhrasebookController',

    template: `
                <div id="app container">
                  <div id="userList"><h1>Brandon's Phrases</h1></div>
                  <search-box></search-box>
                  <phrase-list id="phrases" phrases="$ctrl.phrases"></phrase-list>
                  </div>
                </div>
              `
  });