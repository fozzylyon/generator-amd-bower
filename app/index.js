'use strict';

var util   = require( 'util' );
var yeoman = require( 'yeoman-generator' );


var Generator = module.exports = function ( args, options, config ) {
	yeoman.generators.Base.apply( this, arguments );

	this.on( 'end', function () {
		this.installDependencies( {
			'skipInstall' : options[ 'skip-install' ],
			'npm'         : true,
			'bower'       : true
		} );
	} );
};

util.inherits( Generator, yeoman.generators.Base );

Generator.prototype.packageJSON = function packageJSON () {
	this.copy('_package.json', 'package.json' );
};

Generator.prototype.bower = function bower () {
	this.copy( '_bower.json', 'bower.json' );
};

Generator.prototype.git = function git () {
	this.copy( '_gitignore', '.gitignore' );
};

Generator.prototype.jshint = function jshint () {
	this.copy( '_jshintrc', '.jshintrc' );
};

Generator.prototype.gruntFile = function jshint () {
	this.copy( 'GruntFile.js' );
};

// ### Set up the project paths
Generator.prototype.projectPaths = function projectPaths () {

	// copy base paths
	this.directory( 'lib' );
	this.directory( 'build' );
	this.directory( 'test' );
};