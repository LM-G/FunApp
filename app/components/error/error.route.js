angular.module('funApp.views.error')
	.constant('errorConfig', {
		nom : "error",
		type : "view",
		config : {
	        url: "/error",
	        templateUrl: "/components/error/error.html",
	        controller: "errorCtrl",
	        controllerAs: "error"
    	}
    })
	.config([
		'$stateProvider',
		'errorConfig',
		configuration
	]);

function configuration($stateProvider, errorConfig) {
	$stateProvider
		.state(errorConfig.nom, errorConfig.config);
	console.info("config error chargee");
}