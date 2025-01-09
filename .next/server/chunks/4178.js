exports.id = 4178;
exports.ids = [4178];
exports.modules = {

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PasswordToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7840);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8743);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2563);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helper_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(261);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9736);
/* harmony import */ var react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6804);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_20__);



















const VerifyOtp = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/partials/SignUpModalLight.js -> " + "../partials/VerifyOtp"
        ]
    },
    ssr: false
});
const MessagePop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/partials/SignUpModalLight.js -> " + "../MessageModal"
        ]
    },
    ssr: false
});


const SignUpModalLight = ({ onSwap , pillButtons , callbackUrl =false , ...props })=>{
    const { 0: basicDetail , 1: setBasicDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: otpPage , 1: setOtpPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const { 0: cities , 1: setCities  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    const submitCnt = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0); /// ref
    const { 0: signLoad , 1: setSignLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); //submit loader
    const { 0: showAlert , 1: setShowAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); /// alert DIV show hide
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // error messgae will show in Alert
    const { 0: alertType , 1: setAlertType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("danger"); // error messgae will show in Alert
    const { 0: formField , 1: setFormField  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        address: "",
        confirm_password: "",
        email: "",
        gender: "male",
        name: "",
        occupation: "",
        password: "",
        phone: "",
        pincode: "",
        terms: 0,
        whatsapp: 0,
        city: "",
        state: "",
        dob: "",
        aod: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((a)=>{
        if (props.show) {
            let details = basicDetailsFxn();
            Promise.resolve(details).then((val)=>{
                //console.log(val)
                setBasicDetail(val);
            });
        }
    }, [
        props.show
    ]);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const form = event.currentTarget;
        const frmError = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_13__/* .signupValidations */ .cA)(formField);
        //console.log("____submit errors______", frmError)
        submitCnt.current++;
        setShowAlert(false);
        setSignLoad(false);
        if (Object.entries(frmError).length > 0) {
            event.stopPropagation();
            setFormError(frmError);
            setSignLoad(true);
        } else {
            //submit form
            let captchVal = recaptchaRef.current.getValue();
            recaptchaRef.current.reset();
            if (captchVal) {
                setFormError({});
                var requestOptions = {
                    method: "POST",
                    body: JSON.stringify({
                        form: formField,
                        captcha: captchVal
                    })
                };
                var APIpathSub = `${process.env.BASE_URL}/api/protect/submit-details-signup`;
                var resSub = await fetch(APIpathSub, requestOptions);
                var subResJson = await resSub.json();
                if (subResJson.status == 200) {
                    submitCnt.current = 0;
                    setAlertType("success");
                    setError(subResJson.data.msg);
                    setShowAlert(true); // alert message will show
                    //reset form
                    setFormField({
                        address: "",
                        confirm_password: "",
                        email: "",
                        gender: "male",
                        name: "",
                        occupation: "",
                        password: "",
                        phone: "",
                        pincode: "",
                        terms: 0,
                        whatsapp: 0,
                        city: "",
                        state: "",
                        dob: "",
                        aod: ""
                    });
                    setFormError({});
                    setTimeout(()=>{
                        props.onHide();
                    }, 3000);
                    if (callbackUrl) {
                        next_router__WEBPACK_IMPORTED_MODULE_19___default().router.push(callbackUrl);
                    }
                    const templateID = "1407168690735506019";
                    const template = encodeURIComponent(`Dear ${formField.name} \nYour account has been registered successfully. \nPlease login with these login Credentials at www.dialmenow.in
            \nEmail Address :  ${formField.email} \nPassword : ${formField.password} \nPlease do not forget to verify your email. We have sent an email to your for the same. 
            \nPlease do not share your password with anyone. Regards, Dialmenow.in +919252392523`);
                    const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${formField.phone}&sms=${template}&tempid=${templateID}`;
                    try {
                        const msgNewRegistertion = await fetch(APIpath);
                        if (msgNewRegistertion.status === 200) {
                            return true;
                        } else {
                            console.error("Error sending SMS. Response status:", msgNewRegistertion.status);
                            return false;
                        }
                    } catch (error) {
                        console.error("Error sending SMS:", error);
                        return false;
                    }
                } else {
                    setAlertType("danger");
                    setError(subResJson.msg);
                    setShowAlert(true); // alert message will show
                }
            } else {
                setFormError({
                    captcha: "Captcha is required."
                });
            }
            setSignLoad(true);
        }
        setTimeout(()=>{
            setAlertType("danger");
            setError("");
            setShowAlert(false);
        }, 4000);
    };
    const pincodeWiseState = async (pin)=>{
        try {
            var pinSize = pin.length;
            var cityID = document.getElementById("su-city");
            var stateID = document.getElementById("su-state");
            if (pinSize == 6) {
                //console.log("classling ==" + pinSize)
                var APIpath = `https://api.postalpincode.in/pincode/${pin}`;
                var res = await fetch(APIpath);
                var resJson = await res.json();
                var pinState, pinCity;
                if (resJson[0].Status == "Success") {
                    pinState = resJson[0].PostOffice[0].State;
                    pinCity = resJson[0].PostOffice[0].District;
                    var stateSelectID = [
                        ...stateID.options
                    ].findIndex((option)=>option.text.toLowerCase() === pinState.toLowerCase() ? option.value : false
                    );
                    if (stateSelectID) {
                        stateID.selectedIndex = [
                            ...stateID.options
                        ].findIndex((option)=>option.text.toLowerCase() === pinState.toLowerCase()
                        );
                        formField = {
                            ...formField,
                            ["state"]: stateSelectID,
                            ["pincode"]: pin
                        };
                        setFormField(formField);
                    } else {
                        stateID.selectedIndex = 0;
                    }
                    var cityListing = await citylistStateWise(stateSelectID, pinCity.toLowerCase());
                //console.log("cityListing   ",cityListing)
                /*
                    if (cityListing) {

                        var citySelectID = [...cityID.options].findIndex(option => (option.text.toLowerCase() === pinCity.toLowerCase()) ? option.value : false);
                        if (citySelectID) {

                            formField = { ...formField, ["city"]: citySelectID }
                            setFormField(formField)
                        }
                        else {
                            cityID.selectedIndex = 0;

                        }
                    }
                    else {
                        cityID.selectedIndex = 0;
                    }
                    */ } else {
                    cityID.selectedIndex = 0;
                    stateID.selectedIndex = 0;
                }
            }
        } catch (err) {
        // console.log(err)
        }
    };
    const citylistStateWise = async (stateID, cityName = "")=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    state: stateID
                })
            };
            if (stateID > 0) {
                var APIpath = `${process.env.BASE_URL}/api/protect/state-wise-cities`;
                var res = await fetch(APIpath, requestOptions);
                var resJson = await res.json();
                //console.log(resJson)
                if (resJson.status == 200) {
                    setCities(resJson.data);
                    //let city = document.getElementById('su-city');
                    console.log("  cityName   ", cityName);
                    if (cityName) {
                        //console.log("  cityData   ", resJson.data)
                        let cityData = resJson.data.filter((option)=>{
                            var ref;
                            return (option === null || option === void 0 ? void 0 : (ref = option.name) === null || ref === void 0 ? void 0 : ref.toLowerCase()) == cityName;
                        });
                        if ((cityData === null || cityData === void 0 ? void 0 : cityData.length) > 0) {
                            setFormField((pre)=>({
                                    ...pre,
                                    ["city"]: cityData[0].id
                                })
                            );
                        }
                    //console.log("  cityData   ", cityData)
                    //return true;
                    } else {
                    //return true;
                    }
                } else {
                    setCities({});
                    return false;
                }
            } else {
                setCities({});
                return false;
            }
        } catch (err) {
            console.log("city ID  ", err);
            setCities({});
            return false;
        }
    };
    const formFieldChange = async (event)=>{
        var formUpdates = {
            ...formField,
            [event.currentTarget.name]: event.currentTarget.value
        };
        if (event.currentTarget.name == "terms") {
            formUpdates = {
                ...formField,
                [event.currentTarget.name]: !formField.terms
            };
            setFormField(formUpdates);
        } else if (event.currentTarget.name == "whatsapp") {
            formUpdates = {
                ...formField,
                [event.currentTarget.name]: !formField.whatsapp
            };
            setFormField({
                ...formField,
                [event.currentTarget.name]: !formField.whatsapp
            });
        } else {
            setFormField({
                ...formField,
                [event.currentTarget.name]: event.currentTarget.value
            });
        }
        if (event.currentTarget.name == "pincode") {
            var pinCodeVal = event.target.value.trim();
            if (pinCodeVal.length == 6) {
                pincodeWiseState(pinCodeVal);
            }
        }
        if (event.currentTarget.name == "state") {
            citylistStateWise(event.currentTarget.value);
        }
        if (submitCnt.current > 0) {
            let frmErrorEVT = await (0,_helper_validation__WEBPACK_IMPORTED_MODULE_13__/* .signupValidations */ .cA)(formUpdates);
            setFormError(frmErrorEVT);
        }
    };
    const dobChangeDate = (date)=>{
        formField = {
            ...formField,
            ["dob"]: date
        };
        setFormField(formField);
    };
    const aodChangeDate = (date)=>{
        formField = {
            ...formField,
            ["aod"]: date
        };
        setFormField(formField);
    };
    const basicDetailsFxn = async ()=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    token: ""
                })
            };
            var APIpath = `${process.env.BASE_URL}/api/protect/signup-details`;
            const res = await fetch(APIpath, requestOptions);
            const resJson = await res.json();
            if (resJson.status == 200) {
                return resJson.data;
            } else {
                return "";
            }
        } catch (err) {
            return "";
        }
    };
    const handleGlogin = async (event)=>{
        event.preventDefault();
        const resGlog = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_16__.signIn)("google", {
            callbackUrl: callbackUrl,
            is_new: true
        });
    };
    // const handleFBlogin = async (event) => {
    //     event.preventDefault();
    //     const resGlog = await signIn("facebook", { callbackUrl: callbackUrl });
    // }
    const handleFBlogin = async (response)=>{
        let resSign = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_16__.signIn)("fb-login", {
            callbackUrl: "",
            data: JSON.stringify(response)
        });
        if (resSign.error !== undefined && resSign.status == 200) {
            toast.success("Login successfully!");
        } else {
            toast.success(resSign.msg);
        }
    };
    const handleMobile = async (event)=>{
        event.preventDefault();
        setOtpPage(true);
    };
    const handleOTP = ()=>{
        setOtpPage(false);
    };
    if (otpPage) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VerifyOtp, {
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
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                error1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessagePop, {
                    message: error1,
                    title: alertType == "success" ? "Success" : "Error",
                    status: true,
                    setMessage: setError,
                    type: alertType
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
                    ...props,
                    className: "signup-modal dialmenowModal",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Body), {
                        className: "px-0 py-2 py-sm-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                onClick: ()=>{
                                    props.onHide();
                                    submitCnt.current = 0;
                                },
                                "aria-label": "Close modal",
                                className: "position-absolute top-0 end-0 mt-3 me-3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mx-0 align-items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-12 px-3 pt-2 pb-0 px-sm-5 pb-sm-3 pt-md-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "mb-1 mt-3 mt-sm-0",
                                                    children: "Sign Up"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Let's get you all set up so you can verify your personal account."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                controlId: "su-name",
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        children: [
                                                                            "Full Name",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                                                        placeholder: "Enter your full name",
                                                                        required: true,
                                                                        name: "name",
                                                                        value: formField.name,
                                                                        onChange: formFieldChange,
                                                                        className: `form-control ${formError.name !== undefined ? "is-invalid" : ""}`
                                                                    }),
                                                                    formError.name !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.name
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                controlId: "su-email",
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        children: [
                                                                            "Email Address",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                                                        type: "email",
                                                                        placeholder: "Enter email id",
                                                                        required: true,
                                                                        name: "email",
                                                                        value: formField.email,
                                                                        onChange: formFieldChange,
                                                                        className: `form-control ${formError.email !== undefined ? "is-invalid" : ""}`
                                                                    }),
                                                                    formError.email !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.email
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                className: ` mb-3 `,
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        htmlFor: "su-password",
                                                                        children: [
                                                                            "Password",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                placement: "top",
                                                                                overlay: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_18___default().Header), {
                                                                                            as: "h3",
                                                                                            children: "Password Rules:"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_18___default().Body), {
                                                                                            children: [
                                                                                                "1. Requires a number in the Password",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                                "2. Requires a Capital letter in the password",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                                "3. Requires a lower case letter in the password",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "fs-sm fi-help"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PasswordToggle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                        id: "su-password",
                                                                        required: true,
                                                                        name: "password",
                                                                        placeholder: "Please enter your password",
                                                                        value: formField.password,
                                                                        onChange: formFieldChange,
                                                                        inputClass: `${formError.password !== undefined ? "is-invalid" : ""}`,
                                                                        showError: `${formError.password !== undefined ? formError.password : ""}`
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                className: ` mb-3 `,
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        htmlFor: "su-confirm-password",
                                                                        children: [
                                                                            "Confirm Password",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PasswordToggle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                        id: "su-confirm-password",
                                                                        required: true,
                                                                        name: "confirm_password",
                                                                        placeholder: "Please confirm your password",
                                                                        value: formField.confirm_password,
                                                                        onChange: formFieldChange,
                                                                        inputClass: ` ${formError.confirm_password !== undefined ? "is-invalid" : ""}`,
                                                                        showError: `${formError.confirm_password !== undefined ? formError.confirm_password : ""}`
                                                                    }),
                                                                    formError.confirm_password !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.confirm_password
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                controlId: "date-input-dob",
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        children: "Date of Birth"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                                                                as: (react_datepicker__WEBPACK_IMPORTED_MODULE_10___default()),
                                                                                selected: formField.dob,
                                                                                onChange: dobChangeDate,
                                                                                placeholderText: "Choose date",
                                                                                className: "rounded pe-5",
                                                                                value: formField.dob,
                                                                                name: "dob",
                                                                                dateFormat: "dd-MM-yyyy",
                                                                                showMonthDropdown: true,
                                                                                useShortMonthInDropdown: true,
                                                                                showYearDropdown: true,
                                                                                dropdownMode: "select",
                                                                                maxDate: new Date()
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fi-calendar position-absolute top-50 end-0 translate-middle-y me-3"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        htmlFor: "su-phone",
                                                                        children: [
                                                                            "Phone",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                                                        type: "text",
                                                                        placeholder: "Enter phone number",
                                                                        id: "su-phone",
                                                                        autoComplete: "off",
                                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_9___default()),
                                                                        pattern: "[0-9]{10}",
                                                                        format: "##########",
                                                                        name: "phone",
                                                                        value: formField.phone,
                                                                        required: true,
                                                                        onChange: formFieldChange,
                                                                        className: `form-control ${formError.phone !== undefined ? "is-invalid" : ""}`
                                                                    }),
                                                                    formError.phone !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.phone
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        htmlFor: "su-gender",
                                                                        children: [
                                                                            "Gender",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                                                inline: true,
                                                                                type: "radio",
                                                                                id: "radio-4",
                                                                                name: "gender",
                                                                                label: "Male",
                                                                                value: "male",
                                                                                defaultChecked: true,
                                                                                onChange: formFieldChange
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                                                inline: true,
                                                                                type: "radio",
                                                                                id: "radio-5",
                                                                                name: "gender",
                                                                                label: "Female",
                                                                                value: "female",
                                                                                onChange: formFieldChange,
                                                                                defaultChecked: false
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                                                inline: true,
                                                                                type: "radio",
                                                                                id: "radio-6",
                                                                                name: "gender",
                                                                                label: "Other",
                                                                                value: "other",
                                                                                onChange: formFieldChange,
                                                                                defaultChecked: false
                                                                            })
                                                                        ]
                                                                    }),
                                                                    formError.gender !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.gender
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        htmlFor: "su-occupation ",
                                                                        children: [
                                                                            "Occupation",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Select), {
                                                                        required: true,
                                                                        id: "su-occupation",
                                                                        name: "occupation",
                                                                        value: formField.occupation,
                                                                        onChange: formFieldChange,
                                                                        className: `form-control ${formError.occupation !== undefined ? "is-invalid" : ""}`,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "",
                                                                                disabled: true,
                                                                                children: "Choose occupation"
                                                                            }),
                                                                            basicDetail.occupetion && basicDetail.occupetion.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: val.id,
                                                                                    children: val.name
                                                                                }, val.id)
                                                                            )
                                                                        ]
                                                                    }),
                                                                    formError.occupation !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.occupation
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                controlId: "su-address",
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        children: [
                                                                            "Address",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                                                        as: "textarea",
                                                                        rows: 1,
                                                                        placeholder: "Enter your address",
                                                                        value: formField.address,
                                                                        name: "address",
                                                                        onChange: formFieldChange,
                                                                        className: `form-control ${formError.address !== undefined ? "is-invalid" : ""}`
                                                                    }),
                                                                    formError.address !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.address
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                className: "mb-3",
                                                                controlId: "su-pincode",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        children: [
                                                                            "Pin code",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                                                        onChange: formFieldChange,
                                                                        type: "text",
                                                                        placeholder: "Enter pin code",
                                                                        autoComplete: "off",
                                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_9___default()),
                                                                        pattern: "[0-9]{6}",
                                                                        format: "######",
                                                                        value: formField.pincode,
                                                                        name: "pincode",
                                                                        required: true,
                                                                        className: `form-control ${formError.pincode !== undefined ? "is-invalid" : ""}`
                                                                    }),
                                                                    formError.pincode !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.pincode
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                controlId: "su-state",
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        children: [
                                                                            "State",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Select), {
                                                                        required: true,
                                                                        name: "state",
                                                                        value: formField.state,
                                                                        onChange: formFieldChange,
                                                                        className: `form-control ${formError.occupation !== undefined ? "is-invalid" : ""}`,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "",
                                                                                children: "Choose state"
                                                                            }),
                                                                            basicDetail.state && basicDetail.state.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: val.id,
                                                                                    children: val.name
                                                                                }, val.id)
                                                                            )
                                                                        ]
                                                                    }),
                                                                    formError.state !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.state
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group), {
                                                                controlId: "su-city",
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Label), {
                                                                        children: [
                                                                            "City",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Select), {
                                                                        required: true,
                                                                        name: "city",
                                                                        value: formField.city,
                                                                        onChange: formFieldChange,
                                                                        className: `form-control ${formError.city !== undefined ? "is-invalid" : ""}`,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "",
                                                                                children: "Choose city"
                                                                            }),
                                                                            Object.entries(cities).length > 0 && cities.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: val.id,
                                                                                    children: val.name
                                                                                }, val.id)
                                                                            )
                                                                        ]
                                                                    }),
                                                                    formError.city !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.city
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                                    type: "checkbox",
                                                                    id: "terms-agree",
                                                                    //defaultChecked={false}
                                                                    label: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "By joining, I agree to the "
                                                                        }, 1),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: process.env.BASE_URL + "/pages/signup-term-of-use",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                children: "Terms of use"
                                                                            })
                                                                        }, 2),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: " and "
                                                                        }, 3),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: process.env.BASE_URL + "/pages/signup-privacy-policy",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                children: "Privacy policy"
                                                                            })
                                                                        }, 4), 
                                                                    ],
                                                                    required: true,
                                                                    name: "terms",
                                                                    className: ` mb-2`,
                                                                    checked: formField.terms,
                                                                    onChange: formFieldChange
                                                                }),
                                                                formError.terms !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "invalid-tooltip",
                                                                    style: {
                                                                        display: "block"
                                                                    },
                                                                    children: formError.terms
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Check), {
                                                                    type: "checkbox",
                                                                    id: "whats-agree",
                                                                    //defaultChecked={false}
                                                                    value: formField.whatsapp,
                                                                    name: "whatsapp",
                                                                    label: `Would you like to get updates over Whatsapp?`,
                                                                    className: "mb-2",
                                                                    onChange: formFieldChange
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                                    ref: recaptchaRef,
                                                                    sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                                                    size: "normal"
                                                                }),
                                                                formError.captcha !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "invalid-tooltip",
                                                                    style: {
                                                                        display: "block"
                                                                    },
                                                                    children: formError.captcha
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                signLoad ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    type: "submit",
                                                    size: "lg",
                                                    variant: `primary text-center mt-4 w-100 ${pillButtons ? "" : ""} `,
                                                    onClick: handleSubmit,
                                                    children: "Sign Up"
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    size: "lg",
                                                    variant: `primary text-center mt-4  w-100 ${pillButtons ? "" : ""} `,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                            animation: "border",
                                                            size: "sm",
                                                            role: "status",
                                                            className: "me-2"
                                                        }),
                                                        "Wait..."
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-2 mb-3 text-center dontaccount",
                                            children: [
                                                "Already have an account?",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    onClick: onSwap,
                                                    children: "Login"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row mb-md-0 mb-3 LoginOther justify-content-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-md-4 col-sm-2 col-4",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_20___default()), {
                                                        appId: "718702349228148",
                                                        fields: "name,email,picture",
                                                        scope: "public_profile,email",
                                                        version: "2.7",
                                                        callback: (e)=>handleFBlogin(e)
                                                        ,
                                                        //autoLoad={true}
                                                        render: (renderProps)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                onClick: renderProps.onClick,
                                                                variant: `outline-secondary fw-normal ${pillButtons ? "fbCls" : ""} w-100 mb-0`,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-facebook fs-lg me-1"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Sign in with Facebook"
                                                                    })
                                                                ]
                                                            })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-md-4 col-sm-2 col-4",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "LoginOther",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
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
                                                                    children: " Sign in with Google "
                                                                })
                                                            ]
                                                        })
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
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpModalLight);


/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;