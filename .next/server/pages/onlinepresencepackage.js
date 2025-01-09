"use strict";
(() => {
var exports = {};
exports.id = 2851;
exports.ids = [2851];
exports.modules = {

/***/ 3784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const PackagesListingCard = ({ BusinessPackageCount , title , price , offerPrice , period , description , noOfUsers , button , light , featured , className , ...props })=>{
    const extraClass = className ? ` ${className}` : "";
    // Main wrapper CSS class
    let containerClass;
    if (featured) {
        if (light) {
            containerClass = "card card-light border-light card-active" + extraClass;
        } else {
            containerClass = "card shadow" + extraClass;
        }
    } else {
        if (light) {
            containerClass = "card card-light border-light" + extraClass;
        } else {
            containerClass = "card" + extraClass;
        }
    }
    // Render markup
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: containerClass,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card-body",
                children: [
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: `h5 fw-normal text-center mb-1`,
                        children: title
                    }),
                    price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex align-items-end justify-content-center mb-4",
                        children: [
                            offerPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                children: price
                            }) : price,
                            " ",
                            offerPrice ? "\u20B9" + offerPrice : "",
                            " /-"
                        ]
                    }),
                    noOfUsers && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex align-items-end justify-content-center mb-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "No. of users ",
                                noOfUsers
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "list-unstyled d-block mb-0 mx-auto",
                        style: {
                            maxWidth: "16rem"
                        },
                        children: description
                    })
                ]
            }),
            button && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card-footer py-2 border-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `border-top text-center pt-4 pb-3`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        ...button.props,
                        type: "button",
                        className: button.variant ? `btn btn-${button.variant}` : "btn btn-outline-primary",
                        children: noOfUsers == BusinessPackageCount ? "Notify Me" : "Buy Now"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PackagesListingCard);


/***/ }),

/***/ 645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6427);
/* harmony import */ var react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7694);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2563);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(128);
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8743);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5641);
/* harmony import */ var _helper_validation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(261);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9270);
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3387);
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1553);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_15__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




















