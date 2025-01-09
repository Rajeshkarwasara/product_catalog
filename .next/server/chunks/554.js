"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PasswordToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7840);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_gcaptchVerify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8130);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
/* harmony import */ var _partials_VerifyOtp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7936);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6804);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_12__]);
react_toastify__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const SignInModalLight = ({ csrfToken , onSwap , onSwapForgot , callbackUrl ="" , pillButtons , ...props })=>{
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // email get
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // password get
    const { 0: showAlert , 1: setShowAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const { 0: otpPage , 1: setOtpPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    ; /// ref
    const loginFrmRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // error messgae will show in Alert
    const { 0: errorCaptch , 1: setErrorCaptch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // error messgae will show in Alert
    const { 0: signLoad , 1: setSignLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); //signin loader 
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((a)=>{
        if (!props.show) {
            setEmail("");
            setPassword("");
            setShowAlert(false);
        //recaptchaRef.current.reset();
        }
    }, [
        props.show
    ]);
    // Form validation
    const { 0: validated , 1: setValidated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //handle OTP page
    const handleOTP = ()=>{
        setOtpPage(false);
    };
    //login with google
    const handleGlogin = async (event)=>{
        event.preventDefault();
        const resGlog = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signIn)("google", {
            callbackUrl: callbackUrl
        });
    };
    const handleMobile = async (event)=>{
        event.preventDefault();
        setOtpPage(true);
    };
    const handleFBloginOLD = async (event)=>{
        event.preventDefault();
    };
    const handleFBlogin = async (response)=>{
        let resSign = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signIn)("fb-login", {
            callbackUrl: callbackUrl,
            data: JSON.stringify(response)
        });
        if (resSign.error !== undefined && resSign.status == 200) {
            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Login successfully!");
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(resSign.msg);
        }
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setValidated(true);
        setSignLoad(false);
        const form = event.currentTarget;
        if (form.form.checkValidity() === false) {
            event.stopPropagation();
            setSignLoad(true); // signin loader stop
        } else {
            let captchVal = recaptchaRef.current.getValue();
            recaptchaRef.current.reset();
            if (captchVal) {
                setErrorCaptch("");
                var captchStatus = await (0,_lib_gcaptchVerify__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(captchVal);
                if (captchStatus) {
                    const resSign = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signIn)("user-login", {
                        callbackUrl: callbackUrl,
                        username: email,
                        password: password,
                        redirect: callbackUrl ? true : false
                    });
                    console.log("   resSign   ", resSign);
                    if ((resSign === null || resSign === void 0 ? void 0 : resSign.error) !== undefined && (resSign === null || resSign === void 0 ? void 0 : resSign.status) == 200) {
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Login successfully!");
                        //setShowAlert(true) // alert message will show
                        //setError(resSign.error)
                        setSignLoad(true); // signin loader stop
                    } else if (resSign === null || resSign === void 0 ? void 0 : resSign.error) {
                        setError(resSign.error);
                        setShowAlert(true) // alert message will show
                        ;
                        setSignLoad(true); // signin loader stop
                    } else {
                        setError("Something went wrong! Please try after some time.");
                        setShowAlert(true) // alert message will show
                        ;
                        setSignLoad(true); // signin loader stop
                    }
                } else {
                    setError("Invalid captcha.");
                    setShowAlert(true) // alert message will show
                    ;
                    setSignLoad(true); // signin loader stop
                }
            } else {
                setErrorCaptch("Invalid captcha.");
                setSignLoad(true); // signin loader stop
            }
        }
    };
    if (otpPage) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_VerifyOtp__WEBPACK_IMPORTED_MODULE_13__["default"], {
            centered: true,
            size: "",
            pillButtons: true,
            phoneNumber: "",
            show: otpPage,
            userID: 0,
            titleMsg: "Login With Phone",
            removeClose: true,
            onHide: handleOTP,
            isSignIN: true
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default()), {
                ...props,
                className: "signin-modal dialmenowModal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Body), {
                    className: "px-0 py-2 py-sm-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                            onClick: props.onHide,
                            "aria-label": "Close modal",
                            className: "position-absolute top-0 end-0 mt-3 me-3"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row mx-0 align-items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-md-12 px-3 pt-2 pb-4 px-sm-5 pt-md-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "blog-title text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "mb-1 mt-3 mt-sm-0",
                                                children: "Login"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Enter your details to get sign in to your account."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        noValidate: true,
                                        validated: validated,
                                        id: "loginCus",
                                        ref: loginFrmRef,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "hidden",
                                                name: "csrfToken",
                                                defaultValue: csrfToken
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                controlId: "vlogin-mail",
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                        children: [
                                                            "Email Id ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: "\xa0*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                        type: "email",
                                                        placeholder: "Enter email id",
                                                        value: email,
                                                        name: "loginMail",
                                                        onChange: (val)=>{
                                                            setEmail(val.target.value);
                                                        },
                                                        pattern: "\\S+@\\S+\\.\\S+",
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "d-flex align-items-center justify-content-between mb-2",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                            htmlFor: "si-password",
                                                            className: "mb-0",
                                                            children: [
                                                                "Password ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-danger",
                                                                    children: "\xa0*"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PasswordToggle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        id: "si-password",
                                                        placeholder: "Enter password",
                                                        required: true,
                                                        value: password,
                                                        onChange: (val)=>{
                                                            setPassword(val.target.value);
                                                        },
                                                        name: "loginPass"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-end mt-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "",
                                                                onClick: onSwapForgot,
                                                                children: "Forgot password?"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "ReCAPTCHASize",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    ref: recaptchaRef,
                                                    sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                                    size: "normal",
                                                    "data-size": "fit"
                                                })
                                            }),
                                            errorCaptch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "invalid-tooltip",
                                                style: {
                                                    display: "block"
                                                },
                                                children: errorCaptch
                                            }),
                                            signLoad ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                type: "submit",
                                                size: "lg",
                                                variant: `primary ${pillButtons ? "mt-3" : ""} w-100`,
                                                onClick: handleSubmit,
                                                children: "Login"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                size: "lg",
                                                variant: `primary ${pillButtons ? "" : ""} w-100 mt-3`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        animation: "border",
                                                        size: "sm",
                                                        role: "status",
                                                        className: "me-2"
                                                    }),
                                                    "Signin..."
                                                ]
                                            }),
                                            showAlert && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                variant: "danger",
                                                className: "d-flex mt-2",
                                                delay: "3000",
                                                onClose: ()=>setShowAlert(false)
                                                ,
                                                dismissible: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
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
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-2 text-center mb-md-4 mb-sm-3 mb-2 dontaccount",
                                                children: [
                                                    "Don't have an account? ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        onClick: onSwap,
                                                        children: " Register here"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "LoginOther",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                type: "button",
                                                variant: `outline-secondary fw-normal ${pillButtons ? "otplogin" : ""} w-100 mb-3`,
                                                onClick: handleMobile,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-otpicon"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Login with OTP Verification"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                type: "button",
                                                variant: `outline-secondary fw-normal ${pillButtons ? "googleCls" : ""} w-100 mb-3`,
                                                onClick: handleGlogin,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "anim"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-google fs-lg me-1"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Login with Google"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                appId: "718702349228148",
                                                fields: "name,email,picture",
                                                scope: "public_profile,email",
                                                version: "2.7",
                                                callback: (e)=>handleFBlogin(e)
                                                ,
                                                //autoLoad={true}
                                                render: (renderProps)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        onClick: renderProps.onClick,
                                                        variant: `outline-secondary fw-normal ${pillButtons ? "fbCls" : ""} w-100 mb-0`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-facebook fs-lg me-1"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Login in with Facebook"
                                                            })
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
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInModalLight);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ gVerify)
/* harmony export */ });
async function gVerify(token) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "token": token
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/captch-verify`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if (resJson.status == 200) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
};


/***/ })

};
;