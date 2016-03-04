(function(){
'use strict';
console.log('Chargement du module home ...');

angular.module('funApp.views.home', []);

console.log('Modules home charge.');

})();
(function(){
'use strict';
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
})();
(function(){
'use strict';

angular.module('funApp.views.home')
	.controller('partial1Ctrl', [
		'$scope',
		'$state',
		'item',
		partial1Ctrl
	]);

/* Controleur de l'état partial1 */
function partial1Ctrl($scope, $state, item) {
	var partial1 = this;

	/* variables */
	/* champ valeur de la form */
	partial1.valeur = null;

	/* fonctions publiques */
	/**
	 * Ferme la modale et renvoie les données du formulaire 
	 * vers l'état parent (home)
	 */
	partial1.save = function(){
		/* objet renvoyé */
		var result = {
			valeur : partial1.valeur
		}
		$scope.$close(result);
	}

	/**
	 * Ferme la modale et indique une action de type 'annuler' 
	 * à l'état parent (home)
	 */
	partial1.dismiss = function() {
		/* raison envoyé */
		var reason = 'cancel';
		$scope.$dismiss(reason);
    };

    /* Listeners */
    $scope.$on('$destroy', function(){
    	console.log('controller partial1 detruit');
    })
	
	/* Exécution */
	console.log("controller partial1 charge");
}
})();
(function(){
'use strict';
console.log('Chargement du module header ...');

angular.module('funApp.views.header', [])
	.constant('headerComponents', {
		BASE : {
			path : "/components/header/header.html"
		},
		MENU : {
			path : "/components/header/menu/menu.html"
		}
	});

console.log('Modules header charge.');
})();
(function(){
'use strict';
angular.module('funApp.views.header')
	.controller('menuCtrl', [
		'$state',
		menuCtrl
	]);

function menuCtrl($state) {
	var menu = this;

	menu.isActive = function(state){
		return $state.includes(state);
	}

	console.log("controller menu charge");
}
})();
(function(){
'use strict';

})();
(function(){
'use strict';
console.log('Chargement du module contacts ...');
angular.module('funApp.views.contacts', []);
console.log('Modules contacts charge.');
})();
(function(){
'use strict';
angular.module('funApp.views.contacts')
	.constant('contactsListeConfig', {
		nom : "contacts.liste",
		type : "view",
		config : {
	        url: "/liste",
	        templateUrl: "/components/contacts/liste/contacts.liste.html"
    	}
    })
	.config([
		'$stateProvider',
		'contactsListeConfig',
		configuration
	]);

function configuration($stateProvider, contactsListeConfig) {
	$stateProvider
		.state(contactsListeConfig.nom, contactsListeConfig.config);

	console.info("config liste_contacts charge");
}
})();
(function(){
'use strict';
angular.module('funApp.views.contacts')
	.constant('contactsDetailConfig', {
		nom : "contacts.detail",
		type : "view",
		config : {
	        url: "/:id",
	        templateUrl: "/components/contacts/detail/contacts.detail.html",
	        controller: "detailContactsCtrl",
	        controllerAs: "detail"
    	}
    })
	.config([
		'$stateProvider',
		'contactsDetailConfig',
		configuration
	]);

function configuration($stateProvider, contactsDetailConfig) {
	

	/* Ajout d'un resolve sur l'accès à l'état */
	angular.extend(contactsDetailConfig.config, {
		resolve : {
			contact : [
				'$q',
				'$stateParams',
				'listeContacts', 
				resolveId
			]
		}
	});

	$stateProvider
		.state(contactsDetailConfig.nom, contactsDetailConfig.config);

	console.info("config detail_contacts chargee");

	/**
	 * Détermination de l'existance d'une Id dans la liste de
	 * contacts récupérée par l'état parent : 'contacts'.
	 */
	function resolveId($q, $stateParams, listeContacts){
		/* Si le contact est présent dans la liste des 
		 * contacts alors la vue detail est chargée */
		function isContactExistant(contacts, id){
			for(var i = 0; i < contacts.length; i++){
				if(id == contacts[i].id){
					return contacts[i];
				}
			}
			return $q.reject({
				reason : 'contact inconnu', 
				fallback : 'contacts.liste', 
				detail : 'Le contact avec l\'identifiant '  
						+ id + ' n\'a pas ete trouve'
			});
		}/* ! isContactExistant */

		return isContactExistant(listeContacts, $stateParams.id);
	}/* ! resolveId*/
}/* ! configuration */

})();
(function(){
'use strict';
angular.module('funApp.views.contacts')
	.controller('detailContactsCtrl', [
		'$scope',
		'contact',
		detailContactsCtrl
	]);

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
})();
(function(){
'use strict';
console.log('Chargement du module proxy ...');

angular.module('funApp.services.proxy', []);

console.log('Module proxy charge.');

})();
(function(){
'use strict';
angular.module('funApp.services.proxy')
	.service('User', [
		User
	]);

function User(){

}
})();
(function(){
'use strict';
console.log('Chargement du module commons ...');

angular.module('funApp.services.commons', []);

console.log('Module commons charge.');
})();
(function(){
'use strict';
/**
 * Service de gestion de la lecture de fichier
 * @author lmguillemot @ ASI
 */
angular.module('funApp.services.commons')
	.service('readerUtils', [
		readerUtils
	]);

function readerUtils() {
	var service = this;

	/* Lecture de propiétés d'un fichier properties */
	service.readProperties = readProperties;

	/* fonctions internes */
	function readProperties(lignes){
		var result = {};
		var patterns = [
			/^\s*([^=:]+)\s*[:|=]\s*(.*)$/
		];
		var quotePattern = /^"(.*)"$/;
		for (var i = 0; i < lignes.length; i++) {
			for (var j = 0; j < patterns.length; j++) {
				var match = lignes[i].match(patterns[j]);
				if (match && match[0] && match[0].length > 0) {
					var key = match[1], value = match[2];
					if (value && value.length > 0) {
						var quoteMatch = value.match(quotePattern);
						if (quoteMatch && quoteMatch[0] 
							&& quoteMatch[0].length) {
							value = quoteMatch[1];
						}
					}
					result[key] = value;
					break;
				}
			}
		}
		return result;
	}

	console.log('reader UTILS CHARGE');
}
})();
(function(){
'use strict';
/**
 * Service de gestion des array
 * @author lmguillemot @ ASI
 */
angular.module('funApp.services.commons')
	.service('arrayUtils', [
		arrayUtils
	]);

function arrayUtils() {
	var service = this;

	/* Récupération d'un élement en fonction d'une propriete */
	service.findBy = findBy;
	/* Récupération de tous les élements correspondant à la propriété */
	service.findAllBy = findAllBy;
	/* Suppression d'un élement en fonction d'une propriete */
	service.removeBy = removeBy;
	/* Suppression de tous les élements correspondant à la propriété */
	service.removeAllBy = removeAllBy;
	/* Suppression d'un élément */
	service.remove = remove;

	/**
   * Retourne le premier element d'une liste qui a la propriete
   * egale à la valeur donnée en parametre
   * @param  {Text} propriete : nom de la propriete
   * @param  {Number} value : valeur de la propriete
   * @param  {Array} liste : liste à parcourir
   * @return {Object} l'element trouvé
   */
  function findBy(propriete, value, liste) {
    var result = liste.filter(function(element) {
      if (element[propriete] === value) {
        return element;
      }
    });

    if (result.length) {
      return result[0];
    }
  };

  /**
   * Retourne la liste des elements d'une liste qui ont la propriete
   * egale à la valeur donnée en parametre
   * @param  {Text} propriete : nom de la propriete
   * @param  {Number} value : valeur de la propriete
   * @param  {Array} liste : liste à parcourir
   * @return {Array} la liste des elements trouvés
   */
  function findAllBy(propriete, value, liste) {
    return liste.filter(function(element) {
      if (element[propriete] === value) {
        return element;
      }
    });
  };

  /**
   * Supprime la premiere occurence d'un élément spécifique dans une liste
   * @param  {Text} propriete : nom de la propriete de l'element
   * @param  {Number} value : valeur de la propriete de l'element
   * @param  {Array} liste : liste à parcourir
   * @return {Obj} l'element supprimé;
   */
  function removeBy(propriete, value, liste) {
    var element = service.findBy(propriete, value, liste);
    if (element) {
      return liste.splice(liste.indexOf(element), 1);
    }
  };

  /**
   * Supprime toutes occurences d'un élément spécifique dans une liste
   * @param  {Text} propriete : nom de la propriete de l'element
   * @param  {Number} value : valeur de la propriete de l'element
   * @param  {Array} liste : liste à parcourir
   * @return {Array} les elements supprimés;
   */
  function removeAllBy(propriete, value, liste) {
    var result = null;
    var elements = service.findAllBy(propriete, value, liste);
    if (elements.length) {
      result = [];
    }
    for (var i = 0; i < elements.length; i++) {
      result.push(liste.splice(liste.indexOf(elements[i]), 1));
    }
    return result && result.length ? result : null;
  };

  /**
   * Supprime tous les elements spécifiques d'une liste
   * @param  {Obj} element : element spécifique à supprimer de la liste
   * @param  {Array} liste : liste a parcourir
   */
  function remove(element, liste) {
    var idx = liste.indexOf(element);
    while (idx != -1) {
      console.info('element delete');
      liste.splice(idx, 1);
      idx = liste.indexOf(element);
    }
  };
}
})();
(function(){
'use strict';
console.log('Chargement du module auth ...');

angular.module('funApp.services.auth', [
	'angular-storage'
]);

console.log('Module auth charge.');
})();
(function(){
'use strict';
angular.module('funApp.services.auth')

})();
(function(){
'use strict';
console.log('Chargement du module login ...');

angular.module('funApp.views.login', []);

console.log('Modules login charge.');
})();
(function(){
'use strict';
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
})();
(function(){
'use strict';
/**
 * Chargement des directives et états de la page login
 */
angular.module('funApp.views.login')
	.constant('loginConfig', {
		nom : "login",
		type : "view",
		config : {
	        url: "/login",
	        templateUrl: "/components/login/login.html",
	        controller:'loginCtrl',
	        controllerAs:'login'
    	}
    })
	.config([
		'$stateProvider',
		'loginConfig',
		configuration
	]);

function configuration($stateProvider,loginConfig) {
	$stateProvider
		.state(loginConfig.nom, loginConfig.config);

	console.info("config login chargee");
}
})();
(function(){
'use strict';
angular.module('funApp.views.login')
	.controller('loginCtrl', [
		'$state',
		'$timeout',
		'loginService',
		loginCtrl
	]);

function loginCtrl($state, $timeout, service) {
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
			service.signin(login.credentials)
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
})();
(function(){
'use strict';
console.log('Chargement du module error ...');
angular.module('funApp.views.error', [])
.run([
		'$rootScope',
		'$state',
		 errorHandler
	]);
	console.log('Modules error charge.');

	function errorHandler($rootScope, $state){
		console.log('errorHandler en cours de fonctionnement');
		$rootScope.$on('$stateChangeError', handleStateChangeError);

	/**
	* Gestion des erreur de chargement d'état qui suivent une rejection
	* du resolve.
	*/
	function handleStateChangeError(event, toState, toParams, fromState, fromParams, error){
		console.warn('$stateChangeError');
		console.warn(error);
		if(error.fallback){
			$state.go(error.fallback);
		} else {
			$state.go('error');
		}
	}/* ! handleStateChangeError */
}/* ! errorHandler */
	
	
})();
(function(){
'use strict';
angular.module('funApp.views.error')
	.constant('errorConfig', {
		nom : "error",
		type : "view",
		config : {
	        url: "/error",
	        templateUrl: "/components/error/error.html",
	        controller: "errorCtrl",
	        controllerAs: "error"
    	}
    })
	.config([
		'$stateProvider',
		'errorConfig',
		configuration
	]);

function configuration($stateProvider, errorConfig) {
	$stateProvider
		.state(errorConfig.nom, errorConfig.config);
	console.info("config error chargee");
}
})();
(function(){
'use strict';
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
})();
(function(){
'use strict';
/**
 * Chargement des directives et états du menu
 */
angular.module('funApp.views.home')
	.constant('homeConfig', {
		nom : "home",
		type : "view",
		config : {
	        url: "/home",
	        templateUrl: "/components/home/home.html",
	        controller: "homeCtrl",
	        controllerAs: "home"
    	}
    })
	.config([
		'$stateProvider',
		'homeConfig',
		configuration
	]);

function configuration($stateProvider, homeConfig) {
	$stateProvider
		.state(homeConfig.nom, homeConfig.config);

	console.info("config home chargee");
}
})();
(function(){
'use strict';
angular.module('funApp.views.home')
	.controller('homeCtrl', [
		'$state',
		homeCtrl
	]);

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
})();
(function(){
'use strict';
/**
 * Chargement des directives et états du header
 */
angular.module('funApp.views.header')
	.directive('header', ['headerComponents', header])
	.directive('headerMenu', ['headerComponents', headerMenu]);

function header(config){
	return {
		restrict: 'C',
		templateUrl : config.BASE.path
	}
}

function headerMenu(config){
	return {
		restrict: 'A',
		templateUrl : config.MENU.path,
		controller : 'menuCtrl',
		controllerAs : 'menu'
	}
}
})();
(function(){
'use strict';

console.log('Chargement du module footer ...');

angular.module('funApp.views.footer', [])
	.constant('footerComponents', {
		CONTENT : {
			path : "/components/footer/footer.html"
		}
	});

console.log('Modules footer charge.');

})();
(function(){
'use strict';
/**
 * Chargement des directives et états du footer
 */
angular.module('funApp.views.footer')
.directive('footer', ['footerComponents', footer]);

function footer(config){
	return {
		restrict: 'C',
		templateUrl : config.CONTENT.path
	}
}
})();
(function(){
'use strict';
console.log('Chargement du module dashboard ...');
angular.module('funApp.views.dashboard', []);
console.log('Modules dashboard charge.');
})();
(function(){
'use strict';
angular.module('funApp.views.dashboard')
	.service('dashboardService', [
		'$http',
		'$q',
		dashboardService
	]);

/* Controleur de l'état service */
function dashboardService($http, $q) {
	var service = this;
}
})();
(function(){
'use strict';
angular.module('funApp.views.dashboard')
	.constant('dashboardConfig', {
		nom : "dashboard",
		type : "view",
		config : {
      url: "/dashboard",
      templateUrl: "/components/dashboard/dashboard.html",
      controller: "dashboardCtrl",
      controllerAs: "dashboard"
  	}
  })
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		'dashboardConfig',
		configuration
	]);

function configuration($stateProvider, $urlRouterProvider, dashboardConfig) {

	$stateProvider
		.state(dashboardConfig.nom, dashboardConfig.config);

	console.info("config dashboard chargee");
}
})();
(function(){
'use strict';
angular.module('funApp.views.dashboard')
	.controller('dashboardCtrl', [
		'$scope',
		'$state',
		'dashboardContenu',
		'dashboardService',
		dashboardCtrl
	]);

/* Controleur de l'état dashboard */
function dashboardCtrl($scope, $state, contenu, service) {
	var dashboard = this;

  /* Listeners */
  $scope.$on('$destroy', function(){
  	console.log('controller dashboard detruit');
  })
	
	/* Exécution */
	console.info("controller dashboard charge");

}
})();
(function(){
'use strict';
angular.module('funApp.views.dashboard')
	.factory('dashboardContenu', [
		dashboardContenu
	]);

/* Gestionnaire de contenu de l'état dashboard */
function dashboardContenu() {
	var contenu = {};

	
	
	/* Exécution */
	console.info("dashboard contenu charge");

	return contenu;
}
})();
(function(){
'use strict';
angular.module('funApp.views.contacts')
	.service('contactsService', [
		'$http',
		'$q',
		contactsService
	]);

/* Controleur de l'état contacts */
function contactsService($http, $q) {

	var service = this;

	service.getContacts = getContacts;

	function getContacts(){
		return $http.get( '/mock/contacts.json', {cache:true})
			.then(getContactsOK)
      .catch(getContactsKO);

    function getContactsOK(response){
    	return response.data;
    }

    function getContactsKO(error){
    	console.error('XHR Failed for getContacts.' + error.data);
    }
	}

	function getContact(id){
		return $http.get( '/mock/contact' + id + '.json', {cache:true})
			.then(getContactOK)
      .catch(getContactKO);

    function getContactOK(response){
    	return response.data;
    }

    function getContactKO(error){
    	console.error('XHR Failed for getContacts.' + error.data);
    	return error;
    }
	}
}
})();
(function(){
'use strict';
angular.module('funApp.views.contacts')
	.constant('contactsConfig', {
		nom : "contacts",
		type : "view",
		config : {
      url: "/contacts",
      abstract: true,
      templateUrl: "/components/contacts/contacts.html",
      controller: "contactsCtrl",
      controllerAs: "contacts"
    }
  })
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		'contactsConfig',
		configuration
	]);

