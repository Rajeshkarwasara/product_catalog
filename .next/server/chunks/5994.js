exports.id = 5994;
exports.ids = [5994];
exports.modules = {

/***/ 9654:
/***/ ((module) => {

// Exports
module.exports = {
	"ReferEarnHeroMain": "ReferAndEarn_ReferEarnHeroMain__oLKMZ",
	"ReferEarnHero": "ReferAndEarn_ReferEarnHero__CXnUZ",
	"ReferEarnHeroText": "ReferAndEarn_ReferEarnHeroText__2xL97",
	"ReferEarnWorkLiShape": "ReferAndEarn_ReferEarnWorkLiShape__oUa_F",
	"ReferEarnWorkLitext": "ReferAndEarn_ReferEarnWorkLitext__acGRI",
	"ReferEarnWorkLi": "ReferAndEarn_ReferEarnWorkLi__yz_0k",
	"ReferEarnHowBenefits": "ReferAndEarn_ReferEarnHowBenefits__SwGkI",
	"ShareBusinessForm": "ReferAndEarn_ShareBusinessForm__ldDyB",
	"ReferEarnHowWork": "ReferAndEarn_ReferEarnHowWork__GZVWy",
	"WalletTable": "ReferAndEarn_WalletTable__DBNG_",
	"CreditBtn": "ReferAndEarn_CreditBtn__i4WoB",
	"debitBtn": "ReferAndEarn_debitBtn__ltj_E",
	"ProfileHeading": "ReferAndEarn_ProfileHeading__osroI",
	"ReferPending": "ReferAndEarn_ReferPending__LHBb7",
	"ReferCompleted": "ReferAndEarn_ReferCompleted__ddTdN",
	"ReferEarnHead": "ReferAndEarn_ReferEarnHead__APVw1",
	"ReferEarnLeft": "ReferAndEarn_ReferEarnLeft__xX9jJ"
};


/***/ }),

/***/ 6502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _components_MessageModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4301);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
react_toastify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









