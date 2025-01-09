"use strict";
(() => {
var exports = {};
exports.id = 4318;
exports.ids = [4318];
exports.modules = {

/***/ 6464:
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
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1636);
/* harmony import */ var _components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6439);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_StarRating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6463);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_PropertyCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6492);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(348);
/* harmony import */ var _front_methods_UserDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1795);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9270);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7047);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4937);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8743);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8176);
/* harmony import */ var _components_MySelect_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6256);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6865);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_26__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_14__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





























const AccountEnquiryPage = ({ enquiresBusinessListing , ...props })=>{
    // Add class to body to enable gray background
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const body = document.querySelector("body");
        document.body.classList.add("bg-secondary");
        return ()=>body.classList.remove("bg-secondary")
        ;
    });
    const { 0: businessID , 1: setBusinessID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: businessEnquiryDate , 1: setBusinessEnquiryDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: businessEnquiryEmail , 1: setBusinessEnquiryEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: businessEnquiryCityId , 1: setBusinessEnquiryCityId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    //defined the cities lisiting variable
    const { 0: citiesListings , 1: setCitiesListings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { businessRecords , isLoadingMore , isReachingEnd , isRefreshing , size , setSize , mutate  } = (0,_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_14__/* .usePagination */ .h)("/api/protect/my-enquiries", "", {
        "business_id": businessID,
        "enquiryDate": businessEnquiryDate,
        "businessEnquiryEmail": businessEnquiryEmail,
        "businessEnquiryCityId": businessEnquiryCityId
    });
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: businessList , 1: setBusinessList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    const onChangeEnquiryByBusinessId = async (selected)=>{
        if ((selected === null || selected === void 0 ? void 0 : selected.id) && (selected === null || selected === void 0 ? void 0 : selected.id) != "") {
            setBusinessID(selected === null || selected === void 0 ? void 0 : selected.id);
        } else {
            setBusinessID("");
        }
        //refresh the listing
        await mutate();
    };
    const dateFieldChange = async (e)=>{
        const enquiry_date = e.value;
        if (enquiry_date != "") {
            setBusinessEnquiryDate(enquiry_date);
        } else {
        //setBusinessEnquiryDate('')
        }
        //refresh the listing 
        await mutate();
    };
    //on change handle the email
    const handleEmailChange = async (e)=>{
        const emailAddress = e.target.value;
        if (emailAddress && emailAddress != "") {
            if (!new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(emailAddress)) {
                let errors = {
                    ["business_enquiry_email"]: "Invalid email format."
                };
                setFormError(errors);
            } else {
                setFormError({});
                setBusinessEnquiryEmail(emailAddress);
                //refresh the listing
                await mutate();
            }
        } else {
            setFormError({});
            setBusinessEnquiryEmail("");
            //refresh the listing
            await mutate();
        }
    };
    //on change handle the email
    const citiesListHandleChange = async (selected)=>{
        //console.log('business_id==>>',business_id)
        if ((selected === null || selected === void 0 ? void 0 : selected.id) && (selected === null || selected === void 0 ? void 0 : selected.id) != "") {
            setBusinessEnquiryCityId(selected === null || selected === void 0 ? void 0 : selected.id);
        } else {
            setBusinessEnquiryCityId("");
        }
        //refresh the listing
        await mutate();
    };
    //cities listing
    const citiesRecordListings = async ()=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    "token": ""
                })
            };
            var APIpath = `${process.env.BASE_URL}/api/protect/all-cities-list`;
            const res = await fetch(APIpath, requestOptions);
            const resJson = await res.json();
            //console.log("DAYAYDAYAD---------------------------------------------", resJson)
            if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
                return resJson === null || resJson === void 0 ? void 0 : resJson.data;
            } else {
                return [];
            }
        } catch (err) {
            return [];
        }
    };
    //use effect
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        //get all cities
        let clitiesListings = await citiesRecordListings();
        //set packages list in variable
        setCitiesListings(clitiesListings);
    }, []);
    const resetFilters = async ()=>{
        setBusinessID("");
        setBusinessEnquiryDate("");
        setBusinessEnquiryEmail("");
        setBusinessEnquiryCityId("");
        //refresh the listing
        await mutate();
    };
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClose = ()=>setShow(false)
    ;
    const handleShow = ()=>setShow(true)
    ;
    // Media query for displaying Offcanvas on screens larger than 991px
    const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_26__.useMediaQuery)({
        query: "(max-width:  991.98px)"
    });
    var ref;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            pageTitle: "Enquiries",
            activeNav: "Account",
            updateUser: updateUserDetails,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                userData: empDetails,
                accountPageTitle: "Enquiries",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "shadow-none border-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default().Body), {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().ProfileHeading)}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            className: "justify-content-between ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    lg: 2,
                                                    md: 7,
                                                    sm: 5,
                                                    xs: 5,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "h3 mb-0 ",
                                                        children: "Enquiries"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    lg: 2,
                                                    md: 4,
                                                    sm: 3,
                                                    xs: 3,
                                                    className: "d-lg-block d-md-none d-sm-none d-none",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiriesFilter)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                                type: "text",
                                                                placeholder: "Email",
                                                                name: "business_enquiry_email",
                                                                className: ` ${formError.business_enquiry_email !== undefined ? "is-invalid" : ""}`,
                                                                //  value={''}
                                                                onChange: handleEmailChange
                                                            }),
                                                            formError.business_enquiry_email !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_20___default().Control.Feedback), {
                                                                type: "invalid",
                                                                tooltip: true,
                                                                children: [
                                                                    " ",
                                                                    formError.business_enquiry_email
                                                                ]
                                                            }) : ""
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    lg: 2,
                                                    xs: 4,
                                                    sm: 3,
                                                    as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_20___default().Group),
                                                    className: "d-lg-block d-md-none d-sm-none d-none",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "position-relative ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                                as: (react_datepicker__WEBPACK_IMPORTED_MODULE_23___default()),
                                                                selected: businessEnquiryDate ? new Date(Date.parse(businessEnquiryDate)) : "",
                                                                onChange: (date)=>dateFieldChange({
                                                                        name: "enquiryDate",
                                                                        value: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_28__/* .getDateTime */ .Fc)("1", date)
                                                                    })
                                                                ,
                                                                dateFormat: "dd-MM-yyyy",
                                                                name: "birthdate",
                                                                placeholderText: "Choose date",
                                                                className: `rounded pe-5`,
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
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    lg: 2,
                                                    md: 5,
                                                    sm: 7,
                                                    xs: 7,
                                                    className: "d-lg-block d-md-none d-sm-none d-none",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiriesFilter)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                            placeholder: "Search cities",
                                                            options: citiesListings,
                                                            closeMenuOnSelect: true,
                                                            hideSelectedOptions: false,
                                                            onChange: citiesListHandleChange,
                                                            allowSelectAll: false,
                                                            //   value={selectedCity}
                                                            ShowSelectAll: false,
                                                            //  volume={selectedCity}
                                                            className: `form-control p-0 ps-0 `,
                                                            isSearchable: true,
                                                            //styles={customStyles}
                                                            isBorder: true
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    lg: 3,
                                                    md: 5,
                                                    sm: 7,
                                                    xs: 7,
                                                    className: "d-lg-block d-md-none d-sm-none d-none",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiriesFilter)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                            options: enquiresBusinessListing,
                                                            closeMenuOnSelect: true,
                                                            hideSelectedOptions: false,
                                                            onChange: onChangeEnquiryByBusinessId,
                                                            allowSelectAll: false,
                                                            ShowSelectAll: false,
                                                            className: `form-control p-0 ps-0 `,
                                                            isSearchable: true,
                                                            isBorder: true,
                                                            placeholder: "Search businesses"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    lg: 1,
                                                    md: 5,
                                                    sm: 7,
                                                    xs: 7,
                                                    className: `d-flex align-items-center justify-content-end justify-content-lg-start justify-content-md-end justify-content-sm-end justify-content-end ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().ResetIcon)}`,
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    title: isDesktop ? "Filter" : "Reset",
                                                    children: isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-filter",
                                                        onClick: ()=>handleShow()
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-filter-off",
                                                        onClick: ()=>resetFilters()
                                                    })
                                                })
                                            ]
                                        }),
                                        isDesktop && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_25___default()), {
                                            show: show,
                                            onHide: handleClose,
                                            ...props,
                                            placement: "bottom",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_25___default().Header), {
                                                    closeButton: true,
                                                    className: "border-bottom",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_25___default().Title), {
                                                        className: "position-relative w-100",
                                                        children: [
                                                            "Filter ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().resetFilter)}`,
                                                                onClick: ()=>resetFilters()
                                                                ,
                                                                children: "Reset Filter"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_25___default().Body), {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-md-6",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `mb-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiriesFilter)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                                            type: "text",
                                                                            placeholder: "Email",
                                                                            name: "business_enquiry_email",
                                                                            className: ` ${formError.business_enquiry_email !== undefined ? "is-invalid" : ""}`,
                                                                            //  value={''}
                                                                            onChange: handleEmailChange
                                                                        }),
                                                                        formError.business_enquiry_email !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_20___default().Control.Feedback), {
                                                                            type: "invalid",
                                                                            tooltip: true,
                                                                            children: [
                                                                                " ",
                                                                                formError.business_enquiry_email
                                                                            ]
                                                                        }) : ""
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-md-6",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "position-relative mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                                            as: (react_datepicker__WEBPACK_IMPORTED_MODULE_23___default()),
                                                                            selected: businessEnquiryDate ? new Date(Date.parse(businessEnquiryDate)) : "",
                                                                            onChange: (date)=>dateFieldChange({
                                                                                    name: "enquiryDate",
                                                                                    value: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_28__/* .getDateTime */ .Fc)("1", date)
                                                                                })
                                                                            ,
                                                                            dateFormat: "dd-MM-yyyy",
                                                                            name: "birthdate",
                                                                            placeholderText: "Choose date",
                                                                            className: `rounded pe-5`,
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
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-md-6",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `mb-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiriesFilter)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                                        placeholder: "Search cities",
                                                                        options: citiesListings,
                                                                        closeMenuOnSelect: true,
                                                                        hideSelectedOptions: false,
                                                                        onChange: citiesListHandleChange,
                                                                        allowSelectAll: false,
                                                                        //   value={selectedCity}
                                                                        ShowSelectAll: false,
                                                                        //  volume={selectedCity}
                                                                        className: `form-control p-0 ps-0 `,
                                                                        isSearchable: true,
                                                                        //styles={customStyles}
                                                                        isBorder: true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-md-6",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `mb-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiriesFilter)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                                        options: enquiresBusinessListing,
                                                                        closeMenuOnSelect: true,
                                                                        hideSelectedOptions: false,
                                                                        onChange: onChangeEnquiryByBusinessId,
                                                                        allowSelectAll: false,
                                                                        ShowSelectAll: false,
                                                                        className: `form-control p-0 ps-0 `,
                                                                        isSearchable: true,
                                                                        isBorder: true,
                                                                        placeholder: "Search businesses"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_16___default()), {
                                    next: ()=>setSize(size + 1)
                                    ,
                                    hasMore: !isReachingEnd,
                                    loader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center my-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                animation: "grow",
                                                size: "sm",
                                                role: "status",
                                                className: "me-2"
                                            }),
                                            "Loading..."
                                        ]
                                    }),
                                    endMessage: "",
                                    dataLength: (ref = businessRecords === null || businessRecords === void 0 ? void 0 : businessRecords.length) !== null && ref !== void 0 ? ref : 0,
                                    children: businessRecords.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: businessRecords.map((enquiries, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                text: "black",
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiryMainBox)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "mb-0",
                                                        children: enquiries.Uname
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "mb-1",
                                                        children: enquiries.url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: enquiries.url,
                                                            children: enquiries.business_name
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: enquiries.business_name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiryInfo)}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "list-inline mb-0 fs-xs",
                                                            style: {
                                                                paddingTop: "2px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "list-inline-item me-4",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-mail"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: enquiries.Uemail
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "list-inline-item me-4",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-phone"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: enquiries.Uphone
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "list-inline-item me-4",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-date-icon"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: enquiries.lead_date
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "list-inline-item me-4",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-map-pin"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: enquiries.city_name
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `mb-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiriesAbout)}`,
                                                        children: enquiries.product
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().EnquiriesAbout)}`,
                                                        children: enquiries.product_specification
                                                    })
                                                ]
                                            }, index)
                                        )
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center pt-md-4 pb-2 pb-md-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-star display-6 text-muted mb-3"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: `h5 mb-1 mb-md-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_27___default().Enquiriesmsg)}`,
                                                children: "There are no enquiries yet!"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-muted pb-0 mb-0",
                                                children: "All your enquiries will be displayed here."
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountEnquiryPage);
async function getServerSideProps(ctx) {
    const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)();
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_18__.getSession)(ctx);
    if (session) {
        //fetch the enquireies bussiness listing
        const { user  } = session;
        const user_id = user ? user === null || user === void 0 ? void 0 : user.id : 0;
        const enquiresBusiness = await (0,_front_methods_UserDetails__WEBPACK_IMPORTED_MODULE_15__/* .UserEnquiriesBusinessListing */ .UH)(db, user_id);
        const data = JSON.parse(enquiresBusiness);
        let enquiresBusinessListing = (data === null || data === void 0 ? void 0 : data.status) == "200" ? data === null || data === void 0 ? void 0 : data.data : [];
        //End 
        return {
            props: {
                userSessionData: "",
                enquiresBusinessListing: enquiresBusinessListing
            }
        };
    } else {
        return {
            redirect: {
                permanent: false,
                destination: `/`
            }
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 6936:
/***/ ((module) => {

module.exports = require("@aws-sdk/s3-request-presigner");

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

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

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

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 9777:
/***/ ((module) => {

module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2261:
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ 7441:
/***/ ((module) => {

module.exports = require("sharp");

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

/***/ 1448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,8176,7559,6256,467,6439,6492,9749,4823,6463], () => (__webpack_exec__(6464)));
module.exports = __webpack_exports__;

})();