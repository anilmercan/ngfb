'use strict';

/**
 * @ngdoc overview
 * @name ngfbApp
 * @description
 * # ngfbApp
 *
 * Main module of the application.
 */
angular
  .module('ngfbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'facebook'
  ])
  .config(function ($routeProvider, FacebookProvider) {
    FacebookProvider.init('474783952710722');

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
     .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('_', window._);
