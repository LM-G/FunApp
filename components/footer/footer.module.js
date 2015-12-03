(function () {
	'use strict';
	console.log('Chargement du module footer ...');

	angular.module('funApp.views.footer', [])
		.constant('footerComponents', {
			CONTENT : {
				path : "/components/footer/footer.html"
			}
		});

	console.log('Modules footer charge.');
})();