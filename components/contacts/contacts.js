(function() {
	'use strict';
	angular.module('funApp.views.contacts')
		.controller('contactsCtrl', [
			'$scope',
			'$state',
			'contactsContenu',
			contactsCtrl
		]);

	/* Controleur de l'état contacts */
	function contactsCtrl($scope, $state, contenu) {
		var contacts = this;

		contacts.getListe = contenu.getListeContacts;

	    /* Listeners */
	    $scope.$on('$destroy', function(){
	    	console.log('controller contacts detruit');
	    })
		
		/* Exécution */
		console.info("contacts charge");
	}
})();