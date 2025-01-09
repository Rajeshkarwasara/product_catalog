"use strict";
exports.id = 6463;
exports.ids = [6463];
exports.modules = {

/***/ 6463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const StarRating = (props)=>{
    const ratingProp = parseFloat(props.rating), rating = (Math.round(ratingProp * 2) / 2).toFixed(1), size = props.size ? ` star-rating-${props.size}` : "", light = props.light ? " text-light" : "", extraClass = props.className ? ` ${props.className}` : "", style = props.style;
    let stars;
    switch(rating){
        case "1.0":
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "5")
            ];
            break;
        case "1.5":
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-half active"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "5")
            ];
            break;
        case "2.0":
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "5")
            ];
            break;
        case "2.5":
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-half active"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "5"), 
            ];
            break;
        case "3.0":
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "5")
            ];
            break;
        case "3.5":
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-half active"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "5")
            ];
            break;
        case "4.0":
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "5")
            ];
            break;
        case "4.5":
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-half active"
                }, "5")
            ];
            break;
        case "5.0":
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "5")
            ];
            break;
        default:
            stars = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "2"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "3"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "4"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "star-rating-icon fi-star"
                }, "5")
            ];
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: `star-rating${size}${light}${extraClass}`,
        style: style,
        children: stars
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);


/***/ })

};
;