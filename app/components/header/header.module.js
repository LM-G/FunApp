console.log('Chargement du module header ...');

angular.module('funApp.views.header', [])
	.constant('headerComponents', {
		BASE : {
			path : "/components/header/header.html"
		},
		MENU : {
			path : "/components/header/menu/menu.html"
		}
	});

console.log('Modules header charge.');