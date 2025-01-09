exports.id = 1351;
exports.ids = [1351];
exports.modules = {

/***/ 5820:
/***/ ((module) => {

// Exports
module.exports = {
	"sortByTop": "BusinessListings_sortByTop__qhbBN",
	"NavUL": "BusinessListings_NavUL__zBXtn",
	"SortNav": "BusinessListings_SortNav__Qpndj",
	"filtersHdiv": "BusinessListings_filtersHdiv__X_4rc",
	"filterDiv": "BusinessListings_filterDiv__7w47V",
	"tooltipInfoCls": "BusinessListings_tooltipInfoCls__C8e7n",
	"ListingSearhCard": "BusinessListings_ListingSearhCard__EM5Yc",
	"notPhoneNumber": "BusinessListings_notPhoneNumber__2DEpK",
	"PremiumPlatinumMain": "BusinessListings_PremiumPlatinumMain__9wYxL",
	"paidBorder": "BusinessListings_paidBorder__JFlJa",
	"PremiumPlatinum": "BusinessListings_PremiumPlatinum__WtlsK",
	"PlaceRating": "BusinessListings_PlaceRating__dgskM",
	"DarkText": "BusinessListings_DarkText___x5zq",
	"verifyAndTime": "BusinessListings_verifyAndTime__VGIE8",
	"badgescustom": "BusinessListings_badgescustom__2Xogk",
	"ShopTime": "BusinessListings_ShopTime__f8Swe",
	"ShopTimePresent": "BusinessListings_ShopTimePresent__06Z_Q",
	"ListCardFooter": "BusinessListings_ListCardFooter___4LQo",
	"ListingCardLeft": "BusinessListings_ListingCardLeft__dBYzQ",
	"btn-secondary": "BusinessListings_btn-secondary__Ni59s",
	"ListingCardRight": "BusinessListings_ListingCardRight__Wm_YM",
	"ListingCardBtn": "BusinessListings_ListingCardBtn__lFicS",
	"EnquiryModalLi": "BusinessListings_EnquiryModalLi__eSgpX",
	"EnquiryModalLiSpan": "BusinessListings_EnquiryModalLiSpan__TzFtb",
	"ImageCloseBtn": "BusinessListings_ImageCloseBtn__Cd5Vl",
	"SortActive": "BusinessListings_SortActive__51e1u",
	"ListingCardLocation": "BusinessListings_ListingCardLocation__VF9A0",
	"google-add": "BusinessListings_google-add__GlEue",
	"SortBtHead": "BusinessListings_SortBtHead__yLGbj",
	"d-flex": "BusinessListings_d-flex___eayb"
};


/***/ }),

/***/ 8253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8582);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8176);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ViewMobileNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1947);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1848);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_8__);






const CardImage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 9974).then(__webpack_require__.bind(__webpack_require__, 9974))
, {
    loadableGenerated: {
        modules: [
            "../components/ListingCard.js -> " + "./partials/CardImage"
        ]
    }
});
const CardImageSlider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 384).then(__webpack_require__.bind(__webpack_require__, 384))
, {
    loadableGenerated: {
        modules: [
            "../components/ListingCard.js -> " + "./partials/CardImageSlider"
        ]
    }
});
//import BusinessAds from '../components/partials/BusinessAds'
const BusinessAds = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/ListingCard.js -> " + "../components/partials/BusinessAds"
        ]
    },
    ssr: false
});




