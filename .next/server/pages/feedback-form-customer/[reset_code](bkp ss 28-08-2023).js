(() => {
var exports = {};
exports.id = 9858;
exports.ids = [9858];
exports.modules = {

/***/ 1713:
/***/ ((module) => {

// Exports
module.exports = {
	"FeedbackMain": "FeedbackCustomer_FeedbackMain__1Crkx",
	"FeedbackBox": "FeedbackCustomer_FeedbackBox__VE0b2",
	"FeedbackText": "FeedbackCustomer_FeedbackText__SwJla",
	"ReasonsLabel": "FeedbackCustomer_ReasonsLabel__wTngx",
	"FeedbackBoxTop": "FeedbackCustomer_FeedbackBoxTop__X3cRN"
};


/***/ }),

/***/ 6383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1636);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5698);
/* harmony import */ var _components_IconBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9340);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2563);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1713);
/* harmony import */ var _styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_MessageModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4301);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_IconBox__WEBPACK_IMPORTED_MODULE_9__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_IconBox__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const FeedbackMail = ({ codeStatus , codeMsg  })=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { 0: fields , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: stateOf , 1: setStateOf  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
        codeStatus: codeStatus,
        codeMsg: codeMsg
    });
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
        "type": "",
        "message": "",
        "title": ""
    });
    const { 0: isSubmit , 1: setIsSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(true);
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(); /// ref
    //console.log(query)
    const resetCode = query.reset_code;
    const handleChange = (e)=>{
        console.log("-----", e.target.value, e.target.name);
        setFields((pre)=>({
                ...pre,
                [e.target.name]: e.target.value
            })
        );
    };
    const handleSubmit = async ()=>{
        setIsSubmit(false);
        console.log(fields, " . ----  form -  - -----");
        let err = errorCheck(fields);
        console.log(error, "       --------Errors");
        if (err) {
            let captchVal = recaptchaRef.current.getValue();
            if (captchVal) {
                let srRes = await fetch(`${process.env.BASE_URL}/api/protect/feedbacks-submit`, {
                    method: "POST",
                    body: JSON.stringify({
                        "form": fields,
                        "code": resetCode,
                        "captcha": captchVal
                    })
                });
                let srJson = await srRes.json();
                recaptchaRef.current.reset();
                if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
                    setFields({});
                    setError("");
                    setMsgModal((pre)=>{
                        return {
                            ...pre,
                            ["message"]: srJson.msg,
                            ["type"]: "success",
                            ["title"]: "Success"
                        };
                    });
                    setStateOf({
                        codeStatus: false,
                        codeMsg: "Your feedback submitted successfully."
                    });
                    setIsSubmit(true);
                } else {
                    setError("");
                    setMsgModal((pre)=>{
                        return {
                            ...pre,
                            ["message"]: srJson.msg,
                            ["type"]: "error",
                            ["title"]: "Error"
                        };
                    });
                    setIsSubmit(true);
                }
            } else {
                setError({
                    ["captcha"]: "Captcha is required."
                });
                setIsSubmit(true);
            }
        } else {
            setIsSubmit(true);
        }
    };
    const errorCheck = (frm)=>{
        var ref, ref1, ref2, ref3;
        console.log(frm, "form log");
        if (!frm.experiance) {
            setError({
                ["experiance"]: "Choose an experiance."
            });
            return false;
        } else if (frm.experiance == "") {
            setError({
                ["experiance"]: "Choose an experiance."
            });
            return false;
        }
        if (!frm.message) {
            setError({
                ["message"]: "This field is required."
            });
            return false;
        } else if (((ref1 = (ref = frm.message) === null || ref === void 0 ? void 0 : ref.trim()) === null || ref1 === void 0 ? void 0 : ref1.length) < 10 && ((ref3 = (ref2 = frm.message) === null || ref2 === void 0 ? void 0 : ref2.trim()) === null || ref3 === void 0 ? void 0 : ref3.length) > 1000) {
            setError({
                ["message"]: "Minimum 10 charactors and Maximun 1000 charactors."
            });
            return false;
        } else {
            return true;
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        pageTitle: "Feedback",
        activeNav: "Pages",
        children: [
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MessageModal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `full py-lg-5 py-md-4 py-sm-4 py-4 ${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().FeedbackMain)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                    as: "section",
                    className: "",
                    children: !(stateOf === null || stateOf === void 0 ? void 0 : stateOf.codeStatus) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: ` ${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().FeedbackBox)} ${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().FeedbackBoxTop)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mx-auto text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: ` ${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().FeedbackBoxImg)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        src: "/images/home/link-expired.svg",
                                        width: 100,
                                        height: 100,
                                        alt: "Square image"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Feedback"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-2",
                                    children: codeMsg
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "primary",
                                        className: "",
                                        children: "Go To Home"
                                    })
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().FeedbackBox)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Give Feedback"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "How was your experience at Dialmenow?"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group), {
                                            className: "mb-3 mb-md-4 mb-sm-4 d-flex",
                                            onChange: handleChange,
                                            value: fields.experiance,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Check), {
                                                    inline: true,
                                                    type: "radio",
                                                    id: "radio-4",
                                                    name: "experiance",
                                                    label: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-bad-emo"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Bad"
                                                        })
                                                    ],
                                                    value: "bad",
                                                    className: `FeedbackText ${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().FeedbackText)}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Check), {
                                                    inline: true,
                                                    type: "radio",
                                                    id: "radio-5",
                                                    name: "experiance",
                                                    label: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-okay-emo"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Okay"
                                                        })
                                                    ],
                                                    value: "good",
                                                    className: `FeedbackText ${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().FeedbackText)}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Check), {
                                                    inline: true,
                                                    type: "radio",
                                                    id: "radio-6",
                                                    name: "experiance",
                                                    label: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-good-emo"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Good"
                                                        })
                                                    ],
                                                    value: "avarge",
                                                    className: `FeedbackText ${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().FeedbackText)}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Check), {
                                                    inline: true,
                                                    type: "radio",
                                                    id: "radio-7",
                                                    name: "experiance",
                                                    label: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-amazing-emo"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Amazing"
                                                        })
                                                    ],
                                                    value: "best",
                                                    className: `FeedbackText ${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().FeedbackText)}`
                                                }),
                                                (error === null || error === void 0 ? void 0 : error.experiance) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    style: {
                                                        display: "block"
                                                    },
                                                    children: [
                                                        " ",
                                                        error === null || error === void 0 ? void 0 : error.experiance
                                                    ]
                                                }) : ""
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                                    className: `${(_styles_FeedbackCustomer_module_css__WEBPACK_IMPORTED_MODULE_18___default().ReasonsLabel)}`,
                                                    children: "What are the main reasons for your rating?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control), {
                                                    as: "textarea",
                                                    rows: 4,
                                                    placeholder: "",
                                                    "aria-label": "Message",
                                                    "aria-describedby": "icon-addon",
                                                    name: "message",
                                                    onChange: handleChange,
                                                    value: fields.messgae,
                                                    className: (error === null || error === void 0 ? void 0 : error.message) !== undefined ? "is-invalid" : ""
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            ref: recaptchaRef,
                                            sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                            size: "normal"
                                        }),
                                        (error === null || error === void 0 ? void 0 : error.captcha) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control.Feedback), {
                                            type: "invalid",
                                            tooltip: true,
                                            style: {
                                                display: "table"
                                            },
                                            children: [
                                                " ",
                                                error === null || error === void 0 ? void 0 : error.captcha
                                            ]
                                        }) : "",
                                        isSubmit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            className: "mt-3 w-100",
                                            size: "md",
                                            onClick: ()=>handleSubmit(false)
                                            ,
                                            children: "Submit"
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            className: "mt-3 w-100",
                                            size: "md",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13___default()), {
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
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedbackMail);
async function getServerSideProps(ct) {
    const { reset_code  } = ct.query;
    console.log("reset code -----", reset_code);
    if (reset_code == "undefined") {
        return false;
    }
    let srRes = await fetch(`${process.env.BASE_URL}/api/protect/get-feedback-details`, {
        method: "POST",
        body: JSON.stringify({
            "code": reset_code,
            "is_verify": true
        })
    });
    let srJson = await srRes.json();
    console.log("PAGE");
    console.log(srJson);
    return {
        props: {
            codeStatus: srJson.status != "undefined" && srJson.status == 200 ? true : false,
            codeMsg: srJson.status != "undefined" && srJson.status == 200 ? srJson.msg : srJson.msg
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3182:
/***/ ((module) => {

"use strict";
module.exports = require("localforage");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 8797:
/***/ ((module) => {

"use strict";
module.exports = require("next-share");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 2899:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Alert");

/***/ }),

/***/ 1937:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 9044:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/CloseButton");

/***/ }),

/***/ 7511:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4678:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 8582:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 5226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 2563:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/InputGroup");

/***/ }),

/***/ 4692:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ 9306:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 2540:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 6865:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Offcanvas");

/***/ }),

/***/ 4165:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/OverlayTrigger");

/***/ }),

/***/ 9736:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Popover");

/***/ }),

/***/ 8907:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 3742:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");

/***/ }),

/***/ 6804:
/***/ ((module) => {

"use strict";
module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ 5623:
/***/ ((module) => {

"use strict";
module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 3554:
/***/ ((module) => {

"use strict";
module.exports = require("react-number-format");

/***/ }),

/***/ 6666:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ 9777:
/***/ ((module) => {

"use strict";
module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 3512:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/messaging");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,9340,4301], () => (__webpack_exec__(6383)));
module.exports = __webpack_exports__;

})();