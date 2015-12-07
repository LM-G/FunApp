/**
 * Chargement des directives et états de la page about
 */
(function() {
	'use strict';
	angular.module('funApp.views.about')
		.constant('aboutConfig', {
			nom : "about",
			type : "view",
			config : {
		        url: "/about",
		        templateUrl: "/components/about/about.html"
	    	}
	    })
		.config([
			'$stateProvider',
			'aboutConfig',
			configuration
		]);

	function configuration($stateProvider, aboutConfig) {
		$stateProvider
			.state(aboutConfig.nom, aboutConfig.config);

		console.info("config about chargee");
	}
})();