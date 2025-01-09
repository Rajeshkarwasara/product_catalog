exports.id = 3340;
exports.ids = [3340];
exports.modules = {

/***/ 3017:
/***/ ((module) => {

// Exports
module.exports = {
	"ContentOverlay": "PartnerWithUs_ContentOverlay__TWliT",
	"ImageroundNo": "PartnerWithUs_ImageroundNo__wdm75",
	"SmallAdvetise": "PartnerWithUs_SmallAdvetise__AZWoC",
	"advertsieList": "PartnerWithUs_advertsieList__wHDYX",
	"publicationsMillion": "PartnerWithUs_publicationsMillion__m_baX",
	"GrowBusiness": "PartnerWithUs_GrowBusiness__ZMP8X",
	"CreateManageAd": "PartnerWithUs_CreateManageAd__hJjQE",
	"AdvertiseBenefitsBox": "PartnerWithUs_AdvertiseBenefitsBox__3yBKj",
	"AdvertiseBenefitsIcon": "PartnerWithUs_AdvertiseBenefitsIcon__IMlYJ",
	"publicationsMillionBox": "PartnerWithUs_publicationsMillionBox__AYdVh",
	"partnerCard": "PartnerWithUs_partnerCard__QsrRs",
	"workBoxIcon": "PartnerWithUs_workBoxIcon__3a2SG",
	"workBoxText": "PartnerWithUs_workBoxText__aQdqB",
	"workBox": "PartnerWithUs_workBox__NLDEi",
	"viewvideo": "PartnerWithUs_viewvideo__6OT0_",
	"FormCheckLabels": "PartnerWithUs_FormCheckLabels__bsBhx",
	"smallTag": "PartnerWithUs_smallTag__Zz2aR",
	"numberShape": "PartnerWithUs_numberShape__gIKia",
	"partnershipText": "PartnerWithUs_partnershipText__6oph6",
	"numberShapeActive": "PartnerWithUs_numberShapeActive__Be_91",
	"businessPartnership": "PartnerWithUs_businessPartnership__Kq_VZ",
	"PartnerWhy": "PartnerWithUs_PartnerWhy__l3uXt",
	"PartnerWhyP": "PartnerWithUs_PartnerWhyP__vCtOC",
	"PartnerWhyIcon": "PartnerWithUs_PartnerWhyIcon__ueysU",
	"PartnerWhyText": "PartnerWithUs_PartnerWhyText__gVuze",
	"PartnerWhyBox": "PartnerWithUs_PartnerWhyBox__bMqaz",
	"PartnerFoemHead": "PartnerWithUs_PartnerFoemHead__7Zcqo",
	"partnerLi": "PartnerWithUs_partnerLi__Dq9eA",
	"businessPartnershipRight": "PartnerWithUs_businessPartnershipRight__IwD7D",
	"OTPVerification": "PartnerWithUs_OTPVerification__9O3Hp"
};


/***/ }),

/***/ 4086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5698);


const GalleryItem = ({ thumb , video , imgAlt , caption , light , className , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        ...props,
        "data-sub-html": `<h6 class='fs-sm text-light'>${imgAlt ? imgAlt : caption}</h6>`,
        className: `gallery-item d-flex btn btn-lg ${video ? " video-item" : ""}${className ? ` ${className}` : ""}`,
        children: [
            thumb && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: thumb[0],
                width: thumb[1],
                height: thumb[2],
                alt: caption ? caption : imgAlt,
                light: light ? 1 : 0
            }),
            caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "gallery-item-caption",
                children: caption
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryItem);


/***/ }),

/***/ 9738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helper_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(261);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_gcaptchVerify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8130);
/* harmony import */ var _components_MessageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4301);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3017);
/* harmony import */ var _styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_12__);













