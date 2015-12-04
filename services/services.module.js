(function () {
	'use strict';
	console.log('Chargement du module services ...');

	angular.module('funApp.services', [
		'funApp.services.auth',
		'funApp.services.proxy',
		'funApp.services.commons'
	]);
	
	console.log('Modules services charge.');
})();