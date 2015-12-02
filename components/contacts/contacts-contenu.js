(function() {
	'use strict';
	angular.module('funApp.views.contacts')
		.factory('contactsContenu', [
			contactsContenu
		]);

	/* Gestionnaire de contenu de l'état contacts */
	function contactsContenu() {
		var contenu = {};

		var contacts = [
			{ id:0, name: "Toto", age:42, genre:"male", role : "chevalier" }, 
			{ id:1, name: "Titi", age: 243, genre:"female", role : "mage" }
		];

		contenu.getListeContacts = function(){
			return contacts;
		}
		
		/* Exécution */
		console.info("contacts contenu charge");

		return contenu;
	}
})();