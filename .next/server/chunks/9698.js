"use strict";
exports.id = 9698;
exports.ids = [9698];
exports.modules = {

/***/ 9698:
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4301);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_10__]);
react_toastify__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const SignInSignup = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/listings/modals/SmsEmailModal.js -> " + "../../partials/SigninSignupCommon"
        ]
    },
    ssr: false
});

{}const SmsEmailModal = ({ showStatus , sessionStatus , currentSession ="" , id , cityName ="" , categoryName ="" , cityID ="" , categoryID ="" , ShareIconCls ="" , ...props })=>{
    var ref4, ref1, ref2;
    //console.log("show", showStatus)
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showStatus);
    const { 0: showOTP , 1: setShowOTP  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: fields1 , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        city: "",
        name: "",
        phone: "",
        email: "",
        search_query: "User requested business details over SMS/Email",
        share_type: "email"
    });
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: isSubmit , 1: setIsSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "type": "",
        "message": "",
        "title": ""
    });
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentSession && currentSession !== undefined) {
            var ref, ref3;
            setFields((fields)=>{
                return {
                    ...fields,
                    ["name"]: currentSession.user.name
                };
            });
            if (currentSession === null || currentSession === void 0 ? void 0 : (ref = currentSession.user) === null || ref === void 0 ? void 0 : ref.email) {
                setFields((fields)=>{
                    return {
                        ...fields,
                        ["email"]: currentSession.user.email
                    };
                });
            }
            if (currentSession === null || currentSession === void 0 ? void 0 : (ref3 = currentSession.user) === null || ref3 === void 0 ? void 0 : ref3.phone) {
                setFields((fields)=>{
                    return {
                        ...fields,
                        ["phone"]: currentSession.user.phone
                    };
                });
            }
        }
        return ()=>fields1
        ;
    }, [
        currentSession
    ]);
    const handleChange = (e)=>{
        if (currentSession && currentSession !== undefined) {
            var ref, ref5, ref6;
            if ((currentSession === null || currentSession === void 0 ? void 0 : (ref = currentSession.user) === null || ref === void 0 ? void 0 : ref.name) && e.target.name == "name" || e.target.name == "email" && (currentSession === null || currentSession === void 0 ? void 0 : (ref5 = currentSession.user) === null || ref5 === void 0 ? void 0 : ref5.email) || (currentSession === null || currentSession === void 0 ? void 0 : (ref6 = currentSession.user) === null || ref6 === void 0 ? void 0 : ref6.phone) && e.target.name == "phone") {
                return true;
            }
        }
        let changes = {
            ...fields1,
            [e.target.name]: e.target.value
        };
        setFields((fields)=>{
            return {
                ...fields,
                [e.target.name]: e.target.value
            };
        });
        let errros = formError(changes);
        //console.log(errros)
        setError(errros);
    };
    const handleSubmit = async (sessionData)=>{
        setIsSubmit(false);
        let errorReponse = await formError(fields1);
        if (Object.entries(errorReponse).length !== 0) {
            setError(errorReponse);
            setIsSubmit(true);
        } else {
            let captchVal = recaptchaRef.current.getValue();
            if (captchVal) {
                var ref;
                setError({});
                if (sessionData || currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref = currentSession.user) === null || ref === void 0 ? void 0 : ref.is_verified_mob)) {
                    var ref7;
                    // console.log("Finally Working Good")
                    setShowOTP(false);
                    let searchCity = JSON.parse(window === null || window === void 0 ? void 0 : (ref7 = window.localStorage) === null || ref7 === void 0 ? void 0 : ref7.getItem("searchFilterItem"));
                    let cityIDselected = (searchCity === null || searchCity === void 0 ? void 0 : searchCity.id) ? searchCity.id : "";
                    //can not submit form with login or OTP verify resJson
                    let srRes = await fetch(`${process.env.BASE_URL}/api/protect/requirements-submit`, {
                        method: "POST",
                        body: JSON.stringify({
                            "form": fields1,
                            captch: captchVal,
                            city_id: cityID,
                            category_id: categoryID,
                            business_id: id,
                            types: "3"
                        })
                    });
                    let srJson = await srRes.json();
                    if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
                        //setFields({ city: '', name: '', phone: '', email: '', search_query: '' });
                        setMsgModal((pre)=>{
                            return {
                                ...pre,
                                ["message"]: "Your request submitted successfully.",
                                ["type"]: "success",
                                ["title"]: "Success"
                            };
                        });
                        recaptchaRef.current.reset();
                        setIsSubmit(true);
                        setTimeout(()=>{
                            props.onHide();
                        }, 3000);
                    } else {
                        if (srJson === null || srJson === void 0 ? void 0 : srJson.msg) {
                            setMsgModal((pre)=>{
                                return {
                                    ...pre,
                                    ["message"]: srJson.msg,
                                    ["type"]: "error",
                                    ["title"]: "Error"
                                };
                            });
                        } else {
                            setMsgModal((pre)=>{
                                return {
                                    ...pre,
                                    ["message"]: "Something went wrong! Please try after sometime.",
                                    ["type"]: "error",
                                    ["title"]: "Error"
                                };
                            });
                        }
                        recaptchaRef.current.reset();
                        setIsSubmit(true);
                    }
                } else if (sessionStatus == "loading") {
                    setShowOTP(false);
                } else {
                    checkUserDetail(fields1); // send OTP to user
                }
            } else {
                setError((error)=>{
                    return {
                        ...error,
                        ["captcha"]: "Please check the captcha"
                    };
                });
                setIsSubmit(true);
            }
        }
    };
    const setMessageModal = (e)=>{
        setMsgModal((pre)=>{
            return {
                ...pre,
                ["message"]: "",
                ["type"]: "",
                ["title"]: ""
            };
        });
    };
    const checkUserDetail = async (formData)=>{
        try {
            let saveBusinessData = {
                method: "POST",
                body: JSON.stringify({
                    email: formData.email,
                    phone: formData.phone
                })
            };
            let res = await fetch(`${process.env.BASE_URL}/api/protect/check-user-already-register`, saveBusinessData);
            const resJson = await res.json();
            if (resJson.status == 200) {
                setShowOTP(true); //Open verify OTP modal
            } else {
                if (resJson === null || resJson === void 0 ? void 0 : resJson.msg) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error(resJson.msg);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Something went wrong! Please try after sometime.");
                }
            }
        } catch (err) {
            // console.log(err)
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Something went wrong! Please try after sometime.");
        }
    };
    const formError = (frm)=>{
        let errors = {};
        if (!frm.name) {
            errors = {
                ...errors,
                ["name"]: "This field is required."
            };
        } else if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
            errors = {
                ...errors,
                ["name"]: "This field is required."
            };
        } else if (frm.name !== undefined && frm.name.length > 100) {
            errors = {
                ...errors,
                ["name"]: "You can not enter more than 100 charactors."
            };
        }
        if (!frm.phone) {
            errors = {
                ...errors,
                ["phone"]: "This field is required."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
            errors = {
                ...errors,
                ["phone"]: "Only numbers allowed."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
            errors = {
                ...errors,
                ["phone"]: "10 digits numbers allowed."
            };
        }
        if (!frm.email) {
            errors = {
                ...errors,
                ["email"]: "This field is required."
            };
        } else if (frm.email !== undefined && frm.email == "") {
            errors = {
                ...errors,
                ["email"]: "This field is required."
            };
        } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
            errors = {
                ...errors,
                ["email"]: "Invalid email format."
            };
        }
        if (!frm.search_query) {
            errors = {
                ...errors,
                ["search_query"]: "This field is required."
            };
        } else if (frm.search_query !== undefined && frm.search_query != "" && frm.search_query.length < 4) {
            errors = {
                ...errors,
                ["search_query"]: "More than 4 charactors required."
            };
        } else if (frm.search_query !== undefined && frm.search_query != "" && frm.search_query.length > 1000) {
            errors = {
                ...errors,
                ["search_query"]: "You can not enter more than 1000 charactors."
            };
        }
        if (!frm.share_type) {
            errors = {
                ...errors,
                ["share_type"]: "Choose a share option."
            };
        } else if (frm.share_type == "") {
            errors = {
                ...errors,
                ["share_type"]: "Choose a share option."
            };
        }
        return errors;
    };
    //handle OTP page
    const handleOTP = ()=>false
    ;
    const setVerifiedUser = (status)=>{
        // console.log("OTP received form user IS", status)
        if (status) {
            setShowOTP(false); // hide OTP div
            handleSubmit(true);
        } else {
            setShowOTP(true) // show OTP div if invalid OTP
            ;
        }
    };
    const handleChangeCheckbox = (e1)=>{
        //e.preventDefault();
        const { value , checked  } = e1.target;
        if (checked) {
            const updatedDetails = {
                ...fields1,
                ["share_type"]: [
                    ...fields1.share_type,
                    value
                ]
            };
            setFields(updatedDetails);
        } else {
            var ref;
            if (((ref = fields1.share_type) === null || ref === void 0 ? void 0 : ref.length) > 0) {
                var ref8;
                const updatedDetails = {
                    ...fields1,
                    ["share_type"]: (ref8 = fields1.share_type) === null || ref8 === void 0 ? void 0 : ref8.filter((e)=>e !== value
                    )
                };
                setFields(updatedDetails);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            currentSession && currentSession !== "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default()), {
                show: show,
                ...props,
                className: "dialmenowModal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default().Body), {
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
                                className: "col-md-12 px-3 pt-2 pb-0 px-sm-5 pb-sm-3 pt-md-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default().Title), {
                                        className: `mt-3 mt-md-0 mt-sm-4 text-center`,
                                        children: "SMS / Email"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Group), {
                                                controlId: "name",
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Label), {
                                                        children: [
                                                            "Name",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: "\xa0*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control), {
                                                        placeholder: "Enter your name",
                                                        name: "name",
                                                        value: fields1.name,
                                                        onChange: handleChange,
                                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.name) !== undefined ? "is-invalid" : ""}`,
                                                        disabled: currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref4 = currentSession.user) === null || ref4 === void 0 ? void 0 : ref4.name) ? true : false
                                                    }),
                                                    (error1 === null || error1 === void 0 ? void 0 : error1.name) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control.Feedback), {
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            error1 === null || error1 === void 0 ? void 0 : error1.name
                                                        ]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Group), {
                                                controlId: "phone",
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Label), {
                                                        children: [
                                                            "Phone",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: "\xa0*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control), {
                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_4___default()),
                                                        format: "##########",
                                                        placeholder: "Enter your phone",
                                                        name: "phone",
                                                        value: fields1.phone,
                                                        onChange: handleChange,
                                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.phone) !== undefined ? "is-invalid" : ""}`,
                                                        disabled: currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref1 = currentSession.user) === null || ref1 === void 0 ? void 0 : ref1.phone) ? true : false
                                                    }),
                                                    (error1 === null || error1 === void 0 ? void 0 : error1.phone) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control.Feedback), {
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            error1 === null || error1 === void 0 ? void 0 : error1.phone
                                                        ]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Group), {
                                                controlId: "email",
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Label), {
                                                        children: [
                                                            "Email",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: "\xa0*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control), {
                                                        placeholder: "Enter your email",
                                                        name: "email",
                                                        value: fields1.email,
                                                        onChange: handleChange,
                                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.email) !== undefined ? "is-invalid" : ""}`,
                                                        disabled: currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref2 = currentSession.user) === null || ref2 === void 0 ? void 0 : ref2.email) ? true : false
                                                    }),
                                                    (error1 === null || error1 === void 0 ? void 0 : error1.email) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control.Feedback), {
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            error1 === null || error1 === void 0 ? void 0 : error1.email
                                                        ]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Group), {
                                                controlId: "share_change",
                                                className: "mb-3",
                                                onChange: handleChangeCheckbox,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Label), {
                                                        children: "Share on:"
                                                    }),
                                                    (error1 === null || error1 === void 0 ? void 0 : error1.share_type) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control.Feedback), {
                                                        style: {
                                                            display: "block"
                                                        },
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            error1 === null || error1 === void 0 ? void 0 : error1.share_type
                                                        ]
                                                    }) : "",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "d-flex businessShare",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Check), {
                                                                type: "checkbox",
                                                                id: `email-check`,
                                                                label: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-mail"
                                                                    })
                                                                ],
                                                                name: "share_type",
                                                                value: "email",
                                                                defaultChecked: `email`,
                                                                role: "button",
                                                                className: `ShareIconEmail ShareIcon ${ShareIconCls}`
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Check), {
                                                                type: "checkbox",
                                                                id: `sms`,
                                                                label: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-device-mobile"
                                                                    })
                                                                ],
                                                                name: "share_type",
                                                                value: "sms",
                                                                role: "button",
                                                                className: `ShareIconSMS ShareIcon ${ShareIconCls}`
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                ref: recaptchaRef,
                                                sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                                size: "normal"
                                            }),
                                            (error1 === null || error1 === void 0 ? void 0 : error1.captcha) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control.Feedback), {
                                                type: "invalid",
                                                tooltip: true,
                                                style: {
                                                    display: "table"
                                                },
                                                children: [
                                                    " ",
                                                    error1 === null || error1 === void 0 ? void 0 : error1.captcha
                                                ]
                                            }) : "",
                                            isSubmit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: "mt-3 w-100 mb-3 mb-sm-3 mb-md-1",
                                                size: "md",
                                                onClick: ()=>handleSubmit(false)
                                                ,
                                                children: "Submit"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: "mt-3 w-100",
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
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SignInSignup, {
                session: currentSession,
                show: true,
                onHide: ()=>props.onHide()
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmsEmailModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;