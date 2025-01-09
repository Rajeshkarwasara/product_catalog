exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 6625:
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
/* harmony import */ var _PasswordToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7840);
/* harmony import */ var _helper_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(261);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _VerifyOtp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7936);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9270);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5698);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_13__);














const ChangePasswordModal = ({ csrfToken , onSwap , pillButtons , phone , user_id , ProfileMsgCls ="" , ProfileMsgIconCls ="" , NoBtnCls ="" , YesBtnCls ="" , type ="" , userName , emailId , phoneNumber , ...props })=>{
    const { 0: formFields , 1: setFormFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        phone: phone,
        user_id: user_id,
        newPassword: "",
        confirmPassword: ""
    });
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: otpPage , 1: setOtpPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const { 0: verifiedUser , 1: setVerifiedUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const { 0: showLogoutPopup , 1: setShowLogoutPopup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    const { 0: isLoading , 1: setIsloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); //use loder
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: stepOneError , 1: setStepOneError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_12__.useSession)(); //use login session
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
            const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_7__/* .changePasswordFormValidate */ .Hl)(formFields);
            setFormError(formResponse);
        }
    };
    const changePasswordFormSubmit = async (event)=>{
        setStepOneError(true);
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_7__/* .changePasswordFormValidate */ .Hl)(formFields);
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
            event.preventDefault();
            event.stopPropagation();
        } else {
            let captchVal = recaptchaRef.current.getValue();
            recaptchaRef.current.reset();
            if (captchVal) {
                //call API to send OTP
                let phonePost = formFields.phone;
                let addOptions = {
                    method: "POST",
                    body: JSON.stringify({
                        phone: phonePost,
                        captcha: captchVal,
                        signin: true
                    })
                };
                let addRes = await fetch(`${process.env.BASE_URL}/api/protect/send-otp`, addOptions);
                let addJson = await addRes.json();
                if (addJson.status != "undefined" && addJson.status == 200) {
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
    const handleOTP = ()=>{
        setOtpPage(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (verifiedUser) {
            setVerifiedUser(false);
            props.onHide(false);
            setIsloading(true);
            // after verify change the password and show the leave modal
            let addOptions = {
                method: "POST",
                body: JSON.stringify({
                    user_id: user_id,
                    newPassword: formFields.newPassword
                })
            };
            let addRes = await fetch(`${process.env.BASE_URL}/api/protect/change-password`, addOptions);
            let addJson = await addRes.json();
            if (addJson.status != "undefined" && addJson.status == 200) {
                setShowLogoutPopup(true);
                const templateID = "1407168690727275519";
                const template = encodeURIComponent(`Dear ${userName},\nYour Password has been changed successfully.\nPlease login with these login credentials:\nEmail Address: ${emailId}\nPassword: ${formFields.newPassword}\nPlease do not share your password with anyone\nRegards\nDialmenow.in\n+919252392523`);
                const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${phoneNumber}&sms=${template}&tempid=${templateID}`;
                try {
                    const msgChangepwd = await fetch(APIpath);
                    if (msgChangepwd.status === 200) {
                        return true;
                    } else {
                        console.error("Error sending SMS. Response status:", msgChangepwd.status);
                        return false;
                    }
                } catch (error) {
                    console.error("Error sending SMS:", error);
                    return false;
                }
            }
        }
    }, [
        verifiedUser
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!props.show) {
            setFormFields({
                name: "",
                phone: phone,
                user_id: user_id,
                newPassword: "",
                confirmPassword: ""
            });
            setError("");
            setIsloading(false);
            setFormError({});
            setShowAlert(false);
        }
    }, [
        props.show
    ]);
    const handleLogoutPopupClose = ()=>setShowLogoutPopup(false)
    ;
    if (showLogoutPopup) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
            centered: true,
            show: showLogoutPopup,
            onHide: handleLogoutPopupClose,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
                    className: "px-0 py-2 py-sm-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                            onClick: handleLogoutPopupClose,
                            "aria-label": "Close modal",
                            className: "position-absolute top-0 end-0 mt-3 me-3"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `text-center ${ProfileMsgCls}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `text-center mt-5 ${ProfileMsgIconCls}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        src: "/images/MyAccount/ProfileMsgIcon.svg",
                                        width: 64,
                                        height: 64,
                                        alt: "",
                                        className: "rounded m-auto"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Title), {
                                    className: "mt-3 mb-1 h4 mt-sm-4 mt-md-4",
                                    children: "Are you leaving?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Are you sure want to log out? All your unsaved data will be lost."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Footer), {
                    className: "text-center border-0 pt-1 pb-4 mb-1 justify-content-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                            variant: "secondary",
                            onClick: handleLogoutPopupClose,
                            className: `${NoBtnCls}`,
                            children: "NO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                            variant: "primary",
                            onClick: (e)=>{
                                e.preventDefault();
                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_12__.signOut)("user-login");
                            },
                            className: `${YesBtnCls}`,
                            children: "Yes"
                        })
                    ]
                })
            ]
        });
    } else if (otpPage) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : "",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VerifyOtp__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    centered: true,
                    size: "",
                    pillButtons: true,
                    phoneNumber: phone,
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
                    formData: formFields,
                    type: type
                })
            ]
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
            ...props,
            className: "signin-modal dialmenowModal ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
                className: "px-0 py-2 py-sm-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                        onClick: props.onHide,
                        "aria-label": "Close modal",
                        className: "position-absolute top-0 end-0 mt-3 me-3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row mx-0 align-items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-12 px-4 pt-2 pb-3 px-sm-5 pt-md-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "blog-title text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "mb-3 mt-3 mt-sm-0 mb-md-4",
                                        children: "Change Password"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "user-change-password",
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
                                                        error1,
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
                                            className: "mb-3 mb-md-4 mb-sm-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                                    children: [
                                                        "New Password",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-danger",
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PasswordToggle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    className: `${formError.newPassword !== undefined ? "is-invalid" : ""}`,
                                                    value: formFields.newPassword,
                                                    onChange: formFieldChange,
                                                    placeholder: "Password",
                                                    autoComplete: "new-password",
                                                    name: "newPassword"
                                                }),
                                                formError.newPassword !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError.newPassword
                                                    ]
                                                }) : ""
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                                            controlId: "ps-phone",
                                            className: "mb-3 mb-md-4 mb-sm-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                                    children: [
                                                        "Confirm Password",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-danger",
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PasswordToggle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    className: `${formError.confirmPassword !== undefined ? "is-invalid" : ""}`,
                                                    value: formFields.confirmPassword,
                                                    onChange: formFieldChange,
                                                    placeholder: "Password",
                                                    autoComplete: "new-password",
                                                    name: "confirmPassword"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: formError.confirmPassword !== undefined ? formError.confirmPassword : ""
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
                                            className: "mt-3 mb-2",
                                            onClick: changePasswordFormSubmit,
                                            children: "Send OTP"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordModal);


/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;