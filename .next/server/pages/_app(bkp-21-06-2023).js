"use strict";
(() => {
var exports = {};
exports.id = 4296;
exports.ids = [4296];
exports.modules = {

/***/ 2360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4932);
/* harmony import */ var react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1359);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _front_methods_HomeFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8825);
/* harmony import */ var _components_shimmer_Shimmer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9807);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
react_toastify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const Finder = ({ Component , pageProps , citiesData , defaultCityRecords  })=>{
    const { 0: isLoading , 1: setLoadingState  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const { 0: ipBlocked , 1: setIPBlocked  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    // Bind NProgress to Next Router events (Page loading animation)
    const Layout = Component.layout || (({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        //console.log("__________CALLS EVERY PAGE_____________________")
        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeStart", ()=>{
            setLoadingState(true);
        //console.log("sdasd sadasd_____________")
        });
        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeComplete", ()=>{
            setLoadingState(false);
            Promise.resolve((0,_front_methods_HomeFunction__WEBPACK_IMPORTED_MODULE_11__/* .AnalyticsData */ .ky)()).then((res, err)=>{
                if ((res === null || res === void 0 ? void 0 : res.status) == "403") {
                    setIPBlocked(true);
                }
            });
        });
        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeError", ()=>setLoadingState(false)
        );
        return ()=>{
            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off("routeChangeStart", ()=>setLoadingState(true)
            );
            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off("routeChangeComplete", ()=>setLoadingState(false)
            );
            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off("routeChangeError", ()=>setLoadingState(false)
            );
        };
    }, [
        (next_router__WEBPACK_IMPORTED_MODULE_2___default().events)
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        let ignore = false;
        Promise.resolve((0,_front_methods_HomeFunction__WEBPACK_IMPORTED_MODULE_11__/* .AnalyticsData */ .ky)()).then((res, err)=>{
            if ((res === null || res === void 0 ? void 0 : res.status) == "403") {
                setIPBlocked(true);
            }
        });
        return ()=>{
            ignore = true;
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_6__.SessionProvider, {
        session: pageProps === null || pageProps === void 0 ? void 0 : pageProps.session,
        // Re-fetch session every 5 minutes
        refetchInterval: 5 * 60,
        // Re-fetches session when window is focused
        refetchOnWindowFocus: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "viewport",
                            content: "minimum-scale=1, initial-scale=1.0, width=device-width, shrink-to-fit=no,maximum-scale=5,user-scalable=0, viewport-fit=cover"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "ie=edge"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: "Dailmenow | Directory & Listings"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "author",
                            content: "Dialmenow"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/favicon/apple-touch-icon.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon/favicon-32x32.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon/favicon-16x16.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "manifest",
                            href: "/favicon/site.webmanifest"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "mask-icon",
                            color: "#5bbad5",
                            href: "/favicon/safari-pinned-tab.svg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "msapplication-TileColor",
                            content: "#766df4"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "theme-color",
                            content: "#ffffff"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "robots",
                            content: "noindex,nofollow"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "google-signin-client_id",
                            content: "626769812922-huvhs8k0rvplb7ia8g0eqnaktn7b68ac.apps.googleusercontent.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "google-signin-scope",
                            content: "https://www.googleapis.com/auth/analytics.readonly"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "ahrefs-site-verification",
                            content: "9af6dcef27610931f2602941bec708919671ff0182e0359a0ddb64b82634c14a"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                    strategy: "lazyOnload",
                    src: `https://www.googletagmanager.com/gtag/js?id=${"UA-19566897-1"}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                    id: "google-analytics",
                    strategy: "lazyOnload",
                    children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${"UA-19566897-1"}', {
              page_path: window.location.pathname,
            });
                `
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                    strategy: "lazyOnload",
                    children: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "hby9qofv64");
          `
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: "https://accounts.google.com/gsi/client",
                    rel: "preconnect"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: `https://maps.google.com/maps/api/js?key=${"AIzaSyDZTQUeAyPTHiUsoVBR_hz93cN78ndiJ0o"}&libraries=places`,
                    strategy: "lazyOnload",
                    rel: "preconnect"
                }),
                ipBlocked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "alert alert-danger text-center",
                                    role: "alert",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "alert-heading",
                                            children: "Access Denied"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Sorry, your access to this website has been blocked due to security concerns. If you believe this is an error, please contact the website administrator for further assistance."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-envelope mr-2"
                                                }),
                                                " Email:",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "mailto:info@dialmenow.in",
                                                    children: "info@dialmenow.in"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-phone mr-2"
                                                }),
                                                " Phone:",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "tel:+91 9252392523",
                                                    children: "+91 9252392523"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            newestOnTop: true,
                            closeOnClick: true,
                            rtl: false
                        }),
                        isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shimmer_Shimmer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps,
                                citiesData: citiesData,
                                defaultCityRecords: defaultCityRecords
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            showOffset: 600,
                            duration: 800,
                            easing: "easeInOutQuart",
                            tooltip: "Top"
                        })
                    ]
                })
            ]
        })
    });
};
Finder.getInitialProps = async (ctx)=>{
    let allData = await (0,_front_methods_HomeFunction__WEBPACK_IMPORTED_MODULE_11__/* .CitiesData */ .dv)();
    return {
        citiesData: (allData === null || allData === void 0 ? void 0 : allData.cities) || [],
        defaultCityRecords: (allData === null || allData === void 0 ? void 0 : allData.defaultCity) || {}
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 4932:
/***/ ((module) => {

module.exports = require("react-bootstrap/SSRProvider");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 9777:
/***/ ((module) => {

module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9807,8825,1745], () => (__webpack_exec__(2360)));
module.exports = __webpack_exports__;

})();