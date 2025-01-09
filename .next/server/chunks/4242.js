"use strict";
exports.id = 4242;
exports.ids = [4242];
exports.modules = {

/***/ 4242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _StarRatingForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(176);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_12__]);
react_toastify__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const FeedbackEditModal = ({ csrfToken , mutate , onSwap , pillButtons , sessionStatus , ...props })=>{
    var ref4, ref1;
    console.log("props==>>", props);
    const { 0: writeReviewError , 1: setWriteReviewError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: writeReviewFields , 1: setWriteReviewFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        comment: (props === null || props === void 0 ? void 0 : (ref4 = props.feedback) === null || ref4 === void 0 ? void 0 : ref4.review) || ""
    });
    const { 0: showLogin , 1: setShowLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: submtBtn , 1: setSubmtBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: feedbackDetail , 1: setFeedbackDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.feedback);
    const { 0: rating , 1: setRating  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((props === null || props === void 0 ? void 0 : (ref1 = props.feedback) === null || ref1 === void 0 ? void 0 : ref1.rating) || 3);
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    const reviewSubmit = async ()=>{
        setSubmtBtn(true);
        let erros = formErrorWrite(writeReviewFields);
        if (erros == "") {
            //submit form
            let captchVal = recaptchaRef.current.getValue();
            if (captchVal) {
                if (sessionStatus == "unauthenticated") {
                    setShowLogin(true);
                    setSubmtBtn(false);
                } else {
                    var ref, ref2, ref3;
                    //session user
                    let saveBusinessData = {
                        method: "POST",
                        body: JSON.stringify({
                            comment: writeReviewFields.comment,
                            rating: rating,
                            id: props === null || props === void 0 ? void 0 : (ref = props.feedback) === null || ref === void 0 ? void 0 : ref.id,
                            is_active: props === null || props === void 0 ? void 0 : (ref2 = props.feedback) === null || ref2 === void 0 ? void 0 : ref2.is_active,
                            business_id: props === null || props === void 0 ? void 0 : (ref3 = props.feedback) === null || ref3 === void 0 ? void 0 : ref3.business_id
                        })
                    };
                    let res = await fetch(`${process.env.BASE_URL}/api/protect/review-submit`, saveBusinessData);
                    const resJson = await res.json();
                    //console.log("USER response===============>", resJson)
                    if (resJson.status == 200) {
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(resJson.msg);
                        recaptchaRef.current.reset();
                        setWriteReviewFields({
                            comment: ""
                        });
                        setSubmtBtn(false);
                        await mutate();
                        props.onHide();
                    } else {
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error(resJson.msg);
                        recaptchaRef.current.reset();
                        setSubmtBtn(false);
                    }
                }
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Invalid captcha!");
                setSubmtBtn(false);
            }
        } else {
            //show error
            setWriteReviewError(erros);
            setSubmtBtn(false);
        }
    };
    const handleChangeWrite = (e)=>{
        let changes = {
            ...writeReviewFields,
            [e.target.name]: e.target.value
        };
        setWriteReviewFields(changes);
        let erros = formErrorWrite(changes);
        setWriteReviewError(erros);
    };
    const formErrorWrite = (frm)=>{
        let errors = "";
        if (!frm.comment) {
            errors = {
                ...errors,
                ["comment"]: "This field is required."
            };
        } else if (frm.comment !== undefined && frm.comment != "" && frm.comment.trim().length < 4) {
            errors = {
                ...errors,
                ["comment"]: "More than 4 charactors required."
            };
        } else if (frm.comment !== undefined && frm.comment != "" && frm.comment.trim().length > 1000) {
            errors = {
                ...errors,
                ["comment"]: "You can not enter more than 1000 charactors."
            };
        }
        return errors;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default()), {
        ...props,
        className: "signin-modal",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Body), {
            className: "px-0 py-2 py-sm-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                    onClick: props.onHide,
                    "aria-label": "Close modal",
                    className: "position-absolute top-0 end-0 mt-3 me-3"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mx-0 align-items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-12 px-3 pt-2 pb-md-4 pb-sm-3 pb-2 px-sm-5 pt-md-5 pt-sm-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "blog-title text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "mb-2 mb-sm-3 mb-md-4 mt-3 mt-sm-0",
                                    children: "Update a Review"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "pt-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                        controlId: "looking",
                                        className: "mb-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    lg: 7,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                        className: "mb-0",
                                                        children: "How would you rate this business"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    lg: 7,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StarRatingForm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                        rating: rating,
                                                        setRating: setRating
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                                        controlId: "looking",
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {
                                                children: [
                                                    "Tell us more about this business",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-danger",
                                                        children: "\xa0*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                                as: "textarea",
                                                placeholder: "Write here",
                                                name: "comment",
                                                value: writeReviewFields.comment,
                                                onChange: handleChangeWrite,
                                                className: `form-control ${(writeReviewError === null || writeReviewError === void 0 ? void 0 : writeReviewError.comment) !== undefined ? "is-invalid" : ""}`
                                            }),
                                            (writeReviewError === null || writeReviewError === void 0 ? void 0 : writeReviewError.comment) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control.Feedback), {
                                                type: "invalid",
                                                tooltip: true,
                                                children: [
                                                    " ",
                                                    writeReviewError === null || writeReviewError === void 0 ? void 0 : writeReviewError.comment
                                                ]
                                            }) : ""
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        ref: recaptchaRef,
                                        sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                        size: "normal"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-end",
                                        children: !submtBtn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "mt-3 w-100 mb-2",
                                            size: "md",
                                            onClick: ()=>reviewSubmit(false)
                                            ,
                                            children: "Submit"
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "mt-3 w-100 mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    animation: "border",
                                                    size: "sm",
                                                    role: "status",
                                                    className: "me-2"
                                                }),
                                                "wait..."
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedbackEditModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;