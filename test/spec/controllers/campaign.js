'use strict';

describe('Controller: CampaignCtrl', function () {

  // load the controller's module
  beforeEach(module('quetesobraApp'));

  var CampaignCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CampaignCtrl = $controller('CampaignCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
