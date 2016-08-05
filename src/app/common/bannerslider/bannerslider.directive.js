(function () {
    'use strict';
    angular
            .module('omp')
            .directive('bannerSlider', function ($http) {
                return {
                    restrict: 'ACE',
                    templateUrl: 'app/common/bannerslider/bannerslider.html',
                    link: function (scope, element, attr) {
                    }
                }
            }
            );
})();
