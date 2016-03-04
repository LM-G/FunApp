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