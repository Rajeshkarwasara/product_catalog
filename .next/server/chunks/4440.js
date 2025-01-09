exports.id = 4440;
exports.ids = [4440];
exports.modules = {

/***/ 9203:
/***/ ((module) => {

// Exports
module.exports = {
	"AboutDialMeNow": "AboutUsSection_AboutDialMeNow__gCITN"
};


/***/ }),

/***/ 4440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);
/* harmony import */ var _styles_AboutUsSection_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9203);
/* harmony import */ var _styles_AboutUsSection_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_AboutUsSection_module_css__WEBPACK_IMPORTED_MODULE_3__);




const AboutUsSection = ()=>{
    const { 0: aboutDialmenow , 1: setAboutDialmenow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const aboutUsContent = async ()=>{
        // Fetch data from external API
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "token": ""
            })
        };
        let getCompanySettings = await fetch(`${process.env.BASE_URL}/api/protect/company-settings`, requestOptions);
        getCompanySettings = await getCompanySettings.json();
        if ((getCompanySettings === null || getCompanySettings === void 0 ? void 0 : getCompanySettings.status) == 200) {
            return getCompanySettings === null || getCompanySettings === void 0 ? void 0 : getCompanySettings.data;
        } else {
            return [];
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let getAboutUsContent = aboutUsContent();
        setAllrecords(getAboutUsContent);
    }, []);
    const setAllrecords = (allData)=>{
        let promise = new Promise((resolve)=>{
            resolve(allData);
        });
        promise.then((result)=>{
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                setAboutDialmenow(result);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: (aboutDialmenow === null || aboutDialmenow === void 0 ? void 0 : aboutDialmenow.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: ` full pb-4 pt-4 ${(_styles_AboutUsSection_module_css__WEBPACK_IMPORTED_MODULE_3___default().AboutDialMeNow)}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        src: "/images/home/AboutDialMeNowsign.png",
                        height: "44",
                        width: "77",
                        alt: "About Us Dialmenow"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "text-start mt-n2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "About"
                            }),
                            " DialMeNow"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: aboutDialmenow[0].description || ""
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUsSection);


/***/ })

};
;