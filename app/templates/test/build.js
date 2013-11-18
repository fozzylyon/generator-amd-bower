( function () {
	'use strict';

	require.config( {

		'paths' : {
			'<%= _.slugify( appname ) %>' : '../<%= _.classify( appname ) %>'
		}

	} );


	require( [ '<%= _.slugify( appname ) %>' ], function( <%= _.classify( appname ) %> ) {
		// test the compiled component here
	} );

} )();
