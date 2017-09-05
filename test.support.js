"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "truky",
              			"path": "truky/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/truky.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"truky": "truky"
              		}
              	@end-include
              */

var assert = require("should");



//: @client:
var truky = require("./truky.support.js");
//: @end-client







//: @client:
describe("truky", function () {

	describe("`truky( { 'name': 'simple' } )`", function () {
		it("should return keys with truthful values", function () {
			assert.deepEqual(truky({ "name": "simple" }), ["simple"]);
		});
	});

	describe("`truky( function Hello( ){ } )`", function () {
		it("should return keys with truthful values", function () {
			assert.deepEqual(truky(function Hello() {}), ["Hello"]);
		});
	});

	describe("`truky( { } )`", function () {
		it("should return empty array", function () {
			assert.deepEqual(truky({}), []);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwidHJ1a3kiLCJkZXNjcmliZSIsIml0IiwiZGVlcEVxdWFsIiwiSGVsbG8iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFFBQVFELFFBQVMsb0JBQVQsQ0FBZDtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsT0FBVixFQUFtQixZQUFPOztBQUV6QkEsVUFBVSxpQ0FBVixFQUE2QyxZQUFPO0FBQ25EQyxLQUFJLHlDQUFKLEVBQStDLFlBQU87QUFDckRKLFVBQU9LLFNBQVAsQ0FBa0JILE1BQU8sRUFBRSxRQUFRLFFBQVYsRUFBUCxDQUFsQixFQUFpRCxDQUFFLFFBQUYsQ0FBakQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxpQ0FBVixFQUE2QyxZQUFPO0FBQ25EQyxLQUFJLHlDQUFKLEVBQStDLFlBQU87QUFDckRKLFVBQU9LLFNBQVAsQ0FBa0JILE1BQU8sU0FBU0ksS0FBVCxHQUFpQixDQUFHLENBQTNCLENBQWxCLEVBQWlELENBQUUsT0FBRixDQUFqRDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSCxVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssU0FBUCxDQUFrQkgsTUFBTyxFQUFQLENBQWxCLEVBQWdDLEVBQWhDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUEsQ0FwQkQ7QUFxQkEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ0cnVreVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwidHJ1a3kvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3RydWt5LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJ0cnVreVwiOiBcInRydWt5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCB0cnVreSA9IHJlcXVpcmUoIFwiLi90cnVreS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcInRydWt5XCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYHRydWt5KCB7ICduYW1lJzogJ3NpbXBsZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4ga2V5cyB3aXRoIHRydXRoZnVsIHZhbHVlc1wiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdHJ1a3koIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSApLCBbIFwic2ltcGxlXCIgXSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB0cnVreSggZnVuY3Rpb24gSGVsbG8oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGtleXMgd2l0aCB0cnV0aGZ1bCB2YWx1ZXNcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHRydWt5KCBmdW5jdGlvbiBIZWxsbyggKXsgfSApLCBbIFwiSGVsbG9cIiBdICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHRydWt5KCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB0cnVreSggeyB9ICksIFsgXSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
