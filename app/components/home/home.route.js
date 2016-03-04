/**
 * Chargement des directives et états du menu
 */
angular.module('funApp.views.home')
	.config(configurationHome);

function configurationHome($stateProvider) {
	var config = {
    url: "/home",
    templateUrl: "/components/home/home.html",
    controller: "homeCtrl",
    controllerAs: "home"
	};

	$stateProvider
		.state('home', config);

	console.info("config home chargee");
}