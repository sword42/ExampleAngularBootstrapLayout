(function () {'use strict';
angular.module('demo.shoe').controller('ShoeListCtrl', ShoeListCtrl);

ShoeListCtrl.$inject = ['shoeService'];

function ShoeListCtrl(shoeService) {
	var vm = this;
	vm.shoesList = [];
	vm.origShoesList = [];

	activate();

	function activate() {
		shoeService.getShoes().then(function(shoesList) {
			vm.origShoesList = shoesList;
			vm.shoesList = [].concat(vm.origShoesList);
		}).catch(function() {
			console.log('Error loading Shoes List');
		});
	}

}
})();