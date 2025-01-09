"use strict";
exports.id = 6439;
exports.ids = [6439];
exports.modules = {

/***/ 6439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(467);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);









const AccountLayout = ({ userData , accountPageTitle , children  })=>{
    // console.log(userData,"userData")
    // State to control Collapse
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: confirmModalHideShow , 1: setConfirmModalHideShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleConfirmModalClose = ()=>setConfirmModalHideShow(false)
    ;
    const handleConfirmModalShow = ()=>setConfirmModalHideShow(true)
    ;
    //For edit the feedback
    const logoutUser = (e)=>{
        // e.preventDefault(); 
        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)("user-login");
        next_router__WEBPACK_IMPORTED_MODULE_7___default().router.push("/");
    };
    //confirm modal for logout
    const confirmLogout = ()=>{
        setConfirmModalHideShow(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            confirmModalHideShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: confirmModalHideShow,
                onHide: handleConfirmModalClose,
                onSwap: handleConfirmModalShow,
                confirmActionFun: logoutUser,
                recordID: "1",
                messageBody: "Are you sure want to log out? All your unsaved data will be lost.",
                confirmBtnText: "Yes",
                cancelBtnText: "No",
                iconPath: "/images/MyAccount/ProfileMsgIcon.svg",
                BottomBtnCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().BottomBtn)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "navbar navbar-expand-lg navbar-light p-0 myaccountMain border-bottom-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        in: open,
                        className: "d-md-block w-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "accountNav",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `d-flex justify-content-between ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AccountMenuNavMain)}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    variant: "flex-column flex-md-row",
                                    defaultActiveKey: true,
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AccountMenuNav)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                            className: "pe-md-0 me-md-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/user/account-info",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                                    active: accountPageTitle === "Personal Info" ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-profile-sr mt-n1 me-2 fs-base"
                                                        }),
                                                        "My Profile"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                            className: "pe-md-0 me-md-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/user/account-wallet",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                                    active: accountPageTitle === "Wallet" ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-wallet mt-n1 me-2 fs-base"
                                                        }),
                                                        "Wallet"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                            className: "mb-md-0 me-md-0 pe-md-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/user/account-feedback",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                                    active: accountPageTitle === "Feedback" ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-feedback-sr mt-n1 me-2 fs-base"
                                                        }),
                                                        "Reviews"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                            className: "mb-md-0 me-md-0 pe-md-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/user/my-businesses",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                                    active: accountPageTitle === "Listings" ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-listing-sr mt-n1 me-2 fs-base"
                                                        }),
                                                        "Listings"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                            className: "mb-md-0 me-md-0 pe-md-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/user/refer-and-earn",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                                    active: accountPageTitle === "ReferEarn" ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-refer-earn mt-n1 me-2 fs-base"
                                                        }),
                                                        "Refer & Earn"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                            className: "mb-md-0 me-md-0 pe-md-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/user/account-packages",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                                    active: accountPageTitle === "Packages" ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-package-sr mt-n1 me-2 fs-base"
                                                        }),
                                                        "Premium Listings"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                            className: "mb-md-0 me-md-0 pe-md-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/user/account-enquiries",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                                    active: accountPageTitle === "Enquiries" ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-enquiries-sr mt-n1 me-2 fs-base"
                                                        }),
                                                        "Enquiries"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                            className: "mb-md-0 me-md-0 pe-md-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/user/my-advertises",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                                    active: accountPageTitle === "Advertises" ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-ads-sr mt-n1 me-2 fs-base"
                                                        }),
                                                        "Display Advertisement"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                            className: "mb-md-0 ",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                                onClick: confirmLogout,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-logout-sr mt-n1 me-2 fs-base"
                                                    }),
                                                    "Log Out"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `pt-sm-4 pb-sm-5 pt-3 pb-3 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().MyaccountTopMain)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-0",
                        id: "my-listing-div",
                        children: children
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountLayout);


/***/ })

};
;