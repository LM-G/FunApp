/**
 * Chargement des directives et états du menu
 */
angular.module('funApp.views.home')
	.constant('homeConfig', {
		nom : "home",
		type : "view",
		config : {
	        url: "/home",
	        templateUrl: "/components/home/home.html",
	        controller: "homeCtrl",
	        controllerAs: "home"
    	}
    })
	.config([
		'$stateProvider',
		'homeConfig',
		configuration
	]);

function configuration($stateProvider, homeConfig) {
	$stateProvider
		.state(homeConfig.nom, homeConfig.config);

	console.info("config home chargee");
}