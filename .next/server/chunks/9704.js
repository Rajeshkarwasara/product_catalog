"use strict";
exports.id = 9704;
exports.ids = [9704];
exports.modules = {

/***/ 9704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5__);





const Inaccurate = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/listings/modals/ReportListing.js -> " + "../modals/ReportInaccurate"
        ]
    },
    ssr: false
});
const ReportAbuse = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/listings/modals/ReportListing.js -> " + "../modals/ReportAbuse"
        ]
    },
    ssr: false
});

{}const ReportListing = ({ phoneNumber , showStatus , currentSession , sessionStatus , EditListingCls , InaccurateFormCls , InaccurateFormMainCls , businessID , ...props })=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showStatus);
    const { 0: inaccurateShow , 1: setInaccurateShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: abuseShow , 1: setAbuseShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const inaccurateHide = (status = 0)=>{
        setInaccurateShow(false);
        if (status == 2) {
            props.onHide();
        }
    };
    const abuseHide = (status = 0)=>{
        setAbuseShow(false);
        if (status == 2) {
            props.onHide();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            inaccurateShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Inaccurate, {
                showStatus: inaccurateShow,
                onHide: inaccurateHide,
                currentSession: currentSession,
                sessionStatus: sessionStatus,
                businessID: businessID,
                InaccurateFormCls: InaccurateFormCls,
                InaccurateFormMainCls: InaccurateFormMainCls
            }),
            abuseShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReportAbuse, {
                showStatus: abuseShow,
                onHide: abuseHide,
                currentSession: currentSession,
                sessionStatus: sessionStatus,
                businessID: businessID
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default()), {
                centered: true,
                show: show,
                ...props,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Body), {
                    className: "p-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                            onClick: ()=>props.onHide()
                            ,
                            "aria-label": "Close modal",
                            className: "position-absolute top-0 end-0 mt-3 me-3"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row mx-0 align-items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-md-12 px-4 pt-2 pb-4 px-sm-5 pt-md-5",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center mb-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "mb-0 mt-md-0 mt-sm-3 mt-4 h4",
                                                children: "Help us to improve this listing"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Select from options below"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        variant: "secondary",
                                        className: `d-flex ${EditListingCls}`,
                                        role: "button",
                                        onClick: ()=>{
                                            setInaccurateShow(true);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Report as inaccurate"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-chevron-right ms-auto"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        variant: "secondary",
                                        className: `d-flex ${EditListingCls}`,
                                        role: "button",
                                        onClick: ()=>props.onHide(1)
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Edit/Modify this business"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-chevron-right ms-auto"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        variant: "secondary",
                                        className: `d-flex ${EditListingCls}`,
                                        role: "button",
                                        onClick: ()=>setAbuseShow(true)
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Report abuse"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-chevron-right ms-auto"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportListing);


/***/ })

};
;