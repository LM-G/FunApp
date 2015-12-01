(function() {
	'use strict';
	angular.module('funApp.views.header')
		.controller('menuCtrl', [
			'$state',
			menuCtrl
		]);

	function menuCtrl($state) {
		var menu = this;

		menu.isActive = function(state){
			return $state.current.name == state;
		}

		console.log("controller menu charge");
	}
})();