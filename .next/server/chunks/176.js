exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 5931:
/***/ ((module) => {

// Exports
module.exports = {
	"starRating": "RatingForm_starRating__ZOoxd",
	"on": "RatingForm_on__pBX2_",
	"off": "RatingForm_off__XVwT6"
};


/***/ }),

/***/ 176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_RatingForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5931);
/* harmony import */ var _styles_RatingForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_RatingForm_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const StarRating = ({ rating , setRating  })=>{
    const { 0: hover , 1: setHover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_RatingForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().starRating),
        children: [
            ...Array(5)
        ].map((star, index)=>{
            index += 1;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: index <= (hover || rating) ? (_styles_RatingForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().on) : (_styles_RatingForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().off),
                onClick: ()=>setRating(index)
                ,
                onMouseEnter: ()=>setHover(index)
                ,
                onMouseLeave: ()=>setHover(rating)
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "star",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fi-star-filled"
                    })
                })
            }, index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);


/***/ })

};
;