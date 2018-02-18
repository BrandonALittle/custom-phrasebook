angular.module('translateBox', [])
  .controller('translateController', function() {
    this.handleClick = () => {
      let process = this.result;
      let getPhrases = this.service.getPhrases;
      this.service.search(this.input, function(response) {
        getPhrases(function(results) {
          console.log(results);
          process(results);
        });
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