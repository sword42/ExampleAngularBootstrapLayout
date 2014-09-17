'use strict';
var app = angular.module('applicationname', ['applicationname.config', 'applicationname.base', 
	'ui.router.compat', 'underscore', 'ui.utils', 'angularMoment', 'angular-indi-click', 'ui.bootstrap']);


app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider ) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider
			.otherwise('/home');
		
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/views/home.html'
		})

		;
  }]);

app.run(['$rootScope', '$state', '$stateParams', 
function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}]);