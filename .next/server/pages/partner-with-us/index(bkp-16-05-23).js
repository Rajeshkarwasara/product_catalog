"use strict";
(() => {
var exports = {};
exports.id = 8124;
exports.ids = [8124];
exports.modules = {

/***/ 2807:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1636);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PropertyPartnerCardOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9738);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5698);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8184);
/* harmony import */ var _styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3017);
/* harmony import */ var _styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9025);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3889);
/* harmony import */ var react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_GalleryItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4086);
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2697);
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lightgallery_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2556);
/* harmony import */ var lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(329);
/* harmony import */ var _components_AboutUsSection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Services__WEBPACK_IMPORTED_MODULE_17__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Services__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const PartnerWithUsIndex = ({ csrfToken , onSwap , pillButtons , ...props })=>{
    const { 0: activeKey , 1: setActiveKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("home");
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const PageUrl = query.asPath;
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)() //use login session
    ;
    const partnerWithUsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const scrollPageWrite = (e)=>{
        //console.log("writeReviewRef",e)
        partnerWithUsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: "Partner with us",
                description: "Partner with Dialmenow. Together, We can shape The Digital World. Dial Me Now Online Pvt. Ltd. is an established offline (telephonic and print) and online (Website, WAP site & App) information provider in Rajasthan. We are Rajasthan\u2019s first own local search engine.",
                keyword: "partner with us, Dialmenow yellow pages",
                url: PageUrl,
                city: "",
                area: "",
                companyName: "",
                SEOIndexing: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageTitle: "Partner With Us",
                activeNav: "Account",
                userLoggedIn: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-0 mb-md-4 py-4 pt-0",
                    ref: partnerWithUsRef,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PropertyPartnerCardOverlay__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            img: {
                                src: "/images/partner-withus/partner-topBG-img.png",
                                alt: "Background image"
                            },
                            csrfToken: csrfToken,
                            title: "Together, We can shape The Digital World",
                            category: "Partner with Dialmenow",
                            className: "rounded-0 py-4 py-sm-4 py-md-5",
                            overlay: true,
                            ContainerCls: "container",
                            SmallAdvetiseCls: (_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().SmallAdvetise),
                            session: session
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: `full pt-40 pb-20 ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().businessPartnership)}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "mb-4 mb-sm-2 mb-sm-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "What do you get on business partnership"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10___default().Container), {
                                        defaultActiveKey: "home",
                                        transition: (react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_11___default()),
                                        activeKey: activeKey,
                                        onSelect: (key)=>setActiveKey(key)
                                        ,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                                    lg: 6,
                                                    xs: 12,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        variant: "tabs",
                                                        defaultActiveKey: "home",
                                                        className: "flex-column",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12___default().Item), {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12___default().Link), {
                                                                    eventKey: "home",
                                                                    className: `shadow-none bg-transparent px-0 py-3 py-md-1 ${activeKey == "home" ? (_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().numberShapeActive) : ""} ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().partnerLi)}`,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: `rounded-pill d-flex align-items-center justify-content-center ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().numberShape)}`,
                                                                                children: "1"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: `ps-3 ps-sm-4 ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().partnershipText)}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                        className: "mb-1",
                                                                                        children: "Dialmenow"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                        className: "mb-0",
                                                                                        children: "DialMeNow is Rajasthan's number one search destination. The service bridges the gap between buyers."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12___default().Item), {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12___default().Link), {
                                                                    eventKey: "profile",
                                                                    className: `shadow-none bg-transparent px-0 py-3 ${activeKey == "profile" ? (_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().numberShapeActive) : ""} ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().partnerLi)}`,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: `rounded-pill d-flex align-items-center justify-content-center ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().numberShape)}`,
                                                                                children: "2"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: `ps-3 ps-sm-4 ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().partnershipText)}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                        className: "mb-1",
                                                                                        children: "Sms Me Now"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                        className: "mb-0",
                                                                                        children: "Sms Me Now, helps Business Owners to take their Online Presence to the next level. We are in the business of Bulk SMS, Digital Marketing & Web Development."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12___default().Item), {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12___default().Link), {
                                                                    eventKey: "messages",
                                                                    className: `shadow-none bg-transparent px-0 py-3 ${activeKey == "messages" ? (_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().numberShapeActive) : ""} ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().partnerLi)}`,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: `rounded-pill d-flex align-items-center justify-content-center ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().numberShape)}`,
                                                                                children: "3"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: `ps-3 ps-sm-4 ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().partnershipText)}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                        className: "mb-1",
                                                                                        children: "Social Media"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                        className: "mb-0",
                                                                                        children: "When you are using social media for business, you should make sure to keep your social media profile updated consistently, and maintain a constant presence for your business\u2019s exposure."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                                    lg: 6,
                                                    xs: 12,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10___default().Content), {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10___default().Pane), {
                                                                eventKey: "home",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().businessPartnershipRight)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                        src: "/images/partner-withus/dialmeNowMain.png",
                                                                        width: 578,
                                                                        height: 413,
                                                                        alt: "#"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10___default().Pane), {
                                                                eventKey: "profile",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().businessPartnershipRight)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                        src: "/images/partner-withus/dialmeNowMain.png",
                                                                        width: 578,
                                                                        height: 413,
                                                                        alt: "#"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10___default().Pane), {
                                                                eventKey: "messages",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().businessPartnershipRight)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                        src: "/images/partner-withus/dialmeNowMain.png",
                                                                        width: 578,
                                                                        height: 413,
                                                                        alt: "#"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: `full ptb-50 ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhy)}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Why should you partner with Dialmenow"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `text-center ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyP)}`,
                                        children: "Dialmenow enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
                                        className: "mt-3 px-lg-5 mx-lg-5 px-md-0 mx-md-0 px-sm-0 mx-sm-0 px-xs-0 mx-xs-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                                md: 4,
                                                sm: 6,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `h-100 d-flex align-items-center ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyBox)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: ` ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyIcon)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                src: "/images/partner-withus/PartnerWhyIconOne.svg",
                                                                width: 46,
                                                                height: 46,
                                                                alt: "#"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: ` ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyText)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "mb-0",
                                                                    children: "1000+ cities"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0",
                                                                    children: "in India"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                                md: 4,
                                                sm: 6,
                                                className: "mt-sm-0 mt-md-0 mt-3",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `h-100 d-flex align-items-center ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyBox)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: ` ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyIcon)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                src: "/images/partner-withus/PartnerWhyIconTwo.svg",
                                                                width: 57,
                                                                height: 56,
                                                                alt: "#"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: ` ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyText)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "mb-0",
                                                                    children: "3 lakh+"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0",
                                                                    children: " partner with us"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                                md: 4,
                                                sm: 12,
                                                className: "mt-sm-3 mt-md-0 mt-3",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `h-100 d-flex align-items-center ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyBox)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: ` ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyIcon)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                src: "/images/partner-withus/PartnerWhyIconThree.svg",
                                                                width: 41,
                                                                height: 46,
                                                                alt: "#"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: ` ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().PartnerWhyText)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "mb-0",
                                                                    children: "5k+"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0",
                                                                    children: "monthly listings"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: "full pt-40 pb-20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-center mb-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Let Us Explain"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lightgallery_react__WEBPACK_IMPORTED_MODULE_15___default()), {
                                            plugins: [
                                                (lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_16___default())
                                            ],
                                            zoomFromOrigin: false,
                                            licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                                            youTubePlayerParams: {
                                                modestbranding: 1,
                                                showinfo: 0
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GalleryItem__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                href: "https://www.youtube.com/watch?v=btPupBqF2W4",
                                                video: true,
                                                thumb: [
                                                    "/images/partner-withus/th06.jpg",
                                                    855,
                                                    477
                                                ],
                                                className: "rounded m-auto p-0",
                                                style: {
                                                    maxWidth: "855px"
                                                },
                                                caption: "Dialmenow",
                                                "data-sub-html": `<h6 class='fs-sm text-light'>Dialmenow</h6>`
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                                md: 12,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `d-flex align-items-center justify-content-between mt-sm-4 mt-md-5 mt-4 ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_19___default().GrowBusiness)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "m-0",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Become a Dialmenow partner today "
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            className: "fw-normal",
                                                            variant: "primary",
                                                            onClick: scrollPageWrite,
                                                            children: "Get Started"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services__WEBPACK_IMPORTED_MODULE_17__["default"], {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AboutUsSection__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartnerWithUsIndex);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2556:
/***/ ((module) => {

module.exports = require("lightgallery/plugins/video");

/***/ }),

/***/ 2697:
/***/ ((module) => {

module.exports = require("lightgallery/react");

/***/ }),

/***/ 3182:
/***/ ((module) => {

module.exports = require("localforage");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 8797:
/***/ ((module) => {

module.exports = require("next-share");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2899:
/***/ ((module) => {

module.exports = require("react-bootstrap/Alert");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 9044:
/***/ ((module) => {

module.exports = require("react-bootstrap/CloseButton");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 3889:
/***/ ((module) => {

module.exports = require("react-bootstrap/Fade");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 2563:
/***/ ((module) => {

module.exports = require("react-bootstrap/InputGroup");

/***/ }),

/***/ 4692:
/***/ ((module) => {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 6865:
/***/ ((module) => {

module.exports = require("react-bootstrap/Offcanvas");

/***/ }),

/***/ 4165:
/***/ ((module) => {

module.exports = require("react-bootstrap/OverlayTrigger");

/***/ }),

/***/ 9736:
/***/ ((module) => {

module.exports = require("react-bootstrap/Popover");

/***/ }),

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 3742:
/***/ ((module) => {

module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ 9025:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tab");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 6804:
/***/ ((module) => {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ 5623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 9777:
/***/ ((module) => {

module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 3512:
/***/ ((module) => {

module.exports = import("firebase/messaging");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,9340,8184,329,4440,4301,3340], () => (__webpack_exec__(2807)));
module.exports = __webpack_exports__;

})();