const ReviewAndPayDetail = ({ userSession , packagePlanDetail , hideShowBuyPlanSection  })=>{
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: formValues , 1: setFormValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: isLoading , 1: setIsloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false) //use loder
    ;
    const { register , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_15__.useForm)();
    console.log("packagePlanDetail", packagePlanDetail);
    function onSubmit(values) {
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_16__/* .ReviewAndPayValidation */ .AJ)(values, "1");
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
        } else {
            setFormValues({
                ...formValues,
                ...values
            });
            console.log(formValues, "==>>step 1 formValues ");
        }
    }
    const onChangeFormField = async (e)=>{
        setFormError({}) //vs first time define the error blank with onchange event
        ;
        e.preventDefault();
        var updateFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        };
        setFormValues(updateFormValues);
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_16__/* .ReviewAndPayValidation */ .AJ)(updateFormValues);
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
        }
    };
    //console.log(userSession,'userSession')
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue("name", userSession && userSession !== null && userSession !== "undefined" ? userSession.user.name : "");
        setValue("email", userSession && userSession !== null && userSession !== "undefined" ? userSession.user.email : "");
        setValue("phone", userSession && userSession !== null && userSession !== "undefined" ? userSession.user.phone : "");
        setValue("city", "Jaipur");
    }, [
        userSession
    ]);
    const previousCall = ()=>{
        //Hide the plan buy now component        
        hideShowBuyPlanSection(false);
    };
    const planGst = (amount)=>{
        let gstPrice = amount * 18 / 100;
        console.log(gstPrice, "gstPrice");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}) : "",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "h4 mb-4",
                children: "Review & Pay"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                        as: (react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()),
                        className: "s",
                        md: "8",
                        children: [
                            !userSession || userSession === null || userSession === "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                role: "alert",
                                className: "fade mb-5 alert alert-primary show",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-break",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "mb-1",
                                        children: [
                                            "Already have an account?",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "alert-link",
                                                href: "",
                                                children: " Login"
                                            })
                                        ]
                                    })
                                })
                            }) : "",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleSubmit(onSubmit),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        xs: 1,
                                        sm: 2,
                                        className: "gy-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group),
                                                controlId: "pr-name",
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
                                                        type: "text",
                                                        size: "lg",
                                                        ...register("name"),
                                                        placeholder: "Enter your name",
                                                        name: "name",
                                                        onChange: onChangeFormField,
                                                        className: `form-control ${formError.name !== undefined ? "is-invalid" : ""}`
                                                    }),
                                                    formError.name !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            formError.name
                                                        ]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group),
                                                controlId: "pr-phone",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                        children: [
                                                            "Mobile No.",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: "\xa0*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                        size: "lg",
                                                        ...register("phone"),
                                                        type: "tel",
                                                        placeholder: "Enter your phone number",
                                                        pattern: "[0-9]{10}",
                                                        format: "##########",
                                                        name: "phone",
                                                        onChange: onChangeFormField,
                                                        className: `form-control ${formError.phone !== undefined ? "is-invalid" : ""}`
                                                    }),
                                                    formError.phone !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            formError.phone
                                                        ]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group),
                                                controlId: "pr-email",
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
                                                        size: "lg",
                                                        ...register("email"),
                                                        type: "email",
                                                        placeholder: "Enter your email address",
                                                        name: "email",
                                                        onChange: onChangeFormField,
                                                        className: `form-control ${formError.email !== undefined ? "is-invalid" : ""}`
                                                    }),
                                                    formError.email !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            formError.email
                                                        ]
                                                    }) : ""
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex flex-column flex-sm-rw bg-light rounded-3 p-4 px-md-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                onClick: previousCall,
                                                children: "Back"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                type: "submit",
                                                size: "lg",
                                                variant: "primary rounded-pill ms-auto",
                                                className: "mt-sm-0 mt-3",
                                                children: "Make Payment"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                        as: (react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()),
                        md: "4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "h4 mb-4",
                                children: "Your Subscription"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                                xs: 1,
                                sm: 1,
                                className: "gy-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group),
                                        controlId: "pr-billing-cycle",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                children: "Billing Cycle "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Check), {
                                                inline: true,
                                                type: "radio",
                                                id: "radio-1",
                                                name: "planDuration",
                                                label: "Annual",
                                                defaultChecked: packagePlanDetail.plan_duration == "annually" ? true : false,
                                                value: "annually"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Check), {
                                                inline: true,
                                                type: "radio",
                                                id: "radio-2",
                                                name: "planDuration",
                                                label: "Monthly",
                                                defaultChecked: packagePlanDetail.plan_duration == "monthly" ? true : false,
                                                value: "monthly"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group),
                                        controlId: "pr-apply-coupon",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        md: "8",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                children: "Apply Coupon"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                type: "text",
                                                                size: "lg",
                                                                ...register("coupon_code"),
                                                                placeholder: "Enter your name",
                                                                name: "coupon_code",
                                                                // onChange={formFieldChange}
                                                                className: "form-control"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        md: "4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Label), {
                                                                children: "\xa0"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                                className: "mb-2 me-2",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                    variant: "success",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-check me-2"
                                                                        }),
                                                                        "Apply"
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                children: "Premium"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group),
                                                controlId: "pr-premium",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                    responsive: true,
                                                    borderless: true,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "Subtotal"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                                        children: [
                                                                            "\u20B9 ",
                                                                            packagePlanDetail.plan_price
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: "GST 18%"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                                            children: [
                                                                                "\u20B9 ",
                                                                                packagePlanDetail.gst
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                packagePlanDetail.discount > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: "Discount"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                                            children: [
                                                                                "-\u20B9 ",
                                                                                packagePlanDetail.discount
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
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group),
                                        controlId: "pr-name"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewAndPayDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8611:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6427);
/* harmony import */ var react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5698);
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6463);








