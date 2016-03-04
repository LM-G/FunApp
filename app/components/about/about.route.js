/**
 * Chargement des directives et états de la page about
 */
angular.module('funApp.views.about')
	.constant('aboutConfig', {
		nom : "about",
		type : "view",
		config : {
	        url: "/about",
	        templateUrl: "/components/about/about.html"
    	}
    })
	.config(configAbout);

function configAbout($stateProvider, aboutConfig) {
	$stateProvider
		.state(aboutConfig.nom, aboutConfig.config);

	console.info("config about chargee");
}
