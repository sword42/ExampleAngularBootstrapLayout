(function () {'use strict';
angular.module('demo.base').factory('authService', authService);

authService.$inject = ['$rootScope'];

// This is just a simple demo auth service, replace with a real implementation
function authService($rootScope) {
	var loggedIn = false;
	var service = {
		isLoggedIn: isLoggedIn,
		auth:auth,
	};
	function isLoggedIn() {
		return loggedIn;
	}
	function auth(user, password) {
		loggedIn = true;
		notifyLoggedIn();
	}
	function notifyLoggedIn() {
		$rootScope.$broadcast('authService:userLoggedIn', loggedIn);
	}
	return service;

}
})();