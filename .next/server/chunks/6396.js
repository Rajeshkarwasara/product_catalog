"use strict";
exports.id = 6396;
exports.ids = [6396];
exports.modules = {

/***/ 6396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SocialButton = ({ brand , variant , size , roundedCircle , light , className , href , ...props })=>{
    const brandProp = brand ? brand.toLowerCase() : "", variantProp = variant ? variant.toLowerCase() : "", roundedCircleClass = roundedCircle ? " rounded-circle" : "", basicLight = light ? " btn-light" : "", solidLight = light ? " btn-translucent-light" : " btn-light-primary", translucentLight = light ? " btn-translucent-light" : " btn-translucent-primary", borderLight = light ? " btn-outline-light border-light" : " btn-light border", extraClass = className ? ` ${className}` : "";
    // Button size CSS classes
    let btnSize;
    switch(size){
        case "sm":
            btnSize = " btn-xxs";
            break;
        case "lg":
            btnSize = " btn-sm";
            break;
        case "xl":
            btnSize = "";
            break;
        default:
            btnSize = " btn-sm";
    }
    // Icon size CSS classes (for basic variant)
    let iconSize;
    switch(size){
        case "sm":
            iconSize = "";
            break;
        case "lg":
            iconSize = " fs-4";
            break;
        case "xl":
            iconSize = " fs-3";
            break;
        default:
            iconSize = " fs-lg";
    }
    // CSS classes that depend on prop.variant, prop.size, prop.light, prop.className
    let socialButtonClass;
    switch(variantProp){
        case "solid":
            socialButtonClass = "btn btn-icon shadow-sm" + btnSize + +solidLight + extraClass;
            break;
        case "translucent":
            socialButtonClass = "btn btn-icon" + btnSize + roundedCircleClass + translucentLight + extraClass;
            break;
        case "border":
            socialButtonClass = "btn btn-icon" + btnSize + roundedCircleClass + borderLight + extraClass;
            break;
        default:
            socialButtonClass = "btn btn-link py-1 px-2" + iconSize + basicLight + extraClass;
    }
    // Render markup
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        ...props,
        href: href,
        className: socialButtonClass,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: `fi-${brandProp}`
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialButton);


/***/ })

};
;