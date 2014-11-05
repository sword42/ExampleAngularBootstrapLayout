(function () {'use strict';
angular.module('demo.shoe').controller('ShoeListCtrl', ShoeListCtrl);

ShoeListCtrl.$inject = ['shoeService'];

function ShoeListCtrl(shoeService) {
	var vm = this;
	vm.shoesList = [];

	activate();

	function activate() {
		shoeService.getShoes().then(function(shoesList) {
			vm.shoesList = shoesList;
		}).catch(function() {
			console.log('Error loading Shoes List');
		});
	}

}
})();