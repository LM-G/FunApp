/**
 * Chargement des directives et états du footer
 */
(function () {
	'use strict';
	angular.module('funApp.views.footer')
	.directive('footer', ['footerComponents', footer]);

	function footer(config){
		return {
			restrict: 'C',
			templateUrl : config.CONTENT.path
		}
	}
})();