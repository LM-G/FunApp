(function() {
	'use strict';
	angular.module('funApp.views.contacts')
		.controller('contactsCtrl', [
			'$scope',
			'$state',
			'contactsContenu',
			'contactsService',
			contactsCtrl
		]);

	/* Controleur de l'état contacts */
	function contactsCtrl($scope, $state, contenu, service) {
		var contacts = this;

		contacts.searchBox = null;
		contacts.getListe = contenu.getListeContacts;

	    /* Listeners */
	    $scope.$on('$destroy', function(){
	    	console.log('controller contacts detruit');
	    })
		
		/* Exécution */
		service.getContacts().then(function(listeContacts){
			console.warn(listeContacts);
			contenu.setListeContacts(listeContacts);
		});

		console.info("contacts charge");
	}
})();