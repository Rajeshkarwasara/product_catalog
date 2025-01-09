"use strict";
exports.id = 3616;
exports.ids = [3616];
exports.modules = {

/***/ 3616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_9__]);
react_toastify__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const SignInSignup = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(261), __webpack_require__.e(7936), __webpack_require__.e(7840), __webpack_require__.e(4178), __webpack_require__.e(554), __webpack_require__.e(3930), __webpack_require__.e(7229)]).then(__webpack_require__.bind(__webpack_require__, 7229))
, {
    loadableGenerated: {
        modules: [
            "../components/listings/modals/EditListing.js -> " + "../../partials/SigninSignupCommon"
        ]
    }
});
const EditListing = ({ phoneNumber , showStatus , isVerified , currentSession , sessionStatus , EditListingCls , businessID , ...props })=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(showStatus);
    const { 0: listPopError , 1: setListPopError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: businessOTPshow , 1: setBusinessOTPshow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: businessOTPmobile , 1: setBusinessOTPmobile  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: businessOTP , 1: setBusinessOTP  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: businessOTPerror , 1: setBusinessOTPerror  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: businessOTPisSubmit , 1: setbusinessOTPisSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: businessOTPcounter , 1: setBusinessOTPcounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(59);
    const { 0: showLogin , 1: setShowLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const timer = businessOTPcounter > 0 && setInterval(()=>setBusinessOTPcounter(businessOTPcounter - 1)
        , 1000);
        return ()=>clearInterval(timer)
        ;
    }, [
        businessOTPcounter
    ]);
    const verifyMobileBusiness = async ()=>{
        //send OTP to mobile number
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/sendotp-business`, {
            method: "POST",
            body: JSON.stringify({
                businessID: businessID
            })
        });
        let srJson = await srRes.json();
        console.log("OWNER----------->", srJson);
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
            //OTP sent TO user and
            //show business OTP send Section
            setBusinessOTPmobile(srJson === null || srJson === void 0 ? void 0 : srJson.mobile);
            setBusinessOTPshow(true);
        } else {
            setListPopError(srJson === null || srJson === void 0 ? void 0 : srJson.msg);
            setTimeout(()=>{
                setListPopError("");
            }, 5000);
        }
    };
    const submitOTPbusiness = async ()=>{
        // verify OTP
        setbusinessOTPisSubmit(false);
        let otpNew = businessOTP.replaceAll("-", "");
        console.log("businessOTP=--------------", otpNew, businessOTP.length);
        if (otpNew.length == 4) {
            let srRes = await fetch(`${process.env.BASE_URL}/api/protect/sendotp-business`, {
                method: "POST",
                body: JSON.stringify({
                    businessID: businessID,
                    otp: otpNew
                })
            });
            let srJson = await srRes.json();
            if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
                setBusinessOTPcounter(0);
                props.onHide();
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success(srJson.msg);
                setbusinessOTPisSubmit(true);
            } else {
                setBusinessOTPerror(srJson === null || srJson === void 0 ? void 0 : srJson.msg);
                setbusinessOTPisSubmit(true);
                setTimeout(()=>{
                    setBusinessOTPerror("");
                }, 5000);
            }
        } else {
            setBusinessOTPerror("Invalid OTP");
            setbusinessOTPisSubmit(true);
            setTimeout(()=>{
                setBusinessOTPerror("");
            }, 5000);
        }
    };
    const resendOTP = async ()=>{
        console.log("businessOTPcounter", businessOTPcounter);
        if (businessOTPcounter == 0) {
            //send OTP again
            let srRes = await fetch(`${process.env.BASE_URL}/api/protect/resend-otp`, {
                method: "POST",
                body: JSON.stringify({
                    businessID: businessID,
                    userID: "",
                    phone: ""
                })
            });
            let srJson = await srRes.json();
            if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
                setBusinessOTPerror(srJson.msg);
                setBusinessOTPcounter(59);
            } else {
                setBusinessOTPerror(srJson.msg);
                setBusinessOTPcounter(0);
            }
            setTimeout(()=>{
                setBusinessOTPerror("");
            }, 5000);
        }
    };
    const editListingPage = ()=>{
        if (currentSession) {
            //go to edit page
            let path = (next_router__WEBPACK_IMPORTED_MODULE_10___default().query.search_id);
            next_router__WEBPACK_IMPORTED_MODULE_10___default().push(path[0] + "/" + path[1] + "/" + path[2] + "/" + path[3] + "/edit-list");
        } else {
            //login first then edit business details
            setShowLogin(true);
        }
    };
    const hideRegisterForm = ()=>{
        setShowLogin(false);
        setBusinessOTPshow(false);
    };
    if (showLogin) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SignInSignup, {
            session: currentSession,
            show: showLogin,
            onHide: ()=>hideRegisterForm()
        });
    }
    if (businessOTPshow) {
        // OTP section show
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
                centered: true,
                show: show,
                ...props,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Body), {
                    className: "px-0 py-2 py-sm-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_11___default()), {
                            onClick: props.onHide,
                            "aria-label": "Close modal",
                            className: "position-absolute top-0 end-0 mt-3 me-3"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row mx-0 align-items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-md-12 px-3 pt-3 pb-3 px-sm-5 pb-sm-4 pt-md-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center mb-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Title), {
                                            className: "mb-4 text-center",
                                            children: "Verify your Listing"
                                        })
                                    }),
                                    businessOTPerror && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "warning",
                                        children: businessOTPerror
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                        children: [
                                            "Mobile No.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "\xa0*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "secondary",
                                        className: "d-flex",
                                        role: "button",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: businessOTPmobile
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group), {
                                                controlId: "otp",
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                                        children: [
                                                            "OTP",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: "\xa0*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control), {
                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_3___default()),
                                                        format: "#-#-#-#",
                                                        placeholder: "Enter OTP",
                                                        name: "otp",
                                                        value: businessOTP,
                                                        onChange: (e)=>setBusinessOTP(e.target.value)
                                                        ,
                                                        className: `form-control`
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("sub", {
                                                        role: `${businessOTPcounter > 0 ? "" : "button"}`,
                                                        className: `text-center w-100 d-inline-block text-decoration-underline${businessOTPcounter > 0 ? "" : " "}`,
                                                        onClick: resendOTP,
                                                        children: [
                                                            "Resend OTP",
                                                            " ",
                                                            businessOTPcounter > 0 ? "in 00:" + businessOTPcounter : ""
                                                        ]
                                                    })
                                                ]
                                            }),
                                            businessOTPisSubmit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                className: "mt-2 w-100",
                                                size: "md",
                                                onClick: ()=>submitOTPbusiness(true)
                                                ,
                                                children: "Submit"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                className: "mt-2 w-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        animation: "border",
                                                        size: "sm",
                                                        role: "status",
                                                        className: "me-2"
                                                    }),
                                                    "wait..."
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
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
                centered: true,
                show: show,
                ...props,
                className: "dialmenowModal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Body), {
                    className: "px-0 py-2 py-sm-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_11___default()), {
                            onClick: ()=>props.onHide()
                            ,
                            "aria-label": "Close modal",
                            className: "position-absolute top-0 end-0 mt-3 me-3"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row mx-0 align-items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-md-12 px-4 pt-2 pb-4 px-sm-5 pt-md-5",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center mb-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Title), {
                                                className: "mt-3 mt-md-0 mt-sm-4 text-center modal-title h4",
                                                children: "Edit Listing"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mb-4",
                                                children: "Please select an appropriate option from below to make changes."
                                            })
                                        ]
                                    }),
                                    listPopError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "danger",
                                        children: listPopError
                                    }),
                                    isVerified != "1" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "secondary",
                                        className: `d-flex ${EditListingCls}`,
                                        role: "button",
                                        onClick: verifyMobileBusiness,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "I am the business owner"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-chevron-right ms-auto"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "secondary",
                                        className: `d-flex ${EditListingCls}`,
                                        role: "button",
                                        onClick: editListingPage,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "I am a user "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-chevron-right ms-auto"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditListing);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;