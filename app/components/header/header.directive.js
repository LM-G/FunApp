/**
 * Chargement des directives et états du header
 */
angular.module('funApp.views.header')
	.directive('header', ['headerComponents', header]);

function header(config){
	return {
		restrict: 'C',
		templateUrl : config.BASE.path,
		replace : true
	}
}