{
/* Example of how to lauch modal */ }const ShareBusinessReferEarn = ({ ReferEarnHeadCls ="" , businessURL: businessURL1 , showStatus , id , cityName ="" , categoryName ="" , cityID ="" , categoryID ="" , ShareIconCls ="" , ShareIconTwitterCls ="" , ShareIconWhatsappCls ="" , ShareIconEmailCls ="" , ShareIconSMSCls ="" , ShareBusinessFormCls ="" , ...props })=>{
    console.log("----share show--------", showStatus);
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showStatus);
    const { 0: allowError , 1: setAllowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        type: "",
        message: "",
        title: ""
    });
    const { 0: showOTP , 1: setShowOTP  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: fields1 , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        city: "",
        name: "",
        phone: "",
        email: "",
        share_type: "email",
        services: ""
    });
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: isSubmit , 1: setIsSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: servicesAll , 1: setServices  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //load services
        dataLoad();
    //load share listing
    }, []);
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
    const dataLoad = async ()=>{
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/refer-earn-sevices`, {
            method: "POST",
            body: JSON.stringify({
                service_id: ""
            })
        });
        let srJson = await srRes.json();
        console.log("services------", srJson);
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
            setServices(srJson.data);
        } else {
            setServices([]);
        }
    };
    const handleChange = (e)=>{
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
        if (allowError) {
            console.log(" -------- changes------- ", changes);
            let errros = formError(changes);
            console.log("- --- handleChange---- ", errros);
            setError(errros);
        }
    };
    const shareSocials = (url)=>{
        const config = {
            height: "400",
            width: "550",
            left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - 550 / 2,
            top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - 400 / 2,
            location: "no",
            toolbar: "no",
            status: "no",
            directories: "no",
            menubar: "no",
            scrollbars: "yes",
            resizable: "yes",
            centerscreen: "yes",
            chrome: "yes"
        };
        window.open(url, "", Object.keys(config).map((key)=>`${key}=${config[key]}`
        ).join(", "));
    };
    const isMobileOrTablet = ()=>{
        return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
    };
    const handleSubmit = async (sessionData)=>{
        setIsSubmit(false);
        setAllowError(true);
        let errorReponse = await formError(fields1);
        console.log("-errors---", errorReponse);
        if (Object.entries(errorReponse).length !== 0) {
            setError(errorReponse);
            setIsSubmit(true);
        } else {
            let captchVal = recaptchaRef.current.getValue();
            if (captchVal) {
                setError({});
                // console.log("Finally Working Good")
                setShowOTP(false);
                //can not submit form with login or OTP verify resJson
                let srRes = await fetch(`${process.env.BASE_URL}/api/protect/refer-earn-form`, {
                    method: "POST",
                    body: JSON.stringify({
                        form: fields1,
                        captch: captchVal
                    })
                });
                let srJson = await srRes.json();
                if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
                    setFields({
                        city: "",
                        name: "",
                        phone: "",
                        email: "",
                        share_type: "email",
                        services: ""
                    });
                    let businessURL = srJson.url;
                    let content = "Hey, I'm inviting you to use Dialmenow.in, the fastest and affordable way to list your business at Dialmenow. Join referral program and earn money for refer to service. Don't miss out on this opportunity to earn money while helping you save on next purchase!";
                    //setFields({ city: '', name: '', phone: '', email: '', search_query: '' });
                    if (fields1.share_type == "facebook") {
                        let fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(businessURL) + "&quote=" + encodeURIComponent(content) + "&hashtag=" + encodeURIComponent("#yellowpagesJaipur, #yellowpages Jaipur, #yellowpages, #business-directory-Jaipur, #Jaipur-business-directory, #referandearn, #earncash, #referafriend,#dialmenow");
                        shareSocials(fbUrl);
                        recaptchaRef.current.reset();
                        setIsSubmit(true);
                        props.onHide();
                    } else if (fields1.share_type == "twitter") {
                        let twt = "https://twitter.com/share?url=" + encodeURIComponent(businessURL) + "&text=" + encodeURIComponent(content) + "&hashtags=" + encodeURIComponent("yellowpagesJaipur,yellowpages_Jaipur,yellowpages,business_directory_Jaipur,Jaipur_business_directory,local_business_directory,Dialmenow_yellow_pages,dialmenow,referandearn,earncash,referafriend");
                        shareSocials(twt);
                        recaptchaRef.current.reset();
                        setIsSubmit(true);
                        props.onHide();
                    } else if (fields1.share_type == "whatsapp") {
                        let urlWhatsapp = "https://" + (isMobileOrTablet() ? "api" : "web") + ".whatsapp.com/send?text=" + encodeURIComponent(content + "\n " + businessURL);
                        shareSocials(urlWhatsapp);
                        recaptchaRef.current.reset();
                        setIsSubmit(true);
                        props.onHide();
                    } else {
                        //toast.success("Refer successfully.");
                        setMsgModal((pre)=>{
                            return {
                                ...pre,
                                ["message"]: "Refer successfully.",
                                ["type"]: "success",
                                ["title"]: "Success"
                            };
                        });
                        recaptchaRef.current.reset();
                        setIsSubmit(true);
                        props.onHide();
                    }
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
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(resJson.msg);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Something went wrong! Please try after sometime.");
                }
            }
        } catch (err) {
            // console.log(err)
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Something went wrong! Please try after sometime.");
        }
    };
    const formError = (frm)=>{
        console.log(frm, "--------frm------------");
        let errors = {};
        if (!frm.services) {
            errors = {
                ...errors,
                ["services"]: "This field is required."
            };
        } else if (frm.services !== undefined && frm.services == "") {
            errors = {
                ...errors,
                ["services"]: "This field is required."
            };
        }
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
        if (!frm.phone) {
            errors = {
                ...errors,
                ["phone"]: "This field is required."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length !== 10) {
            errors = {
                ...errors,
                ["phone"]: "Phone number must be exactly 10 digits."
            };
        } else if (frm.phone.charAt(0) === "0" // Check if the first character is '0'
        ) {
            errors = {
                ...errors,
                ["phone"]: "Phone number cannot start with '0'."
            };
        } else if (!/^[0-9]+$/.test(frm.phone) // Check if it contains only numeric characters
        ) {
            errors = {
                ...errors,
                ["phone"]: "Only numbers are allowed."
            };
        }
        if (!frm.share_type) {
            errors = {
                ...errors,
                ["share_type"]: "This field is required."
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
            setShowOTP(true); // show OTP div if invalid OTP
        }
    };
    const handleChangeCheckbox = (e)=>{
        //e.preventDefault();
        const { value , checked  } = e.target;
        if (checked) {
            const updatedDetails = {
                ...fields1,
                ["share_type"]: value
            };
            setFields(updatedDetails);
        } else {
            const updatedDetails = {
                ...fields1,
                ["share_type"]: value
            };
            setFields(updatedDetails);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MessageModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${ShareBusinessFormCls}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: `${ReferEarnHeadCls}`,
                        children: "Refer & Earn"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default()), {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                controlId: "phone",
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                        children: [
                                            "Service",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "\xa0*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Select), {
                                        value: fields1 === null || fields1 === void 0 ? void 0 : fields1.services,
                                        name: "services",
                                        onChange: handleChange,
                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.services) !== undefined ? "is-invalid" : ""}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                disabled: true,
                                                children: "Choose option..."
                                            }),
                                            servicesAll.length > 0 && servicesAll.map((val)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: val.id,
                                                    children: val.name
                                                }, val.id)
                                            )
                                        ]
                                    }),
                                    (error1 === null || error1 === void 0 ? void 0 : error1.phone) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                        type: "invalid",
                                        tooltip: true,
                                        children: [
                                            " ",
                                            error1 === null || error1 === void 0 ? void 0 : error1.phone
                                        ]
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                controlId: "name",
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                        children: [
                                            "Name",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "\xa0*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                        placeholder: "Enter referee name",
                                        name: "name",
                                        value: fields1.name,
                                        onChange: handleChange,
                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.name) !== undefined ? "is-invalid" : ""}`
                                    }),
                                    (error1 === null || error1 === void 0 ? void 0 : error1.name) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                        type: "invalid",
                                        tooltip: true,
                                        children: [
                                            " ",
                                            error1 === null || error1 === void 0 ? void 0 : error1.name
                                        ]
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                controlId: "emailId",
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                        children: [
                                            "Email",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "\xa0*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                        placeholder: "Enter referee email",
                                        name: "email",
                                        value: fields1.email,
                                        onChange: handleChange,
                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.email) !== undefined ? "is-invalid" : ""}`
                                    }),
                                    (error1 === null || error1 === void 0 ? void 0 : error1.email) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                        type: "invalid",
                                        tooltip: true,
                                        children: [
                                            " ",
                                            error1 === null || error1 === void 0 ? void 0 : error1.email
                                        ]
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                controlId: "mobID",
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                        children: [
                                            "Phone",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "\xa0*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_3___default()),
                                        format: "##########",
                                        placeholder: "Enter referee phone",
                                        name: "phone",
                                        value: fields1.phone,
                                        onChange: handleChange,
                                        className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.phone) !== undefined ? "is-invalid" : ""}`
                                    }),
                                    (error1 === null || error1 === void 0 ? void 0 : error1.phone) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                        type: "invalid",
                                        tooltip: true,
                                        children: [
                                            " ",
                                            error1 === null || error1 === void 0 ? void 0 : error1.phone
                                        ]
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                controlId: "share_change",
                                className: "mb-3",
                                onChange: handleChangeCheckbox,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                        children: "Share on:"
                                    }),
                                    (error1 === null || error1 === void 0 ? void 0 : error1.share_type) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                type: "radio",
                                                id: `facebook`,
                                                label: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-facebook"
                                                    })
                                                ],
                                                name: "share_type",
                                                value: "facebook",
                                                role: "button",
                                                className: `ShareIcon ${ShareIconCls}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                type: "radio",
                                                id: `twitter`,
                                                label: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-twitter"
                                                    })
                                                ],
                                                name: "share_type",
                                                value: "twitter",
                                                role: "button",
                                                className: `ShareIconTwitter ShareIcon ${ShareIconCls}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                type: "radio",
                                                id: `whatsapp`,
                                                label: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-whatsapp"
                                                    })
                                                ],
                                                name: "share_type",
                                                value: "whatsapp",
                                                role: "button",
                                                className: `ShareIconWhatsapp ShareIcon ${ShareIconCls}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                type: "radio",
                                                id: `email`,
                                                label: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-mail"
                                                    })
                                                ],
                                                name: "share_type",
                                                value: "email",
                                                role: "button",
                                                defaultChecked: true,
                                                className: `ShareIconEmail ShareIcon ${ShareIconCls}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                type: "radio",
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default()), {
                                ref: recaptchaRef,
                                sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                size: "normal"
                            }),
                            (error1 === null || error1 === void 0 ? void 0 : error1.captcha) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
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
                            isSubmit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "mt-3 w-100 mb-0",
                                size: "md",
                                onClick: ()=>handleSubmit(false)
                                ,
                                children: "Submit"
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "mt-3 w-100",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6___default()), {
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
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareBusinessReferEarn);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;