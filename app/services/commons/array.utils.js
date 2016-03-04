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