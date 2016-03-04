angular.module('funApp.views.error')
	.controller('errorCtrl', [
		'$state',
		errorCtrl
	]);

function errorCtrl($state) {
	var error = this;
	/* Exécution */
	console.log("controller error charge");
}