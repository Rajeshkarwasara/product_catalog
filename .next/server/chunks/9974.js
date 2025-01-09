"use strict";
exports.id = 9974;
exports.ids = [9974];
exports.modules = {

/***/ 9974:
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
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);




const CardImage = ({ horizontal , coverImage =false , images , href , badges , wishlistButton ="" , light , title , fromListingPage =false ,  })=>{
    console.log("images---images", images, title);
    const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({
        query: "(max-width:  767.98px)"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${fromListingPage && !isDesktop ? "" : "card-img-top"} card-img-hover d-flex`,
        style: {
            width: fromListingPage && !isDesktop ? "200px" : "100%",
            height: "200px",
            position: "relative",
            minWidth: "200px"
        },
        children: [
            fromListingPage && !isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                src: images[0][0],
                alt: title + " Logo ",
                width: "200",
                height: "100%",
                objectFit: images[0][2] ? images[0][2] : "cover",
                quality: 100,
                light: light ? 1 : 0
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: horizontal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    src: images[0][0],
                    alt: title + " Logo ",
                    layout: "fill",
                    objectFit: images[0][2] ? images[0][2] : " coverImage",
                    quality: 100,
                    light: light ? 1 : 0
                }) : coverImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    src: images[0][0],
                    alt: title + " Logo ",
                    // width={"100%"}
                    // height={"100%"}
                    className: "mx-auto",
                    layout: "fill",
                    //objectFit={images[0][2] ? images[0][2] : 'cover'}
                    objectFit: "contain",
                    quality: 100,
                    light: light ? 1 : 0
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    src: images[0][0],
                    width: images[0][1],
                    height: images[0][2],
                    alt: title + " Logo ",
                    light: light ? 1 : 0
                })
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
                className: "position-absolute start-0 top-0 pt-3 ps-4",
                children: badges.map((badge, indx)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: `d-table badge bg-${badge[0]} mb-1`,
                        children: [
                            badge[1] == "Verified" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fi-security me-1"
                            }),
                            badge[1]
                        ]
                    }, indx);
                })
            }),
            wishlistButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${wishlistButton.active ? "position-absolute zindex-5" : "content-overlay"} end-0 top-0 pt-3 pe-3`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImage);


/***/ })

};
;