exports.id = 8902;
exports.ids = [8902];
exports.modules = {

/***/ 3035:
/***/ ((module) => {

// Exports
module.exports = {
	"featuredListings": "FeaturedListings_featuredListings__H4tZL",
	"card": "FeaturedListings_card__xmog_",
	"SwiperSlide": "FeaturedListings_SwiperSlide__uEFQi",
	"stretched-link": "FeaturedListings_stretched-link__F5xgy",
	"h6": "FeaturedListings_h6__QdTip",
	"nav-link": "FeaturedListings_nav-link__8aqoe",
	"card-body": "FeaturedListings_card-body__U_LQm",
	"placeRratingNew": "FeaturedListings_placeRratingNew__geCs1",
	"featuredlistings": "FeaturedListings_featuredlistings__7oz3P",
	"card-footer": "FeaturedListings_card-footer__7vNiH",
	"swiperPagination": "FeaturedListings_swiperPagination__tCTjG",
	"badgescustom": "FeaturedListings_badgescustom__Gaip_",
	"placeRrating": "FeaturedListings_placeRrating__KvoXX",
	"SwiperSlideFcol": "FeaturedListings_SwiperSlideFcol__RTHY_",
	"featuredCity": "FeaturedListings_featuredCity__lfGUo",
	"SwiperSlidePagination": "FeaturedListings_SwiperSlidePagination__n6aLZ",
	"CardFooter": "FeaturedListings_CardFooter__2pBKS",
	"FeaturedListingsCardHead": "FeaturedListings_FeaturedListingsCardHead__2oaxM",
	"SwiperSlideMain": "FeaturedListings_SwiperSlideMain__tH1gE"
};


/***/ }),

/***/ 8902:
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FeaturedListingsCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8562);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8176);
/* harmony import */ var _styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3035);
/* harmony import */ var _styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_listings_modals_PhoneNumberModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1956);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const FeaturedListings = ({ featuredNewCls ="" , selectedCityObject  })=>{
    const { 0: featureListings , 1: setFeatureListings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: mobileShow , 1: setMobileShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: mobileNumber , 1: setMobileNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: slidesPerView , 1: setSlidesPerView  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    //mobile popup show
    const mobileHide = ()=>{
        setMobileNumber("");
        setMobileShow(false);
    //setBusinessIDpopup(null)
    };
    //mobile show popup
    const MobilePopup = (number, id)=>{
        setMobileNumber(number);
        setMobileShow(true);
    // setBusinessIDpopup(id)
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        let allFeatureListing = await featuresListingBusiness(selectedCityObject.id);
        //Convert array object into two-dimensional array object (matrix)
        if (screen.width > 991.98) {
            // 8 items slides
            //console.log("screen.width-----------------------------8--", screen.width)
            let allListing = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_7__/* .listToMatrix */ .Dc)(allFeatureListing, 8);
            setSlidesPerView(1);
            setFeatureListings(allListing);
        } else if (screen.width <= 991.98 && screen.width > 767.98) {
            // 6 items in a slide
            //console.log("screen.width----------------6---------------", screen.width)
            let allListing = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_7__/* .listToMatrix */ .Dc)(allFeatureListing, 6);
            setSlidesPerView(1);
            setFeatureListings(allListing);
        } else if (screen.width <= 767.98 && screen.width > 575.98) {
            // 4 items
            //console.log("screen.width------------------4-------------", screen.width)
            let allListing = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_7__/* .listToMatrix */ .Dc)(allFeatureListing, 4);
            setSlidesPerView(1);
            setFeatureListings(allListing);
        } else {
            //console.log("screen.width----------------mob---------------", screen.width)
            //mobile devices
            let allListing = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_7__/* .listToMatrix */ .Dc)(allFeatureListing, 1);
            //console.log(allListing,'-----')
            setSlidesPerView(1);
            setFeatureListings(allListing);
        }
    }, [
        selectedCityObject.id
    ]);
    //console.log(featureListings, '==>>>featureListings1')
    const featuresListingBusiness = async (cityid)=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    city_id: cityid,
                    token: ""
                })
            };
            var APIpath = `${process.env.BASE_URL}/api/protect/business-feature-listing`;
            const res = await fetch(APIpath, requestOptions);
            const resJson = await res.json();
            if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
                return resJson === null || resJson === void 0 ? void 0 : resJson.data;
            } else {
                return [];
            }
        } catch (err) {
            return [];
        }
    };
    if (featureListings.length > 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                mobileShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_modals_PhoneNumberModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    showStatus: mobileShow,
                    phoneNumber: mobileNumber,
                    onHide: mobileHide
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    className: `mb-3 ${(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().FeaturedListingsCardHead)}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Featured"
                        }),
                        " Listings ",
                        selectedCityObject === null || selectedCityObject === void 0 ? void 0 : selectedCityObject.label
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `text-center position-relative ${featuredNewCls}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                            slidesPerView: slidesPerView,
                            modules: [
                                swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                                swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination
                            ],
                            navigation: {
                                prevEl: "#prevFeList",
                                nextEl: "#nextFeList"
                            },
                            pagination: {
                                el: "#Pagination",
                                clickable: true,
                                dynamicBullets: true
                            },
                            grabCursor: true,
                            breakpoints: {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                    centeredSlides: true
                                },
                                500: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                },
                                1100: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                }
                            },
                            children: featureListings.map((featureListingItem, mainIndex)=>{
                                var ref;
                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                    className: `d-flex ${(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().SwiperSlide)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `row w-md-100 justify-content-center ${(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().SwiperSlideMain)}`,
                                        children: ((ref = featureListings[mainIndex]) === null || ref === void 0 ? void 0 : ref.length) > 0 && featureListings[mainIndex].map((featureItem, subItemIndex)=>{
                                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `col-md-3 ${(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().SwiperSlideFcol)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeaturedListingsCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    id: featureItem.id,
                                                    href: featureItem.url,
                                                    images: (featureItem === null || featureItem === void 0 ? void 0 : featureItem.logo) ? [
                                                        [
                                                            featureItem.logo,
                                                            306,
                                                            200,
                                                            featureItem.name, 
                                                        ], 
                                                    ] : [
                                                        [
                                                            "/images/no-image.png",
                                                            306,
                                                            200,
                                                            featureItem.name, 
                                                        ], 
                                                    ],
                                                    coverImage: true,
                                                    title: featureItem.name,
                                                    number: featureItem.mobile_number,
                                                    location: featureItem.full_address,
                                                    badges: featureItem.is_verified == "1" ? [
                                                        [
                                                            "succes " + (_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().badgescustom),
                                                            "Verified", 
                                                        ], 
                                                    ] : "",
                                                    footer: [
                                                        [
                                                            "fi-bed"
                                                        ]
                                                    ],
                                                    rating: featureItem.ratings,
                                                    reviews: featureItem.total_reviews,
                                                    className: "mx-auto",
                                                    MobilePopupFun: MobilePopup,
                                                    placeRratingCls: `${(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().placeRrating)}`,
                                                    featuredCityCls: `${(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().featuredCity)}`,
                                                    CardFooterCls: `${(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().CardFooter)}`,
                                                    CardTopImgCls: `${(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().CardTopImg)}`
                                                })
                                            }, "featureSubKey_" + subItemIndex);
                                        })
                                    })
                                }, "featureKey_" + mainIndex);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                            id: "prevFeList",
                            variant: "prev",
                            "aria-label": "Previous"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                            id: "nextFeList",
                            variant: "next",
                            "aria-label": "Next"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "Pagination",
                    className: `position-relative bottom-0 pt-0 mt-0 mb-lg-0 ${(_styles_FeaturedListings_module_css__WEBPACK_IMPORTED_MODULE_8___default().SwiperSlidePagination)}`
                })
            ]
        });
    } else {
        return "";
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedListings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ViewMobileNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1947);





