'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('sitdownApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should parse markdown', function () {
    scope.markdown = '_markdown_';
    scope.$apply();
    expect(scope.markdownHTML).toEqual('<p><em>markdown</em></p>\n');
  });
});
