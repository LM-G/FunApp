angular.module('funApp.views.dashboard')
	.controller('dashboardCtrl', [
		'$scope',
		'$state',
		'dashboardContenu',
		'dashboardService',
		dashboardCtrl
	]);

/* Controleur de l'état dashboard */
function dashboardCtrl($scope, $state, contenu, service) {
	var dashboard = this;

  /* Listeners */
  $scope.$on('$destroy', function(){
  	console.log('controller dashboard detruit');
  })
	
	/* Exécution */
	console.info("controller dashboard charge");

}