const CityGuideAccountHeader = ({ breadcrumb  })=>/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs(Breadcrumb, {
                className: "mb-4 pt-2 pt-lg-3",
                children: [
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/city-guide",
                        passHref: true,
                        children: /*#__PURE__*/ _jsx(Breadcrumb.Item, {
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/city-guide/account-info",
                        passHref: true,
                        children: /*#__PURE__*/ _jsx(Breadcrumb.Item, {
                            children: "Account"
                        })
                    }),
                    /*#__PURE__*/ _jsx(Breadcrumb.Item, {
                        active: true,
                        children: breadcrumb
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "d-flex align-items-center justify-content-between pb-4 mb-2",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "position-relative flex-shrink-0",
                                style: {
                                    width: "100px"
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(ImageLoader, {
                                        src: "/images/avatars/29.png",
                                        width: 200,
                                        height: 200,
                                        alt: "Annette Black",
                                        className: "rounded-circle border border-white"
                                    }),
                                    /*#__PURE__*/ _jsx(OverlayTrigger, {
                                        placement: "top",
                                        overlay: /*#__PURE__*/ _jsx(Tooltip, {
                                            children: "Change image"
                                        }),
                                        children: /*#__PURE__*/ _jsx(Button, {
                                            size: "xs",
                                            variant: "icon btn-light rounded-circle shadow-sm position-absolute end-0 bottom-0",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "fi-pencil fs-xs"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "ps-3 ps-sm-4",
                                children: [
                                    /*#__PURE__*/ _jsx("h3", {
                                        className: "h4 mb-2",
                                        children: "Annette Black"
                                    }),
                                    /*#__PURE__*/ _jsx(StarRating, {
                                        rating: 4.8
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/signin-light",
                        children: /*#__PURE__*/ _jsxs("a", {
                            className: "nav-link p-0 d-none d-md-block",
                            children: [
                                /*#__PURE__*/ _jsx("i", {
                                    className: "fi-logout mt-n1 me-2"
                                }),
                                "Sign out"
                            ]
                        })
                    })
                ]
            })
        ]
    })
;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CityGuideAccountHeader)));


/***/ }),

