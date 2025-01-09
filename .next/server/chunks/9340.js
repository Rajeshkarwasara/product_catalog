"use strict";
exports.id = 9340;
exports.ids = [9340];
exports.modules = {

/***/ 9340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5698);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_6__]);
_components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const IconBox = ({ href , media , mediaColor , mediaShape , mediaHeight ="40" , mediaWidth ="40" , imageSrc , title , titleSize , text , type , light , align , className , btnHtml ="" , mediaClassName ="" , cardmediaClassName ="" , tittleExtraCls ="" , presenceBtnCls ="" , presenceBtnSec ="" , presenceBtnpri ="" , pubMillionCardCls ="" , publicationsMillionCardCls ="" , IconBoxMediamb3 ="mb-3" , presenceBtn =false , removeBgCls =false , TradingIconCls ="" , status =false , currentSession ="" , comboPackageId ="" , ...props })=>{
    const { 0: userSignInSignUp , 1: setUserSignInSignUp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const buyNowComboPackage = async ()=>{
        if (status) {
            //hide modal
            setUserSignInSignUp(false);
            //redirect on premium listing packages     
            next_router__WEBPACK_IMPORTED_MODULE_5___default().router.push("/premium-listing?query=" + comboPackageId);
        } else {
            //open modal
            setUserSignInSignUp(true);
        }
    };
    const mediaShapeClass = mediaShape ? ` rounded-${mediaShape}` : "", alignment = align ? ` text-${align}` : "", cardSkinClass = light ? " card-light" : "", titleFontSize = titleSize ? ` fs-${titleSize}` : " fs-base", titleSkinClass = light ? " text-light" : "", textSkinClass = light ? " text-light opacity-60" : "", extraClass = className ? ` ${className}` : "";
    mediaClassName = " " + mediaClassName;
    cardmediaClassName = " " + cardmediaClassName;
    tittleExtraCls = " " + tittleExtraCls;
    // Icon box media class
    let mediaColorClass;
    if (light) {
        mediaColorClass = " bg-faded-light text-light";
    } else {
        mediaColorClass = mediaColor ? ` bg-faded-${mediaColor} text-${mediaColor}` : " bg-faded-primary text-primary";
    }
    // CSS classes that depend on prop.type, prop.light, prop.alignment, prop.className
    let iconBoxClass, iconBoxMediaClass, iconBoxTitleClass, iconBoxTextClass;
    switch(type){
        case "card":
            iconBoxClass = "icon-box card card-body card-hover h-100 text-decoration-none" + cardSkinClass + alignment + extraClass + cardmediaClassName;
            iconBoxMediaClass = "icon-box-media mb-3" + mediaColorClass + mediaShapeClass + mediaClassName;
            iconBoxTitleClass = "icon-box-title " + titleFontSize + titleSkinClass + tittleExtraCls;
            iconBoxTextClass = " mt-2 mb-0" + textSkinClass + tittleExtraCls;
            break;
        case "card-shadow":
            iconBoxClass = "icon-box card card-body h-100  shadow-sm card-hover text-decoration-none" + cardSkinClass + alignment + extraClass + cardmediaClassName;
            iconBoxMediaClass = "icon-box-media mb-3" + mediaColorClass + mediaShapeClass + mediaClassName;
            iconBoxTitleClass = "icon-box-title " + titleFontSize + titleSkinClass + tittleExtraCls;
            iconBoxTextClass = " mt-2 mb-0" + textSkinClass + tittleExtraCls;
            break;
        case "pill":
            iconBoxClass = "icon-box card flex-row align-items-center card-hover rounded-pill text-decoration-none py-2 ps-2 pe-4" + cardSkinClass + alignment + extraClass + cardmediaClassName;
            iconBoxMediaClass = "icon-box-media rounded-pill me-2" + mediaColorClass + mediaClassName;
            iconBoxTitleClass = "icon-box-title  ps-1 pe-1" + titleSkinClass + tittleExtraCls;
            iconBoxTextClass = "d-none" + tittleExtraCls;
            break;
        case "pill-shadow":
            iconBoxClass = "icon-box card flex-row align-items-center card-hover border-0 shadow-sm rounded-pill text-decoration-none py-2 ps-2 pe-4" + cardSkinClass + alignment + extraClass + cardmediaClassName;
            iconBoxMediaClass = "icon-box-media rounded-pill me-2" + mediaColorClass + mediaClassName;
            iconBoxTitleClass = "icon-box-title  ps-1 pe-1 " + titleSkinClass + tittleExtraCls;
            iconBoxTextClass = "d-none" + tittleExtraCls;
            break;
        case "pill-rounded":
            iconBoxClass = "icon-box card flex-row align-items-center card-hover text-decoration-none py-2 ps-2 pe-4" + cardSkinClass + alignment + extraClass + cardmediaClassName;
            iconBoxMediaClass = "icon-box-media me-2" + mediaColorClass + mediaClassName;
            iconBoxTitleClass = "icon-box-title  ps-1 pe-1 " + titleSkinClass + tittleExtraCls;
            iconBoxTextClass = "d-none" + tittleExtraCls;
            break;
        case "pill-rounded-shadow":
            iconBoxClass = "icon-box card flex-row align-items-center card-hover border-0 shadow-sm text-decoration-none py-2 ps-2 pe-4" + cardSkinClass + alignment + extraClass + cardmediaClassName;
            iconBoxMediaClass = "icon-box-media me-2" + mediaColorClass + mediaClassName;
            iconBoxTitleClass = "icon-box-title  ps-1 pe-1" + titleSkinClass + tittleExtraCls;
            iconBoxTextClass = "d-none" + tittleExtraCls;
            break;
        default:
            iconBoxClass = "icon-box text-decoration-none" + alignment + extraClass + cardmediaClassName;
            iconBoxMediaClass = "icon-box-media " + IconBoxMediamb3 + " " + mediaColorClass + mediaShapeClass + mediaClassName;
            iconBoxTitleClass = "icon-box-title " + titleFontSize + titleSkinClass + tittleExtraCls;
            iconBoxTextClass = " mt-2 mb-0" + textSkinClass;
    }
    // Icon box text
    let iconBoxText = text ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: iconBoxTextClass,
        children: text
    }) : "";
    // Icon box media markup
    let iconBoxMedia;
    if (media && !removeBgCls) {
        iconBoxMedia = media === "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: iconBoxMediaClass,
            style: {
                backgroundImage: "url(" + imageSrc + ")"
            }
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: iconBoxMediaClass,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: media
            })
        });
    } else if (removeBgCls) {
        iconBoxMedia = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${TradingIconCls}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                src: imageSrc,
                width: mediaWidth,
                height: mediaHeight,
                loading: "lazy",
                alt: title
            })
        });
    }
    // Render markup
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            userSignInSignUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_6__["default"], {
                session: currentSession,
                show: true,
                onHide: ()=>setUserSignInSignUp(false)
                ,
                //redirectURL={process.env.BASE_URL+'/premium-listing?query='+comboPackageId} 
                callbackUrl: "/premium-listing?query=" + comboPackageId
            }),
            href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: href,
                passHref: true,
                prefetch: false,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: iconBoxClass,
                    ...props,
                    children: [
                        iconBoxMedia,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: iconBoxTitleClass,
                            children: title
                        }),
                        iconBoxText,
                        btnHtml
                    ]
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: iconBoxClass,
                ...props,
                children: [
                    iconBoxMedia,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: iconBoxTitleClass,
                        children: title
                    }),
                    iconBoxText,
                    presenceBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `d-flex justify-content-center ${presenceBtnCls}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/premium-listing",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "secondary",
                                        className: `me-2 ${presenceBtnSec}`,
                                        children: "Know More"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    onClick: ()=>buyNowComboPackage()
                                    ,
                                    variant: "primary",
                                    className: `ms-2 ${presenceBtnpri}`,
                                    children: "Buy Now"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;