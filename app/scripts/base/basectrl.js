(function () {'use strict';
angular.module('demo.base').controller('BaseCtrl', BaseCtrl);

BaseCtrl.$inject = ['$scope', '$state'];

function BaseCtrl($scope, $state) {
	var vm = this;

	$scope.$on('authService:userLoggedIn', loggedInUser);

	function loggedInUser() {
		if (angular.isDefined($scope.toState)) {
			$state.go($scope.toState, $scope.toParams);
		} else {
			$state.go('home');
		}
	}
}
})();