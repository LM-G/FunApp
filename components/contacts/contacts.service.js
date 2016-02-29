(function() {
	'use strict';
	angular.module('funApp.views.contacts')
		.service('contactsService', [
			'$http',
			'$q',
			contactsService
		]);

	/* Controleur de l'état contacts */
	function contactsService($http, $q) {

		var service = this;

		service.getContacts = getContacts;

		function getContacts(){
			return $http.get( '/assets/mock/contacts.json', {cache:true})
				.then(getContactsOK)
            	.catch(getContactsKO);

            function getContactsOK(response){
            	return response.data;
            }

            function getContactsKO(error){
            	console.error('XHR Failed for getContacts.' + error.data);
            }
		}

		function getContact(id){
			return $http.get( '/assets/mock/contact' + id + '.json', {cache:true})
				.then(getContactOK)
            	.catch(getContactKO);

            function getContactOK(response){
            	return response.data;
            }

            function getContactKO(error){
            	console.error('XHR Failed for getContacts.' + error.data);
            	return error;
            }
		}
	}
})();