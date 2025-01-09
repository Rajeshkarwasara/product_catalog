exports.id = 4276;
exports.ids = [4276];
exports.modules = {

/***/ 4928:
/***/ ((module) => {

// Exports
module.exports = {
	"ContentOverlay": "Advertise_ContentOverlay__P8EcD",
	"ImageroundNo": "Advertise_ImageroundNo__L4UZ_",
	"SmallAdvetise": "Advertise_SmallAdvetise__Ixfh_",
	"advertsieList": "Advertise_advertsieList__g6Ier",
	"publicationsMillion": "Advertise_publicationsMillion__bG8_g",
	"GrowBusiness": "Advertise_GrowBusiness__Ny__m",
	"CreateManageAd": "Advertise_CreateManageAd__FaScZ",
	"AdvertiseBenefitsBox": "Advertise_AdvertiseBenefitsBox__Mh6OF",
	"AdvertiseBenefitsIcon": "Advertise_AdvertiseBenefitsIcon__rS9KZ",
	"publicationsMillionBox": "Advertise_publicationsMillionBox__vJssw",
	"workBoxIcon": "Advertise_workBoxIcon__NpED1",
	"workBoxText": "Advertise_workBoxText__VTaot",
	"workBox": "Advertise_workBox__7VY_d",
	"viewvideo": "Advertise_viewvideo__XTlSs",
	"FormCheckLabels": "Advertise_FormCheckLabels__LW0nI",
	"smallTag": "Advertise_smallTag__36lCS",
	"backBtn": "Advertise_backBtn__1Y_vk",
	"noListhead": "Advertise_noListhead__0p_XK",
	"noListLeft": "Advertise_noListLeft__xEQoN",
	"noListSuggestions": "Advertise_noListSuggestions__KHSvP",
	"noListheadBorder": "Advertise_noListheadBorder__Tlf_2",
	"BusinessDetailsHeroLeft": "Advertise_BusinessDetailsHeroLeft__Vp6Dd",
	"ImagesHeadNew": "Advertise_ImagesHeadNew__8bcFy",
	"AdvertiseHead": "Advertise_AdvertiseHead__ESW5n",
	"AdvertiseBenefits": "Advertise_AdvertiseBenefits__mBmbK",
	"DialmenowWork": "Advertise_DialmenowWork__61w_6",
	"timeborder": "Advertise_timeborder__iOYSr",
	"PreviousStep": "Advertise_PreviousStep__Ixqm6",
	"NextStep": "Advertise_NextStep__p_KP4"
};


/***/ }),

/***/ 7463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4692);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3__);




const AdvertisePropertyCardOverlay = ({ img , href , title , category , location , button , overlay , badges , className , ContentOverlayCls ="" , ImageroundNoCls ="" , ContainerCls ="" , SmallAdvetiseCls ="" , advertsieListCls ="" , onclick , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...props,
        className: `card border-0 overflow-hidden${className ? `${className}` : ""}`,
        children: img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                src: img.src,
                layout: "fill",
                objectFit: "cover",
                quality: 100,
                alt: img.alt,
                className: `rounded-3 ${ImageroundNoCls}`
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvertisePropertyCardOverlay);


/***/ }),

/***/ 8087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ToastDismissible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3198);
/* harmony import */ var _helper_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(261);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _partials_VerifyOtp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7936);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9270);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_13__);















