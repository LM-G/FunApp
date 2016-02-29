/**
 * Chargement des directives et états de la page soustest
 */
(function() {
	'use strict';
	angular.module('funApp.views.soustest')
		.constant('soustestConfig', {
			nom : "test.soustest",
			type : "view",
			config : {
		        url: "/test/soustest",
		        templateUrl: "/components/test/soustest/soustest.html"
	    	}
	    })
		.config([
			'$stateProvider',
			'testConfig',
			configuration
		]);

	function configuration($stateProvider, soustestConfig) {
		$stateProvider
			.state(soustestConfig.nom, soustestConfig.config);

		console.info("config soustest chargee");
	}
})();