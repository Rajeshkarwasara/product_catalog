"use strict";
exports.id = 3951;
exports.ids = [3951];
exports.modules = {

/***/ 3951:
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
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3590);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4301);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4692);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_11__]);
react_toastify__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const VerifyOtp = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/listings/modals/EnquiryModal.js -> " + "../../partials/VerifyOtp"
        ]
    },
    ssr: false
});

{}const EnquiryModal = ({ showStatus , sessionStatus , currentSession ="" , id , cityName ="" , categoryName ="" , cityID ="" , categoryID ="" , title ="" , EnquiryModalLiCls , EnquiryModalLiSpanCls , typeOf ="4" , querySearch ="" , ...props })=>{
    var ref4, ref1, ref2;
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showStatus);
    const { 0: showOTP , 1: setShowOTP  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: fields1 , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        city: "",
        name: "",
        phone: "",
        email: "",
        search_query: ""
    });
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "type": "",
        "message": "",
        "title": ""
    });
    const { 0: isSubmit , 1: setIsSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
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
                    setShowOTP(false);
                    let searchCity = JSON.parse(window === null || window === void 0 ? void 0 : (ref7 = window.localStorage) === null || ref7 === void 0 ? void 0 : ref7.getItem("searchFilterItem"));
                    let cityIDselected = (searchCity === null || searchCity === void 0 ? void 0 : searchCity.id) ? searchCity.id : "";
                    //can not submit form with login or OTP verify resJson
                    let srRes = await fetch(`${process.env.BASE_URL}/api/protect/requirements-submit`, {
                        method: "POST",
                        body: JSON.stringify({
                            "form": {
                                ...fields1,
                                ["keywords"]: querySearch ? querySearch : null
                            },
                            captch: captchVal,
                            city_id: cityID,
                            category_id: categoryID,
                            business_id: id,
                            types: id > 0 ? "1" : "4"
                        })
                    });
                    let srJson = await srRes.json();
                    if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
                        setFields((fields)=>{
                            return {
                                ...fields,
                                ["search_query"]: ""
                            };
                        });
                        //toast.success("Your request submitted successfully.");
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
                    //props.onHide()
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
                    react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error(resJson.msg);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Something went wrong! Please try after sometime.");
                }
            }
        } catch (err) {
            react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Something went wrong! Please try after sometime.");
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
        return errors;
    };
    //handle OTP page
    const handleOTP = ()=>false
    ;
    const setVerifiedUser = (status)=>{
        if (status) {
            setShowOTP(false); // hide OTP div
            handleSubmit(true);
        } else {
            setShowOTP(true) // show OTP div if invalid OTP
            ;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            showOTP && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VerifyOtp, {
                centered: true,
                size: "",
                pillButtons: true,
                phoneNumber: fields1.phone,
                show: showOTP,
                userID: 0,
                titleMsg: "Verify OTP",
                removeClose: true,
                onHide: handleOTP,
                isSignIN: false,
                isOTP: true,
                setVerifiedUser: setVerifiedUser,
                loginFromOtp: true,
                formData: fields1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default()), {
                show: show,
                ...props,
                className: "dialmenowModal ",
                size: "lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default().Body), {
                    className: "px-0 py-2 py-sm-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_13___default()), {
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
                                        className: `mb-1 mt-3 mt-md-0 mt-sm-4 mb-sm-3 mb-md-3 text-center ${EnquiryModalLiSpanCls}`,
                                        dangerouslySetInnerHTML: {
                                            __html: title
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        lg: 6,
                                                        md: 6,
                                                        sm: 6,
                                                        xs: 6,
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group), {
                                                                controlId: "name",
                                                                className: "mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                        children: [
                                                                            "Name",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                        placeholder: "Enter your name",
                                                                        name: "name",
                                                                        value: fields1.name,
                                                                        onChange: handleChange,
                                                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.name) !== undefined ? "is-invalid" : ""}`,
                                                                        disabled: currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref4 = currentSession.user) === null || ref4 === void 0 ? void 0 : ref4.name) ? true : false
                                                                    }),
                                                                    (error1 === null || error1 === void 0 ? void 0 : error1.name) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: [
                                                                            " ",
                                                                            error1 === null || error1 === void 0 ? void 0 : error1.name
                                                                        ]
                                                                    }) : ""
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        lg: 6,
                                                        md: 6,
                                                        sm: 6,
                                                        xs: 6,
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group), {
                                                                controlId: "phone",
                                                                className: "mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                        children: [
                                                                            "Phone",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_4___default()),
                                                                        format: "##########",
                                                                        placeholder: "Enter your phone",
                                                                        name: "phone",
                                                                        value: fields1.phone,
                                                                        onChange: handleChange,
                                                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.phone) !== undefined ? "is-invalid" : ""}`,
                                                                        disabled: currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref1 = currentSession.user) === null || ref1 === void 0 ? void 0 : ref1.phone) ? true : false
                                                                    }),
                                                                    (error1 === null || error1 === void 0 ? void 0 : error1.phone) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: [
                                                                            " ",
                                                                            error1 === null || error1 === void 0 ? void 0 : error1.phone
                                                                        ]
                                                                    }) : ""
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        lg: 6,
                                                        md: 6,
                                                        sm: 6,
                                                        xs: 6,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group), {
                                                            controlId: "email",
                                                            className: "mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                    children: [
                                                                        "Email",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-danger",
                                                                            children: "\xa0*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                    placeholder: "Enter your email",
                                                                    name: "email",
                                                                    value: fields1.email,
                                                                    onChange: handleChange,
                                                                    className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.email) !== undefined ? "is-invalid" : ""}`,
                                                                    disabled: currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref2 = currentSession.user) === null || ref2 === void 0 ? void 0 : ref2.email) ? true : false
                                                                }),
                                                                (error1 === null || error1 === void 0 ? void 0 : error1.email) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                                    type: "invalid",
                                                                    tooltip: true,
                                                                    children: [
                                                                        " ",
                                                                        error1 === null || error1 === void 0 ? void 0 : error1.email
                                                                    ]
                                                                }) : ""
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        lg: 6,
                                                        md: 6,
                                                        sm: 6,
                                                        xs: 6,
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group), {
                                                                controlId: "looking",
                                                                className: "mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                        children: [
                                                                            "I'm looking for",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                        as: "textarea",
                                                                        rows: 1,
                                                                        placeholder: "Enter your query?",
                                                                        name: "search_query",
                                                                        value: fields1.search_query,
                                                                        onChange: handleChange,
                                                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.search_query) !== undefined ? "is-invalid" : ""}`
                                                                    }),
                                                                    (error1 === null || error1 === void 0 ? void 0 : error1.search_query) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: [
                                                                            " ",
                                                                            error1 === null || error1 === void 0 ? void 0 : error1.search_query
                                                                        ]
                                                                    }) : ""
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        lg: 6,
                                                        className: "mt-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                ref: recaptchaRef,
                                                                sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                                                size: "normal"
                                                            }),
                                                            (error1 === null || error1 === void 0 ? void 0 : error1.captcha) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                                type: "invalid",
                                                                tooltip: true,
                                                                style: {
                                                                    display: "table"
                                                                },
                                                                children: [
                                                                    " ",
                                                                    error1 === null || error1 === void 0 ? void 0 : error1.captcha
                                                                ]
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        lg: 6,
                                                        children: isSubmit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            className: "mt-3 mb-lg-0 mb-md-0 mb-sm-3 mb-3 w-100",
                                                            size: "md",
                                                            onClick: ()=>handleSubmit(false)
                                                            ,
                                                            children: "Submit"
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            className: "mt-3 w-100",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                    animation: "border",
                                                                    size: "md",
                                                                    role: "status",
                                                                    className: "me-2"
                                                                }),
                                                                "wait..."
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                as: "ul",
                                                variant: "flush",
                                                className: "d-block mt-3 pt-2 border-top border-2 border-dashed d-lg-block d-md-none d-sm-none d-none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                        style: {
                                                            display: "inline-flex"
                                                        },
                                                        as: "li",
                                                        className: `me-lg-3 me-md-2 me-sm-0 me-0 ${EnquiryModalLiCls}`,
                                                        children: "Your requirement is sent to the selected relevant businesses"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                        as: "li",
                                                        style: {
                                                            display: "inline-flex"
                                                        },
                                                        className: `${EnquiryModalLiCls}`,
                                                        children: "You choose whichever suits you best"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                        as: "li",
                                                        style: {
                                                            display: "inline-flex"
                                                        },
                                                        className: `me-lg-3 me-md-2 me-sm-0 me-0 ${EnquiryModalLiCls}`,
                                                        children: "Businesses compete with each other to get you the Best Deal"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                        as: "li",
                                                        style: {
                                                            display: "inline-flex"
                                                        },
                                                        className: `${EnquiryModalLiCls}`,
                                                        children: "Contact Info sent to you by SMS/Email"
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
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnquiryModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;