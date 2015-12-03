(function () {
	'use strict';
	console.log('Chargement du module services ...');

	angular.module('funApp.services', [
		'funApp.services.auth'
	]);
	
	console.log('Modules services charge.');
})();