"use strict";
(() => {
var exports = {};
exports.id = 3822;
exports.ids = [3822];
exports.modules = {

/***/ 5591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1636);
/* harmony import */ var _components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8184);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5698);
/* harmony import */ var _styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3463);
/* harmony import */ var _styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_OurTestimonial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8556);
/* harmony import */ var _front_methods_HomeFunction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8825);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(329);
/* harmony import */ var _components_Publications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4299);
/* harmony import */ var _components_InstaGramPost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(924);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(127);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_MediaFeed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9864);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_OurTestimonial__WEBPACK_IMPORTED_MODULE_7__, _components_Services__WEBPACK_IMPORTED_MODULE_8__, _components_Publications__WEBPACK_IMPORTED_MODULE_9__, _components_InstaGramPost__WEBPACK_IMPORTED_MODULE_10__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_OurTestimonial__WEBPACK_IMPORTED_MODULE_7__, _components_Services__WEBPACK_IMPORTED_MODULE_8__, _components_Publications__WEBPACK_IMPORTED_MODULE_9__, _components_InstaGramPost__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const DynamicPages = ({ pageContent , ourPublications , ...props })=>{
    const { 0: getTestimonialList , 1: setTestimonialList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.testimonials);
    const Pathquery = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const PageUrl = Pathquery.asPath;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: pageContent.title,
                description: pageContent.meta_description || "",
                keyword: pageContent.meta_keyword || "",
                url: PageUrl,
                city: "",
                area: "",
                companyName: "",
                SEOIndexing: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: pageContent.title,
                activeNav: "Pages",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: `full position-relative ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancPagesBgImgHero)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancPagesBgImg)}`,
                                style: {
                                    width: "100%",
                                    height: "393px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    src: "/images/DymancImg/dymancPagesBgImg.jpg",
                                    // width={1600}
                                    // height={460}
                                    alt: "Square image",
                                    // resizeMode='cover'
                                    loading: "eager",
                                    layout: "fill",
                                    objectFit: "cover"
                                })
                            }),
                            pageContent.page_slug != "rajasthan-business-directory" && pageContent.page_slug != "rajasthan-industries-directory" && pageContent.page_slug != "rajasthan-exporters-directory" && pageContent.page_slug != "jaipur-city-map" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroText)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroTextInner)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "mb-2",
                                                children: pageContent.title
                                            }),
                                            pageContent.page_slug == "aboutus" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mb-0",
                                                children: "Dial Me Now Online Pvt. Ltd., Jaipur is an established online & offline (telephonic & print) information provider in Rajasthan. We are Rajasthan\u2019s first own local search engine."
                                            }) : null
                                        ]
                                    })
                                })
                            }),
                            pageContent.page_slug == "rajasthan-business-directory" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().PublicationsLogo)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `overflow-hidden ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().BusinessDetailsHeroLefts)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            src: "/images/DymancImg/RBD-Logo.png",
                                            width: 203,
                                            height: 69,
                                            alt: "Square image"
                                        })
                                    })
                                })
                            }),
                            pageContent.page_slug == "rajasthan-exporters-directory" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().PublicationsLogo)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `overflow-hidden ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().BusinessDetailsHeroLefts)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            src: "/images/DymancImg/RED_logo.png",
                                            width: 207,
                                            height: 53,
                                            alt: "Square image"
                                        })
                                    })
                                })
                            }),
                            pageContent.page_slug == "rajasthan-industries-directory" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().PublicationsLogo)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `overflow-hidden ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().BusinessDetailsHeroLefts)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            src: "/images/DymancImg/rid_logo.png",
                                            width: 207,
                                            height: 76,
                                            alt: "Square image"
                                        })
                                    })
                                })
                            }),
                            pageContent.page_slug == "jaipur-city-map" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().PublicationsLogo)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `overflow-hidden ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().BusinessDetailsHeroLefts)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            src: "/images/DymancImg/JCM_logo.png",
                                            width: 301,
                                            height: 53,
                                            alt: "Square image"
                                        })
                                    })
                                })
                            }),
                            pageContent.page_slug == "rajasthan-business-directory" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroText)}  ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().publicationsHeroText)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroTextInner)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "mb-2",
                                                children: pageContent.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                href: "https://dialmenow.myinstamojo.com/product/2585719/rajasthan-business-directory",
                                                passHref: true,
                                                prefetch: false,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    className: "btn-sm",
                                                    variant: "primary",
                                                    children: "Buy Now"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            pageContent.page_slug == "rajasthan-industries-directory" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroText)} ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().publicationsHeroText)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroTextInner)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "mb-2",
                                                children: pageContent.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                href: "https://dialmenow.myinstamojo.com/product/2585720/rajasthan-industries-directory-2023-89854",
                                                passHref: true,
                                                prefetch: false,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    className: "btn-sm",
                                                    variant: "primary",
                                                    children: "Buy Now"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            pageContent.page_slug == "rajasthan-exporters-directory" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroText)} ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().publicationsHeroText)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroTextInner)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "mb-2",
                                                children: pageContent.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                href: "https://dialmenow.myinstamojo.com/product/3047212/rajasthan-exporters-directory",
                                                passHref: true,
                                                prefetch: false,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    className: "btn-sm",
                                                    variant: "primary",
                                                    children: "Buy Now"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            pageContent.page_slug == "jaipur-city-map" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroText)} ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().publicationsHeroText)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: ` ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancTopHeroTextInner)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "mb-2",
                                                children: pageContent.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                className: "btn-sm",
                                                variant: "primary",
                                                children: "Buy Now"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `full ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_14___default().dymancPageMain)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    as: "section",
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: pageContent.description
                                        }
                                    })
                                })
                            }),
                            pageContent.page_slug == "aboutus" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaFeed__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
                            pageContent.page_slug == "aboutus" || pageContent.page_slug == "rajasthan-business-directory" || pageContent.page_slug == "rajasthan-industries-directory" || pageContent.page_slug == "jaipur-city-map" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OurTestimonial__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        SwiperSlidePaddingCls: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_15___default().SwiperPadding)
                                    }),
                                    (ourPublications === null || ourPublications === void 0 ? void 0 : ourPublications.length) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: `pt-50 pb-30 full  ${(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_15___default().publications)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "container",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-md-6",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                                    className: "text-start",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Our"
                                                                        }),
                                                                        " Publications"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-md-6",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Publications__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                        ourPublicationsItems: ourPublications,
                                                        ourPublicationsoverlyCls: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_15___default().publicationsoverly),
                                                        PublicationsBoxCls: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_15___default().PublicationsBox),
                                                        PublicationsCardCls: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_15___default().PublicationsCard),
                                                        ContentOverlayCls: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_15___default().ContentOverlay),
                                                        PublicationsHoverTextCls: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_15___default().PublicationsHoverTextCls)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_15___default().PublicationsBgImg),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    src: "/images/home/publications-bg-img.jpg",
                                                    height: "338",
                                                    width: "1600"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InstaGramPost__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                ]
                            }) : null
                        ]
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(ct) {
    const { dynamic_pages  } = ct.query;
    let srRes = await fetch(`${process.env.BASE_URL}/api/protect/dynamic-pages-content`, {
        method: "POST",
        body: JSON.stringify({
            "dynamic_pages": dynamic_pages
        })
    });
    let srJson = await srRes.json();
    let ourPublications = await (0,_front_methods_HomeFunction__WEBPACK_IMPORTED_MODULE_16__/* .OurPulications */ .P)(); //for get publications listing 
    if (srJson.status == 200) {
        return {
            props: {
                pageContent: srJson.data.pages[0],
                ourPublications: ourPublications || []
            }
        };
    } else {
        return {
            redirect: {
                permanent: false,
                destination: `/404`
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicPages);

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

/***/ 6810:
/***/ ((module) => {

module.exports = require("react-bootstrap/Card");

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

/***/ 4013:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tooltip");

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
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,9340,8184,329,8556,8825,6492,127,4299,9864,8006], () => (__webpack_exec__(5591)));
module.exports = __webpack_exports__;

})();