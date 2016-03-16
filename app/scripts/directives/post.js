'use strict';

/**
 * @ngdoc directive
 * @name ngfbApp.directive:post
 * @description
 * # post
 */
angular.module('ngfbApp')
  .directive('post', function () {
    return {
      templateUrl: 'views/post.html',
      restrict: 'E',
      scope:  {
        postInfo: '=info'
      },
      controller: 'PostCtrl',
      controllerAs: 'vm',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
