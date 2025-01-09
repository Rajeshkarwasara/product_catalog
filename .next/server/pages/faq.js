(() => {
var exports = {};
exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 7609:
/***/ ((module) => {

// Exports
module.exports = {
	"FaqMain": "FAQ_FaqMain__TPKOu",
	"HelpSearch": "FAQ_HelpSearch__AY21Z",
	"FormControl": "FAQ_FormControl__Mlgt2",
	"searchIcon": "FAQ_searchIcon__lt5Yj",
	"FAQtextHeading": "FAQ_FAQtextHeading__rsNzw",
	"FAQtextHeadingLi": "FAQ_FAQtextHeadingLi__hnR_o",
	"FAQtextHeadingUl": "FAQ_FAQtextHeadingUl__BQDUg",
	"FaqMainDetailsinner": "FAQ_FaqMainDetailsinner__i16gB",
	"FaqMainMian": "FAQ_FaqMainMian__zoATy",
	"FaqMainDetails": "FAQ_FaqMainDetails__bCNOx",
	"BackFaq": "FAQ_BackFaq__S3_UC",
	"LeftFaq": "FAQ_LeftFaq__dcSJI",
	"FaqHeader": "FAQ_FaqHeader__RNxrb",
	"collapsed": "FAQ_collapsed__SmfGa",
	"FaqBody": "FAQ_FaqBody__JmgKu",
	"accordion-button": "FAQ_accordion-button___OxN3",
	"FAQImgCls": "FAQ_FAQImgCls__n_xKt",
	"FAQHeading": "FAQ_FAQHeading__jC8bk",
	"NewFAQIconCls": "FAQ_NewFAQIconCls__SuCVn",
	"FaqTabLabel": "FAQ_FaqTabLabel__YQcON",
	"FAQleftSide": "FAQ_FAQleftSide__4hKNV"
};


/***/ }),

/***/ 6895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


// Nav item
const CardNavItem = ({ href , icon , children , active , className , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                ...props,
                className: `card-nav-link${className ? ` ${className}` : ""}${active ? " active" : ""}`,
                children: [
                    icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: `${icon} me-2`
                    }) : "",
                    children
                ]
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ...props,
            className: `card-nav-link${className ? ` ${className}` : ""}${active ? " active" : ""}`,
            children: [
                icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: `${icon} me-2`
                }) : "",
                children
            ]
        })
    })
;
// Main wrapper
const CardNav = ({ children , className , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        ...props,
        className: `card-nav${className ? ` ${className}` : ""}`,
        children: children
    })
;
CardNav.Item = CardNavItem;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardNav);


/***/ }),

