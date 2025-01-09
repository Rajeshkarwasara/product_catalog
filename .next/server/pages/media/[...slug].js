(() => {
var exports = {};
exports.id = 9416;
exports.ids = [9416];
exports.modules = {

/***/ 3463:
/***/ ((module) => {

// Exports
module.exports = {
	"dymancTopHeroText": "DynamicPages_dymancTopHeroText__AFQdE",
	"dymancTopHeroTextInner": "DynamicPages_dymancTopHeroTextInner__1vU4h",
	"dymancPageMain": "DynamicPages_dymancPageMain__o4HmV",
	"publicationsHeroText": "DynamicPages_publicationsHeroText__5CSXa",
	"PublicationsLogo": "DynamicPages_PublicationsLogo__upqXP",
	"BusinessDetailsHeroLeft": "DynamicPages_BusinessDetailsHeroLeft__OGIze",
	"dymancPagesBgImg": "DynamicPages_dymancPagesBgImg__nzIGu",
	"dymancPagesBgImgHero": "DynamicPages_dymancPagesBgImgHero__Chd1F",
	"PartnerWhyIcon": "DynamicPages_PartnerWhyIcon__dXu7C",
	"BusinessDetailsHeroLefts": "DynamicPages_BusinessDetailsHeroLefts__wCHUW"
};


/***/ }),

/***/ 1817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);



const BlogCard = ({ type , size , href , img , badges , title , category , author , date , comments , text , light , className , ...props })=>{
    const extraClass = className ? ` ${className}` : "";
    console.log("Blog Imag--", img);
    // Wrapper css classes and image markup depending on card type
    let wrapperClass, cardImage, cardBodyClass;
    switch(type){
        case "horizontal":
            wrapperClass = `card card-horizontal border-0${extraClass}`;
            cardBodyClass = "card-body px-0 pt-0 pb-lg-5 pb-sm-4 pb-2";
            if (img) {
                cardImage = href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: href,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "card-img-top position-relative rounded-3 overflow-hidden me-sm-4 mb-sm-0 mb-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                src: img.src,
                                layout: "fill",
                                objectFit: "cover",
                                quality: 100,
                                alt: img.alt,
                                light: light ? 1 : 0
                            }),
                            badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "position-absolute end-0 top-0 pt-3 pe-3",
                                children: badges.map((badge, indx)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `d-table badge bg-${badge[0]} fs-sm mb-1`,
                                        children: badge[1]
                                    }, indx);
                                })
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card-img-top position-relative rounded-3 overflow-hidden me-sm-4 mb-sm-0 mb-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            src: img.src,
                            layout: "fill",
                            objectFit: "cover",
                            quality: 100,
                            alt: img.alt,
                            light: light ? 1 : 0
                        }),
                        badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "position-absolute end-0 top-0 pt-3 pe-3",
                            children: badges.map((badge, indx)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `d-table badge bg-${badge[0]} fs-sm mb-1`,
                                    children: badge[1]
                                }, indx);
                            })
                        })
                    ]
                });
            }
            break;
        case "card":
            wrapperClass = `card card-hover ${light ? "card-light" : "border-0 shadow-sm"} h-100${extraClass}`;
            cardBodyClass = "card-body pb-0";
            if (img) {
                cardImage = href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: href,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "card-img-top d-flex position-relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                src: img.src,
                                width: img.size[0],
                                height: img.size[1],
                                alt: img.alt,
                                light: light ? 1 : 0
                            }),
                            badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "position-absolute end-0 top-0 pt-3 pe-3",
                                children: badges.map((badge, indx)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `d-table badge bg-${badge[0]} fs-sm mb-1`,
                                        children: badge[1]
                                    }, indx);
                                })
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card-img-top d-flex position-relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            src: img.src,
                            width: img.size[0],
                            height: img.size[1],
                            alt: img.alt,
                            light: light ? 1 : 0
                        }),
                        badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "position-absolute end-0 top-0 pt-3 pe-3",
                            children: badges.map((badge, indx)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `d-table badge bg-${badge[0]} fs-sm mb-1`,
                                    children: badge[1]
                                }, indx);
                            })
                        })
                    ]
                });
            }
            break;
        case "card-horizontal":
            wrapperClass = `card card-horizontal card-hover ${light ? "card-light" : "border-0 shadow-sm"}${extraClass}`;
            cardBodyClass = "card-body";
            if (img) {
                cardImage = href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: href,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "card-img-top d-flex position-relative overflow-hidden",
                        children: [
                            img.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                src: img.src,
                                layout: "fill",
                                objectFit: "cover",
                                quality: 100,
                                alt: img.alt,
                                light: light ? 1 : 0
                            }),
                            badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "position-absolute end-0 top-0 pt-3 pe-3",
                                children: badges.map((badge, indx)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `d-table badge bg-${badge[0]} fs-sm mb-1`,
                                        children: badge[1]
                                    }, indx);
                                })
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card-img-top d-flex position-relative overflow-hidden",
                    children: [
                        img.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            src: img.src,
                            layout: "fill",
                            objectFit: "cover",
                            quality: 100,
                            alt: img.alt,
                            light: light ? 1 : 0
                        }),
                        badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "position-absolute end-0 top-0 pt-3 pe-3",
                            children: badges.map((badge, indx)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `d-table badge bg-${badge[0]} fs-sm mb-1`,
                                    children: badge[1]
                                }, indx);
                            })
                        })
                    ]
                });
            }
            break;
        default:
            wrapperClass = className;
            cardBodyClass = "py-3";
            if (img) {
                cardImage = href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: href,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "d-flex position-relative rounded-3 overflow-hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                src: img.src,
                                width: img.size[0],
                                height: img.size[1],
                                alt: img.alt,
                                light: light ? 1 : 0
                            }),
                            badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "position-absolute end-0 top-0 pt-3 pe-3",
                                children: badges.map((badge, indx)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `d-table badge bg-${badge[0]} fs-sm mb-1`,
                                        children: badge[1]
                                    }, indx);
                                })
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex position-relative rounded-3 overflow-hidden",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            src: img.src,
                            width: img.size[0],
                            height: img.size[1],
                            alt: img.alt,
                            light: light ? 1 : 0
                        }),
                        badges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "position-absolute end-0 top-0 pt-3 pe-3",
                            children: badges.map((badge, indx)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `d-table badge bg-${badge[0]} fs-sm mb-1`,
                                    children: badge[1]
                                }, indx);
                            })
                        })
                    ]
                });
            }
    }
    // Render markup
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        ...props,
        className: wrapperClass,
        children: [
            cardImage,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: cardBodyClass,
                children: [
                    category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: category.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: category.href,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: `${size === "lg" ? "fs-sm" : "fs-xs"} text-uppercase text-decoration-none`,
                                children: category.title
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${size === "lg" ? "fs-sm" : "fs-xs"} text-uppercase text-primary`,
                            children: category.title
                        })
                    }),
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: `${size === "lg" ? "h5" : "fs-base"} pt-1 mb-2`,
                        children: href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: href,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: light ? "nav-link-light" : "nav-link",
                                children: title
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: light ? "text-light opacity-80" : "text-nav",
                            children: title
                        })
                    }),
                    text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${size === "lg" ? "fs-base" : "fs-sm"} mb-2 ${light ? "text-light opacity-50" : "text-muted"}`,
                        children: text
                    }),
                    type !== "card" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: author ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: author.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: author.href,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "d-flex align-items-center text-decoration-none pt-2",
                                    children: [
                                        author.img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "position-relative flex-shrink-0 rounded-circle overflow-hidden me-2",
                                            style: size === "lg" ? {
                                                width: "48px",
                                                height: "48px"
                                            } : {
                                                width: "44px",
                                                height: "44px"
                                            },
                                            children: img.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                src: author.img,
                                                layout: "fill",
                                                objectFit: "cover",
                                                quality: 90,
                                                alt: author.name,
                                                light: light ? 1 : 0
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: `fs-sm ${light ? "text-light opacity-80" : "text-nav"} lh-base mb-1`,
                                                    children: author.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `d-flex ${light ? "text-light opacity-60" : "text-body"} fs-xs`,
                                                    children: [
                                                        date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "me-2 pe-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-date-icon"
                                                                }),
                                                                date
                                                            ]
                                                        }),
                                                        comments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-chat-circle opacity-70 me-1"
                                                                }),
                                                                comments
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex align-items-center pt-2",
                                children: [
                                    author.img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "position-relative flex-shrink-0 rounded-circle overflow-hidden me-2",
                                        style: size === "lg" ? {
                                            width: "48px",
                                            height: "48px"
                                        } : {
                                            width: "44px",
                                            height: "44px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            src: author.img,
                                            layout: "fill",
                                            objectFit: "cover",
                                            quality: 90,
                                            alt: author.name,
                                            light: light ? 1 : 0
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: `fs-sm ${light ? "text-light opacity-80" : "text-nav"} lh-base mb-1`,
                                                children: author.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `d-flex ${light ? "text-light opacity-60" : "text-body"} fs-xs`,
                                                children: [
                                                    date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "me-2 pe-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-date-icon"
                                                            }),
                                                            date
                                                        ]
                                                    }),
                                                    comments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-chat-circle opacity-70 me-1"
                                                            }),
                                                            comments
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `d-flex ${light ? "text-light opacity-60" : "text-body"} fs-xs`,
                            children: [
                                date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "me-2 pe-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-date-icon"
                                        }),
                                        date
                                    ]
                                }),
                                comments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-chat-circle opacity-70 me-1"
                                        }),
                                        comments
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            type === "card" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: author ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: author.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: author.href,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "card-footer d-flex align-items-center text-decoration-none border-top-0 pt-2 mb-1",
                            children: [
                                author.img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "position-relative flex-shrink-0 rounded-circle overflow-hidden me-2",
                                    style: size === "lg" ? {
                                        width: "48px",
                                        height: "48px"
                                    } : {
                                        width: "44px",
                                        height: "44px"
                                    },
                                    children: img.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        src: author.img,
                                        layout: "fill",
                                        objectFit: "cover",
                                        quality: 90,
                                        alt: author.name,
                                        light: light ? 1 : 0
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: `fs-sm ${light ? "text-light opacity-80" : "text-nav"} lh-base mb-1`,
                                            children: author.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `d-flex ${light ? "text-light opacity-60" : "text-body"} fs-xs`,
                                            children: [
                                                date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "me-2 pe-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-date-icon"
                                                        }),
                                                        date
                                                    ]
                                                }),
                                                comments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-chat-circle opacity-70 me-1"
                                                        }),
                                                        comments
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card-footer d-flex align-items-center text-decoration-none border-top-0 pt-2 mb-1",
                        children: [
                            author.img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "position-relative flex-shrink-0 rounded-circle overflow-hidden me-2",
                                style: size === "lg" ? {
                                    width: "48px",
                                    height: "48px"
                                } : {
                                    width: "44px",
                                    height: "44px"
                                },
                                children: img.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    src: author.img,
                                    layout: "fill",
                                    objectFit: "cover",
                                    quality: 90,
                                    alt: author.name,
                                    light: light ? 1 : 0
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: `fs-sm ${light ? "text-light opacity-80" : "text-nav"} lh-base mb-1`,
                                        children: author.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `d-flex ${light ? "text-light opacity-60" : "text-body"} fs-xs`,
                                        children: [
                                            date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "me-2 pe-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-date-icon"
                                                    }),
                                                    date
                                                ]
                                            }),
                                            comments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-chat-circle opacity-70 me-1"
                                                    }),
                                                    comments
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `d-flex ${light ? "text-light opacity-60" : "text-body"} fs-xs`,
                    children: [
                        date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "me-2 pe-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fi-date-icon"
                                }),
                                date
                            ]
                        }),
                        comments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fi-chat-circle opacity-70 me-1"
                                }),
                                comments
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);


