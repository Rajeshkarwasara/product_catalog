"use strict";
exports.id = 7229;
exports.ids = [7229];
exports.modules = {

/***/ 7229:
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
/* harmony import */ var _partials_ForgotPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3930);
/* harmony import */ var _partials_SignUpModalLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4178);
/* harmony import */ var _partials_SignInModalLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_partials_SignInModalLight__WEBPACK_IMPORTED_MODULE_4__]);
_partials_SignInModalLight__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SigninSignupCommon = ({ session , callbackUrl ="" , show , ...props })=>{
    // Sign in modal
    const { 0: signinShow , 1: setSigninShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(show);
    const handleSigninClose = ()=>{
        setSigninShow(false);
        props.onHide();
    };
    const handleSigninShow = ()=>setSigninShow(true)
    ;
    // Sign up modal
    const { 0: signupShow , 1: setSignupShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSignupClose = ()=>{
        setSignupShow(false);
        props.onHide();
    };
    const handleSignupShow = ()=>setSignupShow(true)
    ;
    //forgot password 
    const { 0: forgotShow , 1: setForgotShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleForgotClose = ()=>{
        setForgotShow(false);
        props.onHide();
    };
    const handleForgotShow = ()=>setForgotShow(true)
    ;
    // Swap modals
    const handleSignInToUp = (e)=>{
        e.preventDefault();
        setSigninShow(false);
        setSignupShow(true);
    };
    const handleForgotSignInToUp = (e)=>{
        e.preventDefault();
        setSigninShow(true);
        setForgotShow(false);
    };
    const handleForgotInToUp = (e)=>{
        e.preventDefault();
        setSigninShow(false);
        setForgotShow(true);
    };
    const handleSignUpToIn = (e)=>{
        e.preventDefault();
        setSigninShow(true);
        setSignupShow(false);
    };
    const setVerifiedUser = (status)=>{};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_ForgotPass__WEBPACK_IMPORTED_MODULE_2__["default"], {
                centered: true,
                size: "",
                pillButtons: true,
                titleMsg: "Forgot Password",
                show: forgotShow,
                onHide: handleForgotClose,
                onSwap: handleForgotSignInToUp
            }),
            !session && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_SignInModalLight__WEBPACK_IMPORTED_MODULE_4__["default"], {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: signinShow,
                onHide: handleSigninClose,
                onSwap: handleSignInToUp,
                onSwapForgot: handleForgotInToUp,
                callbackUrl: callbackUrl
            }),
            !session && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_SignUpModalLight__WEBPACK_IMPORTED_MODULE_3__["default"], {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: signupShow,
                onHide: handleSignupClose,
                onSwap: handleSignUpToIn,
                callbackUrl: callbackUrl
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SigninSignupCommon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;