const showingReasons = [
    "Showing exact category match results below.",
    "Showing exact keyword match results below.",
    "Displaying below records with names starting with the searched query.",
    "Displaying below results that match similar categories to the searched query.",
    "Displaying below results that match similar keywords to the searched query.",
    "Displaying below results that match similar names to the searched query.",
    "Displaying below results that match similar contact person to the searched query.",
    "Presenting these below results because they match either the description or services.",
    "These below results are being displayed because the searched query was found anywhere in the name.", 
];
const ListingCard = ({ images , href , title , category , location , price , badges , wishlistButton ="" , dropdown , footer , horizontal , light , ratings , className , bookNow , phone , ivrNumber , smsEmail , geoLocation , id , MobilePopup , EnquiryNow , timing , PlaceRatingCls ="" , DarkTextCls ="" , verifyAndTimeCls ="" , badgescustomCls ="" , ShopTimeCls ="" , ShopTimePresentCls ="" , ListCardFooterCls , MobileTextColorCls , ListingCardLeftCls , ListingCardRightCls , ListingCardBtnCls , searchQuery , isVerified , indexID =0 , isReachingEnd =true , categoryID ="" , cityID ="" , showAds =false , ListingCardLocationCls ="" , CoccocAloPhone ="" , CoccocAloCircleCls ="" , CoccocAloCircleFillCls ="" , CoccocAloImgCircleCls ="" , MobileNumberListCls ="" , PremiumPlatinumCls ="" , PremiumPlatinumMainCls ="" , packageName ="" , paidBorderCls ="" , notPhoneNumberCls ="" , isPaid ="2" , tooltipInfoCls ="" , show_reason =0 , isShowReason =false , pre_show_reason , ...props })=>{
    const { 0: showPhone , 1: setShowPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: playAnimation , 1: setPlayAnimation  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const horizontalClass = horizontal ? " card-horizontal" : "", extraClass = className ? ` ${className}` : "";
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const onPageLoad = ()=>{
            setPlayAnimation(true);
        };
        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return ()=>window.removeEventListener("load", onPageLoad)
            ;
        }
        if (indexID % 150 == 0 && indexID != 0) {
            EnquiryNow("", indexID);
        }
    }, []);
    const memoCompo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        var ref;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                showAds && indexID % 10 == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BusinessAds, {
                    city_id: cityID,
                    category_id: categoryID,
                    type: indexID == 0 ? 1 : 5,
                    showGoogleAds: indexID == 0 ? false : true,
                    slotID: "6579382740",
                    gadsStyle: {
                        display: "block",
                        width: "100%",
                        height: "90px"
                    }
                }, "ads-self-" + indexID),
                pre_show_reason !== show_reason && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                    className: "p-0 fs-sm text-light-60",
                    style: {
                        color: "#777"
                    },
                    children: showingReasons[show_reason]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    ...props,
                    className: light ? `card card-light card-hover${horizontalClass}${extraClass}` : `card card-hover shadow-sm ${horizontalClass} ${extraClass} ${isPaid == "1" ? paidBorderCls : ""}
                     ${phone ? "" : notPhoneNumberCls}`,
                    children: [
                        images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: images.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardImageSlider, {
                                horizontal: horizontal ? true : false,
                                images: images,
                                href: href,
                                badges: badges,
                                wishlistButton: wishlistButton,
                                light: light ? 1 : 0,
                                title: title
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardImage, {
                                horizontal: horizontal ? true : false,
                                images: images,
                                href: href,
                                badges: badges,
                                wishlistButton: wishlistButton,
                                light: light ? 1 : 0,
                                fromListingPage: true,
                                title: title
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `card-body position-relative pb-0  ps-lg-4 ps-md-4 ps-sm-2 ps-2 pt-2 ${isPaid == "1" ? "pe-lg-4 pe-md-4 pe-sm-2 pe-2" : "pe-lg-0 pe-md-0 pe-sm-2 pe-2"}`,
                            children: [
                                dropdown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    className: "dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4___default().Toggle), {
                                            variant: `${light ? "translucent-light" : "light shadow-sm"} btn-icon btn-xs rounded-circle`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-dots-vertical"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4___default().Menu), {
                                            variant: light ? "dark" : "",
                                            className: "my-1",
                                            children: dropdown.map((item, indx)=>{
                                                if (item.href) {
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: item.href,
                                                        passHref: true,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                                            ...item.props,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: `${item.icon}${light ? "" : " opacity-60"} me-2`
                                                                }),
                                                                item.label
                                                            ]
                                                        })
                                                    }, indx);
                                                } else {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                                        as: "button",
                                                        ...item.props,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: `${item.icon}${light ? "" : " opacity-60"} me-2`
                                                            }),
                                                            item.label
                                                        ]
                                                    }, indx);
                                                }
                                            })
                                        })
                                    ]
                                }),
                                category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-1 fs-xs text-uppercase text-primary",
                                    children: category
                                }),
                                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: `h4 mb-1 ${DarkTextCls}`,
                                    children: href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: href,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: light ? "nav-link-light" : "nav-link",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_highlight_words__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    highlightClassName: "highlitedTexts",
                                                    searchWords: searchQuery ? searchQuery.split(" ") : [],
                                                    autoEscape: true,
                                                    textToHighlight: title,
                                                    highlightStyle: {
                                                        color: "red",
                                                        padding: "0"
                                                    }
                                                })
                                            })
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: light ? "text-light" : "",
                                        children: title
                                    })
                                }),
                                (ratings === null || ratings === void 0 ? void 0 : ratings.length) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `place-rating d-flex align-items-center ${PlaceRatingCls}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-star-filled me-2"
                                        }),
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: (ref = ratings[0]) === null || ref === void 0 ? void 0 : ref.toFixed(2)
                                                }),
                                                " (",
                                                ratings[1],
                                                ")"
                                            ]
                                        })
                                    ]
                                }),
                                location && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: `${geoLocation ? "https://www.google.com/maps/place/" + geoLocation : "javascript:vaoid(0)"}`,
                                    target: "_blank",
                                    className: `mb-0 mt-2 d-flex  fs-md ${light ? "text-light opacity-50" : ""} ${ListingCardLocationCls}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-map-pin me-2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_highlight_words__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                highlightClassName: "highlitedTexts",
                                                searchWords: searchQuery ? searchQuery.split(" ") : [],
                                                autoEscape: true,
                                                textToHighlight: location,
                                                highlightStyle: {
                                                    color: "red",
                                                    padding: "0"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `d-flex align-items-center py-3  ${verifyAndTimeCls}`,
                                    children: [
                                        isVerified == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "ms-3 me-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: `d-table badge bg-succes ${badgescustomCls}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-security me-1"
                                                    }),
                                                    "Verified"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${ShopTimeCls}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                className: "mb-0",
                                                children: [
                                                    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_9__/* .businessOpen */ .n6)(timing.join(",")) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Open Now"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Closed"
                                                    }),
                                                    (timing === null || timing === void 0 ? void 0 : timing.length) > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: " - " + (0,_helper_helper__WEBPACK_IMPORTED_MODULE_9__/* .formatAmPm */ .Wr)(timing[0], 2, "H:i:s", "H:i") + " - " + (0,_helper_helper__WEBPACK_IMPORTED_MODULE_9__/* .formatAmPm */ .Wr)(timing[1], 2, "H:i:s", "H:i")
                                                    }),
                                                    (timing === null || timing === void 0 ? void 0 : timing.length) > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: " | " + (0,_helper_helper__WEBPACK_IMPORTED_MODULE_9__/* .formatAmPm */ .Wr)(timing[2], 2, "H:i:s", "H:i") + " - " + (0,_helper_helper__WEBPACK_IMPORTED_MODULE_9__/* .formatAmPm */ .Wr)(timing[3], 2, "H:i:s", "H:i")
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                horizontal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `d-block d-md-flex align-items-center  justify-content-between${light ? " border-light" : ""} pt-2 pb-0 pt-sm-3 pt-md-3  text-nowrap ${ListCardFooterCls} `,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${ListingCardLeftCls}`,
                                                children: phone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ViewMobileNumber__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    phone: phone,
                                                    MobilePopup: MobilePopup,
                                                    id: id
                                                }) : null
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `${ListingCardRightCls}`,
                                                children: [
                                                    smsEmail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "d-inline-block me-1 fs-sm",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "javascript:void(0)",
                                                            className: `btn-sm btn-secondary ${ListingCardBtnCls}`,
                                                            onClick: ()=>smsEmail(id)
                                                            ,
                                                            children: "SMS/Email"
                                                        })
                                                    }),
                                                    bookNow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "d-inline-block me-1 fs-sm",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: bookNow,
                                                            target: "_blank",
                                                            className: `btn-sm btn-secondary ${ListingCardBtnCls}`,
                                                            children: "Get Deal Now"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "d-inline-block me-1 fs-sm",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "javascript:void(0)",
                                                            className: `btn-sm btn-secondary ${ListingCardBtnCls}`,
                                                            onClick: ()=>EnquiryNow(id)
                                                            ,
                                                            children: "Enquire Now"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        isPaid == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${PremiumPlatinumMainCls}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${PremiumPlatinumCls}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: packageName
                                })
                            })
                        }),
                        !horizontal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "card-footer d-flex align-items-center mx-4 text-nowrap",
                                children: [
                                    phone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ViewMobileNumber__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        phone: phone,
                                        MobilePopup: MobilePopup,
                                        id: id
                                    }) : null,
                                    smsEmail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "d-inline-block me-1 fs-sm",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "javascript:void(0)",
                                            className: "btn-sm btn-primary",
                                            onClick: ()=>smsEmail(id)
                                            ,
                                            children: "SMS/Email"
                                        })
                                    }),
                                    bookNow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "d-inline-block me-1 fs-sm",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: bookNow,
                                            className: "btn-sm btn-primary",
                                            children: "Get Deal Now"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "d-inline-block me-1 fs-sm",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "javascript:void(0)",
                                            className: "btn-sm btn-primary",
                                            onClick: ()=>EnquiryNow(id)
                                            ,
                                            children: "Enquire Now"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    }, [
        id,
        showPhone
    ]);
    return memoCompo;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingCard);


/***/ }),

/***/ 1351:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ListingCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8253);
/* harmony import */ var _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(348);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5820);
/* harmony import */ var _styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_10__]);
_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const EnquiryModal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4301), __webpack_require__.e(3951)]).then(__webpack_require__.bind(__webpack_require__, 3951))
, {
    loadableGenerated: {
        modules: [
            "../components/searching/BusinessListings.js -> " + "../listings/modals/EnquiryModal"
        ]
    }
});
const SmsEmailModal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4301), __webpack_require__.e(9698)]).then(__webpack_require__.bind(__webpack_require__, 9698))
, {
    loadableGenerated: {
        modules: [
            "../components/searching/BusinessListings.js -> " + "../listings/modals/SmsEmailModal"
        ]
    }
});
const SetLocationSortModal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/searching/BusinessListings.js -> " + "../listings/modals/SetLocationSortModal"
        ]
    },
    ssr: false
});
const PhoneNumberModal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/searching/BusinessListings.js -> " + "../listings/modals/PhoneNumberModal"
        ]
    },
    ssr: false
});
const BusinessAds = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/searching/BusinessListings.js -> " + "../partials/BusinessAds"
        ]
    },
    ssr: false
});
const AboutUsSection = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/searching/BusinessListings.js -> " + "../AboutUsSection"
        ]
    },
    ssr: false
});
const Services = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/searching/BusinessListings.js -> " + "../Services"
        ]
    },
    ssr: false
});
const MessageModel = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/searching/BusinessListings.js -> " + "../MessageModal"
        ]
    },
    ssr: false
});
//import SeoHead from '../partials/SeoHead'

const BusinessListings = ({ currentSession , pageContent , sessionStatus  })=>{
    console.log("pageContent  -------vv----", pageContent);
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const PageUrl = query.asPath;
    // Offcanvas container
    const offcanvasContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // Offcanvas show/hide
    const randomNumbers = [
        9999,
        99999,
        999999
    ];
    const { 0: enquiryShow , 1: setEnquiryShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: smsEmailShow , 1: setSmsEmailShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: smsEmailID , 1: setSmsEmailID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: enquiryID , 1: setEnquiryID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: mobileShow , 1: setMobileShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: mobileNumber , 1: setMobileNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: businessIDpopup , 1: setBusinessIDpopup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: searchDetail , 1: setSearchDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pageContent);
    const { 0: latLong , 1: setLatLong  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: latLongLocation , 1: setLatLongLocation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: categoryID , 1: setCategoryID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pageContent.category_id);
    const { 0: businessSort , 1: setBusinessSort  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: showLocationPop , 1: setShowLocationPop  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errorMsg , 1: setErrorMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showRightAdd , 1: setShowRightAdd  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);
    const { 0: randno , 1: setRandno  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
    const reasonShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const memoizedData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>showRightAdd
    , [
        showRightAdd
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let timeOut = setTimeout(()=>{
            EnquiryNow("");
        }, 10000);
        const onPageLoad = ()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return ()=>window.removeEventListener("load", onPageLoad)
            ;
        }
        return ()=>clearTimeout(timeOut)
        ;
    }, []);
    // Media query for displaying Offcanvas on screens larger than 991px
    const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
        query: "(min-width: 992px)"
    });
    const { businessRecords: listings , isLoadingMore , isRefreshing , isReachingEnd , isLoadingInitialData , size , setSize  } = (0,_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_10__/* .usePagination */ .h)("/api/business-listing-categories", "", {
        "city_id": searchDetail.city_id,
        "state_id": searchDetail.state_id,
        "sub_id": searchDetail.category_id,
        "query": pageContent.query,
        "sort": businessSort,
        lat_long: latLong,
        location_lat: latLongLocation,
        "randno": randno,
        "sameCity": (pageContent === null || pageContent === void 0 ? void 0 : pageContent.found_in_city) || 0
    });
    console.log("isLoadingMore, isRefreshing   ", isLoadingMore, isRefreshing, isLoadingInitialData);
    const handleSort = async (val)=>{
        console.log(" Clicked -----------", val);
        if (businessSort.includes(val)) {
            setBusinessSort(businessSort.filter((item)=>item !== val
            ));
            console.log(" businessSort -----------", businessSort);
            setSize(1);
        } else {
            if (val == "distance") {
                if (navigator === null || navigator === void 0 ? void 0 : navigator.geolocation) {
                    // console.log(navigator?.geolocation)
                    navigator === null || navigator === void 0 ? void 0 : navigator.geolocation.getCurrentPosition((position)=>{
                        var lat = position.coords.latitude;
                        var lon = position.coords.longitude;
                        setLatLong(lat + "," + lon);
                        setBusinessSort([
                            ...businessSort,
                            val
                        ]);
                        setSize(1);
                    }, (err)=>{
                        //show error message
                        setErrorMsg("Location is disabled. Please allow location.");
                    });
                } else {
                    console.log("Geolocation is not supported by this browser.");
                }
            } else {
                await setBusinessSort([
                    ...businessSort,
                    val
                ]);
                console.log(" businessSort -----------", businessSort);
                setSize(1);
            }
        }
    };
    const onClickOpenModal = async (state)=>{
        if (businessSort.indexOf("location") >= 0) {
            let index = businessSort.indexOf("location");
            let currentArry = businessSort;
            currentArry.splice(index, 1);
            await setBusinessSort(currentArry);
            setSize(1);
        } else {
            setShowLocationPop(state);
        }
    };
    // console.log(listings)
    // List of cars array
    //enquiry show popup
    const EnquiryNow = (id, index = "")=>{
        //console.log("Call id ==> ",id)
        setEnquiryID(id);
        setEnquiryShow(true);
    };
    //enquiry hide popup
    const onEnquiryHide = ()=>{
        setEnquiryID("");
        setEnquiryShow(false);
    //console.log("caliing onEnquiryHide")
    };
    //mobile show popup
    const MobilePopup = (number, id)=>{
        //console.log("Call id ==> ", id)
        setMobileNumber(number);
        setMobileShow(true);
        setBusinessIDpopup(id);
    };
    //mobile popup show 
    const mobileHide = ()=>{
        setMobileNumber("");
        setMobileShow(false);
        setBusinessIDpopup(null);
    //console.log("caliing onSmsEmailHide")
    };
    //SMS email popup hide
    const onSmsEmailHide = ()=>{
        setSmsEmailID("");
        setSmsEmailShow(false);
    //console.log("caliing onSmsEmailHide")
    };
    //SMS email popup show
    const SmsEmail = (id)=>{
        //console.log("Call id ==> ", id)
        setSmsEmailID(id);
        setSmsEmailShow(true);
    };
    var ref1;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            errorMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageModel, {
                message: errorMsg,
                title: "",
                status: true,
                setMessage: setErrorMsg,
                type: "err"
            }),
            showLocationPop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SetLocationSortModal, {
                show: showLocationPop,
                onHide: ()=>onClickOpenModal(false)
                ,
                setLatLong: setLatLongLocation,
                setBusinessSort: setBusinessSort,
                setSize: setSize,
                businessSort: businessSort
            }),
            enquiryShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EnquiryModal, {
                showStatus: enquiryShow,
                id: enquiryID,
                onHide: onEnquiryHide,
                centered: true,
                cityName: searchDetail.city_name,
                categoryName: searchDetail.category_name,
                cityID: searchDetail.city_id,
                categoryID: searchDetail.category_id,
                currentSession: currentSession,
                sessionStatus: sessionStatus,
                EnquiryModalLiCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().EnquiryModalLi),
                EnquiryModalLiSpanCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().EnquiryModalLiSpan),
                querySearch: (pageContent === null || pageContent === void 0 ? void 0 : pageContent.query) || "",
                title: `Fill this form and get best deals on <span> ${pageContent.query ? pageContent.query : searchDetail.category_name} </span> `
            }),
            smsEmailShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SmsEmailModal, {
                showStatus: smsEmailShow,
                id: smsEmailID,
                onHide: onSmsEmailHide,
                centered: true,
                cityName: searchDetail.city_name,
                categoryName: searchDetail.category_name,
                cityID: searchDetail.city_id,
                categoryID: searchDetail.category_id,
                currentSession: currentSession,
                sessionStatus: sessionStatus
            }),
            mobileShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PhoneNumberModal, {
                showStatus: mobileShow,
                phoneNumber: mobileNumber,
                onHide: mobileHide,
                ImageCloseBtnCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().ImageCloseBtn)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().sortByTop)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-block d-md-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: `mb-0 ${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().filtersHdiv)}`,
                                    children: (pageContent === null || pageContent === void 0 ? void 0 : pageContent.found_in_city) == "1" ? "No matches found in " + pageContent.city_name + ", but we suggest similar options in other cities." : (pageContent.query ? pageContent.query : pageContent.category_name) + " in " + pageContent.city_name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: ` text-end mt-1 mt-sm-3 mt-md-0 ${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().filterDiv)}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        variant: "pills d-flex align-items-center",
                                        className: `justify-content-lg-end justify-content-md-end justify-content-sm-start justify-content-start ${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().NavUL)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                                                className: `text-start d-flex align-items-center text-dark ${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortBtHead)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-arrows-sort me-1"
                                                    }),
                                                    " Sort By:"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                                                className: businessSort.indexOf("verified") >= 0 ? (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortActive) : "",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Link), {
                                                    onClick: ()=>handleSort("verified")
                                                    ,
                                                    className: `${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortNav)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-security"
                                                        }),
                                                        "Is Verified"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                                                className: businessSort.indexOf("location") >= 0 ? (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortActive) : "",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Link), {
                                                    onClick: ()=>onClickOpenModal(true)
                                                    ,
                                                    className: `${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortNav)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-map-pin"
                                                        }),
                                                        "Location"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                                                className: businessSort.indexOf("open") >= 0 ? (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortActive) : "",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Link), {
                                                    className: `${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortNav)}`,
                                                    onClick: ()=>handleSort("open")
                                                    ,
                                                    children: "Open Now"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                                                className: businessSort.indexOf("rating") >= 0 ? (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortActive) : "",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Link), {
                                                    onClick: ()=>handleSort("rating")
                                                    ,
                                                    className: `${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortNav) + " " + (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortNavRating)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        "Ratings"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                                                className: businessSort.indexOf("distance") >= 0 ? (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortActive) : "",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default().Link), {
                                                    onClick: ()=>handleSort("distance")
                                                    ,
                                                    className: `${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().SortNav)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-map-pin"
                                                        }),
                                                        "Distance"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                        className: "pb-md-1 pt-4 position-relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default()), {
                                lg: 9,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    initialScrollY: 0,
                                    next: ()=>setSize(size + 1)
                                    ,
                                    hasMore: !isReachingEnd,
                                    loader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center my-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                animation: "grow",
                                                size: "sm",
                                                role: "status",
                                                className: "me-2 "
                                            }),
                                            "Loading..."
                                        ]
                                    }),
                                    endMessage: "",
                                    dataLength: (ref1 = listings === null || listings === void 0 ? void 0 : listings.length) !== null && ref1 !== void 0 ? ref1 : 0,
                                    scrollThreshold: 0.8,
                                    children: (listings === null || listings === void 0 ? void 0 : listings.length) > 0 ? listings.map((list, indx)=>{
                                        var ref;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ListingCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            id: list.id,
                                            indexID: indx,
                                            isReachingEnd: isReachingEnd,
                                            cityID: pageContent.city_id,
                                            categoryID: pageContent.category_id,
                                            showAds: true,
                                            href: list.url,
                                            images: (list === null || list === void 0 ? void 0 : list.logo) ? [
                                                [
                                                    list === null || list === void 0 ? void 0 : list.logo,
                                                    "Image",
                                                    "contain"
                                                ]
                                            ] : [
                                                [
                                                    "/images/no-image.png",
                                                    "Image"
                                                ]
                                            ],
                                            title: list.name,
                                            year: list.year_establishment,
                                            location: (list.address ? list.address + ", " : "") + list.area_name + ", " + list.city_name,
                                            lat: list.geo_location,
                                            geoLocation: list.geo_location,
                                            ratings: [
                                                list.ratings,
                                                list.total_reviews
                                            ],
                                            horizontal: true,
                                            isVerified: list.is_verified,
                                            bookNow: list.book_now_url,
                                            phone: list.business_phone,
                                            ivrNumber: "",
                                            MobilePopup: MobilePopup,
                                            smsEmail: SmsEmail,
                                            EnquiryNow: EnquiryNow,
                                            timing: list.timings ? list.timings.split(",") : [],
                                            searchQuery: (pageContent === null || pageContent === void 0 ? void 0 : pageContent.query) || "",
                                            className: ` shadow-none ${(_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().ListingSearhCard)}`,
                                            PlaceRatingCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().PlaceRating),
                                            DarkTextCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().DarkText),
                                            verifyAndTimeCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().verifyAndTime),
                                            badgescustomCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().badgescustom),
                                            ShopTimeCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().ShopTime),
                                            ShopTimePresentCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().ShopTimePresent),
                                            ListCardFooterCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().ListCardFooter),
                                            ListingCardLeftCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().ListingCardLeft),
                                            ListingCardRightCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().ListingCardRight),
                                            ListingCardBtnCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().ListingCardBtn),
                                            ListingCardLocationCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().ListingCardLocation),
                                            PremiumPlatinumCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().PremiumPlatinum),
                                            PremiumPlatinumMainCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().PremiumPlatinumMain),
                                            packageName: list.package_name,
                                            isPaid: list.is_paid,
                                            paidBorderCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().paidBorder),
                                            notPhoneNumberCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().notPhoneNumber),
                                            tooltipInfoCls: (_styles_BusinessListings_module_css__WEBPACK_IMPORTED_MODULE_13___default().tooltipInfoCls),
                                            show_reason: (list === null || list === void 0 ? void 0 : list.show_reason) || 0,
                                            pre_show_reason: indx - 1 >= 0 ? ((ref = listings[indx - 1]) === null || ref === void 0 ? void 0 : ref.show_reason) || 0 : 0,
                                            isShowReason: false
                                        }, list.id);
                                    }) : isLoadingMore ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-home display-6 text-muted mb-4"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "h5 mb-4",
                                                children: "No Listing found!"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default()), {
                                lg: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        position: "sticky",
                                        top: "13%",
                                        right: "0"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BusinessAds, {
                                        city_id: pageContent.city_id,
                                        category_id: pageContent.category_id,
                                        type: showRightAdd,
                                        showGoogleAds: true,
                                        slotID: "4203155942",
                                        gadsStyle: {
                                            display: "inline-block",
                                            width: "100%",
                                            height: "300px"
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default()), {
                                ref: offcanvasContainer,
                                as: "aside",
                                lg: 3,
                                className: "pe-xl-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-sm-flex align-items-center justify-content-between pb-4 mb-2"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Services, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AboutUsSection, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessListings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;