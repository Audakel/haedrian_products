'use strict';

describe('Controller: CuroCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var CuroCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CuroCtrl = $controller('CuroCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
