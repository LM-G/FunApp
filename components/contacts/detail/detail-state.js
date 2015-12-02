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
					'$q',
					'$stateParams',
					'listeContacts', 
					function($q, $stateParams, listeContacts){
						var deferred = $q.defer();

						function testExistance(contacts, id){
							for(var i = 0; i < contacts.length; i++){
								if(id == contacts[i].id){
									deferred.resolve(contacts[i]);
								}
							}
							deferred.reject({reason : 'contact inconnu', fallback : 'contacts.liste'});
						}

						testExistance(listeContacts, $stateParams.id);

						return deferred.promise;
					}
				]
			}
		});

		$stateProvider
			.state(contactsDetailConfig.nom, contactsDetailConfig.config);

		console.info("config detail_contacts charge");
	}
})();