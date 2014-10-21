(function () {'use strict';
angular.module('demo.base').controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['authService'];

function LoginCtrl(authService) {
	var vm = this;
	vm.loginInfo = {email:null, password:null, remember:true};
	vm.submit = submit;

	activate();

	function activate() {

	}

	function submit(loginInfo) {
		return authService.auth(vm.loginInfo.email, vm.loginInfo.password);
	}

}
})();