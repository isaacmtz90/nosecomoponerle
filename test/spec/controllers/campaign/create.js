'use strict';

describe('Controller: CampaignCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('quetesobraApp'));

  var CampaignCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CampaignCreateCtrl = $controller('CampaignCreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
