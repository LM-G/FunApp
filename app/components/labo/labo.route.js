angular.module('funApp.views.dashboard')
	.config(configurationLabo);

function configurationLabo($stateProvider, $urlRouterProvider) {
	var configLabo = {
    url: "/labo",
    templateUrl: "/components/labo/labo.html",
    controller: "laboCtrl",
    controllerAs: "labo"
	};

	$stateProvider
		.state('labo', configLabo);

	console.info("config labo chargee");
}