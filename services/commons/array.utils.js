/**
 * Service de gestion des array
 * @author lmguillemot @ ASI
 */
(function() {
	'use strict';
	angular.module('funApp.services.commons')
		.service('arrayUtils', [
			arrayUtils
		]);

	function arrayUtils() {
		var service = this;

		/* Récupération d'un élement en fonction d'un id */
		service.findById = findById;

		function findById(liste, id){
			for(var i = 0; i < liste.length; i++){
				if(id == liste[i].id){
					return liste[i];
				}
			}
		}
	}
})();