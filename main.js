/**
 * Point d'entrée de l'application cliente
 */
(function() {
	'use strict';
  	angular.module('funApp', [
  		'ui.router',
      'ui.bootstrap',
      'pascalprecht.translate',
      'funApp.views',
      'funApp.services',
      'funApp.constantes'
    ])

    /* routes et états */
  	.config([
      '$locationProvider',
      '$urlRouterProvider',
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
  	function routage ($locationProvider, $urlRouterProvider){
      // configuration des routes principales
      configRoutes($urlRouterProvider);
      // beautification de l'url
      $locationProvider.html5Mode(true);
    }/* ! routage */

    function configRoutes($urlRouterProvider){
      $urlRouterProvider
        .otherwise("/home");
    }/* ! configRoutes */
    
    /**
     * Chargement de la configuration du module de traduction
     */
    function traduction ($translateProvider){
      $translateProvider.useStaticFilesLoader({
        prefix: '/assets/lang/',
        suffix: '.json'
      });
      $translateProvider.useSanitizeValueStrategy(null);
      $translateProvider.preferredLanguage('fr');
    }/* ! traduction */

    /**
     * Boucle principale de l'application
     */
  	function main($rootScope, $state) {
      console.log('client lance');
  	}/* ! main */

    

})();