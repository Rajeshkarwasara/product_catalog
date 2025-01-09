exports.id = 8006;
exports.ids = [8006];
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

/***/ 924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const InstaGramPost = ()=>{
    const { 0: post , 1: setPost  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetchPosts();
    }, []);
    const fetchPosts = async ()=>{
        try {
            let res = await fetch("https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption,thumbnail_url,likes,media_type=VIDEO&access_token=" + "IGQWROVmhNSERfTVhXOGoydkFmdjNOREtHUXJXUjhlU1lUZAS0wbjBkREZADY2NFX2hkdlFaaS1jS0hOdXFDWnNTUExITU93OTZA4eFg4ZAHlfdk1maC1vaW85TmxBV0VQLXRlNnkzV3VKc2paTkpZANmI4VFdSNlVPalEZD");
            let srJson = await res.json();
            if (srJson === null || srJson === void 0 ? void 0 : srJson.data) {
                var ref;
                setPost(srJson === null || srJson === void 0 ? void 0 : (ref = srJson.data) === null || ref === void 0 ? void 0 : ref.splice(0, 15));
            }
        } catch (err) {
            console.log("Insta feed not working");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "full instafollow py-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    className: "mb-4",
                    children: [
                        "Follow us on ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Instagram"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "position-relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                            modules: [
                                swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
                                swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination
                            ],
                            slidesPerView: 1,
                            navigation: {
                                prevEl: "#Instasprev4",
                                nextEl: "#Instasnext4"
                            },
                            pagination: {
                                el: "#Instaspagination",
                                clickable: true,
                                dynamicBullets: true
                            },
                            grabCursor: true,
                            breakpoints: {
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 10
                                },
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 15
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                },
                                1100: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                }
                            },
                            children: (post === null || post === void 0 ? void 0 : post.length) > 0 && (post === null || post === void 0 ? void 0 : post.map((val)=>{
                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: val === null || val === void 0 ? void 0 : val.permalink,
                                        "arial-label": val === null || val === void 0 ? void 0 : val.caption,
                                        target: "_blank",
                                        className: "px-2",
                                        children: (val === null || val === void 0 ? void 0 : val.media_type) == "VIDEO" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: val === null || val === void 0 ? void 0 : val.thumbnail_url,
                                            height: "293",
                                            width: "293",
                                            alt: val === null || val === void 0 ? void 0 : val.caption
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: val === null || val === void 0 ? void 0 : val.media_url,
                                            height: "293",
                                            width: "293",
                                            alt: val === null || val === void 0 ? void 0 : val.caption
                                        })
                                    })
                                }, val === null || val === void 0 ? void 0 : val.id);
                            }))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                            id: "Instasprev4",
                            variant: "prev",
                            "aria-label": "Previous"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                            id: "Instasnext4",
                            variant: "next",
                            "aria-label": "Next"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "Instaspagination",
                    className: `position-relative bottom-0 pt-0 mt-0 mb-lg-0`
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstaGramPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;