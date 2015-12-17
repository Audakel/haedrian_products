'use strict';

describe('Controller: DistributionCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var DistributionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DistributionCtrl = $controller('DistributionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
