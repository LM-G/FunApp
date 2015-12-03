/**
 * Chargement des directives et états du header
 */
(function () {
	'use strict';
	angular.module('funApp.views.header')
	.directive('headerMenu', ['headerComponents', headerMenu]);

	function headerMenu(config){
		return {
			restrict: 'A',
			templateUrl : config.MENU.path,
			controller : 'menuCtrl',
			controllerAs : 'menu'
		}
	}
})();