(function () {
	'use strict';
	console.log('Chargement du module header ...');

	angular.module('funApp.views.header', [])
		.constant('headerComponents', {
			MENU : {
				path : "/views/header/menu/menu.html"
			}
		});

	console.log('Modules header charge.');
})();