const CardImage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 1634).then(__webpack_require__.bind(__webpack_require__, 1634))
, {
    loadableGenerated: {
        modules: [
            "../components/FeaturedListingsCard.js -> " + "./partials/CardImageFeatured"
        ]
    }
});
const CardImageSlider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 384).then(__webpack_require__.bind(__webpack_require__, 384))
, {
    loadableGenerated: {
        modules: [
            "../components/FeaturedListingsCard.js -> " + "./partials/CardImageSlider"
        ]
    }
});

const FeaturedListingsCard = ({ id , images , href , title , number , location , price , badges , footer , rating , reviews , horizontal , light , className , placeRratingCls ="" , featuredCityCls ="" , CardFooterCls ="" , MobilePopupFun , coverImage =false , CardTopImgCls ="" , ...props })=>{
    const { /*#__PURE__*/ 0: showPhone , 1: setShowPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    let styles = {
        colorTheme: {
            borderTop: "1px dashed #6B7EAC"
        },
        colorThemeA: {
            color: "#336228"
        }
    };
    const horizontalClass = horizontal ? " card-horizontal" : "", extraClass = className ? ` ${className}` : "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: "jsx-a320d15fe005e4e4" + " " + ((light ? `card h-100 card-light card-hover${horizontalClass}${extraClass}` : `card h-100 card-hover shadow-sm border-0${horizontalClass}${extraClass}`) || ""),
        children: [
            console.log("title---------------title", title, images),
            images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: images.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardImageSlider, {
                    horizontal: horizontal ? true : false,
                    images: images,
                    href: href,
                    badges: badges,
                    light: light ? 1 : 0,
                    layout: "fill",
                    alt: title + "Logo",
                    coverImage: true,
                    objectFit: "contain",
                    CardTopImgCls: true
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardImage, {
                    horizontal: horizontal ? true : false,
                    images: images,
                    href: href,
                    badges: badges,
                    coverImage: true,
                    alt: title + "Logo",
                    light: light ? 1 : 0,
                    CardTopImgCls: true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-a320d15fe005e4e4" + " " + "card-body position-relative pb-3",
                children: [
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "jsx-a320d15fe005e4e4" + " " + "h6 mb-1",
                        children: href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: href,
                            passHref: true,
                            prefetch: false,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "jsx-a320d15fe005e4e4" + " " + ((light ? "nav-link-light features-link text-start" : "nav-link features-link text-start") || ""),
                                children: title
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "jsx-a320d15fe005e4e4" + " " + ((light ? "text-light" : "") || ""),
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-a320d15fe005e4e4" + " " + `place-rating text-start ${placeRratingCls}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "jsx-a320d15fe005e4e4" + " " + "fi-star-filled me-2"
                            }),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "jsx-a320d15fe005e4e4",
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "jsx-a320d15fe005e4e4",
                                        children: rating ? rating : "0"
                                    }),
                                    " (",
                                    reviews ? reviews : "0",
                                    ")"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "jsx-a320d15fe005e4e4" + " " + `mb-0  ${featuredCityCls}`,
                        children: location && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "jsx-a320d15fe005e4e4" + " " + "fi-map-pin me-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-a320d15fe005e4e4",
                                    children: location
                                })
                            ]
                        })
                    }),
                    price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-a320d15fe005e4e4" + " " + "fw-bold",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "jsx-a320d15fe005e4e4" + " " + `fi-cash mt-n1 me-2 lead align-middle${light ? " opacity-50" : " opacity-70"}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-a320d15fe005e4e4" + " " + ((light ? "opacity-70" : "") || ""),
                                children: price
                            })
                        ]
                    }),
                    !horizontal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: footer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-a320d15fe005e4e4" + " " + `d-flex align-items-center text-nowrap ${CardFooterCls}`,
                            children: footer.map((item, indx)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "jsx-a320d15fe005e4e4" + " " + "d-inline-block mx-1  fs-sm",
                                    children: [
                                        item[1],
                                        number ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ViewMobileNumber__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            phone: number,
                                            MobilePopup: MobilePopupFun,
                                            id: id,
                                            phoneLimit: 2
                                        }) : null
                                    ]
                                }, indx);
                            })
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "a320d15fe005e4e4",
                children: ".features-link.jsx-a320d15fe005e4e4{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedListingsCard);


/***/ }),

/***/ 1956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const PhoneNumberModal = ({ phoneNumber , showStatus , ImageCloseBtnCls , ...props })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (showStatus) {
            setTimeout(()=>{
                if (false) {}
            }, 1000);
        }
    }, [
        showStatus
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default()), {
            fullscreen: true,
            centered: true,
            show: showStatus,
            ...props,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default().Body), {
                className: "p-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                        onClick: props.onHide,
                        "aria-label": "Close modal",
                        className: `position-absolute top-0 end-0 mt-3 me-3 ImageCloseBtn ${ImageCloseBtnCls}`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "p-3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                                "data-ad-client": "ca-pub-5221768281365771",
                                crossorigin: "anonymous",
                                onError: (e)=>{
                                    console.error("Ads Script failed to load", e);
                                },
                                strategy: "afterInteractive"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                                class: "adsbygoogle",
                                "data-ad-client": "ca-pub-5221768281365771",
                                "data-ad-slot": "9808212073",
                                "data-ad-format": "auto",
                                "data-full-width-responsive": "true",
                                style: {
                                    display: "block"
                                }
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneNumberModal);


/***/ })

};
;