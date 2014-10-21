(function () {'use strict';

describe('demo.base.testauthservice', function() {

  beforeEach(module('demo.base'));
  var $scope, service;

  describe('test authservice', function() {
	beforeEach(inject(function(authService, $rootScope) {
		$scope = $rootScope.$new();
    	service = authService;
	}));
    
    it('should return loggedIn value', function() {
		expect(service.isLoggedIn()).toEqual(false);
    });
  
  });

});
})();