/***/ }),

/***/ 4086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5698);


const GalleryItem = ({ thumb , video , imgAlt , caption , light , className , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        ...props,
        "data-sub-html": `<h6 class='fs-sm text-light'>${imgAlt ? imgAlt : caption}</h6>`,
        className: `gallery-item d-flex btn btn-lg ${video ? " video-item" : ""}${className ? ` ${className}` : ""}`,
        children: [
            thumb && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: thumb[0],
                width: thumb[1],
                height: thumb[2],
                alt: caption ? caption : imgAlt,
                light: light ? 1 : 0
            }),
            caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "gallery-item-caption",
                children: caption
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryItem);


/***/ }),

/***/ 7427:
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
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2697);
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lightgallery_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1636);
/* harmony import */ var _components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8184);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5698);
/* harmony import */ var _styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3463);
/* harmony import */ var _styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(329);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(127);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_AboutUsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4440);
/* harmony import */ var _components_BlogCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1817);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_GalleryItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4086);
/* harmony import */ var lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2556);
/* harmony import */ var lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_Services__WEBPACK_IMPORTED_MODULE_7__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_Services__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const MediaPages = ({ pageContent , other , ...props })=>{
    console.log("pageContent -------------", pageContent);
    const { 0: getTestimonialList , 1: setTestimonialList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.testimonials);
    const Pathquery = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const PageUrl = Pathquery.asPath;
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: pageContent.meta_title,
                description: pageContent.meta_description || "",
                keyword: pageContent.meta_keywords || "",
                url: PageUrl,
                city: "",
                area: "",
                companyName: "",
                SEOIndexing: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: pageContent.title,
                activeNav: "Pages",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "full mediaHero",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "full mediaHeroText",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "mb-2",
                                        children: pageContent.title
                                    }),
                                    pageContent.page_slug == "aboutus" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-0",
                                        children: `Dial Me Now Online Pvt. Ltd., Jaipur is an established online & offline (telephonic & print) information provider in Rajasthan. We are Rajasthan's first own local search engine.`
                                    }) : null
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: `full ${(_styles_DynamicPages_module_css__WEBPACK_IMPORTED_MODULE_15___default().dymancPageMain)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10___default()), {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        xs: 12,
                                        md: 8,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    (pageContent === null || pageContent === void 0 ? void 0 : pageContent.media_type) == "2" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "video-has",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lightgallery_react__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            plugins: [
                                                                (lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_14___default())
                                                            ],
                                                            zoomFromOrigin: false,
                                                            licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                                                            youTubePlayerParams: {
                                                                modestbranding: 1,
                                                                showinfo: 0
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GalleryItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                href: pageContent.image_video,
                                                                video: true,
                                                                thumb: [
                                                                    "/images/banner/dialme_video_banner.webp",
                                                                    735,
                                                                    305
                                                                ],
                                                                caption: "",
                                                                className: "rounded p-0 h-100"
                                                            })
                                                        })
                                                    }),
                                                    (pageContent === null || pageContent === void 0 ? void 0 : pageContent.media_type) == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        src: pageContent.image_video,
                                                        width: 700,
                                                        height: 460,
                                                        alt: "Square image",
                                                        resizemode: "cover"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        as: "section",
                                                        className: "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: pageContent.description
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        xs: 12,
                                        md: 4,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: "LatestHeroHead",
                                                children: "Latest Media Feeds"
                                            }),
                                            (other === null || other === void 0 ? void 0 : other.length) > 0 && other.map((val, indx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mediaRight",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                        ref: imgRef,
                                                        type: "card-horizontal",
                                                        href: process.env.BASE_URL + "/media/" + val.slug + "/" + val.id,
                                                        img: {
                                                            src: val.media_type == "1" ? val.image_video : "/images/no-image.png",
                                                            alt: "Image"
                                                        },
                                                        title: val.title,
                                                        date: val.date
                                                    })
                                                })
                                            )
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        SwiperSlidePaddingCls: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_16___default().SwiperPadding)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AboutUsSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaPages);
async function getServerSideProps(ct) {
    const { slug  } = ct.query;
    console.log("dynamic_pages --------", slug);
    if (slug.length >= 2) {
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/media-details-page`, {
            method: "POST",
            body: JSON.stringify({
                "url": slug[0],
                "id": slug[1]
            })
        });
        let srJson = await srRes.json();
        console.log(srJson, " ---------- srJson ------------------");
        if (srJson.status == 200) {
            return {
                props: {
                    pageContent: srJson.data,
                    other: srJson.other
                }
            };
        } else {
            return {
                redirect: {
                    permanent: false,
                    destination: `/404`
                }
            };
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: `/404`
            }
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2556:
/***/ ((module) => {

"use strict";
module.exports = require("lightgallery/plugins/video");

/***/ }),

/***/ 2697:
/***/ ((module) => {

"use strict";
module.exports = require("lightgallery/react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,9340,8184,329,4440,127], () => (__webpack_exec__(7427)));
module.exports = __webpack_exports__;

})();