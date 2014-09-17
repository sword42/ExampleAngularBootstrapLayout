(function () {'use strict';
angular.module('applicationname.base', ['ui.router']);

angular.module('applicationname.base').config(BaseModule);
angular.module('applicationname.base').factory('baseStates', baseStates);


BaseModule.$inject = ['$stateProvider', 'BASE_URL'];
baseStates.$inject = ['$state'];

function BaseModule($stateProvider, BASE_URL) {
		$stateProvider
		.state('help', {
			url: BASE_URL+'/help',
			templateUrl: BASE_URL+'/scripts/base/help.html'
		})
		;
}

function baseStates($state) {
	var states = {};
	states.help = help;
	return states;
	function help() {
		return $state.go('help');
	};
};
})();