angular.module('funApp.views.login')
	.service('loginService', [
		'$http',
		'$q',
		'User',
		loginService
	]);

/* Controleur de l'état contacts */
function loginService($http, $q, User) {

	var service = this;

	service.signin = signin;

	function signin(credentials){
		return $http.get( '/mock/me.json')
			.then(signinOK)
        	.catch(signinKO);

        function signinOK(response){
        	return response.data;
        }

        function signinKO(error){
        	console.error('XHR Failed for signin :' + error.data);
        	throw 'failLogin';
        }
	}
}