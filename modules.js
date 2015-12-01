(function () {
	'use strict';
	console.log('Chargement des modules ...');

	// Services
	angular.module('funApp.services', []);

	angular.module('funApp.constantes', []);

	// Vues
	angular.module('funApp.views', [
		'funApp.views.home',
		'funApp.views.header',
		'funApp.views.about'
	]);
})();