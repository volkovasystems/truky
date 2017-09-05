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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRydWt5LnN1cHBvcnQuanMiXSwibmFtZXMiOlsicHJvdHlwZSIsInJlcXVpcmUiLCJ0cnVseSIsInRydWt5IiwiZW50aXR5IiwiT0JKRUNUIiwiRlVOQ1RJT04iLCJFcnJvciIsImZpbHRlciIsImtleSIsIkJPT0xFQU4iLCJTVFJJTkciLCJtYXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDckM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSSxDQUFDSixRQUFTSSxNQUFULEVBQWlCQyxNQUFqQixFQUF5QkMsUUFBekIsQ0FBTCxFQUEwQztBQUN6QyxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBTyxtQ0FBNEJILE1BQTVCO0FBQ0xJLE9BREssQ0FDRyxVQUFFQyxHQUFGLEVBQVc7QUFDbkIsU0FBT1QsUUFBU0ksT0FBUUssR0FBUixDQUFULEVBQXdCQyxPQUF4QixFQUFpQ0MsTUFBakM7QUFDTlQsUUFBT0UsT0FBUUssR0FBUixDQUFQLENBRE07QUFFTkwsU0FBUUssR0FBUixDQUZEO0FBR0EsRUFMSztBQU1MRyxJQU5LLENBTUEsVUFBRUgsR0FBRixFQUFXO0FBQ2hCLE1BQUksT0FBT0wsT0FBUUssR0FBUixDQUFQLElBQXdCLFFBQTVCLEVBQXNDO0FBQ3JDLFVBQU9MLE9BQVFLLEdBQVIsQ0FBUDs7QUFFQSxHQUhELE1BR0s7QUFDSixVQUFPQSxHQUFQO0FBQ0E7QUFDRCxFQWJLLENBQVA7QUFjQSxDQTlCRDs7QUFnQ0FJLE9BQU9DLE9BQVAsR0FBaUJYLEtBQWpCIiwiZmlsZSI6InRydWt5LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInRydWt5XCIsXG5cdFx0XHRcInBhdGhcIjogXCJ0cnVreS90cnVreS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidHJ1a3kuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidHJ1a3lcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3RydWt5LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwidHJ1a3ktdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRSZXR1cm4ga2V5cyB3aXRoIHRydXRoZnVsIHZhbHVlcy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcblxuY29uc3QgdHJ1a3kgPSBmdW5jdGlvbiB0cnVreSggZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGVudGl0eSwgT0JKRUNULCBGVU5DVElPTiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggZW50aXR5IClcblx0XHQuZmlsdGVyKCAoIGtleSApID0+IHtcblx0XHRcdHJldHVybiBwcm90eXBlKCBlbnRpdHlbIGtleSBdLCBCT09MRUFOLCBTVFJJTkcgKSAmJlxuXHRcdFx0XHR0cnVseSggZW50aXR5WyBrZXkgXSApICYmXG5cdFx0XHRcdGVudGl0eVsga2V5IF07XG5cdFx0fSApXG5cdFx0Lm1hcCggKCBrZXkgKSA9PiB7XG5cdFx0XHRpZiggdHlwZW9mIGVudGl0eVsga2V5IF0gPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0XHRyZXR1cm4gZW50aXR5WyBrZXkgXTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBrZXk7XG5cdFx0XHR9XG5cdFx0fSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cnVreTtcbiJdfQ==
//# sourceMappingURL=truky.support.js.map
