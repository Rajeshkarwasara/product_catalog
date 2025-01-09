exports.id = 8556;
exports.ids = [8556];
exports.modules = {

/***/ 5648:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonialclient": "Testimonial_testimonialclient__CMvMB",
	"mainSharawanHoon": "Testimonial_mainSharawanHoon__rhQ_O",
	"ourtestimonialbox": "Testimonial_ourtestimonialbox__LKxYC",
	"clientsays": "Testimonial_clientsays__DXlVi",
	"ourtestimonialboxright": "Testimonial_ourtestimonialboxright__BQzW1",
	"SwiperSlidePagination": "Testimonial_SwiperSlidePagination__12kTw",
	"btnPrev": "Testimonial_btnPrev__L55Jr",
	"btnNext": "Testimonial_btnNext__0Qr6y",
	"SwiperControlors": "Testimonial_SwiperControlors__e_kEg",
	"btn-prev": "Testimonial_btn-prev__RIIEW",
	"btn-next": "Testimonial_btn-next__fpTFy",
	"ourtestimonial": "Testimonial_ourtestimonial__27Buv",
	"SwiperControlorsCls": "Testimonial_SwiperControlorsCls__j1RR1",
	"publications": "Testimonial_publications__L21PP"
};


/***/ }),

/***/ 2192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Blockquote = (props)=>{
    const thumbShape = props.author.thumbShape ? props.author.thumbShape : "rounded", thumbClass = `flex-shrink-0 bg-repeat-0 bg-position-center bg-size-cover ${thumbShape}`, thumbSrc = props.author.thumbSrc, thumbSize = props.author.thumbSize + "px", name = props.author.name, position = props.author.position, light = props.light ? " text-light" : "", alignment = props.align ? " text-" + props.align : "", alignmentFooter = props.align ? " justify-content-" + props.align : "", extraClass = props.className ? " " + props.className : "", style = props.style, children = props.children;
    // Blockquote footer
    let footer;
    if (thumbSrc) {
        footer = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: `d-flex text-start align-items-center${alignmentFooter}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: thumbClass,
                    style: {
                        width: thumbSize,
                        height: thumbSize,
                        backgroundImage: "url(" + thumbSrc + ")"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ps-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            className: `fs-base mb-0${light}`,
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `opacity-50 fw-normal fs-sm${light}`,
                            children: position
                        })
                    ]
                })
            ]
        });
    } else if (!thumbSrc && position) {
        footer = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                    className: `fs-base mb-0${light}`,
                    children: name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `opacity-50 fw-normal fs-sm${light}`,
                    children: position
                })
            ]
        });
    } else {
        footer = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
            className: `blockquote-footer${light}`,
            children: name
        });
    }
    // Render markup
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
        className: `blockquote${extraClass}${alignment}`,
        style: style,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `d-inline-block pb-1 pt-0 mb-3${light}`,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blockquote);


/***/ }),

/***/ 8556:
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
/* harmony import */ var _components_Blockquote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2192);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5648);
/* harmony import */ var _styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_IconBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9340);
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2697);
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lightgallery_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2556);
/* harmony import */ var lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3877);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _components_IconBox__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_8__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _components_IconBox__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const OurTestimonial = ({ TestimonialList , SwiperControlorsCls =""  })=>{
    const galleryEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: testimonialItems , 1: setTestimonialItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (testimonialItems.length <= 0) {
            let allTestimonilas = await testimonials();
            setTestimonialItems(allTestimonilas);
        }
        if (galleryEl.current) {
            galleryEl.current.addEventListener("touchstart", handleTouch, {
                passive: true
            });
            return ()=>{
                galleryEl.current.removeEventListener("touchstart", handleTouch);
            };
        }
    }, []);
    const testimonials = async ()=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    "token": ""
                })
            };
            var APIpath = `${process.env.BASE_URL}/api/protect/user-testimonials`;
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
    if ((testimonialItems === null || testimonialItems === void 0 ? void 0 : testimonialItems.length) > 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: `full position-relative ${(_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().ourtestimonial)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Client"
                                }),
                                " Testimonial"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                            modules: [
                                swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation,
                                swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination
                            ],
                            slidesPerView: 1,
                            navigation: {
                                prevEl: "#testomonialprev3",
                                nextEl: "#testomonialnext3"
                            },
                            pagination: {
                                el: "#testomonialPagination",
                                clickable: true,
                                dynamicBullets: true
                            },
                            grabCursor: true,
                            children: (testimonialItems === null || testimonialItems === void 0 ? void 0 : testimonialItems.length) > 0 && testimonialItems.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().ourtestimonialbox),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-md-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().testimonialclient),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_IconBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            media: "image",
                                                            mediaShape: "circle",
                                                            imageSrc: val.image,
                                                            title: val.name,
                                                            text: val.designation,
                                                            className: "pb-0 mb-0",
                                                            mediaClassName: (_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().mainSharawanHoon),
                                                            titleSize: " "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-md-9",
                                                    children: val.videoPath == undefined || val.videoPath == "" || val.videoPath == null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().testimonialclientright),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blockquote__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                            className: (_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().clientsays),
                                                            author: {
                                                                name: ""
                                                            },
                                                            children: val.description
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lightgallery_react__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        ref: galleryEl,
                                                        plugins: [
                                                            (lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_7___default())
                                                        ],
                                                        licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "data-lg-size": "1280-720",
                                                            "data-video": val.dataVideoObject,
                                                            "data-poster": "/images/home/testimonial-video-img.png",
                                                            "data-sub-html": `<h4>${val.name}</h4>`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    src: "/images/home/testimonial-video-img.png",
                                                                    height: "160",
                                                                    width: "250",
                                                                    alt: val.name
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, index)
                            )
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `d-flex justify-content-center  ${(_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().SwiperControlors)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    id: "testomonialprev3",
                                    variant: "prev",
                                    className: `position-relative mx-2  ${(_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().btnPrev)}`,
                                    arialLabel: "Previous"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    id: "testomonialnext3",
                                    variant: "next",
                                    className: `position-relative mx-2  ${(_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().btnNext)}`,
                                    arialLabel: "Next"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "testomonialPagination",
                            className: `position-relative bottom-0 pt-0 mt-0 mb-lg-0 ${(_styles_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_10___default().SwiperSlidePagination)}`
                        })
                    ]
                })
            })
        });
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurTestimonial);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;