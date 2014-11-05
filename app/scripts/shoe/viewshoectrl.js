(function () {'use strict';
angular.module('demo.shoe').controller('ViewShoeCtrl', ViewShoeCtrl);

ViewShoeCtrl.$inject = ['$stateParams', 'shoeService'];

function ViewShoeCtrl($stateParams, shoeService) {
	var vm = this;
	vm.shoeId = $stateParams.shoeId;
	vm.shoe = null;

	activate();

	function activate() {
		shoeService.get(vm.shoeId).then(function(shoe) {
			vm.shoe = shoe;
		}).catch(function() {
			console.log('Error loading Shoe');
		});
	}

}
})();