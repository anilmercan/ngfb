'use strict';

describe('Service: SessionStore', function () {

  // load the service's module
  beforeEach(module('ngfbApp'));

  // instantiate service
  var SessionStore;
  beforeEach(inject(function (_SessionStore_) {
    SessionStore = _SessionStore_;
  }));

  it('should do something', function () {
    expect(!!SessionStore).toBe(true);
  });

});
