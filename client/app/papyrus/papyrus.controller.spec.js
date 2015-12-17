'use strict';

describe('Controller: PapyrusCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var PapyrusCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PapyrusCtrl = $controller('PapyrusCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
