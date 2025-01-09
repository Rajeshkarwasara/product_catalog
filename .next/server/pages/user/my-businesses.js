"use strict";
(() => {
var exports = {};
exports.id = 4176;
exports.ids = [4176];
exports.modules = {

/***/ 9996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_UserListingCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap/Dropdown"
var Dropdown_ = __webpack_require__(8582);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
// EXTERNAL MODULE: ./components/ImageLoader.js
var ImageLoader = __webpack_require__(5698);
// EXTERNAL MODULE: ./styles/Myaccount.module.css
var Myaccount_module = __webpack_require__(7559);
var Myaccount_module_default = /*#__PURE__*/__webpack_require__.n(Myaccount_module);
;// CONCATENATED MODULE: ./components/Canvas.js
const getRandomColor = (text = "", length = 16)=>{
    var letters = text ? text : "0123456789ABCDEF";
    length = parseInt(length);
    var color = "#";
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * length)];
    }
    return color;
};
const getInitialsImg = (name)=>{
    let initials;
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
        initials = nameSplit[0].substring(0, 1) + nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
        initials = nameSplit[0].substring(0, 1);
    } else return;
    return initials.toUpperCase();
};
const createImageFromInitials = (size, name = "Dial Me", color = "", background = true)=>{
    //it wil return the URL of new Image
    if (name == null || name == "") name = "Dial Me";
    if (!background) {
    // color = stringToHslColor(name, 30, 50)
    }
    name = getInitialsImg(name);
    if (false) {} else {
        return null;
    }
};

;// CONCATENATED MODULE: ./components/UserListingCard.js










const CardImage = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 1634).then(__webpack_require__.bind(__webpack_require__, 1634))
, {
    loadableGenerated: {
        modules: [
            "../components/UserListingCard.js -> " + "./partials/CardImageFeatured"
        ]
    }
});
const CardImageSlider = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 384).then(__webpack_require__.bind(__webpack_require__, 384))
, {
    loadableGenerated: {
        modules: [
            "../components/UserListingCard.js -> " + "./partials/CardImageSlider"
        ]
    }
});

