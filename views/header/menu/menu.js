(function() {
	'use strict';
	angular.module('funApp.views.header')
		.controller('menuCtrl', [
			'$state',
			menuCtrl
		]);

	function menuCtrl($state) {
		var menu = this;
		/* Variables */
		menu.state = $state;

		console.log("controller menu charge");
	}
})();