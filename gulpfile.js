// Dépendances ====================================================================================
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var gulpSequence = require('gulp-sequence');

// Variables =====================================================================================

var PATH_SCRIPTS =  'app/components/**/*.js';
var PATH_INDEX = 'app/index.html';
var PATH_DIST = 'dist/';
// Tâches =========================================================================================

// Suppression du dossier dist
gulp.task('clean', function() {
 return gulp
 	.src(PATH_DIST)
 	.pipe(clean());
});

// concatenations des librairies bower
gulp.task('libs', function() {
	var bower_components = [
		"./bower_components/angular/angular.js",
		"./bower_components" +
			"/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
		"./bower_components/angular-translate/angular-translate.min.js",
		"./bower_components/angular-ui-router/release/angular-ui-router.min.js",
		"./bower_components/angular-bootstrap/ui-bootstrap.min.js",
		"./bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
		"./bower_components/a0-angular-storage/dist/angular-storage.min.js",
	];
  return gulp
  	.src(bower_components)
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('./dist/js'));
});

// concaténation des scripts
gulp.task('scripts', function(){
	return gulp
  	.src('./components/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js'));
});



// Tâche par défaut
gulp.task('default', gulpSequence('clean', [
	'libs',
	'scripts'
	])
);