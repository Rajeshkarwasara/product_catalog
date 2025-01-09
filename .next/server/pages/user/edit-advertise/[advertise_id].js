"use strict";
(() => {
var exports = {};
exports.id = 9438;
exports.ids = [9438];
exports.modules = {

/***/ 1909:
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
/* harmony import */ var _components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6439);
/* harmony import */ var _front_methods_UserDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1795);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4937);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_advertiseWithUs_users_AdvertisementDetailCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7712);
/* harmony import */ var _components_advertiseWithUs_users_UpgradeAdsPlan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8621);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_advertiseWithUs_users_AdvertisementDetailCard__WEBPACK_IMPORTED_MODULE_11__, _components_advertiseWithUs_users_UpgradeAdsPlan__WEBPACK_IMPORTED_MODULE_12__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_advertiseWithUs_users_AdvertisementDetailCard__WEBPACK_IMPORTED_MODULE_11__, _components_advertiseWithUs_users_UpgradeAdsPlan__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const EditAdvertisement = ({ advertiseDetails , advertisementTime , todayTime , AdvertisementChartCount , csrfToken  })=>{
    console.log("Advertisement chart count", AdvertisementChartCount);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: advertisementChart , 1: setAdvertisementChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((AdvertisementChartCount === null || AdvertisementChartCount === void 0 ? void 0 : AdvertisementChartCount.length) > 0 ? AdvertisementChartCount : [
        [
            "Day",
            "Clicks",
            "Impression"
        ],
        [
            "No Records",
            0,
            0
        ]
    ]);
    // set the variable to load the plan upgrade module
    const { 0: planUpgradeShow , 1: setPlanUpgradeShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentPlanDetailValue , 1: setCurrentPlanDetailValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        daysHourslist: [
            {
                "value": "Mon",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Tue",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Wed",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Thu",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Fri",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Sat",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Sun",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            }
        ]
    });
    const { 0: packages , 1: setPackages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    const { 0: AdsStop , 1: setAdsStop  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(advertiseDetails.stop_start == "Active" ? "0" : "1");
    let StopAdsChange = async (openHoursChecked)=>{
        if (openHoursChecked == true) {
            await setAdsStop(1);
        } else {
            await setAdsStop(0);
        }
        const result = await fetch(process.env.BASE_URL + "/api/protect/ads-stop", {
            method: "POST",
            body: JSON.stringify({
                ads_id: advertiseDetails.ads_id,
                status: AdsStop
            })
        });
        const data = await result.json();
        if (data.status == 200) {}
    };
    let handlePlanUpgradeShow = async (ads_detail, RemainingAmount)=>{
        setPlanUpgradeShow(true);
        var updateFormValues = {
            ...currentPlanDetailValue,
            ads_detail,
            RemainingAmount
        };
        setCurrentPlanDetailValue(updateFormValues);
        const getAdsPackage = await fetch(process.env.BASE_URL + "/api/protect/get-ads-package", {
            method: "POST",
            body: JSON.stringify({
                city_id: ads_detail.city_id,
                package_id: ads_detail.package_id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const areaslisting = await getAdsPackage.json();
        setPackages(areaslisting.data.records);
    };
    const clickOnBackBtn = ()=>{
        router.push("/user/my-advertises") //page redirct to ads listing URL
        ;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        pageTitle: "Advertises",
        activeNav: "Account",
        updateUser: updateUserDetails,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            userData: empDetails,
            accountPageTitle: "Advertises",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: planUpgradeShow ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_advertiseWithUs_users_UpgradeAdsPlan__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    packages: packages,
                    currentPlanDetailValue: currentPlanDetailValue,
                    setCurrentPlanDetailValue: setCurrentPlanDetailValue,
                    csrfToken: csrfToken
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8___default()), {
                        className: "shadow-none border-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8___default().Body), {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `position-relative ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().advertiseDetailsMainTop)}`,
                                    children: advertiseDetails.package_type == 1 || advertiseDetails.package_type == 2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-md-9 col-sm-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `d-flex ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().advertiseDetailsTop)}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_13__.Link, {
                                                            href: "#!",
                                                            onClick: clickOnBackBtn,
                                                            passHref: true,
                                                            prefetch: false,
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-arrow-long-left"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().advertiseDetailsTopName)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "",
                                                                    children: advertiseDetails.business_name
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().advertiseDetailsBottom)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                                            className: "mb-0",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "Total Impressions"
                                                                                }),
                                                                                " ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().advertiseDetailsBottomCount)}`,
                                                                                    children: advertiseDetails.no_of_views
                                                                                }),
                                                                                " ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fi-impression-sr"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                                            className: "mb-0",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "Total Clicks"
                                                                                }),
                                                                                " ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().advertiseDetailsBottomCount)}`,
                                                                                    children: advertiseDetails.no_of_click
                                                                                }),
                                                                                " ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fi-click-sr"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-md-3 col-sm-4 text-end",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `d-inline-flex mt-sm-0 mt-sm-4 mt-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().StopAds)}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Check), {
                                                        type: "switch",
                                                        id: "switch-2",
                                                        label: "Stop your ads",
                                                        onClick: (e)=>{
                                                            StopAdsChange(e.target.checked);
                                                        },
                                                        defaultChecked: `${advertiseDetails.stop_start == "Inactive" ? "checked" : ""}`
                                                    })
                                                })
                                            })
                                        ]
                                    }) : null
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_advertiseWithUs_users_AdvertisementDetailCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    ads_detail: advertiseDetails,
                                    images: advertiseDetails.imagePath,
                                    title: advertiseDetails.business_name,
                                    createdDate: advertiseDetails.date,
                                    price: `₹${advertiseDetails.payment}`,
                                    package_name: advertiseDetails.package_name,
                                    per_click_price: advertiseDetails.per_click_price,
                                    per_impression_price: advertiseDetails.per_impression_price,
                                    per_day_amount: advertiseDetails.per_day_amount,
                                    stop_start: advertiseDetails.stop_start,
                                    ads_status: advertiseDetails.ads_status,
                                    RemainingAmount: advertiseDetails.RemainingAmount,
                                    no_of_click: advertiseDetails.no_of_click,
                                    no_of_views: advertiseDetails.no_of_views,
                                    csrfToken: advertiseDetails.csrfToken,
                                    ads_id: advertiseDetails.ads_id,
                                    payment: advertiseDetails.payment,
                                    advertisementTime: advertisementTime,
                                    todayTime: todayTime,
                                    advertisementChart: advertisementChart,
                                    setAdvertisementChart: setAdvertisementChart,
                                    handlePlanUpgradeShow: handlePlanUpgradeShow,
                                    footer: [
                                        [
                                            "Category",
                                            advertiseDetails.subcatgoeryName
                                        ],
                                        [
                                            "City",
                                            advertiseDetails.city_name
                                        ],
                                        [
                                            "Status",
                                            advertiseDetails.ads_status
                                        ]
                                    ],
                                    horizontal: true
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditAdvertisement);
async function getServerSideProps(ctx) {
    const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { advertise_id  } = ctx.query;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.getSession)(ctx);
    if (session) {
        const { user  } = session;
        const details = await (0,_front_methods_UserDetails__WEBPACK_IMPORTED_MODULE_4__/* .AdvertisementDetails */ .nk)(db, advertise_id);
        const data = JSON.parse(details);
        let records = (data === null || data === void 0 ? void 0 : data.status) == "200" ? data === null || data === void 0 ? void 0 : data.data[0] : [];
        let ads_time_records = (data === null || data === void 0 ? void 0 : data.status) == "200" ? data === null || data === void 0 ? void 0 : data.time : {};
        let ads_time_today_records = (data === null || data === void 0 ? void 0 : data.status) == "200" ? data === null || data === void 0 ? void 0 : data.todaytime : {};
        // chart count 
        let ChartCountArray = (data === null || data === void 0 ? void 0 : data.status) == "200" ? data === null || data === void 0 ? void 0 : data.chartCount : {};
        let timeArray = [];
        if ((ads_time_records === null || ads_time_records === void 0 ? void 0 : ads_time_records.length) > 0) {
            ads_time_records.forEach(async (dataVal, i)=>{
                timeArray.push({
                    "id": dataVal.id,
                    "value": dataVal.day,
                    "open": dataVal.is_open == 1 ? 1 : "",
                    "close": dataVal.is_open == 0 ? 1 : "",
                    "start_time": dataVal.start_time ? dataVal.start_time : "",
                    "end_time": dataVal.end_time ? dataVal.end_time : "",
                    "is_dual": "0",
                    "dual_start_time": "",
                    "dual_end_time": ""
                });
            });
        }
        let ChartCount = [];
        if ((ChartCountArray === null || ChartCountArray === void 0 ? void 0 : ChartCountArray.length) > 0) {
            ChartCount.push([
                "Day",
                "Clicks",
                "Impression"
            ]);
            ChartCountArray.forEach(async (dataVal, i)=>{
                ChartCount.push([
                    dataVal.day,
                    dataVal.total_clicks,
                    dataVal.total_impression
                ]);
            });
        }
        if (records === null || records === void 0 ? void 0 : records.ads_id) {
            return {
                props: {
                    advertiseDetails: records,
                    advertisementTime: timeArray,
                    todayTime: ads_time_today_records,
                    AdvertisementChartCount: ChartCount,
                    csrfToken: await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.getCsrfToken)(ctx)
                }
            };
        } else {
            return {
                redirect: {
                    permanent: false,
                    destination: `/user/my-advertises`
                }
            };
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: `/`
            }
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 6936:
/***/ ((module) => {

module.exports = require("@aws-sdk/s3-request-presigner");

/***/ }),

