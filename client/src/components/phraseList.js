angular.module('phraseList', ['phrase'])
  .controller('phraseListController', function() {

  })

  .component('phraseList', {
    controller: 'phraseListController',
    bindings: {
      phrases: '<'
    },
    template: `
                <ul class="phrase-list">
                  <phrase ng-repeat="phrase in $ctrl.phrases" phrase="phrase"></phrase>
                </ul>
              `
  });