
const assert = require( "assert" );
const truky = require( "./truky.js" );

assert.deepEqual( truky( { "name": "simple" } ), [ "simple" ], "should be deeply equal" );

console.log( "ok" );
