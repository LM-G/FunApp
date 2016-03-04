angular.module('funApp.views.contacts')
	.controller('detailContactsCtrl', detailContactsCtrl);

/* Controleur de l'état contacts */
function detailContactsCtrl($scope, contact) {
	var detail = this;

	detail.person = contact;

    /* Listeners */
    $scope.$on('$destroy', function(){
    	console.log('controller detail contacts detruit');
    })
	
	/* Exécution */
	console.info("controller detail contacts charge");
}