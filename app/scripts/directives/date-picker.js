'use strict';

/**
 * @ngdoc directive
 * @name ngfbApp.directive:datePicker
 * @description
 * # datePicker
 */
angular.module('ngfbApp')
  .directive('datePicker', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        $('.datepicker').pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15 // Creates a dropdown of 15 years to control year
        });
      }
    };
  });
