(function() {
	'use strict';
	angular.module('funApp.views.contacts')
		.controller('detailContactsCtrl', [
			'$scope',
			'$state',
			'$stateParams',
			'contactsContenu',
			detailContactsCtrl
		]);

	/* Controleur de l'état contacts */
	function detailContactsCtrl($scope, $state, $stateParams, contactsContenu) {
		var detail = this;

		var listeContacts = contactsContenu.getListeContacts();

	    /* Listeners */
	    $scope.$on('$destroy', function(){
	    	console.log('controller detail contacts detruit');
	    })
		
		/* Exécution */
		detail.person = listeContacts[$stateParams.id];
		console.info("detail contacts charge");
	}
})();