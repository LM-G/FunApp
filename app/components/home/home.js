angular.module('funApp.views.home')
	.controller('homeCtrl', homeCtrl);

function homeCtrl($state) {
	var home = this;
	
	console.log("controller home charge");

	home.ouvrirPartial1 = function(){
		$state.go('home.partial1');
	}

	home.ouvrirAbout = function(){
		$state.go('about');
	}
}