const AdvertiseWithUsModal = ({ csrfToken , onSwap , pillButtons , ...props })=>{
    const { 0: formFields , 1: setFormFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        phone: "",
        user_id: "0"
    });
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: otpPage , 1: setOtpPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const { 0: messageType , 1: setMessageType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: showToast , 1: setShowToast  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: verifiedUser , 1: setVerifiedUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    const { 0: isLoading , 1: setIsloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false) //use loder
    ;
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: stepOneError , 1: setStepOneError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.useSession)() //use login session   
    ;
    const { 0: showAlert , 1: setShowAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const { 0: alertType , 1: setAlertType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("danger"); // error messgae will show in Alert
    const formFieldChange = async (e)=>{
        e.preventDefault();
        formFields = {
            ...formFields,
            [e.target.name]: e.target.value
        };
        setFormFields(formFields);
        if (stepOneError) {
            const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_7__/* .advertiseFormValidate */ .hH)(formFields);
            setFormError(formResponse);
        }
    };
    const advertiseFormSubmit = async (event)=>{
        setStepOneError(true);
        await setShowToast(false);
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_7__/* .advertiseFormValidate */ .hH)(formFields);
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (session && session !== "undefined" && session !== null) {
                //set the user id in forms value
                var updateFormValues = {
                    ...formFields,
                    ["user_id"]: session.user.id,
                    ["name"]: session.user.name,
                    ["phone"]: session.user.phone,
                    ["email"]: session.user.email
                };
                setFormFields(updateFormValues);
            } else {
                var updateFormValues = {
                    ...formFields,
                    ["user_id"]: "0"
                };
                setFormFields(updateFormValues);
            }
            let captchVal = recaptchaRef.current.getValue();
            recaptchaRef.current.reset();
            if (captchVal) {
                //call API to send OTP
                let phonePost = formFields.phone;
                let addOptions = {
                    method: "POST",
                    body: JSON.stringify({
                        "phone": phonePost,
                        "captcha": captchVal,
                        "signin": false
                    })
                };
                let addRes = await fetch(`${process.env.BASE_URL}/api/protect/send-otp`, addOptions);
                let addJson = await addRes.json();
                console.log(addJson);
                if (addJson.status != "undefined" && addJson.status == 200) {
                    setAlertType("success");
                    setShowAlert(true) // alert message will show
                    ;
                    setError(addJson.msg);
                    setOtpPage(true);
                } else if (addJson.status != "undefined") {
                    setAlertType("danger");
                    setShowAlert(true) // alert message will show
                    ;
                    setError(addJson.msg);
                } else {
                    setAlertType("danger");
                    setShowAlert(true) // alert message will show
                    ;
                    setError("Please try after sometime");
                }
            } else {
                setAlertType("danger");
                setError("Invalid captcha.");
                setShowAlert(true) // alert message will show
                ;
            }
        }
    };
    const handleOTP = ()=>{
        setOtpPage(false);
    };
    if (verifiedUser) {
        setVerifiedUser(false);
        console.log("----*********------");
        props.onHide(false);
        setIsloading(true);
        window.location.href = "/advertise-with-us/detail";
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!props.show) {
            setFormFields({
                name: "",
                phone: ""
            });
            setShowToast(false);
            setError("");
            setIsloading(false);
            setMessageType("");
            setFormError({});
        }
    }, [
        props.show
    ]);
    if (otpPage) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : "",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_VerifyOtp__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    centered: true,
                    size: "",
                    pillButtons: true,
                    phoneNumber: formFields.phone,
                    show: otpPage,
                    userID: 0,
                    titleMsg: "Verify",
                    removeClose: true,
                    onHide: handleOTP,
                    isOTP: true,
                    setVerifiedUser: setVerifiedUser,
                    isFromFreeListing: true,
                    isSignIN: false,
                    loginFromOtp: true,
                    formData: formFields
                })
            ]
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
            ...props,
            className: "signin-modal dialmenowModal ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
                className: "px-0 py-2 py-sm-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                        onClick: props.onHide,
                        "aria-label": "Close modal",
                        className: "position-absolute top-0 end-0 mt-3 me-3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row mx-0 align-items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-12 px-3 pt-4 pb-1 px-sm-4 pb-sm-3 pt-md-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    class: "blog-title text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        class: "mb-3",
                                        children: "Advertise with us !"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "user-advertise-add",
                                    children: [
                                        showAlert && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_13___default()), {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "hidden",
                                            name: "csrfToken",
                                            defaultValue: csrfToken
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                                            controlId: "ps-name",
                                            className: "mb-3 mb-sm-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                                    children: [
                                                        "Name",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-danger",
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                    type: "text",
                                                    placeholder: "Enter name",
                                                    value: formFields.name,
                                                    name: "name",
                                                    onChange: formFieldChange,
                                                    className: `form-control ${formError.name !== undefined ? "is-invalid" : ""}`,
                                                    required: true
                                                }),
                                                formError.name !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError.name
                                                    ]
                                                }) : ""
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                                            controlId: "ps-phone",
                                            className: "mb-3 mb-sm-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                                    children: [
                                                        "Mobile No",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-danger",
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                    type: "tel",
                                                    placeholder: "Enter mobile no",
                                                    value: formFields.phone,
                                                    name: "phone",
                                                    as: (react_number_format__WEBPACK_IMPORTED_MODULE_12___default()),
                                                    pattern: "[0-9]{10}",
                                                    format: "##########",
                                                    onChange: formFieldChange,
                                                    className: `form-control ${formError.phone !== undefined ? "is-invalid" : ""}`,
                                                    required: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: formError.phone !== undefined ? formError.phone : ""
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            ref: recaptchaRef,
                                            sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                            size: "normal"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            type: "button",
                                            size: "lg",
                                            variant: `primary ${pillButtons ? "" : ""} w-100`,
                                            className: "mt-3",
                                            onClick: advertiseFormSubmit,
                                            children: "Next"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-12 px-8 pt-4 pb-8 px-sm-10 pb-sm-10 pt-md-10",
                                    children: showToast && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToastDismissible__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        showToast: showToast,
                                        message: "",
                                        messageType: messageType,
                                        title: error
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvertiseWithUsModal);


/***/ })

};
;