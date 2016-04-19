angular.module('funApp.views.contacts')
	.controller('contactsCtrl', contactsCtrl);

/* Controleur de l'état contacts */
function contactsCtrl($scope, $state, contactsContenu, contactsService, listeContacts) {
	var contacts = this;

	contacts.searchBox = null;
	
	contacts.getListe = contactsContenu.getListeContacts;

  /* Listeners */
  $scope.$on('$destroy', function(){
  	console.log('controller contacts detruit');
  })
	
	/* Exécution */
	contactsContenu.setListeContacts(listeContacts);
	console.info("controller contacts charge");

}