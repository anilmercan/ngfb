'use strict';

/**
 * @ngdoc directive
 * @name ngfbApp.directive:dateTimePicker
 * @description
 * # dateTimePicker
 */
angular.module('ngfbApp')
  .directive('dateTimePicker', function () {
    return {
      scope: {
        ngModel: '=',
        required: '=ngRequired'

      },
      restrict: 'E',

      templateUrl: 'views/date-time-picker.html',
      link: function (scope, element, attrs, form) {
        scope.hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        scope.minutes = ['00', '15', '30', '45'];
        scope.meridiems = ['AM', 'PM'];
        $('.datepicker').pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15 // Creates a dropdown of 15 years to control year
        });

        var updateDateTime = function () {
          if(scope.date && scope.selectedHour && scope.selectedMinute && scope.selectedMeridiem ) {
            var selectedDateTime = new Date((scope.date.getMonth() + 1) + '/' + scope.date.getDate() + '/' + scope.date.getFullYear() + ' ' + scope.selectedHour + ':' + scope.selectedMinute + ' ' + scope.selectedMeridiem);
            scope.ngModel = Math.floor(selectedDateTime.getTime() / 1000);
          }else{
            scope.ngModel = null;
          }

        };
        $('.datepicker').change(function (e) {
          scope.date = new Date($(e.target).val());
        });
        scope.$watch('date', updateDateTime);
        scope.$watch('selectedHour', updateDateTime);
        scope.$watch('selectedMinute', updateDateTime);
        scope.$watch('selectedMeridiem', updateDateTime);


      }
    };
  })
;