const UserListingCard = ({ result , addNewPlan , upgradePlan  })=>{
    var ref, ref1;
    //console.log("________user Listing_________________",result)
    // let styles = {
    //     newslink: {
    //         color:'#000000',
    //         fontSize:'15px',
    //         fontWeight: '500',
    //         overflow: 'hidden',
    //         textOverflow: 'ellipsis',
    //         WebkitLineClamp: '2',
    //         lineHeight: '22px',
    //         display:'-webkit-box',
    //         WebkitBoxOrient:'vertical',
    //     },
    //     calendarCustom:{
    //         display:'flex',
    //         alignItems:'center',
    //         color:'#6A7584',
    //         fontSize:'14px',
    //     },
    //     calendarCustomI:{
    //         position: 'relative',
    //         top:'-1px',fontSize:'16px'
    //     },
    //     '@media (max-width: 500px)': {
    //     display: 'none',
    //   },
    //         }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-4 ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(Myaccount_module_default()).ListingCardBox}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " d-flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `overflow-hidden ${(Myaccount_module_default()).ListingCompanyLogo}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `${process.env.BASE_URL}/user/edit-business/${result.id}`,
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ImageLoader/* default */.Z, {
                                    src: (result === null || result === void 0 ? void 0 : result.logo) || createImageFromInitials(200, result.name, getRandomColor()),
                                    alt: ``,
                                    // width={`100%`}
                                    // height={`100%`}
                                    quality: 100,
                                    layout: "fill",
                                    objectFit: "contain",
                                    className: "position-relative p-1"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(Myaccount_module_default()).ListingCardRight}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "h6 mb-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `${process.env.BASE_URL}/user/edit-business/${result.id}`,
                                        passHref: true,
                                        prefetch: false,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "",
                                                    style: (Myaccount_module_default()).newslink,
                                                    children: result.name
                                                }),
                                                result.is_paid == "1" ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    className: `mb-0 ${(Myaccount_module_default()).PaidBtn} ms-2`,
                                                    children: "Paid"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    size: "sm",
                                                    className: `mb-0 ${(Myaccount_module_default()).FreeBtn} ms-2`,
                                                    children: "Free"
                                                }),
                                                result.approved_status == "1" ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    className: `mb-0 ${(Myaccount_module_default()).PaidBtn} ms-2`,
                                                    children: "Aproved"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    className: `mb-0 ${(Myaccount_module_default()).FreeBtn} ms-2`,
                                                    children: "Pending"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                result.created_at && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `mb-0 ${(Myaccount_module_default()).DateListing}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: result.created_at
                                    })
                                }),
                                (result === null || result === void 0 ? void 0 : (ref = result.mobile_emails) === null || ref === void 0 ? void 0 : ref.length) > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        (result === null || result === void 0 ? void 0 : result.mobile_emails[0].email) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `d-flex align-items-center justify-content-sm-start border-top border-light pt-1 pb-0  text-nowrap`,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: `d-flex align-items-center ${(Myaccount_module_default()).PhoneMailListing}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fi-mail`
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: `${(Myaccount_module_default()).PhoneListing}`,
                                                        children: [
                                                            result === null || result === void 0 ? void 0 : result.mobile_emails[0].email,
                                                            " "
                                                        ]
                                                    }),
                                                    (result === null || result === void 0 ? void 0 : result.mobile_emails[0].is_verified) == "1" ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fi-security ${(Myaccount_module_default()).VerifiedIcon}`
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fi-not-verify ${(Myaccount_module_default()).UnVerifiedIcon}`
                                                    })
                                                ]
                                            })
                                        }),
                                        (result === null || result === void 0 ? void 0 : result.mobile_emails[0].phone) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `d-flex align-items-center justify-content-sm-start border-top border-light pt-1 pb-0  text-nowrap`,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: `d-flex align-items-center ${(Myaccount_module_default()).PhoneMailListing}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fi-phone`
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: `${(Myaccount_module_default()).PhoneListing}`,
                                                        children: [
                                                            result === null || result === void 0 ? void 0 : result.mobile_emails[0].phone,
                                                            " "
                                                        ]
                                                    }),
                                                    (result === null || result === void 0 ? void 0 : result.mobile_emails[0].is_verified_phone) == "1" ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fi-security ${(Myaccount_module_default()).VerifiedIcon}`
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fi-not-verify ${(Myaccount_module_default()).UnVerifiedIcon}`
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pt-2 ps-3",
                                    children: (result === null || result === void 0 ? void 0 : result.is_verified) == "1" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: `d-table badge bg-veryfied mb-1 ${(Myaccount_module_default()).badgescustom}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fi-security me-1"
                                            }),
                                            "Verified"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(Myaccount_module_default()).ListingPlan}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-9",
                                children: result.is_paid == "1" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: (result === null || result === void 0 ? void 0 : (ref1 = result.packages) === null || ref1 === void 0 ? void 0 : ref1.length) > 0 && (result === null || result === void 0 ? void 0 : result.packages.map((pack, idx)=>{
                                        if (pack.is_current == 1) {
                                            //active plan
                                            if (idx == 0) {
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                            className: "mb-1",
                                                            children: [
                                                                "Active Plan - ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: pack.name
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "mb-0",
                                                            children: [
                                                                "Your current will expire on",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: pack.ends_on
                                                                })
                                                            ]
                                                        }),
                                                        pack.remaining_days < 15 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: `mb-2 mb-sm-2 mb-md-0 ${(Myaccount_module_default()).PlanExpired}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fi-alert-circle me-2"
                                                                }),
                                                                " Your plan expired within ",
                                                                pack.remaining_days,
                                                                " ",
                                                                "days. Please upgrade your plan."
                                                            ]
                                                        })
                                                    ]
                                                }, idx);
                                            }
                                        } else {
                                            //future plan
                                            if (idx == 0) {
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                            className: "mb-1",
                                                            children: [
                                                                "Future Plan - ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: pack.name
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "mb-0",
                                                            children: [
                                                                "Your current will expire on",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: pack.ends_on
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, idx);
                                            }
                                        }
                                    }))
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `${(Myaccount_module_default()).AnyPlan}`,
                                    children: "Don't have any plan?"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-3 ms-auto text-end",
                                children: result.is_paid == "1" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: (result === null || result === void 0 ? void 0 : result.packages[0].remaining_days) < 15 && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        size: "sm",
                                        onClick: ()=>{
                                            let activePackage = result === null || result === void 0 ? void 0 : result.packages[0];
                                            activePackage.business_id = result === null || result === void 0 ? void 0 : result.id;
                                            activePackage.business_name = result === null || result === void 0 ? void 0 : result.name;
                                            activePackage.city_id = result === null || result === void 0 ? void 0 : result.city_id;
                                            upgradePlan(activePackage);
                                        },
                                        className: `upsale-button ${(Myaccount_module_default()).NewPlanBtn}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Plan Upgrade"
                                        })
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        onClick: ()=>addNewPlan(result)
                                        ,
                                        size: "sm",
                                        className: `upsale-button ${(Myaccount_module_default()).NewPlanBtn + " " + (Myaccount_module_default()).AddPlanBtn}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Add Plan"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }, result.id);
};
/* harmony default export */ const components_UserListingCard = (UserListingCard);


/***/ }),

/***/ 5525:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1636);
/* harmony import */ var _components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6439);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UserListingCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9996);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4692);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(348);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5698);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_packages_BusinessPackageListing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5410);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_9__, _components_packages_BusinessPackageListing__WEBPACK_IMPORTED_MODULE_15__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_9__, _components_packages_BusinessPackageListing__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const MyBusinesses = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    //const [currentPage, setCurrentPage] = useState(0);
    const { businessRecords , isLoadingMore , isReachingEnd , isRefreshing , size , setSize , mutate  } = (0,_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_9__/* .usePagination */ .h)("/api/protect/my-listings");
    const { 0: businessIdForPlan , 1: setBusinessIdForPlan  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: businessDetail , 1: setBusinessDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    //define the combo package is_combo_package
    const { 0: isBuySubscriptionPackage , 1: setIsBuySubscriptionPackage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const deleteAll = (e)=>{
        e.preventDefault();
    // setProperties([])
    };
    // Add class to body to enable gray background
    const s3Get = (url)=>{
        return S3(url).then((val)=>val
        );
    };
    //onclick add plan 
    const addNewPlan = (businessObject)=>{
        setBusinessDetail({
            business_id: businessObject.id,
            city_id: businessObject.city_id
        }) //set business detail object
        ;
        setBusinessIdForPlan(businessObject.id) //set business id
        ;
        //scroll top to particular id
        window.scrollTo({
            top: document.getElementById("my-listing-div").offsetTop - 60,
            behavior: "smooth"
        });
    };
    //upgrade plan function
    const upgradePlan = async (activePlanDetailObject)=>{
        //activePlanDetailObject.plan_price = (activePlanDetailObject.plan_price).toFixed(2)
        setBusinessDetail({
            ["is_upgrade_plan"]: 1,
            ["activePlan"]: activePlanDetailObject
        });
        setBusinessIdForPlan(activePlanDetailObject.business_id);
        //scroll top to particular id
        window.scrollTo({
            top: document.getElementById("my-listing-div").offsetTop - 60,
            behavior: "smooth"
        });
    };
    const refreshBusinessListings = async ()=>{
        //refresh the listing
        await mutate();
    };
    var ref;
    //console.log("--------------records------------------", businessRecords)
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        pageTitle: "My Businesses",
        activeNav: "Vendor",
        updateUser: updateUserDetails,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            userData: empDetails,
            accountPageTitle: "Listings",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default()), {
                className: "shadow-none border-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default().Body), {
                    className: "",
                    children: businessIdForPlan == 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-sm-4 mb-3 border-bottom align-items-center d-flex justify-content-between pb-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().MyaccountHeading)}`,
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: " mb-0",
                                                children: `Listings`
                                            })
                                        ]
                                    }),
                                    (businessRecords === null || businessRecords === void 0 ? void 0 : businessRecords.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/paid-listing",
                                            passHref: true,
                                            prefetch: false,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                variant: "primary",
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().HeadPimaryBtn)}`,
                                                children: "Create Listing"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
                                next: ()=>setSize(size + 1)
                                ,
                                hasMore: !isReachingEnd,
                                loader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    animation: "border",
                                    role: "status",
                                    className: " position-relative overflow-hidden",
                                    style: {
                                        width: "3rem",
                                        height: "3rem"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "visually-hidden",
                                        children: "Loading..."
                                    })
                                }),
                                endMessage: "",
                                dataLength: (ref = businessRecords === null || businessRecords === void 0 ? void 0 : businessRecords.length) !== null && ref !== void 0 ? ref : 0,
                                children: businessRecords.length > 0 ? businessRecords.map((property, indx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UserListingCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        result: property,
                                        addNewPlan: addNewPlan,
                                        upgradePlan: upgradePlan
                                    }, indx)
                                ) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center pt-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoListingImgIcon)}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                src: "/images/MyAccount/NoListingImg.svg",
                                                width: 251,
                                                height: 151,
                                                alt: "Square image",
                                                quality: 100
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoListingHead)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: "No yet Listings"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mb-3",
                                                    children: "No listings has been made yet."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/free-listing",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        variant: "primary mb-4",
                                                        children: "Create Free Listing"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `text-start ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefits)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: "Benefits"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    as: "ul",
                                                    className: "d-block",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Increased Visibility: Dialmenow listings give your business increased exposure to potential customers searching for products or services in your industry."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Credibility: Listing in Dialmenow gives your business credibility and legitimacy, especially for those who still rely on print directories."
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Targeted Marketing: Dialmenow allows you to target your marketing to specific demographics, such as age, location, or income level."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Cost-Effective: Compared to other forms of advertising, listing your business on Dialmenow is cost-effective and budget-friendly."
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Access to Local Audience: Dialmenow listings help connect your business with local customers searching for services in your area."
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Easy to Update: Updating your listing information on Dialmenow is simple and straightforward, allowing you to keep your business information current and accurate."
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            " "
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_BusinessPackageListing__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        businessDetail: businessDetail,
                        setIsBuySubscriptionPackage: setIsBuySubscriptionPackage,
                        redirectPath: "/user/my-businesses",
                        refreshBusinessListings: refreshBusinessListings,
                        ...props
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyBusinesses);
async function getServerSideProps(ctx) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_12__.getSession)(ctx);
    if (session) {
        return {
            props: {
                userSessionData: ""
            }
        };
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

/***/ 9025:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tab");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,4301,7559,6256,467,6439,8877,5410,9749], () => (__webpack_exec__(5525)));
module.exports = __webpack_exports__;

})();