angular.module('funApp.views.home')
	.constant('partial1Config', {
		nom : "home.partial1",
		type : "modal",
		config : {
	        url: "/partial1",
	        templateUrl: "/components/home/partial1/partial1.html",
	        controller: "partial1Ctrl",
	        controllerAs: "partial1"
    	}
    })
	.config([
		'$stateProvider',
		'partial1Config',
		configuration
	]);

function configuration($stateProvider, partial1Config) {
	function ouvrirModale($state, $uibModal){
		angular.extend(partial1Config.config ,{
			resolve: {
	      		item : function(){
	            	return {value: 'simple!'}
	            }
		    }
		});

		$uibModal.open(partial1Config.config)
		.result.then(function(result){
			console.info("result : ");
			console.log(result);
		},function(reason){
			console.info("reason : " + reason);
		})
		.finally(function() {
			console.info('fermeture modale partial1');
			/* revenir à l'état parent : (home) */
           	$state.go('^');
        });
	}

	$stateProvider
		.state(partial1Config.nom, {
		url : partial1Config.config.url,
		onEnter : [
			'$state',
			'$uibModal',
			/* possibilite d'ajouter $resource et $stateParams */
			ouvrirModale
		]
	});

	console.info("config partial1 chargee");
}