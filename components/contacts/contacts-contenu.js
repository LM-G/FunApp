(function() {
	'use strict';
	angular.module('funApp.views.contacts')
		.factory('contactsContenu', [
			contactsContenu
		]);

	/* Gestionnaire de contenu de l'état contacts */
	function contactsContenu() {
		var contenu = {};

		var contacts;

		contenu.setListeContacts = function(liste){
			contacts = liste;
		}

		contenu.getListeContacts = function(){
			return contacts;
		}

		contenu.getContact = function(id){
			for(var i = 0; i < contacts.length; i++){
				if(id === contacts[i].id){
					return contacts[i];
				}
			}
		}
		
		/* Exécution */
		console.info("contacts contenu charge");

		return contenu;
	}
})();