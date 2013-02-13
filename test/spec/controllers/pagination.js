'use strict';

describe('Controller: PaginationCtrl', function() {

  // load the controller's module
  beforeEach(module('labsApp'));

  var PaginationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    PaginationCtrl = $controller('PaginationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
