exports.id = 3912;
exports.ids = [3912];
exports.modules = {

/***/ 8792:
/***/ ((module) => {

// Exports
module.exports = {
	"sortByTop": "CategoryLisitng_sortByTop__xhvvZ",
	"whiteSpacePre": "CategoryLisitng_whiteSpacePre__wkayw",
	"CategoriesBox": "CategoryLisitng_CategoriesBox__FV2me",
	"CategoriesBoxtext": "CategoryLisitng_CategoriesBoxtext__wEerf",
	"PopoverBodyCls": "CategoryLisitng_PopoverBodyCls__rgh2F",
	"BoxTextWrap": "CategoryLisitng_BoxTextWrap__6sJs6",
	"CategoryLisitngHead": "CategoryLisitng_CategoryLisitngHead__jxORQ",
	"IconSize": "CategoryLisitng_IconSize__Bqz0q"
};


/***/ }),

/***/ 3912:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(348);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _partials_SeoHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8184);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(329);
/* harmony import */ var _styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8792);
/* harmony import */ var _styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5698);
/* harmony import */ var react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3981);
/* harmony import */ var react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9736);
/* harmony import */ var react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Adsense__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9500);
/* harmony import */ var _AboutUsSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4440);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_5__, _components_Services__WEBPACK_IMPORTED_MODULE_9__, _components_Adsense__WEBPACK_IMPORTED_MODULE_15__]);
([_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_5__, _components_Services__WEBPACK_IMPORTED_MODULE_9__, _components_Adsense__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const CategoryLisitng = ({ images , href , title , category , createdDate , price , badges , wishlistButton , dropdown , footer , horizontal , light , className , city_id , city_name , cityData , pageContent , ...props })=>{
    var ref;
    console.log("page content ------", pageContent);
    const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_19__.useMediaQuery)({
        query: "(min-width: 992px)"
    });
    console.log("isDesktop     ", isDesktop);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const PageUrl = router.asPath;
    const { 0: citySelected , 1: setCitySelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(city_name);
    const bgColors = [
        "#fbdfce",
        "#c3e8f6",
        "#eec9e0",
        "#d6edb1",
        "#e4eda8",
        "#dce0e3",
        "#e9b7b7",
        "#e7f0f6",
        "#fffbcd",
        "#F6E4EF"
    ];
    const { businessRecords: listings , isLoadingMore , isReachingEnd , isRefreshing , size , setSize , mutate  } = (0,_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_5__/* .usePagination */ .h)("/api/subcategories-listing", pageContent[0].category_id, {
        city_id: city_id,
        city_name: citySelected
    }, 20);
    console.log("listings of subcategories ==>", listings);
    const citiesListHandleChange = async (selected)=>{
        console.log("selected---", selected);
        setCitySelected(selected.label);
    //await setSelectedCity(selected);
    //setCityBanner(selected?.banner_img)
    //window.localStorage.setItem("searchFilterItem", JSON.stringify(selected))
    // call API to show data according to selected city
    };
    const myLoader = ({ src , width , quality  })=>{
        return `/pre-load-img.svg?w=${width}&q=${quality || 70}`;
    };
    var ref1;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20___default().sortByTop)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row align-items-center ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    md: 7,
                                    lg: 9,
                                    sm: 5,
                                    xs: 5,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: `me-3 mb-0 ${(_styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20___default().CategoryLisitngHead)}`,
                                        children: (ref = pageContent[0]) === null || ref === void 0 ? void 0 : ref.category_name
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    md: 5,
                                    lg: 3,
                                    sm: 7,
                                    xs: 7,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " text-end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group), {
                                                className: " d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                        className: `mb-0 align-items-center me-3 ${(_styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20___default().whiteSpacePre)}`,
                                                        children: "Select City"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                        isSearchable: true,
                                                        cacheOptions: true,
                                                        options: cityData,
                                                        components: {
                                                            IndicatorSeparator: ()=>null
                                                        },
                                                        closeMenuOnSelect: true,
                                                        hideSelectedOptions: false,
                                                        onChange: citiesListHandleChange,
                                                        defaultValue: cityData.filter((obj)=>obj.id == city_id
                                                        ),
                                                        className: "ms-0 w-xs-100 text-start w-100"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                md: 9,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                        className: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            next: ()=>setSize(size + 1)
                                            ,
                                            hasMore: !isReachingEnd,
                                            loader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center my-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                        animation: "grow",
                                                        size: "sm",
                                                        role: "status",
                                                        className: "me-2"
                                                    }),
                                                    "Loading..."
                                                ]
                                            }),
                                            endMessage: "",
                                            dataLength: (ref1 = listings === null || listings === void 0 ? void 0 : listings.length) !== null && ref1 !== void 0 ? ref1 : 0,
                                            className: "row ",
                                            children: listings.map((list, indx)=>{
                                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                    md: 4,
                                                    lg: 3,
                                                    sm: 4,
                                                    xs: 6,
                                                    className: "mb-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                        href: list.url,
                                                        passHref: true,
                                                        prefetch: false,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `text-center py-2 py-md-4 py-sm-3 px-2 h-100 d-flex align-items-center justify-content-center ${(_styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20___default().CategoriesBox)}`,
                                                            style: {
                                                                background: bgColors[indx % 10],
                                                                cursor: "pointer"
                                                            },
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                                className: "mb-0",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20___default().IconSize)}`,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                            loader: ()=>list.icon
                                                                            ,
                                                                            src: (list === null || list === void 0 ? void 0 : list.icon) || "/images/no-image.png",
                                                                            width: 66,
                                                                            height: 70,
                                                                            alt: list.name,
                                                                            className: "rounded"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                        placement: "bottom",
                                                                        overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_14___default().Body), {
                                                                                className: `text-center ${(_styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20___default().PopoverBodyCls)}`,
                                                                                children: list.description
                                                                            })
                                                                        }),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_12___default().Caption), {
                                                                            className: `${(_styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20___default().CategoriesBoxtext)}`,
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                href: list.url,
                                                                                className: (_styles_CategoryLisitng_module_css__WEBPACK_IMPORTED_MODULE_20___default().BoxTextWrap),
                                                                                children: [
                                                                                    " ",
                                                                                    list.name,
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }, list.id);
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                        className: "justify-space-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mb-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                    href: "/premium-listing",
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                        src: "/images/banner/web-banner-center.gif",
                                                        height: "180",
                                                        width: "930"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Adsense__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                className: "adsbygoogle",
                                                client: "ca-pub-5221768281365771",
                                                slot: "6579382740",
                                                format: "auto",
                                                responsive: "true",
                                                style: {
                                                    "display": "inline-block",
                                                    "width": "100%",
                                                    "height": "90px"
                                                }
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                md: 3,
                                children: isDesktop ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Adsense__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            className: "adsbygoogle",
                                            client: "ca-pub-5221768281365771",
                                            slot: "4105384997",
                                            //format="auto"
                                            //responsive="true"
                                            style: {
                                                "display": "inline-block",
                                                "width": "100%",
                                                "height": "194px"
                                            },
                                            enable_page_level_ads: true
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Adsense__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            className: "adsbygoogle",
                                            client: "ca-pub-5221768281365771",
                                            slot: "6449780806",
                                            //format="auto"
                                            //responsive="true"
                                            style: {
                                                "display": "inline-block",
                                                "width": "100%",
                                                "height": "194px"
                                            },
                                            enable_page_level_ads: true
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Adsense__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: "adsbygoogle",
                                    client: "ca-pub-5221768281365771",
                                    slot: "9808212073",
                                    format: "auto",
                                    responsive: "true",
                                    style: {
                                        "display": "block"
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AboutUsSection__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryLisitng);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;