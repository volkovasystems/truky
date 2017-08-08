
const assert = require( "assert" );
const truky = require( "./truky.js" );

assert.equal( truky( { } ).length == 0, true, "should be equal to true" );

assert.deepEqual( truky( { "name": "simple" } ), [ "simple" ], "should be equal to [ 'simple' ]" );

assert.deepEqual( truky( function Hello( ){ } ), [ "Hello" ], "should be equal to [ 'Hello' ]" );

console.log( "ok" );
