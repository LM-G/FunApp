angular.module('funApp.views.dashboard')
	.service('dashboardService', [
		'$http',
		'$q',
		dashboardService
	]);

/* Controleur de l'état service */
function dashboardService($http, $q) {
	var service = this;
}