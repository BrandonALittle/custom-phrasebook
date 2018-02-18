angular.module('translateBox', [])
  .controller('translateController', function() {
    this.handleClick = () => {
      this.service.search(this.input, (data) => {
        console.log(this.input);
        this.processResults(data);
      });
    }
  })

  .component('translateBox', {
    controller: 'translateController',
    bindings: {
      service: '<',
      processResults: '<'
    },
    template:
              `
                <div id="search">
                  <textarea name="textToTranslate" rows="4" placeholder="Enter text to translate" ng-model="$ctrl.input"></textarea>
                  <button name="translate" ng-click="$ctrl.handleClick()">Translate</button>
                </div>
              `
  });