"use strict";
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 2508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1454);
/* harmony import */ var _styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ComboPackageCard = ({ comboPackageListings , buyNowComboPackage , boxStyle  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "position-relative p-0 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                        className: `h-100 pb-3 ${(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().SwiperPadding)}`,
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                            swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination
                        ],
                        slidesPerView: 1,
                        navigation: {
                            prevEl: "#servicesprev11",
                            nextEl: "#servicesnext11"
                        },
                        pagination: {
                            el: "#combopackage-pagination",
                            clickable: true,
                            dynamicBullets: true
                        },
                        grabCursor: true,
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            500: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1100: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        children: (comboPackageListings === null || comboPackageListings === void 0 ? void 0 : comboPackageListings.length) > 0 && comboPackageListings.map((comboPackage, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                className: `h-auto d-flex ${(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().SwiperSlideCard)}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${boxStyle.PackageBox}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center mt-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: comboPackage.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    children: [
                                                        "\u20B9",
                                                        comboPackage.actual_price,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "+GST"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${boxStyle.PackageBoxList}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: comboPackage.description
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `text-center ${boxStyle.BuyNowBtn}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                variant: "primary",
                                                onClick: ()=>buyNowComboPackage(comboPackage.id)
                                                ,
                                                children: "Buy Now"
                                            })
                                        })
                                    ]
                                })
                            }, index)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                        id: "servicesprev11",
                        variant: "prev"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                        id: "servicesnext11",
                        variant: "next"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "combopackage-pagination",
                className: `position-relative bottom-0 pt-0 mt-0 mb-lg-0 ${(_styles_OurServices_module_css__WEBPACK_IMPORTED_MODULE_6___default().SwiperSlidePagination)}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComboPackageCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9035:
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
/* harmony import */ var _partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1636);
/* harmony import */ var _packages_AdsPlan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8633);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ToastDismissible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3198);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5641);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _OpenHour__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(767);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4301);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1553);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5698);
/* harmony import */ var _partials_SeoHead__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8184);
/* harmony import */ var _packages_businessListingModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8877);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, _OpenHour__WEBPACK_IMPORTED_MODULE_11__, _packages_businessListingModal__WEBPACK_IMPORTED_MODULE_18__]);
([_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, _OpenHour__WEBPACK_IMPORTED_MODULE_11__, _packages_businessListingModal__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const PayAndReviewPage = ({ businessDetail ={} , ...props })=>{
    var ref4;
    console.log("========businessDetail=====", businessDetail, props);
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const PageUrl = query.asPath;
    const session = props === null || props === void 0 //defined the session variable
     ? void 0 : props.session;
    //use form
    const { register , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)();
    //form validation error variable
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    //declear business package detail
    const { 0: packageBusinessDetail , 1: setPackageBusinessDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(businessDetail);
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
    //Declear package business id variable
    const { 0: packageBusinessID , 1: setPackageBusinessID  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    //declear the submit button action  
    const { 0: submitButtonAction , 1: setsubmitButtonAction  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Make Payment");
    //define the package actual amount variable    
    const { 0: packageAmount , 1: setPackageAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((businessDetail === null || businessDetail === void 0 ? void 0 : (ref4 = businessDetail.new_package) === null || ref4 === void 0 ? void 0 : ref4.actual_price) || 0);
    //define the package price + gst
    const { 0: planPriceWithGst , 1: setPlanPriceWithGst  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(businessDetail === null || businessDetail === void 0 ? void 0 : businessDetail.total_payable_amount);
    //define the coupon code variable
    const { 0: couponCodeVal , 1: setCouponCodeVal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    //set the business listing modal variables
    const { 0: businessesConfirmModalHideShow , 1: setBusinessesConfirmModalHideShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const handleBusinessesConfirmModalClose = ()=>setBusinessesConfirmModalHideShow(false)
    ;
    const handleBusinessesConfirmModalShow = ()=>setBusinessesConfirmModalHideShow(true)
    ;
    //apply coupon code onchange value function
    const couponformFieldChange = async (e)=>{
        setFormError({}) //first time define the error blank with onchange event
        ;
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
            var ref, ref1, ref2;
            //setShowToast(false);
            const data = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                //body: JSON.stringify(packageBusinessDetail),
                body: JSON.stringify({
                    user_id: packageBusinessDetail.user_id,
                    coupon_code: couponCodeVal,
                    package_id: businessDetail === null || businessDetail === void 0 ? void 0 : (ref = businessDetail.new_package) === null || ref === void 0 ? void 0 : ref.package_id,
                    listing_city_id: businessDetail === null || businessDetail === void 0 ? void 0 : (ref1 = businessDetail.new_package) === null || ref1 === void 0 ? void 0 : ref1.city_id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/apply-coupon-code-on-business`, data);
            const resJson = await res.json();
            if ((resJson === null || resJson === void 0 ? void 0 : (ref2 = resJson.data) === null || ref2 === void 0 ? void 0 : ref2.status) == 200) {
                var ref3;
                //calculate the total payable amount
                // let plan_price_with_gst = parseFloat(packageBusinessDetail.plan_price) + parseFloat(packageBusinessDetail.gst)
                // set the coupon code calculation 
                packageBusinessDetail.coupon_code = couponCodeVal;
                //calculate the coupon discount percentage
                let counponDiscountAmount = (planPriceWithGst * resJson.data.coupon_amount / 100).toFixed(2);
                packageBusinessDetail.discount = counponDiscountAmount;
                packageBusinessDetail.coupon_id = resJson.data.coupon_id;
                console.log("counponDiscountAmount--->>>>", counponDiscountAmount);
                //discount + user wallet amount
                let discount_with_wallet = parseFloat(counponDiscountAmount) + parseFloat(userWalletTotalAmount);
                packageBusinessDetail.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(discount_with_wallet)).toFixed(2);
                //if payable amount getting in minus than we set 0 in payable amount
                if (Math.sign(packageBusinessDetail.total_payable_amount) === -1) {
                    packageBusinessDetail.total_payable_amount = 0.00;
                }
                await setPackageBusinessDetail(packageBusinessDetail);
                //set popup variable to show modal
                setPopUpMsg(resJson === null || resJson === void 0 ? void 0 : (ref3 = resJson.data) === null || ref3 === void 0 ? void 0 : ref3.msg);
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
                    packageBusinessDetail.total_payable_amount = 0.00;
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
            packageBusinessDetail.total_payable_amount = 0.00;
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
            //set wallet amount
            user_wallet_total_amount = await getUserWalletAmount();
            setUserWalletTotalAmount(user_wallet_total_amount);
            packageBusinessDetail.user_total_wallet_amount = user_wallet_total_amount;
            //calculate the total payable amount 
            //discount + user wallet amount
            let discount_with_wallet = parseFloat(packageBusinessDetail.discount) + parseFloat(user_wallet_total_amount);
            console.log("planPriceWithGst-----", planPriceWithGst);
            //deduct wallet amount from total
            packageBusinessDetail.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(discount_with_wallet)).toFixed(2);
            //if payable amount getting in minus than we set 0 in payable amount
            if (Math.sign(packageBusinessDetail.total_payable_amount) === -1) {
                packageBusinessDetail.total_payable_amount = 0.00;
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
    //process to payment with same plan
    const processToPayment = async ()=>{
        console.log("same plan---------------");
    /*
        //let getPlanDetail = await getPackageDetailById(businessDetail?.activePlan?.plan_id, businessDetail?.activePlan?.city_id)
        let getPlanDetail = await getPackageDetailById(businessDetail?.activePlan?.plan_id)
        let businessPlanDetail = getPlanDetail[0]
        businessPlanDetail.plan_duration = businessDetail?.activePlan?.package_type == '0' ? 'monthly' : 'yearly'
        businessPlanDetail.business_id = businessDetail?.activePlan?.business_id
        //set business city id in object
        businessDetail.city_id = businessDetail?.activePlan?.city_id || 0

        //open review and pay page
        await packageBuyNow(businessPlanDetail) 
        */ };
    //package detail page
    const getBusinessDetail = (packageDetail)=>{
        var ref, ref5, ref6, ref7, ref8, ref9;
        //if packages uses count is equal to no of user then we notifiy to user
        if ((packageDetail === null || packageDetail === void 0 ? void 0 : (ref = packageDetail.new_package) === null || ref === void 0 ? void 0 : ref.Business_package_count) == (packageDetail === null || packageDetail === void 0 ? void 0 : (ref5 = packageDetail.new_package) === null || ref5 === void 0 ? void 0 : ref5.no_of_users)) {
            setsubmitButtonAction("Notify Me") // set for notify button                
            ;
        }
        //set user detail
        let user_id = (session === null || session === void 0 ? void 0 : (ref6 = session.user) === null || ref6 === void 0 ? void 0 : ref6.id) || 0;
        let user_name = (session === null || session === void 0 ? void 0 : (ref7 = session.user) === null || ref7 === void 0 ? void 0 : ref7.name) || "";
        let user_email = (session === null || session === void 0 ? void 0 : (ref8 = session.user) === null || ref8 === void 0 ? void 0 : ref8.email) || "";
        let user_phone = (session === null || session === void 0 ? void 0 : (ref9 = session.user) === null || ref9 === void 0 ? void 0 : ref9.phone) || "";
        //set business city id in object
        packageDetail.listing_city_id = (packageDetail === null || packageDetail === void 0 ? void 0 : packageDetail.listing_city_id) || 0;
        //set the detail object of package in variable
        //setPackageBusinessDetail(packageDetail)
        setPackageBusinessDetail((previous)=>({
                ...previous,
                ["plan_price"]: packageAmount,
                ["user_id"]: user_id,
                ["user_name"]: user_name,
                ["user_email"]: user_email,
                ["user_phone"]: user_phone
            })
        );
    };
    //get business detail by id
    const getBusinessDetailById = async (businessId)=>{};
    //onclick for Make payment or notify button function
    const handlePaymentSubmit = async ()=>{
        // make the payment
        //onclick start the sppiner on the button
        setIsSubmittingProcessToPayement(true);
        if (submitButtonAction == "Make Payment") {
            let total_payable_amount_without_deduct_wallet = (parseFloat(planPriceWithGst) - parseFloat(packageBusinessDetail.discount)).toFixed(2);
            if (packageBusinessDetail.total_payable_amount == 0.00) {
                packageBusinessDetail.is_payment_from = "wallet" // It means complete payment from wallet
                ;
                //set the total deduct amount from user wallet
                packageBusinessDetail.deduct_total_user_wallet_amount = total_payable_amount_without_deduct_wallet;
                const data = {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(packageBusinessDetail)
                };
                const res = await fetch(`${process.env.BASE_URL}/api/protect/save-buy-combo-business-package`, data);
                const resJson = await res.json();
                if (resJson.status == 200) {
                    //set popup variable to show modal
                    setPopUpMsg("Your request has been successfully submitted.");
                    setPopupType("success");
                    setPopupTitle("Success");
                    //redirect to the packages page
                    setTimeout(function() {
                        next_router__WEBPACK_IMPORTED_MODULE_13___default().router.push("/premium-listing");
                    }, 1000);
                } else {
                    return "";
                }
            } else {
                packageBusinessDetail.is_payment_from = "razorpay" // It means some payment from wallet and some online                
                ;
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
                            const data = {
                                method: "POST",
                                headers: {
                                    "Accept": "application/json",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(packageBusinessDetail)
                            };
                            const res = await fetch(`${process.env.BASE_URL}/api/protect/save-buy-combo-business-package`, data);
                            const resJson = await res.json();
                            if (resJson.status == 200) {
                                //set popup variable to show modal
                                setPopUpMsg("Your request has been successfully submitted.");
                                setPopupType("success");
                                setPopupTitle("Success");
                                //redirect to the packages page
                                setTimeout(function() {
                                    next_router__WEBPACK_IMPORTED_MODULE_13___default().router.push("/premium-listing");
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
            }
        } else {
            var ref;
            const data = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    //        package_id: packageBusinessDetail.id
                    package_id: businessDetail === null || businessDetail === void 0 ? void 0 : (ref = businessDetail.new_package) === null || ref === void 0 ? void 0 : ref.package_id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/save-package-notify`, data);
            const resJson = await res.json();
            //console.log(resJson)
            if (resJson.status == 200) {
                setIsSubmittingProcessToPayement(false);
                //set popup variable to show modal
                setPopUpMsg("Your request has been successfully submitted.");
                setPopupType("success");
                setPopupTitle("Success");
                //redirect to the packages page
                setTimeout(function() {
                    next_router__WEBPACK_IMPORTED_MODULE_13___default().router.push("/user/account-packages");
                }, 1000);
            } else {
                return "";
            }
        }
    };
    const openBusinessModal = ()=>{
        setBusinessesConfirmModalHideShow(true);
    };
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                message: popUpMsg,
                title: popupTitle,
                status: true,
                setMessage: setPopUpMsg,
                type: popupType
            }),
            packageBusinessID == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_businessListingModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: businessesConfirmModalHideShow,
                onHide: handleBusinessesConfirmModalClose,
                onSwap: handleBusinessesConfirmModalShow,
                setPackageBusinessID: setPackageBusinessID,
                packageBusinessDetail: packageBusinessDetail,
                packageBuyNow: getBusinessDetail
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_SeoHead__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                title: "Online Paid Listing",
                description: "Dialmenow is the most comprehensive Jaipur Paid Listing Services. Dial Me Now Online Pvt. Ltd. is an established offline (telephonic and print) and online (Website, WAP site & App) information provider in Rajasthan. We are Rajasthan\u2019s first own local search engine.",
                keyword: "paid listing, online paid listing, paid listing in rajasthany,advertise , online advertisement in rajasthan, online paid list, online advertisement, prmote business, Dialmenow yellow pages",
                url: PageUrl,
                city: "",
                area: "",
                companyName: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: "Account - Favorites",
                activeNav: "Account",
                userLoggedIn: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().ReviewPay)}  ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().ReviewPayOne)}`,
                    id: "payAndReviewId",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.Container, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().ReviewPayHead)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "mb-0 ",
                                    children: "Review & Pay"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default()), {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    lg: 12,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().CustomerInfoReview)} ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().CustomerSubscription)} `,
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
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().ApplyLeft)}`,
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
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().CuponIcon)}`
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().ApplyLeftBtn)}`,
                                                            children: isApplyCouponCode ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                                variant: "primary",
                                                                onClick: RemoveCouponCode,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-x"
                                                                    }),
                                                                    " "
                                                                ]
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                                variant: "primary",
                                                                onClick: ApplyCouponCode,
                                                                children: " Apply "
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "mt-3",
                                                    children: "Wallet"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex justify-content-between",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().ApplyLeft)}`,
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
                                                                    "-\u20B9 ",
                                                                    formatter.format(packageBusinessDetail.user_total_wallet_amount)
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().PackageTotal)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Premium"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_15___default()), {
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
                                                                                    formatter.format(packageAmount)
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
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().TotalPay)}`,
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
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex justify-content-between my-3 align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `text-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_20___default().PaymentGateway)}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                        src: "/images/MyAccount/razorpay.svg",
                                                        height: "25",
                                                        width: "114"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: packageBusinessID == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        onClick: openBusinessModal,
                                                        size: "md",
                                                        variant: "primary ms-auto",
                                                        className: "mt-sm-0 mt-0",
                                                        children: "Proceed to payment"
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        size: "md",
                                                        variant: "primary ",
                                                        className: "mt-0",
                                                        onClick: handlePaymentSubmit,
                                                        disabled: isSubmittingProcessToPayement,
                                                        children: [
                                                            isSubmittingProcessToPayement && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                animation: "border",
                                                                size: "sm",
                                                                className: "me-2"
                                                            }),
                                                            submitButtonAction
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayAndReviewPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;