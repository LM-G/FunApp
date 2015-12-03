(function () {
	'use strict';
	console.log('Chargement des modules ...');

	// composants
	angular.module('funApp.views', [
		'funApp.views.error',
		'funApp.views.home',
		'funApp.views.header',
		'funApp.views.footer',
		'funApp.views.about',
		'funApp.views.contacts'
	]);
})();