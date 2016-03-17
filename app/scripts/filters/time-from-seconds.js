'use strict';

/**
 * @ngdoc filter
 * @name ngfbApp.filter:timeFromSeconds
 * @function
 * @description
 * # timeFromSeconds
 * Filter in the ngfbApp.
 */
angular.module('ngfbApp')
  .filter('timeFromSeconds', function () {
    return function (input) {
      return new Date( input * 1000);
    };
  });
