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

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DFA/Logic */ \"./components/DFA/Logic.js\");\n/* harmony import */ var _components_LeftBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LeftBox */ \"./components/components/LeftBox.js\");\n/* harmony import */ var _components_RightBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/RightBox */ \"./components/components/RightBox.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Main = ()=>{\n    _s();\n    const regex1 = \"(a+b)(a+b)*(aa+bb)(ab+ba)(a+b)*(aba+baa)\";\n    const regex2 = \"(11+00)(1+0)*(101+111+01)(00*+11*)(1+0+11)*\";\n    const [string, setString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [prob2, setProb2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentNode, setCurrentNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [simulating, setSimulating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const validString = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const invalidString = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const trapString = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const shortString = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const notInLanguageString = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const emptyString = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const closeToasts = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    let input = string;\n    let results = \"\";\n    const handleTextChange = (e)=>{\n        const stringValue = e.target.value;\n        setString(stringValue);\n        const countValue = e.target.value.length;\n        setCount(countValue);\n    };\n    const handleReset = ()=>{\n        setString(\"\");\n        setCount(0);\n        setData(\"\");\n        closeAll();\n    };\n    const handleSwitch = ()=>{\n        setProb2((prev)=>!prev);\n        setData(\"\");\n        closeAll();\n    };\n    const closeAll = ()=>{\n        closeToasts.closeAll();\n    };\n    const emptyToast = ()=>{\n        emptyString({\n            title: \"Empty Input\",\n            status: \"warning\",\n            isClosable: true\n        });\n    };\n    const notInLanguageToast = ()=>{\n        notInLanguageString({\n            title: \"Invalid Input\",\n            status: \"warning\",\n            isClosable: true\n        });\n    };\n    const trapToast = ()=>{\n        trapString({\n            title: \"Invalid: Trapped\",\n            status: \"error\",\n            isClosable: true\n        });\n    };\n    const shortToast = ()=>{\n        shortString({\n            title: \"Invalid: Too Short\",\n            status: \"error\",\n            isClosable: true\n        });\n    };\n    const invalidToast = ()=>{\n        invalidString({\n            title: \"Invalid String\",\n            status: \"error\",\n            isClosable: true\n        });\n    };\n    const validToast = ()=>{\n        validString({\n            title: \"Valid String!\",\n            status: \"success\",\n            isClosable: true\n        });\n    };\n    const handleTrapped = ()=>{\n        setSimulating(false);\n        trapToast();\n        setData(results);\n    };\n    const handleShort = ()=>{\n        setSimulating(false);\n        shortToast();\n        setData(results);\n    };\n    const handleInvalid = ()=>{\n        setSimulating(false);\n        invalidToast();\n        setData(results);\n    };\n    const handleValid = ()=>{\n        setSimulating(false);\n        validToast();\n        setData(results);\n    };\n    const handleInputString = ()=>{\n        input = input.replace(/\\s+/g, \"\").toLowerCase();\n    };\n    const handleTest = (e)=>{\n        e.preventDefault();\n        handleInputString();\n        if (!prob2) {\n            if (input === \"\") {\n                emptyToast();\n            } else if (!input.match(/^[ab]+$/)) {\n                notInLanguageToast();\n            } else {\n                results = new _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.DFA(input, _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.problem1, _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.language1);\n                setData(results);\n            }\n        } else {\n            if (input === \"\") {\n                emptyToast();\n            } else if (!input.match(/^[01]+$/)) {\n                notInLanguageToast();\n            } else {\n                results = new _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.DFA(input, _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.problem2, _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.language2);\n                setData(results);\n            }\n        }\n    };\n    const handleSimulation = (e)=>{\n        e.preventDefault();\n        handleInputString();\n        if (!prob2) {\n            if (input === \"\") {\n                emptyToast();\n            } else if (!input.match(/^[ab]+$/)) {\n                notInLanguageToast();\n            } else {\n                setSimulating(true);\n                results = new _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.DFA(input, _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.problem1, _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.language1);\n                const pathWithZeroes = [\n                    0\n                ].concat(...results.path.map((e)=>[\n                        e,\n                        0\n                    ]));\n                let messageDisplayed = false;\n                pathWithZeroes.some((node, i)=>{\n                    setTimeout(()=>{\n                        setCurrentNode(node);\n                        if ((node === \"T1\" || node === \"T2\") && !messageDisplayed) {\n                            handleTrapped();\n                            messageDisplayed = true;\n                        } else if (i === pathWithZeroes.length - 2 && !messageDisplayed) {\n                            if (input.length < 7) {\n                                handleShort();\n                                messageDisplayed = true;\n                            } else if (node === 14 || node === 17) {\n                                handleValid();\n                                messageDisplayed = true;\n                            } else {\n                                handleInvalid();\n                                messageDisplayed = true;\n                            }\n                        }\n                    }, i * 200);\n                });\n            }\n        } else {\n            if (input === \"\") {\n                emptyToast();\n            } else if (!input.match(/^[01]+$/)) {\n                notInLanguageToast();\n            } else {\n                setSimulating(true);\n                results = new _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.DFA(input, _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.problem2, _DFA_Logic__WEBPACK_IMPORTED_MODULE_2__.language2);\n                const pathWithZeroes = [\n                    0\n                ].concat(...results.path.map((e)=>[\n                        e,\n                        0\n                    ]));\n                let messageDisplayed = false;\n                pathWithZeroes.some((node, i)=>{\n                    setTimeout(()=>{\n                        setCurrentNode(node);\n                        if ((node === \"T1\" || node === \"T2\") && !messageDisplayed) {\n                            handleTrapped();\n                            messageDisplayed = true;\n                        } else if (node === 9 && !messageDisplayed) {\n                            handleValid();\n                            messageDisplayed = true;\n                        } else if (i === pathWithZeroes.length - 2 && !messageDisplayed) {\n                            if (input.length < 6) {\n                                handleShort();\n                                messageDisplayed = true;\n                            } else if (node === 9) {\n                                handleValid();\n                                messageDisplayed = true;\n                                return true;\n                            } else {\n                                handleInvalid();\n                                messageDisplayed = true;\n                            }\n                        }\n                    }, i * 200);\n                });\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n        direction: [\n            \"column\",\n            \"column\",\n            \"column\",\n            \"column\",\n            \"column\",\n            \"row\"\n        ],\n        align: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LeftBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleTest: handleTest,\n                data: data,\n                prob2: prob2,\n                string: string,\n                handleTextChange: handleTextChange,\n                simulating: simulating,\n                handleSimulation: handleSimulation,\n                handleReset: handleReset,\n                count: count,\n                regex1: regex1,\n                regex2: regex2\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edzel Armengol\\\\Desktop\\\\DFA-Simulator\\\\components\\\\Main.js\",\n                lineNumber: 237,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Divider, {\n                display: [\n                    \"block\",\n                    null,\n                    \"block\",\n                    null,\n                    null,\n                    \"none\"\n                ],\n                mt: \"6\",\n                mb: \"2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edzel Armengol\\\\Desktop\\\\DFA-Simulator\\\\components\\\\Main.js\",\n                lineNumber: 250,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RightBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                prob2: prob2,\n                simulating: simulating,\n                regex1: regex1,\n                regex2: regex2,\n                currentNode: currentNode,\n                handleSwitch: handleSwitch\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edzel Armengol\\\\Desktop\\\\DFA-Simulator\\\\components\\\\Main.js\",\n                lineNumber: 255,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Edzel Armengol\\\\Desktop\\\\DFA-Simulator\\\\components\\\\Main.js\",\n        lineNumber: 233,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"q+0v9fwnAZmyXCShoNhc0z1IRtI=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTzs0QkFDWCxPQUFPO2dDQUNIYjtnQ0FDQWEsbUJBQW1COzRCQUN2Qjt3QkFDSjtvQkFDSixHQUFHRyxJQUFJO2dCQUNYO1lBRUE7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUN6RSxrREFBSUE7UUFDSDJFLFdBQVc7WUFBQztZQUFVO1lBQVU7WUFBVTtZQUFVO1lBQVU7U0FBTTtRQUNwRUMsT0FBTTs7MEJBRU4sOERBQUNuRSwyREFBT0E7Z0JBQ0hxRCxZQUFZQTtnQkFDWjlDLE1BQU1BO2dCQUNOSSxPQUFPQTtnQkFDUE4sUUFBUUE7Z0JBQ1JxQixrQkFBa0JBO2dCQUNsQlgsWUFBWUE7Z0JBQ1p5QyxrQkFBa0JBO2dCQUNsQnZCLGFBQWFBO2dCQUNieEIsT0FBT0E7Z0JBQ1BOLFFBQVFBO2dCQUNSQyxRQUFRQTs7Ozs7OzBCQUViLDhEQUFDWCxxREFBT0E7Z0JBQ1IyRSxTQUFTO29CQUFDO29CQUFTO29CQUFNO29CQUFTO29CQUFNO29CQUFNO2lCQUFPO2dCQUNyREMsSUFBRztnQkFDSEMsSUFBRzs7Ozs7OzBCQUVILDhEQUFDckUsNERBQVFBO2dCQUNKVSxPQUFPQTtnQkFDUEksWUFBWUE7Z0JBQ1paLFFBQVFBO2dCQUNSQyxRQUFRQTtnQkFDUlMsYUFBYUE7Z0JBQ2JzQixjQUFjQTs7Ozs7Ozs7Ozs7O0FBSW5CO0dBalFBakM7O1FBWWdCVixzREFBUUE7UUFDTkEsc0RBQVFBO1FBQ1hBLHNEQUFRQTtRQUNQQSxzREFBUUE7UUFDQUEsc0RBQVFBO1FBQ2hCQSxzREFBUUE7UUFDUkEsc0RBQVFBOzs7S0FsQnhCVTtBQW1RQSwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW4uanM/NjhlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCB1c2VUb2FzdCwgRGl2aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBERkEsIHByb2JsZW0xLCBwcm9ibGVtMiwgbGFuZ3VhZ2UxLCBsYW5ndWFnZTIgfSBmcm9tIFwiLi9ERkEvTG9naWNcIjtcbmltcG9ydCBMZWZ0Qm94IGZyb20gXCIuL2NvbXBvbmVudHMvTGVmdEJveFwiO1xuaW1wb3J0IFJpZ2h0Qm94IGZyb20gXCIuL2NvbXBvbmVudHMvUmlnaHRCb3hcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgcmVnZXgxID0gXCIoYStiKShhK2IpKihhYStiYikoYWIrYmEpKGErYikqKGFiYStiYWEpXCI7XG4gIGNvbnN0IHJlZ2V4MiA9IFwiKDExKzAwKSgxKzApKigxMDErMTExKzAxKSgwMCorMTEqKSgxKzArMTEpKlwiO1xuXG4gIGNvbnN0IFtzdHJpbmcsIHNldFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW3Byb2IyLCBzZXRQcm9iMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50Tm9kZSwgc2V0Q3VycmVudE5vZGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaW11bGF0aW5nLCBzZXRTaW11bGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB2YWxpZFN0cmluZyA9IHVzZVRvYXN0KCk7XG4gIGNvbnN0IGludmFsaWRTdHJpbmcgPSB1c2VUb2FzdCgpO1xuICBjb25zdCB0cmFwU3RyaW5nID0gdXNlVG9hc3QoKTtcbiAgY29uc3Qgc2hvcnRTdHJpbmcgPSB1c2VUb2FzdCgpO1xuICBjb25zdCBub3RJbkxhbmd1YWdlU3RyaW5nID0gdXNlVG9hc3QoKTtcbiAgY29uc3QgZW1wdHlTdHJpbmcgPSB1c2VUb2FzdCgpO1xuICBjb25zdCBjbG9zZVRvYXN0cyA9IHVzZVRvYXN0KCk7XG5cbiAgbGV0IGlucHV0ID0gc3RyaW5nO1xuICBsZXQgcmVzdWx0cyA9IFwiXCI7XG5cbiAgY29uc3QgaGFuZGxlVGV4dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRTdHJpbmcoc3RyaW5nVmFsdWUpO1xuICAgIGNvbnN0IGNvdW50VmFsdWUgPSBlLnRhcmdldC52YWx1ZS5sZW5ndGg7XG4gICAgc2V0Q291bnQoY291bnRWYWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0U3RyaW5nKFwiXCIpO1xuICAgIHNldENvdW50KDApO1xuICAgIHNldERhdGEoXCJcIik7XG4gICAgY2xvc2VBbGwoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTd2l0Y2ggPSAoKSA9PiB7XG4gICAgc2V0UHJvYjIoKHByZXYpID0+ICFwcmV2KTtcbiAgICBzZXREYXRhKFwiXCIpO1xuICAgIGNsb3NlQWxsKCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VBbGwgPSAoKSA9PiB7XG4gICAgY2xvc2VUb2FzdHMuY2xvc2VBbGwoKTtcbiAgfTtcblxuICBjb25zdCBlbXB0eVRvYXN0ID0gKCkgPT4ge1xuICAgIGVtcHR5U3RyaW5nKHtcbiAgICAgIHRpdGxlOiBcIkVtcHR5IElucHV0XCIsXG4gICAgICBzdGF0dXM6IFwid2FybmluZ1wiLFxuICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBub3RJbkxhbmd1YWdlVG9hc3QgPSAoKSA9PiB7XG4gICAgbm90SW5MYW5ndWFnZVN0cmluZyh7XG4gICAgICB0aXRsZTogXCJJbnZhbGlkIElucHV0XCIsXG4gICAgICBzdGF0dXM6IFwid2FybmluZ1wiLFxuICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0cmFwVG9hc3QgPSAoKSA9PiB7XG4gICAgdHJhcFN0cmluZyh7XG4gICAgICB0aXRsZTogXCJJbnZhbGlkOiBUcmFwcGVkXCIsXG4gICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvcnRUb2FzdCA9ICgpID0+IHtcbiAgICBzaG9ydFN0cmluZyh7XG4gICAgICB0aXRsZTogXCJJbnZhbGlkOiBUb28gU2hvcnRcIixcbiAgICAgIHN0YXR1czogXCJlcnJvclwiLFxuICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbnZhbGlkVG9hc3QgPSAoKSA9PiB7XG4gICAgaW52YWxpZFN0cmluZyh7XG4gICAgICB0aXRsZTogXCJJbnZhbGlkIFN0cmluZ1wiLFxuICAgICAgc3RhdHVzOiBcImVycm9yXCIsXG4gICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkVG9hc3QgPSAoKSA9PiB7XG4gICAgdmFsaWRTdHJpbmcoe1xuICAgICAgdGl0bGU6IFwiVmFsaWQgU3RyaW5nIVwiLFxuICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcbiAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVHJhcHBlZCA9ICgpID0+IHtcbiAgICBzZXRTaW11bGF0aW5nKGZhbHNlKTtcbiAgICB0cmFwVG9hc3QoKTtcbiAgICBzZXREYXRhKHJlc3VsdHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNob3J0ID0gKCkgPT4ge1xuICAgIHNldFNpbXVsYXRpbmcoZmFsc2UpO1xuICAgIHNob3J0VG9hc3QoKTtcbiAgICBzZXREYXRhKHJlc3VsdHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUludmFsaWQgPSAoKSA9PiB7XG4gICAgc2V0U2ltdWxhdGluZyhmYWxzZSk7XG4gICAgaW52YWxpZFRvYXN0KCk7XG4gICAgc2V0RGF0YShyZXN1bHRzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWYWxpZCA9ICgpID0+IHtcbiAgICBzZXRTaW11bGF0aW5nKGZhbHNlKTtcbiAgICB2YWxpZFRvYXN0KCk7XG4gICAgc2V0RGF0YShyZXN1bHRzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dFN0cmluZyA9ICgpID0+IHtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xccysvZywgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZVRlc3QgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVJbnB1dFN0cmluZygpO1xuICBcbiAgICBpZiAoIXByb2IyKSB7XG4gICAgICBpZiAoaW5wdXQgPT09IFwiXCIpIHtcbiAgICAgICAgZW1wdHlUb2FzdCgpO1xuICAgICAgfSBlbHNlIGlmICghaW5wdXQubWF0Y2goL15bYWJdKyQvKSkge1xuICAgICAgICBub3RJbkxhbmd1YWdlVG9hc3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMgPSBuZXcgREZBKGlucHV0LCBwcm9ibGVtMSwgbGFuZ3VhZ2UxKTtcbiAgICAgICAgc2V0RGF0YShyZXN1bHRzKTtcbiAgICAgIH0gXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnB1dCA9PT0gXCJcIikge1xuICAgICAgICBlbXB0eVRvYXN0KCk7XG4gICAgICB9IGVsc2UgaWYgKCFpbnB1dC5tYXRjaCgvXlswMV0rJC8pKSB7XG4gICAgICAgIG5vdEluTGFuZ3VhZ2VUb2FzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cyA9IG5ldyBERkEoaW5wdXQsIHByb2JsZW0yLCBsYW5ndWFnZTIpO1xuICAgICAgICBzZXREYXRhKHJlc3VsdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgXG4gIFxuICBjb25zdCBoYW5kbGVTaW11bGF0aW9uID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlSW5wdXRTdHJpbmcoKTtcbiAgXG4gICAgaWYgKCFwcm9iMikge1xuICAgICAgaWYgKGlucHV0ID09PSBcIlwiKSB7XG4gICAgICAgIGVtcHR5VG9hc3QoKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlucHV0Lm1hdGNoKC9eW2FiXSskLykpIHtcbiAgICAgICAgbm90SW5MYW5ndWFnZVRvYXN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTaW11bGF0aW5nKHRydWUpO1xuICAgICAgICByZXN1bHRzID0gbmV3IERGQShpbnB1dCwgcHJvYmxlbTEsIGxhbmd1YWdlMSk7XG4gICAgICAgIGNvbnN0IHBhdGhXaXRoWmVyb2VzID0gWzBdLmNvbmNhdCguLi5yZXN1bHRzLnBhdGgubWFwKChlKSA9PiBbZSwgMF0pKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgcGF0aFdpdGhaZXJvZXMuc29tZSgobm9kZSwgaSkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q3VycmVudE5vZGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoKG5vZGUgPT09IFwiVDFcIiB8fCBub2RlID09PSBcIlQyXCIpICYmICFtZXNzYWdlRGlzcGxheWVkKSB7XG4gICAgICAgICAgICAgIGhhbmRsZVRyYXBwZWQoKTtcbiAgICAgICAgICAgICAgbWVzc2FnZURpc3BsYXllZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHBhdGhXaXRoWmVyb2VzLmxlbmd0aCAtIDIgJiYgIW1lc3NhZ2VEaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQubGVuZ3RoIDwgNykge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTaG9ydCgpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGlzcGxheWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUgPT09IDE0IHx8IG5vZGUgPT09IDE3KSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVZhbGlkKCk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUludmFsaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURpc3BsYXllZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwgaSAqIDIwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5wdXQgPT09IFwiXCIpIHtcbiAgICAgICAgZW1wdHlUb2FzdCgpO1xuICAgICAgfSBlbHNlIGlmICghaW5wdXQubWF0Y2goL15bMDFdKyQvKSkge1xuICAgICAgICBub3RJbkxhbmd1YWdlVG9hc3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNpbXVsYXRpbmcodHJ1ZSk7XG4gICAgICAgIHJlc3VsdHMgPSBuZXcgREZBKGlucHV0LCBwcm9ibGVtMiwgbGFuZ3VhZ2UyKTtcbiAgICAgICAgY29uc3QgcGF0aFdpdGhaZXJvZXMgPSBbMF0uY29uY2F0KC4uLnJlc3VsdHMucGF0aC5tYXAoKGUpID0+IFtlLCAwXSkpO1xuICAgICAgICBsZXQgbWVzc2FnZURpc3BsYXllZCA9IGZhbHNlO1xuICAgICAgICBwYXRoV2l0aFplcm9lcy5zb21lKChub2RlLCBpKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEN1cnJlbnROb2RlKG5vZGUpO1xuICAgICAgICAgICAgICBpZiAoKG5vZGUgPT09IFwiVDFcIiB8fCBub2RlID09PSBcIlQyXCIpICYmICFtZXNzYWdlRGlzcGxheWVkKSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVUcmFwcGVkKCk7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlRGlzcGxheWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlID09PSA5ICYmICFtZXNzYWdlRGlzcGxheWVkKSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVWYWxpZCgpO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZURpc3BsYXllZCA9IHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gcGF0aFdpdGhaZXJvZXMubGVuZ3RoIC0gMiAmJiAhbWVzc2FnZURpc3BsYXllZCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTaG9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlID09PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVmFsaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGlzcGxheWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW52YWxpZCgpO1xuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwgaSAqIDIwMCk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGRpcmVjdGlvbj17W1wiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwicm93XCJdfVxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgPExlZnRCb3hcbiAgICAgICAgICAgaGFuZGxlVGVzdD17aGFuZGxlVGVzdH1cbiAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgcHJvYjI9e3Byb2IyfVxuICAgICAgICAgICBzdHJpbmc9e3N0cmluZ31cbiAgICAgICAgICAgaGFuZGxlVGV4dENoYW5nZT17aGFuZGxlVGV4dENoYW5nZX1cbiAgICAgICAgICAgc2ltdWxhdGluZz17c2ltdWxhdGluZ31cbiAgICAgICAgICAgaGFuZGxlU2ltdWxhdGlvbj17aGFuZGxlU2ltdWxhdGlvbn1cbiAgICAgICAgICAgaGFuZGxlUmVzZXQ9e2hhbmRsZVJlc2V0fVxuICAgICAgICAgICBjb3VudD17Y291bnR9XG4gICAgICAgICAgIHJlZ2V4MT17cmVnZXgxfVxuICAgICAgICAgICByZWdleDI9e3JlZ2V4Mn1cbiAgICAgICAgIC8+XG4gICAgICA8RGl2aWRlclxuICAgICAgZGlzcGxheT17W1wiYmxvY2tcIiwgbnVsbCwgXCJibG9ja1wiLCBudWxsLCBudWxsLCBcIm5vbmVcIl19XG4gICAgICBtdD1cIjZcIlxuICAgICAgbWI9XCIyXCJcbiAgICAgIC8+XG4gICAgICA8UmlnaHRCb3hcbiAgICAgICAgICAgcHJvYjI9e3Byb2IyfVxuICAgICAgICAgICBzaW11bGF0aW5nPXtzaW11bGF0aW5nfVxuICAgICAgICAgICByZWdleDE9e3JlZ2V4MX1cbiAgICAgICAgICAgcmVnZXgyPXtyZWdleDJ9XG4gICAgICAgICAgIGN1cnJlbnROb2RlPXtjdXJyZW50Tm9kZX1cbiAgICAgICAgICAgaGFuZGxlU3dpdGNoPXtoYW5kbGVTd2l0Y2h9XG4gICAgICAgICAvPlxuICAgICAgPC9GbGV4PlxuICAgICAgKTtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiRmxleCIsInVzZVRvYXN0IiwiRGl2aWRlciIsInVzZVN0YXRlIiwiREZBIiwicHJvYmxlbTEiLCJwcm9ibGVtMiIsImxhbmd1YWdlMSIsImxhbmd1YWdlMiIsIkxlZnRCb3giLCJSaWdodEJveCIsIk1haW4iLCJyZWdleDEiLCJyZWdleDIiLCJzdHJpbmciLCJzZXRTdHJpbmciLCJkYXRhIiwic2V0RGF0YSIsImNvdW50Iiwic2V0Q291bnQiLCJwcm9iMiIsInNldFByb2IyIiwiY3VycmVudE5vZGUiLCJzZXRDdXJyZW50Tm9kZSIsInNpbXVsYXRpbmciLCJzZXRTaW11bGF0aW5nIiwidmFsaWRTdHJpbmciLCJpbnZhbGlkU3RyaW5nIiwidHJhcFN0cmluZyIsInNob3J0U3RyaW5nIiwibm90SW5MYW5ndWFnZVN0cmluZyIsImVtcHR5U3RyaW5nIiwiY2xvc2VUb2FzdHMiLCJpbnB1dCIsInJlc3VsdHMiLCJoYW5kbGVUZXh0Q2hhbmdlIiwiZSIsInN0cmluZ1ZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJjb3VudFZhbHVlIiwibGVuZ3RoIiwiaGFuZGxlUmVzZXQiLCJjbG9zZUFsbCIsImhhbmRsZVN3aXRjaCIsInByZXYiLCJlbXB0eVRvYXN0IiwidGl0bGUiLCJzdGF0dXMiLCJpc0Nsb3NhYmxlIiwibm90SW5MYW5ndWFnZVRvYXN0IiwidHJhcFRvYXN0Iiwic2hvcnRUb2FzdCIsImludmFsaWRUb2FzdCIsInZhbGlkVG9hc3QiLCJoYW5kbGVUcmFwcGVkIiwiaGFuZGxlU2hvcnQiLCJoYW5kbGVJbnZhbGlkIiwiaGFuZGxlVmFsaWQiLCJoYW5kbGVJbnB1dFN0cmluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZVRlc3QiLCJwcmV2ZW50RGVmYXVsdCIsIm1hdGNoIiwiaGFuZGxlU2ltdWxhdGlvbiIsInBhdGhXaXRoWmVyb2VzIiwiY29uY2F0IiwicGF0aCIsIm1hcCIsIm1lc3NhZ2VEaXNwbGF5ZWQiLCJzb21lIiwibm9kZSIsImkiLCJzZXRUaW1lb3V0IiwiZGlyZWN0aW9uIiwiYWxpZ24iLCJkaXNwbGF5IiwibXQiLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n"));

/***/ })

});