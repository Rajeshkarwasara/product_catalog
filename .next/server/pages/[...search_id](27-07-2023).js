"use strict";
(() => {
var exports = {};
exports.id = 9844;
exports.ids = [9844];
exports.modules = {

/***/ 2845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var _components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8184);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8176);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1636);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_4__]);
_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const BusinessDetails = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(6396), __webpack_require__.e(9500), __webpack_require__.e(1833), __webpack_require__.e(1947), __webpack_require__.e(176), __webpack_require__.e(4745)]).then(__webpack_require__.bind(__webpack_require__, 4745))
, {
    loadableGenerated: {
        modules: [
            "[...search_id](27-07-2023).js -> " + "../components/searching/BusinessDetails"
        ]
    },
    ssr: true
});
const BusinessListings = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(9749), __webpack_require__.e(1947), __webpack_require__.e(1351)]).then(__webpack_require__.bind(__webpack_require__, 1351))
, {
    loadableGenerated: {
        modules: [
            "[...search_id](27-07-2023).js -> " + "../components/searching/BusinessListings"
        ]
    },
    ssr: true
});
const CategoryLisitng = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(261), __webpack_require__.e(7936), __webpack_require__.e(7840), __webpack_require__.e(4178), __webpack_require__.e(554), __webpack_require__.e(3930), __webpack_require__.e(7229), __webpack_require__.e(9340), __webpack_require__.e(329), __webpack_require__.e(4440), __webpack_require__.e(9749), __webpack_require__.e(9500), __webpack_require__.e(3912)]).then(__webpack_require__.bind(__webpack_require__, 3912))
, {
    loadableGenerated: {
        modules: [
            "[...search_id](27-07-2023).js -> " + "../components/searching/CategoryLisitng"
        ]
    },
    ssr: true
});
const NoSearchFound = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "[...search_id](27-07-2023).js -> " + "../components/searching/NoSearchFound"
        ]
    },
    ssr: false
});
const EditListing = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "[...search_id](27-07-2023).js -> " + "../components/searching/BusinessEditListing"
        ]
    },
    ssr: false
});
const SearchHeader = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "[...search_id](27-07-2023).js -> " + "../components/searching/head/SearchDiv"
        ]
    },
    ssr: false
});

