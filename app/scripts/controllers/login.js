'use strict';

/**
 * @ngdoc function
 * @name ngfbApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngfbApp
 */
angular.module('ngfbApp')
  .controller('LoginCtrl', function ($scope, SessionStore, Facebook, $location, FBGraphService) {

    var isAuthenticated = false;


    var init = function(){
      $scope.facebookIsReady = false;
    };

    var getPageTokenAndNavigate = function(){
      FBGraphService.getPageToken().then(function(response){
        SessionStore.put('access_token', response);
        $location.path('/posts');
      });
    };

    $scope.checkLoginStatus = function(response){
      if(response.status === 'connected') {
        getPageTokenAndNavigate();
      } else {
        isAuthenticated = false;
      }
    };

    $scope.loginToFacebook = function() {
      // From now on you can use the Facebook service just as Facebook api says
      Facebook.login( $scope.checkLoginStatus, {scope: 'manage_pages,read_insights,publish_pages'});
    };

    $scope.$watch(function() {
      // This is for convenience, to notify if Facebook is loaded and ready to go.
      return Facebook.isReady();
    }, function(newVal) {
      if(newVal) {
        $scope.facebookIsReady = true;
      }
    });

    init();


  });
