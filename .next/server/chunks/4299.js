"use strict";
exports.id = 4299;
exports.ids = [4299];
exports.modules = {

/***/ 4299:
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PublicationsCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5747);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Publications = ({ SwiperSlidePagination ="" , ourPublicationsItems ="" , ourPublicationsoverlyCls ="" , PublicationsBoxCls ="" , PublicationsCardCls ="" , ContentOverlayCls ="" , PublicationsHoverTextCls =""  })=>{
    const { 0: publicationsItems , 1: setpublicationsItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ourPublicationsItems);
    /*useEffect(async () => {
    if (ourPublicationsItems?.length > 0) {
      for (let i = 0; i < ourPublicationsItems.length; i++) {
        ourPublicationsItems[i].front_cover_image = await S3img(ourPublicationsItems[i].front_cover_image,'uploads/publication/')
        ourPublicationsItems[i].back_cover_image = await S3img(ourPublicationsItems[i].back_cover_image,'uploads/publication/')
      }
      setpublicationsItems(ourPublicationsItems)
    }
  }, [])*/ return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "position-relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                            swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination
                        ],
                        slidesPerView: 1,
                        navigation: {
                            prevEl: "#Publicationsprev4",
                            nextEl: "#Publicationsnext4"
                        },
                        pagination: {
                            el: "#Publicationspagination",
                            clickable: true,
                            dynamicBullets: true
                        },
                        grabCursor: true,
                        breakpoints: {
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            },
                            1100: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        },
                        children: (publicationsItems === null || publicationsItems === void 0 ? void 0 : publicationsItems.length) > 0 && publicationsItems.map((publication, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                className: "pb-2 vikram-" + index,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PublicationsCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    dataItem: publication,
                                    ourPublicationsoverlyCls: ourPublicationsoverlyCls,
                                    PublicationsBoxCls: PublicationsBoxCls,
                                    PublicationsCardCls: PublicationsCardCls,
                                    ContentOverlayCls: ContentOverlayCls,
                                    PublicationsHoverTextCls: PublicationsHoverTextCls
                                })
                            }, index)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                        id: "Publicationsprev4",
                        variant: "prev",
                        "aria-label": "Previous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                        id: "Publicationsnext4",
                        variant: "next",
                        "aria-label": "Next"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "Publicationspagination",
                className: `position-relative bottom-0 pt-0  mb-lg-0  mt-lg-0 mt-md-4 mt-sm-3 mt-3 ${SwiperSlidePagination}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Publications);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PublicationsCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/ImageLoader.js
var ImageLoader = __webpack_require__(5698);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap/Card"
var Card_ = __webpack_require__(6810);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/PublicationsHoverOverlay.js



const PublicationsHoverOverlay = ({ img , children , light , ourPublicationsoverlyCls ="" , ContentOverlayCls ="" , className , ...props })=>{
    const { 0: hoverEffect , 1: setHoverEffect  } = (0,external_react_.useState)({
        top: "100%",
        opcity: "0"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: img && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            ...props,
            className: `card-img-hover flex-column flex-sm-row d-flex${className ? ` ${className}` : ""}`,
            onMouseOver: ()=>setHoverEffect({
                    top: "0%",
                    opcity: "1"
                })
            ,
            onMouseOut: ()=>setHoverEffect({
                    top: "100%",
                    opcity: "0"
                })
            ,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: ` ${ourPublicationsoverlyCls}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ImageLoader/* default */.Z, {
                    src: img.src,
                    width: img.size[0],
                    height: img.size[1],
                    alt: img.alt,
                    light: light ? 1 : 0,
                    loading: "eager"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `start-0  d-flex  justify-content-center w-100 h-100 ${ContentOverlayCls}`,
                    style: hoverEffect,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-100",
                        children: children
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_PublicationsHoverOverlay = (PublicationsHoverOverlay);

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./components/PublicationsCard.js






const PublicationsCard = ({ dataItem ="" , ourPublicationsoverlyCls ="" , PublicationsBoxCls ="" , PublicationsCardCls ="" , ContentOverlayCls ="" ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `mt-4 ${PublicationsBoxCls}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: dataItem.redirect_link,
                passHref: true,
                prefetch: false,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                    className: `${PublicationsCardCls}`,
                    style: {
                        maxWidth: "306px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_PublicationsHoverOverlay, {
                        img: {
                            src: dataItem.front_cover_image,
                            size: [
                                273,
                                361
                            ],
                            alt: "publications-img"
                        },
                        ourPublicationsoverlyCls: ourPublicationsoverlyCls,
                        ContentOverlayCls: ContentOverlayCls,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-2 text-center publications-hover-text",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ImageLoader/* default */.Z, {
                                    src: dataItem.back_cover_image,
                                    height: "100",
                                    width: "225",
                                    alt: dataItem.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: dataItem.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    size: "sm",
                                    children: "Read More"
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_PublicationsCard = (PublicationsCard);


/***/ })

};
;