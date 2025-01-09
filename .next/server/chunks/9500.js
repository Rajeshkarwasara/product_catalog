"use strict";
exports.id = 9500;
exports.ids = [9500];
exports.modules = {

/***/ 9500:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Adsense = ({ client , slot , format ="auto" , layout ="" , layoutKey ="" , responsive =false , className ="" , style ={
    display: "inline-block"
} , enable_page_level_ads =false  })=>{
    console.log("Google Ads Load ", format);
    /* useEffect(() => {
        if (window) (window.adsbygoogle = window.adsbygoogle || []).push({})
    },[])*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setTimeout(()=>{
            if (false) {}
        }, 1000);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
            className: `${className} adsbygoogle-${(0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()}`,
            style: style,
            "data-ad-client": client,
            "data-ad-slot": slot,
            "data-ad-layout": layout,
            "data-ad-layout-key": layoutKey,
            "data-ad-format": format,
            "data-full-width-responsive": responsive
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Adsense);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;