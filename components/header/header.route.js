/**
 * Chargement des directives et états du header
 */
(function () {
	'use strict';
	angular.module('funApp.views.header')
	.directive('header', ['headerComponents', header])
	.directive('headerMenu', ['headerComponents', headerMenu]);

	function header(config){
		return {
			restrict: 'C',
			templateUrl : config.BASE.path
		}
	}

	function headerMenu(config){
		return {
			restrict: 'A',
			templateUrl : config.MENU.path,
			controller : 'menuCtrl',
			controllerAs : 'menu'
		}
	}
})();