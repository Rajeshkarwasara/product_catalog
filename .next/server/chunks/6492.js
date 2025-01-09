"use strict";
exports.id = 6492;
exports.ids = [6492];
exports.modules = {

/***/ 6492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8582);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__);




const CardImage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 1634).then(__webpack_require__.bind(__webpack_require__, 1634))
, {
    loadableGenerated: {
        modules: [
            "../components/PropertyCard.js -> " + "./partials/CardImageFeatured"
        ]
    }
});
const CardImageSlider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 384).then(__webpack_require__.bind(__webpack_require__, 384))
, {
    loadableGenerated: {
        modules: [
            "../components/PropertyCard.js -> " + "./partials/CardImageSlider"
        ]
    }
});
const PropertyCard = ({ images , href , title , category , location , price , badges , wishlistButton , dropdown , footer , horizontal , light , className , ratingsShow =true , ratingNews =false , mobilenumbers =true , date ="" , totalRating , totalReview =0 , ...props })=>{
    let styles = {
        newslink: {
            color: "#000000",
            fontSize: "15px",
            fontWeight: "500",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: "2",
            lineHeight: "22px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical"
        },
        calendarCustom: {
            display: "flex",
            alignItems: "center",
            color: "#6A7584",
            fontSize: "14px"
        },
        calendarCustomI: {
            position: "relative",
            top: "0px",
            fontSize: "16px"
        },
        "@media (max-width: 500px)": {
            display: "none"
        }
    };
    const horizontalClass = horizontal ? " card-horizontal" : "", extraClass = className ? ` ${className}` : "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: light ? `card card-light card-hover${horizontalClass}${extraClass}` : `card card-hover shadow-sm border-0${horizontalClass}${extraClass}`,
        children: [
            images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: images.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardImageSlider, {
                    horizontal: horizontal ? true : false,
                    images: images,
                    href: href,
                    badges: badges,
                    wishlistButton: wishlistButton,
                    light: light ? 1 : 0
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardImage, {
                    horizontal: horizontal ? true : false,
                    images: images,
                    href: href,
                    badges: badges,
                    wishlistButton: wishlistButton,
                    light: light ? 1 : 0
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card-body position-relative p-2 p-lg-3 p-md-3 p-sm-3",
                children: [
                    dropdown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default().Toggle), {
                                variant: `${light ? "translucent-light" : "light shadow-sm"} btn-icon btn-xs rounded-circle`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fi-dots-vertical"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default().Menu), {
                                variant: light ? "dark" : "",
                                className: "my-1",
                                children: dropdown.map((item, indx)=>{
                                    if (item.href) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: item.href,
                                            passHref: true,
                                            prefetch: false,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default().Item), {
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
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default().Item), {
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
                        className: "h6 mb-1",
                        children: href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: href,
                            passHref: true,
                            prefetch: false,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: light ? "nav-link-light stretched-link newslink" : "nav-link stretched-link newslink",
                                style: styles.newslink,
                                "arial-label": title,
                                children: title
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: light ? "text-light" : "",
                            children: title
                        })
                    }),
                    totalReview > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "place-rating",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fi-star-filled me-2"
                            }),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    totalRating,
                                    " (",
                                    totalReview,
                                    ")"
                                ]
                            })
                        ]
                    }),
                    location && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: `mb-0 fs-sm ${light ? "text-light opacity-50" : "text-muted"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fi-map-pin me-2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: location
                            })
                        ]
                    }),
                    price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "fw-bold",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `fi-cash mt-n1 me-2 lead align-middle${light ? " opacity-50" : " opacity-70"}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: light ? "opacity-70" : "",
                                children: price
                            })
                        ]
                    }),
                    mobilenumbers && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: horizontal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: footer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `d-flex align-items-center  justify-content-sm-start border-top${light ? " border-light" : ""} pt-3 pb-2 mt-3 text-nowrap`,
                                children: footer.map((item, indx)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "d-inline-block me-4 fs-sm",
                                        children: [
                                            item[1],
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-phone"
                                                    }),
                                                    " Mobile Number"
                                                ]
                                            })
                                        ]
                                    }, indx);
                                })
                            })
                        })
                    })
                ]
            }),
            mobilenumbers && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: !horizontal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: footer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card-footer d-flex align-items-center mx-3 text-nowrap",
                        children: footer.map((item, indx)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "d-inline-block mx-1 fs-sm",
                                children: [
                                    item[1],
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-phone me-2"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Mobile Number "
                                            })
                                        ]
                                    })
                                ]
                            }, indx);
                        })
                    })
                })
            }),
            ratingNews && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: footer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " d-flex align-items-center text-nowrap py-0 px-md-3 px-sm-3 px-1",
                    children: footer.map((item, indx)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "d-inline-block mx-1 fs-sm w-100 border-top pt-2 pb-3",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                style: styles.calendarCustom,
                                href: "#",
                                className: "calendarCustom py-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        style: styles.calendarCustomI,
                                        className: "fi-date-icon me-2"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            date,
                                            " "
                                        ]
                                    })
                                ]
                            })
                        }, indx);
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyCard);


/***/ })

};
;