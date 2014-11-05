(function () {'use strict';
angular.module('demo', ['demo.config', 'demo.base', 'demo.shoe', 
					'ui.router.compat', 'ui.utils', 'angularMoment', 'angular-indi-click', 'ui.bootstrap']);

angular.module('demo').config(ApplicationDef);
angular.module('demo').run(ApplicationRun);

ApplicationDef.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'BASE_URL'];
ApplicationRun.$inject = ['$rootScope', '$state', '$stateParams', 'authService'];

function ApplicationDef($stateProvider, $urlRouterProvider, $locationProvider, BASE_URL) {
		$locationProvider.html5Mode(true);
		// setup to decide default url based on login status
		$urlRouterProvider.otherwise(function($injector, $location){
			var authService = $injector.get('authService');
			if (!authService.isLoggedIn()) {
				return BASE_URL+'/login';
			}
			return BASE_URL+'/home';
    });
		
		$stateProvider
		.state('home', {
			url: BASE_URL+'/home',
			templateUrl: BASE_URL+'/scripts/base/home.html',
			authenticate: true
		})
		;
}

function ApplicationRun($rootScope, $state, $stateParams, authService) {	
	$rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;  
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
  	// must have a defined authService with a function isLoggedIn
    if (toState.authenticate && !authService.isLoggedIn()){
    		$rootScope.toState = toState;
    		$rootScope.toStateParams = toParams;
        // User isn’t authenticated
        $state.transitionTo('login');
        // you must include a login state, and a /login url for it
        event.preventDefault();
    }
  });
}
})();