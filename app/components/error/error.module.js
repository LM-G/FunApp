console.log('Chargement du module error ...');
angular.module('funApp.views.error', [])
	.run(errorHandler);
console.log('Modules error charge.');

function errorHandler($rootScope, $state){
	console.log('errorHandler en cours de fonctionnement');
	$rootScope.$on('$stateChangeError', handleStateChangeError);

	/**
	* Gestion des erreur de chargement d'état qui suivent une rejection
	* du resolve.
	*/
	function handleStateChangeError(event, toState, toParams, fromState, fromParams, error){
		console.warn('$stateChangeError');
		console.warn(error);
		if(error.fallback){
			$state.go(error.fallback);
		} else {
			$state.go('error');
		}
	}/* ! handleStateChangeError */
}/* ! errorHandler */
	
	