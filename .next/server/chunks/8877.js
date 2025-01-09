"use strict";
exports.id = 8877;
exports.ids = [8877];
exports.modules = {

/***/ 8877:
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
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_8__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const BusinessListingModal = ({ csrfToken , onSwap , pillButtons , setPackageBusinessID , packageBusinessDetail , packageBuyNow , ...props })=>{
    const { register , handleSubmit , control , setValue , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)() //use login session   
    ;
    const { 0: userBusinessList , 1: setUserBusinessList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: formValues , 1: setFormValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        let userBusinesses = await userBusinessListing();
        await setUserBusinessList(userBusinesses);
    }, []);
    const formFieldChange = async (e)=>{
        setFormError({});
        var index = e.target.selectedIndex;
        var optionElement = e.target.childNodes[index];
        var city_id = optionElement.getAttribute("city_id");
        var updateFormValues = {
            ...formValues,
            [e.target.name]: e.target.value,
            ["city_id"]: city_id
        };
        setFormValues(updateFormValues);
        const formResponse = checkValidation(updateFormValues);
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
        }
    // else {
    //     setPackageBusinessID(e.target.value)
    // }
    };
    const checkValidation = (frm)=>{
        let errors = {};
        if (!frm.business_id || frm.business_id == "" || frm.business_id == null) {
            errors = {
                ...errors,
                ["business_id"]: "Please select the business."
            };
        }
        return errors;
    };
    // user business listing
    const userBusinessListing = async ()=>{
        try {
            const data = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            };
            const res = await fetch(`${process.env.BASE_URL}/api/protect/user-business-listing`, data);
            let PackageRecords = await res.json();
            return (PackageRecords === null || PackageRecords === void 0 ? void 0 : PackageRecords.data) || [];
        } catch (err) {
            return [];
        }
    };
    //form submit
    function onSubmit(values, e) {
        const formResponse = checkValidation(values);
        console.log("formResponse---", Object.entries(formResponse));
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
        } else {
            e.target.reset();
            // saveJobsForm(formValues);
            setPackageBusinessID(formValues.business_id);
            //set business id in object
            packageBusinessDetail.business_id = formValues.business_id;
            //packageBusinessDetail.city_id = formValues.city_id
            packageBusinessDetail.listing_city_id = formValues.city_id;
            packageBuyNow(packageBusinessDetail);
            props.onHide();
        }
    }
    return(// <Modal centered show={showConfirmPopup} onHide={handleLogoutPopupClose} className='confirmation-modal'>
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default()), {
        ...props,
        className: "signin-modal dialmenowModal ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: handleSubmit(onSubmit),
            id: "apply-jobsFrm",
            autoComplete: "off",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Body), {
                className: "px-0 py-2 py-sm-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                        onClick: props.onHide,
                        "aria-label": "Close modal",
                        className: "position-absolute top-0 end-0 mt-3 me-3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row mx-0 align-items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-12 px-4 pt-2 pb-4 px-sm-5 pt-md-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "blog-title text-center pb-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "mb-4 mt-3 mt-sm-0",
                                        children: "Select Business"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Select), {
                                    ...register("business_id"),
                                    name: "business_id",
                                    value: formValues.business_id || "",
                                    onChange: formFieldChange,
                                    className: `form-control ${formError.business_id !== undefined ? "is-invalid" : ""}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "",
                                            children: "Choose Business"
                                        }),
                                        (userBusinessList === null || userBusinessList === void 0 ? void 0 : userBusinessList.length) > 0 && userBusinessList.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: val.id,
                                                city_id: val.city_id,
                                                children: val.name
                                            }, val.id)
                                        )
                                    ]
                                }),
                                formError.business_id !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control.Feedback), {
                                    type: "invalid",
                                    tooltip: true,
                                    children: [
                                        " ",
                                        formError.business_id
                                    ]
                                }) : "",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    type: "submit",
                                    variant: "primary",
                                    className: "btn-sm w-100 mt-4 mb-2",
                                    children: "Submit"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessListingModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;