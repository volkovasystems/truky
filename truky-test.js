
const assert = require( "assert" );
const truky = require( "./truky.js" );

assert.equal( Array.isArray( truky( { } ) ), true, "should return true" );

assert.deepEqual( truky( { "name": "simple" } ), [ "simple" ], "should be deeply equal" );

assert.deepEqual( truky( function Hello( ){ } ), [ "Hello" ], "should be deeply equal" );

console.log( "ok" );
