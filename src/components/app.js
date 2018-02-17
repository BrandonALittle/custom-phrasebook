
angular.module('phrasebook', ['phraseList'])
  .controller('PhrasebookController', function(){
    this.phrases = Window.translateData;
  })

  .component('app', {
    controller: 'PhrasebookController',

    template: `
                <div id="app container">
                  <div id="userList">Brandon's Phrases</div>
                  <phrase-list id="phrases" phrases="$ctrl.phrases"></phrase-list>
                  </div>
                </div>
              `
  });