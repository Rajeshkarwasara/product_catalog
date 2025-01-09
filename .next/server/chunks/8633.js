"use strict";
exports.id = 8633;
exports.ids = [8633];
exports.modules = {

/***/ 8633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const PricingPlan = ({ image , title , price , offerprice , perclickprice , offerperclickprice , perimpressionprice , offerperimpressionprice , description , isBest , button , light , featured , className , PricingPlanCardcAtive ="" , ...props })=>{
    const extraClass = className ? ` ${className}` : "";
    const { 0: showText , 1: setShowText  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    // Main wrapper CSS class
    let containerClass;
    if (featured) {
        if (light) {
            containerClass = "card card-light border-light card-active" + extraClass;
        } else {
            containerClass = "card shadow" + extraClass;
        }
    } else {
        if (light) {
            containerClass = "card card-light border-light" + extraClass;
        } else {
            containerClass = "card" + extraClass;
        }
    }
    // Render markup
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: containerClass,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card-body p-0",
                children: [
                    image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center mt-2 mb-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            src: image.src,
                            width: parseInt(image.width),
                            height: parseInt(image.height),
                            alt: image.alt
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_4___default().planHead)}`,
                        children: [
                            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: `h4 ${light ? " text-light" : ""}`,
                                children: title
                            }),
                            price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_4___default().PlanPrice)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: offerprice ? "\u20B9" + offerprice : ""
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: offerprice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                            children: price
                                        }) : price
                                    }),
                                    " RS/-"
                                ]
                            }),
                            isBest && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_4___default().PlanBest)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    src: "/images/advertise/planBestImg.svg",
                                    height: "19",
                                    width: "52"
                                })
                            })
                        ]
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_4___default().planBottom)}`,
                        children: showText ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: description
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setShowText(!showText)
                                    ,
                                    style: {
                                        backgroundColor: "transparent",
                                        color: "#FFCC29",
                                        padding: "0px",
                                        border: "none",
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                        fontSize: "13px"
                                    },
                                    children: "Show Less"
                                }),
                                " "
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: description.slice(0, 100)
                                    }
                                }),
                                description.length > 100 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setShowText(!showText)
                                    ,
                                    style: {
                                        backgroundColor: "transparent",
                                        color: "#FFCC29",
                                        padding: "0px",
                                        border: "none",
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                        fontSize: "13px"
                                    },
                                    children: "Show More"
                                }) : ""
                            ]
                        })
                    })
                ]
            }),
            button && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `py-1 border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_4___default().AdvertiseLastBtn)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `text-center  pb-3${light ? " border-light" : ""}`,
                    children: button.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: button.href,
                        prefetch: false,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            ...button.props,
                            className: button.variant ? `btn btn-${button.variant}` : "btn btn-primary fw-normal",
                            children: button.title
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        ...button.props,
                        type: "button",
                        className: button.variant ? `btn fw-normal btn-${button.variant}` : "btn btn-primary",
                        children: button.title
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingPlan);


/***/ })

};
;