'use strict';

/**
 * @ngdoc service
 * @name ngfbApp.graph
 * @description
 * # graph
 * Service in the ngfbApp.
 */
const PROMOTABLE_POST_URL = '/thedudetesting1234/promotable_posts';
const PROMOTABLE_POST_FIELDS = 'is_published,message,created_time,scheduled_publish_time';
const PAGE_URL = '/me/accounts';
const PAGE_ID = "1691979044405688";

angular.module('ngfbApp')
  .service('FBGraphService', function (SessionStore, $q, $http, Facebook) {

    this.getPageToken = function () {
      var deferred = $q.defer();

      Facebook.api(PAGE_URL, function (response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          var page = _.find(response.data, {'id': PAGE_ID});
          if (page) {
            deferred.resolve(page.access_token);
          } else {
            deferred.reject('Access token not found.');
          }
        }
      });
      return deferred.promise;
    };

    this.getPromotablePosts = function () {
      var deferred = $q.defer();

      Facebook.api(PROMOTABLE_POST_URL, {
        fields: PROMOTABLE_POST_FIELDS,
        access_token: SessionStore.get('access_token')
      }, function (response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          deferred.resolve(response.data);
        }
      });
      return deferred.promise;
    };

    this.getPostViewCount = function (id) {
      var deferred = $q.defer();
      Facebook.api('/' + id + '/insights/post_impressions_unique', {
        access_token: SessionStore.get('access_token')
      }, function (response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {

          deferred.resolve(response.data[0].values[0].value);
        }


      });

      return deferred.promise;
    };

    this.updatePost = function (post) {
      var deferred = $q.defer();
      post.access_token = SessionStore.get('access_token');

      Facebook.api('/' + post.id, 'POST', post, function (response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          deferred.resolve(response);
        }
      });
      return deferred.promise;

    };

    this.createPost = function (post) {
      var deferred = $q.defer();
      post.access_token = SessionStore.get('access_token');
      Facebook.api('/' + PAGE_ID + '/feed', 'POST', post, function (response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          deferred.resolve(response);
        }
      });
      return deferred.promise;
    };

    this.deletePost = function (id) {
      var deferred = $q.defer();
      Facebook.api('/' + id, 'DELETE', {
        access_token: SessionStore.get('access_token')
      }, function (response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          deferred.resolve(response);
        }


      });

      return deferred.promise;
    };


  });