/***/ 2829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1636);
/* harmony import */ var _components_partials_CityGuideAccountHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8611);
/* harmony import */ var _components_packages_ListingPackageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3784);
/* harmony import */ var _components_packages_ReviewAndPay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(645);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6427);
/* harmony import */ var react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7047);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9025);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(329);
/* harmony import */ var _components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8184);
/* harmony import */ var _components_AboutUsSection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4440);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_packages_ReviewAndPay__WEBPACK_IMPORTED_MODULE_6__, _components_Services__WEBPACK_IMPORTED_MODULE_17__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_packages_ReviewAndPay__WEBPACK_IMPORTED_MODULE_6__, _components_Services__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const PackagesListingPage = (props)=>{
    const { 0: packagesListing , 1: setPackagesListing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.masterPackages);
    const { 0: hideShowPlanBuyNowPage , 1: setHideShowPlanBuyNowPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: planDetail , 1: setPlanPackageDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_20__.useRouter)();
    const PageUrl = query.asPath;
    const packageBuyNow = (packageDetail, planDuration)=>{
        console.log(planDuration, "planDuration");
        packageDetail.plan_duration = planDuration;
        const planAmount = planDuration == "monthly" ? packageDetail.amount_monthly : packageDetail.amount_year;
        //set the plan amount        
        packageDetail.plan_price = planAmount;
        //calculate the gst
        let gstPrice = planAmount * 18 / 100;
        packageDetail.gst = gstPrice;
        //set discount object
        packageDetail.discount = 0;
        //Open the plan buy now component       
        setHideShowPlanBuyNowPage(true);
        //set the plan detail
        setPlanPackageDetails(packageDetail);
    };
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_16__.useSession)() //use login session  
    ;
    if (!hideShowPlanBuyNowPage) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    title: "Packages",
                    description: "Packages",
                    keyword: "Packages",
                    url: PageUrl,
                    city: "",
                    area: "",
                    companyName: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    pageTitle: "Packages",
                    activeNav: "Plan",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default()), {
                        className: "mt-5 mb-md-4 py-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_14___default().Container), {
                                id: "left-tabs-example",
                                defaultActiveKey: "first",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                sm: 6,
                                                md: 4,
                                                className: "mb-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "h3 pb-2 mb-4",
                                                    children: "Pick the perfect plan"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                sm: 6,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    variant: "pills",
                                                    className: "flex-column1222",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_15___default().Item), {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_15___default().Link), {
                                                                eventKey: "first",
                                                                children: "Monthly"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_15___default().Item), {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_15___default().Link), {
                                                                eventKey: "second",
                                                                children: "Annually"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            sm: 12,
                                            md: 12,
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_14___default().Content), {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_14___default().Pane), {
                                                        eventKey: "first",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5",
                                                            children: (packagesListing === null || packagesListing === void 0 ? void 0 : packagesListing.length) > 0 && packagesListing.map((monthlypackagelist, mKey)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_ListingPackageCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                        title: monthlypackagelist.name,
                                                                        price: `₹ ${monthlypackagelist.amount_monthly}`,
                                                                        offerPrice: monthlypackagelist.offer_amt_month,
                                                                        period: "month",
                                                                        description: monthlypackagelist.description,
                                                                        noOfUsers: monthlypackagelist.no_of_users,
                                                                        button: {
                                                                            href: "",
                                                                            title: "Buy Now",
                                                                            variant: "outline-primary rounded-pill",
                                                                            props: {
                                                                                onClick: ()=>packageBuyNow(monthlypackagelist, "monthly")
                                                                            }
                                                                        },
                                                                        className: "shadow-sm"
                                                                    }, mKey)
                                                                }, mKey)
                                                            )
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_14___default().Pane), {
                                                        eventKey: "second",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5",
                                                            children: (packagesListing === null || packagesListing === void 0 ? void 0 : packagesListing.length) > 0 && packagesListing.map((annuallyPackagelist, yKey)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_ListingPackageCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                        title: annuallyPackagelist.name,
                                                                        price: `₹ ${annuallyPackagelist.amount_year}`,
                                                                        period: "year",
                                                                        description: annuallyPackagelist.description,
                                                                        noOfUsers: annuallyPackagelist.no_of_users,
                                                                        button: {
                                                                            href: "",
                                                                            title: "Buy Now",
                                                                            variant: "outline-primary rounded-pill",
                                                                            props: {
                                                                                onClick: ()=>packageBuyNow(annuallyPackagelist, "annually")
                                                                            }
                                                                        },
                                                                        className: "shadow-sm"
                                                                    }, yKey)
                                                                }, yKey)
                                                            )
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "full popular-services ptb-50",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "text-start",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Our"
                                                }),
                                                " Services"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "popular-services-main mt-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "row",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services__WEBPACK_IMPORTED_MODULE_17__["default"], {})
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AboutUsSection__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
                        ]
                    })
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    title: "Packages",
                    description: "Packages",
                    tags: "",
                    url: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    pageTitle: "Review&Pay",
                    activeNav: "Plan",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default()), {
                        className: "mt-5 mb-md-4 py-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_packages_ReviewAndPay__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            userSession: session,
                            packagePlanDetail: planDetail,
                            hideShowBuyPlanSection: setHideShowPlanBuyNowPage
                        })
                    })
                })
            ]
        });
    }
};
async function getServerSideProps() {
    var ref;
    // Fetch data from external API
    const data = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    const res = await fetch(`${process.env.BASE_URL}/api/protect/master-package-listing`, data);
    let PackageRecords = await res.json();
    PackageRecords = (PackageRecords === null || PackageRecords === void 0 ? void 0 : (ref = PackageRecords.data) === null || ref === void 0 ? void 0 : ref.packageslisting) || [];
    //get the company settings
    const companyData = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    let getCompanySettings = await fetch(`${process.env.BASE_URL}/api/protect/company-settings`, companyData);
    getCompanySettings = await getCompanySettings.json();
    // Pass data to the page via props
    return {
        props: {
            masterPackages: PackageRecords,
            companySettings: (getCompanySettings === null || getCompanySettings === void 0 ? void 0 : getCompanySettings.status) == 200 ? getCompanySettings.data : []
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PackagesListingPage);

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

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ 6427:
/***/ ((module) => {

module.exports = require("react-bootstrap/Breadcrumb");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 3387:
/***/ ((module) => {

module.exports = require("react-bootstrap/ButtonGroup");

/***/ }),

/***/ 6810:
/***/ ((module) => {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ 9044:
/***/ ((module) => {

module.exports = require("react-bootstrap/CloseButton");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 128:
/***/ ((module) => {

module.exports = require("react-bootstrap/Collapse");

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

/***/ 7047:
/***/ ((module) => {

module.exports = require("react-bootstrap/FormControl");

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

/***/ 9025:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tab");

/***/ }),

/***/ 1553:
/***/ ((module) => {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ 4013:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tooltip");

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

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,9340,8184,329,4440,6463,7694], () => (__webpack_exec__(2829)));
module.exports = __webpack_exports__;

})();