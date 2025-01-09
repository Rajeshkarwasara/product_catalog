"use strict";
exports.id = 3198;
exports.ids = [3198];
exports.modules = {

/***/ 3198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(972);
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_ToastContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var react_bootstrap_ToastContainer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ToastContainer__WEBPACK_IMPORTED_MODULE_4__);





{}const ToastDismissible = ({ showToast , message , messageType , title  })=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showToast);
    const toggleShow = ()=>setShow(!show)
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2___default()), {
        show: show,
        onClose: toggleShow,
        delay: 2000,
        autohide: true,
        style: {
            backgroundColor: "transparent"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2___default().Header), {
                closeVariant: "white",
                className: ` ${messageType == "error" ? "bg-danger" : "bg-success"} text-white`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: ` ${messageType == "error" ? "fi-x-circle" : "fi-check-circle"} me-2 `
                    }),
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "fw-bold me-auto",
                        children: title
                    })
                ]
            }),
            message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2___default().Body), {
                className: ` ${messageType == "error" ? "text-danger" : "text-success"} me-2 `,
                children: message
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastDismissible);


/***/ })

};
;