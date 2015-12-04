/**
 * Service de gestion des modales
 * @author lmguillemot @ ASI
 */
(function() {
	'use strict';
	angular.module('funApp.services')
		.service('popInService', [
			'funAppState',
			'$modal',
			popInService
		]);

	function popInService(funAppState, $modal) {
		

		this.ouvrir = function(name, url, controller, thenFunction){
			$modal.open({
				templateUrl : url,
				controller : controller,
			}).result.finally(thenFunction);
		}
	}
})();