"use strict";
(() => {
var exports = {};
exports.id = 8623;
exports.ids = [8623];
exports.modules = {

/***/ 7999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9736);
/* harmony import */ var react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__]);
_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const ResetPassword = ({ codeStatus  })=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    //console.log(query)
    const resetCode = query.reset_code;
    // Form validation
    const { 0: validated , 1: setValidated  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { 0: formFields , 1: setFormFields  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({
        "new_pass": "",
        "confirm": ""
    });
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({});
    const { 0: successMsg , 1: setSuccessMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({
        msg: "",
        status: ""
    });
    const handleChange = (e)=>{
        event.preventDefault();
        //console.log(e.currentTarget.value)
        formFields = {
            ...formFields,
            [e.target.name]: e.target.value
        };
        setFormFields(formFields);
        let formErrRes = formValid(formFields);
        setFormError(formErrRes);
    };
    const handleSubmit = async (event)=>{
        const form = event.currentTarget;
        console.log(formFields);
        console.log("TTT");
        let formErrRes = formValid(formFields);
        console.log(Object.entries(formErrRes).length);
        if (Object.entries(formErrRes).length > 0) {
            event.preventDefault();
            event.stopPropagation();
            setFormError(formErrRes);
            console.log(formError);
        } else {
            setFormError({});
            if (formFields.new_pass != "" && formFields.confirm != "") {
                let addOptions = {
                    method: "POST",
                    body: JSON.stringify({
                        "new_pass": formFields.new_pass,
                        "confirm": formFields.confirm,
                        "code": resetCode
                    })
                };
                let addRes = await fetch(`${process.env.BASE_URL}/api/protect/verify-password`, addOptions);
                let addJson = await addRes.json();
                console.log(addJson);
                if (addJson.status != "undefined" && addJson.status == 200) {
                    setSuccessMsg({
                        ...successMsg,
                        ["msg"]: addJson.msg,
                        ["status"]: addJson.status
                    });
                } else {
                    setSuccessMsg({
                        ...successMsg,
                        ["msg"]: addJson.msg,
                        ["status"]: addJson.status
                    });
                }
            } else {
                setFormError({
                    "confirm": "Password do not matched!"
                });
            }
        }
    };
    const formValid = (frm)=>{
        let errors = {};
        if (!frm.new_pass) {
            errors = {
                ...errors,
                ["new_pass"]: "Password is required."
            };
        } else if (frm.new_pass.length < 8) {
            errors = {
                ...errors,
                ["new_pass"]: "Password must have a minimum 8 characters."
            };
        } else if (frm.new_pass.length > 18) {
            errors = {
                ...errors,
                ["new_pass"]: "Password can not be greater than 18 characters."
            };
        } else if (frm.new_pass != "" && !new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/).test(frm.new_pass)) {
            errors = {
                ...errors,
                ["new_pass"]: "Password atleast have one upper case char, lower case char, digit and special char from these ! @ # $ % ^ & *"
            };
        }
        if (!frm.confirm) {
            errors = {
                ...errors,
                ["confirm"]: "Password is required."
            };
        } else if (frm.confirm.length < 8) {
            errors = {
                ...errors,
                ["confirm"]: "Password must have a minimum 8 characters."
            };
        } else if (frm.confirm.length > 18) {
            errors = {
                ...errors,
                ["confirm"]: "Password can not be greater than 18 characters."
            };
        } else if (frm.confirm != frm.new_pass) {
            errors = {
                ...errors,
                ["confirm"]: "Password do not match!"
            };
        }
        return errors;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        pageTitle: "Reset Password",
        activeNav: "Pages",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            as: "section",
            className: "my-5 pt-lg-5 pt-4 pb-lg-4",
            children: codeStatus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-md-4 py-5 bg-secondary rounded-3 mb-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                    xs: 11,
                    sm: 11,
                    className: "d-flex flex-md-row flex-column align-items-center justify-content-between mx-auto px-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "order-md-1 order-2 text-md-start text-center",
                            children: successMsg.status != 200 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                                as: "section",
                                className: "gy-4 pb-5 mb-2 mb-lg-4",
                                children: [
                                    successMsg.status >= 200 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        variant: "danger",
                                        children: successMsg.msg
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        md: 10,
                                        xl: {
                                            span: 10,
                                            offset: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "mb-md-4 mb-3",
                                                children: "Reset Your Password"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mb-4 pb-md-2 fs-lg",
                                                children: "Choose a strong password."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default()),
                                                sm: 2,
                                                xs: 1,
                                                className: "gy-sm-4 gy-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group),
                                                        xs: 12,
                                                        controlId: "c-name",
                                                        className: "w-100",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                                                children: [
                                                                    "New Password ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                                        placement: "top",
                                                                        overlay: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_13___default().Header), {
                                                                                    as: "h3",
                                                                                    children: "Password  Rules:"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_13___default().Body), {
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
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control), {
                                                                size: "lg",
                                                                required: true,
                                                                value: formFields.new_pass,
                                                                onChange: handleChange,
                                                                name: "new_pass",
                                                                className: `form-control ${formError.new_pass !== undefined ? "is-invalid" : ""}`,
                                                                placeholder: "Enter Password",
                                                                onPaste: (e)=>{
                                                                    e.preventDefault();
                                                                    return false;
                                                                },
                                                                onCopy: (e)=>{
                                                                    e.preventDefault();
                                                                    return false;
                                                                }
                                                            }),
                                                            formError.new_pass !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control.Feedback), {
                                                                type: "invalid",
                                                                children: formError.new_pass
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group),
                                                        xs: 12,
                                                        controlId: "c-name",
                                                        className: "w-100",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                                                children: "Confirm Password"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control), {
                                                                size: "lg",
                                                                required: true,
                                                                value: formFields.confirm,
                                                                onChange: handleChange,
                                                                name: "confirm",
                                                                className: `form-control ${formError.confirm !== undefined ? "is-invalid" : ""}`,
                                                                placeholder: "Enter Password",
                                                                onPaste: (e)=>{
                                                                    e.preventDefault();
                                                                    return false;
                                                                },
                                                                onCopy: (e)=>{
                                                                    e.preventDefault();
                                                                    return false;
                                                                }
                                                            }),
                                                            formError.confirm !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control.Feedback), {
                                                                type: "invalid",
                                                                children: formError.confirm
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        xs: 12,
                                                        className: "w-100",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            onClick: handleSubmit,
                                                            size: "lg",
                                                            variant: "primary w-sm-auto w-100 mt-2",
                                                            children: "Submit"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_11___default()), {
                                md: 10,
                                xl: {
                                    span: 8,
                                    offset: 1
                                },
                                className: "fs-lg gy-4",
                                variant: `${successMsg.status == 200 ? "success" : "danger"}`,
                                children: [
                                    successMsg.msg,
                                    " Login Now !"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "d-flex order-md-2 order-1 ms-md-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                src: "/images/city-guide/illustrations/support.svg",
                                width: 432,
                                height: 320,
                                alt: "Illustration"
                            })
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                as: "section",
                className: "pb-5 mb-3 mb-lg-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rounded-3 bg-faded-accent py-5 px-sm-5 px-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto py-md-4 text-center",
                        style: {
                            maxWidth: "605px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Reset Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-4 pb-2 fs-lg",
                                children: "This link is invlid or expired."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    variant: "primary",
                                    className: "rounded-pill",
                                    children: "Go To Home"
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);
async function getServerSideProps(ct) {
    const { reset_code  } = ct.query;
    let srRes = await fetch(`${process.env.BASE_URL}/api/protect/verify-password`, {
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
            codeStatus: srJson.status != "undefined" && srJson.status == 200 ? true : false
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3182:
/***/ ((module) => {

module.exports = require("localforage");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 8797:
/***/ ((module) => {

module.exports = require("next-share");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2899:
/***/ ((module) => {

module.exports = require("react-bootstrap/Alert");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 9044:
/***/ ((module) => {

module.exports = require("react-bootstrap/CloseButton");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 2563:
/***/ ((module) => {

module.exports = require("react-bootstrap/InputGroup");

/***/ }),

/***/ 4692:
/***/ ((module) => {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 6865:
/***/ ((module) => {

module.exports = require("react-bootstrap/Offcanvas");

/***/ }),

/***/ 4165:
/***/ ((module) => {

module.exports = require("react-bootstrap/OverlayTrigger");

/***/ }),

/***/ 9736:
/***/ ((module) => {

module.exports = require("react-bootstrap/Popover");

/***/ }),

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 3742:
/***/ ((module) => {

module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 6804:
/***/ ((module) => {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ 5623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 9777:
/***/ ((module) => {

module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 3512:
/***/ ((module) => {

module.exports = import("firebase/messaging");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636], () => (__webpack_exec__(7999)));
module.exports = __webpack_exports__;

})();