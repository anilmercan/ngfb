'use strict';

/**
 * @ngdoc directive
 * @name ngfbApp.directive:post
 * @description
 * # post
 */
angular.module('ngfbApp')
  .directive('post', function (PostCtrl) {
    return {
      templateUrl: 'post.html',
      restrict: 'E',
      controller: PostCtrl,
      link: function postLink(scope, element, attrs) {
        element.text('this is the post directive');
      }
    };
  });
