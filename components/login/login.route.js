/**
 * Chargement des directives et états de la page login
 */
(function() {
	'use strict';
	angular.module('funApp.views.login')
		.constant('loginConfig', {
			nom : "login",
			type : "view",
			config : {
		        url: "/login",
		        templateUrl: "/components/login/login.html",
		        controller:'loginCtrl',
		        controllerAs:'login'
	    	}
	    })
		.config([
			'$stateProvider',
			'loginConfig',
			configuration
		]);

	function configuration($stateProvider,loginConfig) {
		$stateProvider
			.state(loginConfig.nom, loginConfig.config);

		console.info("config login charge");
	}
})();