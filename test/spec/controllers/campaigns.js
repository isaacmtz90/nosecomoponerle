'use strict';

describe('Controller: CampaignsCtrl', function () {

  // load the controller's module
  beforeEach(module('quetesobraApp'));

  var CampaignsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CampaignsCtrl = $controller('CampaignsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
