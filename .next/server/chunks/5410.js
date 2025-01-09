"use strict";
exports.id = 5410;
exports.ids = [5410];
exports.modules = {

/***/ 4986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);








const BusinessPackageCard = ({ BusinessPackageCount , title , price , offerPrice , period , description , noOfUsers , button , light , featured , className , isBest , id , isComboPackagePage =false , ...props })=>{
    const { 0: showText , 1: setShowText  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    // const contentHtml = [];
    const contentHtml = [];
    contentHtml[4] = `
  <div class="text-center pack-card py-3 py-md-3 py-lg-3 px-2 px-md-2 px-lg-3">
    <h6 class="text-center">For Those Starting Their Digital Journey</h6>
    <ul>
      <li>Basic online visibility for your business</li>
      <li>Display essential details: name, address, contact info, and timing</li>
      <li>Limited exposure in relevant categories</li>
      <li>Logo and images to visually represent your brand</li>
      <li>Ideal for small local businesses dipping their toes into the digital landscape</li>
    </ul>
  
  </div>
`;
    contentHtml[3] = `
<div class="text-center pack-card py-3 py-md-3 py-lg-3 px-2 px-md-2 px-lg-3">
  
  <h6 className="text-center">
  Enhance Your Presence with the Silver Touch
</h6>

<ul>
  <li>Increased visibility in your chosen category</li>
  <li>Eye-catching business description</li>
  <li>Highlighted in search results</li>
  <li>Social media links for expanded engagement</li>
  <li>
    Perfect for businesses looking to stand out and attract
    local customers
  </li>
</ul>

</div>
`;
    contentHtml[2] = `
<div class="text-center pack-card py-3 py-md-3 py-lg-3 px-2 px-md-2 px-lg-3">
<h6 className="text-center">
Elevate Your Brand to Gold Standard
</h6>

<ul>
<li>Premium visibility across Your Chosen Category</li>
<li>Detailed business description and services</li>
<li>Prominent placement in search results</li>
<li>
  Great for established businesses aiming for widespread
  recognition
</li>
</ul>

</div>
`;
    contentHtml[1] = `
<div class="text-center pack-card py-3 py-md-3 py-lg-3 px-2 px-md-2 px-lg-3">
<h6 className="text-center">
For Those Who Settle for Nothing Less Than the Best
</h6>
<ul>
<li>Top-tier exposure in Your Chosen Category</li>
<li>Comprehensive business description and portfolio</li>
<li>Featured placement in search results</li>
<li>Enhanced visuals with video integration</li>
<li>Premium positioning to captivate your audience</li>
</ul>

</div>
`;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const goToFreeListing = ()=>{
        router.push("/free-listing");
    };
    // Now, you can use contentHtml where needed
    const extraClass = className ? ` ${className}` : "";
    // Main wrapper CSS class
    let containerClass;
    if (featured) {
        if (light) {
            containerClass = "card card-light border-light card-active" + extraClass;
        } else {
            containerClass = "card shadow" + extraClass;
        }
    } else {
        if (light) {
            containerClass = "card card-light border-light" + extraClass;
        } else {
            containerClass = "card" + extraClass;
        }
    }
    // Render markup
    if (isComboPackagePage) {
        //when page is premium listing
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            style: {
                minWidth: "220px"
            },
            className: `align-top border-0 btn-b-0 ${isBest ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().BestPackage) : ""}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center",
                children: [
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: `h4 `,
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                        children: [
                            offerPrice && offerPrice != null ? "\u20B9" + offerPrice : "",
                            offerPrice && offerPrice != null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                children: price
                            }) : price,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    "/",
                                    period
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: contentHtml[id]
                        }
                    }),
                    id == 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        // {...button.props}
                        onClick: goToFreeListing,
                        type: "button",
                        className: `btn ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().BuyNowBtn) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().NotifyButton)}`,
                        children: "List your business free"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        ...button.props,
                        type: "button",
                        className: `btn ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().BuyNowBtn) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().NotifyButton)}`,
                        children: noOfUsers == BusinessPackageCount ? "Notify Me" : "Buy Now"
                    })
                ]
            })
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...props,
            className: containerClass,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card-body p-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().planHead)}`,
                        children: [
                            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: `h4 `,
                                children: title
                            }),
                            price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().PlanPrice)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: offerPrice && offerPrice != null ? "\u20B9" + offerPrice : ""
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: offerPrice && offerPrice != null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                            children: price
                                        }) : price
                                    }),
                                    " ",
                                    "RS/",
                                    period
                                ]
                            }),
                            isBest && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().PlanBest)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    src: "/images/advertise/planBestImg.svg",
                                    height: "19",
                                    width: "52"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().planBottom)}`,
                        children: [
                            showText ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "list-unstyled d-block mb-0 mx-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mb-0",
                                    children: [
                                        description,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setShowText(!showText)
                                            ,
                                            style: {
                                                backgroundColor: "transparent",
                                                color: "#FFCC29",
                                                padding: "0px 12px",
                                                border: "none",
                                                cursor: "pointer",
                                                textDecoration: "underline"
                                            },
                                            children: "Show Less"
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "list-unstyled d-block mb-0 mx-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mb-0",
                                    children: [
                                        description.substring(0, 50),
                                        " ",
                                        description.length > 50 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setShowText(!showText)
                                            ,
                                            style: {
                                                backgroundColor: "transparent",
                                                color: "#FFCC29",
                                                padding: "0px 12px",
                                                border: "none",
                                                cursor: "pointer",
                                                textDecoration: "underline"
                                            },
                                            children: "Show More"
                                        }) : ""
                                    ]
                                })
                            }),
                            button && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-0 border-0 mt-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `text-center`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        ...button.props,
                                        type: "button",
                                        className: `btn ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().BuyNowBtn)}`,
                                        children: noOfUsers == BusinessPackageCount ? "Notify Me" : "Buy Now"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessPackageCard);


/***/ }),

/***/ 5410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9025);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1553);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3387);
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5698);
/* harmony import */ var _components_packages_BusinessPackageCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4986);
/* harmony import */ var _components_MySelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6256);
/* harmony import */ var _businessListingModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8877);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5641);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4301);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7229);
/* harmony import */ var _components_shimmer_paymentSuccessLoad__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _businessListingModal__WEBPACK_IMPORTED_MODULE_17__, react_hook_form__WEBPACK_IMPORTED_MODULE_19__, _components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_22__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _businessListingModal__WEBPACK_IMPORTED_MODULE_17__, react_hook_form__WEBPACK_IMPORTED_MODULE_19__, _components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




























const BusinessPackageListing = ({ businessDetail ={} , isComboPackagePage =false , setIsBuySubscriptionPackage ="" , redirectPath ="/user/account-packages" , refreshBusinessListings ="" , ...props })=>{
    var ref22, ref1;
    //console.log('---BusinessPackageListing--props----', props,businessDetail)
    const { 0: activeKey , 1: setActiveKey  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("second");
    //defined packages listing variable
    const { 0: packagesRecords , 1: setPackagesRecords  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    //defined the cities lisiting variable
    const { 0: citiesListings , 1: setCitiesListings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    //shimmer effect variable
    const { 0: isLoadingShimmer , 1: setIsLoadingShimmer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    //define the package plan feature
    const { 0: packageFeatures , 1: setPackageFeatures  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        "Premium Location",
        "Fixed Position",
        "Company Name",
        "Contact Person",
        "Address",
        "Contact Nos",
        "Email Id",
        "Website",
        "Product Description",
        "Logo",
        "Map Location",
        "Product Images (Nos)",
        "Video URL",
        "Brochure in PDF Format",
        "Instant SMS Feedback",
        "Complimentary Entry in Upcoming Directory* (Only for Rajasthan RegisteredBusinesses)", 
    ]);
    const resultPack = {};
    //when user upgrade our business plan then we set the business city id as default otherwise not
    // if (businessDetail?.is_another_plan && businessDetail?.is_another_plan == 1) {
    if ((businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) > 0) {
        let allcities = props === null || props === void 0 ? void 0 : props.citiesData;
        let obj = allcities.find((o)=>{
            return o.id === (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.city_id);
        });
        //set default city object in props
        props.defaultCityRecords = obj;
    }
    //define default city variables
    const { 0: selectedCity , 1: setSelectedCity  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props === null || props === void 0 ? void 0 : props.defaultCityRecords);
    const { 0: selectedCityID , 1: setSelectedCityID  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((props === null || props === void 0 ? void 0 : (ref22 = props.defaultCityRecords) === null || ref22 === void 0 ? void 0 : ref22.id) || "");
    const defaultSelectedCityId = (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.city_id) != "" && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.city_id) != undefined ? businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.city_id : props === null || props === void 0 ? void 0 : (ref1 = props.defaultCityRecords) === null || ref1 === void 0 ? void 0 : ref1.id;
    //set the cities listing and default selected city data in variables
    //const citiesListing = props?.citiesData
    //set the business detail in variable
    //const [businessDetails, setBusinessDetails] = useState(businessDetail)
    const { 0: couponCodeVal , 1: setCouponCodeVal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    //set the business listing modal variables
    const { 0: businessesConfirmModalHideShow , 1: setBusinessesConfirmModalHideShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleBusinessesConfirmModalClose = ()=>setBusinessesConfirmModalHideShow(false)
    ;
    const handleBusinessesConfirmModalShow = ()=>setBusinessesConfirmModalHideShow(true)
    ;
    //Declear package business id variable
    //const [packageBusinessID, setPackageBusinessID] = useState(businessDetail?.id && businessDetail?.id != undefined && businessDetail?.id != '' ? businessDetail?.id : 0)
    const { 0: packageBusinessID , 1: setPackageBusinessID  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) != undefined && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) != "" ? businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id : 0);
    //declear business package detail
    const { 0: packageBusinessDetail , 1: setPackageBusinessDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: planPriceWithGst , 1: setPlanPriceWithGst  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0.0);
    //declear the submit button action
    const { 0: submitButtonAction , 1: setsubmitButtonAction  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Make Payment");
    const { 0: reviewAndPayPage , 1: setReviewAndPayPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    //set plan is upgrage variable
    const { 0: isUpgradePlan , 1: setIsUpgradePlan  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_upgrade_plan) ? businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_upgrade_plan : 0);
    //get user session
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_18__.useSession)(); // for session check
    //use form
    const { register , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_19__.useForm)();
    //form validation error variable
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    //declear the popup modal variable
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: popupType , 1: setPopupType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("success");
    const { 0: popupTitle , 1: setPopupTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Success");
    //defined the user wallet amount variable
    const { 0: userWalletTotalAmount , 1: setUserWalletTotalAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    //defined the user wallet apply or not variable
    const { 0: isApplyUserWallet , 1: setIsApplyUserWallet  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    //defined the user  apply coupon code or not variable
    const { 0: isApplyCouponCode , 1: setIsApplyCouponCode  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    //process to payment button variable to diable or sppiner
    const { 0: isSubmittingProcessToPayement , 1: setIsSubmittingProcessToPayement  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    //define the mouse hover or not on package box
    const { 0: isHovering , 1: setIsHovering  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    //define first time scroll is true otherwise not scroll variable
    const { 0: firstTimeScrollTop , 1: setFirstTimeScrollTop  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    //open login and signup modal
    const { 0: userSignInSignUp , 1: setUserSignInSignUp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const PackageTh = ()=>{
        //if package count is less than 4 than we add blank th in table
        if ((packagesRecords === null || packagesRecords === void 0 ? void 0 : packagesRecords.length) && (packagesRecords === null || packagesRecords === void 0 ? void 0 : packagesRecords.length) < 4) {
            let lengthP = parseInt(4 - (packagesRecords === null || packagesRecords === void 0 ? void 0 : packagesRecords.length));
            let newThArr = Array(lengthP).fill(null).map((u, i)=>i
            );
            return (newThArr === null || newThArr === void 0 ? void 0 : newThArr.length) > 0 && newThArr.map((newA, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "border-0 align-top"
                }, index)
            );
        } else {
            return null;
        }
    };
    //use effect
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        let allPackages = await packagesListRecords(defaultSelectedCityId);
        //set packages list in variable
        setPackagesRecords(allPackages);
        //get all cities
        let clitiesListings = await citiesRecordListings();
        //set packages list in variable
        setCitiesListings(clitiesListings);
    }, []);
    //on change set selected city in local storage
    const citiesListHandleChange = async (selected)=>{
        await setSelectedCity(selected);
        // set selected city id
        setSelectedCityID((selected === null || selected === void 0 ? void 0 : selected.id) || "");
        //set the records
        let allPackages = await packagesListRecords(selected === null || selected === void 0 ? void 0 : selected.id);
        //set packages list in variable
        setPackagesRecords(allPackages);
    };
    //get packages listing records
    const packagesListRecords = async (city_id = "", plan_id = "")=>{
        try {
            var ref;
            let recordLimit = "";
            // if (isComboPackagePage) {//page is premium listing than we add limit of package 4
            //     recordLimit = 4
            // }
            const data = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    city_id: city_id,
                    package_id: plan_id,
                    limit: recordLimit
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/master-package-listing`, data);
            let PackageRecords = await res.json();
            return (PackageRecords === null || PackageRecords === void 0 ? void 0 : (ref = PackageRecords.data) === null || ref === void 0 ? void 0 : ref.packageslisting) || [];
        } catch (err) {
            return [];
        }
    };
    const citiesRecordListings = async ()=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    token: ""
                })
            };
            var APIpath = `${process.env.BASE_URL}/api/protect/all-cities-list`;
            const res = await fetch(APIpath, requestOptions);
            const resJson = await res.json();
            //console.log("DAYAYDAYAD---------------------------------------------", resJson)
            if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
                return resJson === null || resJson === void 0 ? void 0 : resJson.data;
            } else {
                return [];
            }
        } catch (err) {
            return [];
        }
    };
    //package detail page
    const packageBuyNow = (packageDetail)=>{
        console.log("status-----", status);
        if (isComboPackagePage && status !== "authenticated") {
            //user not authenticate than we open the signIn and signUp popup
            setUserSignInSignUp(true);
        } else {
            console.log("packageDetail----", packageDetail);
            if (packageDetail.business_id == 0) {
                //when business id is 0
                //set the detail object of package in variable
                setPackageBusinessDetail(packageDetail);
                //Open the plan buy now component
                setBusinessesConfirmModalHideShow(true);
            } else {
                var ref, ref23, ref24, ref25;
                //if business id is selected
                //if packages uses count is equal to no of user then we notifiy to user
                if (packageDetail.Business_package_count == packageDetail.no_of_users) {
                    setsubmitButtonAction("Notify Me"); // set for notify button
                }
                if (packageDetail.plan_duration == "monthly") {
                    //monthly amount
                    if (packageDetail.offer_amt_month && packageDetail.offer_amt_month > 0) {
                        var planAmount = packageDetail.offer_amt_month;
                    } else {
                        var planAmount = packageDetail.amount_monthly;
                    }
                } else {
                    //yearly amount
                    if (packageDetail.offer_amt_year && packageDetail.offer_amt_year > 0) {
                        var planAmount = packageDetail.offer_amt_year;
                    } else {
                        var planAmount = packageDetail.amount_year;
                    }
                }
                //const planAmount = packageDetail.plan_duration == 'monthly' ? packageDetail.amount_monthly : packageDetail.amount_year
                //set the plan amount
                packageDetail.plan_price = planAmount;
                //calculate the gst
                let gstPrice = planAmount * 18 / 100;
                packageDetail.gst = gstPrice;
                //set discount object
                packageDetail.discount = 0;
                //set user detail
                packageDetail.user_id = (session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.id) || 0;
                packageDetail.user_name = (session === null || session === void 0 ? void 0 : (ref23 = session.user) === null || ref23 === void 0 ? void 0 : ref23.name) || "";
                packageDetail.user_email = (session === null || session === void 0 ? void 0 : (ref24 = session.user) === null || ref24 === void 0 ? void 0 : ref24.email) || "";
                packageDetail.user_phone = (session === null || session === void 0 ? void 0 : (ref25 = session.user) === null || ref25 === void 0 ? void 0 : ref25.phone) || "";
                //set total payable amount
                packageDetail.total_payable_amount = planAmount + gstPrice;
                //set business city id in object
                packageDetail.listing_city_id = (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.city_id) ? businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.city_id : (packageDetail === null || packageDetail === void 0 ? void 0 : packageDetail.listing_city_id) || 0;
                //set the package city_id
                packageDetail.package_city_id = (packageDetail === null || packageDetail === void 0 ? void 0 : packageDetail.city_id) || "";
                //set the plan price + gst in variable
                let plan_price_with_gst = (parseFloat(packageDetail.plan_price) + parseFloat(packageDetail.gst)).toFixed(2);
                setPlanPriceWithGst(plan_price_with_gst);
                //set the detail object of package in variable
                setPackageBusinessDetail(packageDetail);
                if (setIsBuySubscriptionPackage != "") {
                    //set hide the other html from premium listing page
                    setIsBuySubscriptionPackage(true);
                }
                //true pay and review page
                setReviewAndPayPage(true);
                //window scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    };
    //onchange set
    const formFieldChange = async (e)=>{
        setFormError({});
        e.preventDefault();
        //var updateFormValues = { ...packageDetail, [e.target.name]: e.target.value }
        //setPackageBusinessDetail(updateFormValues);
        setPackageBusinessDetail((previous)=>({
                ...previous,
                [e.target.name]: e.target.value
            })
        );
    };
    //apply coupon code onchange value function
    const couponformFieldChange = async (e)=>{
        setFormError({}); //first time define the error blank with onchange event
        setPackageBusinessDetail((previous)=>({
                ...previous,
                [e.target.name]: e.target.value
            })
        );
        //set value in variable
        setCouponCodeVal(e.target.value);
    };
    //for apply coupon code
    const ApplyCouponCode = async ()=>{
        if (!couponCodeVal || couponCodeVal == "") {
            setFormError({
                ["coupon_code"]: "Please enter the coupon code."
            });
        } else {
            var ref;
            //setShowToast(false);
            const data = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                //body: JSON.stringify(packageBusinessDetail),
                body: JSON.stringify({
                    user_id: packageBusinessDetail.user_id,
                    coupon_code: couponCodeVal,
                    package_id: packageBusinessDetail.id,
                    listing_city_id: packageBusinessDetail.package_city_id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/apply-coupon-code-on-business`, data);
            const resJson = await res.json();
            if ((resJson === null || resJson === void 0 ? void 0 : (ref = resJson.data) === null || ref === void 0 ? void 0 : ref.status) == 200) {
                var ref26;
                //calculate the total payable amount
                // let plan_price_with_gst = parseFloat(packageBusinessDetail.plan_price) + parseFloat(packageBusinessDetail.gst)
                // set the coupon code calculation
                packageBusinessDetail.coupon_code = couponCodeVal;
                //calculate the coupon discount percentage
                let counponDiscountAmount = (planPriceWithGst * resJson.data.coupon_amount / 100).toFixed(2);
                packageBusinessDetail.discount = counponDiscountAmount;
                packageBusinessDetail.coupon_id = resJson.data.coupon_id;
                //discount + user wallet amount
                let discount_with_wallet = parseFloat(counponDiscountAmount) + parseFloat(userWalletTotalAmount);
                packageBusinessDetail.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(discount_with_wallet)).toFixed(2);
                //if payable amount getting in minus than we set 0 in payable amount
                if (Math.sign(packageBusinessDetail.total_payable_amount) === -1) {
                    packageBusinessDetail.total_payable_amount = 0.0;
                }
                await setPackageBusinessDetail(packageBusinessDetail);
                //set popup variable to show modal
                setPopUpMsg(resJson === null || resJson === void 0 ? void 0 : (ref26 = resJson.data) === null || ref26 === void 0 ? void 0 : ref26.msg);
                setPopupType("success");
                setPopupTitle("Success");
                //hide modal popup after 3 second
                setTimeout(function() {
                    setPopUpMsg("");
                }, 3000);
                //set true apply coupon code
                setIsApplyCouponCode(true);
            } else {
                packageBusinessDetail.coupon_code = "";
                packageBusinessDetail.discount = 0;
                packageBusinessDetail.coupon_id = "";
                //calculate the total payable amount
                // let plan_price_with_gst = parseFloat(packageBusinessDetail.plan_price) + parseFloat(packageBusinessDetail.gst)
                packageBusinessDetail.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(userWalletTotalAmount)).toFixed(2);
                //if payable amount getting in minus than we set 0 in payable amount
                if (Math.sign(packageBusinessDetail.total_payable_amount) === -1) {
                    packageBusinessDetail.total_payable_amount = 0.0;
                }
                //set the details
                await setPackageBusinessDetail(packageBusinessDetail);
                //set popup variable to hide modal
                setPopUpMsg(resJson === null || resJson === void 0 ? void 0 : resJson.msg);
                setPopupType("error");
                setPopupTitle("Error");
                //set true apply coupon code
                setIsApplyCouponCode(false);
            }
        }
    };
    //for remove coupon code
    const RemoveCouponCode = async (e)=>{
        //reset the coupon variable
        packageBusinessDetail.coupon_code = "";
        packageBusinessDetail.discount = 0;
        packageBusinessDetail.coupon_id = "";
        //calculate the total payable amount
        // let plan_price_with_gst = parseFloat(packageBusinessDetail.plan_price) + parseFloat(packageBusinessDetail.gst)
        //update the total payable amount object
        packageBusinessDetail.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(userWalletTotalAmount)).toFixed(2);
        //if payable amount getting in minus than we set 0 in payable amount
        if (Math.sign(packageBusinessDetail.total_payable_amount) === -1) {
            packageBusinessDetail.total_payable_amount = 0.0;
        }
        //set false when not apply the coupon code
        setIsApplyCouponCode(false);
    };
    //for apply user wallet
    const applyUserWallet = async (e)=>{
        let useWalletAmountChk = e.target.checked;
        let user_wallet_total_amount = 0;
        //add gst + plan price
        // let plan_price_with_gst = parseFloat(packageBusinessDetail.plan_price) + parseFloat(packageBusinessDetail.gst)
        if (useWalletAmountChk) {
            //use user wallet amount
            //set wallet amount
            user_wallet_total_amount = await getUserWalletAmount();
            setUserWalletTotalAmount(user_wallet_total_amount);
            packageBusinessDetail.user_total_wallet_amount = user_wallet_total_amount;
            //calculate the total payable amount
            //discount + user wallet amount
            let discount_with_wallet = parseFloat(packageBusinessDetail.discount) + parseFloat(user_wallet_total_amount);
            //deduct wallet amount from total
            packageBusinessDetail.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(discount_with_wallet)).toFixed(2);
            //if payable amount getting in minus than we set 0 in payable amount
            if (Math.sign(packageBusinessDetail.total_payable_amount) === -1) {
                packageBusinessDetail.total_payable_amount = 0.0;
            }
        } else {
            //set wallet amount
            setUserWalletTotalAmount(user_wallet_total_amount);
            packageBusinessDetail.user_total_wallet_amount = user_wallet_total_amount;
            //deduct wallet amount from total
            packageBusinessDetail.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(packageBusinessDetail.discount)).toFixed(2);
        }
        //set true or false for use wallet or not
        setIsApplyUserWallet(useWalletAmountChk);
    };
    //for get user total amount
    const getUserWalletAmount = async ()=>{
        const getwallet = await fetch(process.env.BASE_URL + "/api/protect/get-user-wallet-amount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await getwallet.json();
        return result.wallet_amount;
    };
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    //choose another plan
    const anotherPlan = async ()=>{
        var ref, ref27, ref28, ref29;
        //set the businesss id in variable
        setPackageBusinessID(businessDetail === null || businessDetail === void 0 ? void 0 : (ref = businessDetail.activePlan) === null || ref === void 0 ? void 0 : ref.business_id);
        //set the other variable in object
        businessDetail.is_another_plan = 1;
        businessDetail.business_id = businessDetail === null || businessDetail === void 0 ? void 0 : (ref27 = businessDetail.activePlan) === null || ref27 === void 0 ? void 0 : ref27.business_id;
        //businessDetail.id = businessDetail?.activePlan?.business_id
        businessDetail.city_id = businessDetail === null || businessDetail === void 0 ? void 0 : (ref28 = businessDetail.activePlan) === null || ref28 === void 0 ? void 0 : ref28.city_id;
        businessDetail.is_upgrade_plan = 0;
        //setBusinessDetail({ is_another_plan: 1, business_id: businessDetail?.activePlan?.business_id, city_id: businessDetail?.activePlan?.city_id })
        //get new packages listing not include current plan
        let allPackages = await packagesListRecords(defaultSelectedCityId, businessDetail === null || businessDetail === void 0 ? void 0 : (ref29 = businessDetail.activePlan) === null || ref29 === void 0 ? void 0 : ref29.plan_id);
        //set packages list in variable
        setPackagesRecords(allPackages);
        businessDetail.activePlan = {}; //blank the current active plan object when select another plan
        setIsUpgradePlan(0);
    };
    //process to payment with same plan
    const processToPayment = async ()=>{
        var ref, ref30, ref31, ref32;
        //console.log('same plan---------------')
        //let getPlanDetail = await getPackageDetailById(businessDetail?.activePlan?.plan_id, businessDetail?.activePlan?.city_id)
        let getPlanDetail = await getPackageDetailById(businessDetail === null || businessDetail === void 0 ? void 0 : (ref = businessDetail.activePlan) === null || ref === void 0 ? void 0 : ref.plan_id);
        let businessPlanDetail = getPlanDetail[0];
        businessPlanDetail.plan_duration = (businessDetail === null || businessDetail === void 0 ? void 0 : (ref30 = businessDetail.activePlan) === null || ref30 === void 0 ? void 0 : ref30.package_type) == "0" ? "monthly" : "yearly";
        businessPlanDetail.business_id = businessDetail === null || businessDetail === void 0 ? void 0 : (ref31 = businessDetail.activePlan) === null || ref31 === void 0 ? void 0 : ref31.business_id;
        //set business city id in object
        businessDetail.city_id = (businessDetail === null || businessDetail === void 0 ? void 0 : (ref32 = businessDetail.activePlan) === null || ref32 === void 0 ? void 0 : ref32.city_id) || 0;
        //open review and pay page
        await packageBuyNow(businessPlanDetail);
    // setProcessToPay(1)
    };
    //get package detail by plan id
    const getPackageDetailById = async (plan_id)=>{
        try {
            var ref;
            const data = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: plan_id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/business-package-by-id`, data);
            let PackageRecords = await res.json();
            return (PackageRecords === null || PackageRecords === void 0 ? void 0 : (ref = PackageRecords.data) === null || ref === void 0 ? void 0 : ref.packagesDetail) || [];
        } catch (err) {
            return [];
        }
    };
    //onclick for Make payment or notify button function
    const handlePaymentSubmit = async ()=>{
        // make the payment
        //onclick start the sppiner on the button
        setIsSubmittingProcessToPayement(true);
        if (submitButtonAction == "Make Payment") {
            //Go to razorpay payment gateway
            let total_payable_amount_without_deduct_wallet = (parseFloat(planPriceWithGst) - parseFloat(packageBusinessDetail.discount)).toFixed(2);
            if (packageBusinessDetail.total_payable_amount == 0.0) {
                // all payment from user wallet
                setIsLoadingShimmer(true); //show effect
                packageBusinessDetail.is_payment_from = "wallet"; // It means complete payment from wallet
                //set the total deduct amount from user wallet
                packageBusinessDetail.deduct_total_user_wallet_amount = total_payable_amount_without_deduct_wallet;
                const data = {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(packageBusinessDetail)
                };
                const res = await fetch(`${process.env.BASE_URL}/api/protect/save-buy-package-listing`, data);
                const resJson = await res.json();
                if (resJson.status == 200) {
                    setIsLoadingShimmer(false); //hide effect
                    //set popup variable to show modal
                    setPopUpMsg("Your request has been successfully submitted.");
                    setPopupType("success");
                    setPopupTitle("Success");
                    //redirect to the packages page
                    setTimeout(function() {
                        next_router__WEBPACK_IMPORTED_MODULE_21___default().router.push(redirectPath);
                    }, 1000);
                } else {
                    return "";
                }
            } else {
                //payment via razorpay
                packageBusinessDetail.is_payment_from = "razorpay"; // It means some payment from wallet and some online
                packageBusinessDetail.deduct_total_user_wallet_amount = userWalletTotalAmount;
                //got to razorpay for payment
                const result = await fetch(process.env.BASE_URL + "/api/protect/razorpay", {
                    method: "POST",
                    body: JSON.stringify({
                        plan_id: packageBusinessDetail.id,
                        plan_amount: packageBusinessDetail.total_payable_amount
                    })
                });
                const Razdata = await result.json();
                setIsSubmittingProcessToPayement(false);
                if (Razdata.status == 200) {
                    packageBusinessDetail.transaction_id = Razdata.data.id;
                    console.log("Yess coming");
                    const options = {
                        key: process.env.RAZORPAY_KEY_ID,
                        currency: Razdata.data.currency,
                        amount: Razdata.data.amount,
                        name: packageBusinessDetail.user_name,
                        description: "Business Plan Payment",
                        image: process.env.BASE_URL + "/images/dialmenow_company_logo.png",
                        order_id: Razdata.data.id,
                        notes: {
                            key: packageBusinessDetail.business_id,
                            type: "Paid Listing"
                        },
                        handler: async function(response) {
                            //set the razorpay payment id in object
                            packageBusinessDetail = {
                                ...packageBusinessDetail,
                                ["razorpay_payment_id"]: response === null || response === void 0 ? void 0 : response.razorpay_payment_id
                            };
                            //End
                            setIsLoadingShimmer(true); //show effect
                            const data = {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(packageBusinessDetail)
                            };
                            const res = await fetch(`${process.env.BASE_URL}/api/protect/save-buy-package-listing`, data);
                            const resJson = await res.json();
                            if (resJson.status == 200) {
                                //set popup variable to show modal
                                setPopUpMsg("Your request has been successfully submitted.");
                                setPopupType("success");
                                setPopupTitle("Success");
                                //refresh the business listings after success
                                if (refreshBusinessListings && refreshBusinessListings != "") {
                                    await refreshBusinessListings();
                                }
                                //redirect to the packages page
                                setTimeout(function() {
                                    next_router__WEBPACK_IMPORTED_MODULE_21___default().router.push(redirectPath);
                                }, 1000);
                            } else {
                                setIsLoadingShimmer(false); //hide effect
                                return "";
                            }
                        },
                        prefill: {
                            name: packageBusinessDetail.user_name,
                            email: packageBusinessDetail.user_email,
                            contact: packageBusinessDetail.user_phone
                        }
                    };
                    const paymentObject = new window.Razorpay(options);
                    paymentObject.open();
                }
            }
        } else {
            //Notify me
            setIsLoadingShimmer(true); //show effect
            const data = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    package_id: packageBusinessDetail.id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/save-package-notify`, data);
            const resJson = await res.json();
            //console.log(resJson)
            setIsLoadingShimmer(false); //hide effect
            if (resJson.status == 200) {
                setIsSubmittingProcessToPayement(false);
                //set popup variable to show modal
                setPopUpMsg("Your request has been successfully submitted.");
                setPopupType("success");
                setPopupTitle("Success");
                //redirect to the packages page
                setTimeout(function() {
                    next_router__WEBPACK_IMPORTED_MODULE_21___default().router.push(redirectPath);
                }, 1000);
            } else {
                setIsLoadingShimmer(false); //hide effect
                return "";
            }
        }
    };
    //custom style
    const customStyles = {
        control: (base, state)=>({
                ...base,
                border: "0",
                padding: "0",
                minHeight: "40px !important",
                background: "#fff",
                borderRadius: "8px",
                border: state.isFocused ? 0 : 0,
                // This line disable the blue border
                boxShadow: state.isFocused ? 0 : 0,
                "&:hover": {
                    border: state.isFocused ? 0 : 0
                }
            })
    };
    //load razorpay js  script
    const loadScript = (src)=>{
        return new Promise((resolve)=>{
            const script = document.createElement("script");
            script.src = src;
            script.onload = ()=>{
                resolve(true);
            };
            script.onerror = ()=>{
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });
    //hover out from packages box
    const handleMouseOut = ()=>{
        setIsHovering(false);
    };
    //scroll top to particular ID
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if ((reviewAndPayPage || isUpgradePlan == 1) && firstTimeScrollTop) {
            setFirstTimeScrollTop(false);
            if (reviewAndPayPage) {
                var scrollTopId = "pay-and-review";
            } else if (isUpgradePlan == 1) {
                var scrollTopId = "upgrade-plan-div";
            }
            //scroll top to particular id
            window.scrollTo({
                top: document.getElementById(scrollTopId).offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
    // Render the pay and review page
    if (reviewAndPayPage) {
        //For pay and review page
        if (isLoadingShimmer) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        message: popUpMsg,
                        title: popupTitle,
                        status: true,
                        setMessage: setPopUpMsg,
                        type: popupType
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shimmer_paymentSuccessLoad__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {})
                ]
            });
        } else {
            var ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        message: popUpMsg,
                        title: popupTitle,
                        status: true,
                        setMessage: setPopUpMsg,
                        type: popupType
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ReviewPay)}`,
                        id: "pay-and-review",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ReviewPayHead)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().Backpage)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "#!",
                                            passHref: true,
                                            prefetch: false,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-arrow-long-left"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "mb-0 ",
                                        children: "Review & Pay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        lg: 7,
                                        md: 7,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().CustomerInfoReview)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "Customer Information"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                            md: 6,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                    children: [
                                                                        "Name",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "\xa0*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), {
                                                                    size: "lg",
                                                                    ...register("company"),
                                                                    placeholder: "Enter company name",
                                                                    name: "company",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.company !== undefined ? "is-invalid" : ""}`,
                                                                    disabled: (session === null || session === void 0 ? void 0 : session.user) && (session === null || session === void 0 ? void 0 : (ref2 = session.user) === null || ref2 === void 0 ? void 0 : ref2.id) > 0 ? true : false,
                                                                    value: (session === null || session === void 0 ? void 0 : session.user) && (session === null || session === void 0 ? void 0 : (ref3 = session.user) === null || ref3 === void 0 ? void 0 : ref3.id) > 0 ? session === null || session === void 0 ? void 0 : (ref4 = session.user) === null || ref4 === void 0 ? void 0 : ref4.name : ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                            md: 6,
                                                            className: "mt-md-0 mt-sm-3 mt-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                    children: [
                                                                        "Mobile No",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "\xa0*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), {
                                                                    size: "lg",
                                                                    ...register("company"),
                                                                    placeholder: "Enter mobile no",
                                                                    name: "company",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.company !== undefined ? "is-invalid" : ""}`,
                                                                    disabled: (session === null || session === void 0 ? void 0 : session.user) && (session === null || session === void 0 ? void 0 : (ref5 = session.user) === null || ref5 === void 0 ? void 0 : ref5.id) > 0 ? true : false,
                                                                    value: (session === null || session === void 0 ? void 0 : session.user) && (session === null || session === void 0 ? void 0 : (ref6 = session.user) === null || ref6 === void 0 ? void 0 : ref6.id) > 0 ? session === null || session === void 0 ? void 0 : (ref7 = session.user) === null || ref7 === void 0 ? void 0 : ref7.phone : ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                            md: 12,
                                                            className: "mt-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), {
                                                                    size: "lg",
                                                                    ...register("company"),
                                                                    placeholder: "Enter email",
                                                                    name: "company",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.company !== undefined ? "is-invalid" : ""}`,
                                                                    disabled: (session === null || session === void 0 ? void 0 : session.user) && (session === null || session === void 0 ? void 0 : (ref8 = session.user) === null || ref8 === void 0 ? void 0 : ref8.id) > 0 ? true : false,
                                                                    value: (session === null || session === void 0 ? void 0 : session.user) && (session === null || session === void 0 ? void 0 : (ref9 = session.user) === null || ref9 === void 0 ? void 0 : ref9.id) > 0 ? session === null || session === void 0 ? void 0 : (ref10 = session.user) === null || ref10 === void 0 ? void 0 : ref10.email : ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                            md: 12,
                                                            className: "mt-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                    children: "City"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), {
                                                                    size: "lg",
                                                                    ...register("company"),
                                                                    placeholder: "City",
                                                                    name: "company",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.company !== undefined ? "is-invalid" : ""}`,
                                                                    disabled: (session === null || session === void 0 ? void 0 : session.user) && (session === null || session === void 0 ? void 0 : (ref11 = session.user) === null || ref11 === void 0 ? void 0 : ref11.id) > 0 ? true : false,
                                                                    value: (props === null || props === void 0 ? void 0 : (ref12 = props.defaultCityRecords) === null || ref12 === void 0 ? void 0 : ref12.id) ? props === null || props === void 0 ? void 0 : (ref13 = props.defaultCityRecords) === null || ref13 === void 0 ? void 0 : ref13.label : ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                            md: 12,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-3 text-end",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    size: "md",
                                                                    variant: "primary ",
                                                                    className: "mt-0",
                                                                    onClick: handlePaymentSubmit,
                                                                    disabled: isSubmittingProcessToPayement,
                                                                    children: [
                                                                        isSubmittingProcessToPayement && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            animation: "border",
                                                                            size: "sm",
                                                                            className: "me-2"
                                                                        }),
                                                                        submitButtonAction
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        lg: 5,
                                        md: 5,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().CustomerInfoReview)} ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().CustomerSubscription)} `,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        children: "Your Subscription"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        children: "Apply Coupon"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "d-flex justify-content-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ApplyLeft)}`,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), {
                                                                        type: "text",
                                                                        size: "lg",
                                                                        ...register("coupon_code"),
                                                                        placeholder: "Coupon code",
                                                                        name: "coupon_code",
                                                                        onChange: couponformFieldChange,
                                                                        className: `form-control ${formError.coupon_code !== undefined ? "is-invalid" : ""}`
                                                                    }),
                                                                    formError.coupon_code !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: [
                                                                            " ",
                                                                            formError.coupon_code
                                                                        ]
                                                                    }) : "",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().CuponIcon)}`
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ApplyLeftBtn)}`,
                                                                children: isApplyCouponCode ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    variant: "primary",
                                                                    onClick: RemoveCouponCode,
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-x"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    variant: "primary",
                                                                    onClick: ApplyCouponCode,
                                                                    children: [
                                                                        " ",
                                                                        "Apply",
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "mt-2",
                                                        children: "Wallet"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "d-flex justify-content-between",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ApplyLeft)}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Check), {
                                                                    type: "checkbox",
                                                                    id: "book-now-url",
                                                                    label: "use wallet",
                                                                    className: "mb-0",
                                                                    ...register("use_wallet_amount"),
                                                                    onClick: (e)=>{
                                                                        applyUserWallet(e);
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: isApplyUserWallet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        "-\u20B9",
                                                                        " ",
                                                                        formatter.format(packageBusinessDetail.user_total_wallet_amount)
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PackageTotal)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                children: "Premium"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                                responsive: true,
                                                                borderless: true,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: "Subtotal"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                                                    children: [
                                                                                        "\u20B9",
                                                                                        " ",
                                                                                        formatter.format(packageBusinessDetail.plan_price)
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                        children: "GST 18%"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                                                        children: [
                                                                                            "\u20B9 ",
                                                                                            formatter.format(packageBusinessDetail.gst)
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            isApplyCouponCode && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                        children: "Discount"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                                                        children: [
                                                                                            "-\u20B9",
                                                                                            " ",
                                                                                            formatter.format(packageBusinessDetail.discount)
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().TotalPay)}`,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "d-flex justify-content-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                            className: "mb-0",
                                                                            children: "Total Payable Amount"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                            className: "mb-0",
                                                                            children: [
                                                                                "\u20B9",
                                                                                " ",
                                                                                formatter.format(packageBusinessDetail.total_payable_amount)
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `text-center mt-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PaymentGateway)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                    src: "/images/MyAccount/razorpay.svg",
                                                    height: "25",
                                                    width: "114"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            });
        }
    } else if (isUpgradePlan == 1) {
        var ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `d-flex  align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ProfileHeading)}`,
                    id: "upgrade-plan-div",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "#!",
                            passHref: true,
                            prefetch: false,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().Backpage)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fi-arrow-long-left "
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: " mb-0 ",
                            children: "Upgrade Package"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `  ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ActivePackagesList)}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ActivePackagesLeft)}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9___default()), {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        md: 9,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: businessDetail === null || businessDetail === void 0 ? void 0 : (ref14 = businessDetail.activePlan) === null || ref14 === void 0 ? void 0 : ref14.business_name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                className: "mb-1",
                                                children: [
                                                    "Active Plan - ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: businessDetail === null || businessDetail === void 0 ? void 0 : (ref15 = businessDetail.activePlan) === null || ref15 === void 0 ? void 0 : ref15.name
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        md: 3,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().UpgradePlanRight)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        "Price -",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: businessDetail === null || businessDetail === void 0 ? void 0 : (ref16 = businessDetail.activePlan) === null || ref16 === void 0 ? void 0 : ref16.plan_price
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        "Type -",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: (businessDetail === null || businessDetail === void 0 ? void 0 : (ref17 = businessDetail.activePlan) === null || ref17 === void 0 ? void 0 : ref17.package_type) == "0" ? "Monthly" : "Yearly"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-0",
                                children: businessDetail === null || businessDetail === void 0 ? void 0 : (ref18 = businessDetail.activePlan) === null || ref18 === void 0 ? void 0 : ref18.description
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                className: `mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ExpirePlan)}`,
                                children: [
                                    "Your current will expire on",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: businessDetail === null || businessDetail === void 0 ? void 0 : (ref19 = businessDetail.activePlan) === null || ref19 === void 0 ? void 0 : ref19.ends_on
                                    })
                                ]
                            }),
                            (businessDetail === null || businessDetail === void 0 ? void 0 : (ref20 = businessDetail.activePlan) === null || ref20 === void 0 ? void 0 : ref20.remaining_days) < 15 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: `mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PlanExpired)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fi-alert-circle me-2"
                                    }),
                                    " Your plan expired within ",
                                    businessDetail === null || businessDetail === void 0 ? void 0 : (ref21 = businessDetail.activePlan) === null || ref21 === void 0 ? void 0 : ref21.remaining_days,
                                    " days. Please upgrade your plan."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex pt-2 mt-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                            onClick: anotherPlan,
                            size: "md",
                            variant: "outline-secondary",
                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PreviousStep)}`,
                            children: "Choose another plan"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                            onClick: processToPayment,
                            size: "md",
                            variant: "primary ms-auto",
                            className: "mt-0",
                            children: "Proceed to pay"
                        })
                    ]
                })
            ]
        });
    } else {
        // for package listing page
        if (isComboPackagePage) {
            //for premium listing page business packages
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        message: popUpMsg,
                        title: popupTitle,
                        status: true,
                        setMessage: setPopUpMsg,
                        type: popupType
                    }),
                    userSignInSignUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_22__["default"], {
                        session: session,
                        show: true,
                        onHide: ()=>setUserSignInSignUp(false)
                        ,
                        callbackUrl: "/premium-listing"
                    }),
                    packageBusinessID == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_businessListingModal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        centered: true,
                        size: "lg",
                        pillButtons: true,
                        show: businessesConfirmModalHideShow,
                        onHide: handleBusinessesConfirmModalClose,
                        onSwap: handleBusinessesConfirmModalShow,
                        setPackageBusinessID: setPackageBusinessID,
                        packageBusinessDetail: packageBusinessDetail,
                        packageBuyNow: packageBuyNow
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `mt-lg-0 mt-md-0 mt-sm-3 mt-3 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().SubscriptionPackages)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `d-lg-flex d-md-flex d-sm-block d-block ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().SubscriptionPackagehead)}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `position-relative ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PackageCity)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        //options={props.citiesData}
                                        options: citiesListings,
                                        defaultValue: selectedCityID,
                                        closeMenuOnSelect: true,
                                        hideSelectedOptions: false,
                                        onChange: citiesListHandleChange,
                                        allowSelectAll: false,
                                        value: selectedCity,
                                        ShowSelectAll: false,
                                        volume: selectedCity,
                                        className: `form-control p-0 ps-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().FormControl) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().FormControlSecond)}`,
                                        isSearchable: true,
                                        styles: customStyles,
                                        isDisabled: (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) > 0
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().searchIconPinPackage)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-geo"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `mx-3 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().SubscriptionPackages)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_12___default()), {
                            responsive: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    children: activeKey == "second" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                style: {
                                                    minWidth: "220px"
                                                },
                                                className: "border-0 align-top"
                                            }),
                                            (packagesRecords === null || packagesRecords === void 0 ? void 0 : packagesRecords.length) > 0 && packagesRecords.map((annuallyPackagelist, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_BusinessPackageCard__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                    title: annuallyPackagelist.name,
                                                    id: annuallyPackagelist.id,
                                                    price: `₹ ${annuallyPackagelist.amount_year}`,
                                                    offerPrice: annuallyPackagelist.offer_amt_month,
                                                    period: "year",
                                                    description: annuallyPackagelist.description,
                                                    noOfUsers: annuallyPackagelist.no_of_users,
                                                    BusinessPackageCount: annuallyPackagelist.Business_package_count,
                                                    isBest: annuallyPackagelist.is_best == "1" ? true : false,
                                                    button: {
                                                        href: "",
                                                        title: "Buy Now",
                                                        variant: "outline-primary rounded-pill",
                                                        props: {
                                                            onClick: ()=>{
                                                                annuallyPackagelist = {
                                                                    ...annuallyPackagelist,
                                                                    ["plan_duration"]: "yearly",
                                                                    ["business_id"]: packageBusinessID
                                                                };
                                                                packageBuyNow(annuallyPackagelist);
                                                            }
                                                        }
                                                    },
                                                    isComboPackagePage: isComboPackagePage,
                                                    className: `overflow-hidden border-0 ss2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PricingPlanCard)} ${annuallyPackagelist.is_best == 1 && isHovering ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PricingPlanCardcAtive) : ""}`
                                                }, "y-" + index)
                                            )
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PackageBody)}`,
                                    children: packageFeatures.map((feature, index)=>{
                                        // {console.log('feature---->>>',feature)}
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: feature
                                                }),
                                                (packagesRecords === null || packagesRecords === void 0 ? void 0 : packagesRecords.length) > 0 && packagesRecords.map((packageRec, index111)=>{
                                                    if (index == 0 && index111 == 0 || index == 1 && index111 == 0 || index == 1 && index111 == 1 || index == 1 && index111 == 2 || index == 12 && index111 == 0 || index == 13 && index111 == 0 || index == 14 && index111 == 0 || index == 15 && index111 == 0) {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                src: "/social/arrow.png",
                                                                height: "20",
                                                                width: "20",
                                                                loading: "eager"
                                                            })
                                                        });
                                                    } else if (index == 0 && index111 == 2) {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Above Silver"
                                                            })
                                                        });
                                                    } else if (index == 0 && index111 == 3) {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Above Gold and Silver"
                                                            })
                                                        });
                                                    } else if (index == 11 && index111 == 0) {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "3"
                                                            })
                                                        });
                                                    } else if (index == 11 && index111 == 1 || index == 11 && index111 == 2 || index == 11 && index111 == 3) {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "10"
                                                            })
                                                        });
                                                    } else {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check"
                                                            })
                                                        });
                                                    }
                                                })
                                            ]
                                        }, index);
                                    })
                                })
                            ]
                        })
                    })
                ]
            });
        } else {
            // other page card box
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        message: popUpMsg,
                        title: popupTitle,
                        status: true,
                        setMessage: setPopUpMsg,
                        type: popupType
                    }),
                    packageBusinessID == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_businessListingModal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        centered: true,
                        size: "lg",
                        pillButtons: true,
                        show: businessesConfirmModalHideShow,
                        onHide: handleBusinessesConfirmModalClose,
                        onSwap: handleBusinessesConfirmModalShow,
                        setPackageBusinessID: setPackageBusinessID,
                        packageBusinessDetail: packageBusinessDetail,
                        packageBuyNow: packageBuyNow
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PackageList)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7___default().Container), {
                            id: "left-tabs-example",
                            defaultActiveKey: "first",
                            activeKey: activeKey,
                            onSelect: (key)=>setActiveKey(key)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: packageBusinessID > 0 || (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_another_plan) && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_another_plan) == 1 ? `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ProfileHeading)} ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().ProfileHeadingPackage)}` : "",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        className: "align-items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                lg: 8,
                                                md: 6,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex align-items-center",
                                                    children: [
                                                        (packageBusinessID > 0 || (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_another_plan) && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_another_plan) == 1) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "#!",
                                                            passHref: true,
                                                            prefetch: false,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().Backpage)} ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().NewBackpage)}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-arrow-long-left"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "h3 mb-md-0 mb-sm-2 mb-3 mt-1",
                                                            children: "Pick the perfect plan"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                lg: 4,
                                                md: 6,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "d-sm-flex d-block",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `position-relative ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PackageCity)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                //options={props.citiesData}
                                                                options: citiesListings,
                                                                defaultValue: selectedCityID,
                                                                closeMenuOnSelect: true,
                                                                hideSelectedOptions: false,
                                                                onChange: citiesListHandleChange,
                                                                allowSelectAll: false,
                                                                value: selectedCity,
                                                                ShowSelectAll: false,
                                                                volume: selectedCity,
                                                                className: `form-control p-0  ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().FormControl) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().FormControlSecond)}`,
                                                                isSearchable: true,
                                                                styles: customStyles,
                                                                isDisabled: (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) > 0
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().searchIconPinPackage)}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-geo"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        sm: 12,
                                        md: 12,
                                        className: "mb-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7___default().Content), {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7___default().Pane), {
                                                eventKey: "second",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: (packagesRecords === null || packagesRecords === void 0 ? void 0 : packagesRecords.length) > 0 && packagesRecords.map((annuallyPackagelist, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                            lg: 3,
                                                            md: 4,
                                                            sm: 6,
                                                            className: "mt-md-5 mt-sm-3 mt-3",
                                                            onMouseOut: handleMouseOut,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_BusinessPackageCard__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                title: annuallyPackagelist.name,
                                                                price: `₹ ${annuallyPackagelist.amount_year}`,
                                                                period: "year",
                                                                description: annuallyPackagelist.description,
                                                                noOfUsers: annuallyPackagelist.no_of_users,
                                                                BusinessPackageCount: annuallyPackagelist.Business_package_count,
                                                                isBest: annuallyPackagelist.is_best == "1" ? true : false,
                                                                button: {
                                                                    href: "",
                                                                    title: "Buy Now",
                                                                    variant: "outline-primary rounded-pill",
                                                                    props: {
                                                                        onClick: ()=>{
                                                                            annuallyPackagelist = {
                                                                                ...annuallyPackagelist,
                                                                                ["plan_duration"]: "yearly",
                                                                                ["business_id"]: packageBusinessID
                                                                            };
                                                                            packageBuyNow(annuallyPackagelist);
                                                                        }
                                                                    }
                                                                },
                                                                isComboPackagePage: isComboPackagePage,
                                                                className: `overflow-hidden border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PricingPlanCard)} ${annuallyPackagelist.is_best == 1 && isHovering ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_24___default().PricingPlanCardcAtive) : ""}`
                                                            }, "y-" + index)
                                                        })
                                                    )
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessPackageListing);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_shimmer_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9777);
/* harmony import */ var react_shimmer_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_shimmer_effects__WEBPACK_IMPORTED_MODULE_1__);

//import React from "react";

const PaymentPageShimmer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_shimmer_effects__WEBPACK_IMPORTED_MODULE_1__.ShimmerSectionHeader, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_shimmer_effects__WEBPACK_IMPORTED_MODULE_1__.ShimmerSectionHeader, {
                center: true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentPageShimmer);


/***/ })

};
;