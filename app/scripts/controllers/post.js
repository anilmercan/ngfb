'use strict';

/**
 * @ngdoc function
 * @name ngfbApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the ngfbApp
 */
angular.module('ngfbApp')
  .controller('PostCtrl', function ($scope, FBGraphService) {
    var init = function(){
      FBGraphService.getPostViewCount($scope.postInfo.id).then(function(response){
        $scope.viewCount = response;
      });
    };

    $scope.editPost = function(){
      $scope.isEditing = true;
      $scope.postFormData = angular.extend({}, $scope.postInfo);
    };

    $scope.cancelEdit = function(){
      $scope.isEditing = false;

    };

    $scope.submit = function(){

    };

    init();
  });
