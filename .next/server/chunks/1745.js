exports.id = 1745;
exports.ids = [1745];
exports.modules = {

/***/ 1359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);



const ScrollTopButton = ({ showOffset , duration , easing , tooltip  })=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleShow = (e)=>{
            if (e.currentTarget.pageYOffset > showOffset) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener("scroll", handleShow);
        return ()=>window.removeEventListener("scroll", handleShow)
        ;
    }, [
        showOffset
    ]);
    const scrollToTop = ()=>{
        react_scroll__WEBPACK_IMPORTED_MODULE_2__.animateScroll.scrollToTop({
            duration: duration,
            smooth: easing
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "btton",
        "aria-label": "Scroll Top",
        className: `btn-scroll-top${show ? " show" : ""}`,
        onClick: scrollToTop,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "btn-scroll-top-tooltip text-muted fs-sm me-2",
                children: tooltip
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "btn-scroll-top-icon fi-chevron-up"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTopButton);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;