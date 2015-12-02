(function () {
	'use strict';
	console.log('Chargement du module header ...');

	angular.module('funApp.views.header', [])
		.constant('headerComponents', {
			MENU : {
				path : "/components/header/menu/menu.html"
			}
		});

	console.log('Modules header charge.');
})();