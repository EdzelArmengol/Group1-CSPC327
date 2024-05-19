"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DFA/Logic.js":
/*!*********************************!*\
  !*** ./components/DFA/Logic.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DFA: function() { return /* binding */ DFA; },\n/* harmony export */   Node: function() { return /* binding */ Node; },\n/* harmony export */   language1: function() { return /* binding */ language1; },\n/* harmony export */   language2: function() { return /* binding */ language2; },\n/* harmony export */   problem1: function() { return /* binding */ problem1; },\n/* harmony export */   problem2: function() { return /* binding */ problem2; }\n/* harmony export */ });\nclass Node {\n    constructor(nodeNumber, direction1, direction2){\n        this.nodeNumber = nodeNumber;\n        this.direction = [\n            direction1,\n            direction2\n        ];\n    }\n}\nclass DFA {\n    node() {\n        this.currentInputPos += 1;\n        if (this.currentInputPos === this.input.length) {\n            if (this.problem === problem1 && (this.currentNode === 14 || this.currentNode === 15) || this.problem === problem2 && this.currentNode === 9) {\n                this.result = \"Valid\";\n            } else {\n                this.result = \"Invalid\";\n            }\n        } else {\n            if (this.currentNode <= this.problem.length && this.currentNode !== \"T1\" && this.currentNode !== \"T2\" && this.input[this.currentInputPos] !== undefined) {\n                let node = this.problem[this.currentNode - 1];\n                if (this.problem === problem1 && (this.input[this.currentInputPos] === \"a\" || this.input[this.currentInputPos] === \"b\") || this.problem === problem2 && (this.input[this.currentInputPos] === \"0\" || this.input[this.currentInputPos] === \"1\")) {\n                    this.currentNode = node.direction[this.language.indexOf(this.input[this.currentInputPos])];\n                    this.currentNode !== undefined && this.path.push(this.currentNode);\n                } else {\n                    this.currentNode = this.problem === problem1 ? \"T1\" : \"T2\";\n                }\n                this.node();\n            } else {\n                this.result = \"Invalid\";\n                this.path.push(\"eos\");\n            }\n        }\n    }\n    constructor(input, problem, language){\n        this.input = input;\n        this.problem = problem;\n        this.language = language;\n        this.currentNode = 1;\n        this.currentInputPos = -1;\n        this.path = [\n            1\n        ];\n        this.node();\n    }\n}\nconst problem1 = [\n    new Node(1, 2, 2),\n    new Node(2, 3, 4),\n    new Node(3, 5, 4),\n    new Node(4, 3, 8),\n    new Node(5, 6, 7),\n    new Node(6, 6, 11),\n    new Node(7, 8, 11),\n    new Node(8, 9, 10),\n    new Node(9, 3, 11),\n    new Node(10, 11, 10),\n    new Node(11, 15, 12),\n    new Node(12, 13, 12),\n    new Node(13, 14, 16),\n    new Node(14, 15, 16, 14),\n    new Node(15, 15, 16),\n    new Node(16, 12, 17),\n    new Node(17, 16, 14, 17)\n];\nconst problem2 = [\n    new Node(1, 2, 3),\n    new Node(2, 4, 3),\n    new Node(3, 2, 4),\n    new Node(4, 5, 5),\n    new Node(5, 5, 6),\n    new Node(6, 7, 8),\n    new Node(7, 5, 9),\n    new Node(8, 7, 9),\n    new Node(9, 9, 9)\n];\nconst language1 = [\n    \"a\",\n    \"b\"\n];\nconst language2 = [\n    \"0\",\n    \"1\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJLElBQUk7SUFDckIsSUFBSUEsS0FBSyxJQUFJLElBQUk7SUFDakIsSUFBSUEsS0FBSyxJQUFJLElBQUk7SUFDakIsSUFBSUEsS0FBSyxJQUFJLElBQUksSUFBSTtDQUN0QixDQUFDO0FBRUssTUFBTWMsV0FBVztJQUN0QixJQUFJZCxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7Q0FDaEIsQ0FBQztBQUVLLE1BQU1xQixZQUFZO0lBQUM7SUFBSztDQUFJLENBQUM7QUFDN0IsTUFBTUMsWUFBWTtJQUFDO0lBQUs7Q0FBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvREZBL0xvZ2ljLmpzPzlhYTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcihub2RlTnVtYmVyLCBkaXJlY3Rpb24xLCBkaXJlY3Rpb24yKSB7XG4gICAgdGhpcy5ub2RlTnVtYmVyID0gbm9kZU51bWJlcjtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFtkaXJlY3Rpb24xLCBkaXJlY3Rpb24yXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgREZBIHtcbiAgY29uc3RydWN0b3IoaW5wdXQsIHByb2JsZW0sIGxhbmd1YWdlKSB7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMucHJvYmxlbSA9IHByb2JsZW07XG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuXG4gICAgdGhpcy5jdXJyZW50Tm9kZSA9IDE7XG4gICAgdGhpcy5jdXJyZW50SW5wdXRQb3MgPSAtMTtcbiAgICB0aGlzLnBhdGggPSBbMV07XG5cbiAgICB0aGlzLm5vZGUoKTtcbiAgfVxuICBub2RlKCkge1xuICAgIHRoaXMuY3VycmVudElucHV0UG9zICs9IDE7XG4gICAgaWYgKHRoaXMuY3VycmVudElucHV0UG9zID09PSB0aGlzLmlucHV0Lmxlbmd0aCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAodGhpcy5wcm9ibGVtID09PSBwcm9ibGVtMSAmJiAodGhpcy5jdXJyZW50Tm9kZSA9PT0gMTQgfHwgdGhpcy5jdXJyZW50Tm9kZSA9PT0gMTUpKSB8fFxuICAgICAgICAgICAgKHRoaXMucHJvYmxlbSA9PT0gcHJvYmxlbTIgJiYgdGhpcy5jdXJyZW50Tm9kZSA9PT0gOSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IFwiVmFsaWRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gXCJJbnZhbGlkXCI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA8PSB0aGlzLnByb2JsZW0ubGVuZ3RoICYmIHRoaXMuY3VycmVudE5vZGUgIT09IFwiVDFcIiAmJiB0aGlzLmN1cnJlbnROb2RlICE9PSBcIlQyXCIgJiZcbiAgICAgICAgICB0aGlzLmlucHV0W3RoaXMuY3VycmVudElucHV0UG9zXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnByb2JsZW1bdGhpcy5jdXJyZW50Tm9kZSAtIDFdO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHRoaXMucHJvYmxlbSA9PT0gcHJvYmxlbTEgJiYgKHRoaXMuaW5wdXRbdGhpcy5jdXJyZW50SW5wdXRQb3NdID09PSBcImFcIiB8fCB0aGlzLmlucHV0W3RoaXMuY3VycmVudElucHV0UG9zXSA9PT0gXCJiXCIpKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnByb2JsZW0gPT09IHByb2JsZW0yICYmICh0aGlzLmlucHV0W3RoaXMuY3VycmVudElucHV0UG9zXSA9PT0gXCIwXCIgfHwgdGhpcy5pbnB1dFt0aGlzLmN1cnJlbnRJbnB1dFBvc10gPT09IFwiMVwiKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlLmRpcmVjdGlvblt0aGlzLmxhbmd1YWdlLmluZGV4T2YodGhpcy5pbnB1dFt0aGlzLmN1cnJlbnRJbnB1dFBvc10pXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wYXRoLnB1c2godGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gKHRoaXMucHJvYmxlbSA9PT0gcHJvYmxlbTEgPyBcIlQxXCIgOiBcIlQyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IFwiSW52YWxpZFwiO1xuICAgICAgICAgICAgdGhpcy5wYXRoLnB1c2goXCJlb3NcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvYmxlbTEgPSBbXG4gIG5ldyBOb2RlKDEsIDIsIDIpLFxuICBuZXcgTm9kZSgyLCAzLCA0KSxcbiAgbmV3IE5vZGUoMywgNSwgNCksXG4gIG5ldyBOb2RlKDQsIDMsIDgpLFxuICBuZXcgTm9kZSg1LCA2LCA3KSxcbiAgbmV3IE5vZGUoNiwgNiwgMTEpLFxuICBuZXcgTm9kZSg3LCA4LCAxMSksXG4gIG5ldyBOb2RlKDgsIDksIDEwKSxcbiAgbmV3IE5vZGUoOSwgMywgMTEpLFxuICBuZXcgTm9kZSgxMCwgMTEsIDEwKSxcbiAgbmV3IE5vZGUoMTEsIDE1LCAxMiksXG4gIG5ldyBOb2RlKDEyLCAxMywgMTIpLFxuICBuZXcgTm9kZSgxMywgMTQsIDE2KSxcbiAgbmV3IE5vZGUoMTQsIDE1LCAxNiwgMTQpLFxuICBuZXcgTm9kZSgxNSwgMTUsIDE2KSxcbiAgbmV3IE5vZGUoMTYsIDEyLCAxNyksXG4gIG5ldyBOb2RlKDE3LCAxNiwgMTQsIDE3KSxcbl07XG5cbmV4cG9ydCBjb25zdCBwcm9ibGVtMiA9IFtcbiAgbmV3IE5vZGUoMSwgMiwgMyksXG4gIG5ldyBOb2RlKDIsIDQsIDMpLFxuICBuZXcgTm9kZSgzLCAyLCA0KSxcbiAgbmV3IE5vZGUoNCwgNSwgNSksXG4gIG5ldyBOb2RlKDUsIDUsIDYpLFxuICBuZXcgTm9kZSg2LCA3LCA4KSxcbiAgbmV3IE5vZGUoNywgNSwgOSksXG4gIG5ldyBOb2RlKDgsIDcsIDkpLFxuICBuZXcgTm9kZSg5LCA5LCA5KSxcbl07XG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZTEgPSBbXCJhXCIsIFwiYlwiXTtcbmV4cG9ydCBjb25zdCBsYW5ndWFnZTIgPSBbXCIwXCIsIFwiMVwiXTtcbiJdLCJuYW1lcyI6WyJOb2RlIiwiY29uc3RydWN0b3IiLCJub2RlTnVtYmVyIiwiZGlyZWN0aW9uMSIsImRpcmVjdGlvbjIiLCJkaXJlY3Rpb24iLCJERkEiLCJub2RlIiwiY3VycmVudElucHV0UG9zIiwiaW5wdXQiLCJsZW5ndGgiLCJwcm9ibGVtIiwicHJvYmxlbTEiLCJjdXJyZW50Tm9kZSIsInByb2JsZW0yIiwicmVzdWx0IiwidW5kZWZpbmVkIiwibGFuZ3VhZ2UiLCJpbmRleE9mIiwicGF0aCIsInB1c2giLCJsYW5ndWFnZTEiLCJsYW5ndWFnZTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DFA/Logic.js\n"));

/***/ })

});