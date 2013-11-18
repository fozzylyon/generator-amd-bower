( function () {
	'use strict';

	require.config( {
		'baseUrl' : '../lib',
		'paths'   : {
			'underscore' : '../bower_components/lodash/dist/lodash.underscore',
		}
	} );


	require( [ 'main' ], function( <%= _.classify( appname ) %> ) {
		// test the uncompiled component here
	} );

} )();
