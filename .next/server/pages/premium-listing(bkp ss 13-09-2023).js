"use strict";
(() => {
var exports = {};
exports.id = 8533;
exports.ids = [8533];
exports.modules = {

/***/ 2034:
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
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1636);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5698);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8184);
/* harmony import */ var _styles_PremiumListing_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6628);
/* harmony import */ var _styles_PremiumListing_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_PremiumListing_module_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(329);
/* harmony import */ var _components_AboutUsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4692);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1553);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_packages_BusinessPackageListing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5410);
/* harmony import */ var _components_comboPackages_payAndReview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9035);
/* harmony import */ var _components_comboPackages_ComboPackageCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2508);
/* harmony import */ var _components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Services__WEBPACK_IMPORTED_MODULE_10__, _components_packages_BusinessPackageListing__WEBPACK_IMPORTED_MODULE_15__, _components_comboPackages_payAndReview__WEBPACK_IMPORTED_MODULE_16__, _components_comboPackages_ComboPackageCard__WEBPACK_IMPORTED_MODULE_17__, _components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_18__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Services__WEBPACK_IMPORTED_MODULE_10__, _components_packages_BusinessPackageListing__WEBPACK_IMPORTED_MODULE_15__, _components_comboPackages_payAndReview__WEBPACK_IMPORTED_MODULE_16__, _components_comboPackages_ComboPackageCard__WEBPACK_IMPORTED_MODULE_17__, _components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const PremiumListingPage = (props)=>{
    var ref1;
    // Add class to body to enable gray background
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const PageUrl = query.asPath;
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const { 0: comboPackages , 1: setComboPackages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.comboPackageListings);
    //get combo package id
    let package_id1 = (query === null || query === void 0 ? void 0 : (ref1 = query.query) === null || ref1 === void 0 ? void 0 : ref1.query) || 0;
    //get combo package id and define combopackage id in variable
    const { 0: comboPackageID , 1: setComboPackageID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    //define the user login status
    const { 0: loginStatus , 1: SetLoginStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //define the business and new package detail
    const { 0: businessDetail , 1: setBusinessDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    //define the package  detail
    const { 0: comboPackageDetail , 1: setComboPackageDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    //define the combo package is_combo_package
    const { 0: isBuySubscriptionPackage , 1: setIsBuySubscriptionPackage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //open login and signup modal
    const { 0: userSignInSignUp , 1: setUserSignInSignUp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //define the  package id variable
    //const [newPackageId, setNewPackageId] = useState(0)
    const { 0: pageRedirectURL , 1: setPageRedirectURL  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Advertise with us modal
    const { 0: advertiseWithUsShow , 1: setAdvertiseWithUsShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleAdvertiseWithusClose = ()=>setAdvertiseWithUsShow(false)
    ;
    const handleAdvertiseWithUsShow = ()=>setAdvertiseWithUsShow(true)
    ;
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //onclick buy now button
    const buyNowComboPackage = async (comboPackageId)=>{
        if (status == "authenticated") {
            //true( authenticated)
            //redirect on premium listing packages
            next_router__WEBPACK_IMPORTED_MODULE_6___default().router.push("/premium-listing?query=" + comboPackageId);
        } else {
            //Not authenticated
            //open modal
            setUserSignInSignUp(true);
            setPageRedirectURL("/premium-listing?query=" + comboPackageId);
        }
    };
    //check and get package detail by id
    const packageDetailById = async (package_id)=>{
        try {
            var ref;
            const data = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: package_id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/combo-package-by-id`, data);
            let packageRecords = await res.json();
            return (packageRecords === null || packageRecords === void 0 ? void 0 : (ref = packageRecords.data) === null || ref === void 0 ? void 0 : ref.packagesDetail[0]) || [];
        } catch (err) {
            return [];
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (status == "authenticated") {
            SetLoginStatus(true);
        } else {
            SetLoginStatus(false);
        }
    }, [
        status
    ]);
    //on load check package id exits or not in database
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        const packageDetail = await packageDetailById(package_id1);
        if ((packageDetail === null || packageDetail === void 0 ? void 0 : packageDetail.id) > 0) {
            //set package detail
            packageDetail.is_combo_package = 1;
            //calculate the gst
            let gstPrice = packageDetail.actual_price * 18 / 100;
            //var updateObject = { ...businessDetail, ['new_package']: packageDetail,['total_payable_amount']: packageDetail.actual_price,['gst']:gstPrice}
            //await setBusinessDetail(updateObject)packageDetail
            businessDetail.new_package = packageDetail;
            businessDetail.total_payable_amount = (parseFloat(packageDetail.actual_price) + parseFloat(gstPrice)).toFixed(2);
            businessDetail.gst = gstPrice;
            //set discount variable
            businessDetail.discount = 0;
            //set combo package id(pk id)
            await setComboPackageID(packageDetail === null || packageDetail === void 0 ? void 0 : packageDetail.id);
        }
    }, comboPackageID);
    if (isBuySubscriptionPackage == false && comboPackageID && comboPackageID > 0) {
        //If package id is comming then we render the pay&review page otherwise not(open listing page)
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_comboPackages_payAndReview__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            businessDetail: businessDetail,
            session: session
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                userSignInSignUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_18__["default"], {
                    session: session,
                    show: true,
                    onHide: ()=>setUserSignInSignUp(false)
                    ,
                    callbackUrl: pageRedirectURL
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: "Online Paid Listing",
                    description: "Dialmenow is the most comprehensive Jaipur Paid Listing Services. Dial Me Now Online Pvt. Ltd. is an established offline (telephonic and print) and online (Website, WAP site & App) information provider in Rajasthan. We are Rajasthan\u2019s first own local search engine.",
                    keyword: "paid listing, online paid listing, paid listing in rajasthany,advertise , online advertisement in rajasthan, online paid list, online advertisement, prmote business, Dialmenow yellow pages",
                    url: PageUrl,
                    city: "",
                    area: "",
                    companyName: "",
                    SEOIndexing: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    pageTitle: "Account - Favorites",
                    activeNav: "Account",
                    userLoggedIn: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: `full ${(_styles_PremiumListing_module_css__WEBPACK_IMPORTED_MODULE_19___default().SubscriptionPackages)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                            children: [
                                isBuySubscriptionPackage == false && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center mb-md-4 mb-sm-3 mb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Subscription Packages"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Dial Me Now Online Pvt. Ltd. is an established offline (telephonic and print) and online (Website, WAP site & App) information provider in Rajasthan. We are Rajasthan\u2019s first own local search engine."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_BusinessPackageListing__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    setIsBuySubscriptionPackage: setIsBuySubscriptionPackage,
                                    isComboPackagePage: true,
                                    ...props
                                })
                            ]
                        })
                    })
                })
            ]
        });
    }
};
async function getServerSideProps(context) {
    // Fetch data from external API
    const data = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    };
    let PackageRecords = [];
    try {
        var ref;
        const res = await fetch(`${process.env.BASE_URL}/api/protect/master-combo-package-listing`, data);
        PackageRecords = await res.json();
        PackageRecords = (PackageRecords === null || PackageRecords === void 0 ? void 0 : (ref = PackageRecords.data) === null || ref === void 0 ? void 0 : ref.packageListings) || [];
        return {
            props: {
                comboPackageListings: PackageRecords || []
            }
        };
    } catch (err) {
        console.log(err, "  ---- Combo premium listing page");
        return {
            props: {
                comboPackageListings: []
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PremiumListingPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2899:
/***/ ((module) => {

module.exports = require("react-bootstrap/Alert");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 3387:
/***/ ((module) => {

module.exports = require("react-bootstrap/ButtonGroup");

/***/ }),

/***/ 9044:
/***/ ((module) => {

module.exports = require("react-bootstrap/CloseButton");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

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

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 3742:
/***/ ((module) => {

module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ 9025:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tab");

/***/ }),

/***/ 1553:
/***/ ((module) => {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ 972:
/***/ ((module) => {

module.exports = require("react-bootstrap/Toast");

/***/ }),

/***/ 871:
/***/ ((module) => {

module.exports = require("react-bootstrap/ToastContainer");

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

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

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
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,9340,8184,329,4440,4301,8176,7559,6256,3198,767,8877,5410,8633,6628,94], () => (__webpack_exec__(2034)));
module.exports = __webpack_exports__;

})();