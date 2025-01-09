exports.id = 4781;
exports.ids = [4781];
exports.modules = {

/***/ 1734:
/***/ ((module) => {

// Exports
module.exports = {
	"categorieslist": "TrendingCategories_categorieslist__IMYuG",
	"categorieslistLi": "TrendingCategories_categorieslistLi__GMQY_",
	"TrendingCategories": "TrendingCategories_TrendingCategories__MJdxZ",
	"popular-services": "TrendingCategories_popular-services__ThpC7",
	"icon-box": "TrendingCategories_icon-box__znJ9g",
	"card-hover": "TrendingCategories_card-hover__bDP81",
	"list-group-flush": "TrendingCategories_list-group-flush__arYv0",
	"list-group-item": "TrendingCategories_list-group-item__v7Luu",
	"list-group": "TrendingCategories_list-group__Nn6LV",
	"card": "TrendingCategories_card__YP4xx",
	"TradingIcon": "TrendingCategories_TradingIcon__h1I1b",
	"TradingCardManinCls": "TrendingCategories_TradingCardManinCls__LmDmG"
};


/***/ }),

/***/ 4781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_TrendingCategories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap/ListGroup"
var ListGroup_ = __webpack_require__(4692);
var ListGroup_default = /*#__PURE__*/__webpack_require__.n(ListGroup_);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/ImageLoader.js
var ImageLoader = __webpack_require__(5698);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/TrendingIconBox.js





const TrendingIconBox = ({ href , media , mediaColor , mediaShape , imageSrc , title , titleSize , text , type , light , align , className , removeBgCls =false , TradingIconCls ="" , TradingCardManinCls ="" , ...props })=>{
    let styles = {
        colorThemeA: {
            color: "#4D973D"
        },
        colorTheme: {
            borderTop: "1px dashed #6B7EAC",
            ["@media (max-width:780px)"]: {
                // eslint-disable-line no-useless-computed-key
                borderTop: "1px dashed #000"
            }
        }
    };
    const mediaShapeClass = mediaShape ? ` rounded-${mediaShape}` : "", alignment = align ? ` text-${align}` : "", cardSkinClass = light ? " card-light" : "", titleFontSize = titleSize ? ` fs-${titleSize}` : " fs-base", titleSkinClass = light ? " text-light" : "", textSkinClass = light ? " text-light opacity-60" : " text-body", extraClass = className ? ` ${className}` : "";
    // Icon box media class
    let mediaColorClass;
    if (light) {
        mediaColorClass = " bg-faded-light text-light";
    } else {
        mediaColorClass = mediaColor ? ` bg-faded-${mediaColor} text-${mediaColor}` : " bg-faded-primary text-primary";
    }
    // CSS classes that depend on prop.type, prop.light, prop.alignment, prop.className
    let iconBoxClass, iconBoxMediaClass, iconBoxTitleClass, iconBoxTextClass;
    switch(type){
        case "card":
            iconBoxClass = "icon-box card card-body card-hover h-100 text-decoration-none" + cardSkinClass + alignment + extraClass;
            iconBoxMediaClass = "icon-box-media mb-3" + mediaColorClass + mediaShapeClass;
            iconBoxTitleClass = "icon-box-title mb-0" + titleFontSize + titleSkinClass;
            iconBoxTextClass = "fs-sm mt-2 mb-0" + textSkinClass;
            break;
        case "card-shadow":
            iconBoxClass = "icon-box card card-body h-100 border-0  text-decoration-none " + cardSkinClass + alignment + extraClass;
            iconBoxMediaClass = "icon-box-media mb-2 mb-md-3 mb-md-2" + mediaColorClass + mediaShapeClass;
            iconBoxTitleClass = "icon-box-title mb-0" + titleFontSize + titleSkinClass;
            iconBoxTextClass = "fs-sm mt-2 mb-0" + textSkinClass;
            break;
        case "pill":
            iconBoxClass = "icon-box card flex-row align-items-center card-hover rounded-pill text-decoration-none py-2 ps-2 pe-4" + cardSkinClass + alignment + extraClass;
            iconBoxMediaClass = "icon-box-media rounded-pill me-2" + mediaColorClass;
            iconBoxTitleClass = "icon-box-title fs-sm ps-1 pe-1 mb-0" + titleSkinClass;
            iconBoxTextClass = "d-none";
            break;
        case "pill-shadow":
            iconBoxClass = "icon-box card flex-row align-items-center card-hover border-0 shadow-sm rounded-pill text-decoration-none py-2 ps-2 pe-4" + cardSkinClass + alignment + extraClass;
            iconBoxMediaClass = "icon-box-media rounded-pill me-2" + mediaColorClass;
            iconBoxTitleClass = "icon-box-title fs-sm ps-1 pe-1 mb-0" + titleSkinClass;
            iconBoxTextClass = "d-none";
            break;
        case "pill-rounded":
            iconBoxClass = "icon-box card flex-row align-items-center card-hover text-decoration-none py-2 ps-2 pe-4" + cardSkinClass + alignment + extraClass;
            iconBoxMediaClass = "icon-box-media me-2" + mediaColorClass;
            iconBoxTitleClass = "icon-box-title fs-sm ps-1 pe-1 mb-0" + titleSkinClass;
            iconBoxTextClass = "d-none";
            break;
        case "pill-rounded-shadow":
            iconBoxClass = "icon-box card flex-row align-items-center card-hover border-0 shadow-sm text-decoration-none py-2 ps-2 pe-4" + cardSkinClass + alignment + extraClass;
            iconBoxMediaClass = "icon-box-media me-2" + mediaColorClass;
            iconBoxTitleClass = "icon-box-title fs-sm ps-1 pe-1 mb-0" + titleSkinClass;
            iconBoxTextClass = "d-none";
            break;
        default:
            iconBoxClass = "icon-box text-decoration-none" + alignment + extraClass;
            iconBoxMediaClass = "icon-box-media mb-3" + mediaColorClass + mediaShapeClass;
            iconBoxTitleClass = "icon-box-title mb-0" + titleFontSize + titleSkinClass;
            iconBoxTextClass = "fs-sm mt-2 mb-0" + textSkinClass;
    }
    // Icon box text
    let iconBoxText = text ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: iconBoxTextClass,
        /*#__PURE__*/ children: text
    }) : "";
    // Icon box media markup
    let iconBoxMedia;
    if (media && !removeBgCls) {
        iconBoxMedia = media === "image" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: iconBoxMediaClass,
            style: {
                backgroundImage: "url(" + imageSrc + ")"
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: iconBoxMediaClass,
            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: media
            })
        });
    } else if (removeBgCls && media === "image") {
        iconBoxMedia = /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${TradingIconCls + " " + iconBoxMediaClass}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: imageSrc,
                width: "40",
                height: "40",
                loading: "lazy",
                alt: title + " Logo"
            })
        });
    }
    // Render markup
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            href ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                passHref: true,
                prefetch: false,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    ...props,
                    className: "jsx-5066787e4325cbef" + " " + (props && props.className != null && props.className || `colorTheme ${iconBoxClass}`),
                    children: [
                        iconBoxMedia,
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "jsx-5066787e4325cbef" + " " + (iconBoxTitleClass || ""),
                            children: title
                        }),
                        iconBoxText
                    ]
                })
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ...props,
                className: "jsx-5066787e4325cbef" + " " + (props && props.className != null && props.className || iconBoxClass || ""),
                children: [
                    iconBoxMedia,
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "jsx-5066787e4325cbef" + " " + (iconBoxTitleClass || ""),
                        children: title
                    }),
                    iconBoxText
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "5066787e4325cbef",
                children: ".card.jsx-5066787e4325cbef{background:transparent;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transition-duration:.3s;-moz-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s}.card.jsx-5066787e4325cbef h3.jsx-5066787e4325cbef{font-weight:500;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#000!important;margin-top:10px}.card.jsx-5066787e4325cbef:hover{background-color:#fec32b}@media(max-width:768px){.colorTheme.jsx-5066787e4325cbef{padding:10px}}@media(max-width:767px){.card.jsx-5066787e4325cbef h3.fs-base.jsx-5066787e4325cbef{font-size:14px!important;margin-top:0px}}"
            })
        ]
    });
};
/* harmony default export */ const components_TrendingIconBox = (TrendingIconBox);

