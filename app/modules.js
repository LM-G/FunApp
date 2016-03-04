console.log('Chargement des modules ...');

// composants
angular.module('funApp.views', [
	'funApp.views.error',
	'funApp.views.login',
	'funApp.views.home',
	'funApp.views.header',
	'funApp.views.footer',
	'funApp.views.about',
	'funApp.views.contacts',
	'funApp.views.dashboard'
]);

// templates html
angular.module('funApp.templates', []);