"use strict";
exports.id = 9488;
exports.ids = [9488];
exports.modules = {

/***/ 7871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FormGroup = ({ children , light , className , ...props })=>{
    const isLight = light ? " form-group-light" : "", extraClass = className ? ` ${className}` : "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        ...props,
        className: `form-group${isLight}${extraClass}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormGroup);


/***/ }),

/***/ 9488:
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
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2563);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7871);
/* harmony import */ var _SocialButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6396);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helper_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(261);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8176);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5698);
/* harmony import */ var _components_Adsense__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9500);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6555);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Adsense__WEBPACK_IMPORTED_MODULE_16__, uuid__WEBPACK_IMPORTED_MODULE_17__]);
([_components_Adsense__WEBPACK_IMPORTED_MODULE_16__, uuid__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const ShareOptionModal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 4074).then(__webpack_require__.bind(__webpack_require__, 4074))
, {
    loadableGenerated: {
        modules: [
            "../components/partials/Footer.js -> " + "../listings/modals/ShareOptionModal"
        ]
    }
});
const Footer = ({ csrfToken  })=>{
    const { 0: subscriberEmail , 1: setSubscriberEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: messageType , 1: setMessageType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: showToast , 1: setShowToast  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: shareOptionShow , 1: setShareOptionShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: services , 1: setServices  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const shareOptionShowHide = ()=>{
        // ShareOption popup hide
        // console.log("Caaling")
        setShareOptionShow(false);
    };
    const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_18__.useMediaQuery)({
        query: "(max-width:  767.98px)"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        serviceData();
    }, []);
    const serviceData = async ()=>{
        const data = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                serviceID: ""
            })
        };
        const resService = await fetch("/api/protect/refer-earn-sevices", data);
        const response = await resService.json();
        if ((response === null || response === void 0 ? void 0 : response.status) == 200) {
            setServices(response.data);
        }
    };
    const handleSubmit = async (event)=>{
        const form = event.currentTarget;
        setShowToast(false);
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_13__/* .emailValidator */ .Le)(subscriberEmail);
        if (Object.entries(formResponse).length !== 0) {
            event.preventDefault();
            event.stopPropagation();
            setFormError(formResponse);
        } else {
            const data = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: subscriberEmail
                })
            };
            const resSubscriber = await fetch("/api/protect/newsletter-subscriber", data);
            const response = await resSubscriber.json();
            setFormError("");
            if (response.status == 201) {
                setError(response.msg);
                setMessageType("danger");
                setShowToast(true);
            } else {
                setError(response.msg);
                setMessageType("success");
                setShowToast(true);
                setSubscriberEmail("");
            }
            setTimeout(function() {
                setShowToast(false);
            }, 2000);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: "footer pt-lg-0 pt-1 bg-dark text-light",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "mb-0 py-4 pb-lg-3 mb-lg-0 mb-md-0 mb-sm-0 border-bottom border-light",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "footer-top",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    className: "gy-12",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            lg: {
                                                span: 9
                                            },
                                            md: {
                                                span: 8
                                            },
                                            sm: {
                                                span: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "h4 text-light",
                                                    children: "Subscribe to our Newsletter"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FormGroup__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    light: true,
                                                    className: "",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "hidden",
                                                            name: "csrfToken",
                                                            defaultValue: csrfToken
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            size: "sm",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_6___default().Text), {
                                                                    className: "text-muted",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-mail"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default().Control), {
                                                                    type: "email",
                                                                    name: "subscriberEmail",
                                                                    placeholder: "Enter your email",
                                                                    value: subscriberEmail,
                                                                    onChange: (val)=>{
                                                                        setFormError(""); //remove error
                                                                        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_13__/* .emailValidator */ .Le)(val.target.value);
                                                                        if (Object.entries(formResponse).length !== 0) {
                                                                            setFormError(formResponse);
                                                                        }
                                                                        setSubscriberEmail(val.target.value);
                                                                    },
                                                                    className: `form-control ${formError != "" ? "is-invalid" : ""}`,
                                                                    required: true
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                            type: "button",
                                                            variant: "primary",
                                                            size: "sm",
                                                            onClick: handleSubmit,
                                                            children: "Subscribe"
                                                        })
                                                    ]
                                                }),
                                                showToast && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                        variant: messageType,
                                                        children: error
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            lg: {
                                                span: 3
                                            },
                                            md: {
                                                span: 4
                                            },
                                            sm: {
                                                span: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "h4 text-light ms-lg-5 ms-md-5 ms-sm-0 mt-lg-0 mt-lg-0 mt-md-0 mt-sm-3 mt-3",
                                                    children: "Follow Us:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "d-flex align-items-end justify-content-start justify-content-xl-center justify-content-md-end justify-content-sm-start",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "ms-0 ps-lg-2 text-nowrap ms-lg-4 ms-md-4 ms-sm-0 mt-lg-0 mt-md-0 mt-sm-0 mt-0",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                href: "https://www.facebook.com/dialmenow",
                                                                target: "_blank",
                                                                brand: "facebook-li",
                                                                variant: "translucent",
                                                                light: true,
                                                                className: "ms-2",
                                                                "aria-label": "Facebook"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                href: "https://twitter.com/Dialmenow",
                                                                target: "_blank",
                                                                brand: "twitter-li",
                                                                variant: "translucent",
                                                                light: true,
                                                                className: "ms-2",
                                                                "aria-label": "Twitter"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                href: "https://www.linkedin.com/company/dialmenowonline/",
                                                                target: "_blank",
                                                                brand: "linkdin-li",
                                                                variant: "translucent",
                                                                light: true,
                                                                className: "ms-2",
                                                                "aria-label": "Linkdin"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                href: "https://www.youtube.com/user/Dialmenow",
                                                                target: "_blank",
                                                                brand: "yt-li",
                                                                variant: "translucent",
                                                                light: true,
                                                                className: "ms-2",
                                                                "aria-label": "Youtube"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                href: "https://www.instagram.com/dialmenow/",
                                                                target: "_blank",
                                                                brand: "insta-li",
                                                                variant: "translucent",
                                                                light: true,
                                                                className: "ms-2",
                                                                "aria-label": "Instagram"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "footer-bottom",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    className: "gy-2 gy-sm-2 gy-md-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            lg: 3,
                                            md: 6,
                                            sm: 6,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: " text-light mb-2 mb-md-2 mb-sm-2",
                                                    children: "Contact Info"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `position-relative overflow-hidden footerlogo`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                            src: "/images/logo/logo.svg",
                                                            alt: "",
                                                            quality: 100,
                                                            layout: "fill",
                                                            objectFit: "contain",
                                                            className: "position-relative p-2"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "pb-2 mb-0 delay-3 from-end office-address",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-map-pin me-3"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                " ",
                                                                "G-21, Laxman Path, Shyam Nagar Extension, Jaipur - 302019"
                                                            ]
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    as: "ul",
                                                    className: "nav-light flex-column",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: "mb-2",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default().Link), {
                                                            href: "tel:92523-92523",
                                                            className: "fw-normal text-light text-nowrap p-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-phone mt-n1 me-3 align-middle"
                                                                }),
                                                                `+91 92523-92523`
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            lg: 3,
                                            md: 6,
                                            sm: 6,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-light mb-2 mb-md-2 mb-sm-2",
                                                        children: "SMS Me Now"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `position-relative overflow-hidden footerlogo`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: "https://smsmenow.in/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                            src: "/images/smsmenow.png",
                                                            alt: "",
                                                            quality: 100,
                                                            layout: "fill",
                                                            objectFit: "contain",
                                                            className: "position-relative "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "pb-3 delay-3 from-end mb-0",
                                                    children: [
                                                        " ",
                                                        "Sms Me Now, helps Business Owners to take their Online Presence to the next level. We are in the business of Bulk SMS, Digital Marketing & Web Development.",
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    as: "ul",
                                                    className: "nav-light flex-column",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                            as: "li",
                                                            className: "mb-2",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default().Link), {
                                                                href: "https://www.smsmenow.in",
                                                                target: "_blank",
                                                                className: "fw-normal text-light text-nowrap p-0 webLink",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-globe mt-n1 me-3 align-middle"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: `www.smsmenow.in`
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                            as: "li",
                                                            className: "mb-2",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default().Link), {
                                                                href: "tel:92523-92523",
                                                                className: "fw-normal text-light text-nowrap p-0 webLink",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-phone mt-n1 me-3 align-middle"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: `+91 92523-92523`
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            lg: 3,
                                            md: 6,
                                            sm: 6,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-light mb-2 mb-md-3 mb-sm-2",
                                                    children: "Quick Links"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "list-unstyled fs-sm",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: `${process.env.BASE_URL}/pages/aboutus`,
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-light",
                                                                    children: "About Us"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: "/contact-us",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-light",
                                                                    children: "Contact Us"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: "/faq",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-light",
                                                                    children: "FAQ's"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: "/careers",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-light",
                                                                    children: "Career"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: "/guest-blog",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-light",
                                                                    children: "Guest Blog"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: `${process.env.BASE_URL}/pages/return-refund-policy`,
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-light",
                                                                    children: "Return & Refund Policy"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: `${process.env.BASE_URL}/pages/infringement-policy`,
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-light",
                                                                    children: "Infringement Policy"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            lg: 3,
                                            md: 6,
                                            sm: 6,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: " text-light mb-2 mb-md-3 mb-sm-2",
                                                    children: "Our Services"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "list-unstyled fs-sm",
                                                    children: (services === null || services === void 0 ? void 0 : services.length) > 0 ? services.map((val)=>{
                                                        /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: (val === null || val === void 0 ? void 0 : val.redirect_link) || "#",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-light",
                                                                    children: val.name
                                                                })
                                                            })
                                                        }, val.id);
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "text-light",
                                                                        children: "Online Paid Listings"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "text-light",
                                                                        children: "Digital Marketing"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "text-light",
                                                                        children: "Online Presence Packages"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "text-light",
                                                                        children: "Bulk SMS"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "text-light",
                                                                        children: "IVR / Miss Call Service"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "text-light",
                                                                        children: "City Maps"
                                                                    })
                                                                })
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "py-3 text-center copyright",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "order-lg-1 order-2 footer-disclaimer",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: "Disclaimer : "
                                        }),
                                        "Dial Me Now Online Pvt Ltd is not responsible for content submitted by users on our website. We make every effort to ensure that the content on our website does not infringe the intellectual property rights of others. However, we cannot guarantee that every submission on our website is original or does not infringe the intellectual property rights of others. If you believe that any content on our website infringes your intellectual property rights, please contact us at",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "mailto:info@dialmenow.in",
                                            children: "info@dialmenow.in"
                                        }),
                                        "."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "order-lg-1 order-2 mb-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-light",
                                        children: [
                                            "\xa9",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "/",
                                                className: "text-light",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: [
                                                    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_19__/* .getDateTime */ .Fc)(3),
                                                    " Copyright",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            color: "#FEC32B"
                                                        },
                                                        children: "Dial Me Now"
                                                    }),
                                                    "."
                                                ]
                                            }),
                                            ` All Rights Reserved.`,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: `${process.env.BASE_URL}/pages/privacypolicy`,
                                                className: "nav-link-light fw-bold",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "Privacy Policy"
                                            }),
                                            " ",
                                            "and",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: `${process.env.BASE_URL}/pages/termsofuse`,
                                                className: "nav-link-light fw-bold",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "Terms of Use"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "fixHeightAfterFooter d-lg-none d-md-none d-sm-block d-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Adsense__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: "adsbygoogle adsbygooglefooter d-lg-none d-md-none d-sm-block d-block",
                    client: "ca-pub-5221768281365771",
                    slot: "6579382740",
                    style: {
                        display: "inline-block",
                        width: "100%",
                        position: "absolute",
                        bottom: "-6px",
                        maxHeight: "90px !important",
                        height: "150px !important",
                        zIndex: "1050"
                    },
                    layoutKey: (0,uuid__WEBPACK_IMPORTED_MODULE_17__.v4)()
                }, "ads-top-1")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setShareOptionShow(true)
                ,
                style: {},
                className: `d-md-none d-sm-none d-none d-lg-flex align-items-center justify-content-center LinkShareOption`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
                    variant: "primary",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi fi-link"
                        }),
                        "Refer A Friend"
                    ]
                })
            }),
            shareOptionShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareOptionModal, {
                show: shareOptionShow,
                onHide: shareOptionShowHide,
                SocialButtonCls: "" //{styles.SocialButtonCSS}
                ,
                SocialButtonLineCls: "" //{styles.SocialButtonLine}
                ,
                shareUrl: process.env.BASE_URL,
                shareTags: "#dialmenow,#localbusiness,#businessdirectory,#businesslisting, #localsearch,#phonenumber, #reviews,#yellowpagesJaipur, #yellowpages, #businessDirectoryJaipur, #LocalBusinessDirectory, #DialmenowYellowPages",
                shareTitle: "Need to find a local business? Check out our website for all the information you need! Dialmenow.in | Jaipur Yellow Pages | Rajasthan Business Directory Online | DialMeNow"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;