(function() {
	'use strict';
	angular.module('funApp.views.error')
		.controller('errorCtrl', [
			'$state',
			errorCtrl
		]);

	function errorCtrl($state) {
		var error = this;
		
		console.log("controller error charge");
	}
})();