angular.module('funApp.views.labo')
	.controller('laboCtrl', laboCtrl);

/**
 * Controleur de l'état dashboard
 */
function laboCtrl($scope, $state) {
	var labo = this;

  /* Listeners */
  $scope.$on('$destroy', function(){
  	console.log('controller labo detruit');
  })
	
	/* Exécution */
	console.info("controller labo charge");
}