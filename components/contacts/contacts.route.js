(function() {
	'use strict';
	angular.module('funApp.views.contacts')
		.constant('contactsConfig', {
			nom : "contacts",
			type : "view",
			config : {
		        url: "/contacts",
		        abstract: true,
		        templateUrl: "/components/contacts/contacts.html",
		        controller: "contactsCtrl",
		        controllerAs: "contacts"
	    	}
	    })
		.config([
			'$stateProvider',
			'$urlRouterProvider',
			'contactsConfig',
			configuration
		]);

	function configuration($stateProvider, $urlRouterProvider, contactsConfig) {
		
		angular.extend(contactsConfig.config, {
			resolve : {
				listeContacts : [
					'$q',
					'contactsService',
					getListeContacts
				]
			}
		});

		$stateProvider
			.state(contactsConfig.nom, contactsConfig.config);

		$urlRouterProvider.when('/contacts', '/contacts/liste');
		$urlRouterProvider.when('/contacts/', '/contacts/liste');

		console.info("config contacts chargee");

		function getListeContacts($q, contactsService){
			return contactsService.getContacts();
		}
	}
})();