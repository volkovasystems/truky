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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
		if (typeof entity[key] == "string") {
			return entity[key];

		} else {
			return key;
		}
	});
};

module.exports = truky;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRydWt5LnN1cHBvcnQuanMiXSwibmFtZXMiOlsicHJvdHlwZSIsInJlcXVpcmUiLCJ0cnVseSIsInRydWt5IiwiZW50aXR5IiwiT0JKRUNUIiwiRlVOQ1RJT04iLCJFcnJvciIsImZpbHRlciIsImtleSIsIkJPT0xFQU4iLCJTVFJJTkciLCJtYXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDckM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSSxDQUFDSixRQUFTSSxNQUFULEVBQWlCQyxNQUFqQixFQUF5QkMsUUFBekIsQ0FBTCxFQUEwQztBQUN6QyxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBTyxtQ0FBNEJILE1BQTVCO0FBQ0xJLE9BREssQ0FDRyxVQUFFQyxHQUFGLEVBQVc7QUFDbkIsU0FBT1QsUUFBU0ksT0FBUUssR0FBUixDQUFULEVBQXdCQyxPQUF4QixFQUFpQ0MsTUFBakM7QUFDTlQsUUFBT0UsT0FBUUssR0FBUixDQUFQLENBRE07QUFFTkwsU0FBUUssR0FBUixDQUZEO0FBR0EsRUFMSztBQU1MRyxJQU5LLENBTUEsVUFBRUgsR0FBRixFQUFXO0FBQ2hCLE1BQUksT0FBT0wsT0FBUUssR0FBUixDQUFQLElBQXdCLFFBQTVCLEVBQXNDO0FBQ3JDLFVBQU9MLE9BQVFLLEdBQVIsQ0FBUDs7QUFFQSxHQUhELE1BR0s7QUFDSixVQUFPQSxHQUFQO0FBQ0E7QUFDRCxFQWJLLENBQVA7QUFjQSxDQTlCRDs7QUFnQ0FJLE9BQU9DLE9BQVAsR0FBaUJYLEtBQWpCIiwiZmlsZSI6InRydWt5LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwidHJ1a3lcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwidHJ1a3kvdHJ1a3kuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidHJ1a3kuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0cnVreVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy90cnVreS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwidHJ1a3ktdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRSZXR1cm4ga2V5cyB3aXRoIHRydXRoZnVsIHZhbHVlcy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuXHJcbmNvbnN0IHRydWt5ID0gZnVuY3Rpb24gdHJ1a3koIGVudGl0eSApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwib2JqZWN0XCIsXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoICFwcm90eXBlKCBlbnRpdHksIE9CSkVDVCwgRlVOQ1RJT04gKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggZW50aXR5IClcclxuXHRcdC5maWx0ZXIoICgga2V5ICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcHJvdHlwZSggZW50aXR5WyBrZXkgXSwgQk9PTEVBTiwgU1RSSU5HICkgJiZcclxuXHRcdFx0XHR0cnVseSggZW50aXR5WyBrZXkgXSApICYmXHJcblx0XHRcdFx0ZW50aXR5WyBrZXkgXTtcclxuXHRcdH0gKVxyXG5cdFx0Lm1hcCggKCBrZXkgKSA9PiB7XHJcblx0XHRcdGlmKCB0eXBlb2YgZW50aXR5WyBrZXkgXSA9PSBcInN0cmluZ1wiICl7XHJcblx0XHRcdFx0cmV0dXJuIGVudGl0eVsga2V5IF07XHJcblxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyZXR1cm4ga2V5O1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRydWt5O1xyXG4iXX0=
//# sourceMappingURL=truky.support.js.map
