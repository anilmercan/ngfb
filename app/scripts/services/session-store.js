'use strict';

/**
 * @ngdoc service
 * @name ngfbApp.SessionStore
 * @description
 * # SessionStore
 * Service in the ngfbApp.
 */
angular.module('ngfbApp')
  .service('SessionStore', function SessionStore($window) {
  this.isEnabled = function () {
    var testKey = 'test';
    try {
      $window.sessionStorage.setItem(testKey, 1);
      $window.sessionStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  };

  this.put = function (key, value, isJson) {
    if(isJson){
      return $window.sessionStorage.setItem(key, angular.toJson(value));
    }else{
      return $window.sessionStorage.setItem(key, value);
    }
  };

  this.get = function (key, isJson) {
    if(isJson){
      return JSON.parse($window.sessionStorage.getItem(key));
    }else{
      return($window.sessionStorage.getItem(key));
    }

  };
});
