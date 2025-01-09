"use strict";
exports.id = 129;
exports.ids = [129];
exports.modules = {

/***/ 129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_11__);












const VerifyOtp = ({ csrfToken , onSwap , pillButtons , phoneNumber ="" , titleMsg , removeClose , primaryID ="" , businessID , isPrimary =false , setDataRefresh , sendType ="phone" , verifyEmailType ="" , otpInputVal =true , ...props })=>{
    const { 0: phone , 1: setPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(phoneNumber); // PHONE
    const { 0: otpPhone , 1: setOtpPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(phoneNumber); // phone number typed and OTP sent 
    const { 0: otp1 , 1: setOtp1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // OTP
    const { 0: otp2 , 1: setOtp2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // OTP
    const { 0: otp3 , 1: setOtp3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // OTP
    const { 0: otp4 , 1: setOtp4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // OTP
    const { 0: showAlert , 1: setShowAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    const countTimer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    const { 0: timer1 , 1: setTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("00:00:00");
    const { 0: resendBtn , 1: setResendBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: otpInput , 1: setOtpInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(otpInputVal);
    const resendCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    const { data: session , status , update  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)(); // for session check
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const otpFrmRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: verifyOTPcounter , 1: setVerifyOTPcounter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(59);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // error messgae will show in Alert
    const { 0: alertType , 1: setAlertType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("danger"); // error messgae will show in Alert
    const { 0: signLoad , 1: setSignLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); //signin loader 
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((a)=>{
        if (!props.show) {
            setPhone("");
            setOtp1("");
            setOtp2("");
            setOtp3("");
            setOtp4("");
            setShowAlert(false);
        //recaptchaRef.current.reset();
        }
        return ()=>{
            setOtp1("");
            setOtp2("");
            setOtp3("");
            setOtp4("");
            setPhone(phoneNumber);
        };
    }, [
        props.show
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = verifyOTPcounter > 0 && setInterval(()=>setVerifyOTPcounter(verifyOTPcounter - 1)
        , 1000);
        return ()=>clearInterval(timer)
        ;
    }, [
        verifyOTPcounter
    ]);
    //only call once show send OTP on mobile from here
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        let addOptions = {
            method: "POST",
            body: JSON.stringify({
                "phone": phoneNumber,
                "captcha": "",
                "signin": false,
                type: sendType
            })
        };
        let addRes = await fetch(`${process.env.BASE_URL}/api/protect/send-otp`, addOptions);
        let addJson = await addRes.json();
        console.log("API response_______________", addJson);
        console.log(addJson);
        if (addJson.status != "undefined" && addJson.status == 200) {}
    }, []);
    // Form validation
    const { 0: validated , 1: setValidated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setValidated(true);
        setSignLoad(false);
        const form = event.currentTarget;
        if (form.form.checkValidity() === false) {
            setSignLoad(true); // signin loader stop
        } else {
            let captchVal = recaptchaRef.current.getValue();
            recaptchaRef.current.reset();
            if (captchVal) {
                let otp = otp1 + otp2 + otp3 + otp4;
                //check OTP if OTP available then verify OTP 
                if (otp.length > 0) {
                    //call API for OTP verify
                    let phonePost = phoneNumber != "" ? phoneNumber : phone;
                    let otpPost = otp;
                    if (session) {
                        console.log("Primary---------------", isPrimary);
                        let userIDlogin = session.user.id;
                        let addOptions = {
                            method: "POST",
                            body: JSON.stringify({
                                "phone": phonePost,
                                "otp": otpPost,
                                "business_id": businessID,
                                "pkID": primaryID,
                                "is_pm": isPrimary,
                                "dataType": sendType,
                                "verifyEmailType": verifyEmailType
                            })
                        };
                        let addRes = await fetch(`${process.env.BASE_URL}/api/protect/verify-otp-business`, addOptions);
                        let addJson = await addRes.json();
                        console.log("API response");
                        console.log(addJson);
                        if (addJson.status != "undefined" && addJson.status == 200) {
                            //reloadSession()
                            setAlertType("success");
                            setShowAlert(true) // alert message will show
                            ;
                            setError("OTP Verified.");
                            setDataRefresh(true);
                            setTimeout(()=>{
                                props.onHide();
                            }, 2000);
                        } else {
                            setAlertType("danger");
                            setShowAlert(true) // alert message will show
                            ;
                            setError("Invalid OTP.");
                        }
                    } else {
                        setAlertType("danger");
                        setError("Invalid OTP.");
                        setShowAlert(true) // alert message will show
                        ;
                    }
                } else {
                    setAlertType("danger");
                    setError("Invalid OTP.");
                    setShowAlert(true) // alert message will show
                    ;
                }
            } else {
                setAlertType("danger");
                setError("Invalid captcha.");
                setShowAlert(true) // alert message will show
                ;
            }
            setSignLoad(true); // signin loader stop
        }
        setTimeout(()=>{
            console.log("Calling Error");
            setAlertType("danger");
            setError("");
            setShowAlert(false);
        }, 4000);
    };
    const reloadSession = ()=>{
        const event = new Event("visibilitychange");
        document.dispatchEvent(event);
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
    const resendOTP = async ()=>{
        if (verifyOTPcounter == 0) {
            //send OTP again
            let srRes = await fetch(`${process.env.BASE_URL}/api/protect/resend-otp`, {
                method: "POST",
                body: JSON.stringify({
                    "businessID": "",
                    "userID": "",
                    "phone": phoneNumber
                })
            });
            let srJson = await srRes.json();
            if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
                setAlertType("success");
                setShowAlert(true) // alert message will show
                ;
                setError(srJson.msg);
                setVerifyOTPcounter(59);
            } else {
                setAlertType("danger");
                setError(srJson.msg);
                setShowAlert(true) // alert message will show
                ;
                setVerifyOTPcounter(0);
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        className: "dialmenowModal",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
            className: "px-0 py-2 py-sm-2",
            children: [
                removeClose && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                    onClick: props.onHide,
                    "aria-label": "Close modal",
                    className: "position-absolute top-0 end-0 mt-3 me-3"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mx-0 align-items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-12 px-3 pt-2 pb-0 px-sm-5 pb-sm-3 pt-md-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "blog-title text-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        className: "mt-3 mt-sm-0 mb-0",
                                        children: [
                                            " ",
                                            titleMsg
                                        ]
                                    }),
                                    sendType == "mail" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-0",
                                        children: "Enter the OTP you received on your email"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "",
                                        children: "Enter the OTP you received on your Mobile number"
                                    })
                                ]
                            }),
                            showAlert && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_9___default()), {
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
                                id: "OtpVerify",
                                ref: otpFrmRef,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "csrfToken",
                                        defaultValue: csrfToken
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                                        controlId: "vlogin-phone",
                                        className: "mb-2 mb-md-2 text-center",
                                        children: sendType == "mail" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                            className: "",
                                            children: otpPhone
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                            className: "",
                                            children: [
                                                "Phone +91- ",
                                                otpPhone.substr(0, 6) + "****"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                                        controlId: "vlogin-otp",
                                        className: "mb-1 pt-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex VerifyOtpCls justify-content-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                        type: "text",
                                                        placeholder: "0",
                                                        value: otp1,
                                                        autoComplete: "off",
                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_11___default()),
                                                        onChange: (val)=>{
                                                            setOtp1(val.target.value);
                                                        },
                                                        pattern: "[0-9]{1}",
                                                        format: "#",
                                                        required: true,
                                                        maxlength: "1",
                                                        onKeyUp: onFocusSubmit
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                        type: "text",
                                                        placeholder: "0",
                                                        value: otp2,
                                                        autoComplete: "off",
                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_11___default()),
                                                        onChange: (val)=>{
                                                            setOtp2(val.target.value);
                                                        },
                                                        pattern: "[0-9]{1}",
                                                        format: "#",
                                                        required: true,
                                                        maxlength: "1",
                                                        onKeyUp: onFocusSubmit
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                        type: "text",
                                                        placeholder: "0",
                                                        value: otp3,
                                                        autoComplete: "off",
                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_11___default()),
                                                        onChange: (val)=>{
                                                            setOtp3(val.target.value);
                                                        },
                                                        pattern: "[0-9]{1}",
                                                        format: "#",
                                                        required: true,
                                                        maxlength: "1",
                                                        onKeyUp: onFocusSubmit
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                        type: "text",
                                                        placeholder: "0",
                                                        value: otp4,
                                                        autoComplete: "off",
                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_11___default()),
                                                        onChange: (val)=>{
                                                            setOtp4(val.target.value);
                                                        },
                                                        pattern: "[0-9]{1}",
                                                        format: "#",
                                                        required: true,
                                                        maxlength: "1",
                                                        onKeyUp: onFocusSubmit
                                                    })
                                                ]
                                            }),
                                            sendType == "phone" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-center mt-3 fs-sm",
                                                children: verifyOTPcounter > 0 ? "Resend OTP in 00:" + verifyOTPcounter : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "Didn't receive code?",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "javascript:void(0)",
                                                            className: "text-decoration-underline",
                                                            onClick: resendOTP,
                                                            children: " Resend OTP"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        className: "mt-4",
                                        ref: recaptchaRef,
                                        sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                        size: "normal"
                                    }),
                                    otpInput && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        type: "submit",
                                        size: "lg",
                                        variant: `primary ${pillButtons ? "" : ""} w-100`,
                                        className: "mt-3",
                                        onClick: handleSubmit,
                                        children: "Verify"
                                    }),
                                    signLoad && !otpInput && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        type: "submit",
                                        size: "lg",
                                        variant: `primary ${pillButtons ? "" : ""} w-100 mt-3`,
                                        onClick: handleSubmit,
                                        children: "Send OTP"
                                    }),
                                    !signLoad && !otpInput && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        size: "lg",
                                        variant: `primary ${pillButtons ? "" : ""} w-100 mt-3`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                animation: "border",
                                                size: "sm",
                                                role: "status",
                                                className: "me-2"
                                            }),
                                            "Wait..."
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyOtp);


/***/ })

};
;