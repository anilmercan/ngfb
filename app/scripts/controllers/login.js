'use strict';

/**
 * @ngdoc function
 * @name ngfbApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngfbApp
 */
angular.module('ngfbApp')
  .controller('LoginCtrl', function ($scope, Facebook, $location) {

    var isAuthenticated = false;


    var init = function(){
      Facebook.getLoginStatus(checkLoginStatus);
    };

    var checkLoginStatus = function(response){
      if(response.status === 'connected') {
        $location.path('/posts');
      } else {
        isAuthenticated = false;
      }
    };

    $scope.login = function() {
      // From now on you can use the Facebook service just as Facebook api says
      Facebook.login(checkLoginStatus);
    };

    $scope.$watch(function() {
      // This is for convenience, to notify if Facebook is loaded and ready to go.
      return Facebook.isReady();
    }, function(newVal) {
      if(newVal) {
        $scope.facebookLoading = false;
      }
    });


    init();


  });
