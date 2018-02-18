angular.module('translateBox', [])
  .controller('translateController', function() {
    this.handleClick = () => {
      this.service.search(this.input);
      let process = this.result;
      this.service.getPhrases(function(results) {
        process(results.data);
      });
    }
  })

  .component('translateBox', {
    controller: 'translateController',
    bindings: {
      service: '<',
      result: '<'
    },
    template:
              `
                <div id="search">
                  <textarea name="textToTranslate" rows="4" placeholder="Enter text to translate" ng-model="$ctrl.input"></textarea>
                  <button name="translate" ng-click="$ctrl.handleClick()">Translate</button>
                </div>
              `
  });