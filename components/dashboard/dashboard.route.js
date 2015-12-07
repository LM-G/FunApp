(function() {
	'use strict';
	angular.module('funApp.views.dashboard')
		.constant('dashboardConfig', {
			nom : "dashboard",
			type : "view",
			config : {
		        url: "/dashboard",
		        templateUrl: "/components/dashboard/dashboard.html",
		        controller: "dashboardCtrl",
		        controllerAs: "dashboard"
	    	}
	    })
		.config([
			'$stateProvider',
			'$urlRouterProvider',
			'dashboardConfig',
			configuration
		]);

	function configuration($stateProvider, $urlRouterProvider, dashboardConfig) {

		$stateProvider
			.state(dashboardConfig.nom, dashboardConfig.config);

		console.info("config dashboard chargee");
	}
})();