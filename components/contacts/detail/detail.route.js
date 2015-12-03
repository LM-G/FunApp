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
		/**
		 * Détermination de l'existance d'une Id dans la liste de
		 * contacts récupérée par l'état parent : 'contacts'.
		 */
		function resolveId($q, $stateParams, listeContacts){
			var deferred = $q.defer();

			/* Si le contact est présent dans la liste des 
			 * contacts alors la vue detail est chargée */
			function isContactExistant(contacts, id){
				for(var i = 0; i < contacts.length; i++){
					if(id == contacts[i].id){
						deferred.resolve(contacts[i]);
					}
				}
				deferred.reject({
					reason : 'contact inconnu', 
					fallback : 'contacts.liste', 
					detail : 'Le contact avec l\'identifiant '  
							+ id + ' n\'a pas ete trouve'
				});
			}/* ! isContactExistant */

			isContactExistant(listeContacts, $stateParams.id);
			return deferred.promise;
		}/* ! resolveId*/

		/* Ajout d'un resolve sur l'accès à l'état */
		angular.extend(contactsDetailConfig.config, {
			resolve : {
				contact : [
					'$q',
					'$stateParams',
					'listeContacts', 
					resolveId
				]
			}
		});

		$stateProvider
			.state(contactsDetailConfig.nom, contactsDetailConfig.config);

		console.info("config detail_contacts charge");
	}/* ! configuration */
})();