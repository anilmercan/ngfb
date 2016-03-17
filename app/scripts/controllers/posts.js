'use strict';

/**
 * @ngdoc function
 * @name ngfbApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the ngfbApp
 */
angular.module('ngfbApp')
  .controller('PostsCtrl', function ($scope, $location, $anchorScroll, FBGraphService) {
    var init = function(){
      FBGraphService.getPromotablePosts().then(function(response){
        $scope.posts = response;
      });
    };


    $scope.showForm = function(){
      $scope.formVisible = true;
    };

    $scope.cancel = function(){
      $scope.formVisible= false;
    };

    $scope.createPost = function(){
      FBGraphService.createPost($scope.postFormData).then(function(response){
        if(response.id){
          $scope.formVisible = false;
          $scope.postFormData = null;
          init();
        }
      });
    };

    $scope.$on('updatedOrDestroyedPost', init);



    init();
  });