const SearchingDetails = ({ pageContent , page , cityID , cityName , citiesData , defaultCityRecords , defaultImage =""  })=>{
    var ref, ref1, ref2, ref3;
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    console.log("QUERY IS --------- ", pageContent);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)() //use login session   
    ;
    const { 0: userData , 1: setUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: currentCity , 1: setCurrentCity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        city_id: cityID,
        city_name: cityName
    });
    //get path     
    const PageUrl = query.asPath;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (session && session !== undefined) {
            setUserData(session);
        } else {
            setUserData(null);
        }
    }, [
        session
    ]);
    // Add class to body to enable gray background
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    const changeCity = (city)=>{
        setCurrentCity({
            city_id: city === null || city === void 0 ? void 0 : city.id,
            city_name: city === null || city === void 0 ? void 0 : city.label
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            page == "category" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: pageContent[0].meta_title,
                description: pageContent[0].meta_description,
                keyword: pageContent[0].meta_keywords,
                url: process.env.BASE_URL + "/categories/" + pageContent[0].slug,
                city: cityName,
                area: "",
                SEOIndexing: true,
                isFullUrl: true
            }),
            page == "details" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: pageContent[0].name + " | " + pageContent[0].city_name + " | " + pageContent[0].area_name,
                area: pageContent[0].area_name,
                city: pageContent[0].city_name,
                companyName: pageContent[0].name,
                description: ((ref = pageContent[0]) === null || ref === void 0 ? void 0 : ref.company_description) || pageContent[0].business_more_info,
                description2: pageContent[0].business_more_info,
                keyword: pageContent[0].keywords_name,
                url: pageContent[0].url,
                isFullUrl: true,
                SEOIndexing: true
            }),
            page == "listing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: pageContent === null || pageContent === void 0 ? void 0 : (ref1 = pageContent.category_details) === null || ref1 === void 0 ? void 0 : ref1.meta_title,
                area: pageContent === null || pageContent === void 0 ? void 0 : pageContent.area_name,
                city: pageContent === null || pageContent === void 0 ? void 0 : pageContent.city_name,
                companyName: "",
                description: pageContent === null || pageContent === void 0 ? void 0 : (ref2 = pageContent.category_details) === null || ref2 === void 0 ? void 0 : ref2.meta_description,
                keyword: pageContent === null || pageContent === void 0 ? void 0 : (ref3 = pageContent.category_details) === null || ref3 === void 0 ? void 0 : ref3.meta_keywords,
                url: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_7__/* .createSubCategoryURL */ .Ir)(pageContent.category_name, pageContent.city_name),
                isFullUrl: true,
                SEOIndexing: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                pageTitle: "Searching",
                activeNav: "Pages",
                children: [
                    page != "edit" && page != "details" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchHeader, {
                        cityData: citiesData,
                        defaultCity: defaultCityRecords,
                        bgShow: "2",
                        changeCity: changeCity,
                        noSearchPage: page == "no_record" ? true : false,
                        defaultImage: defaultImage || "/images/noSearch/NosearchingBgImg.jpg"
                    }),
                    page == "details" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BusinessDetails, {
                        currentSession: userData,
                        pageContent: pageContent,
                        sessionStatus: status,
                        city_id: cityID,
                        city_name: cityName,
                        cityData: citiesData,
                        defaultCity: defaultCityRecords,
                        changeCity: changeCity
                    }),
                    page == "listing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BusinessListings, {
                        currentSession: session,
                        sessionStatus: status,
                        pageContent: pageContent
                    }),
                    page == "category" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryLisitng, {
                        pageContent: pageContent,
                        city_id: currentCity === null || currentCity === void 0 ? void 0 : currentCity.city_id,
                        city_name: currentCity === null || currentCity === void 0 ? void 0 : currentCity.city_name,
                        cityData: citiesData
                    }),
                    page == "no_record" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoSearchFound, {
                        currentSession: userData,
                        pageContent: pageContent
                    }),
                    page == "edit" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EditListing, {
                        currentSession: session,
                        pageContent: pageContent,
                        sessionStatus: status
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(ct) {
    try {
        let sessionData = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.getSession)(ct);
        //console.log("--------------------", ct.req)
        const query = ct.query;
        console.log("--------------------", query);
        let search_id = query.search_id;
        let stringSearch = (query === null || query === void 0 ? void 0 : query.query) || "";
        let cityName = (query === null || query === void 0 ? void 0 : query.city) || "";
        let cityID = (query === null || query === void 0 ? void 0 : query.cid) || "";
        let srRes = await fetch(`${process.env.BASE_URL}/api/searching-data`, {
            method: "POST",
            body: JSON.stringify({
                "search_data": search_id,
                "stringSearch": stringSearch,
                city: cityName,
                city_id: cityID
            })
        });
        let srJson = await srRes.json();
        //console.log("PAGE--------------------", query)
        //console.log("===>>>>vk--",srJson)
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
            var ref;
            //console.log("_____json____________searchingpage___________", srJson)
            let page = srJson.page;
            if (srJson.page == "details" && (sessionData === null || sessionData === void 0 ? void 0 : (ref = sessionData.user) === null || ref === void 0 ? void 0 : ref.id) && search_id.indexOf("edit-list") == 4) {
                page = "edit";
            }
            if (page == "category") {
                ct.res.setHeader("set-cookie", `cpdmn=${page}|${srJson.records[0].category_id}; path=/;`);
            } else if (page == "listing") {
                var ref4;
                ct.res.setHeader("set-cookie", `cpdmn=${page}|${(ref4 = srJson.records) === null || ref4 === void 0 ? void 0 : ref4.category_id}; path=/;`);
            } else if (page == "details") {
                var ref5;
                ct.res.setHeader("set-cookie", `cpdmn=${page}|${(ref5 = srJson.records[0]) === null || ref5 === void 0 ? void 0 : ref5.id}; path=/;`);
            } else {
                ct.res.setHeader("set-cookie", `cpdmn=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`);
            }
            //console.log("__________check_________", page, srJson.records)
            //console.log("Pjage is----------", page, srJson.page, sessionData?.user?.id, search_id.indexOf("edit-list"))
            return {
                props: {
                    pageContent: srJson.records,
                    page: page,
                    cityID: (srJson === null || srJson === void 0 ? void 0 : srJson.city_id) ? srJson === null || srJson === void 0 ? void 0 : srJson.city_id : "",
                    stateID: (srJson === null || srJson === void 0 ? void 0 : srJson.state_id) ? srJson === null || srJson === void 0 ? void 0 : srJson.state_id : "",
                    cityName: (srJson === null || srJson === void 0 ? void 0 : srJson.city_name) ? srJson === null || srJson === void 0 ? void 0 : srJson.city_name : "",
                    defaultImage: (srJson === null || srJson === void 0 ? void 0 : srJson.defaultImage) ? srJson === null || srJson === void 0 ? void 0 : srJson.defaultImage : ""
                }
            };
        } else {
            ct.res.setHeader("set-cookie", `cpdmn=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`);
            return {
                props: {
                    pageContent: "",
                    page: "no_record",
                    cityID: (srJson === null || srJson === void 0 ? void 0 : srJson.city_id) ? srJson === null || srJson === void 0 ? void 0 : srJson.city_id : "",
                    cityName: (srJson === null || srJson === void 0 ? void 0 : srJson.city_name) ? srJson === null || srJson === void 0 ? void 0 : srJson.city_name : "",
                    defaultImage: ""
                }
            };
        }
    } catch (err) {
        console.log("_______Search Faild____________", err);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchingDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7200:
/***/ ((module) => {

module.exports = require("lightgallery/plugins/fullscreen");

/***/ }),

/***/ 8923:
/***/ ((module) => {

module.exports = require("lightgallery/plugins/thumbnail");

/***/ }),

/***/ 4608:
/***/ ((module) => {

module.exports = require("lightgallery/plugins/zoom");

/***/ }),

/***/ 2697:
/***/ ((module) => {

module.exports = require("lightgallery/react");

/***/ }),

/***/ 3182:
/***/ ((module) => {

module.exports = require("localforage");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 8797:
/***/ ((module) => {

module.exports = require("next-share");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 1121:
/***/ ((module) => {

module.exports = require("qrcode");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ 2899:
/***/ ((module) => {

module.exports = require("react-bootstrap/Alert");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 6810:
/***/ ((module) => {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ 9044:
/***/ ((module) => {

module.exports = require("react-bootstrap/CloseButton");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 128:
/***/ ((module) => {

module.exports = require("react-bootstrap/Collapse");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 3981:
/***/ ((module) => {

module.exports = require("react-bootstrap/Figure");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 7047:
/***/ ((module) => {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ 2563:
/***/ ((module) => {

module.exports = require("react-bootstrap/InputGroup");

/***/ }),

/***/ 4692:
/***/ ((module) => {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 6865:
/***/ ((module) => {

module.exports = require("react-bootstrap/Offcanvas");

/***/ }),

/***/ 4165:
/***/ ((module) => {

module.exports = require("react-bootstrap/OverlayTrigger");

/***/ }),

/***/ 9736:
/***/ ((module) => {

module.exports = require("react-bootstrap/Popover");

/***/ }),

/***/ 5110:
/***/ ((module) => {

module.exports = require("react-bootstrap/ProgressBar");

/***/ }),

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 3742:
/***/ ((module) => {

module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ 1553:
/***/ ((module) => {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ 4013:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tooltip");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 6804:
/***/ ((module) => {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ 5623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 1848:
/***/ ((module) => {

module.exports = require("react-highlight-words");

/***/ }),

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 3618:
/***/ ((module) => {

module.exports = require("react-select/async");

/***/ }),

/***/ 9777:
/***/ ((module) => {

module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 3512:
/***/ ((module) => {

module.exports = import("firebase/messaging");;

/***/ }),

/***/ 5721:
/***/ ((module) => {

module.exports = import("react-lazy-load");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 1448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,8184,8176], () => (__webpack_exec__(2845)));
module.exports = __webpack_exports__;

})();