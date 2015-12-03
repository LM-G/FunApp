(function () {
	'use strict';
	console.log('Chargement du module auth ...');

	angular.module('funApp.services.auth', [
		'angular-storage'
	]);
	
	console.log('Module auth charge.');
})();