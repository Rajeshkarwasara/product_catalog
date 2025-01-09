exports.id = 8961;
exports.ids = [8961];
exports.modules = {

/***/ 9542:
/***/ ((module) => {

// Exports
module.exports = {
	"ContentOverlay": "GuestBlog_ContentOverlay___4yKJ",
	"ImageroundNo": "GuestBlog_ImageroundNo__8ewQM",
	"SmallAdvetise": "GuestBlog_SmallAdvetise__t5AuF",
	"advertsieList": "GuestBlog_advertsieList__cYnrj",
	"publicationsMillion": "GuestBlog_publicationsMillion__V84Fh",
	"GrowBusiness": "GuestBlog_GrowBusiness__VKUeZ",
	"CreateManageAd": "GuestBlog_CreateManageAd__QsQPW",
	"AdvertiseBenefitsBox": "GuestBlog_AdvertiseBenefitsBox__zgYkp",
	"AdvertiseBenefitsIcon": "GuestBlog_AdvertiseBenefitsIcon__OYb14",
	"publicationsMillionBox": "GuestBlog_publicationsMillionBox__VimtG",
	"blogDetailsLi": "GuestBlog_blogDetailsLi__std5c",
	"workBoxIcon": "GuestBlog_workBoxIcon__1NeMv",
	"workBoxText": "GuestBlog_workBoxText__TJyb3",
	"workBox": "GuestBlog_workBox__pTA4s",
	"viewvideo": "GuestBlog_viewvideo__uRT1A",
	"FormCheckLabels": "GuestBlog_FormCheckLabels__DJ_ae",
	"smallTag": "GuestBlog_smallTag__3iC0F",
	"numberShape": "GuestBlog_numberShape__AD8pL",
	"partnershipText": "GuestBlog_partnershipText__TouSb",
	"numberShapeActive": "GuestBlog_numberShapeActive__EHirj",
	"businessPartnership": "GuestBlog_businessPartnership__WIOgO",
	"PartnerWhy": "GuestBlog_PartnerWhy__RXbc5",
	"PartnerWhyP": "GuestBlog_PartnerWhyP__H1J99",
	"PartnerWhyIcon": "GuestBlog_PartnerWhyIcon__C1YGY",
	"PartnerWhyText": "GuestBlog_PartnerWhyText__nXQTy",
	"PartnerWhyBox": "GuestBlog_PartnerWhyBox__HYEEy",
	"ourtestimonial": "GuestBlog_ourtestimonial__VTI6n",
	"SwiperControlors": "GuestBlog_SwiperControlors__GOsJO",
	"btn-prev": "GuestBlog_btn-prev__r5T1R",
	"btn-next": "GuestBlog_btn-next__TIHeo",
	"guestTop": "GuestBlog_guestTop__zloQy",
	"BlogPsotForm": "GuestBlog_BlogPsotForm__2omTo",
	"GuesBlogTopImg": "GuestBlog_GuesBlogTopImg__qE6p2",
	"GuestBogminiHead": "GuestBlog_GuestBogminiHead__kD4iT"
};


/***/ }),

/***/ 8961:
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
/* harmony import */ var _components_MessageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4301);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9542);
/* harmony import */ var _styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_10__);













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
const GuestBlogCardOverlay = ({ img , href , title , category , location , csrfToken , button , overlay , palnAmount ="1100" , badges , className , onclick , ContainerCls ="" , SmallAdvetiseCls ="" , session , ...props })=>{
    var ref, ref1, ref2;
    const { 0: formFields , 1: setFormFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: (session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.name) || "",
        email: (session === null || session === void 0 ? void 0 : (ref1 = session.user) === null || ref1 === void 0 ? void 0 : ref1.email) || "",
        company: "",
        message: "",
        phone: (session === null || session === void 0 ? void 0 : (ref2 = session.user) === null || ref2 === void 0 ? void 0 : ref2.phone) || "",
        terms: 0
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
                ["phone"]: session.user.phone,
                ["name"]: session.user.name,
                ["email"]: session.user.email
            };
            setFormFields(formFields);
        }
    }, [
        session
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    }, []);
    const razorpay_payment_gateway = async (gcap)=>{
        let gstAmount = Math.round(palnAmount * 18 / 100);
        let afterGst = gstAmount + palnAmount;
        const result = await fetch(process.env.BASE_URL + "/api/protect/razorpay", {
            method: "POST",
            body: JSON.stringify({
                plan_id: "",
                plan_amount: afterGst,
                captcha: gcap
            })
        });
        const data = await result.json();
        if (data.status == 200) {
            /**
       * Pranav Code for Insert Payment 
       */ const dataBody1 = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formFields.email,
                    name: formFields.name,
                    company: formFields.company,
                    phone: formFields.phone,
                    message: formFields.message,
                    rojzar_payment_id: "NULL",
                    amount: palnAmount,
                    total: afterGst,
                    gst: gstAmount,
                    payment_status: "0",
                    pay_type: "1",
                    record_id: ""
                })
            };
            const resSubscriber1 = await fetch(`${process.env.BASE_URL}/api/protect/guest-blogs`, dataBody1);
            const resultResdata = await resSubscriber1.json();
            const record_id = resultResdata.id;
            //console.log('resultRes',resultResdata);
            /**
       * Code End By Pranav 
       * 
       */ const options = {
                key: "rzp_test_SzdPFKi5MgcYYh",
                currency: data.data.currency,
                amount: data.data.amount,
                name: "Dialmenow",
                description: "Guest Blog Payment",
                image: "/images/dialmenow_company_logo.png",
                order_id: data.data.id,
                notes: {
                    key: "",
                    type: "Guest Blog"
                },
                handler: async function(response) {
                    /*setError("Advertisement request sent successfully!");
                    setMessageType("success");
                    setShowToast(true);
                    setAdvertisementSubmit(true)
                    window.location.href = '/advertise-with-us'*/ if (response === null || response === void 0 ? void 0 : response.razorpay_payment_id) {
                        const dataBody = {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: formFields.email,
                                name: formFields.name,
                                company: formFields.company,
                                phone: formFields.phone,
                                message: formFields.message,
                                rojzar_payment_id: response.razorpay_payment_id,
                                amount: palnAmount,
                                total: afterGst,
                                gst: gstAmount,
                                payment_status: "1",
                                pay_type: "2",
                                record_id: record_id
                            })
                        };
                        const resSubscriber = await fetch(`${process.env.BASE_URL}/api/protect/guest-blogs`, dataBody);
                        const resultRes = await resSubscriber.json();
                        if (resultRes.status == 201) {
                            setAlertType("danger");
                            setError("Your request not submitted. Please contact us at our mail.");
                            setPartnerSubmit(true);
                            setIsSubmitting(false);
                        } else {
                            setAlertType("success");
                            setError("Request submitted successfully.");
                            setPartnerSubmit(true);
                            setpartnerFormError(false); // reset first time error show
                            setFormFields({
                                name: "",
                                email: "",
                                company: "",
                                message: "",
                                terms: 0
                            });
                            setIsSubmitting(false);
                        //window.location.href = '/partner-with-us'
                        }
                    } else {
                        setAlertType("danger");
                        setError("Payment not processed right now. Please try after sometime.");
                        setPartnerSubmit(true);
                    }
                },
                prefill: {
                    name: formFields.name,
                    email: formFields.email,
                    contact: formFields.phone
                },
                modal: {
                    ondismiss: function() {
                        setPartnerSubmit(true);
                        setIsSubmitting(false);
                    }
                },
                config: {
                    display: {
                        hide: [
                            {
                                method: "paylater"
                            },
                            {
                                method: "emi"
                            }, 
                        ]
                    }
                }
            };
            const paymentObject = new window.Razorpay(options);
            await paymentObject.open();
            paymentObject.on("Payment.capture", function(response) {
                console.log("Payment failed---------", response);
            });
            console.log("________pay obj_____________", paymentObject);
        } else {
            //payment failed or cancelled
            console.log("----cancelled---------", data);
        }
    };
    const formFieldChange = async (e)=>{
        if (e.currentTarget.name == "terms") {
            formFields = {
                ...formFields,
                [e.currentTarget.name]: !formFields.terms
            };
            setFormFields(formFields);
            if (partnerFormError) {
                const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_6__/* .guestBlogFormValidate */ .wu)(formFields);
                setFormError(formResponse);
            }
        } else {
            formFields = {
                ...formFields,
                [e.target.name]: e.target.value
            };
            setFormFields(formFields);
            if (partnerFormError) {
                const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_6__/* .guestBlogFormValidate */ .wu)(formFields);
                setFormError(formResponse);
            }
        }
    };
    const partnerFormSubmit = async (event)=>{
        setpartnerFormError(true);
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_6__/* .guestBlogFormValidate */ .wu)(formFields);
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
            event.preventDefault();
            event.stopPropagation();
        } else {
            setIsSubmitting(true);
            let captchVal = recaptchaRef.current.getValue();
            if (captchVal) {
                recaptchaRef.current.reset();
                let paymentStatus = await razorpay_payment_gateway(captchVal);
            /*const resSubscriber = await fetch(`${process.env.BASE_URL}/api/protect/guest-blogs`, data);
                    const response = await resSubscriber.json();

                    if (response.status == 201) {
                        setAlertType("danger")
                        setShowAlert(true) // alert message will show
                        setError(response.msg)
                        setIsSubmitting(false)
                    }
                    else {
                        setPartnerSubmit(true)
                        setFormFields({ name: "", email: "", phone: "", company: "" });
                        setIsSubmitting(false)
                        window.location.href = '/partner-with-us'
                    }*/ } else {
                /*setAlertType("danger")
                setError("Invalid captcha.")
                setShowAlert(true) // alert message will show*/ setFormError((pre)=>({
                        ...pre,
                        ["captcha"]: "Captcha is required."
                    })
                );
                setIsSubmitting(false);
            }
        }
    };
    const setMessage = ()=>{
        setPartnerSubmit(false);
        setError("");
        setAlertType("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ...props,
                className: `card border-0 position-reletive ${className ? ` ${className}` : ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_11___default().GuesBlogTopImg)}`,
                        children: img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                width: "100%",
                                height: "480px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                src: img.src,
                                style: {
                                    width: "100%",
                                    height: "100%"
                                },
                                quality: "100",
                                layout: "fill"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_11___default().guestTop)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-6 col-md-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "card-footer content-overlay border-0 pt-lg-5 mt-lg-5 pt-md-2 mt-md-2 p-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "d-sm-flex justify-content-between align-items-end ",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-decoration-none text-light pe-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "h1 mb-2 mb-md-3 mb-sm-3 pe-lg-5 me-lg-5",
                                                        children: title
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-5 offset-lg-1 col-md-12 content-overlay py-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `bg-white p-3 p-sm-4 p-md-4 rounded ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_11___default().BlogPsotForm)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "mb-2 mb-sm-2 mb-md-3",
                                                    children: "Post your blog here"
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
                                                            className: "mb-2",
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
                                                                    placeholder: "Enter name",
                                                                    value: formFields === null || formFields === void 0 ? void 0 : formFields.name,
                                                                    name: "name",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.name !== undefined ? "is-invalid" : ""}`,
                                                                    required: true
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control.Feedback), {
                                                                    type: "invalid",
                                                                    tooltip: true,
                                                                    children: formError.name !== undefined ? formError.name : ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                            controlId: "ps-company",
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    children: [
                                                                        "Company",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                    placeholder: "Enter company",
                                                                    value: formFields === null || formFields === void 0 ? void 0 : formFields.company,
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
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    children: [
                                                                        "Email",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                    placeholder: "Enter email",
                                                                    value: formFields === null || formFields === void 0 ? void 0 : formFields.email,
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
                                                            controlId: "ps-phone",
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    children: [
                                                                        "Phone",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                    placeholder: "Enter phone",
                                                                    value: formFields === null || formFields === void 0 ? void 0 : formFields.phone,
                                                                    name: "phone",
                                                                    as: (react_number_format__WEBPACK_IMPORTED_MODULE_10___default()),
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                            controlId: "ps-message",
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                                    children: [
                                                                        "Message",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                                    as: "textarea",
                                                                    placeholder: "Enter message",
                                                                    value: formFields === null || formFields === void 0 ? void 0 : formFields.message,
                                                                    name: "message",
                                                                    onChange: formFieldChange,
                                                                    className: `form-control ${formError.message !== undefined ? "is-invalid" : ""}`,
                                                                    required: true
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control.Feedback), {
                                                                    type: "invalid",
                                                                    tooltip: true,
                                                                    children: formError.message !== undefined ? formError.message : ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Check), {
                                                            type: "checkbox",
                                                            id: "terms-agree",
                                                            label: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "By joining, I agree to the "
                                                                }, 1),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: process.env.BASE_URL + "/pages/guest-blog-term-of-use",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        children: "Terms of use"
                                                                    })
                                                                }, 2),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: " and "
                                                                }, 3),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: process.env.BASE_URL + "/pages/guest-blog-privacy-policy",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        children: "Privacy policy"
                                                                    })
                                                                }, 4), 
                                                            ],
                                                            required: true,
                                                            name: "terms",
                                                            className: ` mb-2`,
                                                            checked: formFields.terms,
                                                            onChange: formFieldChange
                                                        }),
                                                        formError.terms !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "invalid-tooltip mb-2",
                                                            style: {
                                                                display: "block"
                                                            },
                                                            children: formError.terms
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            ref: recaptchaRef,
                                                            sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                                            size: "normal"
                                                        }),
                                                        formError.captcha !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "invalid-tooltip",
                                                            style: {
                                                                display: "block"
                                                            },
                                                            children: formError.captcha
                                                        }),
                                                        isSubmitting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            type: "button",
                                                            size: "lg",
                                                            variant: "primary mt-3 w-100",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                    animation: "border",
                                                                    size: "sm",
                                                                    role: "status",
                                                                    className: "me-2"
                                                                }),
                                                                "Wait..."
                                                            ]
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            type: "button",
                                                            size: "lg",
                                                            variant: "primary mt-3 w-100",
                                                            onClick: partnerFormSubmit,
                                                            children: [
                                                                "Pay only ",
                                                                palnAmount,
                                                                "/-"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                            className: "w-100 d-inline-block text-center mt-md-0 mt-sm-2 mt-2 mb-0 fs-sm",
                                                            children: [
                                                                "Pay only ",
                                                                palnAmount,
                                                                "/- (Plus 18% GST) and publish a blog with dialmenow"
                                                            ]
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
            }),
            partnerSubmit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MessageModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                type: alertType,
                message: error,
                title: alertType == "success" ? "Thank you!" : "Error",
                status: true,
                setMessage: setMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GuestBlogCardOverlay);


/***/ })

};
;