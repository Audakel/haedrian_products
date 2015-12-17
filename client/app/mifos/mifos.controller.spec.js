'use strict';

describe('Controller: MifosCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var MifosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MifosCtrl = $controller('MifosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
