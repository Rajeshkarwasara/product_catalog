"use strict";
exports.id = 8621;
exports.ids = [8621];
exports.modules = {

/***/ 8621:
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
/* harmony import */ var _components_packages_AdsPlan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8633);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ToastDismissible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3198);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_OpenHour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(767);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _helper_validation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(261);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4301);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1553);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5698);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_shimmer_paymentSuccessLoad__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _components_OpenHour__WEBPACK_IMPORTED_MODULE_10__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _components_OpenHour__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const UpgradeAdsPlan = ({ PlanMarginCls ="" , packages , currentPlanDetailValue , setCurrentPlanDetailValue , csrfToken , isAddNewAds ="no" , setStep =""  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    //console.log(currentPlanDetailValue, "currentPlanDetailValue...........")
    const { register , handleSubmit , formState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const { isSubmitting  } = formState;
    const { 0: messageType , 1: setMessageType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: showToast , 1: setShowToast  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: newPackageId , 1: setNewPackageId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: newPackageAmount , 1: setNewPackageAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: newPackageType , 1: setNewPackageType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    //declear the popup modal variable
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: popupType , 1: setPopupType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("success");
    const { 0: popupTitle , 1: setPopupTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Success");
    //defined variable for pay&review page
    const { 0: isPayAndReview , 1: setIsPayAndReview  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    //defined the coupon code variable
    const { 0: couponCode , 1: setCouponCode  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
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
    //define the plan price + gst
    const { 0: planPriceWithGst , 1: setPlanPriceWithGst  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0.00);
    //define the scroll top script variable
    const { 0: scrollToTop , 1: setScrollToTop  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    //shimmer effect variable
    const { 0: isLoadingShimmer , 1: setIsLoadingShimmer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    //user session
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_17__.useSession)();
    var weekDayNameArray = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];
    const { 0: days , 1: SetDays  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
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
    ]);
    let planDetail = async (param)=>{
        let plan_amount = param.offer_amount ? param.offer_amount : param.amount;
        await setNewPackageId(param.id);
        await setNewPackageAmount(plan_amount);
        await setNewPackageType(param.type);
        //set new package detail in defined variable
        var updateFormValues = {
            ...currentPlanDetailValue,
            ["new_package"]: param
        };
        setCurrentPlanDetailValue(updateFormValues);
    };
    const specifyOpeningHoursChange = async (e, dayIndex, fieldname)=>{
        e.preventDefault();
        const value = e.target.value;
        let daysObjectArray = [
            ...days
        ];
        weekDayNameArray.map((day)=>{
            if (fieldname == "start_time") {
                daysObjectArray[dayIndex].start_time = value;
            } else if (fieldname == "end_time") {
                daysObjectArray[dayIndex].end_time = value;
            } else if (fieldname == "dual_start_time") {
                daysObjectArray[dayIndex].dual_start_time = value;
            } else if (fieldname == "dual_end_time") {
                daysObjectArray[dayIndex].dual_end_time = value;
            } else if (fieldname == "open") {
                daysObjectArray[dayIndex].open = openCloseCheckBox == "on" ? 1 : 0;
            } else if (fieldname == "close") {
                daysObjectArray[dayIndex].close = openCloseCheckBox == "on" ? 1 : 0;
            }
        });
        var updateFormValues = {
            ...currentPlanDetailValue,
            ["daysHourslist"]: daysObjectArray
        };
        setCurrentPlanDetailValue(updateFormValues);
    };
    //on click submit button
    async function onSubmit(values) {
        let errorMessage = "" //defined the blank variable of error message
        ;
        if (newPackageId) {
            var updateFormValues = currentPlanDetailValue;
            const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_12__/* .advertiseWithUsValidate */ .lj)(updateFormValues, "3");
            if (Object.entries(formResponse).length !== 0) {
                setFormError(formResponse);
            } else {
                //calculate the gst
                let gstPrice = newPackageAmount * 18 / 100;
                currentPlanDetailValue.gst = gstPrice;
                //set the plan price + gst in variable
                let plan_price_with_gst = (parseFloat(newPackageAmount) + parseFloat(gstPrice)).toFixed(2);
                setPlanPriceWithGst(plan_price_with_gst);
                //set discount object        
                currentPlanDetailValue.coupon_code = "";
                currentPlanDetailValue.coupon_discount = 0;
                currentPlanDetailValue.coupon_id = "";
                //set total payable amount
                currentPlanDetailValue.total_payable_amount = newPackageAmount + gstPrice;
                setIsPayAndReview(true);
                //scroll top
                if (scrollToTop) {
                    setScrollToTop(false);
                    window.scrollTo({
                        top: document.getElementById("payAndReviewId").offsetTop - 60,
                        behavior: "smooth"
                    });
                }
            }
        } else {
            errorMessage = "Please select the plan";
        }
        if (errorMessage != "") {
            //set popup variable to show modal
            setPopUpMsg(errorMessage);
            setPopupType("Error");
            setPopupTitle("Error");
        }
    }
    const formFieldChange = async (e)=>{
        setFormError({}) //vs first time define the error blank with onchange event
        ;
        e.preventDefault();
        var updateFormValues = {
            ...currentPlanDetailValue,
            [e.target.name]: e.target.value
        };
        setCurrentPlanDetailValue(updateFormValues);
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_12__/* .advertiseWithUsValidate */ .lj)(updateFormValues, "3");
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
        }
    };
    //apply coupon code onchange value function
    const couponformFieldChange = async (e)=>{
        setFormError({}) //first time define the error blank with onchange event
        ;
        setCurrentPlanDetailValue((previous)=>({
                ...previous,
                [e.target.name]: e.target.value
            })
        );
        //set value in variable
        setCouponCode(e.target.value);
    };
    //for apply coupon code 
    const ApplyCouponCode = async ()=>{
        if (!couponCode || couponCode == "") {
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
                body: JSON.stringify({
                    coupon_code: couponCode,
                    city_id: currentPlanDetailValue.new_package.city_id,
                    package_id: currentPlanDetailValue.new_package.id
                })
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/apply-coupon-code-advertisement`, data);
            const resJson = await res.json();
            if (resJson.status == 200) {
                var ref;
                // set the coupon code calculation 
                currentPlanDetailValue.coupon_code = couponCode;
                //calculate the coupon discount percentage
                let counponDiscountAmount = (planPriceWithGst * resJson.data.coupon_amount / 100).toFixed(2);
                currentPlanDetailValue.coupon_discount = counponDiscountAmount;
                currentPlanDetailValue.coupon_id = resJson.data.coupon_id;
                //discount + user wallet amount
                let discount_with_wallet = parseFloat(counponDiscountAmount) + parseFloat(userWalletTotalAmount);
                currentPlanDetailValue.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(discount_with_wallet)).toFixed(2);
                //if payable amount getting in minus than we set 0 in payable amount
                if (Math.sign(currentPlanDetailValue.total_payable_amount) === -1) {
                    currentPlanDetailValue.total_payable_amount = 0.00;
                }
                //set popup variable to show modal
                setPopUpMsg(resJson === null || resJson === void 0 ? void 0 : (ref = resJson.data) === null || ref === void 0 ? void 0 : ref.msg);
                setPopupType("success");
                setPopupTitle("Success");
                //hide modal popup after 3 second
                setTimeout(function() {
                    setPopUpMsg("");
                }, 3000);
                //set true apply coupon code
                setIsApplyCouponCode(true);
            } else {
                currentPlanDetailValue.coupon_code = "";
                currentPlanDetailValue.coupon_discount = 0;
                currentPlanDetailValue.coupon_id = "";
                currentPlanDetailValue.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(userWalletTotalAmount)).toFixed(2);
                //if payable amount getting in minus than we set 0 in payable amount
                if (Math.sign(currentPlanDetailValue.total_payable_amount) === -1) {
                    currentPlanDetailValue.total_payable_amount = 0.00;
                }
                //await setPackageBusinessDetail(packageBusinessDetail)
                //set popup variable to hide modal
                setPopUpMsg(resJson === null || resJson === void 0 ? void 0 : resJson.msg);
                setPopupType("error");
                setPopupTitle("Error");
                //set true apply coupon code
                setIsApplyCouponCode(false);
            }
        }
    };
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    //for apply user wallet
    const applyUserWallet = async (e)=>{
        let useWalletAmount = e.target.checked;
        let wallet_amount = 0;
        if (useWalletAmount) {
            //set wallet amount
            wallet_amount = await getUserWalletAmount();
            setUserWalletTotalAmount(wallet_amount);
            currentPlanDetailValue.user_wallet_amount = wallet_amount;
            //discount + user wallet amount
            let discount_with_wallet = parseFloat(currentPlanDetailValue.coupon_discount) + parseFloat(wallet_amount);
            //deduct wallet amount from total
            currentPlanDetailValue.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(discount_with_wallet)).toFixed(2);
            //if payable amount getting in minus than we set 0 in payable amount
            if (Math.sign(currentPlanDetailValue.total_payable_amount) === -1) {
                currentPlanDetailValue.total_payable_amount = 0.00;
            }
        } else {
            //set wallet amount
            setUserWalletTotalAmount(wallet_amount);
            currentPlanDetailValue.user_wallet_amount = wallet_amount;
            //deduct wallet amount from total
            currentPlanDetailValue.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(currentPlanDetailValue.coupon_discount)).toFixed(2);
        }
        //set true or false for use wallet or not
        setIsApplyUserWallet(useWalletAmount);
    };
    //for remove coupon code
    const RemoveCouponCode = async (e)=>{
        //reset the coupon variable
        currentPlanDetailValue.coupon_code = "";
        currentPlanDetailValue.coupon_discount = 0;
        currentPlanDetailValue.coupon_id = "";
        //update the total payable amount object
        currentPlanDetailValue.total_payable_amount = (parseFloat(planPriceWithGst) - parseFloat(userWalletTotalAmount)).toFixed(2);
        //set false when not apply the coupon code
        setIsApplyCouponCode(false);
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
    //add package reaming amount in user wallet
    const CreditDebitAmountInUserWallet = async (param)=>{
        const walletResult = await fetch(process.env.BASE_URL + "/api/protect/credit-debit-wallet-amount", {
            method: "POST",
            body: JSON.stringify(param),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await walletResult.json();
    };
    // for upgrade ads plan request
    const upgradeAdvertisementRequestPlan = async (param)=>{
        const data = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: param.ads_detail.userEmail,
                name: param.ads_detail.userName,
                phone: param.ads_detail.userPhone,
                city_id: param.ads_detail.city_id,
                categories: param.ads_detail.sub_category_id,
                business_name: param.ads_detail.business_name,
                banner_position: param.ads_detail.banner_position,
                banner_image: param.ads_detail.banner_image,
                redirect_url: param.ads_detail.redirect_url,
                per_day_amount: param.per_day_amount,
                ads_id: param.ads_detail.ads_id,
                ads_click: param.ads_detail.ads_click,
                daysHourslist: param.daysHourslist,
                old_package_type: param.ads_detail.package_type,
                new_package_detail: param.new_package,
                total_gross_payment: param.total_gross_payment,
                deduct_total_user_wallet_amount: param.deduct_total_user_wallet_amount,
                is_payment_from: param.is_payment_from,
                gst: param.gst,
                coupon_code: param.coupon_code,
                coupon_id: param.coupon_id,
                coupon_discount: param.coupon_discount,
                is_use_user_wallet: isApplyUserWallet == true ? "yes" : "no",
                remaining_amount: param.ads_detail.remaining_amount
            })
        };
        const resSubscriber = await fetch(`${process.env.BASE_URL}/api/protect/upgrade-advertisement-request-plan`, data);
        return await resSubscriber.json();
    };
    // for upgrade ads plan request
    const addAdvertisementRequestPlan = async (param)=>{
        const data = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: param.ads_detail.userEmail,
                name: param.ads_detail.userName,
                phone: param.ads_detail.userPhone,
                city_id: param.city_id,
                business_name: param.company,
                categories: param.categories,
                banner_position: param.position,
                ads_click: param.redirect,
                redirect_url: param.redirectValue,
                banner_image: param.banner_image,
                per_day_amount: param.per_day_amount,
                daysHourslist: param.daysHourslist,
                ads_id: param.ads_id,
                new_package_detail: param.new_package,
                is_payment_from: param.is_payment_from,
                total_gross_payment: param.total_gross_payment,
                gst: param.gst,
                coupon_id: param.coupon_id,
                coupon_discount: param.coupon_discount,
                deduct_total_user_wallet_amount: param.deduct_total_user_wallet_amount,
                is_use_user_wallet: isApplyUserWallet == true ? "yes" : "no"
            })
        };
        const resSubscriber = await fetch(`${process.env.BASE_URL}/api/protect/add-advertisement-request`, data);
        return await resSubscriber.json();
    };
    //process to payment (go to payment gateway)
    const processToPayment = async ()=>{
        var ref;
        setIsSubmittingProcessToPayement(true) //spinner enabled and disable the button
        ;
        let errorMessage = "" //defined the blank variable of error message
        ;
        //get remaning amount
        let remaning_amount = currentPlanDetailValue.ads_detail.remaining_amount;
        //total paying amount to user without wallet
        let total_payable_amount_without_deduct_wallet = (parseFloat(planPriceWithGst) - parseFloat(currentPlanDetailValue.coupon_discount)).toFixed(2);
        if (remaning_amount > 0) {
        //let creditAmountObject = { debit_credit: 1, amount: remaning_amount, type: 1, type_id: currentPlanDetailValue.ads_detail.ads_id }
        //let creditAmountResponse = await CreditDebitAmountInUserWallet(creditAmountObject)
        }
        let wallet_total_amount = 0;
        //check user click for use wallet check box or not
        if (isApplyUserWallet) {
            wallet_total_amount = remaning_amount + userWalletTotalAmount;
            if (currentPlanDetailValue.total_payable_amount == 0.00 || wallet_total_amount > total_payable_amount_without_deduct_wallet) {
                //set the total deduct amount from user wallet
                currentPlanDetailValue.deduct_total_user_wallet_amount = total_payable_amount_without_deduct_wallet;
                //total gross amount
                currentPlanDetailValue.total_gross_payment = total_payable_amount_without_deduct_wallet;
                //set payment from
                currentPlanDetailValue.is_payment_from = "wallet" // It means complete payment from wallet
                ;
            } else {
                /*
        let debitAmountObject = { debit_credit: 2, amount: wallet_total_amount, type: 1, type_id: currentPlanDetailValue.ads_detail.ads_id }
        //debit amount from wallet
        let debitAmountResponse = await CreditDebitAmountInUserWallet(debitAmountObject)*/ //total gross amount
                currentPlanDetailValue.total_gross_payment = (parseFloat(total_payable_amount_without_deduct_wallet) - parseFloat(wallet_total_amount)).toFixed(2);
                //set payment from
                currentPlanDetailValue.is_payment_from = "razorpay" // It means some payment from wallet and some online
                ;
                //set the total deduct amount from user wallet
                currentPlanDetailValue.deduct_total_user_wallet_amount = wallet_total_amount;
            }
        } else {
            currentPlanDetailValue.total_gross_payment = total_payable_amount_without_deduct_wallet;
            //set payment from
            currentPlanDetailValue.is_payment_from = "razorpay" // It means complete payment from online
            ;
            //set the total deduct amount from user wallet
            currentPlanDetailValue.deduct_total_user_wallet_amount = 0;
        }
        //upgrade plan request
        if (isAddNewAds == "yes") {
            var planRequestResponse = await addAdvertisementRequestPlan(currentPlanDetailValue);
        } else {
            var planRequestResponse = await upgradeAdvertisementRequestPlan(currentPlanDetailValue);
        }
        if ((planRequestResponse === null || planRequestResponse === void 0 ? void 0 : (ref = planRequestResponse.data) === null || ref === void 0 ? void 0 : ref.status) == 200) {
            var ref1;
            //set the advertisement id in formvalues
            var updateFormValues = {
                ...currentPlanDetailValue,
                ["advertisement_id"]: planRequestResponse === null || planRequestResponse === void 0 ? void 0 : (ref1 = planRequestResponse.data) === null || ref1 === void 0 ? void 0 : ref1.ads_id,
                ["is_advertisement_action"]: isAddNewAds == "yes" ? "add" : "edit"
            };
            setCurrentPlanDetailValue(updateFormValues);
            if ((currentPlanDetailValue === null || currentPlanDetailValue === void 0 ? void 0 : currentPlanDetailValue.is_payment_from) == "razorpay") {
                await razorpay_payment_gateway(planRequestResponse);
            } else {
                setIsSubmittingProcessToPayement(false) //button enable and stop the sppiner
                ;
                setIsLoadingShimmer(true) //show effect
                ;
                //set popup variable to show modal
                setPopUpMsg(planRequestResponse.data.msg);
                setPopupType("success");
                setPopupTitle("Success");
                if (isAddNewAds == "yes") {
                    //redirect to the packages page
                    setTimeout(function() {
                        //location.href = process.env.BASE_URL + `/user/my-advertises`;
                        setStep(3);
                        //window scroll to top 
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }, 3000);
                } else {
                    //redirect to the packages page
                    setTimeout(function() {
                        location.href = process.env.BASE_URL + `/user/my-advertises`;
                    }, 1000);
                }
            }
        } else {
            setIsLoadingShimmer(true) //show effect
            ;
            //set popup variable to show modal
            setPopUpMsg("Something went wrong.");
            setPopupType("Error");
            setPopupTitle("Error");
            //redirect to the packages page
            setTimeout(function() {
                //location.href = process.env.BASE_URL + `/user/my-advertises`;
                setStep(2);
                //window scroll to top 
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }, 1000);
        }
    };
    //rozorpay payment gatway
    const razorpay_payment_gateway = async (param)=>{
        var ref;
        //let PlanPaymentAmount = currentPlanDetailValue.RemainingAmount
        const result = await fetch(process.env.BASE_URL + "/api/protect/razorpay", {
            method: "POST",
            body: JSON.stringify({
                plan_id: newPackageId,
                plan_amount: currentPlanDetailValue.total_gross_payment
            })
        });
        const Razdata = await result.json();
        //console.log('hiiiiiiiii11111111', Razdata)
        if ((Razdata === null || Razdata === void 0 ? void 0 : (ref = Razdata.data) === null || ref === void 0 ? void 0 : ref.status) == 200) {
            var ref2, ref3, ref4, ref5, ref6;
            setIsSubmittingProcessToPayement(false) //button enable and stop the sppiner
            ;
            //if (Razdata && Razdata?.status == 200) {
            //console.log('hii2222222222')     
            //set payment detail in object
            let setPymentDetailObject = {
                transaction_id: Razdata.data.id,
                ads_id: param.data.ads_id,
                package_type: newPackageType,
                package_name: currentPlanDetailValue === null || currentPlanDetailValue === void 0 ? void 0 : (ref2 = currentPlanDetailValue.new_package) === null || ref2 === void 0 ? void 0 : ref2.name,
                coupon_id: currentPlanDetailValue.coupon_id,
                coupon_amount: currentPlanDetailValue.coupon_discount,
                deduct_total_user_wallet_amount: currentPlanDetailValue.deduct_total_user_wallet_amount,
                transaction_amount: Razdata.data.amount,
                transaction_mode: 2,
                gst: currentPlanDetailValue.gst,
                total_amount: newPackageAmount,
                status: 1,
                remaining_amount: (currentPlanDetailValue === null || currentPlanDetailValue === void 0 ? void 0 : (ref3 = currentPlanDetailValue.ads_detail) === null || ref3 === void 0 ? void 0 : ref3.remaining_amount) || 0
            };
            const options = {
                key: "rzp_test_SzdPFKi5MgcYYh",
                currency: Razdata.data.currency,
                amount: Razdata.data.amount,
                name: currentPlanDetailValue.ads_detail.userName,
                description: "Advertisement Plan Payment",
                image: process.env.BASE_URL + "/images/dialmenow_company_logo.png",
                order_id: Razdata.data.id,
                notes: {
                    key: param.data.ads_id,
                    type: "ADS"
                },
                handler: async function(response) {
                    setPymentDetailObject = {
                        ...setPymentDetailObject,
                        ["razorpay_payment_id"]: response === null || response === void 0 ? void 0 : response.razorpay_payment_id
                    };
                    //console.log('razorpay_payment_gateway---->>>',setPymentDetailObject)
                    setIsLoadingShimmer(true) //hide effect
                    ;
                    const data = {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(setPymentDetailObject)
                    };
                    const res = await fetch(`${process.env.BASE_URL}/api/protect/update-advertisement-plan-payment-detail`, data);
                    const resJson = await res.json();
                    console.log("resJson---->>>>", resJson);
                    if (resJson.status == 200) {
                        //set popup variable to show modal
                        setPopUpMsg("Payment successfully! Please wait while we are redirecting.");
                        setPopupType("success");
                        setPopupTitle("Success");
                        if (isAddNewAds == "yes") {
                            //redirect to the packages page
                            setTimeout(function() {
                                setStep(3);
                                //window scroll to top 
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            }, 3000);
                        } else {
                            //redirect to the packages page
                            setTimeout(function() {
                                location.href = process.env.BASE_URL + `/user/my-advertises`;
                            }, 3000);
                        }
                    } else {
                        setIsLoadingShimmer(false);
                        return "";
                    }
                },
                prefill: {
                    name: currentPlanDetailValue === null || currentPlanDetailValue === void 0 ? void 0 : (ref4 = currentPlanDetailValue.ads_detail) === null || ref4 === void 0 ? void 0 : ref4.userName,
                    email: currentPlanDetailValue === null || currentPlanDetailValue === void 0 ? void 0 : (ref5 = currentPlanDetailValue.ads_detail) === null || ref5 === void 0 ? void 0 : ref5.userEmail,
                    contact: currentPlanDetailValue === null || currentPlanDetailValue === void 0 ? void 0 : (ref6 = currentPlanDetailValue.ads_detail) === null || ref6 === void 0 ? void 0 : ref6.UserPhone
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } else {
            //set popup variable to show modal
            setPopUpMsg("Something went wrong.");
            setPopupType("Error");
            setPopupTitle("Error");
        }
    };
    //hover out from packages box
    const handleMouseOut = ()=>{
        setIsHovering(false);
    };
    let previousCall = ()=>{
        setStep(1);
        //window scroll to top 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    if (isPayAndReview) {
        if (isLoadingShimmer) {
            //window scroll to top 
            window.scrollTo({
                top: 0,
                behavior: "smooth"
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shimmer_paymentSuccessLoad__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                ]
            });
        } else {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        message: popUpMsg,
                        title: popupTitle,
                        status: true,
                        setMessage: setPopUpMsg,
                        type: popupType
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().ReviewPay)}`,
                        id: "payAndReviewId",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().ReviewPayHead)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().Backpage)}`,
                                        children: isAddNewAds == "yes" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: previousCall,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-arrow-long-left me-2"
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "#!",
                                            passHref: true,
                                            prefetch: false,
                                            onClick: ()=>{
                                                setStep(2);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-arrow-long-left me-2"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "mb-0 ",
                                        children: "Review & Pay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    lg: 12,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().CustomerInfoReview)} + ' ' + ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().CustomerSubscription)} `,
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
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().ApplyLeft)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                    type: "text",
                                                                    size: "lg",
                                                                    ...register("coupon_code"),
                                                                    placeholder: "Coupon code",
                                                                    name: "coupon_code",
                                                                    onChange: couponformFieldChange,
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
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().CuponIcon)}`
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().ApplyLeftBtn)}`,
                                                            children: isApplyCouponCode ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                variant: "primary",
                                                                onClick: RemoveCouponCode,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-x"
                                                                    }),
                                                                    " "
                                                                ]
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                variant: "primary",
                                                                onClick: ApplyCouponCode,
                                                                children: " Apply "
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    children: "Wallet"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex justify-content-between",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().ApplyLeft)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Check), {
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
                                                                    formatter.format(currentPlanDetailValue.user_wallet_amount)
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().PackageTotal)}`,
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
                                                                                    formatter.format(newPackageAmount)
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
                                                                                        formatter.format(currentPlanDetailValue.gst)
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
                                                                                        formatter.format(currentPlanDetailValue.coupon_discount)
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().TotalPay)}`,
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
                                                                            formatter.format(currentPlanDetailValue.total_payable_amount)
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
                                            className: "d-flex justify-content-between my-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `text-center mt-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().PaymentGateway)}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                        src: "/images/MyAccount/razorpay.svg",
                                                        height: "25",
                                                        width: "114"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        onClick: processToPayment,
                                                        size: "md",
                                                        variant: "primary ms-auto",
                                                        className: "mt-sm-0 mt-3",
                                                        disabled: isSubmittingProcessToPayement,
                                                        children: [
                                                            isSubmittingProcessToPayement && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                animation: "border",
                                                                size: "sm",
                                                                className: "me-2"
                                                            }),
                                                            "Proceed to payment"
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
                ]
            });
        }
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    message: popUpMsg,
                    title: popupTitle,
                    status: true,
                    setMessage: setPopUpMsg,
                    type: popupType
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "",
                    id: "subscription-plan",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: ` ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().ProfileHeading)} d-flex align-items-center`,
                            children: [
                                isAddNewAds == "yes" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: previousCall,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fi-arrow-long-left me-2"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "#!",
                                    passHref: true,
                                    prefetch: false,
                                    onClick: ()=>{
                                        setStep(3);
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fi-arrow-long-left me-2"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "h3 mb-0 ",
                                    children: "Subscription Plan"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit(onSubmit),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `px-md-3 ${PlanMarginCls}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        children: packages.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: packages.map((pack, indx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    sm: 6,
                                                    md: 3,
                                                    className: "mb-4",
                                                    onMouseOut: handleMouseOut,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_AdsPlan__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        title: pack.name,
                                                        price: `₹${pack.amount}`,
                                                        offerprice: pack.offer_amount,
                                                        perclickprice: pack.per_click_charge,
                                                        offerperclickprice: pack.offer_per_click_charge,
                                                        perimpressionprice: pack.per_impression_charge,
                                                        offerperimpressionprice: pack.offer_per_impression_charge,
                                                        description: pack.description,
                                                        isBest: pack.is_best == "1" ? true : false,
                                                        button: {
                                                            href: "",
                                                            title: "Choose plan",
                                                            variant: newPackageId == pack.id ? "primary" : "outline-secondary",
                                                            props: {
                                                                onClick: ()=>planDetail(pack)
                                                            }
                                                        },
                                                        className: ` overflow-hidden border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().PricingPlanCard)}  ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().PricingPlanCardUpgrade)} ${pack.is_best == 1 && isHovering ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().PricingPlanCardcAtive) : ""}`
                                                    })
                                                }, indx)
                                            )
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center pt-md-4 pb-2 pb-md-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fi-star display-6 text-muted mb-4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "h5 mb-2",
                                                    children: "There are no Package yet!"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-muted pb-1",
                                                    children: "All your Package will be displayed here."
                                                })
                                            ]
                                        })
                                    })
                                }),
                                newPackageId != "" && (newPackageType == "1" || newPackageType == "2") ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                xs: 12,
                                                sm: "12",
                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group),
                                                controlId: "pr-job-title",
                                                className: "mb-4 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                        children: [
                                                            "Per day amount limit",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: "\xa0*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                        type: "text",
                                                        size: "lg",
                                                        placeholder: "Enter per day amount limit",
                                                        ...register("per_day_amount"),
                                                        className: `mt-2 form-control  ${formError.per_day_amount !== undefined ? "is-invalid" : ""}`,
                                                        onChange: formFieldChange,
                                                        value: currentPlanDetailValue.per_day_amount,
                                                        max: newPackageAmount
                                                    }),
                                                    formError.per_day_amount !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            formError.per_day_amount
                                                        ]
                                                    }) : ""
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OpenHour__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            days: days,
                                            SetDays: SetDays,
                                            setFormValues: setCurrentPlanDetailValue,
                                            is_dual_button: false,
                                            formValues: currentPlanDetailValue,
                                            csrfToken: csrfToken,
                                            specifyOpeningHoursChange: specifyOpeningHoursChange,
                                            AddMoreBtnCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().AddMoreBtn),
                                            StepheadCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().StepheadListing),
                                            dayValueCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().dayValue),
                                            TimeValueCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().TimeValue),
                                            OpenHourHeadCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().OpenHourHead),
                                            switchBtnColumnSize: "6",
                                            switchBtnColumnSizeXL: "3",
                                            switchBtnColumnSizeXS: "6",
                                            timeborderCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().timeborder),
                                            labelColumnSize: "2",
                                            businessOtherDetailsSize: "1"
                                        })
                                    ]
                                }) : null,
                                showToast && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ToastDismissible__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    showToast: showToast,
                                    message: "",
                                    messageType: messageType,
                                    title: error
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-flex mb-3 pt-3 mt-3 border-top",
                                    children: [
                                        isAddNewAds == "yes" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            onClick: previousCall,
                                            size: "md",
                                            variant: "outline-secondary",
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_19___default().PreviousStep)}`,
                                            children: " Previous "
                                        }),
                                        packages.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            type: "submit",
                                            size: "md",
                                            variant: "primary ms-auto",
                                            className: "mt-sm-0 mt-0",
                                            disabled: isSubmitting,
                                            children: [
                                                isSubmitting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    animation: "border",
                                                    size: "sm",
                                                    className: "me-2"
                                                }),
                                                "Submit"
                                            ]
                                        }) : ""
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpgradeAdsPlan);

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