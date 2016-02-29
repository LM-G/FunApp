/**
 * Point d'entrée de l'application cliente
 */
(function() {
	'use strict';
  	angular.module('funApp', [
  		'ui.router',
      'ui.bootstrap',
      'oc.lazyLoad',
      'pascalprecht.translate',
      'funApp.views',
      'funApp.services',
      'funApp.constantes'
    ])

    .config([
      '$ocLazyLoadProvider',
      configLoading])

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
      configRoutes($urlRouterProvider);
      configEtats($stateProvider);
      // beautification de l'url
      $locationProvider.html5Mode(true);
    }/* ! routage */

    function configLoading($ocLazyLoadProvider){
      $ocLazyLoadProvider.config({
        debug: true,
        modules: [{
          name: 'funApp.views.test',
          files: [
            '/components/test/test.module.js',
            '/components/test/test.route.js'
          ],
          serie:true
        }]
      });
    }

    function configRoutes($urlRouterProvider){
      $urlRouterProvider
        .otherwise("/home");
    }/* ! configRoutes */

    function configEtats($stateProvider){
      $stateProvider.state('loadTest', {
        url: "/test", // root route
        onEnter: ['$state', function($state) {
          console.log('doing something');
          $state.go('test');
        }],
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('funApp.views.test');
          }]
        }
      });
    }
    
    /**
     * Chargement de la configuration du module de traduction
     */
    function traduction ($translateProvider, readerUtils){
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

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        console.warn('stateChangeStart : ' + toState.name);
      });
  	}/* ! main */
})();