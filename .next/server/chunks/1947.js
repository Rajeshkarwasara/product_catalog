exports.id = 1947;
exports.ids = [1947];
exports.modules = {

/***/ 7188:
/***/ ((module) => {

// Exports
module.exports = {
	"MobileTextColor": "ViewMobileNumber_MobileTextColor__nT4kz",
	"MobileNumberList": "ViewMobileNumber_MobileNumberList__9s9DG",
	"CoccocAloCircle": "ViewMobileNumber_CoccocAloCircle__p9C8_",
	"coccoc-alo-circle-anim": "ViewMobileNumber_coccoc-alo-circle-anim__ggzy9",
	"CoccocAloCircleFill": "ViewMobileNumber_CoccocAloCircleFill__nzFxk",
	"coccoc-alo-circle-fill-anim": "ViewMobileNumber_coccoc-alo-circle-fill-anim__xsi1j",
	"CoccocAloImgCircle": "ViewMobileNumber_CoccocAloImgCircle__CVavH",
	"coccoc-alo-circle-img-anim": "ViewMobileNumber_coccoc-alo-circle-img-anim__E6avP"
};


/***/ }),

/***/ 1947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ViewMobileNumber_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7188);
/* harmony import */ var _styles_ViewMobileNumber_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ViewMobileNumber_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ViewMobileNumber = ({ MobilePopup , phone , id , phoneLimit =3 , tagColor ="#4D973D" , iconBgColor ="#4D973D" , showPhoneStatus =false , setPhoneFxn =()=>false
 , ...props })=>{
    const { 0: showPhone , 1: setShowPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowPhone(showPhoneStatus);
    }, [
        showPhoneStatus
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "d-block me-1 fs-sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_styles_ViewMobileNumber_module_css__WEBPACK_IMPORTED_MODULE_2___default().MobileTextColor)}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_ViewMobileNumber_module_css__WEBPACK_IMPORTED_MODULE_2___default().CoccocAloCircle)}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_ViewMobileNumber_module_css__WEBPACK_IMPORTED_MODULE_2___default().CoccocAloCircleFill)}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_ViewMobileNumber_module_css__WEBPACK_IMPORTED_MODULE_2___default().CoccocAloImgCircle)}`,
                            style: {
                                backgroundColor: `${iconBgColor}`
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `fi-phone`
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_styles_ViewMobileNumber_module_css__WEBPACK_IMPORTED_MODULE_2___default().MobileNumberList)}`,
                    children: showPhone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: phone.split(",").splice(0, phoneLimit).map((val, inx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                style: {
                                    color: `${tagColor}`
                                },
                                href: `tel:${val}`,
                                children: val
                            }, inx)
                        )
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "javascript:void(0);",
                        style: {
                            color: `${tagColor}`
                        },
                        onClick: ()=>{
                            if (!showPhone) {
                                MobilePopup(phone, id);
                            }
                            setTimeout(()=>{
                                setShowPhone(true);
                                setPhoneFxn(true);
                            }, 2000);
                        },
                        children: "Show Number"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewMobileNumber);


/***/ })

};
;