angular.module('searchBox', [])
  .controller('searchController', function() {

  })

  .component('searchBox', {
    controller: 'searchController',
    template: `
                <div id="search">
                  <textarea name="textToTranslate" rows="4" placeholder="Enter text to translate"></textarea>
                </div>
              `
  });