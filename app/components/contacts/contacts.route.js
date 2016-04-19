angular.module('funApp.views.contacts')
	.config(configuration);

function configuration($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state("contacts", {
	      	url: "/contacts",
	      	abstract: true,
	      	templateUrl: "/components/contacts/contacts.html",
	      	controller: "contactsCtrl",
	      	controllerAs: "contacts",
	      	resolve : {
				listeContacts : [
					'$q',
					'contactsService',
					getListeContacts
				]
			}
    	});

	$urlRouterProvider.when('/contacts', '/contacts/liste');
	$urlRouterProvider.when('/contacts/', '/contacts/liste');

	console.info("config contacts chargee");

	function getListeContacts($q, contactsService){
		return contactsService.getContacts();
	}
}