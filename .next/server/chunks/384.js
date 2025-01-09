"use strict";
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5698);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_6__, swiper_react__WEBPACK_IMPORTED_MODULE_7__]);
([swiper__WEBPACK_IMPORTED_MODULE_6__, swiper_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CardImageSlider = ({ horizontal , images , href , badges , wishlistButton ="" , light ,  })=>{
    console.log("Card-show-image", images, horizontal);
    console.log("Test-For-silder-console");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation
        ],
        navigation: true,
        loop: true,
        className: "card-img-top card-img-hover",
        children: [
            images.map((image, indx)=>{
                console.log("image????", image);
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                    className: "d-flex",
                    children: horizontal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        src: image[0],
                        alt: image[3] + " Logo",
                        layout: "fill",
                        objectFit: "cover",
                        quality: 100,
                        light: light ? 1 : 0
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        src: image[0],
                        width: image[1],
                        height: image[2],
                        alt: image[3] + " Logo",
                        light: light ? 1 : 0
                    })
                }, indx);
            }),
            href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: href,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "img-overlay"
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "img-overlay"
            }),
            badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "position-absolute start-0 top-0 pt-3 ps-3",
                children: badges.map((badge, indx)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `d-table badge bg-${badge[0]} mb-1`,
                        children: badge[1]
                    }, indx);
                })
            }),
            wishlistButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${wishlistButton.active ? "position-absolute zindex-5" : "content-overlay"} end-0 top-0 pt-3 pe-3`,
                children: wishlistButton.tooltip ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default()), {
                    placement: "left",
                    overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: wishlistButton.tooltip
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        ...wishlistButton.props,
                        type: "button",
                        className: "btn btn-icon btn-light btn-xs text-primary rounded-circle",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: wishlistButton.active ? "fi-heart-filled" : "fi-heart"
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    ...wishlistButton.props,
                    type: "button",
                    className: "btn btn-icon btn-light btn-xs text-primary rounded-circle",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: wishlistButton.active ? "fi-heart-filled" : "fi-heart"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImageSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;