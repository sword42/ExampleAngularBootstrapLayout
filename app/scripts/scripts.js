(function () {'use strict';
angular.module('demo', ['demo.config', 'demo.base', 
					'ui.router.compat', 'ui.utils', 'angularMoment', 'angular-indi-click', 'ui.bootstrap']);

angular.module('demo').config(ApplicationDef);
angular.module('demo').run(ApplicationRun);

ApplicationDef.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'BASE_URL'];
ApplicationRun.$inject = ['$rootScope', '$state', '$stateParams', 'authService'];

function ApplicationDef($stateProvider, $urlRouterProvider, $locationProvider, BASE_URL) {
		$locationProvider.html5Mode(true);
  	$urlRouterProvider.otherwise(BASE_URL+'/login');
		
		$stateProvider
		.state('home', {
			url: BASE_URL+'/home',
			templateUrl: BASE_URL+'/base/home.html',
			authenticate: true
		})
		;
}

function ApplicationRun($rootScope, $state, $stateParams, authService) {	
	$rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;  
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
  	// must have a defined authService with a function isLoggedIn
    if (toState.authenticate && !authService.isLoggedIn()){
    		$rootScope.toState = toState;
    		$rootScope.toStateParams = toParams;
        // User isn’t authenticated
        $state.transitionTo("login");
        // you must include a login state, and a /login url for it
        event.preventDefault();
    }
  });
};
})();