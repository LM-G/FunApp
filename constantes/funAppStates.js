/**
 * Constantes de développement
 */
(function(){
	'use strict';
	angular.module('funApp.constantes')
	.constant('funAppStates', {
		STATES : {
			HOME : {
				nom : "home",
				type : "view",
				config : {
			        url: "/home",
			        templateUrl: "/views/home/home.html",
			        controller: "homeCtrl",
			        controllerAs: "home"
		    	}
		    },
		    HOME_PARTIAL1 : {
				nom : "home.partial1",
				type : "modal",
				config : {
			        url: "/partial1",
			        templateUrl: "/views/home/partial1/partial1.html",
			        controller: "partial1Ctrl",
			        controllerAs: "partial1",
			      	resolve: {
		             	item: (function() {
		             		var test = 0; 
		             		return test+1; 
		             	})()
		            }
		    	}
		    }
		}
	});
})();
