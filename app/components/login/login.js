angular.module('funApp.views.login')
	.controller('loginCtrl', loginCtrl);

function loginCtrl($state, $timeout, loginService) {
	var login = this;

	/* variables */
	login.credentials;
	login.hasError;

	/* fonctions publiques */
	login.signin = signin;
	login.closeAlert = closeAlert;
	
	/* Exécution */
	console.log("controller login charge");

	/* fonctions internes */
	function signin(form){
		console.log('connexion ...');
		$timeout(function(){
			loginService.signin(login.credentials)
				.then(function(result){
					console.info('result : ');
					console.log(result);
					/*
					if(result.token){
						// connexion ok
					} else {
						login.hasError = true;
					}*/
					$state.go('home');
				});
		},1000);
	}

	function closeAlert(){
		login.hasError = false;
	}
}