/**
 * Service de gestion de la lecture de fichier
 * @author lmguillemot @ ASI
 */
(function() {
	'use strict';
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