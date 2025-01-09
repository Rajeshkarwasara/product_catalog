"use strict";
exports.id = 1814;
exports.ids = [1814];
exports.modules = {

/***/ 1814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CompanyDescription = ({ name ="" , LinkColorCls ="" , address ="" , products ="" , subcategories ="" , phone ="" , MobilePopup , id , setPhoneFxn , showPhoneStatus =false  })=>{
    const { 0: showPhone , 1: setShowPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showPhoneStatus);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowPhone(showPhoneStatus);
    }, [
        showPhoneStatus
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            address && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    `${name} is situated at ${address}`,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            phone && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    `You can contact ${name} on `,
                    showPhone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: `${LinkColorCls}`,
                        href: `tel:${phone.split(",")[0]}`,
                        children: phone.split(",")[0]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: `${LinkColorCls}`,
                        style: {
                            border: "1px solid #ffc200",
                            padding: "2px"
                        },
                        href: "javascript:void(0)",
                        onClick: ()=>{
                            MobilePopup(phone, id);
                            setTimeout(()=>{
                                setShowPhone(true);
                                setPhoneFxn(true);
                            }, 2000);
                        },
                        children: showPhone ? phone.split(",")[0] : "Show Number"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            products && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    `${name} provides the following products/services: ${products}`,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            subcategories && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    `${name}  is most searched in  ${subcategories}`,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompanyDescription);


/***/ })

};
;