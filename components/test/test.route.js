/**
 * Chargement des directives et états de la page test
 */
(function() {
	'use strict';
	angular.module('funApp.views.test')
		.constant('testConfig', {
			nom : "test",
			type : "view",
			config : {
		        url: "/test/",
		        templateUrl: "/components/test/test.html"
	    	}
	    })
		.config([
			'$stateProvider',
			'testConfig',
			configuration
		]);

	function configuration($stateProvider, testConfig) {
		$stateProvider
			.state(testConfig.nom, testConfig.config);

		console.info("config test chargee !");
	}
})();