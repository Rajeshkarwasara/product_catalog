exports.id = 7616;
exports.ids = [7616];
exports.modules = {

/***/ 3256:
/***/ ((module) => {

// Exports
module.exports = {
	"presencePackages": "ComboPackages_presencePackages__BkcdA",
	"presenceBtnSpace": "ComboPackages_presenceBtnSpace__Z_Sgf",
	"presenceBtnSecondary": "ComboPackages_presenceBtnSecondary__lHVcd",
	"presenceBtnPrimary": "ComboPackages_presenceBtnPrimary__ALo9Q",
	"presencePackagesCard": "ComboPackages_presencePackagesCard__H8L_z",
	"SwiperSlidePagination": "ComboPackages_SwiperSlidePagination__X389r"
};


/***/ }),

/***/ 7616:
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
/* harmony import */ var _components_IconBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9340);
/* harmony import */ var _styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3256);
/* harmony import */ var _styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__, _components_IconBox__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__, _components_IconBox__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ComboPackages = ({ presencePackagesCls =""  })=>{
    const { 0: loginStatus , 1: SetLoginStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)(); //use login session 
    const { 0: comboPackagesListings , 1: setComboPackagesListings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        let allPackages = await comboPackages();
        setComboPackagesListings(allPackages);
    }, []);
    const comboPackages = async ()=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    "token": ""
                })
            };
            var APIpath = `${process.env.BASE_URL}/api/protect/combo-packages`;
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (status == "authenticated") {
            SetLoginStatus(true);
        } else {
            SetLoginStatus(false);
        }
    }, [
        status
    ]);
    if ((comboPackagesListings === null || comboPackagesListings === void 0 ? void 0 : comboPackagesListings.length) > 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: `full ${(_styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7___default().presencePackages)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Online"
                                }),
                                " Presence Packages"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "position-relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                    className: `p-2 ${(_styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7___default().SwiperPadding)}`,
                                    modules: [
                                        swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                                        swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination
                                    ],
                                    slidesPerView: 1,
                                    navigation: {
                                        prevEl: "#PresencePackagesprev",
                                        nextEl: "#PresencePackagesnext"
                                    },
                                    pagination: {
                                        el: "#Packages-pagination",
                                        clickable: true
                                    },
                                    grabCursor: true,
                                    breakpoints: {
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 30
                                        },
                                        576: {
                                            slidesPerView: 2,
                                            spaceBetween: 10
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        },
                                        1100: {
                                            slidesPerView: 3,
                                            spaceBetween: 30
                                        }
                                    },
                                    children: (comboPackagesListings === null || comboPackagesListings === void 0 ? void 0 : comboPackagesListings.length) > 0 && comboPackagesListings.map((comboPackage, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-6 col-lg-4 col-sm-6 mb-sm-4 mb-md-0 mb-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                className: `d-flex ${(_styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7___default().SwiperSlideCard)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_IconBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    title: comboPackage.name,
                                                    type: "card-shadow",
                                                    //  text={[<div dangerouslySetInnerHTML={{ __html: comboPackage.description }}></div>]}
                                                    align: "center",
                                                    className: `py-3 py-md-5 py-sm-4 py-3 h-auto ${(_styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7___default().presencePackagesCard)}`,
                                                    presenceBtn: true,
                                                    titleSize: " ",
                                                    presenceBtnCls: (_styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7___default().presenceBtnSpace),
                                                    presenceBtnSec: (_styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7___default().presenceBtnSecondary),
                                                    presenceBtnpri: (_styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7___default().presenceBtnPrimary),
                                                    currentSession: session,
                                                    status: loginStatus,
                                                    comboPackageId: comboPackage.id
                                                })
                                            }, index)
                                        }, index)
                                    )
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    id: "PresencePackagesprev",
                                    variant: "prev"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    id: "PresencePackagesnext",
                                    variant: "next"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "Packages-pagination",
                            className: `position-relative bottom-0 pt-0  mb-lg-0 ${(_styles_ComboPackages_module_css__WEBPACK_IMPORTED_MODULE_7___default().SwiperSlidePagination)}`
                        })
                    ]
                })
            })
        });
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComboPackages);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;