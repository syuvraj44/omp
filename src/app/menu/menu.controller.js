(function() {
  'use strict';

  angular
    .module('omp')
    .controller('menuController', menuController);

  /** @ngInject */
  function menuController($timeout, webDevTec, toastr) {
    var vm = this;
    console.log('hi')
  }
  
})();
