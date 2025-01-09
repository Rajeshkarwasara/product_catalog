exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 1454:
/***/ ((module) => {

// Exports
module.exports = {
	"ServicesCard": "OurServices_ServicesCard__06Ms8",
	"SwiperSlideCard": "OurServices_SwiperSlideCard__nYwy6",
	"SwiperSlidePagination": "OurServices_SwiperSlidePagination__cLBoe",
	"popularServices": "OurServices_popularServices__kuX_G",
	"SwiperPadding": "OurServices_SwiperPadding__D9_S6",
	"serviceTittle": "OurServices_serviceTittle__AM8Cc",
	"TradingIcon": "OurServices_TradingIcon__wSgTt"
};


/***/ }),

/***/ 329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _components_IconBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9340);
/* harmony import */ var _styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1454);
/* harmony import */ var _styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__, _components_IconBox__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__, _components_IconBox__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Services = ({ SwiperPadding =""  })=>{
    const { 0: popularServicesItems , 1: setPopularServicesItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (popularServicesItems.length <= 0) {
            let allServies = await services1();
            setPopularServicesItems(allServies);
        }
    }, []);
    const services1 = async ()=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    "token": ""
                })
            };
            var APIpath = `${process.env.BASE_URL}/api/protect/popular-services`;
            const res = await fetch(APIpath, requestOptions);
            const resJson = await res.json();
            if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
                return resJson === null || resJson === void 0 ? void 0 : resJson.data;
            } else {
                return [];
            }
        } catch (err) {
            return [];
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: `full ptb-20 ${(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().popularServices)}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Our"
                            }),
                            " Services"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `mt-3 mt-sm-1 ${(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().popularServicesMain)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row m-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "position-relative p-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                            className: `${(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().SwiperPadding)}`,
                                            modules: [
                                                swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                                                swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination
                                            ],
                                            slidesPerView: 1,
                                            navigation: {
                                                prevEl: "#servicesprev5",
                                                nextEl: "#servicesnext5"
                                            },
                                            pagination: {
                                                el: "#services-pagination",
                                                clickable: true,
                                                dynamicBullets: true
                                            },
                                            grabCursor: true,
                                            breakpoints: {
                                                0: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 15
                                                },
                                                500: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 10
                                                },
                                                768: {
                                                    slidesPerView: 5,
                                                    spaceBetween: 20
                                                },
                                                1100: {
                                                    slidesPerView: 6,
                                                    spaceBetween: 30
                                                }
                                            },
                                            children: (popularServicesItems === null || popularServicesItems === void 0 ? void 0 : popularServicesItems.length) > 0 && popularServicesItems.map((services, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                    className: `d-flex ${(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().SwiperSlideCard)}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_IconBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        href: services.redirect_link,
                                                        media: "image",
                                                        mediaShape: "circle",
                                                        type: "card-shadow",
                                                        imageSrc: services.icon,
                                                        title: services.name,
                                                        align: "center",
                                                        className: `mb-0   ${(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().ServicesCard)}`,
                                                        mediaClassName: (_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().serviceBorder),
                                                        titleSize: "",
                                                        tittleExtraCls: (_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().serviceTittle),
                                                        removeBgCls: true,
                                                        TradingIconCls: (_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().TradingIcon)
                                                    })
                                                }, index)
                                            )
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            id: "servicesprev5",
                                            variant: "prev",
                                            "arial-label": "Previous"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            id: "servicesnext5",
                                            variant: "next",
                                            "arial-label": "Next"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "services-pagination",
                                    className: `position-relative bottom-0 pt-0 mt-0 mb-lg-0 ${(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().SwiperSlidePagination)}`
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;