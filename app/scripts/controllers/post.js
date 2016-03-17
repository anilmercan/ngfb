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
    var init = function () {
      FBGraphService.getPostViewCount($scope.postInfo.id).then(function (response) {
        $scope.viewCount = response;
      });
    };

    var updateDestroyResponseHandler = function (response) {
      if (response && response.success) {
        $scope.$emit('updatedOrDestroyedPost');
      }
    };


    $scope.editPost = function () {
      $scope.isEditing = true;
      $scope.postFormData = angular.extend({}, $scope.postInfo);
      if(!$scope.postFormData.scheduled_publish_time){
        $scope.postFormData.scheduled_publish_time = null;
      }

    };

    $scope.deletePost = function () {
      FBGraphService.deletePost($scope.postInfo.id).then(updateDestroyResponseHandler);
    };

    $scope.updatePost = function () {
      var updatedFields =_.pickBy($scope.postFormData, function(value, key){
        return (value !== $scope.postInfo[key] || key === 'id') && value !== undefined && value !== null;
      });
      FBGraphService.updatePost(updatedFields).then(updateDestroyResponseHandler);
    };

    $scope.cancelEdit = function () {
      $scope.isEditing = false;
      $scope.postFormData = null;
    };

    $scope.submit = function () {

    };

    init();
  });
