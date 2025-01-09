"use strict";
exports.id = 8184;
exports.ids = [8184];
exports.modules = {

/***/ 8184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





//import Head from 'next/head'
const SeoHead = ({ title , description ="" , description2 ="" , keyword ="" , url ="" , city ="" , area ="" , companyName ="" , categoryName ="" , SEOIndexing =false , isFullUrl =false ,  })=>{
    // console.log('title => ',title);
    // console.log('description => ',description);
    // console.log('description2 => ',description2);
    // console.log('keyword => ',keyword);
    // console.log('url => ',url);
    // console.log('city => ',city);
    // console.log('area => ',area);
    // console.log('companyName => ',companyName);
    // console.log('categoryName => ',categoryName);
    let metaDescription = description2;
    let dataKeywords = keyword;
    let cityName = city;
    let companyNameTitle = companyName;
    if (!companyName) {
        companyNameTitle = "DialMeNow";
    }
    if (!city) {
        if (false) {}
    }
    // description2
    if (categoryName) {
        title = `Best ${categoryName} in ${cityName} | Top/Popular ${categoryName} in ${cityName} | DialMeNow`;
        dataKeywords = `${categoryName} in ${cityName}, Best ${categoryName} in ${cityName}, Top ${categoryName} in ${cityName}, List of ${categoryName} in ${cityName}, Popular ${categoryName} in ${cityName}, Top Rated ${categoryName} in ${cityName}`;
        metaDescription = `Find out the best ${categoryName} in ${cityName} at Dialmenow.in. Get reviews, rating, address and phone number for ${categoryName} in ${cityName}. Dial me now is the best place to search for top & popular ${categoryName} in ${cityName} and near by.`;
    }
    if (area) {
        title = `${companyNameTitle} | ${cityName} | ${area} | DialMeNow`;
        dataKeywords = `${companyNameTitle} in ${area} ${cityName}, ${companyNameTitle}, ${companyNameTitle} in ${cityName}, ${companyNameTitle} in ${area}`;
        metaDescription = `Find all the business details of ${companyNameTitle} in ${area}, ${cityName}. Get reviews, rating, address and phone number for ${companyNameTitle} in ${cityName} at Dialmenow.in${description2 ? ". " + description2 : ""}`;
    }
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const currentUrl = router.asPath;
    if (currentUrl === "/") {
        title = "Dialmenow | The Ultimate Local Business Directory | Most Trusted Source for Local Business Information Near You";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
                title: title,
                description: metaDescription ? metaDescription.replaceAll("@city", city) : "",
                canonical: isFullUrl ? url : process.env.BASE_URL + url,
                keywords: dataKeywords,
                noindex: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "keywords",
                    content: dataKeywords
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeoHead);


/***/ })

};
;