"use strict";
(() => {
var exports = {};
exports.id = 8988;
exports.ids = [8988];
exports.modules = {

/***/ 9346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);




const PackageCard = ({ BusinessPackageCount , title , price , offerPrice , period , description , noOfUsers , button , light , featured , className , isBest , ...props })=>{
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...props,
        className: containerClass,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card-body p-0",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_3___default().planHead)}`,
                    children: [
                        title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: `h4 `,
                            children: title
                        }),
                        price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_3___default().PlanPrice)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: offerPrice ? "\u20B9" + offerPrice : ""
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: offerPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                        children: price
                                    }) : price
                                }),
                                " RS/",
                                period
                            ]
                        }),
                        isBest && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_3___default().PlanBest)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                src: "/images/advertise/planBestImg.svg",
                                height: "19",
                                width: "52"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_3___default().planBottom)}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "list-unstyled d-block mb-0 mx-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-0",
                                children: description
                            })
                        }),
                        button && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-0 border-0 mt-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `text-center`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    ...button.props,
                                    type: "button",
                                    className: `btn ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_3___default().BuyNowBtn)}`,
                                    children: noOfUsers == BusinessPackageCount ? "Notify Me" : "Buy Now"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PackageCard);


/***/ }),

/***/ 4030:
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
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9025);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1553);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3387);
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5698);
/* harmony import */ var _components_packages_PackageCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9346);
/* harmony import */ var _components_MySelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6256);
/* harmony import */ var _businessListingModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8877);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5641);
/* harmony import */ var _components_MessageModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4301);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _businessListingModal__WEBPACK_IMPORTED_MODULE_16__, react_hook_form__WEBPACK_IMPORTED_MODULE_18__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _businessListingModal__WEBPACK_IMPORTED_MODULE_16__, react_hook_form__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























