"use strict";
(() => {
var exports = {};
exports.id = 8459;
exports.ids = [8459];
exports.modules = {

/***/ 7276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1636);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GuestBlogCardOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8961);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5698);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8184);
/* harmony import */ var _styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9542);
/* harmony import */ var _styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4692);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(329);
/* harmony import */ var _components_AboutUsSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4440);
/* harmony import */ var _components_OurTestimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Services__WEBPACK_IMPORTED_MODULE_11__, _components_OurTestimonial__WEBPACK_IMPORTED_MODULE_13__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Services__WEBPACK_IMPORTED_MODULE_11__, _components_OurTestimonial__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const GuestBlog = ({ csrfToken , testimonials  })=>{
    const { 0: activeKey , 1: setActiveKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("guest-blog");
    const { 0: palnAmt , 1: setPlanAmt  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const PageUrl = query.asPath;
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)(); //use login session
    const partnerWithUsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const scrollPageWrite = (e)=>{
        //console.log("writeReviewRef",e)
        partnerWithUsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        guestAmt();
    }, []);
    const guestAmt = async ()=>{
        const dataBody = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        };
        const resRes = await fetch(`${process.env.BASE_URL}/api/protect/guest-blogs-amt`, dataBody);
        const resultRes = await resRes.json();
        setPlanAmt(resultRes.amt);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: "Guest blog",
                description: "Guest blog with Dialmenow. High Quality Guest Posting Services. Dial Me Now Online Pvt. Ltd. is an established offline (telephonic and print) and online (Website, WAP site & App) information provider in Rajasthan. We are Rajasthan\u2019s first own local search engine.",
                keyword: "guest blog, Dialmenow yellow pages",
                url: PageUrl,
                city: "",
                area: "",
                companyName: "",
                SEOIndexing: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageTitle: "Guest Blog",
                activeNav: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-0 mb-md-4 py-5 pt-0",
                    ref: partnerWithUsRef,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuestBlogCardOverlay__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            img: {
                                src: "/images/banner/blog-banner.jpg",
                                alt: "Background image"
                            },
                            palnAmount: palnAmt,
                            csrfToken: csrfToken,
                            title: "Your Words, Our Platform Start Guest Blogging with Us Make an Impact",
                            category: "Guest Blog",
                            className: "rounded-0 ",
                            overlay: true,
                            ContainerCls: "container",
                            SmallAdvetiseCls: (_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().SmallAdvetise),
                            session: session,
                            loading: "eager"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: `full ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().businessPartnership)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                        md: 6,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "mb-2 mb-sm-2 mb-md-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Benefits"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                as: "ul",
                                                className: "border-0",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Amplify Your Reach:"
                                                                    }),
                                                                    " Share your expertise with our engaged audience, expanding your influence beyond your own platform."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Establish Authority:"
                                                                    }),
                                                                    " Showcase your knowledge and establish yourself as an industry thought leader through our reputable platform."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Networking Opportunities:"
                                                                    }),
                                                                    " Connect with fellow bloggers, businesses, and readers, fostering valuable relationships."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Targeted Audience:"
                                                                    }),
                                                                    " Reach a niche audience interested in your expertise, boosting the relevance of your content."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Targeted Audience:"
                                                                    }),
                                                                    "Reach a niche audience interested in your expertise, boosting the relevance of your content."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Quality Backlinks:"
                                                                    }),
                                                                    " Gain high-quality backlinks to your own website, boosting your SEO and online presence."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Diverse Content: "
                                                                    }),
                                                                    "Contribute to diverse content topics and categories, showcasing your versatility as a writer."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Professional Exposure:"
                                                                    }),
                                                                    " Showcase your writing skills on a well-designed platform, enhancing your professional portfolio."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Lifetime Value:"
                                                                    }),
                                                                    " Enjoy lifetime exposure for a one-time fee of just Rs. 2100, providing ongoing benefits."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                                                        as: "li",
                                                        className: `d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().blogDetailsLi)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-check me-2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: " Interactive Engagement:"
                                                                    }),
                                                                    " Engage with our audience through comments and discussions on your guest post."
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: `full ptb-50 ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhy)}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Why should your blog with Dialmenow"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `text-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyP)}`,
                                        children: "Dialmenow enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
                                        className: "mt-4 px-lg-5 mx-lg-5 px-md-0 mx-md-0 px-sm-0 mx-sm-0 px-xs-0 mx-xs-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                                md: 4,
                                                sm: 6,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `h-sm-100 h-md-100 h-auto d-flex align-items-center ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyBox)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: ` ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyIcon)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                src: "/images/partner-withus/PartnerWhyIconOne.svg",
                                                                width: 46,
                                                                height: 46,
                                                                alt: "#",
                                                                loading: "eager"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: ` ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyText)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "mb-0",
                                                                    children: "1000+ cities"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0",
                                                                    children: "in India"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                                md: 4,
                                                sm: 6,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `h-sm-100 h-md-100 h-auto d-flex align-items-center mt-3 mt-sm-0 mt-md-0 ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyBox)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: ` ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyIcon)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                src: "/images/partner-withus/PartnerWhyIconTwo.svg",
                                                                width: 57,
                                                                height: 56,
                                                                alt: "#",
                                                                loading: "eager"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: ` ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyText)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "mb-0",
                                                                    children: "3 lakh+"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0",
                                                                    children: "partner with us "
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
                                                md: 4,
                                                sm: 12,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `h-sm-100 h-md-100 h-auto d-flex align-items-center mt-3 mt-sm-3 mt-md-0 ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyBox)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: ` ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyIcon)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                src: "/images/partner-withus/PartnerWhyIconThree.svg",
                                                                width: 41,
                                                                height: 46,
                                                                alt: "#",
                                                                loading: "eager"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: ` ${(_styles_GuestBlog_module_css__WEBPACK_IMPORTED_MODULE_14___default().PartnerWhyText)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "mb-0",
                                                                    children: "5k+"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0",
                                                                    children: "monthly listings"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OurTestimonial__WEBPACK_IMPORTED_MODULE_13__["default"], {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AboutUsSection__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GuestBlog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2556:
/***/ ((module) => {

module.exports = require("lightgallery/plugins/video");

/***/ }),

/***/ 2697:
/***/ ((module) => {

module.exports = require("lightgallery/react");

/***/ }),

/***/ 3182:
/***/ ((module) => {

module.exports = require("localforage");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

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

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 9777:
/***/ ((module) => {

module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,9340,8184,329,4440,4301,8556,8961], () => (__webpack_exec__(7276)));
module.exports = __webpack_exports__;

})();