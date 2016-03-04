
angular.module('funApp.views.home')
	.controller('partial1Ctrl', [
		'$scope',
		'$state',
		'item',
		partial1Ctrl
	]);

/* Controleur de l'état partial1 */
function partial1Ctrl($scope, $state, item) {
	var partial1 = this;

	/* variables */
	/* champ valeur de la form */
	partial1.valeur = null;

	/* fonctions publiques */
	/**
	 * Ferme la modale et renvoie les données du formulaire 
	 * vers l'état parent (home)
	 */
	partial1.save = function(){
		/* objet renvoyé */
		var result = {
			valeur : partial1.valeur
		}
		$scope.$close(result);
	}

	/**
	 * Ferme la modale et indique une action de type 'annuler' 
	 * à l'état parent (home)
	 */
	partial1.dismiss = function() {
		/* raison envoyé */
		var reason = 'cancel';
		$scope.$dismiss(reason);
    };

    /* Listeners */
    $scope.$on('$destroy', function(){
    	console.log('controller partial1 detruit');
    })
	
	/* Exécution */
	console.log("controller partial1 charge");
}