/***/ 6011:
/***/ ((module) => {

module.exports = require("date-fns/addDays");

/***/ }),

/***/ 4538:
/***/ ((module) => {

module.exports = require("date-fns/addMonths");

/***/ }),

/***/ 6924:
/***/ ((module) => {

module.exports = require("date-fns/endOfMonth");

/***/ }),

/***/ 3864:
/***/ ((module) => {

module.exports = require("date-fns/endOfWeek");

/***/ }),

/***/ 5914:
/***/ ((module) => {

module.exports = require("date-fns/startOfMonth");

/***/ }),

/***/ 2659:
/***/ ((module) => {

module.exports = require("date-fns/startOfWeek");

/***/ }),

/***/ 5358:
/***/ ((module) => {

module.exports = require("date-fns/subDays");

/***/ }),

/***/ 3182:
/***/ ((module) => {

module.exports = require("localforage");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

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

/***/ 5422:
/***/ ((module) => {

module.exports = require("react-bootstrap/AccordionButton");

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

/***/ 3456:
/***/ ((module) => {

module.exports = require("react-multi-date-picker");

/***/ }),

/***/ 3371:
/***/ ((module) => {

module.exports = require("react-multi-date-picker/plugins/date_panel");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 9777:
/***/ ((module) => {

module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4210:
/***/ ((module) => {

module.exports = require("rsuite");

/***/ }),

/***/ 2261:
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ 7441:
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ 6302:
/***/ ((module) => {

module.exports = require("xlsx");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 3512:
/***/ ((module) => {

module.exports = import("firebase/messaging");;

/***/ }),

/***/ 8421:
/***/ ((module) => {

module.exports = import("react-google-charts");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,4301,8176,7559,3198,467,6439,767,8633,4823,8621,5415,997], () => (__webpack_exec__(1909)));
module.exports = __webpack_exports__;

})();