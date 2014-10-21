(function () {'use strict';
angular.module('demo.base', ['demo.config', 'ui.router']);

angular.module('demo.base').config(BaseModule);
angular.module('demo.base').factory('baseStates', baseStates);

BaseModule.$inject = ['$stateProvider', 'BASE_URL'];
baseStates.$inject = ['$state'];

function BaseModule($stateProvider, BASE_URL) {
		$stateProvider
		.state('help', {
			url: BASE_URL+'/help',
			templateUrl: BASE_URL+'/scripts/base/help.html',
			authenticate: false
		})
		.state('login', {
			url: BASE_URL+'/login',
			templateUrl: BASE_URL+'/scripts/base/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'vm',
			authenticate: false
		})
		;
}

// a states factory gives you programatic access to the state transition as a function
function baseStates($state) {
	var states = {};
	states.help = help;
	return states;
	function help() {
		return $state.go('help');
	}
}
})();