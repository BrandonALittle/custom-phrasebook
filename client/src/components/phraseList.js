angular.module('phraseList', ['phrase'])
  .controller('phraseListController', function() {

  })

  .component('phraseList', {
    controller: 'phraseListController',
    bindings: {
      phrases: '<',
      delete: '<'
    },
    template: `
                <div class="phrase-list">
                <div class="phrase" ng-repeat="phrase in $ctrl.phrases">
                  <phrase phrase="phrase" delete="$ctrl.delete"></phrase>
                </div>

                </div>
              `
  });