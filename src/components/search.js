angular.module('searchBox', [])
  .controller('searchController', function() {
    this.handleClick = () => {
      this.service.search(this.input, (data) => {
        this.processResults(data);
      }
    }
  })

  .component('searchBox', {
    controller: 'searchController',
    bindings: {
      service: '<',
      processResults, '<'
    },
    template: `
                <div id="search">
                  <textarea name="textToTranslate" rows="4" placeholder="Enter text to translate" ng-model="$ctrl.input"></textarea>
                  <button name="searchTranslate" ng-click="$ctrl.handleClick()">Translate</button>
                </div>
              `
  });