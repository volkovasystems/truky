"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "truky",
              			"path": "truky/truky.js",
              			"file": "truky.js",
              			"module": "truky",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/truky.git",
              			"test": "truky-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Return keys with truthful values.
              	@end-module-documentation
              
              	@include:
              		{
              			"protype": "protype",
              			"truly": "truly"
              		}
              	@end-include
              */var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var protype = require("protype");
var truly = require("truly");

var truky = function truky(entity) {
	/*;
                                    	@meta-configuration:
                                    		{
                                    			"entity:required": [
                                    				"object",
                                    				"function"
                                    			]
                                    		}
                                    	@end-meta-configuration
                                    */

	if (!protype(entity, OBJECT, FUNCTION)) {
		throw new Error("invalid entity");
	}

	return (0, _getOwnPropertyNames2.default)(entity).
	filter(function (key) {
		return protype(entity[key], BOOLEAN, STRING) &&
		truly(entity[key]) &&
		entity[key];
	}).
	map(function (key) {
		if (protype(entity[key], STRING)) {
			return entity[key];

		} else {
			return key;
		}
	});
};

module.exports = truky;

//# sourceMappingURL=truky.support.js.map