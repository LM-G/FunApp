angular.module('funApp.views.home')
	.config(configurationPartial1);

function configurationPartial1($stateProvider) {
	var config = {
    url: "/partial1",
    templateUrl: "/components/home/partial1/partial1.html",
    controller: "partial1Ctrl",
    controllerAs: "partial1"
	}

  $stateProvider
	.state("home.partial1", {
		url : config.url,
		onEnter : [
			'$state',
			'$uibModal',
			/* possibilite d'ajouter $resource et $stateParams */
			ouvrirModale
		]
	});

	function ouvrirModale($state, $uibModal){
		angular.extend(config , {
			resolve: {
	      		item : function(){
	            	return {value: 'simple!'}
	            }
		    }
		});

		$uibModal
			.open(config)
			.result
			.then(function(result){
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
	
	console.info("config partial1 chargee");
}