const PackageListing = ({ businessDetail ={} , ...props })=>{
    var ref22, ref1;
    console.log("-----props----", props);
    const { 0: activeKey , 1: setActiveKey  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("first");
    //defined packages listing variable
    const { 0: packagesRecords , 1: setPackagesRecords  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
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
    const { 0: couponCodeVal , 1: setCouponCodeVal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        coupon_code: ""
    });
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
    //declear the submit button action  
    const { 0: submitButtonAction , 1: setsubmitButtonAction  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Make Payment");
    const { 0: reviewAndPayPage , 1: setReviewAndPayPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    //set plan is upgrage variable
    const { 0: isUpgradePlan , 1: setIsUpgradePlan  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_upgrade_plan) ? businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_upgrade_plan : 0);
    //get user session 
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_17__.useSession)(); // for session check
    //use form
    const { register , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_18__.useForm)();
    //form validation error variable
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    //declear the popup modal variable
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: popupType , 1: setPopupType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("success");
    const { 0: popupTitle , 1: setPopupTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Success");
    //use effect
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        let allPackages = await packagesListRecords(defaultSelectedCityId);
        //set packages list in variable
        setPackagesRecords(allPackages);
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
    const packagesListRecords = async (city_id = "")=>{
        try {
            var ref;
            const data = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    city_id: city_id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/master-package-listing`, data);
            let PackageRecords = await res.json();
            return (PackageRecords === null || PackageRecords === void 0 ? void 0 : (ref = PackageRecords.data) === null || ref === void 0 ? void 0 : ref.packageslisting) || [];
        } catch (err) {
            return [];
        }
    };
    //package detail page
    const packageBuyNow = (packageDetail)=>{
        console.log("packageDetail==>>", packageDetail);
        if (packageDetail.business_id == 0) {
            //set the detail object of package in variable
            setPackageBusinessDetail(packageDetail);
            //Open the plan buy now component            
            setBusinessesConfirmModalHideShow(true);
        } else {
            var ref, ref23, ref24, ref25;
            //if packages uses count is equal to no of user then we notifiy to user
            if (packageDetail.Business_package_count == packageDetail.no_of_users) {
                setsubmitButtonAction("Notify Me") // set for notify button                
                ;
            }
            if (packageDetail.plan_duration == "monthly") {
                if (packageDetail.offer_amt_month && packageDetail.offer_amt_month > 0) {
                    var planAmount = packageDetail.offer_amt_month;
                } else {
                    var planAmount = packageDetail.amount_monthly;
                }
            } else {
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
            packageDetail.listing_city_id = (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.city_id) || 0;
            //set the detail object of package in variable
            setPackageBusinessDetail(packageDetail);
            //true pay and review page
            setReviewAndPayPage(true);
        }
    /*
         //Open the plan buy now component       
         setHideShowPlanBuyNowPage(true)
         //set the plan detail
         setPackageBusinessDetail(packageDetail)*/ };
    const handlePaymentSubmit = async ()=>{
        // make the payment
        console.log("packageBusinessDetail.===>>>", packageBusinessDetail);
        if (submitButtonAction == "Make Payment") {
            const result = await fetch(process.env.BASE_URL + "/api/protect/razorpay", {
                method: "POST",
                body: JSON.stringify({
                    plan_id: packageBusinessDetail.id,
                    plan_amount: packageBusinessDetail.total_payable_amount
                })
            });
            const Razdata = await result.json();
            console.log("Razdata->>>>>>>", Razdata);
            if (Razdata.status == 200) {
                packageBusinessDetail.transaction_id = Razdata.data.id;
                console.log("Yess coming");
                const options = {
                    key: process.env.RAZORPAY_KEY_ID,
                    currency: Razdata.data.currency,
                    amount: Razdata.data.amount,
                    name: packageBusinessDetail.user_name,
                    description: "Advertisement Plan Payment",
                    image: process.env.BASE_URL + "/images/dialmenow_company_logo.png",
                    order_id: Razdata.data.id,
                    notes: {
                        key: packageBusinessDetail.business_id,
                        type: "Paid Listing"
                    },
                    handler: async function(response) {
                        const data = {
                            method: "POST",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(packageBusinessDetail)
                        };
                        const res = await fetch(`${process.env.BASE_URL}/api/protect/save-buy-package-listing`, data);
                        const resJson = await res.json();
                        console.log("save-buy-package-listing====>>>", resJson);
                        if (resJson.status == 200) {
                            //set popup variable to show modal
                            setPopUpMsg("Your request has been successfully submitted.");
                            setPopupType("success");
                            setPopupTitle("Success");
                            //redirect to the packages page
                            setTimeout(function() {
                                next_router__WEBPACK_IMPORTED_MODULE_20___default().router.push("/user/account-packages");
                            }, 1000);
                        } else {
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
        } else {
            const data = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    package_id: packageBusinessDetail.id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/save-package-notify`, data);
            const resJson = await res.json();
            console.log(resJson);
            if (resJson.status == 200) {
                //set popup variable to show modal
                setPopUpMsg("Your request has been successfully submitted.");
                setPopupType("success");
                setPopupTitle("Success");
                //redirect to the packages page
                setTimeout(function() {
                    next_router__WEBPACK_IMPORTED_MODULE_20___default().router.push("/user/account-packages");
                }, 1000);
            } else {
                return "";
            }
        }
    };
    //onchange set apply coupon code form value
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
        //set value in variable
        setCouponCodeVal((previous)=>({
                ...previous,
                [e.target.name]: e.target.value
            })
        );
    };
    //for apply coupon code 
    const ApplyCouponCode = async ()=>{
        console.log("packageBusinessDetail====", packageBusinessDetail);
        if (!couponCodeVal.coupon_code || couponCodeVal.coupon_code == "") {
            setFormError({
                ["coupon_code"]: "Please enter the coupon code."
            });
        } else {
            //setShowToast(false);
            const data = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(packageBusinessDetail)
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/listing-apply-coupon-code`, data);
            const resJson = await res.json();
            console.log(resJson);
            if (resJson.status == 200) {
                // set the coupon code calculation 
                packageBusinessDetail.discount = resJson.data.coupon_amount;
                packageBusinessDetail.coupon_id = resJson.data.coupon_id;
                packageBusinessDetail.total_payable_amount = packageBusinessDetail.plan_price + packageBusinessDetail.gst - resJson.data.coupon_amount;
                await setPackageBusinessDetail(packageBusinessDetail);
                //set popup variable to show modal
                setPopUpMsg(resJson === null || resJson === void 0 ? void 0 : resJson.msg);
                setPopupType("success");
                setPopupTitle("Success");
            } else {
                packageBusinessDetail.coupon_code = "";
                packageBusinessDetail.discount = 0;
                packageBusinessDetail.coupon_id = "";
                packageBusinessDetail.total_payable_amount = packageBusinessDetail.plan_price + packageBusinessDetail.gst;
                await setPackageBusinessDetail(packageBusinessDetail);
                //set popup variable to hide modal
                setPopUpMsg(resJson === null || resJson === void 0 ? void 0 : resJson.msg);
                setPopupType("error");
                setPopupTitle("Error");
            }
            console.log(packageBusinessDetail, "packageBusinessDetail..............hh");
        }
    };
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    //choose another plan
    const anotherPlan = async ()=>{
        var ref, ref26, ref27;
        //set the businesss id in variable
        setPackageBusinessID(businessDetail === null || businessDetail === void 0 ? void 0 : (ref = businessDetail.activePlan) === null || ref === void 0 ? void 0 : ref.business_id);
        //set the other variable in object
        businessDetail.is_another_plan = 1;
        businessDetail.business_id = businessDetail === null || businessDetail === void 0 ? void 0 : (ref26 = businessDetail.activePlan) === null || ref26 === void 0 ? void 0 : ref26.business_id;
        //businessDetail.id = businessDetail?.activePlan?.business_id
        businessDetail.city_id = businessDetail === null || businessDetail === void 0 ? void 0 : (ref27 = businessDetail.activePlan) === null || ref27 === void 0 ? void 0 : ref27.city_id;
        businessDetail.is_upgrade_plan = 0;
        businessDetail.activePlan = {};
        //setBusinessDetail({ is_another_plan: 1, business_id: businessDetail?.activePlan?.business_id, city_id: businessDetail?.activePlan?.city_id })
        setIsUpgradePlan(0);
    };
    //process to payment with same plan
    const processToPayment = async ()=>{
        var ref, ref28, ref29, ref30, ref31;
        let getPlanDetail = await getPackageDetailById(businessDetail === null || businessDetail === void 0 ? void 0 : (ref = businessDetail.activePlan) === null || ref === void 0 ? void 0 : ref.plan_id, businessDetail === null || businessDetail === void 0 ? void 0 : (ref28 = businessDetail.activePlan) === null || ref28 === void 0 ? void 0 : ref28.city_id);
        let businessPlanDetail = getPlanDetail[0];
        businessPlanDetail.plan_duration = (businessDetail === null || businessDetail === void 0 ? void 0 : (ref29 = businessDetail.activePlan) === null || ref29 === void 0 ? void 0 : ref29.package_type) == "0" ? "monthly" : "yearly";
        businessPlanDetail.business_id = businessDetail === null || businessDetail === void 0 ? void 0 : (ref30 = businessDetail.activePlan) === null || ref30 === void 0 ? void 0 : ref30.business_id;
        //set business city id in object
        businessDetail.city_id = (businessDetail === null || businessDetail === void 0 ? void 0 : (ref31 = businessDetail.activePlan) === null || ref31 === void 0 ? void 0 : ref31.city_id) || 0;
        //open review and pay page
        await packageBuyNow(businessPlanDetail);
    // setProcessToPay(1)
    };
    console.log("businessDetail=====>>", businessDetail);
    //get package detail by plan id
    const getPackageDetailById = async (plan_id, city_id = "")=>{
        try {
            var ref;
            const data = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    city_id: city_id,
                    id: plan_id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/master-package-listing`, data);
            let PackageRecords = await res.json();
            return (PackageRecords === null || PackageRecords === void 0 ? void 0 : (ref = PackageRecords.data) === null || ref === void 0 ? void 0 : ref.packageslisting) || [];
        } catch (err) {
            return [];
        }
    };
    //custom style 
    const customStyles = {
        control: (base, state)=>({
                ...base,
                border: "0",
                padding: "0"
            })
        ,
        control: (base, state)=>({
                ...base,
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
    // Render the pay and review page
    if (reviewAndPayPage) {
        var ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MessageModal__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    message: popUpMsg,
                    title: popupTitle,
                    status: true,
                    setMessage: setPopUpMsg,
                    type: popupType
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ReviewPay)}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ReviewPayHead)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().Backpage)}`,
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    lg: 7,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().CustomerInfoReview)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: "Customer Information"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                        md: 6,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                children: [
                                                                    "Name",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-danger",
                                                                        children: "\xa0*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                        md: 6,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                children: [
                                                                    "Mobile No",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-danger",
                                                                        children: "\xa0*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                        md: 12,
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                        md: 12,
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                children: "City"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
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
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                        md: 12,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-3 text-end",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                type: "submit",
                                                                size: "md",
                                                                variant: "primary ",
                                                                className: "mt-sm-0 mt-3",
                                                                onClick: handlePaymentSubmit,
                                                                children: submitButtonAction
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    lg: 5,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().CustomerInfoReview)} + ' ' + ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().CustomerSubscription)} `,
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
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ApplyLeft)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                    type: "text",
                                                                    size: "lg",
                                                                    ...register("coupon_code"),
                                                                    placeholder: "Coupon code",
                                                                    name: "coupon_code",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.coupon_code !== undefined ? "is-invalid" : ""}`
                                                                }),
                                                                formError.coupon_code !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                                    type: "invalid",
                                                                    tooltip: true,
                                                                    children: [
                                                                        " ",
                                                                        formError.coupon_code
                                                                    ]
                                                                }) : "",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().CuponIcon)}`
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ApplyLeftBtn)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                variant: "primary",
                                                                onClick: ApplyCouponCode,
                                                                children: "Apply"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageTotal)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Premium"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_11___default()), {
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
                                                                                    "\u20B9 ",
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
                                                                        packageBusinessDetail.discount > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: "Discount"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                                                    children: [
                                                                                        "-\u20B9 ",
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
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().TotalPay)}`,
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
                                                                            "\u20B9 ",
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
                                            className: `text-center mt-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PaymentGateway)}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
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
    } else if (isUpgradePlan == 1) {
        var ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `d-flex  align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ProfileHeading)}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "#!",
                            passHref: true,
                            prefetch: false,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().Backpage)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fi-arrow-long-left "
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: " mb-md-0 ",
                            children: "Upgrade Package"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `  ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ActivePackagesList)}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ActivePackagesLeft)}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        md: 3,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().UpgradePlanRight)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        "Price - ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: businessDetail === null || businessDetail === void 0 ? void 0 : (ref16 = businessDetail.activePlan) === null || ref16 === void 0 ? void 0 : ref16.plan_price
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        "Type - ",
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
                                className: `mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ExpirePlan)}`,
                                children: [
                                    "Your current will expire on ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: businessDetail === null || businessDetail === void 0 ? void 0 : (ref19 = businessDetail.activePlan) === null || ref19 === void 0 ? void 0 : ref19.ends_on
                                    })
                                ]
                            }),
                            (businessDetail === null || businessDetail === void 0 ? void 0 : (ref20 = businessDetail.activePlan) === null || ref20 === void 0 ? void 0 : ref20.remaining_days) < 15 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: `mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PlanExpired)}`,
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
                            children: "Choose another plan"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                            onClick: processToPayment,
                            size: "md",
                            variant: "primary ms-auto",
                            className: "mt-sm-0 mt-3",
                            children: "Proceed to pay"
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MessageModal__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    message: popUpMsg,
                    title: popupTitle,
                    status: true,
                    setMessage: setPopUpMsg,
                    type: popupType
                }),
                packageBusinessID == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_businessListingModal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
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
                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageList)}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6___default().Container), {
                        id: "left-tabs-example",
                        defaultActiveKey: "first",
                        activeKey: activeKey,
                        onSelect: (key)=>setActiveKey(key)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: packageBusinessID > 0 || (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_another_plan) && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_another_plan) == 1 ? `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ProfileHeading)} ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().ProfileHeadingPackage)}` : "",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    className: "align-items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            lg: 7,
                                            md: 5,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center",
                                                children: [
                                                    (packageBusinessID > 0 || (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_another_plan) && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.is_another_plan) == 1) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "#!",
                                                        passHref: true,
                                                        prefetch: false,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().Backpage)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-arrow-long-left"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "h3 mb-md-0 mb-sm-2 mb-2 mt-1",
                                                        children: "Pick the perfect plan"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            lg: 5,
                                            md: 7,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-sm-flex d-block",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageTabBtnGrp)}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            variant: "pills",
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageTabBtnNav)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                    className: `me-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageTabBtnNavItem)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default().Link), {
                                                                        className: `${activeKey == "first" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageTabBtActive) : ""} ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageTabBtn)}`,
                                                                        eventKey: "first",
                                                                        children: "Monthly"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                    className: `me-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageTabBtnNavItem)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default().Link), {
                                                                        className: `${activeKey == "second" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageTabBtActive) : ""} ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageTabBtn)}`,
                                                                        eventKey: "second",
                                                                        children: "Annually"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `position-relative ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PackageCity)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                options: props.citiesData,
                                                                defaultValue: selectedCityID,
                                                                closeMenuOnSelect: true,
                                                                hideSelectedOptions: false,
                                                                onChange: citiesListHandleChange,
                                                                allowSelectAll: false,
                                                                value: selectedCity,
                                                                ShowSelectAll: false,
                                                                volume: selectedCity,
                                                                className: `form-control p-1 ps-3 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().FormControl) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().FormControlSecond)}`,
                                                                isSearchable: true,
                                                                styles: customStyles,
                                                                isDisabled: (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) && (businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.business_id) > 0
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().searchIconPinPackage)}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-geo"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    sm: 12,
                                    md: 12,
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6___default().Content), {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6___default().Pane), {
                                                eventKey: "first",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: (packagesRecords === null || packagesRecords === void 0 ? void 0 : packagesRecords.length) > 0 && packagesRecords.map((monthlypackagelist, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                            lg: 3,
                                                            md: 4,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_PackageCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                title: monthlypackagelist.name,
                                                                price: `₹ ${monthlypackagelist.amount_monthly}`,
                                                                offerPrice: monthlypackagelist.offer_amt_month,
                                                                period: "month",
                                                                description: monthlypackagelist.description,
                                                                noOfUsers: monthlypackagelist.no_of_users,
                                                                BusinessPackageCount: monthlypackagelist.Business_package_count,
                                                                isBest: index == 1 ? true : false,
                                                                button: {
                                                                    href: "",
                                                                    title: "Buy Now-" + packageBusinessID,
                                                                    variant: "outline-primary rounded-pill",
                                                                    props: {
                                                                        onClick: ()=>{
                                                                            monthlypackagelist = {
                                                                                ...monthlypackagelist,
                                                                                ["plan_duration"]: "monthly",
                                                                                ["business_id"]: packageBusinessID
                                                                            };
                                                                            packageBuyNow(monthlypackagelist);
                                                                        }
                                                                    }
                                                                },
                                                                className: `overflow-hidden border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PricingPlanCard)} ${index == 1 ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PricingPlanCardcAtive) : ""}`
                                                            }, index)
                                                        })
                                                    )
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6___default().Pane), {
                                                eventKey: "second",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: (packagesRecords === null || packagesRecords === void 0 ? void 0 : packagesRecords.length) > 0 && packagesRecords.map((annuallyPackagelist, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                            lg: 3,
                                                            md: 4,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_PackageCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                title: annuallyPackagelist.name,
                                                                price: `₹ ${annuallyPackagelist.amount_year}`,
                                                                period: "year",
                                                                description: annuallyPackagelist.description,
                                                                noOfUsers: annuallyPackagelist.no_of_users,
                                                                BusinessPackageCount: annuallyPackagelist.Business_package_count,
                                                                isBest: index == 1 ? true : false,
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
                                                                className: `overflow-hidden border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PricingPlanCard)} ${index == 1 ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_21___default().PricingPlanCardcAtive) : ""}`
                                                            }, "y-" + index)
                                                        })
                                                    )
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PackageListing);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1636);
/* harmony import */ var _components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6439);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_packages_PackageListing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4030);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_4__, _components_packages_PackageListing__WEBPACK_IMPORTED_MODULE_10__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_4__, _components_packages_PackageListing__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const AccountPackages = (props)=>{
    //console.log('props---vkkram-->>>', props)
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.useSession)() //use login session   
    ;
    //const { businessRecords, isLoadingMore, isReachingEnd, isRefreshing, size, setSize, mutate } = usePagination("/api/protect/my-feedbacks");
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    //set active plan listing in variable
    const { 0: activePlanList , 1: setActivePlanList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    //set active plan id when upgrade same plan
    const { 0: activePlanDetail , 1: setActivePlanDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: activePlanId , 1: setActivePlanId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    //choose another plan variable
    const { 0: chooseAnotherPlan , 1: setChooseAnotherPlan  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    // business detail
    const { 0: businessDetail , 1: setBusinessDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    // define process to pay
    const { 0: processToPay , 1: setProcessToPay  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    //set login user detail
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        //active plan listing
        let planlist = await activePackagesList();
        setActivePlanList(planlist);
    }, []);
    //console.log('data--->>>', session)
    const activePackagesList = async ()=>{
        try {
            const data = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/user-active-package-listing`, data);
            let PackageRecords = await res.json();
            return (PackageRecords === null || PackageRecords === void 0 ? void 0 : PackageRecords.data) || [];
        } catch (err) {
            return [];
        }
    };
    //upgrade plan function
    const upgradePlan = async (activePlanDetailObject)=>{
        activePlanDetailObject.plan_price = activePlanDetailObject.plan_price.toFixed(2);
        setActivePlanDetail(activePlanDetailObject);
        setActivePlanId(activePlanDetailObject.plan_id);
        //var details = { ...businessDetail, ['is_upgrade_plan']: 1, ['activePlan']: activePlanDetail }
        setBusinessDetail({
            ["is_upgrade_plan"]: 1,
            ["activePlan"]: activePlanDetailObject
        });
    };
    console.log("activePlanDetail==>>>", activePlanDetail);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        pageTitle: "Packages",
        activeNav: "Account",
        updateUser: updateUserDetails,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            userData: empDetails,
            accountPageTitle: "Packages",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card shadow-none border-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card-body",
                        children: activePlanId == 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `d-flex justify-content-between align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().ProfileHeading)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "h3 mb-md-0 ",
                                        children: "Packages"
                                    })
                                }),
                                (activePlanList === null || activePlanList === void 0 ? void 0 : activePlanList.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: ` ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().ActivePackagesListTop)}`,
                                    children: activePlanList.map((pack, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `d-flex align-items-center  ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().ActivePackagesList)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().ActivePackagesLeft)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                            children: pack.business_name
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                            className: "mb-1",
                                                            children: [
                                                                "Active Plan - ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: pack.name
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "mb-0",
                                                            children: [
                                                                "Your current will expire on ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                    children: pack.ends_on
                                                                })
                                                            ]
                                                        }),
                                                        pack.remaining_days < 15 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: `mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().PlanExpired)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    class: "fi-alert-circle me-2"
                                                                }),
                                                                " Your plan expired within ",
                                                                pack.remaining_days,
                                                                " days. Please upgrade your plan."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    type: "button",
                                                    onClick: ()=>upgradePlan(pack)
                                                    ,
                                                    size: "md",
                                                    variant: "secondary ms-auto",
                                                    className: "mt-sm-0",
                                                    children: "Upgrade Plan"
                                                })
                                            ]
                                        }, idx)
                                    )
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_PackageListing__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    ...props
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_PackageListing__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            businessDetail: businessDetail,
                            ...props
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPackages);
async function getServerSideProps(ctx) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.getSession)(ctx);
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,4301,7559,6256,467,6439,8877], () => (__webpack_exec__(2608)));
module.exports = __webpack_exports__;

})();