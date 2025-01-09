"use strict";
exports.id = 1634;
exports.ids = [1634];
exports.modules = {

/***/ 1634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4__);





const CardImage = ({ horizontal , images , coverImage =false , href , badges , wishlistButton , light ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card-img-top text-center card-img-hover d-flex FeaturedTopImg",
        style: {
            width: "100%",
            height: "200px",
            position: "relative"
        },
        children: [
            horizontal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                src: images[0][0],
                alt: images[0][3] + " Logo",
                layout: "fill",
                objectFit: "cover",
                quality: 100,
                light: light ? 1 : 0,
                loading: "eager"
            }) : coverImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                src: images[0][0],
                alt: images[0][3] + " Logo",
                // width={"100%"}
                // height={"100%"}
                className: "mx-auto",
                layout: "fill",
                //objectFit={images[0][2] ? images[0][2] : 'cover'}
                objectFit: "contain",
                loading: "eager",
                quality: 100,
                light: light ? 1 : 0
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                src: images[0][0],
                width: images[0][1],
                height: images[0][2],
                alt: images[0][3] + " Logo",
                light: light ? 1 : 0,
                loading: "eager"
            }),
            href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: href,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "img-overlay"
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "img-overlay"
            }),
            badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "position-absolute end-0 bottom-0 pb-3 ps-3",
                children: badges.map((badge, indx)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: `d-table badge bg-${badge[0]} mb-1`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fi-security me-1"
                            }),
                            badge[1]
                        ]
                    }, indx);
                })
            }),
            wishlistButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${wishlistButton.active ? "position-absolute zindex-5" : "content-overlay"} end-0 top-0 pt-3 pe-3`,
                children: wishlistButton.tooltip ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3___default()), {
                    placement: "left",
                    overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImage);


/***/ })

};
;