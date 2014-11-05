(function () {'use strict';
angular.module('demo.shoe', ['demo.config', 'ui.router']);

angular.module('demo.shoe').config(ShoeModule);
angular.module('demo.shoe').factory('shoeStates', shoeStates);

ShoeModule.$inject = ['$stateProvider', 'BASE_URL'];
shoeStates.$inject = ['$state'];

function ShoeModule($stateProvider, BASE_URL) {
		$stateProvider
		.state('shoes', {
			url: BASE_URL+'/shoes',
			templateUrl: BASE_URL+'/scripts/shoe/shoes.html',
			controller: 'ShoeListCtrl',
			controllerAs: 'vm',
			authenticate: true
		})
		.state('viewshoe', {
			url: BASE_URL+'/viewshoe/{shoeId}',
			templateUrl: BASE_URL+'/scripts/shoe/viewshoe.html',
			controller: 'ViewShoeCtrl',
			controllerAs: 'vm',
			authenticate: true
		})
		;
}

// a states factory gives you programatic access to the state transition as a function
function shoeStates($state) {
	var states = {};
	states.shoes = shoes;
	return states;
	function shoes() {
		return $state.go('shoes');
	}
}
})();