// EXTERNAL MODULE: ./styles/TrendingCategories.module.css
var TrendingCategories_module = __webpack_require__(1734);
var TrendingCategories_module_default = /*#__PURE__*/__webpack_require__.n(TrendingCategories_module);
;// CONCATENATED MODULE: ./components/TrendingCategories.js








const TrendingCategories = ()=>{
    const { 0: trendingCategoriesListing , 1: setTrendingCategoriesListing  } = (0,external_react_.useState)([]);
    const { 0: selectedCity , 1: setSelectedCity  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(async ()=>{
        let allCategoriesListing = await getTrendingCategoriesListing();
        //Convert array object into two-dimensional array object (matrix)
        //allCategoriesListing = listToMatrix(allCategoriesListing, 8)
        setTrendingCategoriesListing(allCategoriesListing);
    }, []);
    const getTrendingCategoriesListing = async ()=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    "token": ""
                })
            };
            var APIpath = `${process.env.BASE_URL}/api/protect/trending-categories`;
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
    (0,external_react_.useEffect)(()=>{
        //get search city name from local storage
        if (false) {}
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: (trendingCategoriesListing === null || trendingCategoriesListing === void 0 ? void 0 : trendingCategoriesListing.length) > 0 && /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: ` ptb-30 pt-0 full ${(TrendingCategories_module_default()).TrendingCategories}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Trending "
                            }),
                            " Categories"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "position-relative",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ListGroup_default()), {
                            as: "ul",
                            className: `mt-4 ${(TrendingCategories_module_default()).categorieslist}`,
                            children: (trendingCategoriesListing === null || trendingCategoriesListing === void 0 ? void 0 : trendingCategoriesListing.length) > 0 && trendingCategoriesListing.map((categoryItem, subItemIndex)=>{
                                /*#__PURE__*/ return jsx_runtime_.jsx((ListGroup_default()).Item, {
                                    as: "li",
                                    className: `${(TrendingCategories_module_default()).categorieslistLi}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_TrendingIconBox, {
                                        href: process.env.BASE_URL + "/" + selectedCity + "/" + categoryItem.slug,
                                        media: "image",
                                        mediaShape: "",
                                        type: "card-shadow",
                                        imageSrc: (categoryItem === null || categoryItem === void 0 ? void 0 : categoryItem.icon) || "/images/no-image.png",
                                        title: categoryItem.name,
                                        align: "center",
                                        className: `${(TrendingCategories_module_default()).TradingCardManinCls}`,
                                        removeBgCls: true,
                                        TradingIconCls: (TrendingCategories_module_default()).TradingIcon
                                    })
                                }, "unique-trending-" + subItemIndex);
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_TrendingCategories = (TrendingCategories);


/***/ })

};
;