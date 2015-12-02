(function() {
	'use strict';
	angular.module('funApp.views.contacts')
		.controller('contactsCtrl', [
			'$scope',
			'$state',
			'contactsContenu',
			'contactsService',
			'listeContacts',
			contactsCtrl
		]);

	/* Controleur de l'état contacts */
	function contactsCtrl($scope, $state, contenu, service, listeContacts) {
		var contacts = this;

		contacts.searchBox = null;
		contacts.getListe = contenu.getListeContacts;

	    /* Listeners */
	    $scope.$on('$destroy', function(){
	    	console.log('controller contacts detruit');
	    })
		
		/* Exécution */
		contenu.setListeContacts(listeContacts);
		console.info("controller contacts charge");

	}
})();