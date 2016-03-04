angular.module('funApp.views.error')
	.config(configurationError);

function configurationError($stateProvider) {
	var config = {
      url: "/error",
      templateUrl: "/components/error/error.html",
      controller: "errorCtrl",
      controllerAs: "error"
	}
	$stateProvider
		.state("error", config);

	console.info("config error chargee");
}