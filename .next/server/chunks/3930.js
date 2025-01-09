"use strict";
exports.id = 3930;
exports.ids = [3930];
exports.modules = {

/***/ 3930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8__);









const ForgotPass = ({ csrfToken , onSwap , pillButtons , titleMsg , ...props })=>{
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // PHONE
    const { 0: showAlert , 1: setShowAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // error messgae will show in Alert
    const { 0: alertType , 1: setAlertType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("danger"); // error messgae will show in Alert
    const { 0: signLoad , 1: setSignLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); //submit loader
    // Form validation
    const { 0: validated , 1: setValidated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
                //call API to Submit Email
                let addOptions = {
                    method: "POST",
                    body: JSON.stringify({
                        email: email,
                        captcha: captchVal
                    })
                };
                let addRes = await fetch(`${process.env.BASE_URL}/api/protect/forgot-password`, addOptions);
                let addJson = await addRes.json();
                if (addJson.status != "undefined" && addJson.status == 200) {
                    var ref, ref1, ref2;
                    setAlertType("success");
                    setShowAlert(true); // alert message will show
                    setError(addJson.msg);
                    setTimeout(()=>{
                        setEmail("");
                        props.onHide();
                    }, 3000);
                    // code shakti singh for SMS templete
                    const templateID = "1407168690741452259";
                    const template = encodeURIComponent(`Dear ${addJson === null || addJson === void 0 ? void 0 : (ref = addJson.data) === null || ref === void 0 ? void 0 : ref.name}\nWe recently received a request to reset the password of your account.\nTo reset your password, click on the link below.\nwww.dialmenow.in/${addJson === null || addJson === void 0 ? void 0 : (ref1 = addJson.data) === null || ref1 === void 0 ? void 0 : ref1.urlForgot} \n\nThis password reset link will expire in 60 minutes.\nRegards,
           \nDialmenow.in`);
                    const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${addJson === null || addJson === void 0 ? void 0 : (ref2 = addJson.data) === null || ref2 === void 0 ? void 0 : ref2.mobile}&sms=${template}&tempid=${templateID}`;
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
            setSignLoad(true); // signin loader stop
        }
        setTimeout(()=>{
            //console.log("Calling Error")
            setAlertType("danger");
            setError("");
            setShowAlert(false);
        }, 4000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        className: "dialmenowModal",
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
                        className: "col-md-12 px-3 pt-2 pb-0 px-sm-5 pb-sm-3 pt-md-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-3 text-center w-100 mb-1 mt-3 mt-sm-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            class: "mb-1",
                                            children: titleMsg
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-3 text-center w-100",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "No worries, we'll send you reset instructions."
                                        })
                                    })
                                ]
                            }),
                            showAlert && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
                                noValidate: true,
                                validated: validated,
                                id: "forgotPass",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "csrfToken",
                                        defaultValue: csrfToken
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
                                        controlId: "forgot-mail",
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                                children: [
                                                    "Email ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-danger",
                                                        children: "\xa0*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                type: "email",
                                                placeholder: "Email id",
                                                value: email,
                                                onChange: (val)=>{
                                                    setEmail(val.target.value);
                                                },
                                                pattern: "\\S+@\\S+\\.\\S+",
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        ref: recaptchaRef,
                                        sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                        size: "normal"
                                    }),
                                    signLoad ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        type: "submit",
                                        size: "lg",
                                        variant: `primary ${pillButtons ? "mt-3" : ""} w-100`,
                                        onClick: handleSubmit,
                                        children: "Reset password"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        size: "lg",
                                        variant: `primary ${pillButtons ? "rounded-pill" : ""} w-100`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                animation: "border",
                                                size: "sm",
                                                role: "status",
                                                className: "me-2"
                                            }),
                                            "Wait..."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-2 text-center mb-4 dontaccount",
                                        children: [
                                            "Back to",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "#",
                                                onClick: onSwap,
                                                children: [
                                                    " ",
                                                    "Login"
                                                ]
                                            })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPass);


/***/ })

};
;