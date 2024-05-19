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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DFA: function() { return /* binding */ DFA; },\n/* harmony export */   Node: function() { return /* binding */ Node; },\n/* harmony export */   language1: function() { return /* binding */ language1; },\n/* harmony export */   language2: function() { return /* binding */ language2; },\n/* harmony export */   problem1: function() { return /* binding */ problem1; },\n/* harmony export */   problem2: function() { return /* binding */ problem2; }\n/* harmony export */ });\nclass Node {\n    constructor(nodeNumber, direction1, direction2){\n        this.nodeNumber = nodeNumber;\n        this.direction = [\n            direction1,\n            direction2\n        ];\n    }\n}\nclass DFA {\n    node() {\n        this.currentInputPos += 1;\n        if (this.currentInputPos === this.input.length) {\n            if (this.problem === problem1 && (this.currentNode === 14 || this.currentNode === 15) || this.problem === problem2 && this.currentNode === 9) {\n                this.result = \"Valid\";\n            } else {\n                this.result = \"Invalid\";\n            }\n        } else {\n            if (this.currentNode <= this.problem.length && this.currentNode !== \"T1\" && this.currentNode !== \"T2\" && this.input[this.currentInputPos] !== undefined) {\n                let node = this.problem[this.currentNode - 1];\n                if (this.problem === problem1 && (this.input[this.currentInputPos] === \"a\" || this.input[this.currentInputPos] === \"b\") || this.problem === problem2 && (this.input[this.currentInputPos] === \"0\" || this.input[this.currentInputPos] === \"1\")) {\n                    this.currentNode = node.direction[this.language.indexOf(this.input[this.currentInputPos])];\n                    this.currentNode !== undefined && this.path.push(this.currentNode);\n                } else {\n                    this.currentNode = this.problem === problem1 ? \"T1\" : \"T2\";\n                }\n                this.node();\n            } else {\n                this.result = \"Invalid\";\n                this.path.push(\"eos\");\n            }\n        }\n    }\n    constructor(input, problem, language){\n        this.input = input;\n        this.problem = problem;\n        this.language = language;\n        this.currentNode = 1;\n        this.currentInputPos = -1;\n        this.path = [\n            1\n        ];\n        this.node();\n    }\n}\nconst problem1 = [\n    new Node(1, 2, 2),\n    new Node(2, 3, 4),\n    new Node(3, 5, 4),\n    new Node(4, 3, 8),\n    new Node(5, 6, 7),\n    new Node(6, 6, 11),\n    new Node(7, 8, 11),\n    new Node(8, 9, 10),\n    new Node(9, 3, 11),\n    new Node(10, 11, 10),\n    new Node(11, 15, 12),\n    new Node(12, 13, 12),\n    new Node(13, 14, 16),\n    new Node(14, 15, 16),\n    new Node(15, 15, 16),\n    new Node(16, 17, 12),\n    new Node(17, 17, 17)\n];\nconst problem2 = [\n    new Node(1, 2, 3),\n    new Node(2, 4, 3),\n    new Node(3, 2, 4),\n    new Node(4, 5, 5),\n    new Node(5, 5, 6),\n    new Node(6, 7, 8),\n    new Node(7, 5, 9),\n    new Node(8, 7, 9),\n    new Node(9, 9, 9)\n];\nconst language1 = [\n    \"a\",\n    \"b\"\n];\nconst language2 = [\n    \"0\",\n    \"1\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0lBQ2pCLElBQUlBLEtBQUssSUFBSSxJQUFJO0NBQ2xCLENBQUM7QUFFSyxNQUFNYyxXQUFXO0lBQ3RCLElBQUlkLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQSxLQUFLLEdBQUcsR0FBRztJQUNmLElBQUlBLEtBQUssR0FBRyxHQUFHO0lBQ2YsSUFBSUEsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQSxLQUFLLEdBQUcsR0FBRztDQUNoQixDQUFDO0FBRUssTUFBTXFCLFlBQVk7SUFBQztJQUFLO0NBQUksQ0FBQztBQUM3QixNQUFNQyxZQUFZO0lBQUM7SUFBSztDQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ERkEvTG9naWMuanM/OWFhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGVOdW1iZXIsIGRpcmVjdGlvbjEsIGRpcmVjdGlvbjIpIHtcbiAgICB0aGlzLm5vZGVOdW1iZXIgPSBub2RlTnVtYmVyO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gW2RpcmVjdGlvbjEsIGRpcmVjdGlvbjJdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBERkEge1xuICBjb25zdHJ1Y3RvcihpbnB1dCwgcHJvYmxlbSwgbGFuZ3VhZ2UpIHtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5wcm9ibGVtID0gcHJvYmxlbTtcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG5cbiAgICB0aGlzLmN1cnJlbnROb2RlID0gMTtcbiAgICB0aGlzLmN1cnJlbnRJbnB1dFBvcyA9IC0xO1xuICAgIHRoaXMucGF0aCA9IFsxXTtcblxuICAgIHRoaXMubm9kZSgpO1xuICB9XG4gIG5vZGUoKSB7XG4gICAgdGhpcy5jdXJyZW50SW5wdXRQb3MgKz0gMTtcbiAgICBpZiAodGhpcy5jdXJyZW50SW5wdXRQb3MgPT09IHRoaXMuaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICh0aGlzLnByb2JsZW0gPT09IHByb2JsZW0xICYmICh0aGlzLmN1cnJlbnROb2RlID09PSAxNCB8fCB0aGlzLmN1cnJlbnROb2RlID09PSAxNSkpIHx8XG4gICAgICAgICAgICAodGhpcy5wcm9ibGVtID09PSBwcm9ibGVtMiAmJiB0aGlzLmN1cnJlbnROb2RlID09PSA5KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gXCJWYWxpZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBcIkludmFsaWRcIjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlIDw9IHRoaXMucHJvYmxlbS5sZW5ndGggJiYgdGhpcy5jdXJyZW50Tm9kZSAhPT0gXCJUMVwiICYmIHRoaXMuY3VycmVudE5vZGUgIT09IFwiVDJcIiAmJlxuICAgICAgICAgIHRoaXMuaW5wdXRbdGhpcy5jdXJyZW50SW5wdXRQb3NdICE9PSB1bmRlZmluZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMucHJvYmxlbVt0aGlzLmN1cnJlbnROb2RlIC0gMV07XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodGhpcy5wcm9ibGVtID09PSBwcm9ibGVtMSAmJiAodGhpcy5pbnB1dFt0aGlzLmN1cnJlbnRJbnB1dFBvc10gPT09IFwiYVwiIHx8IHRoaXMuaW5wdXRbdGhpcy5jdXJyZW50SW5wdXRQb3NdID09PSBcImJcIikpIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMucHJvYmxlbSA9PT0gcHJvYmxlbTIgJiYgKHRoaXMuaW5wdXRbdGhpcy5jdXJyZW50SW5wdXRQb3NdID09PSBcIjBcIiB8fCB0aGlzLmlucHV0W3RoaXMuY3VycmVudElucHV0UG9zXSA9PT0gXCIxXCIpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5vZGUuZGlyZWN0aW9uW3RoaXMubGFuZ3VhZ2UuaW5kZXhPZih0aGlzLmlucHV0W3RoaXMuY3VycmVudElucHV0UG9zXSldO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBhdGgucHVzaCh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSAodGhpcy5wcm9ibGVtID09PSBwcm9ibGVtMSA/IFwiVDFcIiA6IFwiVDJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gXCJJbnZhbGlkXCI7XG4gICAgICAgICAgICB0aGlzLnBhdGgucHVzaChcImVvc1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ibGVtMSA9IFtcbiAgbmV3IE5vZGUoMSwgMiwgMiksXG4gIG5ldyBOb2RlKDIsIDMsIDQpLFxuICBuZXcgTm9kZSgzLCA1LCA0KSxcbiAgbmV3IE5vZGUoNCwgMywgOCksXG4gIG5ldyBOb2RlKDUsIDYsIDcpLFxuICBuZXcgTm9kZSg2LCA2LCAxMSksXG4gIG5ldyBOb2RlKDcsIDgsIDExKSxcbiAgbmV3IE5vZGUoOCwgOSwgMTApLFxuICBuZXcgTm9kZSg5LCAzLCAxMSksXG4gIG5ldyBOb2RlKDEwLCAxMSwgMTApLFxuICBuZXcgTm9kZSgxMSwgMTUsIDEyKSxcbiAgbmV3IE5vZGUoMTIsIDEzLCAxMiksXG4gIG5ldyBOb2RlKDEzLCAxNCwgMTYpLFxuICBuZXcgTm9kZSgxNCwgMTUsIDE2KSxcbiAgbmV3IE5vZGUoMTUsIDE1LCAxNiksXG4gIG5ldyBOb2RlKDE2LCAxNywgMTIpLFxuICBuZXcgTm9kZSgxNywgMTcsIDE3KSxcbl07XG5cbmV4cG9ydCBjb25zdCBwcm9ibGVtMiA9IFtcbiAgbmV3IE5vZGUoMSwgMiwgMyksXG4gIG5ldyBOb2RlKDIsIDQsIDMpLFxuICBuZXcgTm9kZSgzLCAyLCA0KSxcbiAgbmV3IE5vZGUoNCwgNSwgNSksXG4gIG5ldyBOb2RlKDUsIDUsIDYpLFxuICBuZXcgTm9kZSg2LCA3LCA4KSxcbiAgbmV3IE5vZGUoNywgNSwgOSksXG4gIG5ldyBOb2RlKDgsIDcsIDkpLFxuICBuZXcgTm9kZSg5LCA5LCA5KSxcbl07XG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZTEgPSBbXCJhXCIsIFwiYlwiXTtcbmV4cG9ydCBjb25zdCBsYW5ndWFnZTIgPSBbXCIwXCIsIFwiMVwiXTtcbiJdLCJuYW1lcyI6WyJOb2RlIiwiY29uc3RydWN0b3IiLCJub2RlTnVtYmVyIiwiZGlyZWN0aW9uMSIsImRpcmVjdGlvbjIiLCJkaXJlY3Rpb24iLCJERkEiLCJub2RlIiwiY3VycmVudElucHV0UG9zIiwiaW5wdXQiLCJsZW5ndGgiLCJwcm9ibGVtIiwicHJvYmxlbTEiLCJjdXJyZW50Tm9kZSIsInByb2JsZW0yIiwicmVzdWx0IiwidW5kZWZpbmVkIiwibGFuZ3VhZ2UiLCJpbmRleE9mIiwicGF0aCIsInB1c2giLCJsYW5ndWFnZTEiLCJsYW5ndWFnZTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DFA/Logic.js\n"));

/***/ })

});