/***/ 4917:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1636);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_IconBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9340);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2423);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4692);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(128);
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_CardNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6895);
/* harmony import */ var _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7609);
/* harmony import */ var _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5698);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(329);
/* harmony import */ var _components_AboutUsSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4440);
/* harmony import */ var _components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8184);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_IconBox__WEBPACK_IMPORTED_MODULE_5__, _components_Services__WEBPACK_IMPORTED_MODULE_14__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_IconBox__WEBPACK_IMPORTED_MODULE_5__, _components_Services__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const AccountFeedbackPage = ({ faqRecords , csrfToken  })=>{
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: faqActivekey , 1: setFaqActiveKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: categoryName , 1: setCategoryName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: faqListingData , 1: setFaqListing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();
    const PageUrl = query.asPath;
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    const showFAQ = async (faqId, categoryId, categoryname)=>{
        const getFAQ = await fetch(process.env.BASE_URL + "/api/protect/faq-list", {
            method: "POST",
            body: JSON.stringify({
                categoryId: categoryId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const faqlisting = await getFAQ.json();
        await setFaqListing(faqlisting);
        await setFaqActiveKey(faqId);
        await setCategory(categoryId);
        await setCategoryName(categoryname);
        //window scroll to top 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const keyupFunction = async (value)=>{
        console.log(value);
        let htmlElements = document.getElementsByClassName("list-group-item-action");
        // Use a regular for-loop
        for(let i = 0; i < htmlElements.length; i++){
            // Print the current element
            console.log(htmlElements[i]);
            if (!htmlElements[i].innerHTML.toLowerCase().includes(value)) {
                htmlElements[i].parentElement.style.display = "none";
                htmlElements[i].parentElement.parentElement.style.display = "none";
            } else {
                htmlElements[i].parentElement.style.display = "flex";
                htmlElements[i].parentElement.parentElement.style.display = "block";
            }
        }
    };
    const handleSearch = (event)=>{
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = allData.filter((data)=>{
            return data.title.search(value) != -1;
        });
        setFilteredData(result);
    };
    console.log(faqActivekey, "faqActivekey.....");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        pageTitle: "Enquiries",
        activeNav: "Account",
        updateUser: updateUserDetails,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                title: "FAQ | Frequently Asked Questions",
                description: "Dialmenow is the most comprehensive Jaipur Business Directory. Find Local Business Details, Contacts, Products, Services & Price Quotations for all Verticals in Jaipur.",
                keyword: "yellow pages Jaipur faq, yellowpages Jaipur, faq, yellow pages, business directory Jaipur, Jaipur business directory, local business directory, Dialmenow yellow pages",
                url: PageUrl,
                city: "",
                area: "",
                companyName: "",
                SEOIndexing: true
            }),
            faqActivekey ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: `full py-sm-1 pt-4 pb-0 ${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FaqMain)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: "align-items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
                                xs: 12,
                                sm: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "How can we help?"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        id: "Searching",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "hidden",
                                                name: "csrfToken",
                                                defaultValue: csrfToken
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().HelpSearch)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Group), {
                                                        controlId: "vlogin-otp",
                                                        className: "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                            type: "text",
                                                            placeholder: "Search help....",
                                                            autoComplete: "off",
                                                            name: "searching",
                                                            onKeyUp: (e)=>{
                                                                keyupFunction(e.target.value);
                                                            },
                                                            //onChange={(event) =>handleSearch(event)}
                                                            className: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormControl)}`
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `full py-1 ${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().searchIcon)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-search"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
                                xs: 12,
                                sm: 6,
                                className: "text-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    src: "/images/FAQImg/FaqImgMain.png",
                                    width: 399,
                                    height: 272,
                                    alt: "Square image"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: `full  ${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FaqMainDetails)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: "",
                    children: faqActivekey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    md: 5,
                                    lg: 4,
                                    className: "pe-xl-4 mb-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "card card-body border-0 shadow-none pb-1 me-lg-1 p-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            in: open,
                                            className: "d-md-block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                id: "account-menu",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CardNav__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    className: "",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardNav__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Item */ .Z.Item, {
                                                            className: ` ${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().BackFaq)}`,
                                                            onClick: ()=>setFaqActiveKey("")
                                                            ,
                                                            icon: "fi-arrow-left",
                                                            children: "Back to Help Center"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FAQleftSide)}`,
                                                            children: faqRecords.data.faq.map((faq, indx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CardNav__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Item */ .Z.Item, {
                                                                    className: `border-0 ${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().LeftFaq)}`,
                                                                    onClick: ()=>showFAQ(faqListingData.data.faq.options[0].id, faq.id, faq.label)
                                                                    ,
                                                                    active: category == faq.id ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "d-md-flex d-block align-items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                                    src: faq.icon,
                                                                                    width: 37,
                                                                                    height: 35,
                                                                                    alt: "Square image"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: `ms-md-4 ms-sm-0 ms-0 ${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FaqTabLabel)}`,
                                                                                    children: faq.label
                                                                                }),
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        " ",
                                                                        category == faq.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-arrow-right ms-4"
                                                                        }) : null
                                                                    ]
                                                                })
                                                            )
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    md: 7,
                                    lg: 8,
                                    className: "mb-1",
                                    id: "my-listing-div",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: `h2 mb-0 border-bottom pb-3 mt-3 ${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FAQHeading)}`,
                                            children: categoryName
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-1",
                                            children: [
                                                console.log(faqActivekey, "faqActivekey...."),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    className: "",
                                                    activeKey: faqActivekey.toString(),
                                                    onSelect: (e)=>{
                                                        e && setFaqActiveKey(e) || "";
                                                    },
                                                    children: faqListingData.data.faq.options.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: faqListingData.data.faq.options.map((faqOptionMain, indx1)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                eventKey: `${faqOptionMain.id}`,
                                                                className: "border-0 border-bottom",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7___default().Header), {
                                                                        className: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FaqHeader)}`,
                                                                        children: [
                                                                            "Q: ",
                                                                            faqOptionMain.question
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7___default().Body), {
                                                                        className: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FaqBody)}`,
                                                                        children: faqOptionMain.answer
                                                                    })
                                                                ]
                                                            })
                                                        )
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-center pt-md-4 pb-2 pb-md-0",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-star display-6 text-muted mb-4"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                className: "h5 mb-2",
                                                                children: "There are no FAQ yet!"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-muted pb-1",
                                                                children: "All your FAQ will be displayed here."
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Frequently Asked Questions"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FaqMainDetailsinner)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        className: "shadow-none bg-light border-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8___default().Body), {
                                            className: "p-0",
                                            children: faqRecords.data.faq.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: faqRecords.data.faq.map((faq, indx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FaqMainMian)}`,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "d-flex align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_IconBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                            media: "image",
                                                                            removeBgCls: true,
                                                                            imageSrc: faq.icon,
                                                                            mediaHeight: "130",
                                                                            mediaWidth: "120",
                                                                            className: "mb-0",
                                                                            cardmediaClassName: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().NewFAQIconCls)}`,
                                                                            IconBoxMediamb3: ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FAQtextHeading)}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                className: "ms-md-5 ps-md-2 ms-sm-4 ps-sm-0 ms-4 ps-0 mb-0",
                                                                                children: faq.label
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                    horizontal: "sm",
                                                                    className: `mt-3 ${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FAQtextHeadingUl)}`,
                                                                    children: faq.options.map((faqOptions, Optionindx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                                            className: `${(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().FAQtextHeadingLi)}`,
                                                                            action: true,
                                                                            onClick: ()=>showFAQ(faqOptions.id, faq.id, faq.label)
                                                                            ,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: faqOptions.question
                                                                            })
                                                                        })
                                                                    )
                                                                })
                                                            ]
                                                        })
                                                    })
                                                )
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center pt-md-4 pb-2 pb-md-0",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-star display-6 text-muted mb-4"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "h5 mb-2",
                                                        children: "There are no FAQ yet!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-muted pb-1",
                                                        children: "All your FAQ will be displayed here."
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services__WEBPACK_IMPORTED_MODULE_14__["default"], {
                SwiperSlidePaddingCls: (_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_18___default().SwiperPadding)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AboutUsSection__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
        ]
    });
};
async function getServerSideProps() {
    // Fetch data from external API
    const data = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    const res = await fetch(`${process.env.BASE_URL}/api/protect/faq-list`, data);
    console.log(res);
    const faqRecords = await res.json();
    // Pass data to the page via props
    return {
        props: {
            faqRecords
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountFeedbackPage);

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

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ 2423:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Accordion");

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

/***/ 6810:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Card");

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

/***/ 128:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Collapse");

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

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,9340,8184,329,4440], () => (__webpack_exec__(4917)));
module.exports = __webpack_exports__;

})();