/**
 * Chargement des directives et états de la page login
 */
angular.module('funApp.views.login')
	.config(configuration);

function configuration($stateProvider) {
	var config = {
    url: "/login",
    templateUrl: "/components/login/login.html",
    controller:'loginCtrl',
    controllerAs:'login'
	};

	$stateProvider
		.state("login", config);

	console.info("config login chargee");
}