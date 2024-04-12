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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Feeds: function() { return /* binding */ Feeds; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabaseBrowserClient_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/supabaseBrowserClient.utils */ \"(app-pages-browser)/./src/utils/supabaseBrowserClient.utils.ts\");\n/* __next_internal_client_entry_do_not_use__ Feeds auto */ \nvar _s = $RefreshSig$();\n\n\nconst FeedsComponent = ()=>{\n    _s();\n    const [feeds, setFeeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const supabase = (0,_utils_supabaseBrowserClient_utils__WEBPACK_IMPORTED_MODULE_2__.makeBrowserClient)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchFeeds = async ()=>{\n            const { data, error } = await supabase.from(\"feeds\").select(\"*, users(username)\").order(\"created_at\", {\n                ascending: false\n            });\n            console.log(data);\n            if (error) {\n                console.error(\"Error fetching feeds:\", error.message);\n            } else {\n                setFeeds(data || []);\n            }\n        };\n        fetchFeeds();\n    }, []);\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        return \"\".concat(date.getMonth(), \"/\").concat(date.getDate(), \"/\").concat(date.getFullYear());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: feeds.map((feed)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    border: \"1px solid black\",\n                    margin: \"10px\",\n                    padding: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"피드 생성자: \",\n                            feed.users.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: feed.image_url,\n                        alt: \"피드 이미지\",\n                        style: {\n                            maxWidth: \"500px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"내용: \",\n                            feed.content\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"작성일: \",\n                            formatDate(feed.created_at)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, feed.id, true, {\n                fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/arichoi/Documents/visionZ/Aristagram/src/app/feeds/feeds.component.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FeedsComponent, \"Fs12zjbx1oq2YSgfrvaslyINp4A=\");\n_c = FeedsComponent;\nFeedsComponent.displayName = \"Feeds\";\nconst Feeds = FeedsComponent;\nvar _c;\n$RefreshReg$(_c, \"FeedsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmVlZHMvZmVlZHMuY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTRDO0FBQzRCO0FBSXhFLE1BQU1HLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTUssV0FBV0oscUZBQWlCQTtJQUVsQ0YsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxhQUFhO1lBQ2pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNSCxTQUFTSSxJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDLHNCQUFzQkMsS0FBSyxDQUFDLGNBQWM7Z0JBQUVDLFdBQVc7WUFBTTtZQUN6SEMsUUFBUUMsR0FBRyxDQUFDUDtZQUNaLElBQUlDLE9BQU87Z0JBQ1RLLFFBQVFMLEtBQUssQ0FBQyx5QkFBeUJBLE1BQU1PLE9BQU87WUFDdEQsT0FBTztnQkFDTFgsU0FBU0csUUFBUSxFQUFFO1lBQ3JCO1FBQ0Y7UUFFQUQ7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNVSxhQUFhLENBQUNDO1FBQ2xCLE1BQU1DLE9BQU8sSUFBSUMsS0FBS0Y7UUFDdEIsT0FBTyxHQUFzQkMsT0FBbkJBLEtBQUtFLFFBQVEsSUFBRyxLQUFxQkYsT0FBbEJBLEtBQUtHLE9BQU8sSUFBRyxLQUFzQixPQUFuQkgsS0FBS0ksV0FBVztJQUNqRTtJQUVBLHFCQUNFLDhEQUFDQztrQkFDRXBCLE1BQU1xQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNGO2dCQUFrQkcsT0FBTztvQkFBRUMsUUFBUTtvQkFBbUJDLFFBQVE7b0JBQVFDLFNBQVM7Z0JBQU87O2tDQUNyRiw4REFBQ0M7OzRCQUFFOzRCQUFTTCxLQUFLTSxLQUFLLENBQUNDLFFBQVE7Ozs7Ozs7a0NBQy9CLDhEQUFDQzt3QkFBSUMsS0FBS1QsS0FBS1UsU0FBUzt3QkFBRUMsS0FBSTt3QkFBU1YsT0FBTzs0QkFBRVcsVUFBVTt3QkFBUTs7Ozs7O2tDQUNsRSw4REFBQ1A7OzRCQUFFOzRCQUFLTCxLQUFLYSxPQUFPOzs7Ozs7O2tDQUNwQiw4REFBQ1I7OzRCQUFFOzRCQUFNZCxXQUFXUyxLQUFLYyxVQUFVOzs7Ozs7OztlQUozQmQsS0FBS2UsRUFBRTs7Ozs7Ozs7OztBQVN6QjtHQXBDTXRDO0tBQUFBO0FBc0NOQSxlQUFldUMsV0FBVyxHQUFHO0FBRXRCLE1BQU1DLFFBQVF4QyxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZmVlZHMvZmVlZHMuY29tcG9uZW50LnRzeD85MGJiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VCcm93c2VyQ2xpZW50IH0gZnJvbSBcIkAvdXRpbHMvc3VwYWJhc2VCcm93c2VyQ2xpZW50LnV0aWxzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBGZWVkc0NvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW2ZlZWRzLCBzZXRGZWVkc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgc3VwYWJhc2UgPSBtYWtlQnJvd3NlckNsaWVudCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hGZWVkcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJmZWVkc1wiKS5zZWxlY3QoXCIqLCB1c2Vycyh1c2VybmFtZSlcIikub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBmZWVkczpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGZWVkcyhkYXRhIHx8IFtdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hGZWVkcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgIHJldHVybiBgJHtkYXRlLmdldE1vbnRoKCl9LyR7ZGF0ZS5nZXREYXRlKCl9LyR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2ZlZWRzLm1hcCgoZmVlZCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17ZmVlZC5pZH0gc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLCBtYXJnaW46IFwiMTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICA8cD7tlLzrk5wg7IOd7ISx7J6QOiB7ZmVlZC51c2Vycy51c2VybmFtZX08L3A+XG4gICAgICAgICAgPGltZyBzcmM9e2ZlZWQuaW1hZ2VfdXJsfSBhbHQ9XCLtlLzrk5wg7J2066+47KeAXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNTAwcHhcIiB9fSAvPlxuICAgICAgICAgIDxwPuuCtOyaqToge2ZlZWQuY29udGVudH08L3A+XG4gICAgICAgICAgPHA+7J6R7ISx7J28OiB7Zm9ybWF0RGF0ZShmZWVkLmNyZWF0ZWRfYXQpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkZlZWRzQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJGZWVkc1wiO1xuXG5leHBvcnQgY29uc3QgRmVlZHMgPSBGZWVkc0NvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1ha2VCcm93c2VyQ2xpZW50IiwiRmVlZHNDb21wb25lbnQiLCJmZWVkcyIsInNldEZlZWRzIiwic3VwYWJhc2UiLCJmZXRjaEZlZWRzIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJkaXYiLCJtYXAiLCJmZWVkIiwic3R5bGUiLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwicCIsInVzZXJzIiwidXNlcm5hbWUiLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJtYXhXaWR0aCIsImNvbnRlbnQiLCJjcmVhdGVkX2F0IiwiaWQiLCJkaXNwbGF5TmFtZSIsIkZlZWRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/feeds/feeds.component.tsx\n"));

/***/ })

});