"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/feeds/page",{

/***/ "(app-pages-browser)/./src/app/feeds/feeds.component.tsx":
/*!*******************************************!*\
  !*** ./src/app/feeds/feeds.component.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Feeds: function() { return /* binding */ Feeds; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabaseBrowserClient_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/supabaseBrowserClient.utils */ \"(app-pages-browser)/./src/utils/supabaseBrowserClient.utils.ts\");\n/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.component */ \"(app-pages-browser)/./src/app/feeds/comments.component.tsx\");\n/* harmony import */ var _likes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./likes.component */ \"(app-pages-browser)/./src/app/feeds/likes.component.tsx\");\n/* __next_internal_client_entry_do_not_use__ Feeds auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FeedsComponent = (myUserId)=>{\n    _s();\n    const [feeds, setFeeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const supabase = (0,_utils_supabaseBrowserClient_utils__WEBPACK_IMPORTED_MODULE_2__.makeBrowserClient)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchFeeds = async ()=>{\n            const { data, error } = await supabase.from(\"feeds\").select(\"*, users(username)\").order(\"created_at\", {\n                ascending: false\n            });\n            console.log(data);\n            if (error) {\n                console.error(\"error fetching feeds:\", error.message);\n            } else {\n                setFeeds(data || []);\n            }\n        };\n        fetchFeeds();\n    }, [\n        supabase\n    ]);\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        return \"\".concat(date.getMonth() + 1, \"/\").concat(date.getDate(), \"/\").concat(date.getFullYear());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: feeds.map((feed)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    border: \"1px solid black\",\n                    margin: \"10px\",\n                    padding: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"피드 생성자: \",\n                            feed.users.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: feed.image_url,\n                        alt: \"피드 이미지\",\n                        style: {\n                            maxWidth: \"500px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"내용: \",\n                            feed.content\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"작성일: \",\n                            formatDate(feed.created_at)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comments_component__WEBPACK_IMPORTED_MODULE_3__.Comments, {\n                        feedId: feed.id,\n                        myUserId: myUserId\n                    }, void 0, false, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_likes_component__WEBPACK_IMPORTED_MODULE_4__.Likes, {\n                        feedId: feed.id,\n                        myUserId: myUserId\n                    }, void 0, false, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, feed.id, true, {\n                fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FeedsComponent, \"Fs12zjbx1oq2YSgfrvaslyINp4A=\");\n_c = FeedsComponent;\nFeedsComponent.displayName = \"Feeds\";\nconst Feeds = FeedsComponent;\nvar _c;\n$RefreshReg$(_c, \"FeedsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmVlZHMvZmVlZHMuY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDNEI7QUFHeEI7QUFDTjtBQUUxQyxNQUFNSyxpQkFBaUIsQ0FBQ0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLE1BQU1RLFdBQVdQLHFGQUFpQkE7SUFFbENGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsYUFBYTtZQUNqQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUgsU0FDM0JJLElBQUksQ0FBQyxTQUNMQyxNQUFNLENBQUMsc0JBQ1BDLEtBQUssQ0FBQyxjQUFjO2dCQUFFQyxXQUFXO1lBQU07WUFDMUNDLFFBQVFDLEdBQUcsQ0FBQ1A7WUFDWixJQUFJQyxPQUFPO2dCQUNUSyxRQUFRTCxLQUFLLENBQUMseUJBQXlCQSxNQUFNTyxPQUFPO1lBQ3RELE9BQU87Z0JBQ0xYLFNBQVNHLFFBQVEsRUFBRTtZQUNyQjtRQUNGO1FBRUFEO0lBQ0YsR0FBRztRQUFDRDtLQUFTO0lBRWIsTUFBTVcsYUFBYSxDQUFDQztRQUNsQixNQUFNQyxPQUFPLElBQUlDLEtBQUtGO1FBQ3RCLE9BQU8sR0FBMEJDLE9BQXZCQSxLQUFLRSxRQUFRLEtBQUssR0FBRSxLQUFxQkYsT0FBbEJBLEtBQUtHLE9BQU8sSUFBRyxLQUFzQixPQUFuQkgsS0FBS0ksV0FBVztJQUNyRTtJQUVBLHFCQUNFLDhEQUFDQztrQkFDRXBCLE1BQU1xQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNGO2dCQUFrQkcsT0FBTztvQkFBRUMsUUFBUTtvQkFBbUJDLFFBQVE7b0JBQVFDLFNBQVM7Z0JBQU87O2tDQUNyRiw4REFBQ0M7OzRCQUFFOzRCQUFTTCxLQUFLTSxLQUFLLENBQUNDLFFBQVE7Ozs7Ozs7a0NBQy9CLDhEQUFDQzt3QkFBSUMsS0FBS1QsS0FBS1UsU0FBUzt3QkFBRUMsS0FBSTt3QkFBU1YsT0FBTzs0QkFBRVcsVUFBVTt3QkFBUTs7Ozs7O2tDQUNsRSw4REFBQ1A7OzRCQUFFOzRCQUFLTCxLQUFLYSxPQUFPOzs7Ozs7O2tDQUNwQiw4REFBQ1I7OzRCQUFFOzRCQUFNZCxXQUFXUyxLQUFLYyxVQUFVOzs7Ozs7O2tDQUNuQyw4REFBQ3hDLHlEQUFRQTt3QkFBQ3lDLFFBQVFmLEtBQUtnQixFQUFFO3dCQUFFdkMsVUFBVUE7Ozs7OztrQ0FDckMsOERBQUNGLG1EQUFLQTt3QkFBQ3dDLFFBQVFmLEtBQUtnQixFQUFFO3dCQUFFdkMsVUFBVUE7Ozs7Ozs7ZUFOMUJ1QixLQUFLZ0IsRUFBRTs7Ozs7Ozs7OztBQVd6QjtHQXpDTXhDO0tBQUFBO0FBMkNOQSxlQUFleUMsV0FBVyxHQUFHO0FBRXRCLE1BQU1DLFFBQVExQyxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZmVlZHMvZmVlZHMuY29tcG9uZW50LnRzeD85MGJiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlQnJvd3NlckNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlQnJvd3NlckNsaWVudC51dGlsc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENvbW1lbnRzIH0gZnJvbSBcIi4vY29tbWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaWtlcyB9IGZyb20gXCIuL2xpa2VzLmNvbXBvbmVudFwiO1xuXG5jb25zdCBGZWVkc0NvbXBvbmVudCA9IChteVVzZXJJZCkgPT4ge1xuICBjb25zdCBbZmVlZHMsIHNldEZlZWRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBzdXBhYmFzZSA9IG1ha2VCcm93c2VyQ2xpZW50KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEZlZWRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJmZWVkc1wiKVxuICAgICAgICAuc2VsZWN0KFwiKiwgdXNlcnModXNlcm5hbWUpXCIpXG4gICAgICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIGZldGNoaW5nIGZlZWRzOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZlZWRzKGRhdGEgfHwgW10pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaEZlZWRzKCk7XG4gIH0sIFtzdXBhYmFzZV0pO1xuXG4gIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICByZXR1cm4gYCR7ZGF0ZS5nZXRNb250aCgpICsgMX0vJHtkYXRlLmdldERhdGUoKX0vJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZmVlZHMubWFwKChmZWVkKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtmZWVkLmlkfSBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsIG1hcmdpbjogXCIxMHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxuICAgICAgICAgIDxwPu2UvOuTnCDsg53shLHsnpA6IHtmZWVkLnVzZXJzLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICA8aW1nIHNyYz17ZmVlZC5pbWFnZV91cmx9IGFsdD1cIu2UvOuTnCDsnbTrr7jsp4BcIiBzdHlsZT17eyBtYXhXaWR0aDogXCI1MDBweFwiIH19IC8+XG4gICAgICAgICAgPHA+64K07JqpOiB7ZmVlZC5jb250ZW50fTwvcD5cbiAgICAgICAgICA8cD7snpHshLHsnbw6IHtmb3JtYXREYXRlKGZlZWQuY3JlYXRlZF9hdCl9PC9wPlxuICAgICAgICAgIDxDb21tZW50cyBmZWVkSWQ9e2ZlZWQuaWR9IG15VXNlcklkPXtteVVzZXJJZH0vPlxuICAgICAgICAgIDxMaWtlcyBmZWVkSWQ9e2ZlZWQuaWR9IG15VXNlcklkPXtteVVzZXJJZH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmVlZHNDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIkZlZWRzXCI7XG5cbmV4cG9ydCBjb25zdCBGZWVkcyA9IEZlZWRzQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibWFrZUJyb3dzZXJDbGllbnQiLCJDb21tZW50cyIsIkxpa2VzIiwiRmVlZHNDb21wb25lbnQiLCJteVVzZXJJZCIsImZlZWRzIiwic2V0RmVlZHMiLCJzdXBhYmFzZSIsImZldGNoRmVlZHMiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImRpdiIsIm1hcCIsImZlZWQiLCJzdHlsZSIsImJvcmRlciIsIm1hcmdpbiIsInBhZGRpbmciLCJwIiwidXNlcnMiLCJ1c2VybmFtZSIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCIsIm1heFdpZHRoIiwiY29udGVudCIsImNyZWF0ZWRfYXQiLCJmZWVkSWQiLCJpZCIsImRpc3BsYXlOYW1lIiwiRmVlZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/feeds/feeds.component.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/feeds/likes.component.tsx":
/*!*******************************************!*\
  !*** ./src/app/feeds/likes.component.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Likes: function() { return /* binding */ Likes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabaseBrowserClient_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/supabaseBrowserClient.utils */ \"(app-pages-browser)/./src/utils/supabaseBrowserClient.utils.ts\");\n/* harmony import */ var _barrel_optimize_names_Button_mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Button/Button.mjs\");\n// \"use client\";\n// import { useEffect, useState } from \"react\";\n// import { makeBrowserClient } from \"@/utils/supabaseBrowserClient.utils\";\n// import { Button } from \"@mantine/core\";\n// import Link from \"next/link\";\n// const LikeComponent = ({feedId}) => {\n//   const supabase = makeBrowserClient();\n//   return (\n//     <div>\n//         좋아요 버튼이 표시될 부분\n//     </div>\n//   );\n// };\n// LikeComponent.displayName = \"Likes\";\n// export const Likes = LikeComponent;\n/* __next_internal_client_entry_do_not_use__ Likes auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LikeComponent = (param)=>{\n    let { feedId } = param;\n    _s();\n    const [liked, setLiked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const supabase = (0,_utils_supabaseBrowserClient_utils__WEBPACK_IMPORTED_MODULE_2__.makeBrowserClient)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkLiked();\n    }, [\n        feedId\n    ]);\n    const checkLiked = async ()=>{\n        try {\n            const { data, error } = await supabase.from(\"likes\").select(\"*\").eq(\"feed_id\", feedId).eq(\"user_id\", supabase.auth.user().id);\n            if (error) {\n                console.error(\"Error checking liked:\", error.message);\n            } else {\n                setLiked(data.length > 0);\n            }\n        } catch (error) {\n            console.error(\"Error checking liked:\", error.message);\n        }\n    };\n    const handleLike = async ()=>{\n        try {\n            if (!liked) {\n                await supabase.from(\"likes\").insert([\n                    {\n                        feed_id: feedId,\n                        user_id: supabase.auth.user().id,\n                        created_at: new Date().toISOString()\n                    }\n                ]);\n            } else {\n                await supabase.from(\"likes\").delete().eq(\"feed_id\", feedId).eq(\"user_id\", supabase.auth.user().id);\n            }\n            setLiked(!liked);\n        } catch (error) {\n            console.error(\"Error handling like:\", error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n            onClick: handleLike,\n            children: liked ? \"Unlike\" : \"Like\"\n        }, void 0, false, {\n            fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/likes.component.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/likes.component.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LikeComponent, \"XVwEQrglgvKg4vWDDJzGSUieNRY=\");\n_c = LikeComponent;\nLikeComponent.displayName = \"Likes\";\nconst Likes = LikeComponent;\nvar _c;\n$RefreshReg$(_c, \"LikeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmVlZHMvbGlrZXMuY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxnQkFBZ0I7QUFFaEIsK0NBQStDO0FBQy9DLDJFQUEyRTtBQUMzRSwwQ0FBMEM7QUFDMUMsZ0NBQWdDO0FBRWhDLHdDQUF3QztBQUN4QywwQ0FBMEM7QUFFMUMsYUFBYTtBQUNiLFlBQVk7QUFDWix5QkFBeUI7QUFDekIsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwsdUNBQXVDO0FBRXZDLHNDQUFzQzs7O0FBSU07QUFDNEI7QUFDakM7QUFFdkMsTUFBTUksZ0JBQWdCO1FBQUMsRUFBRUMsTUFBTSxFQUFFOztJQUMvQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTU8sV0FBV04scUZBQWlCQTtJQUVsQ0YsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHO1FBQUNKO0tBQU87SUFFWCxNQUFNSSxhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUgsU0FDM0JJLElBQUksQ0FBQyxTQUNMQyxNQUFNLENBQUMsS0FDUEMsRUFBRSxDQUFDLFdBQVdULFFBQ2RTLEVBQUUsQ0FBQyxXQUFXTixTQUFTTyxJQUFJLENBQUNDLElBQUksR0FBR0MsRUFBRTtZQUV4QyxJQUFJTixPQUFPO2dCQUNUTyxRQUFRUCxLQUFLLENBQUMseUJBQXlCQSxNQUFNUSxPQUFPO1lBQ3RELE9BQU87Z0JBQ0xaLFNBQVNHLEtBQUtVLE1BQU0sR0FBRztZQUN6QjtRQUNGLEVBQUUsT0FBT1QsT0FBTztZQUNkTyxRQUFRUCxLQUFLLENBQUMseUJBQXlCQSxNQUFNUSxPQUFPO1FBQ3REO0lBQ0Y7SUFFQSxNQUFNRSxhQUFhO1FBQ2pCLElBQUk7WUFDRixJQUFJLENBQUNmLE9BQU87Z0JBQ1YsTUFBTUUsU0FBU0ksSUFBSSxDQUFDLFNBQVNVLE1BQU0sQ0FBQztvQkFDbEM7d0JBQ0VDLFNBQVNsQjt3QkFDVG1CLFNBQVNoQixTQUFTTyxJQUFJLENBQUNDLElBQUksR0FBR0MsRUFBRTt3QkFDaENRLFlBQVksSUFBSUMsT0FBT0MsV0FBVztvQkFDcEM7aUJBQ0Q7WUFDSCxPQUFPO2dCQUNMLE1BQU1uQixTQUNISSxJQUFJLENBQUMsU0FDTGdCLE1BQU0sR0FDTmQsRUFBRSxDQUFDLFdBQVdULFFBQ2RTLEVBQUUsQ0FBQyxXQUFXTixTQUFTTyxJQUFJLENBQUNDLElBQUksR0FBR0MsRUFBRTtZQUMxQztZQUNBVixTQUFTLENBQUNEO1FBQ1osRUFBRSxPQUFPSyxPQUFPO1lBQ2RPLFFBQVFQLEtBQUssQ0FBQyx3QkFBd0JBLE1BQU1RLE9BQU87UUFDckQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVTtrQkFDQyw0RUFBQzFCLDhFQUFNQTtZQUFDMkIsU0FBU1Q7c0JBQWFmLFFBQVEsV0FBVzs7Ozs7Ozs7Ozs7QUFHdkQ7R0F0RE1GO0tBQUFBO0FBd0ROQSxjQUFjMkIsV0FBVyxHQUFHO0FBRXJCLE1BQU1DLFFBQVE1QixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZmVlZHMvbGlrZXMuY29tcG9uZW50LnRzeD8xNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiO1xuXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBtYWtlQnJvd3NlckNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlQnJvd3NlckNsaWVudC51dGlsc1wiO1xuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuLy8gY29uc3QgTGlrZUNvbXBvbmVudCA9ICh7ZmVlZElkfSkgPT4ge1xuLy8gICBjb25zdCBzdXBhYmFzZSA9IG1ha2VCcm93c2VyQ2xpZW50KCk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgICDsoovslYTsmpQg67KE7Yq87J20IO2RnOyLnOuQoCDrtoDrtoRcbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIExpa2VDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIkxpa2VzXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBMaWtlcyA9IExpa2VDb21wb25lbnQ7XG5cblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlQnJvd3NlckNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlQnJvd3NlckNsaWVudC51dGlsc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcblxuY29uc3QgTGlrZUNvbXBvbmVudCA9ICh7IGZlZWRJZCB9KSA9PiB7XG4gIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdXBhYmFzZSA9IG1ha2VCcm93c2VyQ2xpZW50KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0xpa2VkKCk7XG4gIH0sIFtmZWVkSWRdKTtcblxuICBjb25zdCBjaGVja0xpa2VkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImxpa2VzXCIpXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAgIC5lcShcImZlZWRfaWRcIiwgZmVlZElkKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHN1cGFiYXNlLmF1dGgudXNlcigpLmlkKTtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjaGVja2luZyBsaWtlZDpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMaWtlZChkYXRhLmxlbmd0aCA+IDApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2hlY2tpbmcgbGlrZWQ6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMaWtlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWxpa2VkKSB7XG4gICAgICAgIGF3YWl0IHN1cGFiYXNlLmZyb20oXCJsaWtlc1wiKS5pbnNlcnQoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZlZWRfaWQ6IGZlZWRJZCxcbiAgICAgICAgICAgIHVzZXJfaWQ6IHN1cGFiYXNlLmF1dGgudXNlcigpLmlkLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAuZnJvbShcImxpa2VzXCIpXG4gICAgICAgICAgLmRlbGV0ZSgpXG4gICAgICAgICAgLmVxKFwiZmVlZF9pZFwiLCBmZWVkSWQpXG4gICAgICAgICAgLmVxKFwidXNlcl9pZFwiLCBzdXBhYmFzZS5hdXRoLnVzZXIoKS5pZCk7XG4gICAgICB9XG4gICAgICBzZXRMaWtlZCghbGlrZWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaGFuZGxpbmcgbGlrZTpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTGlrZX0+e2xpa2VkID8gXCJVbmxpa2VcIiA6IFwiTGlrZVwifTwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGlrZUNvbXBvbmVudC5kaXNwbGF5TmFtZSA9IFwiTGlrZXNcIjtcblxuZXhwb3J0IGNvbnN0IExpa2VzID0gTGlrZUNvbXBvbmVudDtcblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibWFrZUJyb3dzZXJDbGllbnQiLCJCdXR0b24iLCJMaWtlQ29tcG9uZW50IiwiZmVlZElkIiwibGlrZWQiLCJzZXRMaWtlZCIsInN1cGFiYXNlIiwiY2hlY2tMaWtlZCIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJlcSIsImF1dGgiLCJ1c2VyIiwiaWQiLCJjb25zb2xlIiwibWVzc2FnZSIsImxlbmd0aCIsImhhbmRsZUxpa2UiLCJpbnNlcnQiLCJmZWVkX2lkIiwidXNlcl9pZCIsImNyZWF0ZWRfYXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJkZWxldGUiLCJkaXYiLCJvbkNsaWNrIiwiZGlzcGxheU5hbWUiLCJMaWtlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/feeds/likes.component.tsx\n"));

/***/ })

});