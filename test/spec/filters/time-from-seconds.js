'use strict';

describe('Filter: timeFromSeconds', function () {

  // load the filter's module
  beforeEach(module('ngfbApp'));

  // initialize a new instance of the filter before each test
  var timeFromSeconds;
  beforeEach(inject(function ($filter) {
    timeFromSeconds = $filter('timeFromSeconds');
  }));

  it('should return the input prefixed with "timeFromSeconds filter:"', function () {
    var text = 'angularjs';
    expect(timeFromSeconds(text)).toBe('timeFromSeconds filter: ' + text);
  });

});
