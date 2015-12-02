(function() {
	'use strict';
	angular.module('funApp.views.contacts')
		.constant('contactsDetailConfig', {
			nom : "contacts.detail",
			type : "view",
			config : {
		        url: "/:id",
		        templateUrl: "/components/contacts/detail/contacts.detail.html",
		        controller: "detailContactsCtrl",
		        controllerAs: "detail"
	    	}
	    })
		.config([
			'$stateProvider',
			'contactsDetailConfig',
			configuration
		]);

	function configuration($stateProvider, contactsDetailConfig) {
		angular.extend(contactsDetailConfig.config, {
			resolve : {
				contact : [
					'$stateParams',
					'contactsContenu', 
					function(contactsContenu){
						var contact = contactsContenu.getContact();
						if( contact != null){
							return contact;
						}
					}
				]
			}
		})
		$stateProvider
			.state(contactsDetailConfig.nom, contactsDetailConfig.config);

		console.info("config detail_contacts charge");
	}
})();