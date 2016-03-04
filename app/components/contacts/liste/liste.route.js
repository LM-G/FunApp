angular.module('funApp.views.contacts')
	.constant('contactsListeConfig', {
		nom : "contacts.liste",
		type : "view",
		config : {
	        url: "/liste",
	        templateUrl: "/components/contacts/liste/contacts.liste.html"
    	}
    })
	.config(configuration);

function configuration($stateProvider, contactsListeConfig) {
	$stateProvider
		.state(contactsListeConfig.nom, contactsListeConfig.config);

	console.info("config liste_contacts charge");
}