const PropertyPartnerCardOverlay = ({ img , href , title , category , location , csrfToken , button , overlay , badges , className , onclick , ContainerCls ="" , SmallAdvetiseCls ="" , session , ...props })=>{
    var ref;
    const { 0: formFields , 1: setFormFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        phone: (session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.phone) || "",
        company: "",
        service: "1",
        comment: ""
    });
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: otpPage , 1: setOtpPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const { 0: partnerWithUsPage , 1: setPartnerWithUsPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: resendBtn , 1: setResendBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: otpInput , 1: setOtpInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: signLoad , 1: setSignLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); //signin loader
    const { 0: showAlert , 1: setShowAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const { 0: alertType , 1: setAlertType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("danger"); // error messgae will show in Alert
    const { 0: partnerSubmit , 1: setPartnerSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isSubmitting , 1: setIsSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: otpSubmit , 1: setOtpSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: otp1 , 1: setOtp1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // OTP
    const { 0: otp2 , 1: setOtp2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // OTP
    const { 0: otp3 , 1: setOtp3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // OTP
    const { 0: otp4 , 1: setOtp4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // OTP
    const { 0: phoneNumberField , 1: setPhoneNumberField  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: partnerFormError , 1: setpartnerFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: partnerOTPcounter , 1: setPartnerOTPcounter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(59);
    let phoneNumber = phoneNumberField ? phoneNumberField : formFields.phone;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = partnerOTPcounter > 0 && setInterval(()=>setPartnerOTPcounter(partnerOTPcounter - 1)
        , 1000);
        return ()=>clearInterval(timer)
        ;
    }, [
        partnerOTPcounter
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (session) {
            formFields = {
                ...formFields,
                ["phone"]: session.user.phone
            };
            setFormFields(formFields);
        }
    }, [
        session
    ]);
    const formFieldChange = async (e)=>{
        formFields = {
            ...formFields,
            [e.target.name]: e.target.value
        };
        setFormFields(formFields);
        if (e.target.name == "phone") {
            setPhoneNumberField(e.target.value);
        }
        if (partnerFormError) {
            const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_6__/* .partnerFormValidate */ .dQ)(formFields);
            setFormError(formResponse);
        }
    };
    const partnerOneFormSubmit = async (event)=>{
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_6__/* .partnerFormValidate */ .dQ)(formFields, 1);
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
            event.preventDefault();
            event.stopPropagation();
        } else {
            let captchVal = recaptchaRef.current.getValue();
            recaptchaRef.current.reset();
            if (captchVal) {
                //call API to send OTP
                let phonePost = phoneNumber;
                let addOptions = {
                    method: "POST",
                    body: JSON.stringify({
                        phone: phonePost,
                        captcha: captchVal,
                        signin: false
                    })
                };
                let addRes = await fetch(`${process.env.BASE_URL}/api/protect/send-otp`, addOptions);
                let addJson = await addRes.json();
                if (addJson.status != "undefined" && addJson.status == 200) {
                    setOtpInput(true);
                    setAlertType("success");
                    setShowAlert(true); // alert message will show
                    setError(addJson.msg);
                    setOtpPage(true);
                } else if (addJson.status != "undefined") {
                    setAlertType("danger");
                    setShowAlert(true); // alert message will show
                    setError(addJson.msg);
                } else {
                    setAlertType("danger");
                    setShowAlert(true); // alert message will show
                    setError("Please try after sometime");
                }
            } else {
                setAlertType("danger");
                setError("Invalid captcha.");
                setShowAlert(true); // alert message will show
            }
        }
    };
    const handleSubmit = async (event)=>{
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_6__/* .partnerFormValidate */ .dQ)(formFields, 2);
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
            event.preventDefault();
            event.stopPropagation();
        } else {
            let captchVal = recaptchaRef.current.getValue();
            recaptchaRef.current.reset();
            if (captchVal) {
                //check OTP if OTP available then verify OTP
                let otp = otp1 + otp2 + otp3 + otp4;
                if (otp.length > 0) {
                    //call API for OTP verify
                    let phonePost = phoneNumber;
                    let addOptions = {
                        method: "POST",
                        body: JSON.stringify({
                            phone: phonePost,
                            captcha: captchVal,
                            otp: otp,
                            pertnerWithUs: true
                        })
                    };
                    let addRes = await fetch(`${process.env.BASE_URL}/api/protect/send-otp-verify`, addOptions);
                    let addJson = await addRes.json();
                    if (addJson.status != "undefined" && addJson.status == 200) {
                        //reloadSession()
                        setPartnerWithUsPage(true);
                        setOtpSubmit(true);
                        setOtpPage(false);
                        setTimeout(()=>{
                            setShowAlert(false);
                            setOtpSubmit(false);
                        }, 2000);
                    } else {
                        setAlertType("danger");
                        setShowAlert(true); // alert message will show
                        setError("Invalid OTP.");
                    }
                } else {
                    setAlertType("danger");
                    setShowAlert(true); // alert message will show
                    setError("Invalid OTP.");
                }
            } else {
                setAlertType("danger");
                setError("Invalid captcha.");
                setShowAlert(true); // alert message will show
            }
        }
    };
    const partnerFormSubmit = async (event)=>{
        setpartnerFormError(true);
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_6__/* .partnerFormValidate */ .dQ)(formFields, "3");
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
            event.preventDefault();
            event.stopPropagation();
        } else {
            setIsSubmitting(true);
            const data = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formFields.email,
                    name: formFields.name,
                    phone: phoneNumber,
                    company: formFields.company,
                    service: formFields.service,
                    comment: formFields.comment
                })
            };
            let captchVal = recaptchaRef.current.getValue();
            recaptchaRef.current.reset();
            if (captchVal) {
                var captchStatus = await (0,_lib_gcaptchVerify__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(captchVal);
                if (captchStatus) {
                    const resSubscriber = await fetch(`${process.env.BASE_URL}/api/protect/partner-with-us`, data);
                    const response = await resSubscriber.json();
                    if (response.status == 201) {
                        setAlertType("danger");
                        setShowAlert(true); // alert message will show
                        setError(response.msg);
                        setIsSubmitting(false);
                    } else {
                        setPartnerSubmit(true);
                        setFormFields({
                            name: "",
                            email: "",
                            phone: "",
                            company: ""
                        });
                        setIsSubmitting(false);
                        window.location.href = "/partner-with-us";
                    }
                } else {
                    setAlertType("danger");
                    setError("Invalid captcha.");
                    setShowAlert(true); // alert message will show
                    setIsSubmitting(false);
                }
            } else {
                setAlertType("danger");
                setError("Invalid captcha.");
                setShowAlert(true); // alert message will show
                setIsSubmitting(false);
            }
        }
    };
    // focus on next field
    const onFocusSubmit = async (e)=>{
        var target = e.srcElement || e.target;
        var maxLength = parseInt(target.attributes["maxlength"].value, 10);
        var myLength = target.value.length;
        if (myLength >= maxLength) {
            var next = target;
            while(next = next.nextElementSibling){
                if (next == null) break;
                if (next.tagName.toLowerCase() === "input") {
                    next.focus();
                    break;
                }
            }
        } else if (myLength === 0) {
            var previous = target;
            while(previous = previous.previousElementSibling){
                if (previous == null) break;
                if (previous.tagName.toLowerCase() === "input") {
                    previous.focus();
                    break;
                }
            }
        }
    };
    const setMessage = ()=>{
        setOtpSubmit(false);
    //setShowLogin(false)
    };
    const resendOTP = async ()=>{
        if (partnerOTPcounter == 0) {
            //send OTP again
            let srRes = await fetch(`${process.env.BASE_URL}/api/protect/resend-otp`, {
                method: "POST",
                body: JSON.stringify({
                    businessID: "",
                    userID: "",
                    phone: phoneNumber
                })
            });
            let srJson = await srRes.json();
            if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
                setAlertType("success");
                setShowAlert(true); // alert message will show
                setError(srJson.msg);
                setPartnerOTPcounter(59);
            } else {
                setAlertType("danger");
                setError(srJson.msg);
                setShowAlert(true); // alert message will show
                setPartnerOTPcounter(0);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ...props,
                className: `card border-0 overflow-hidden${className ? ` ${className}` : ""}`,
                children: [
                    img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        src: img.src,
                        loading: "eager",
                        layout: "fill",
                        objectFit: "cover",
                        quality: 100,
                        alt: img.alt,
                        className: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${ContainerCls}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "card-footer content-overlay border-0 p-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-sm-flex justify-content-between align-items-end ",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-decoration-none text-light pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `mb-2  ${SmallAdvetiseCls}`,
                                                        children: category
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "h1 text-light mb-1 text-dark pe-xl-5 me-xl-5 lh-sm pe-lg-0 me-lg-0",
                                                        children: title
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-5 offset-lg-1 content-overlay py-2 col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: ` bg-white p-4 rounded`,
                                        children: [
                                            showAlert && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                variant: alertType,
                                                className: "d-flex",
                                                delay: "3000",
                                                onClose: ()=>setShowAlert(false)
                                                ,
                                                dismissible: true,
                                                children: [
                                                    alertType == "success" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-check-circle me-2 me-sm-3 lead"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-x-circle me-2 me-sm-3 lead"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            error,
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            }),
                                            otpPage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: `mb-2 text-center ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_12___default().OTPVerification)}`,
                                                        children: "OTP Verification"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        id: "OtpVerify",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "hidden",
                                                                name: "csrfToken",
                                                                defaultValue: csrfToken
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                                controlId: "vlogin-phone",
                                                                className: "mb-4 text-center",
                                                                children: [
                                                                    phoneNumber !== "undefined" && phoneNumber !== null && phoneNumber.length == 10 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                        className: "",
                                                                        children: [
                                                                            "Enter the OTP sent to +91 -",
                                                                            " ",
                                                                            phoneNumber.substr(0, 6) + "****"
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                        type: "text",
                                                                        placeholder: "Enter Mobile Number",
                                                                        value: session.user.phone ? session.user.phone : formFields.phone,
                                                                        autoComplete: "off",
                                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_7___default()),
                                                                        onChange: formFieldChange,
                                                                        pattern: "[0-9]{10}",
                                                                        format: "##########",
                                                                        name: "phone",
                                                                        required: true
                                                                    }),
                                                                    resendBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                        variant: "warning py-1 px-2 mt-1",
                                                                        size: "sm",
                                                                        children: "Resend OTP"
                                                                    })
                                                                ]
                                                            }),
                                                            otpInput && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                                controlId: "vlogin-otp",
                                                                className: "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "d-flex VerifyOtpCls justify-content-center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                                type: "text",
                                                                                placeholder: "0",
                                                                                value: otp1,
                                                                                autoComplete: "off",
                                                                                as: (react_number_format__WEBPACK_IMPORTED_MODULE_7___default()),
                                                                                onChange: (val)=>{
                                                                                    setOtp1(val.target.value);
                                                                                },
                                                                                pattern: "[0-9]{1}",
                                                                                format: "#",
                                                                                required: true,
                                                                                className: "otp_field",
                                                                                maxlength: "1",
                                                                                onKeyUp: onFocusSubmit
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                                type: "text",
                                                                                placeholder: "0",
                                                                                value: otp2,
                                                                                autoComplete: "off",
                                                                                as: (react_number_format__WEBPACK_IMPORTED_MODULE_7___default()),
                                                                                onChange: (val)=>{
                                                                                    setOtp2(val.target.value);
                                                                                },
                                                                                pattern: "[0-9]{1}",
                                                                                format: "#",
                                                                                required: true,
                                                                                className: "otp_field",
                                                                                maxlength: "1",
                                                                                onKeyUp: onFocusSubmit
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                                type: "text",
                                                                                placeholder: "0",
                                                                                value: otp3,
                                                                                autoComplete: "off",
                                                                                as: (react_number_format__WEBPACK_IMPORTED_MODULE_7___default()),
                                                                                onChange: (val)=>{
                                                                                    setOtp3(val.target.value);
                                                                                },
                                                                                pattern: "[0-9]{1}",
                                                                                format: "#",
                                                                                required: true,
                                                                                className: "otp_field",
                                                                                maxlength: "1",
                                                                                onKeyUp: onFocusSubmit
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                                type: "text",
                                                                                placeholder: "0",
                                                                                value: otp4,
                                                                                autoComplete: "off",
                                                                                as: (react_number_format__WEBPACK_IMPORTED_MODULE_7___default()),
                                                                                onChange: (val)=>{
                                                                                    setOtp4(val.target.value);
                                                                                },
                                                                                pattern: "[0-9]{1}",
                                                                                format: "#",
                                                                                required: true,
                                                                                className: "otp_field",
                                                                                maxlength: "1",
                                                                                onKeyUp: onFocusSubmit
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "mb-1 mt-3 w-100 text-center fs-sm",
                                                                        children: partnerOTPcounter > 0 ? "Resend OTP in 00:" + partnerOTPcounter : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                "Didn't receive code?",
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: "javascript:void(0)",
                                                                                    onClick: resendOTP,
                                                                                    children: [
                                                                                        " ",
                                                                                        "Resend OTP"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                ref: recaptchaRef,
                                                                sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                                                size: "normal"
                                                            }),
                                                            otpInput && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                type: "button",
                                                                size: "md",
                                                                variant: "primary mt-3 w-100",
                                                                onClick: handleSubmit,
                                                                children: "Verify"
                                                            }),
                                                            signLoad && !otpInput && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                type: "button",
                                                                size: "lg",
                                                                variant: "primary rounded-pill w-100",
                                                                onClick: handleSubmit,
                                                                children: "Send OTP"
                                                            }),
                                                            !signLoad && !otpInput && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                size: "lg",
                                                                variant: "primary rounded-pill w-100",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                        animation: "border",
                                                                        size: "sm",
                                                                        role: "status",
                                                                        className: "me-2"
                                                                    }),
                                                                    "Wait..."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }) : partnerWithUsPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    id: "user-partner-add",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "hidden",
                                                            name: "csrfToken",
                                                            defaultValue: csrfToken
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                            controlId: "ps-name",
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    children: [
                                                                        "Name",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                    type: "text",
                                                                    placeholder: "Enter name",
                                                                    value: formFields.name,
                                                                    name: "name",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.name !== undefined ? "is-invalid" : ""}`,
                                                                    required: true
                                                                }),
                                                                formError.name !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control.Feedback), {
                                                                    type: "invalid",
                                                                    tooltip: true,
                                                                    children: [
                                                                        " ",
                                                                        formError.name
                                                                    ]
                                                                }) : ""
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                            controlId: "ps-company",
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    children: [
                                                                        "Company Name",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                    type: "text",
                                                                    placeholder: "Enter company",
                                                                    value: formFields.company,
                                                                    name: "company",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.company !== undefined ? "is-invalid" : ""}`,
                                                                    required: true
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control.Feedback), {
                                                                    type: "invalid",
                                                                    tooltip: true,
                                                                    children: formError.company !== undefined ? formError.company : ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                            controlId: "ps-email",
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    children: [
                                                                        "Email Address",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                    type: "email",
                                                                    placeholder: "Enter email",
                                                                    value: formFields.email,
                                                                    name: "email",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.email !== undefined ? "is-invalid" : ""}`,
                                                                    required: true
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control.Feedback), {
                                                                    type: "invalid",
                                                                    tooltip: true,
                                                                    children: formError.email !== undefined ? formError.email : ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                            controlId: "ps-number",
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    children: "Phone Number"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                    type: "number",
                                                                    placeholder: "Enter number",
                                                                    value: phoneNumber,
                                                                    name: "number",
                                                                    className: `form-control`,
                                                                    readOnly: true,
                                                                    required: true
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                            controlId: "ps-email",
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    children: [
                                                                        "Comment",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                    as: "textarea",
                                                                    placeholder: "Enter comment",
                                                                    value: formFields.comment,
                                                                    name: "comment",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.comment !== undefined ? "is-invalid" : ""}`,
                                                                    required: true
                                                                }),
                                                                formError.comment !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control.Feedback), {
                                                                    type: "invalid",
                                                                    tooltip: true,
                                                                    children: formError.comment
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                            controlId: "ps-email",
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    className: "w-100",
                                                                    children: [
                                                                        "Select Service Partners",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Check), {
                                                                    inline: true,
                                                                    type: "radio",
                                                                    id: "radio-1",
                                                                    name: "service",
                                                                    value: "1",
                                                                    onChange: formFieldChange,
                                                                    label: "Dial Me Now",
                                                                    defaultChecked: true
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Check), {
                                                                    inline: true,
                                                                    type: "radio",
                                                                    id: "radio-2",
                                                                    name: "service",
                                                                    label: "SMS Me Now",
                                                                    value: "2",
                                                                    onChange: formFieldChange
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Check), {
                                                                    inline: true,
                                                                    type: "radio",
                                                                    id: "radio-3",
                                                                    name: "service",
                                                                    value: "3",
                                                                    onChange: formFieldChange,
                                                                    label: "Affiliate Marketing"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            ref: recaptchaRef,
                                                            sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                                            size: "normal"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            type: "button",
                                                            size: "md",
                                                            variant: "primary w-100 mt-3",
                                                            onClick: partnerFormSubmit,
                                                            disabled: isSubmitting,
                                                            children: [
                                                                isSubmitting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                    animation: "border",
                                                                    size: "sm",
                                                                    className: "me-2"
                                                                }),
                                                                "Submit"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: `mb-3 mb-sm-2 mb-md-3 ${(_styles_PartnerWithUs_module_css__WEBPACK_IMPORTED_MODULE_12___default().PartnerFoemHead)}`,
                                                        children: "Partner with Dialmenow"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        id: "user-partner-add",
                                                        className: "dialmenowModal",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "hidden",
                                                                name: "csrfToken",
                                                                defaultValue: csrfToken
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                                controlId: "ps-phone",
                                                                className: "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                        children: [
                                                                            "Mobile No",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                        type: "tel",
                                                                        placeholder: "Your mobile no",
                                                                        value: formFields.phone,
                                                                        name: "phone",
                                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_7___default()),
                                                                        pattern: "[0-9]{10}",
                                                                        format: "##########",
                                                                        onChange: formFieldChange,
                                                                        className: `form-control ${formError.phone !== undefined ? "is-invalid" : ""}`,
                                                                        required: true
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.phone !== undefined ? formError.phone : ""
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                ref: recaptchaRef,
                                                                sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                                                size: "normal"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                type: "button",
                                                                size: "lg",
                                                                variant: "primary mt-3 w-100",
                                                                onClick: partnerOneFormSubmit,
                                                                children: "Get OTP"
                                                            })
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            partnerSubmit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MessageModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                type: "success",
                message: "Request sent successfully",
                title: "Thank you!",
                status: true,
                setMessage: setMessage
            }),
            otpSubmit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MessageModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                type: "success",
                message: "OTP verified successfully!",
                title: "OTP Verified",
                status: true,
                setMessage: setMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyPartnerCardOverlay);


/***/ })

};
;