function configuration($stateProvider, $urlRouterProvider, contactsConfig) {
	
	angular.extend(contactsConfig.config, {
		resolve : {
			listeContacts : [
				'$q',
				'contactsService',
				getListeContacts
			]
		}
	});

	$stateProvider
		.state(contactsConfig.nom, contactsConfig.config);

	$urlRouterProvider.when('/contacts', '/contacts/liste');
	$urlRouterProvider.when('/contacts/', '/contacts/liste');

	console.info("config contacts chargee");

	function getListeContacts($q, contactsService){
		return contactsService.getContacts();
	}
}
})();
(function(){
'use strict';
angular.module('funApp.views.contacts')
	.controller('contactsCtrl', [
		'$scope',
		'$state',
		'contactsContenu',
		'contactsService',
		'listeContacts',
		contactsCtrl
	]);

/* Controleur de l'état contacts */
function contactsCtrl($scope, $state, contenu, service, listeContacts) {
	var contacts = this;

	contacts.searchBox = null;
	
	contacts.getListe = contenu.getListeContacts;

    /* Listeners */
    $scope.$on('$destroy', function(){
    	console.log('controller contacts detruit');
    })
	
	/* Exécution */
	contenu.setListeContacts(listeContacts);
	console.info("controller contacts charge");

}
})();
(function(){
'use strict';
angular.module('funApp.views.contacts')
	.factory('contactsContenu', [
		contactsContenu
	]);

/* Gestionnaire de contenu de l'état contacts */
function contactsContenu() {
	var contenu = {};

	var contacts;

	contenu.setListeContacts = function(liste){
		contacts = liste;
	}

	contenu.getListeContacts = function(){
		return contacts;
	}

	contenu.getContact = function(id){
		for(var i = 0; i < contacts.length; i++){
			if(id == contacts[i].id){
				return contacts[i];
			}
		}
	}
	
	/* Exécution */
	console.info("contacts contenu charge");

	return contenu;
}
})();
(function(){
'use strict';
console.log('Chargement du module about ...');
angular.module('funApp.views.about', []);
console.log('Modules about charge.');

})();
(function(){
'use strict';
/**
 * Chargement des directives et états de la page about
 */
angular.module('funApp.views.about')
	.constant('aboutConfig', {
		nom : "about",
		type : "view",
		config : {
	        url: "/about",
	        templateUrl: "/components/about/about.html"
    	}
    })
	.config([
		'$stateProvider',
		'aboutConfig',
		configAbout
	]);

function configAbout($stateProvider, aboutConfig) {
	$stateProvider
		.state(aboutConfig.nom, aboutConfig.config);

	console.info("config about chargee");
}

})();
(function(){
'use strict';

})();
(function(){
'use strict';
console.log('Chargement du module services ...');

angular.module('funApp.services', [
	'funApp.services.auth',
	'funApp.services.proxy',
	'funApp.services.commons'
]);

console.log('Modules services charge.');
})();
(function(){
'use strict';
console.log('Chargement du module constantes ...');

angular.module('funApp.constantes', []);

console.log('Modules constantes charge.');

})();
(function(){
'use strict';
/**
 * Constantes de développement
 */
angular.module('funApp.constantes')
.constant('ERROR', {
	'DESTROY' : '$destroy',
	'CHANGE_STATE' : '$stateChangeError'
});

})();
(function(){
'use strict';
console.log('Chargement des modules ...');

// composants
angular.module('funApp.views', [
	'funApp.views.error',
	'funApp.views.login',
	'funApp.views.home',
	'funApp.views.header',
	'funApp.views.footer',
	'funApp.views.about',
	'funApp.views.contacts',
	'funApp.views.dashboard'
]);

// templates html
angular.module('funApp.templates', []);
})();
(function(){
'use strict';
/**
 * Point d'entrée de l'application cliente
 */
angular.module('funApp', [
	'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',
  'funApp.views',
  'funApp.services',
  'funApp.constantes',
  // templates HTML en cache
  'funApp.templates'
])

/* routes et états */
.config([
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
  routage])

/* traductions */
.config([
  '$translateProvider',
  traduction])

.run([
  '$rootScope',
  '$state',
  main]);

/**
 * Configuration des routes et des états de l'application
 */
function routage ($locationProvider, $urlRouterProvider, $stateProvider){
  // configuration des routes principales
 $urlRouterProvider
    .otherwise("/home");
  // beautification de l'url
  $locationProvider.html5Mode(true);
}/* ! routage */


/**
 * Chargement de la configuration du module de traduction
 */
function traduction ($translateProvider){
  $translateProvider.useStaticFilesLoader({
    prefix: '/lang/locale-',
    suffix: '.json'
  });
  $translateProvider
    .useSanitizeValueStrategy(null)
    .determinePreferredLanguage()
    .fallbackLanguage('fr');
}/* ! traduction */

/**
 * Boucle principale de l'application
 */
function main($rootScope, $state) {
  console.info('client lance');

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    console.warn('stateChangeStart : ' + toState.name);
  });
}/* ! main */
})();