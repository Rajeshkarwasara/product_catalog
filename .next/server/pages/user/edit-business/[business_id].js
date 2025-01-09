"use strict";
(() => {
var exports = {};
exports.id = 3751;
exports.ids = [3751];
exports.modules = {

/***/ 3707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6463);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);



const Review = ({ author , rating , date , likeCount , showLikeDislike , showReportButton , dislikeCount , likeActive , dislikeActive , likeClick , dislikeClick , children , light , reportComment , commentID , MainReviewLeftCls , ReviewReportCls , MainReviewLeftUserCls , MostCommentCls ="" , statusReview ="1" , ...props })=>{
    const thumbShape = author.thumbShape ? author.thumbShape : "rounded", thumbClass = `flex-shrink-0 bg-repeat-0 bg-position-center bg-size-cover ${thumbShape} me-3`, thumbSrc = author.thumbSrc, thumbSize = author.thumbSize + "px", name = author.name;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex align-items-center mb-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `d-flex align-items-center ${MainReviewLeftCls}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `me-3 ${MainReviewLeftUserCls}`,
                                children: thumbSrc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    src: thumbSrc || "/images/components/03.jpg",
                                    width: 52,
                                    height: 52,
                                    alt: "Square image"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: `fs-md mb-1 ${light ? " text-light" : ""}`,
                                        children: name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex align-items-center ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StarRating__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                light: light ? 1 : 0,
                                                rating: rating
                                            }),
                                            date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `fs-md ms-3 ${light ? "text-light opacity-50" : ""}`,
                                                children: date
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: showReportButton && statusReview == "1" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: `${ReviewReportCls}`,
                            onClick: ()=>reportComment(commentID)
                            ,
                            children: "Report"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: `${ReviewReportCls}`,
                            children: "Pending"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `p-0 ${MostCommentCls}`,
                children: children
            }),
            showLikeDislike && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex align-items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        className: `btn-like${likeActive ? " active" : ""}${light ? " btn-light" : ""}${likeClick ? "" : " pe-none"}`,
                        onClick: likeClick,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fi-like"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: likeCount ? `(${likeCount})` : "(0)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `border-end me-1${light ? " border-light" : ""}`,
                        children: "\xa0"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        className: `btn-dislike${dislikeActive ? " active" : ""}${light ? " btn-light" : ""}${dislikeClick ? "" : " pe-none"}`,
                        onClick: dislikeClick,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fi-dislike"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: dislikeCount ? `(${dislikeCount})` : "(0)"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review);


/***/ }),

/***/ 7681:
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
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8582);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_partials_ConfirmationModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(467);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4301);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);













const ListingEditLayout = ({ pageName , setPage , details  })=>{
    var ref;
    //console.log("Page details:   ", details)
    // Collapse state
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showConfirmation , 1: setShowConfirmation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "type": "",
        "message": "",
        "title": ""
    });
    const removeBusiness = async (id)=>{
        console.log("------", details);
        setShowConfirmation(true);
        setShowConfirmation(false);
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/delete-business`, {
            method: "POST",
            body: JSON.stringify({
                "business_id": id
            })
        });
        let srJson = await srRes.json();
        //console.log("srJson________________", srJson)
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) && (srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: srJson.msg,
                    ["type"]: "success",
                    ["title"]: "Success"
                };
            });
        } else {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: srJson.msg,
                    ["type"]: "Error",
                    ["title"]: "Error"
                };
            });
        }
    };
    const setMessageModal = (e)=>{
        setMsgModal((pre)=>{
            return {
                ...pre,
                ["message"]: "",
                ["type"]: "",
                ["title"]: ""
            };
        });
        next_router__WEBPACK_IMPORTED_MODULE_11___default().push("/user/my-businesses", undefined, {
            shallow: false
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " ",
        children: [
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            showConfirmation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_ConfirmationModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
                show: true,
                onHide: ()=>setShowConfirmation(false)
                ,
                confirmActionFun: removeBusiness,
                messageBody: "Business helps you to reach more customers. Are you sure you want to delete this business?",
                recordID: details.id
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex position-reletive",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().BackpageListingTop)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().Backpage)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `${process.env.BASE_URL}/user/my-businesses`,
                                        passHref: true,
                                        prefetch: false,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-arrow-long-left"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-100",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: " mb-1",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: "w-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default().Toggle), {
                                                        variant: "outline-secondary border-0 p-0 background transparent",
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListingDropdowan)}`,
                                                        children: details.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default().Menu), {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListingDropdowanMenu)}`,
                                                        children: ((ref = details.all_list) === null || ref === void 0 ? void 0 : ref.length) > 0 && details.all_list.map((item, inx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default().Item), {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListingDropdowanLi)}`,
                                                                eventKey: item.id,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: `${process.env.BASE_URL}/user/edit-business/${item.id}`,
                                                                    passHref: true,
                                                                    prefetch: false,
                                                                    children: item.name
                                                                })
                                                            }, item.id)
                                                        )
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListingBottomHead)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListingRatings)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListingRatingsMain)}`,
                                                            children: (details === null || details === void 0 ? void 0 : details.total_reviews) > 0 ? details === null || details === void 0 ? void 0 : details.ratings.toFixed(2) : "-"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListingRatingsTotal)}`,
                                                            children: [
                                                                "(",
                                                                details.total_reviews,
                                                                ")"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (details === null || details === void 0 ? void 0 : details.is_verified) == "1" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: ` ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().badgescustom)}`,
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-security me-1"
                                                        }),
                                                        " Verified"
                                                    ]
                                                }),
                                                (details === null || details === void 0 ? void 0 : details.is_paid) == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().PaidBtn)}`,
                                                    children: "Paid"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListingDelete)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_7___default()), {
                            placement: "top",
                            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_8___default()), {
                                children: "Delete"
                            }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: ()=>setShowConfirmation(true)
                                ,
                                className: `nav-link ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().FormEdit)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fi-del-sr"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenu)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3___default()), {
                    in: open,
                    className: "d-block",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "accountNav",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default()), {
                            variant: `flex-column flex-md-row pt-sm-2 pt-md-0 border-bottom-md ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListingNav)}`,
                            defaultActiveKey: pageName,
                            onSelect: (selectedKey)=>setPage(selectedKey)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().Listingnav)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                        eventKey: "Basic Info",
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLi)} ${pageName == "Basic Info" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLiActive) : ""}`,
                                        children: "Business Info"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().Listingnav)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                        eventKey: "Company Info",
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLi)} ${pageName == "Company Info" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLiActive) : ""}`,
                                        children: "Company Info"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().Listingnav)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                        eventKey: "Media",
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLi)} ${pageName == "Media" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLiActive) : ""}`,
                                        children: "Media"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().Listingnav)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                        eventKey: "Contact Info",
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLi)} ${pageName == "Contact Info" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLiActive) : ""}`,
                                        children: "Contact Info"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().Listingnav)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                        eventKey: "Other Details",
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLi)} ${pageName == "Other Details" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLiActive) : ""}`,
                                        children: "Other Details"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().Listingnav)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                        eventKey: "FAQ",
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLi)} ${pageName == "FAQ" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLiActive) : ""}`,
                                        children: "FAQ"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().Listingnav)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                        eventKey: "Reviews",
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLi)} ${pageName == "Reviews" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLiActive) : ""}`,
                                        children: "Reviews"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                                    className: `mb-md-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().Listingnav)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                                        eventKey: "Leads",
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLi)} ${pageName == "Leads" ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_12___default().ListinSubMenuLiActive) : ""}`,
                                        children: "Leads"
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingEditLayout);


/***/ }),

/***/ 5962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2423);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5422);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7047);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2635);
/* harmony import */ var react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4301);
/* harmony import */ var _AutoCompleteAddress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7666);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2110);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14__);















const ViewBasicDetail = ({ basicDetails , csrfToken , userID  })=>{
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        address: "",
        pincode: "",
        city: "",
        area: "",
        state: "",
        landmark: "",
        lat: "",
        lng: "",
        id: "",
        city_id: "",
        state_id: "",
        area_id: "",
        areaName: ""
    });
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    /*{ "business_name": updateDetails.name, "address": updateDetails.address, "pincode": updateDetails.pincode, "city": updateDetails.city_id, "area": updateDetails.area_id, "state": updateDetails.state_id, "landmark": updateDetails.landmark, "lat": updateDetails.lat, "lng": updateDetails.lng, "id": updateDetails.id }*/ const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: hiddenselect , 1: setShowHideSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: areas , 1: setAreas  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: pinstates , 1: setPinstates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: pincities , 1: setpincities  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: showButton , 1: setShowButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showLoadBtn , 1: setShowLoadBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        type: "",
        message: "",
        title: ""
    });
    const { 0: showInputField , 1: setShowInputField  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const data = (0,_front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_13__/* .BusinessBasic */ .Rq)(basicDetails.id, userID);
        let allState = allStates();
        setAllrecords(data);
        console.log("____all_state_____", allState);
    }, []);
    const hendelChangeSelect = ()=>{
        setShowInputField(false);
        setShowHideSelect(true);
    };
    const setMessageModal = (e)=>{
        setMsgModal((pre)=>{
            return {
                ...pre,
                ["message"]: "",
                ["type"]: "",
                ["title"]: ""
            };
        });
    };
    const setAllrecords = (allData)=>{
        let promise = new Promise((resolve)=>{
            resolve(allData);
        });
        promise.then((result)=>{
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                setProfile({
                    name: result[0].name,
                    address: result[0].address,
                    pincode: result[0].pincode,
                    city_name: result[0].city_name,
                    area_name: result[0].area_name,
                    state_name: result[0].state_name,
                    city: result[0].city_id,
                    state: result[0].state_id,
                    area: result[0].area_id,
                    landmark: result[0].landmark,
                    lat: result[0].lat,
                    lng: result[0].lng,
                    id: result[0].id
                });
            }
        });
    //setSocilaLinks(allData.socilLinks)
    };
    const handleProfile = async (e)=>{
        var pinCodeCityState = "";
        e.preventDefault();
        profile = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(profile);
        setShowButton(true); // active submit bustton
        if (e.currentTarget.name == "state") {
            commonAddressChanges("state", "", e.target.value.trim());
        }
        if (e.currentTarget.name == "city") {
            commonAddressChanges("city", "", "", e.target.value);
        }
        if (e.currentTarget.name == "address") {
            console.log("address- --- ", e.currentTarget);
        }
        if (e.currentTarget.name == "pincode") {
            console.log("address- --- ", e.currentTarget.value);
            var pinCodeVal = e.target.value.trim();
            if (pinCodeVal.length == 6) {
                commonAddressChanges("pincode", pinCodeVal);
            }
        }
        if (e.currentTarget.name == "area") {
            let value = e.target.value;
            if (value == "other") {
                setShowInputField(true);
                setShowHideSelect(false);
            }
        }
    //if (e.currentTarget.name == "pincode") {
    //    var pinCodeVal = e.target.value.trim();
    //    if (pinCodeVal.length == 6) {
    //        pinCodeCityState = await pincodeWiseState(pinCodeVal)
    //        var updateCityStateFormValues = { ...profile, ["city"]: pinCodeCityState.city, ["state"]: pinCodeCityState.state }
    //        await setProfile(
    //            updateCityStateFormValues
    //        );
    //    }
    //} else if (e.currentTarget.name == "city_id") {
    //    var city_id_val = e.target.value.trim();
    //    await area_listing(city_id_val);
    //}
    //const formResponse = editBusinessBasicDetailsValid(profile);
    //console.log("formResponse", formResponse)
    //if (Object.entries(formResponse).length !== 0) {
    //    setFormError(formResponse);
    //}
    //else {
    //    if (pinCodeCityState != '' && (pinCodeCityState.city == "" || pinCodeCityState.state == "")) {
    //        var error = { ['pincode']: 'Pincode is invalid.' }
    //        await setFormError(error)
    //    }
    //    setFormError(formResponse);
    //}
    };
    const commonAddressChanges = async (type, pin = "", state = "", city = "")=>{
        if (type == "pincode") {
            let pinCodeCityState = await pincodeWiseState(pin);
            console.log(pinCodeCityState);
            //get state details
            let stateData = pinstates.filter((val)=>val.name.toLowerCase() == pinCodeCityState.state.toLowerCase()
            );
            stateData = (stateData === null || stateData === void 0 ? void 0 : stateData.length) > 0 ? stateData[0] : {};
            let cityData = [];
            if (stateData === null || stateData === void 0 ? void 0 : stateData.id) {
                //get city details
                cityData = await getCityStateListing(stateData === null || stateData === void 0 ? void 0 : stateData.id);
                let cityDetails = (cityData === null || cityData === void 0 ? void 0 : cityData.length) > 0 ? cityData.filter((val)=>val.name.toLowerCase() == pinCodeCityState.city.toLowerCase()
                ) : [];
                if (cityDetails[0].id) {
                    //area listing
                    let areaData = await area_listing(cityDetails[0].id);
                    let areaRecord = (areaData === null || areaData === void 0 ? void 0 : areaData.length) > 0 ? areaData.filter((val)=>pinCodeCityState.area.toLowerCase().includes(val.name.toLowerCase())
                    ) : [];
                    setProfile((pre)=>{
                        var ref, ref1;
                        return {
                            ...pre,
                            ["city_name"]: cityDetails[0].name,
                            ["state_name"]: (stateData === null || stateData === void 0 ? void 0 : stateData.name) || "",
                            ["area_name"]: ((ref = areaRecord[0]) === null || ref === void 0 ? void 0 : ref.name) || "",
                            ["city"]: cityDetails[0].id,
                            ["state"]: (stateData === null || stateData === void 0 ? void 0 : stateData.id) || "",
                            ["area"]: ((ref1 = areaRecord[0]) === null || ref1 === void 0 ? void 0 : ref1.id) || ""
                        };
                    });
                    setForm((pre)=>{
                        var ref;
                        return {
                            ...pre,
                            ["state"]: (stateData === null || stateData === void 0 ? void 0 : stateData.id) || "",
                            ["area"]: ((ref = areaRecord[0]) === null || ref === void 0 ? void 0 : ref.id) || "",
                            ["city"]: cityDetails[0].id
                        };
                    });
                } else {
                    //city list not found
                    setProfile((pre)=>{
                        return {
                            ...pre,
                            ["city_name"]: "",
                            ["state_name"]: (stateData === null || stateData === void 0 ? void 0 : stateData.name) || "",
                            ["area_name"]: "",
                            ["city"]: "",
                            ["state"]: (stateData === null || stateData === void 0 ? void 0 : stateData.id) || "",
                            ["area"]: ""
                        };
                    });
                    setForm((pre)=>{
                        return {
                            ...pre,
                            ["state"]: (stateData === null || stateData === void 0 ? void 0 : stateData.id) || "",
                            ["area"]: "",
                            ["city"]: ""
                        };
                    });
                }
            } else {
                //state list no found
                setProfile((pre)=>({
                        ...pre,
                        ["city_name"]: "",
                        ["state_name"]: "",
                        ["area_name"]: "",
                        ["city"]: "",
                        ["state"]: "",
                        ["area"]: ""
                    })
                );
                setForm((pre)=>({
                        ...pre,
                        ["state"]: "",
                        ["area"]: "",
                        ["city"]: ""
                    })
                );
            }
        }
        if (type == "state") {
            let stateData = pinstates.filter((val)=>val.id == state
            );
            stateData = (stateData === null || stateData === void 0 ? void 0 : stateData.length) > 0 ? stateData[0] : {};
            let cityData = await getCityStateListing(state);
            setProfile((pre)=>{
                return {
                    ...pre,
                    ["city_name"]: "",
                    ["state_name"]: (stateData === null || stateData === void 0 ? void 0 : stateData.name) || "",
                    ["area_name"]: "",
                    ["city"]: "",
                    ["state"]: (stateData === null || stateData === void 0 ? void 0 : stateData.id) || "",
                    ["area"]: "",
                    ["pincode"]: ""
                };
            });
            setForm((pre)=>{
                return {
                    ...pre,
                    ["state"]: (stateData === null || stateData === void 0 ? void 0 : stateData.id) || "",
                    ["area"]: "",
                    ["city"]: "",
                    ["pincode"]: ""
                };
            });
        }
        if (type == "city") {
            let cityRe = (pincities === null || pincities === void 0 ? void 0 : pincities.length) > 0 ? pincities.filter((val)=>val.id == city
            ) : [];
            console.log("City   ", city, cityRe);
            //get area list
            let areaData = await area_listing(city);
            setProfile((pre)=>{
                var ref, ref2;
                return {
                    ...pre,
                    ["city_name"]: ((ref = cityRe[0]) === null || ref === void 0 ? void 0 : ref.name) || "",
                    ["area_name"]: "",
                    ["city"]: ((ref2 = cityRe[0]) === null || ref2 === void 0 ? void 0 : ref2.id) || "",
                    ["area"]: ""
                };
            });
            setForm((pre)=>{
                var ref;
                return {
                    ...pre,
                    ["area"]: "",
                    ["city"]: ((ref = cityRe[0]) === null || ref === void 0 ? void 0 : ref.id) || ""
                };
            });
        }
    };
    const allStates = async ()=>{
        try {
            console.log("______Call State____________");
            var res = await await fetch(process.env.BASE_URL + "/api/protect/state-list", {
                method: "POST",
                //body:{'city':city_name},
                body: JSON.stringify({
                    state: ""
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            var resJson = await res.json();
            console.log("state_ changes----", resJson);
            if (resJson.status == 200) {
                setPinstates(resJson.data);
            }
        } catch (err) {
            console.log("_________err__________", err);
        //return ""
        }
    };
    const pincodeWiseState = async (pin)=>{
        try {
            var pinSize = pin.length;
            if (pinSize == 6) {
                var APIpath = `https://api.postalpincode.in/pincode/${pin}`;
                var res = await fetch(APIpath);
                var resJson = await res.json();
                var pinState, pinCity;
                if (resJson[0].Status == "Success") {
                    // get the city id and state id
                    pinState = resJson[0].PostOffice[0].State;
                    pinCity = resJson[0].PostOffice[0].District;
                    let area = resJson[0].PostOffice[0].Name;
                    console.log("Check   ", resJson[0]);
                    //Get city state listing by state name
                    await getCityStateListing(pinState);
                    return {
                        state: pinState,
                        city: pinCity,
                        area: area
                    };
                }
                return {
                    state: "",
                    city: "",
                    area: ""
                };
            }
            return {
                state: "",
                city: "",
                area: ""
            };
        } catch (err) {
            return {
                state: "",
                city: "",
                area: ""
            };
        }
    };
    //get state and city listing  by state name
    const getCityStateListing = async (stateName)=>{
        try {
            const getCityStateRecords = await fetch(process.env.BASE_URL + "/api/protect/state-wise-cities", {
                method: "POST",
                //body:{'city':city_name},
                body: JSON.stringify({
                    state: stateName
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const cityState = await getCityStateRecords.json();
            if ((cityState === null || cityState === void 0 ? void 0 : cityState.status) == "200") {
                console.log("____cities____", cityState);
                setpincities(cityState === null || cityState === void 0 ? void 0 : cityState.data); //city dropdown
                return cityState === null || cityState === void 0 ? void 0 : cityState.data;
            } else {
                setpincities([]); //city dropdown
                return [];
            }
        } catch (err) {
            // console.log("err",err)
            return [];
        }
    };
    //vs get area listing
    const area_listing = async (city_id)=>{
        try {
            const getAreas = await fetch(process.env.BASE_URL + "/api/protect/area-listing-by-city", {
                method: "POST",
                body: JSON.stringify({
                    city: city_id
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const areaslisting = await getAreas.json();
            console.log("_______areas________", areaslisting);
            if ((areaslisting === null || areaslisting === void 0 ? void 0 : areaslisting.status) == "200") {
                var ref, ref3;
                setAreas(areaslisting === null || areaslisting === void 0 ? void 0 : (ref = areaslisting.data) === null || ref === void 0 ? void 0 : ref.records);
                return areaslisting === null || areaslisting === void 0 ? void 0 : (ref3 = areaslisting.data) === null || ref3 === void 0 ? void 0 : ref3.records;
            } else {
                return [];
            }
        } catch (err) {
            return [];
        }
    };
    // Custom accordion toggle
    let testCount = 0;
    const CustomToggle = ({ eventKey  })=>{
        const handleClick = Object.entries(formError).length !== 0 ? (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(Object.keys(formError), (e)=>e.preventDefault()
        ) : (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(eventKey, (e)=>e.preventDefault()
        );
        console.log("CustomToggle", eventKey, testCount++);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default()), {
            placement: "top",
            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: "Edit"
            }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: `nav-link pt-0 pb-0 px-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormEdit)}`,
                onClick: handleClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fi-edit-sr"
                })
            })
        });
    };
    const handleForm = async ()=>{
        setShowLoadBtn(true);
        let checkValidation = formValidate(form);
        var pincodePass = profile === null || profile === void 0 ? void 0 : profile.pincode;
        if (checkValidation) {
            //submit form
            let srRes = await fetch(`${process.env.BASE_URL}/api/protect/update-basic-listing`, {
                method: "POST",
                body: JSON.stringify({
                    data: {
                        ...form,
                        ["business_id"]: basicDetails.id,
                        ["user_id"]: userID,
                        pincodePass
                    },
                    csrfToken: csrfToken
                })
            });
            let srJson = await srRes.json();
            console.log("srJson________________", srJson);
            if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) && (srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
                console.log("FINALSUBMIT", srJson.data);
                //setBasicDetails(srJson.data)
                setMsgModal((pre)=>{
                    return {
                        ...pre,
                        ["message"]: srJson === null || srJson === void 0 ? void 0 : srJson.msg,
                        ["type"]: "success",
                        ["title"]: "Success"
                    };
                });
                setForm(null);
                setShowButton(false);
                setShowLoadBtn(false);
            } else {
                setMsgModal((pre)=>{
                    return {
                        ...pre,
                        ["message"]: (srJson === null || srJson === void 0 ? void 0 : srJson.msg) || "Something went wong! Please try after sometime.",
                        ["type"]: "error",
                        ["title"]: "Error"
                    };
                });
                setShowButton(true);
                setShowLoadBtn(false);
            }
        } else {
            setShowLoadBtn(false);
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "State, city, area, pincode and address all are required.",
                    ["type"]: "error",
                    ["title"]: "Error"
                };
            });
        }
    };
    const formValidate = (from)=>{
        console.log(from);
        let value = true;
        if ("pincode" in form) {
            if (!(form === null || form === void 0 ? void 0 : form.pincode) || (form === null || form === void 0 ? void 0 : form.pincode.length) != "6" || !new RegExp(/^[0-9]{6}$/).test(form === null || form === void 0 ? void 0 : form.pincode) || !(form === null || form === void 0 ? void 0 : form.city) || !(form === null || form === void 0 ? void 0 : form.state) || !(form === null || form === void 0 ? void 0 : form.area)) {
                value = false;
            }
        }
        if ("state" in form) {
            if (!(form === null || form === void 0 ? void 0 : form.pincode) || !(form === null || form === void 0 ? void 0 : form.city) || !(form === null || form === void 0 ? void 0 : form.state) || !(form === null || form === void 0 ? void 0 : form.area)) {
                value = false;
            }
        }
        if ("city" in form) {
            if (!(form === null || form === void 0 ? void 0 : form.city) || !(form === null || form === void 0 ? void 0 : form.area)) {
                value = false;
            }
        }
        if ("area" in form) {
            if (!(form === null || form === void 0 ? void 0 : form.area)) {
                value = false;
            }
        }
        return value;
    };
    const onPlaceSelected = (lat, lng, address, pinCode)=>{
        form = {
            ...form,
            ["address"]: address,
            ["pincode"]: pinCode,
            ["lat"]: lat,
            ["lng"]: lng
        };
        setProfile((pre)=>({
                ["address"]: address,
                ["pincode"]: pinCode,
                ["lat"]: lat,
                ["lng"]: lng
            })
        );
        //const formResponse = editBusinessBasicDetailsValid(form);
        commonAddressChanges("pincode", pinCode);
        //setFormError(formResponse)
        setForm(form);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().ListingInfoHead)}`,
                children: "Business Information"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default()), {
                id: "user-profile-update",
                autoComplete: "off",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "csrfToken",
                        defaultValue: csrfToken
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "lat",
                        defaultValue: profile === null || profile === void 0 ? void 0 : profile.lat
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "lng",
                        defaultValue: profile === null || profile === void 0 ? void 0 : profile.lng
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().ListingInfoBox)}`,
                        alwaysOpen: true,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Business Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : profile.name) ? profile.name : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "name"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "name",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.business_name) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.name) !== undefined ? "is-invalid" : ""}`,
                                                    value: (form === null || form === void 0 ? void 0 : form.name) || "",
                                                    name: "name",
                                                    onChange: handleProfile,
                                                    placeholder: "Enter business name"
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.name) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.name
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Address"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : profile.address) ? profile.address : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "address"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "address",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.address) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AutoCompleteAddress__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    onPlaceSelected: onPlaceSelected,
                                                    className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.address) !== undefined ? "is-invalid" : ""}`,
                                                    name: "address",
                                                    value: (form === null || form === void 0 ? void 0 : form.address) || "",
                                                    onChange: handleProfile
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.address) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.address
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Pincode"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : profile.pincode) ? profile === null || profile === void 0 ? void 0 : profile.pincode : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "pincode"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "pincode",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.pincode) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    type: "tel",
                                                    className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.pincode) !== undefined ? "is-invalid" : ""}`,
                                                    name: "pincode",
                                                    value: form === null || form === void 0 ? void 0 : form.pincode,
                                                    onChange: handleProfile,
                                                    placeholder: "Enter your pincode"
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.pincode) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.pincode
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "State"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : profile.state_name) ? profile === null || profile === void 0 ? void 0 : profile.state_name : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "state"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "state",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.state) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.state) !== undefined ? "is-invalid" : ""}`,
                                                    name: "state",
                                                    id: "state",
                                                    value: form === null || form === void 0 ? void 0 : form.state,
                                                    onChange: handleProfile,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "",
                                                            children: "Choose state"
                                                        }),
                                                        (pinstates === null || pinstates === void 0 ? void 0 : pinstates.length) > 0 && pinstates.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: val.id,
                                                                children: val.name
                                                            }, val.id)
                                                        )
                                                    ]
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.state) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.state
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "City"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : profile.city_name) ? profile === null || profile === void 0 ? void 0 : profile.city_name : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "city"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "city",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.city) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.city) !== undefined ? "is-invalid" : ""}`,
                                                    name: "city",
                                                    id: "city",
                                                    value: form === null || form === void 0 ? void 0 : form.city,
                                                    onChange: handleProfile,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "",
                                                            children: "Choose city"
                                                        }),
                                                        (pincities === null || pincities === void 0 ? void 0 : pincities.length) > 0 && pincities.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: val.id,
                                                                children: val.name
                                                            }, val.id)
                                                        )
                                                    ]
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.city) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.city
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Area"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : profile.area_name) ? profile === null || profile === void 0 ? void 0 : profile.area_name : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "area"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "area",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.area) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                hiddenselect && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.area) !== undefined ? "is-invalid" : ""}`,
                                                    name: "area",
                                                    id: "area",
                                                    value: form === null || form === void 0 ? void 0 : form.area,
                                                    onChange: handleProfile,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "",
                                                            children: "Choose area"
                                                        }),
                                                        (areas === null || areas === void 0 ? void 0 : areas.length) > 0 && areas.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: val.id,
                                                                children: val.name
                                                            }, val.id)
                                                        ),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "other",
                                                            children: "Enter Area Manually"
                                                        })
                                                    ]
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.area) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.area
                                                    ]
                                                }) : "",
                                                showInputField && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `d-flex ${(formError === null || formError === void 0 ? void 0 : formError.areaName) !== undefined ? "is-invalid" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default().Control), {
                                                            type: "text",
                                                            size: "lg",
                                                            placeholder: "Enter your Area",
                                                            value: (form === null || form === void 0 ? void 0 : form.areaName) || "",
                                                            name: "areaName",
                                                            onChange: handleProfile,
                                                            className: `form-control ${(formError === null || formError === void 0 ? void 0 : formError.areaName) !== undefined ? "is-invalid" : ""}`
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            className: `ms-2 ${(formError === null || formError === void 0 ? void 0 : formError.areaName) !== undefined ? "is-invalid" : ""}`,
                                                            onClick: hendelChangeSelect,
                                                            children: "Back"
                                                        })
                                                    ]
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.areaName) !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: formError === null || formError === void 0 ? void 0 : formError.areaName
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Landmark"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : profile.landmark) ? profile === null || profile === void 0 ? void 0 : profile.landmark : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "landmark"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "landmark",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            className: `mt-2`,
                                            onChange: handleProfile,
                                            value: (form === null || form === void 0 ? void 0 : form.landmark) || "",
                                            name: "landmark",
                                            placeholder: "Enter your landmark"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    showButton && !showLoadBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            onClick: handleForm,
                            children: "Save changes"
                        })
                    }),
                    showLoadBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    animation: "border",
                                    size: "sm",
                                    role: "status",
                                    className: "me-2"
                                }),
                                "Wait..."
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewBasicDetail);


/***/ }),

/***/ 8917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2423);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5422);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7047);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helper_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(261);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4301);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6555);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5698);
/* harmony import */ var _front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2110);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_12__]);
uuid__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const ViewCompanyDetail = ({ basicDetails , csrfToken , userID  })=>{
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "year_establish": "",
        "description": "",
        "more_desc": "",
        "association": "",
        "expreience": "",
        "awards": "",
        "addi_info": "",
        "logo": "",
        "id": ""
    });
    const { 0: isDelete , 1: setIsDelete  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "type": "",
        "message": "",
        "title": ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const data = (0,_front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_14__/* .CompanyInfo */ .zW)(basicDetails.id, userID);
        setAllrecords(data);
    }, []);
    const setAllrecords = (allData)=>{
        let promise = new Promise((resolve)=>{
            resolve(allData);
        });
        promise.then((result)=>{
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                //console.log("____result_____final_____", result)
                setProfile({
                    "year_establish": result[0].year_establishment,
                    "description": result[0].company_description,
                    "more_desc": result[0].business_more_info,
                    "association": result[0].professional_association,
                    "expreience": result[0].past_experience,
                    "awards": result[0].awards,
                    "addi_info": result[0].additional_information,
                    "logo": result[0].logo,
                    "id": result[0].id,
                    "branch_office": result[0].branch_office,
                    "head_office": result[0].head_office,
                    "no_of_employee": result[0].no_of_employee,
                    "product_and_services": result[0].product_and_services
                });
            }
        }, (err)=>console.log("_________err_____________", err)
        );
    //setSocilaLinks(allData.socilLinks)
    };
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: showButton , 1: setShowButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showLoadBtn , 1: setShowLoadBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleProfile = async (e)=>{
        e.preventDefault();
        form = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(form);
        setShowButton(true); // active submit bustton
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_9__/* .editBusinessCompanyDetailsValid */ .fo)(profile);
        setFormError(formResponse);
        console.log("ormError", formResponse);
    };
    // Custom accordion toggle
    const CustomToggle = ({ eventKey  })=>{
        //const handleClick = useAccordionButton(eventKey, (e) => e.preventDefault())
        const handleClick = Object.entries(formError).length !== 0 ? (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(Object.keys(formError), (e)=>e.preventDefault()
        ) : (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(eventKey, (e)=>e.preventDefault()
        );
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default()), {
            placement: "top",
            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: "Edit"
            }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: `nav-link pt-0 pb-0 px-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormEdit)}`,
                onClick: handleClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fi-edit-sr"
                })
            })
        });
    };
    const handleForm = async ()=>{
        try {
            setShowLoadBtn(true);
            setShowButton(false);
            const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_9__/* .editBusinessCompanyDetailsValid */ .fo)(form);
            console.log("_____form_____", form);
            //console.log("profile", formResponse)
            if (Object.entries(formResponse).length !== 0) {
                //console.log("Errror", formResponse)
                setFormError(formResponse);
                setShowLoadBtn(false);
            } else {
                //submit form
                let srRes = await fetch(`${process.env.BASE_URL}/api/protect/update-company-details`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    body: JSON.stringify({
                        "data": form,
                        "csrfToken": csrfToken,
                        "business_id": basicDetails.id
                    })
                });
                let srJson = await srRes.json();
                if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) && (srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
                    setForm(null);
                    setPopUpMsg(srJson.msg);
                    setShowLoadBtn(false);
                    setShowButton(false);
                } else {
                    setPopUpMsg("Something went wrong! Please try after some time.");
                    setShowLoadBtn(false);
                    setShowButton(true);
                }
            }
        } catch (err) {
            setPopUpMsg("Something went wrong! Please try after some time.");
            setShowLoadBtn(false);
            setShowButton(true);
        }
    };
    const handleFileUploads = (e)=>{
        setShowButton(true);
        console.log("FILE DETAILS ", e);
        if (e.length > 0) {
            //console.log("GET FILE DETAILS ", e[0].file.name)
            setForm({
                ...form,
                ["logo"]: e,
                ["new_logo"]: e[0].file.name
            });
        } else {
            //remove
            setForm({
                ...form,
                ["logo"]: null,
                ["new_logo"]: null
            });
        }
    };
    const onSelectFile = async (event, type)=>{
        const selectedFiles = event.target.files;
        let allowedTypes = {
            jpg: "jpg",
            jpeg: "jpeg",
            png: "png",
            webp: "webp"
        };
        //let formData = type == "gst" ? form.gst : form.pancard 
        const selectedFilesArray = Array.from(selectedFiles);
        //console.log("---selectedFilesArray-------", selectedFilesArray)
        let imagesArray = [];
        let i = 0;
        //console.log("--------------", selectedFilesArray[i])
        let extension = selectedFilesArray[i].name.substring(selectedFilesArray[i].name.lastIndexOf(".") + 1).toLowerCase();
        if (selectedFilesArray[i].size / (1024 * 1024) > 2) {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Image size can not be greater than 20 MB.",
                    ["type"]: "error",
                    ["title"]: "Warning"
                };
            });
        } else if (allowedTypes[extension]) {
            const maxWidth = 200;
            const maxHeight = 200;
            //get the image height and width   
            var img = new Image();
            img.src = URL.createObjectURL(selectedFilesArray[i]);
            img.onload = async function() {
                console.log("height-->>>" + img.naturalWidth);
                console.log("width-->>>" + img.naturalHeight);
                if (img.naturalWidth == maxWidth && img.naturalHeight == maxHeight) {
                    let url = await uploadFileOnS3(selectedFilesArray[i]);
                    setForm({
                        ...form,
                        ["logo"]: URL.createObjectURL(selectedFilesArray[i]),
                        ["new_logo"]: url
                    });
                    setProfile({
                        ...profile,
                        ["logo"]: URL.createObjectURL(selectedFilesArray[i]),
                        ["new_logo"]: url
                    });
                } else {
                    //extension not allowed
                    setPopUpMsg(`The image must not be larger than ${maxWidth} x ${maxHeight} pixels`);
                }
                setIsDelete(false);
            };
        } else {
            //extension not allowed
            //setMsgModal((pre) => { return { ...pre, ['message']: "Only jpg,png and webp images allowed.", ["type"]: "error", ['title']: "Warning" } })
            setPopUpMsg("Only jpg,png and webp images allowed.");
        }
        // FOR BUG IN CHROME
        event.target.value = "";
        setShowButton(true);
    };
    const uploadFileOnS3 = async (sourceFile, methodType = "POST")=>{
        const url = process.env.BASE_URL + "/api/upload-file";
        const formData = new FormData();
        formData.append("image", sourceFile);
        formData.append("fileName", sourceFile.name);
        formData.append("imgKey", "image");
        formData.append("uploadPath", "company/logo/");
        const res = await fetch(url, {
            method: methodType,
            body: formData
        });
        const result = await res.json();
        //console.log("-----upload image----------", result)
        if ((result === null || result === void 0 ? void 0 : result.status) == "200") {
            return result === null || result === void 0 ? void 0 : result.filename;
        } else {
            return false;
        }
    };
    const setMessageModal = (e)=>{
        setMsgModal((pre)=>{
            return {
                ...pre,
                ["message"]: "",
                ["type"]: "",
                ["title"]: ""
            };
        });
    };
    const employeeArr = [
        "1-10 employees",
        "10-20 employees",
        "20-30 employees",
        "30-50 employees",
        "50-100 employees",
        "100-200 employees",
        "200-500 employees",
        "500-1000 employees",
        "1000+ employees"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                title: "Success",
                message: popUpMsg,
                setMessage: setPopUpMsg,
                status: true,
                type: !showButton ? "success" : "error"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().ListingInfoHead)}`,
                children: "Company Information"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default()), {
                id: "company_details",
                autoComplete: "off",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "csrfToken",
                        defaultValue: csrfToken
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().ListingInfoBox)}`,
                        alwaysOpen: true,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Year of establishment"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : profile.year_establish) ? profile.year_establish : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "year_establish"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "year_establish",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.year_establish) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            type: "number",
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.year_establish) !== undefined ? "is-invalid" : ""}`,
                                            value: form === null || form === void 0 ? void 0 : form.year_establish,
                                            name: "year_establish",
                                            onChange: handleProfile,
                                            placeholder: "Enter year of establishment"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: " No. of Employees"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.no_of_employee ? employeeArr[profile.no_of_employee] : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "no_of_employee"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "no_of_employee",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.no_of_employee) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default().Select), {
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.no_of_employee) !== undefined ? "is-invalid" : ""}`,
                                            name: "no_of_employee",
                                            id: "no_of_employee",
                                            value: form === null || form === void 0 ? void 0 : form.no_of_employee,
                                            onChange: handleProfile,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "",
                                                    children: "Choose option"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "1",
                                                    children: "1-10 employees"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "2",
                                                    children: "10-20 employees"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "3",
                                                    children: "20-30 employees"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "4",
                                                    children: "30-50 employees"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "5",
                                                    children: "50-100 employees"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "6",
                                                    children: "100-200 employees"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "7",
                                                    children: "200-500 employees"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "8",
                                                    children: "500-1000 employees"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "9",
                                                    children: "1000+ employees"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Products and Services"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.product_and_services ? profile.product_and_services : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "product_and_services"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "product_and_services",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.product_and_services) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            as: "textarea",
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.product_and_services) !== undefined ? "is-invalid" : ""}`,
                                            value: form === null || form === void 0 ? void 0 : form.product_and_services,
                                            name: "product_and_services",
                                            onChange: handleProfile,
                                            placeholder: "Enter Products and Services"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Description"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.description ? profile.description : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "description"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "description",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.description) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            as: "textarea",
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.description) !== undefined ? "is-invalid" : ""}`,
                                            value: form === null || form === void 0 ? void 0 : form.description,
                                            name: "description",
                                            onChange: handleProfile,
                                            placeholder: "Enter description"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "More (Other delights,bonuses etc)"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.more_desc ? profile.more_desc : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "more_desc"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "more_desc",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.more_desc) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            as: "textarea",
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.more_desc) !== undefined ? "is-invalid" : ""}`,
                                            name: "more_desc",
                                            value: form === null || form === void 0 ? void 0 : form.more_desc,
                                            onChange: handleProfile,
                                            placeholder: "Enter more info"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Head Office"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.head_office ? profile.head_office : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "head_office"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "head_office",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.head_office) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.head_office) !== undefined ? "is-invalid" : ""}`,
                                            value: form === null || form === void 0 ? void 0 : form.head_office,
                                            name: "head_office",
                                            onChange: handleProfile,
                                            placeholder: "Enter head office"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Branch Office"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.branch_office ? profile.branch_office : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "branch_office"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "branch_office",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.branch_office) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.branch_office) !== undefined ? "is-invalid" : ""}`,
                                            value: form === null || form === void 0 ? void 0 : form.branch_office,
                                            name: "branch_office",
                                            onChange: handleProfile,
                                            placeholder: "Enter branch office"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Progessional Association"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.association ? profile.association : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "association"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "association",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.association) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            as: "textarea",
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.association) !== undefined ? "is-invalid" : ""}`,
                                            name: "association",
                                            value: form === null || form === void 0 ? void 0 : form.association,
                                            onChange: handleProfile,
                                            placeholder: "Enter progessional association"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Past experience/Projects"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.expreience ? profile.expreience : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "expreience"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "expreience",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.expreience) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            as: "textarea",
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.expreience) !== undefined ? "is-invalid" : ""}`,
                                            value: form === null || form === void 0 ? void 0 : form.expreience,
                                            name: "expreience",
                                            onChange: handleProfile,
                                            placeholder: "Enter past experience/projects"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Award/Accolades/Achievements"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.awards ? profile.awards : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "awards"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "awards",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.awards) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            as: "textarea",
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.awards) !== undefined ? "is-invalid" : ""}`,
                                            value: form === null || form === void 0 ? void 0 : form.awards,
                                            name: "awards",
                                            onChange: handleProfile,
                                            placeholder: "Enter Award/Accolades/Achievements"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Additional information"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: profile.addi_info ? profile.addi_info : "Not specified"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "addi_info"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "addi_info",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.addi_info) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            as: "textarea",
                                            className: `mt-3 ${(formError === null || formError === void 0 ? void 0 : formError.addi_info) !== undefined ? "is-invalid" : ""}`,
                                            value: form === null || form === void 0 ? void 0 : form.addi_info,
                                            name: "addi_info",
                                            onChange: handleProfile,
                                            placeholder: "Enter additional information"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().FormListBox)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-flex justify-content-between",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "pe-2 col-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "form-label",
                                                children: "Image (Company logo)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                className: "d-block ms-0 ms-sm-0",
                                                children: "Can upload image in jpeg, jpg, png, webp  format, upto 20  MB"
                                            }),
                                            (profile === null || profile === void 0 ? void 0 : profile.logo) && !isDelete ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `position-relative overflow-hidden ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().BusinessDetailsHeroLeft)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                            src: profile.logo,
                                                            alt: "",
                                                            quality: 100,
                                                            layout: "fill",
                                                            objectFit: "contain",
                                                            className: "position-relative p-1 rounded"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().ImagesHeadNew)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: `fi-x-circle ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().TrashImg)}`,
                                                                onClick: ()=>setIsDelete((pre)=>!pre ? true : false
                                                                    )
                                                            })
                                                        })
                                                    ]
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-md-3",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            className: "AddImageLabel d-flex text-center justify-content-center flex-column",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-cloud-upload"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "mb-0",
                                                                    children: "Upload Logo"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "file",
                                                                    name: "images",
                                                                    onChange: (e)=>onSelectFile(e, "pancard")
                                                                    ,
                                                                    accept: "image/png , image/jpeg, image/webp, image/jpg, image/svg"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    showButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            onClick: handleForm,
                            children: "Save changes"
                        })
                    }),
                    showLoadBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    animation: "border",
                                    size: "sm",
                                    role: "status",
                                    className: "me-2"
                                }),
                                "Wait..."
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewCompanyDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2423);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5422);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7047);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4301);
/* harmony import */ var _front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2110);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_listings_VerifyOtpBusiness__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(129);
/* harmony import */ var _components_partials_FeedbackConfirmationModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4354);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_16__);



















const ViewContactDetail = ({ basicDetails , csrfToken , userID  })=>{
    var ref11, ref1, ref2, ref3;
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        address: "",
        pincode: "",
        city: "",
        area: "",
        state: "",
        landmark: "",
        lat: "",
        long: "",
        id: "",
        city_id: "",
        state_id: "",
        area_id: ""
    });
    const { 0: errCnt , 1: setErrCnt  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: finalForm , 1: setFinalForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: dataRefresh , 1: setDataRefresh  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: mobs , 1: setMobs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: contacts , 1: setContacts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: emails , 1: setEmails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: webs , 1: setWebs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: landlines , 1: setLandlines  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: basicData , 1: setBasicData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: socialData1 , 1: setSocialData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    /*{ "business_name": updateDetails.name, "address": updateDetails.address, "pincode": updateDetails.pincode, "city": updateDetails.city_id, "area": updateDetails.area_id, "state": updateDetails.state_id, "landmark": updateDetails.landmark, "lat": updateDetails.lat, "long": updateDetails.lng, "id": updateDetails.id }*/ const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: areas , 1: setAreas  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: pinstates , 1: setPinstates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: pincities , 1: setpincities  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: showButton , 1: setShowButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: showLoadBtn , 1: setShowLoadBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: showOTP , 1: setShowOTP  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        phone: false
    });
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        type: "",
        message: "",
        title: ""
    });
    const { 0: otpCheck , 1: setOtpCheck  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        show: false,
        number: "",
        id: ""
    });
    const { 0: confirm , 1: setConfirm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        show: false,
        phone: "",
        id: ""
    });
    const { 0: newFirstNumber , 1: setFirstNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: defaultActivePhone , 1: setdefaultActivePhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const socialIcons = [
        "facebook",
        "google",
        "linkedin",
        "instagram",
        "twitter", 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dataRefresh) {
            const data = (0,_front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_17__/* .BusinessContactInfo */ .eJ)(basicDetails.id, userID);
            setAllrecords(data);
        }
        return setDataRefresh(false);
    }, [
        dataRefresh
    ]);
    const setAllrecords = (allData)=>{
        let promise = new Promise((resolve)=>{
            resolve(allData);
        });
        promise.then((result)=>{
            if (result === null || result === void 0 ? void 0 : result.mob_details) {
                var ref, ref4, ref5, ref6, ref7, ref8, ref9;
                console.log("____result_____contact details_____", result);
                setMobs(result === null || result === void 0 ? void 0 : (ref = result.mob_details) === null || ref === void 0 ? void 0 : ref.filter((val)=>val.type == "1"
                ));
                setContacts(result === null || result === void 0 ? void 0 : (ref4 = result.mob_details) === null || ref4 === void 0 ? void 0 : ref4.filter((val)=>val.type == "5"
                ));
                setEmails(result === null || result === void 0 ? void 0 : (ref5 = result.mob_details) === null || ref5 === void 0 ? void 0 : ref5.filter((val)=>val.type == "2"
                ));
                setWebs(result === null || result === void 0 ? void 0 : (ref6 = result.mob_details) === null || ref6 === void 0 ? void 0 : ref6.filter((val)=>val.type == "3"
                ));
                //setLandlines(result?.mob_details?.filter((val) => val.type == '4'))
                let landLines = result === null || result === void 0 ? void 0 : (ref7 = result.mob_details) === null || ref7 === void 0 ? void 0 : ref7.filter((val)=>val.type == "4"
                );
                let websites = result === null || result === void 0 ? void 0 : (ref8 = result.mob_details) === null || ref8 === void 0 ? void 0 : ref8.filter((val)=>val.type == "3"
                );
                //console.log("-----", landLines)
                //{id: 110, text: '8233484805', is_primary: '0', is_verified: '1', type: '4'}
                if ((result === null || result === void 0 ? void 0 : (ref9 = result.ivr_details) === null || ref9 === void 0 ? void 0 : ref9.length) > 0) {
                    var ref10;
                    setBasicData(result === null || result === void 0 ? void 0 : result.ivr_details[0]);
                    let socialData = (result === null || result === void 0 ? void 0 : (ref10 = result.social_details) === null || ref10 === void 0 ? void 0 : ref10.length) > 0 ? result === null || result === void 0 ? void 0 : result.social_details : [];
                    //console.log("___basic_____", result?.ivr_details[0])
                    setForm((pre)=>{
                        return {
                            ...pre,
                            ["whatsapp_no"]: result === null || result === void 0 ? void 0 : result.ivr_details[0].whatsapp_no,
                            ["tollfree"]: result === null || result === void 0 ? void 0 : result.ivr_details[0].tollfree,
                            ["is_ivr_requested"]: result === null || result === void 0 ? void 0 : result.ivr_details[0].is_ivr_requested,
                            ["ivr_number"]: result === null || result === void 0 ? void 0 : result.ivr_details[0].ivr_number,
                            ["book_now_url"]: result === null || result === void 0 ? void 0 : result.ivr_details[0].book_now_url,
                            social: socialData,
                            ["landlines"]: (landLines === null || landLines === void 0 ? void 0 : landLines.length) > 0 ? landLines : {
                                id: "",
                                text: "",
                                is_primary: "0",
                                is_verified: "0",
                                type: "4"
                            },
                            ["webs"]: (websites === null || websites === void 0 ? void 0 : websites.length) > 0 ? websites : {
                                id: "",
                                text: "",
                                is_primary: "0",
                                is_verified: "0",
                                type: "3"
                            }
                        };
                    });
                } else {
                    setForm((pre)=>{
                        return {
                            ...pre,
                            ["landlines"]: (landLines === null || landLines === void 0 ? void 0 : landLines.length) > 0 ? landLines : {
                                id: "",
                                text: "",
                                is_primary: "0",
                                is_verified: "0",
                                type: "4"
                            },
                            ["webs"]: (websites === null || websites === void 0 ? void 0 : websites.length) > 0 ? websites : {
                                id: "",
                                text: "",
                                is_primary: "0",
                                is_verified: "0",
                                type: "3"
                            }
                        };
                    });
                }
            }
        });
    //setSocilaLinks(allData.socilLinks)
    };
    const handleProfile = async (e)=>{
        console.log("------", e.target.name, e.target.value);
        e.preventDefault();
        profile = {
            ...form,
            [e.target.name]: e.target.value
        };
        if (e.target.name == "book_now_url") {
            let error = validateUrl(e.target.value);
            setFormError((pre)=>({
                    ...pre,
                    ["book_now_url"]: !error
                })
            );
        }
        if (e.target.name == "whatsapp_no") {
            let length = e.target.value.trim().length != 10 ? true : false;
            if (length) {
                setErrCnt((pre)=>pre + 1
                );
            } else {
                setErrCnt((pre)=>pre - 1
                );
            }
            setFormError((pre)=>({
                    ...pre,
                    ["whatsapp_no"]: length
                })
            );
        }
        setForm(profile);
        setShowButton(true); // active submit button
        setFinalForm((pre)=>({
                ...pre,
                [e.target.name]: e.target.value
            })
        );
    };
    // Custom accordion toggle
    const CustomToggle = ({ eventKey  })=>{
        const handleClick = (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(eventKey, (e)=>e.preventDefault()
        );
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default()), {
            placement: "top",
            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: "Edit"
            }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "javascript:void(0);",
                className: `nav-link pt-0 pb-0 pe-0 ps-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormEdit)}`,
                onClick: handleClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fi-edit-sr"
                })
            })
        });
    };
    const deletePhone = (phone, pkID = "", dataType = "phone")=>{
        setConfirm((pre)=>{
            return {
                ...pre,
                ["show"]: true,
                ["id"]: pkID,
                ["phone"]: phone,
                ["dataType"]: dataType
            };
        });
    };
    const deleteDataReq = (text, pkID = "", dataType = "phone")=>{
        setConfirm((pre)=>{
            return {
                ...pre,
                ["show"]: true,
                ["id"]: pkID,
                ["phone"]: text,
                ["dataType"]: dataType
            };
        });
    };
    const deleteRecords = async (phone = "", pkID = "", dataType = "phone", inex)=>{
        setConfirm((pre)=>{
            return {
                ...pre,
                ["show"]: false,
                ["id"]: "",
                ["phone"]: "",
                ["dataType"]: ""
            };
        });
        if (pkID) {
            let addOptions = {
                method: "POST",
                body: JSON.stringify({
                    phone: phone,
                    business_id: basicDetails.id,
                    pkID: pkID,
                    type: "remove",
                    dataType: dataType
                })
            };
            let addRes = await fetch(`${process.env.BASE_URL}/api/protect/verify-otp-business`, addOptions);
            let addJson = await addRes.json();
            if (addJson.status != "undefined" && addJson.status == 200) {
                // console.log("______Final________", addJson)
                setMsgModal((pre)=>{
                    return {
                        ...pre,
                        ["message"]: addJson.msg,
                        ["type"]: "success",
                        ["title"]: "Success"
                    };
                });
                console.log("Data refresh was ---------", dataRefresh);
                setDataRefresh(true);
            } else {
                setMsgModal((pre)=>{
                    return {
                        ...pre,
                        ["message"]: "Something went wrong",
                        ["type"]: "error",
                        ["title"]: "Error"
                    };
                });
            }
        } else {
            //setMobs((pre) => {return pre.filter((val) => val.text != phone)})
            delete contacts[inex];
            let newCon = contacts.filter((item)=>!!item
            );
            setContacts(newCon);
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Record deleted successfully.",
                    ["type"]: "success",
                    ["title"]: "Success"
                };
            });
        //setDataRefresh(true)
        }
    };
    const handleForm = async ()=>{
        // console.log("----", finalForm);
        // console.log("----", formError);
        //  console.log("cnt========>", contacts)
        //  console.log(Object.values(formError).some((val) => val === true), "----check----")
        Object.values(contacts).some((val)=>{
            console.log("Checking here--------", val.error);
        });
        if (Object.values(formError).some((val)=>val === true
        ) || Object.values(contacts).some((val)=>val.error === true
        )) {
            //have some error
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Please fill all required fields then try to submit.",
                    ["type"]: "error",
                    ["title"]: "Error"
                };
            });
        } else {
            setShowButton(2);
            //submit form
            let srRes = await fetch(`${process.env.BASE_URL}/api/protect/update-contact-listing`, {
                method: "POST",
                body: JSON.stringify({
                    data: {
                        ...finalForm,
                        ["business_id"]: basicDetails.id
                    },
                    csrfToken: csrfToken,
                    ["contacts"]: contacts
                })
            });
            let srJson = await srRes.json();
            console.log("srJson________________", srJson);
            if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) && (srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
                console.log("FINALSUBMIT", srJson.data);
                //setBasicDetails(srJson.data)
                setMsgModal((pre)=>{
                    return {
                        ...pre,
                        ["message"]: "Records updated successfully.",
                        ["type"]: "success",
                        ["title"]: "Success"
                    };
                });
                setForm(null);
                setFinalForm(null);
                setDataRefresh(true);
                setShowButton(0);
            } else {
                setShowButton(1);
                setMsgModal((pre)=>{
                    return {
                        ...pre,
                        ["message"]: "Something went wrong! Please try after sometime.",
                        ["type"]: "error",
                        ["title"]: "Error"
                    };
                });
            }
        }
    };
    const setVerifiedUser = (status)=>{
        //console.log("status Otpp----", status)
        setOtpCheck((pre)=>{
            return {
                ...pre,
                ["show"]: false,
                ["number"]: "",
                ["fields"]: ""
            };
        });
    };
    const sendOTPVerify = (phone = "", id = "", is_primary = false)=>{
        if (phone.trim().length == 10) {
            let newID = id.includes("new") ? "" : id;
            //setMsgModal((pre) => { return { ...pre, ['message']: "OTP Sent", ["type"]: "success", ['title']: "Success" } })
            setOtpCheck((pre)=>{
                return {
                    ...pre,
                    ["show"]: true,
                    ["number"]: phone.trim(),
                    ["id"]: newID,
                    is_primary: is_primary,
                    ["business_id"]: basicDetails.id,
                    ["type"]: "phone"
                };
            });
        } else {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "",
                    ["type"]: "error",
                    ["title"]: "Error"
                };
            });
        }
    };
    const sendOTPVerifyMail = (phone = "", id = "", is_primary = false)=>{
        // console.log(phone, "--------", id, is_primary)
        if (emailValidator(phone.trim())) {
            let newID = id.toString().includes("new") ? "" : id;
            setOtpCheck((pre)=>{
                return {
                    ...pre,
                    ["show"]: true,
                    ["number"]: phone.trim(),
                    ["id"]: newID,
                    is_primary: is_primary,
                    ["business_id"]: basicDetails.id,
                    ["type"]: "mail"
                };
            });
        } else {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Invalid email address",
                    ["type"]: "error",
                    ["title"]: "Error"
                };
            });
        }
    };
    const updatePhone = (e)=>{
        e.preventDefault();
        //console.log(val.text)
        if (e.target.value.trim().length == 10) {
            let filter = mobs.filter((val)=>val.id != e.target.getAttribute("datakey") && val.text == e.target.value.trim()
            );
            //console.log("filter-----", filter)
            if (filter.length <= 0) {
                setShowOTP((pre)=>{
                    return {
                        ...pre,
                        [e.target.name]: true
                    };
                });
            } else {
                setShowOTP((pre)=>{
                    return {
                        ...pre,
                        [e.target.name]: false
                    };
                });
                setMsgModal((pre)=>{
                    return {
                        ...pre,
                        ["message"]: "Already exists number. Please use a different number.",
                        ["type"]: "error",
                        ["title"]: "Alert"
                    };
                });
            }
        } else {
            setShowOTP((pre)=>{
                return {
                    ...pre,
                    [e.target.name]: false
                };
            });
        }
        mobs.map((val)=>{
            if (val.id == e.target.getAttribute("datakey")) {
                return val.text = e.target.value;
            }
        });
    // profile = { ...form, [e.target.name]: e.target.value }
    //console.log(mobs,"----------",e.target.value,"----", e.target.getAttribute("datakey"))
    //console.log(mobs)
    };
    const setMessageModal = (e)=>{
        setMsgModal((pre)=>{
            return {
                ...pre,
                ["message"]: "",
                ["type"]: "",
                ["title"]: ""
            };
        });
    };
    const addNewPhone = ()=>{
        // console.log("Clicked ----------")
        let count = mobs.length;
        //values.push()
        setMobs((pre)=>{
            return [
                ...pre,
                {
                    ["id"]: "new" + count,
                    ["text"]: "",
                    ["is_primary"]: "0",
                    ["is_verified"]: "0",
                    ["type"]: "1"
                }, 
            ];
        });
        setdefaultActivePhone("new" + count);
    };
    const firstNumberUpdate = (val)=>{
        setFirstNumber(val);
        //console.log(val,"-----------val received")
        if (val.trim().length == "10") {
        //console.log("SHOW OTP butn")
        }
    };
    const handleChanges = (e)=>{
        let filterData = landlines.filter((val)=>val.id == e.target.getAttribute("datakey")
        );
        //console.log("filter----", filterData)
        if (filterData.length > 0) {
            landlines.map((lval, indx)=>{
                if (lval.id == e.target.getAttribute("datakey")) {
                    return lval.text = e.target.value;
                }
            });
            setLandlines(landlines);
        // console.log("landlines---", landlines)
        } else {
            setLandlines((pre)=>{
                return [
                    ...pre,
                    {
                        ["id"]: e.target.getAttribute("datakey"),
                        ["text"]: e.target.value,
                        ["is_primary"]: "0",
                        ["is_verified"]: "0",
                        ["type"]: "4",
                        ["show_btn"]: false
                    }, 
                ];
            });
        }
    };
    const handleEmailUpdate = (e)=>{
        if (emailValidator(e.target.value.trim())) {
            let filter = emails.filter((val)=>val.id != e.target.getAttribute("datakey") && val.text == e.target.value.trim()
            );
            emails.map((val, inx)=>{
                if (val.id == e.target.getAttribute("datakey")) {
                    return emails[inx].error = false;
                }
            });
            //console.log("filter-----", filter)
            if (filter.length <= 0) {
                emails.map((val, inx)=>{
                    if (val.id == e.target.getAttribute("datakey")) {
                        return emails[inx].otp = true;
                    }
                });
                setShowOTP((pre)=>{
                    return {
                        ...pre,
                        [e.target.name]: true
                    };
                });
            } else {
                emails.map((val, inx)=>{
                    if (val.id == e.target.getAttribute("datakey")) {
                        return emails[inx].otp = false;
                    }
                });
                setShowOTP((pre)=>{
                    return {
                        ...pre,
                        [e.target.name]: false
                    };
                });
                setMsgModal((pre)=>{
                    return {
                        ...pre,
                        ["message"]: "Already exists mail. Please use a different mail.",
                        ["type"]: "error",
                        ["title"]: "Alert"
                    };
                });
            }
        } else {
            emails.map((val, inx)=>{
                if (val.id == e.target.getAttribute("datakey")) {
                    emails[inx].error = true;
                    emails[inx].otp = false;
                    return emails;
                }
            });
            setShowOTP((pre)=>{
                return {
                    ...pre,
                    [e.target.name]: false
                };
            });
        }
        emails.map((val, inx)=>{
            if (val.id == e.target.getAttribute("datakey")) {
                emails[inx].change = true;
                val.text = e.target.value;
                return emails;
            }
        });
    };
    const emailValidator = (email)=>{
        if (!email) {
            return false;
        } else if (!new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(email)) {
            return false;
        } else {
            return true;
        }
    };
    const addNewEmail = ()=>{
        let count = mobs.length;
        setEmails((pre)=>{
            return [
                ...pre,
                {
                    ["id"]: "email_new_" + count,
                    ["text"]: "",
                    ["is_primary"]: "0",
                    ["is_verified"]: "0",
                    ["type"]: "2",
                    ["change"]: true
                }, 
            ];
        });
    //setdefaultActivePhone("new" + count)
    };
    const addWebsites = ()=>{
        var ref;
        let newSocialValues = (form === null || form === void 0 ? void 0 : form.webs) && (form === null || form === void 0 ? void 0 : (ref = form.webs) === null || ref === void 0 ? void 0 : ref.length) > 0 ? [
            ...form === null || form === void 0 ? void 0 : form.webs
        ] : [
            {
                id: "",
                text: "",
                is_primary: "0",
                is_verified: "0",
                type: "3"
            }
        ];
        let count = newSocialValues.length;
        newSocialValues.push({
            ["id"]: "website_new_" + count,
            ["text"]: "",
            ["is_primary"]: "0",
            ["is_verified"]: "0",
            ["type"]: "1"
        });
        setForm((pre)=>({
                ...pre,
                ["webs"]: newSocialValues
            })
        );
    //console.log("Clicked ----------")
    //
    //values.push()
    //setWebs((pre) => { return [...pre, { ["id"]: "website_new_" + count, ["text"]: "", ["is_primary"]: "0", ["is_verified"]: "0", ["type"]: "1" }] })
    };
    const addSocials = ()=>{
        let dataNew = socialIcons.map((val, inx)=>{
            //console.log(form?.social)
            if (typeof (form === null || form === void 0 ? void 0 : form.social.find(({ social_name  })=>social_name == inx + 1
            )) === "undefined") {
                return {
                    id: "",
                    social_name: inx + 1,
                    social_link: ""
                };
            } else {
                return null;
            }
        });
        let finalAvailable = dataNew.filter((val)=>val != null
        );
        //console.log("New Add-------", finalAvailable)
        let newSocial = form.social;
        newSocial.push(finalAvailable[0]);
        //console.log(newSocial)
        //form.social.push(finalAvailable[0])
        setForm((pre)=>({
                ...pre,
                ["social"]: newSocial
            })
        );
    };
    const handleSocials = (e, inx)=>{
        let newSocialValues = (form === null || form === void 0 ? void 0 : form.social) ? [
            ...form === null || form === void 0 ? void 0 : form.social
        ] : [];
        newSocialValues[inx].social_link = e.target.value;
        newSocialValues[inx].error = !validateUrl(e.target.value);
        if (!validateUrl(e.target.value)) {
            setFormError((pre)=>({
                    ...pre,
                    [e.target.name]: true
                })
            );
        } else {
            setFormError((pre)=>({
                    ...pre,
                    [e.target.name]: false
                })
            );
        }
        setForm((pre)=>({
                ...pre,
                ["social"]: newSocialValues
            })
        );
        setFinalForm((pre)=>({
                ...pre,
                ["social"]: newSocialValues
            })
        );
        setShowButton(true);
    };
    const handleWebs = (e, inx)=>{
        var ref;
        let newSocialValues = (form === null || form === void 0 ? void 0 : form.webs) && (form === null || form === void 0 ? void 0 : (ref = form.webs) === null || ref === void 0 ? void 0 : ref.length) > 0 ? [
            ...form === null || form === void 0 ? void 0 : form.webs
        ] : [
            {
                id: "",
                text: "",
                is_primary: "0",
                is_verified: "0",
                type: "3"
            }
        ];
        newSocialValues[inx].text = e.target.value;
        newSocialValues[inx].error = !validateUrl(e.target.value);
        if (!validateUrl(e.target.value)) {
            setFormError((pre)=>({
                    ...pre,
                    [e.target.name]: true
                })
            );
        } else {
            setFormError((pre)=>({
                    ...pre,
                    [e.target.name]: false
                })
            );
        }
        setForm((pre)=>({
                ...pre,
                ["webs"]: newSocialValues
            })
        );
        setFinalForm((pre)=>({
                ...pre,
                ["webs"]: newSocialValues
            })
        );
        setShowButton(true);
    };
    const handleLandline = (e, inx)=>{
        var ref;
        let newLandlineValues = (form === null || form === void 0 ? void 0 : form.landlines) && (form === null || form === void 0 ? void 0 : (ref = form.landlines) === null || ref === void 0 ? void 0 : ref.length) > 0 ? [
            ...form === null || form === void 0 ? void 0 : form.landlines
        ] : [
            {
                id: "",
                text: "",
                is_primary: "0",
                is_verified: "0",
                type: "4"
            }
        ];
        //{id: 110, text: '8233484805', is_primary: '0', is_verified: '1', type: '4'}
        newLandlineValues[inx].text = e.target.value;
        if (!landlineValidation(e.target.value)) {
            newLandlineValues[inx].error = "Only number between 5 to 14";
        } else {
            newLandlineValues[inx].error = "";
        }
        //newLandlineValues[inx].error = validateUrl(e.target.value);
        setForm((pre)=>({
                ...pre,
                ["landlines"]: newLandlineValues
            })
        );
        setFinalForm((pre)=>({
                ...pre,
                ["landlines"]: newLandlineValues
            })
        );
        setShowButton(true);
    };
    function landlineValidation(val) {
        return /^[1-9][0-9]{5,14}$/i.test(val);
    }
    function validateUrl(value) {
        return /^(?:(?:(?:http(s)?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }
    const updateSetContact = (data)=>{
        console.log("data-------------------------------", data);
        console.log("setData", data);
        setContacts(data);
    };
    //console.log(mobs)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            otpCheck.show && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_VerifyOtpBusiness__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                centered: true,
                size: "",
                pillButtons: true,
                phoneNumber: otpCheck.number,
                show: otpCheck.show,
                isPrimary: otpCheck.is_primary,
                titleMsg: "Verify OTP",
                removeClose: true,
                onHide: ()=>setOtpCheck((pre)=>{
                        return {
                            ...pre,
                            ["show"]: false,
                            ["number"]: "",
                            ["id"]: ""
                        };
                    })
                ,
                primaryID: otpCheck.id,
                businessID: basicDetails.id,
                setDataRefresh: setDataRefresh,
                sendType: (otpCheck === null || otpCheck === void 0 ? void 0 : otpCheck.type) || "phone"
            }),
            (confirm === null || confirm === void 0 ? void 0 : confirm.show) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_FeedbackConfirmationModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                centered: true,
                size: "",
                pillButtons: true,
                show: true,
                deleteFeedbackRecord: deleteRecords,
                recordID: confirm.phone,
                otherID: [
                    confirm.id,
                    confirm.dataType
                ],
                onHide: ()=>setConfirm({
                        show: false,
                        phone: "",
                        id: ""
                    })
            }),
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ListingInfoHead)}`,
                children: "Contact Information"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default()), {
                id: "user-profile-update",
                autoComplete: "off",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "csrfToken",
                        defaultValue: csrfToken
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ListingInfoBox)}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    console.log("----------", contacts),
                                    (contacts === null || contacts === void 0 ? void 0 : contacts.length) > 0 ? contacts.map((val, indx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContactPersonData, {
                                            indexID: indx,
                                            nameUser: val.name,
                                            phoneUser: val.phone,
                                            emailUser: val.email,
                                            is_primary: val.is_primary,
                                            setContacts: updateSetContact,
                                            contacts: contacts,
                                            setShowButton: setShowButton,
                                            is_verified_phone: val.is_verified_phone,
                                            is_verified: val.is_verified,
                                            setOtpCheck: setOtpCheck,
                                            setMsgModal: setMsgModal,
                                            idContacts: val.id,
                                            emailValidator: emailValidator,
                                            businessID: basicDetails.id,
                                            deleteRecords: deleteRecords,
                                            csrfToken: csrfToken,
                                            businessContactId: val.id,
                                            isMobileDisplay: val.is_display_mobile
                                        }, indx)
                                    ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContactPersonData, {
                                        indexID: 0,
                                        nameUser: "",
                                        phoneUser: "",
                                        emailUser: "",
                                        is_primary: 1,
                                        setContacts: updateSetContact,
                                        contacts: contacts,
                                        setShowButton: setShowButton,
                                        is_verified_phone: 0,
                                        is_verified: 0,
                                        setOtpCheck: setOtpCheck,
                                        setMsgModal: setMsgModal,
                                        idContacts: 0,
                                        emailValidator: emailValidator,
                                        businessID: basicDetails.id,
                                        deleteRecords: deleteRecords,
                                        csrfToken: csrfToken,
                                        businessContactId: 0
                                    }, 0)
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Whatsapp no."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (form === null || form === void 0 ? void 0 : form.whatsapp_no) ? form === null || form === void 0 ? void 0 : form.whatsapp_no : "-"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "whatsapp"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "whatsapp",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.whatsapp_no) ? "is-invalid" : ""}`,
                                                as: (react_number_format__WEBPACK_IMPORTED_MODULE_4___default()),
                                                format: "##########",
                                                value: (form === null || form === void 0 ? void 0 : form.whatsapp_no) || "",
                                                name: "whatsapp_no",
                                                onChange: handleProfile,
                                                placeholder: "Enter whatsapp number"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: (form === null || form === void 0 ? void 0 : (ref11 = form.landlines) === null || ref11 === void 0 ? void 0 : ref11.length) > 0 ? form.landlines.map((val, inx)=>{
                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `d-flex justify-content-between ${inx > 0 ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().MultipleInput) : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "pe-2",
                                                        children: [
                                                            inx == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                className: "form-label",
                                                                children: "Landline no."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "mb-0",
                                                                children: val.text
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                        eventKey: "landline_" + val.id
                                                    })
                                                ]
                                            }, "landline_" + val.id),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                                eventKey: "landline_" + val.id,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        console.log("----landline--------", val),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            type: "tel",
                                                            className: `mt-2 ${(val === null || val === void 0 ? void 0 : val.error) ? "is-invalid" : ""}`,
                                                            name: "landline_" + val.id,
                                                            value: val.text,
                                                            onChange: (e)=>handleLandline(e, inx)
                                                            ,
                                                            placeholder: "Enter landline number",
                                                            datakey: val.id
                                                        }),
                                                        (val === null || val === void 0 ? void 0 : val.error) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                            type: "invalid",
                                                            tooltip: true,
                                                            children: [
                                                                " ",
                                                                val === null || val === void 0 ? void 0 : val.error
                                                            ]
                                                        }) : ""
                                                    ]
                                                })
                                            })
                                        ]
                                    });
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `d-flex justify-content-between`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "pe-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "form-label",
                                                            children: "Landline no."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mb-0",
                                                            children: ``
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                    eventKey: "landline"
                                                })
                                            ]
                                        }, "landline"),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                            eventKey: "landline",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    type: "tel",
                                                    className: `mt-2`,
                                                    name: "landline",
                                                    value: "",
                                                    onChange: (e)=>handleLandline(e, 0)
                                                    ,
                                                    placeholder: "Enter landline number",
                                                    datakey: ""
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Toll free no."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: form === null || form === void 0 ? void 0 : form.toll_free
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "tollfree"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "tollfree",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    type: "tel",
                                                    className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.toll_free) !== undefined ? "is-invalid" : ""}`,
                                                    name: "toll_free",
                                                    value: form === null || form === void 0 ? void 0 : form.toll_free,
                                                    onChange: handleProfile,
                                                    placeholder: "Enter toll free number"
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.toll_free) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.toll_free
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-flex align-items-center justify-content-between",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "pe-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: "form-label",
                                                children: [
                                                    "Virtual Number",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        placement: "right",
                                                        overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            children: "This would be business default number and listed on business page."
                                                        }),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `fi-help ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().helpIcon)}`
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Check), {
                                                        type: "checkbox",
                                                        id: "check-2",
                                                        checked: true,
                                                        className: `mt-0 mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().CustomCheckBox) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().VirtualCheck)}`,
                                                        label: "Yes, I would like to add virtual number"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0 ms-5",
                                                        children: (form === null || form === void 0 ? void 0 : form.ivr_number) ? form === null || form === void 0 ? void 0 : form.ivr_number : "-"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: (form === null || form === void 0 ? void 0 : (ref1 = form.webs) === null || ref1 === void 0 ? void 0 : ref1.length) > 0 ? form === null || form === void 0 ? void 0 : form.webs.map((val, inx)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `d-flex justify-content-between ${inx > 0 ? (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().MultipleInput) : ""} `,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "pe-2",
                                                        children: [
                                                            inx == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                className: "form-label",
                                                                children: "Website"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "mb-0",
                                                                children: val === null || val === void 0 ? void 0 : val.text
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "d-flex align-items-center",
                                                        children: [
                                                            inx > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                onClick: ()=>deletePhone(val.text, val.id, "website")
                                                                ,
                                                                className: `me-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().InputDelete)}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-del-sr"
                                                                })
                                                            }),
                                                            inx == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                placement: "top",
                                                                overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    children: "Add"
                                                                }),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: `pe-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().NumberAdd)}`,
                                                                    onClick: ()=>addWebsites()
                                                                    ,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-plus-circle"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                                eventKey: "website_" + (val === null || val === void 0 ? void 0 : val.id)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                                eventKey: "website_" + (val === null || val === void 0 ? void 0 : val.id),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            className: `mt-2 ${formError["website_" + (val === null || val === void 0 ? void 0 : val.id)] ? "is-invalid" : ""}`,
                                                            onChange: (e)=>handleWebs(e, inx)
                                                            ,
                                                            value: val.text,
                                                            name: "website_" + (val === null || val === void 0 ? void 0 : val.id),
                                                            placeholder: "Enter web address"
                                                        }),
                                                        (formError === null || formError === void 0 ? void 0 : formError.area) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                            type: "invalid",
                                                            tooltip: true,
                                                            children: [
                                                                " ",
                                                                "Invalid URL"
                                                            ]
                                                        }) : ""
                                                    ]
                                                })
                                            })
                                        ]
                                    });
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `d-flex justify-content-between `,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "pe-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "form-label",
                                                            children: "Website"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mb-0",
                                                            children: ``
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            placement: "top",
                                                            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                children: "Add"
                                                            }),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: `pe-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().NumberAdd)}`,
                                                                onClick: ()=>addWebsites()
                                                                ,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-plus-circle"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                            eventKey: "website"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                            eventKey: "website",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    className: `mt-2 ${formError["website"] ? "is-invalid" : ""}`,
                                                    onChange: (e)=>handleWebs(e, 0)
                                                    ,
                                                    value: ``,
                                                    name: "website",
                                                    placeholder: "Enter web address"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex align-items-center justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Check), {
                                                        type: "checkbox",
                                                        checked: true,
                                                        id: "check-4",
                                                        className: `mt-0 mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().CustomCheckBox) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().GetDealNow)}`,
                                                        label: "Get Deal Now"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        placement: "right",
                                                        overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            children: 'Please give URL link for "Get Deal Now" Button, user will redirected to the given URL for booking'
                                                        }),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `fi-help ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().helpIcon)}`
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0 ms-5 ps-5",
                                                        children: (form === null || form === void 0 ? void 0 : form.book_now_url) ? form === null || form === void 0 ? void 0 : form.book_now_url : "-"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "getdealnow"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "getdealnow",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.book_now_url) ? "is-invalid" : ""}`,
                                                    onChange: handleProfile,
                                                    value: (form === null || form === void 0 ? void 0 : form.book_now_url) || "",
                                                    name: "book_now_url",
                                                    placeholder: "Enter URL"
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.book_now_url) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        "Invalid URL. Eg. Start with https://"
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `border-0 pb-0 mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex align-items-center justify-content-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pe-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "form-label mb-0",
                                                    children: "Social media links"
                                                })
                                            }),
                                            (form === null || form === void 0 ? void 0 : (ref2 = form.social) === null || ref2 === void 0 ? void 0 : ref2.length) <= 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                onClick: addSocials,
                                                class: `mt-0 btn btn-primary ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().AddMoreBtnContact)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    class: "fi-plus"
                                                })
                                            })
                                        ]
                                    }),
                                    (form === null || form === void 0 ? void 0 : (ref3 = form.social) === null || ref3 === void 0 ? void 0 : ref3.length) > 0 && (form === null || form === void 0 ? void 0 : form.social.map((val, inx)=>{
                                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `d-flex align-items-center mt-3 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().SocialLinks)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `d-flex align-items-center justify-content-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().SocialLinksIcon)}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: `fi-${socialIcons[val.social_name - 1]}`
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    className: `mt-0 ${(val === null || val === void 0 ? void 0 : val.error) ? "is-invalid" : ""}`,
                                                    onChange: (e)=>handleSocials(e, inx)
                                                    ,
                                                    value: (val === null || val === void 0 ? void 0 : val.social_link) || "",
                                                    name: "social_" + val.social_name,
                                                    placeholder: "Enter social link"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "d-flex align-items-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            onClick: (e)=>{
                                                                return deleteDataReq(e.target.value, val === null || val === void 0 ? void 0 : val.id, "social");
                                                            },
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().InputDelete)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-del-sr"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        }, "social_" + val.social_name);
                                    }))
                                ]
                            })
                        ]
                    }),
                    showButton == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            onClick: handleForm,
                            children: "Save changes"
                        })
                    }),
                    showLoadBtn == 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    animation: "border",
                                    size: "sm",
                                    role: "status",
                                    className: "me-2"
                                }),
                                "Wait..."
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewContactDetail);
const ContactPersonData = ({ key , indexID , idContacts ="" , nameUser ="" , emailUser ="" , phoneUser ="" , is_primary , setContacts , contacts , setShowButton , is_verified_phone ="0" , is_verified ="0" , setOtpCheck , setMsgModal , emailValidator , businessID , deleteRecords , csrfToken , businessContactId , isMobileDisplay ,  })=>{
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    let showOTP = {};
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: nameUser,
        email: emailUser,
        phone: phoneUser,
        is_verified_phone: is_verified_phone,
        is_verified: is_verified,
        contact_p_checkbox: isMobileDisplay
    });
    const sendOTPVerify = ()=>{};
    const addNewPhone = ()=>{
        let len = contacts.length - 1;
        setContacts((pre)=>[
                ...pre,
                {
                    id: "",
                    text: "",
                    is_primary: "0",
                    is_verified: "0",
                    type: "5",
                    email: "",
                    phone: "",
                    is_verified_phone: "0"
                }, 
            ]
        );
    };
    const CustomToggle = ({ eventKey  })=>{
        //const handleClick = Object.entries(formError).length !== 0 ? useAccordionButton(eventKey, (e) => e.preventDefault()) : useAccordionButton(eventKey, (e) => e.preventDefault())
        const handleClick = (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(eventKey, (e)=>{
            console.log("tttttttttt", e);
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default()), {
            placement: "top",
            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: "Edit"
            }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "javascript:void(0);",
                className: `nav-link pt-0 pb-0 pe-0 ps-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormEdit)}`,
                onClick: handleClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fi-edit-sr"
                })
            })
        });
    };
    const updateContact = (e, id)=>{
        let newContact = contacts;
        if (e.target.name == "name") {
            newContact[id].name = e.target.value;
            let error = formValidate(e.target.name, e.target.value);
            newContact[id].error = error;
            setForm((pre)=>({
                    ...pre,
                    ["name"]: e.target.value
                })
            );
            //console.log("contact     ",contacts)
            if (!error) {
                setContacts(newContact);
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        } else if (e.target.name == "email") {
            (newContact === null || newContact === void 0 ? void 0 : newContact.length) <= 0 ? newContact.push({
                id: "",
                text: "",
                is_primary: "1",
                is_verified: "0",
                type: "5",
                email: "",
                phone: "",
                is_verified_phone: "0"
            }) : newContact;
            newContact[id].email = e.target.value;
            let error = formValidate(e.target.name, e.target.value);
            newContact[id].error = error;
            newContact[id].mailUpdate = true;
            setForm((pre)=>({
                    ...pre,
                    ["email"]: e.target.value
                })
            );
            if (!error) {
                setContacts(newContact);
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        } else if (e.target.name == "phone") {
            console.log("newContactdfdfgfdgfdgdf!!!!!!", newContact);
            (newContact === null || newContact === void 0 ? void 0 : newContact.length) <= 0 ? newContact.push({
                id: "",
                text: "",
                is_primary: "1",
                is_verified: "0",
                type: "5",
                email: "",
                phone: "",
                is_verified_phone: "0"
            }) : newContact;
            newContact[id].phone = e.target.value;
            let error = formValidate(e.target.name, e.target.value);
            newContact[id].error = error;
            newContact[id].phoneUpdate = true;
            setForm((pre)=>({
                    ...pre,
                    ["phone"]: e.target.value
                })
            );
            if (!error) {
                setContacts(newContact);
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }
    };
    const formValidate = (name, val)=>{
        console.log(name, val, "   check");
        /*
        if (name == "name" && val.length < 2) {
            setFormError((pre) => ({ ...pre, ["name"]: "Minimum 2 charactors required." }))
            return true
        }
        else if (name == "name" && val.length > 50) {

            setFormError((pre) => ({ ...pre, ["name"]: "Maximum 50 charactors required." }))
            return true;
        }
        else if (name == "name") {
            delete formError.name; 
            setFormError(formError)
            return false
        }
        
        else
        */ if (name == "email" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(val)) {
            setFormError((pre)=>({
                    ...pre,
                    ["email"]: "Invalid email address."
                })
            );
            return true;
        } else if (name == "email") {
            delete formError.email;
            setFormError(formError);
            return false;
        } else if (name == "phone" && val.trim().length != 10) {
            setFormError((pre)=>({
                    ...pre,
                    ["phone"]: "10 digits phone number allowed."
                })
            );
            return true;
        } else if (name == "phone") {
            delete formError.phone;
            setFormError(formError);
            return false;
        }
    };
    const sendOTPVerifyMail = (phone = "", id = "", type)=>{
        // console.log(phone, "--------", id, is_primary)
        if (emailValidator(phone.trim()) && type == "mail") {
            let newID = id.toString().includes("new") ? "" : id;
            setOtpCheck((pre)=>{
                return {
                    ...pre,
                    ["show"]: true,
                    ["number"]: phone.trim(),
                    ["id"]: id,
                    is_primary: is_primary,
                    ["business_id"]: businessID,
                    ["type"]: type
                };
            });
        } else if (type == "phone" && phone.trim().length == 10) {
            setOtpCheck((pre)=>{
                return {
                    ...pre,
                    ["show"]: true,
                    ["number"]: phone.trim(),
                    ["id"]: id,
                    is_primary: is_primary,
                    ["business_id"]: businessID,
                    ["type"]: type
                };
            });
        } else {
            console.log(phone, phone.trim().length, id, type);
            let typeName = type == "mail" ? "email address" : "phone number";
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Invalid " + typeName,
                    ["type"]: "error",
                    ["title"]: "Error"
                };
            });
        }
    };
    const handleCheckboxChange = async (index)=>{
        // setForm((prevForm) => {
        //   const updatedForm = { ...prevForm };
        //   console.log("updatedForm", updatedForm);
        //   updatedForm.contact_p_checkbox =
        //     updatedForm.contact_p_checkbox === "1" ? "1" : "0";
        //   console.log("updatedForm---------------------", updatedForm);
        //   return updatedForm;
        // });
        console.log("form.contact_p_checkbox", form);
        const updatedForm = {
            ...form,
            contact_p_checkbox: form.contact_p_checkbox === "1" ? "0" : "1"
        };
        console.log("updatedForm-----------", updatedForm);
        setForm(updatedForm);
        console.log("form-----------------", form);
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/update-mobile-show-hide`, {
            method: "POST",
            body: JSON.stringify({
                data: {
                    ["value"]: updatedForm.contact_p_checkbox,
                    ["primary_id"]: businessContactId
                },
                csrfToken: csrfToken
            })
        });
        let srJson = await srRes.json();
        console.log("srJson________________", srJson);
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) && (srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
            console.log("FINALSUBMIT", srJson.data);
            //setBasicDetails(srJson.data)
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Records updated successfully.",
                    ["type"]: "success",
                    ["title"]: "Success"
                };
            });
        } else {
            setShowButton(1);
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Something went wrong! Please try after sometime.",
                    ["type"]: "error",
                    ["title"]: "Error"
                };
            });
        }
    // Rest of your logic (updating formValues, checking validation, etc.)
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ContentinfoCard)}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex align-items-center justify-content-between mb-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Contact Person"
                            }),
                            indexID == "0" && contacts.length <= 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "d-flex align-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>addNewPhone()
                                    ,
                                    type: "button",
                                    class: `mt-0 btn btn-primary ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().AddMoreBtnContact)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        class: "fi-plus"
                                    })
                                })
                            }),
                            indexID > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "d-flex align-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>deleteRecords(phoneUser ? phoneUser : emailUser, idContacts, "phone", indexID)
                                    ,
                                    type: "button",
                                    class: `mt-0 btn btn-primary ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().AddMoreBtnContact)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        class: "fi-minus"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_15___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_16___default()), {
                                md: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ContentinfoCardBoxMain)}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ContentinfoCardBox)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `d-flex justify-content-between`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "mb-0",
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                        eventKey: "name1" + indexID
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: (form === null || form === void 0 ? void 0 : form.name) || ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                                eventKey: "name1" + indexID,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "d-flex align-items-center mt-2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                value: (form === null || form === void 0 ? void 0 : form.name) || "",
                                                                name: "name",
                                                                onChange: (e)=>updateContact(e, indexID)
                                                                ,
                                                                placeholder: "Contact person name"
                                                            })
                                                        }),
                                                        (formError === null || formError === void 0 ? void 0 : formError.name) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                            type: "invalid",
                                                            tooltip: true,
                                                            style: {
                                                                display: "block"
                                                            },
                                                            children: [
                                                                " ",
                                                                formError === null || formError === void 0 ? void 0 : formError.name
                                                            ]
                                                        }) : ""
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_16___default()), {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ContentinfoCardBoxMain)}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ContentinfoCardBox)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex justify-content-between mt-md-0 mt-sm-3 mt-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "mb-0 ",
                                                            children: "Email"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                            eventKey: "email" + indexID
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: (form === null || form === void 0 ? void 0 : form.email) || ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                                    eventKey: "email" + indexID,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "d-flex align-items-center mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                        value: (form === null || form === void 0 ? void 0 : form.email) || "",
                                                                        dataKey: "",
                                                                        name: "email",
                                                                        onChange: (e)=>updateContact(e, indexID)
                                                                        ,
                                                                        placeholder: "Enter email",
                                                                        className: (formError === null || formError === void 0 ? void 0 : formError.email) ? "is-invalid" : ""
                                                                    }),
                                                                    (showOTP === null || showOTP === void 0 ? void 0 : showOTP.phone) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                        className: "btn-md ms-3",
                                                                        onClick: ()=>sendOTPVerify(val.text, val.id)
                                                                        ,
                                                                        children: "Send OTP"
                                                                    })
                                                                ]
                                                            }),
                                                            (formError === null || formError === void 0 ? void 0 : formError.email) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                                type: "invalid",
                                                                tooltip: true,
                                                                children: [
                                                                    " ",
                                                                    formError === null || formError === void 0 ? void 0 : formError.email
                                                                ]
                                                            }) : ""
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        is_verified == "0" && idContacts > 0 && emailUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex align-items-center mt-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().VerificationText)}`,
                                                    children: "Pending Verification"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: `text-decoration-underline text-uppercase ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().VerifyText)}`,
                                                    onClick: ()=>{
                                                        return sendOTPVerifyMail(form === null || form === void 0 ? void 0 : form.email, idContacts, "mail");
                                                    },
                                                    children: "Verify Now"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    placement: "right",
                                                    overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        children: "Tooltp on right"
                                                    }),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: `fi-help ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().helpIcon)}`
                                                    })
                                                })
                                            ]
                                        }),
                                        is_verified == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "pt-2 ps-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                class: `d-table badge bg-veryfied mb-1  ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().badgescustom)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        class: "fi-security me-1"
                                                    }),
                                                    "Verified"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_16___default()), {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ContentinfoCardBoxMain)}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ContentinfoCardBox)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex justify-content-between",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "mb-0",
                                                            children: "Phone"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                            eventKey: "phone" + indexID
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: (form === null || form === void 0 ? void 0 : form.phone) || ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                                    eventKey: "phone" + indexID,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "d-flex align-items-center mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control), {
                                                                        as: (react_number_format__WEBPACK_IMPORTED_MODULE_4___default()),
                                                                        format: "##########",
                                                                        value: (form === null || form === void 0 ? void 0 : form.phone) || "",
                                                                        dataKey: "",
                                                                        name: "phone",
                                                                        onChange: (e)=>updateContact(e, indexID)
                                                                        ,
                                                                        placeholder: "Enter phone",
                                                                        className: (formError === null || formError === void 0 ? void 0 : formError.phone) ? "is-invalid" : ""
                                                                    }),
                                                                    (showOTP === null || showOTP === void 0 ? void 0 : showOTP.phone) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                        className: "btn-md ms-3",
                                                                        onClick: ()=>sendOTPVerify(val.text, val.id)
                                                                        ,
                                                                        children: "Send OTP"
                                                                    })
                                                                ]
                                                            }),
                                                            (formError === null || formError === void 0 ? void 0 : formError.phone) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Control.Feedback), {
                                                                type: "invalid",
                                                                tooltip: true,
                                                                children: [
                                                                    " ",
                                                                    formError === null || formError === void 0 ? void 0 : formError.phone
                                                                ]
                                                            }) : ""
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        is_verified_phone == "0" && idContacts > 0 && phoneUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex align-items-center mt-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().VerificationText)}`,
                                                    children: "Pending Verification"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: `text-decoration-underline text-uppercase ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().VerifyText)}`,
                                                    onClick: ()=>{
                                                        return sendOTPVerifyMail(form === null || form === void 0 ? void 0 : form.phone, idContacts, "phone");
                                                    },
                                                    children: "Verify Now"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    placement: "right",
                                                    overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        children: "Tooltp on right"
                                                    }),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: `fi-help ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().helpIcon)}`
                                                    })
                                                })
                                            ]
                                        }),
                                        is_verified_phone == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "pt-2 ps-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                class: `d-table badge bg-veryfied mb-1  ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().badgescustom)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        class: "fi-security me-1"
                                                    }),
                                                    "Verified"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_16___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Check), {
                                        type: "switch",
                                        id: `check-test-${indexID}`,
                                        label: "\xa0 Show Mobile No",
                                        className: "d-inline-flex",
                                        name: "checkboxs",
                                        checked: form.contact_p_checkbox === "1",
                                        onChange: async ()=>await handleCheckboxChange(indexID)
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            is_primary == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default().Check), {
                type: "checkbox",
                id: "check-3",
                checked: true,
                className: `mt-2 mb-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().CustomCheckBox)}`,
                label: "Default contact details of business communication"
            })
        ]
    }, indexID);
};


/***/ }),

/***/ 7661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2423);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5422);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4301);
/* harmony import */ var _front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2110);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11__);












const ViewBasicDetail = ({ basicDetails , csrfToken , userID  })=>{
    const addFaqRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const afterAddRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: addFaq , 1: setAddFaq  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: ques , 1: setQues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: ans , 1: setAns  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "type": "",
        "message": "",
        "title": ""
    });
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: showButton , 1: setShowButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showLoadBtn , 1: setShowLoadBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const addFaqShow = async ()=>{
        await setAddFaq(true);
        addFaqRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const data = (0,_front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_10__/* .businessFaqs */ .z$)(basicDetails.id);
        setAllrecords(data);
    }, []);
    const setAllrecords = (allData)=>{
        let promise = new Promise((resolve)=>{
            resolve(allData);
        });
        promise.then((result)=>{
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                console.log("___FAQ_____", result);
                setProfile(result);
                setForm(result);
            }
        });
    //setSocilaLinks(allData.socilLinks)
    };
    const handleProfile = async (e, inx)=>{
        e.preventDefault();
        let newValues = form ? [
            ...form
        ] : [];
        console.log("              ", newValues);
        let errorName = e.target.name + "_error";
        newValues[inx][e.target.name] = e.target.value;
        newValues[inx].status = true;
        newValues[inx][errorName] = e.target.value.trim().length < 6 ? true : false;
        console.log(newValues, "--- form ---------", form);
        setForm(newValues);
        if (e.target.value.trim().length < 6) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    // active submit bustton
    //const formResponse = editBusinessCompanyDetailsValid(profile);
    //setFormError(formResponse);
    //console.log("ormError", formResponse)
    };
    // Custom accordion toggle
    const CustomToggle = ({ eventKey  })=>{
        //console.log("CustomToggle", Object.keys(formError))
        const handleClick = Object.entries(formError).length !== 0 ? (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(Object.keys(formError), (e)=>e.preventDefault()
        ) : (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(eventKey, (e)=>e.preventDefault()
        );
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default()), {
            placement: "top",
            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: "Edit"
            }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: `nav-link pt-0 pb-0 pe-3 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().FormEdit)}`,
                onClick: handleClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fi-edit-sr"
                })
            })
        });
    };
    const handleForm = async ()=>{
        setShowLoadBtn(true);
        setShowButton(false);
        //submit form
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/business-faq-update`, {
            method: "POST",
            body: JSON.stringify({
                "data": form,
                "csrfToken": csrfToken,
                business_id: basicDetails.id
            })
        });
        let srJson = await srRes.json();
        console.log("srJson________________", srJson);
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) && (srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
            console.log("FINALSUBMIT", srJson.data);
            //setBasicDetails(srJson.data)
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: srJson.msg,
                    ["type"]: "success",
                    ["title"]: "Success"
                };
            });
            setShowLoadBtn(false);
        } else {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: srJson.msg,
                    ["type"]: "error",
                    ["title"]: "Error"
                };
            });
            setShowButton(true);
            setShowLoadBtn(false);
        }
    };
    const addNewFaq = ()=>{
        console.log("_______h_______", ques, ans);
        if (ques.trim().length <= 6) {
            setFormError({
                ...formError,
                ["ques"]: "Required"
            });
        } else if (ques.trim().length <= 6) {
            setFormError({
                ...formError,
                ["ans"]: "Required"
            });
        } else {
            //add
            let newData = {
                "id": "",
                "question": ques,
                "answer": ans,
                "type": "2"
            };
            form.unshift(newData);
            setForm(form);
            setAns("");
            setQues("");
            console.log("____frm____", newData);
            setAddFaq(false);
            setShowButton(true);
            afterAddRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        }
    };
    const setMessageModal = (e)=>{
        setMsgModal((pre)=>{
            return {
                ...pre,
                ["message"]: "",
                ["type"]: "",
                ["title"]: ""
            };
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex align-items-center justify-content-between",
                ref: afterAddRef,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().ListingInfoHead)}`,
                                children: "Frequently Asked Questions"
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                className: "mt-1 ms-1",
                                children: "(Can Add maximum 5 FAQ)"
                            })
                        ]
                    }),
                    form && (form === null || form === void 0 ? void 0 : form.filter((val)=>val.type == "2"
                    ).length) <= 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().AddFaqbtn)}`,
                        onClick: addFaqShow,
                        children: "Add FAQ"
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default()), {
                id: "user-profile-update",
                autoComplete: "off",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "csrfToken",
                        defaultValue: csrfToken
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().ListingInfoBox) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().ListingFAQBox)}`,
                        alwaysOpen: true,
                        children: [
                            (form === null || form === void 0 ? void 0 : form.length) > 0 && form.map((item, indx)=>{
                                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().FormListBox)}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex align-items-center justify-content-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "pe-2",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                        className: "form-label",
                                                        children: [
                                                            "Q: ",
                                                            item.question
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                    eventKey: indx.toString()
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mb-0 mt-2",
                                            children: item.answer
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                            eventKey: indx.toString(),
                                            className: `${(formError === null || formError === void 0 ? void 0 : formError.business_name) !== undefined ? "show" : ""}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control), {
                                                        className: `mt-2 ${(item === null || item === void 0 ? void 0 : item.question_error) ? "is-invalid" : ""}`,
                                                        as: "textarea",
                                                        rows: 1,
                                                        value: item.question,
                                                        placeholder: "Enter question",
                                                        name: "question",
                                                        onChange: (e)=>handleProfile(e, indx)
                                                        ,
                                                        autoFocus: true
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control), {
                                                        className: `mt-2 ${(item === null || item === void 0 ? void 0 : item.answer_error) ? "is-invalid" : ""}`,
                                                        as: "textarea",
                                                        rows: 1,
                                                        value: item.answer,
                                                        placeholder: "Enter answer",
                                                        name: "answer",
                                                        onChange: (e)=>handleProfile(e, indx)
                                                    }),
                                                    (formError === null || formError === void 0 ? void 0 : formError.name) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control.Feedback), {
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            formError === null || formError === void 0 ? void 0 : formError.name
                                                        ]
                                                    }) : ""
                                                ]
                                            })
                                        })
                                    ]
                                }, indx);
                            }),
                            addFaq && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().AddNewFaq)}`,
                                ref: addFaqRef,
                                id: "addNewFaq",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: `mt-3 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_11___default().ListingInfoHead)}`,
                                        children: "Add New FAQ"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Label), {
                                                children: "Question"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control), {
                                                size: "lg",
                                                type: "text",
                                                placeholder: "Enter Question ",
                                                name: "question",
                                                value: ques,
                                                onChange: (t)=>setQues(t.target.value)
                                                ,
                                                className: `${(formError === null || formError === void 0 ? void 0 : formError.ques) !== undefined ? "is-invalid" : ""}`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Label), {
                                                children: "Answer "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control), {
                                                as: "textarea",
                                                name: "answer",
                                                value: ans,
                                                rows: 2,
                                                placeholder: "Enter answer",
                                                onChange: (t)=>setAns(t.target.value)
                                                ,
                                                className: `${(formError === null || formError === void 0 ? void 0 : formError.ans) !== undefined ? "is-invalid" : ""}`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            type: "button",
                                            variant: "primary px-3 px-sm-3",
                                            onClick: ()=>addNewFaq()
                                            ,
                                            children: "Add FAQ"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    showButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            onClick: handleForm,
                            children: "Save changes"
                        })
                    }),
                    showLoadBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    animation: "border",
                                    size: "sm",
                                    role: "status",
                                    className: "me-2"
                                }),
                                "Wait..."
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewBasicDetail);


/***/ }),

/***/ 5704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8421);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1553);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CalendarPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5415);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2110);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8176);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(348);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5813);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_google_charts__WEBPACK_IMPORTED_MODULE_5__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_11__]);
([react_google_charts__WEBPACK_IMPORTED_MODULE_5__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const ViewLeads = ({ basicDetails , csrfToken , userID  })=>{
    // Reviews about you array
    let todayDate = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_13__/* .getDateTime */ .Fc)(1);
    const { 0: otherDetails , 1: setOtherDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: totalLeads , 1: setTotalLeads  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: csvData1 , 1: setCsvData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        [
            "Date",
            "Total Leads",
            "Details"
        ]
    ]);
    const { 0: graphRecords , 1: setGraphRecords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)() //use login session
    ;
    const setDatepickerValue = async (date)=>{
        let start_date = "";
        let end_date = "";
        if (date) {
            start_date = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_13__/* .getDateTime */ .Fc)("1", date[0]);
            end_date = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_13__/* .getDateTime */ .Fc)("1", date[1]);
        }
        const data = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "from_date": start_date,
                "to_date": end_date,
                "id": basicDetails.id
            })
        };
        const resSubscriber = await fetch(`${process.env.BASE_URL}/api/protect/business-leads-graph`, data);
        const response = await resSubscriber.json();
        let ChartCount = [];
        let csvData = [
            [
                "Date",
                "Total Leads",
                "Details"
            ]
        ];
        if (response.status == 200) {
            var ref, ref1;
            if ((response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : (ref1 = ref.details) === null || ref1 === void 0 ? void 0 : ref1.length) > 0) {
                ChartCount.push([
                    "Day",
                    {
                        type: "number",
                        name: "Leads"
                    },
                    {
                        type: "string",
                        role: "tooltip"
                    }
                ]);
                response.data.details.forEach(async (dataVal, i)=>{
                    ChartCount.push([
                        dataVal.day,
                        dataVal.total_leads,
                        "Date: " + dataVal.day + "\nTotal Leads: " + dataVal.total_leads + "\nDetails:\n" + dataVal.details.replaceAll(",", "\n")
                    ]);
                    csvData.push([
                        dataVal.day,
                        dataVal.total_leads,
                        dataVal.details.replaceAll(",", "\n")
                    ]);
                });
                await setGraphRecords(ChartCount);
                setCsvData(csvData);
            } else {
                ChartCount.push([
                    "Day",
                    "Leads",
                    {
                        type: "string",
                        role: "tooltip"
                    }
                ], [
                    0,
                    0,
                    "No records available"
                ]);
                await setGraphRecords(ChartCount);
                setCsvData(csvData);
            }
        }
    };
    const options = {
        title: "Total Leads",
        curveType: "LineChart",
        CurveStyle: "SMOOTH",
        hAxis: {
            title: "Days",
            minValue: 1
        },
        vAxis: {
            title: "Leads",
            minValue: 1
        },
        series: {
            0: {
                curveType: "function"
            }
        },
        animation: {
            startup: true,
            easing: "linear",
            duration: 1500
        },
        legend: {
            position: "top"
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //console.log("____todayDate______", todayDate)
        const data = (0,_front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_14__/* .businessLeadGraph */ .ww)(basicDetails.id, todayDate, todayDate);
        setAllrecords(data);
    }, []);
    const setAllrecords = (allData)=>{
        let promise = new Promise((resolve)=>{
            resolve(allData);
        });
        promise.then((result)=>{
            var ref, ref3, ref4;
            let ChartCount = [
                [
                    "Day",
                    "Leads",
                    {
                        type: "string",
                        role: "tooltip"
                    }
                ]
            ];
            if ((result === null || result === void 0 ? void 0 : (ref = result.data) === null || ref === void 0 ? void 0 : (ref3 = ref.details) === null || ref3 === void 0 ? void 0 : ref3.length) > 0) {
                console.log("____ result?.data -___", result === null || result === void 0 ? void 0 : result.data);
                result.data.details.forEach(async (dataVal, i)=>{
                    ChartCount.push([
                        dataVal.day,
                        dataVal.total_leads,
                        "Date: " + dataVal.day + "\nTotal Leads: " + dataVal.total_leads + "\nDetails:\n" + dataVal.details.replaceAll(",", "\n")
                    ]);
                });
                setGraphRecords(ChartCount);
            } else {
                setGraphRecords([
                    [
                        "Day",
                        "Leads",
                        {
                            type: "string",
                            role: "tooltip"
                        }
                    ],
                    [
                        0,
                        0,
                        "No records"
                    ]
                ]);
            }
            console.log("_________", result);
            if (result === null || result === void 0 ? void 0 : (ref4 = result.data) === null || ref4 === void 0 ? void 0 : ref4.total) {
                var ref5;
                setTotalLeads(result === null || result === void 0 ? void 0 : (ref5 = result.data) === null || ref5 === void 0 ? void 0 : ref5.total);
            }
        });
    };
    const { businessRecords: leadsRecords , isLoadingMore , isReachingEnd , isRefreshing , size , setSize , mutate  } = (0,_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_11__/* .usePagination */ .h)("/api/protect/business-leads-info", basicDetails.id, {
        "user_id": userID
    });
    var ref2;
    //console.log("____PRO_____isReachingEnd --", isReachingEnd, " --- isRefreshing----", isRefreshing, "----isLoadingMore-------------", isLoadingMore, "----size----", size)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().ListingInfoHead)}`,
                        children: "Leads"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().LeadsMiddle)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    lg: 7,
                                    md: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().LeadsTotal)}`,
                                        children: [
                                            "Total Leads ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: totalLeads
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    lg: 5,
                                    md: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().LeadsMiddleRight)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CalendarPicker__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                setDatepickerValue: setDatepickerValue
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().DownloadBtn)}`,
                                                children: (csvData1 === null || csvData1 === void 0 ? void 0 : csvData1.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_csv__WEBPACK_IMPORTED_MODULE_12__.CSVLink, {
                                                        filename: "leads-report.csv",
                                                        data: csvData1,
                                                        target: "_blank",
                                                        children: "Download"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container border-bottom",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_5__.Chart, {
                                chartType: "LineChart",
                                width: "100%",
                                height: "400px",
                                data: graphRecords,
                                options: options
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().UserListView)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_15___default().ListingInfoHead)}`,
                            children: "List View"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
                                next: ()=>setSize(size + 1)
                                ,
                                hasMore: !isReachingEnd,
                                loader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center my-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            animation: "grow",
                                            size: "sm",
                                            role: "status",
                                            className: "me-2"
                                        }),
                                        "Loading..."
                                    ]
                                }),
                                endMessage: "",
                                dataLength: (ref2 = leadsRecords === null || leadsRecords === void 0 ? void 0 : leadsRecords.length) !== null && ref2 !== void 0 ? ref2 : 0,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    responsive: true,
                                    hover: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "#"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Email"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Phone No."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Date"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "City"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: leadsRecords.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: leadsRecords.map((property, indx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: indx + 1
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: property.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: property.email
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: property.phone
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: property.lead_date
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: property.city_name
                                                            })
                                                        ]
                                                    }, indx)
                                                )
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        colSpan: "6",
                                                        className: "text-center",
                                                        children: "No Leads Available."
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewLeads);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2099:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4301);
/* harmony import */ var _front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2110);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MultiImgUpload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(902);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5698);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_12__]);
uuid__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const ViewMedia = ({ basicDetails , csrfToken , userID  })=>{
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        images: "",
        video: "",
        id: basicDetails.id
    });
    //console.log(profile, basicDetails)
    const { 0: showButton , 1: setShowButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        type: "",
        message: "",
        title: ""
    });
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: showLoadBtn , 1: setShowLoadBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: pdf , 1: setPdf  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: iniImages , 1: setIniImages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const data = (0,_front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_13__/* .MediaInfo */ .a$)(basicDetails.id, userID);
        setAllrecords(data);
    }, []);
    const setAllrecords = (allData)=>{
        let promise = new Promise((resolve)=>{
            resolve(allData);
        });
        promise.then((result)=>{
            var ref;
            if ((result === null || result === void 0 ? void 0 : (ref = result.images) === null || ref === void 0 ? void 0 : ref.length) > 0) {
                setProfile({
                    ...profile,
                    ["images"]: result === null || result === void 0 ? void 0 : result.images,
                    ["pdf"]: result === null || result === void 0 ? void 0 : result.other[0].business_pdf,
                    ["video"]: result === null || result === void 0 ? void 0 : result.other[0].video,
                    ["video_type"]: result === null || result === void 0 ? void 0 : result.other[0].video_type
                });
            //console.log("Images__________", result?.images.map((a) => a.url))
            //console.log("Images__________URL___", result?.images[0].url)
            } else {
                setProfile({
                    ...profile,
                    ["images"]: [],
                    ["pdf"]: result === null || result === void 0 ? void 0 : result.other[0].business_pdf,
                    ["video"]: result === null || result === void 0 ? void 0 : result.other[0].video,
                    ["video_type"]: result === null || result === void 0 ? void 0 : result.other[0].video_type
                });
            }
        });
    };
    const handleProfile = async (e)=>{
        e.preventDefault();
        profile = {
            ...profile,
            [e.target.name]: e.target.value
        };
        setProfile(profile);
        setShowButton(true); // active submit bustton
    };
    const removeImage = async (imgID)=>{
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/delete-media-images`, {
            method: "POST",
            body: JSON.stringify({
                img: imgID,
                csrfToken: csrfToken,
                business_id: basicDetails.id
            })
        });
        let srJson = await srRes.json();
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: srJson === null || srJson === void 0 ? void 0 : srJson.msg,
                    ["type"]: "success",
                    ["title"]: "Success"
                };
            });
            return true;
        } else {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: (srJson === null || srJson === void 0 ? void 0 : srJson.msg) ? srJson === null || srJson === void 0 ? void 0 : srJson.msg : "Something went wrong! Please try after some time.",
                    ["type"]: "error",
                    ["title"]: "Error"
                };
            });
            return false;
        }
    };
    const handleForm = async (e)=>{
        setShowLoadBtn(true);
        setShowButton(false);
        const formData = new FormData();
        //formData.append("testFile", profile.pdf_blob)
        formData.append("file", profile.images);
        //submit form
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/update-media-details`, {
            method: "POST",
            headers: {
                "content-type": "multipart/form-data"
            },
            body: JSON.stringify({
                data: profile,
                csrfToken: csrfToken
            })
        });
        let srJson = await srRes.json();
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) && (srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
            //console.log("FINALSUBMIT", srJson.data)
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: srJson.msg,
                    ["type"]: "success",
                    ["title"]: "Success"
                };
            });
            setShowButton(false);
        } else {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Something went wrong! Please try after some time.",
                    ["type"]: "error",
                    ["title"]: "Error"
                };
            });
            setShowButton(true);
        }
        setShowLoadBtn(false);
    };
    const handleChange = (e)=>{
        var ref;
        setShowButton(true);
        if (((ref = e.target.value) === null || ref === void 0 ? void 0 : ref.length) > 0 && e.target.name == "video") {
            //console.log("ASDAASDSD", e.target.name, e.target.value?.length)
            if (new RegExp(/((http(s)?:\/\/)?)(www\.)?((youtube\.com\/)|(youtu.be\/)|(vimeo\.com\/))[\S]+/).test(e.target.value)) {
                setProfile({
                    ...profile,
                    [e.target.name]: e.target.value,
                    ["is_video"]: true
                });
                setError("");
            } else {
                setProfile({
                    ...profile,
                    [e.target.name]: e.target.value,
                    ["is_video"]: true
                });
                setError("Invalid Link, Only Youtube and Vimeo links allowed.");
            }
        } else {
            let column = e.target.name == "video" ? "is_video" : "is_video_type";
            setProfile({
                ...profile,
                [e.target.name]: e.target.value,
                [column]: true
            });
            setError("");
        }
    // console.log("PROFILE",profile)
    };
    const uploadFileOnS3 = async (sourceFile, methodType = "POST")=>{
        const url = process.env.BASE_URL + "/api/upload-file";
        const formData = new FormData();
        formData.append("image", sourceFile);
        formData.append("fileName", sourceFile.name);
        formData.append("imgKey", "image");
        formData.append("uploadPath", "company/pdf/");
        const res = await fetch(url, {
            method: methodType,
            body: formData
        });
        const result = await res.json();
        if ((result === null || result === void 0 ? void 0 : result.status) == "200") {
            return result === null || result === void 0 ? void 0 : result.filename;
        } else {
            return false;
        }
    };
    const handlePDFUploads = async (e)=>{
        const selectedFiles = e.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        //console.log("---file---------", selectedFiles[0])
        if (selectedFiles[0].type != "application/pdf") {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Invalid file type. Only PDF files allowed.",
                    ["type"]: "errror",
                    ["title"]: "Error"
                };
            });
        } else if (selectedFiles[0].size / (1024 * 1024) > 21) {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "File size can not be greater than 20 MB",
                    ["type"]: "errror",
                    ["title"]: "Error"
                };
            });
        } else {
            setShowButton(true);
            let file_url = URL.createObjectURL(selectedFilesArray[0]);
            let url = await uploadFileOnS3(selectedFilesArray[0]);
            setProfile((pre)=>({
                    ...pre,
                    ["pdf"]: file_url,
                    ["is_pdf"]: true,
                    ["pdf_blob"]: url
                })
            );
        }
    };
    const setMessageModal = (e)=>{
        setMsgModal((pre)=>{
            return {
                ...pre,
                ["message"]: "",
                ["type"]: "",
                ["title"]: ""
            };
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().ListingInfoHead)}`,
                children: "Media Info"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default()), {
                id: "media_details",
                autoComplete: "off",
                encType: "multipart/form-data",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().ListingInfoBox)}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "form-label",
                                                children: "Images"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                className: "ms-2",
                                                children: "(You can upload a maximum of 10 images in JPEG, JPG, PNG, and WEBP formats, up to 10 MB each, and with dimensions of 735 x 262 pixels)"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MultiImgUpload__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        images: (profile === null || profile === void 0 ? void 0 : profile.images) ? profile === null || profile === void 0 ? void 0 : profile.images : [],
                                        setProfile: setProfile,
                                        setShowButton: setShowButton,
                                        removeImage: removeImage
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `border-0 pb-2 mb-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "form-label",
                                        children: "Video Link"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "align-items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                xs: 12,
                                                sm: "4",
                                                lg: 2,
                                                md: 3,
                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Select), {
                                                    className: ` ${(formError === null || formError === void 0 ? void 0 : formError.video_type) !== undefined ? "is-invalid" : ""} ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().MediaLink)}`,
                                                    name: "video_type",
                                                    id: "video_type",
                                                    value: profile === null || profile === void 0 ? void 0 : profile.video_type,
                                                    onChange: handleChange,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "1",
                                                            children: "Youtube"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "2",
                                                            children: "Vimeo"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                xs: 12,
                                                lg: "10",
                                                sm: 8,
                                                md: 9,
                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Group),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().RightSide)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().RightSideOne)}`,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                                                        placeholder: "Add video url of youtube or vimeo",
                                                                        name: "video",
                                                                        value: profile === null || profile === void 0 ? void 0 : profile.video,
                                                                        className: ` ${error != "" ? "is-invalid" : ""}`,
                                                                        onChange: handleChange
                                                                    }),
                                                                    error != "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: [
                                                                            " ",
                                                                            error
                                                                        ]
                                                                    }) : ""
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            placement: "top",
                                                            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                children: "Edit"
                                                            }),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "nav-link py-0 px-0 ms-md-4 ms-md-2 ms-2 text-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-edit-sr"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `pb-0 mb-0 border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "form-label",
                                        children: "Brochure"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `d-flex align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().RightSide)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().RightSideOne)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {
                                                    type: "file",
                                                    name: "pdf",
                                                    className: ` ${error != "" ? "is-invalid" : ""}`,
                                                    onChange: handlePDFUploads,
                                                    accept: "application/pdf"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                placement: "top",
                                                overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    children: "Edit"
                                                }),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: "nav-link py-0 px-0 ms-md-4 ms-md-2 ms-2 text-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-edit-sr"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        children: "Can upload pdf format, upto 20 MB"
                                    }),
                                    (profile === null || profile === void 0 ? void 0 : profile.pdf) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `position-relative overflow-hidden mt-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().BusinessDetailsHeroLeft)} + ' ' + ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_14___default().BusinessDetailsPDF)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: profile.pdf,
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                src: "/images/businessDetails/pdfIconImg.png",
                                                alt: "",
                                                quality: 100,
                                                layout: "fill",
                                                objectFit: "contain",
                                                className: "position-relative p-2 "
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    showButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            onClick: handleForm,
                            children: "Save changes"
                        })
                    }),
                    showLoadBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                            type: "button",
                            variant: "primary primary px-3 px-sm-3",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    animation: "border",
                                    size: "sm",
                                    role: "status",
                                    className: "me-2"
                                }),
                                "Wait..."
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewMedia);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2423);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5422);
/* harmony import */ var react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8176);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4301);
/* harmony import */ var _front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2110);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5698);
/* harmony import */ var _components_MySelect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6256);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3618);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_select_async__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _OpenHour__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(767);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_OpenHour__WEBPACK_IMPORTED_MODULE_15__]);
_OpenHour__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















const daysDefaultList = [
    {
        "value": "Mon",
        "open": "",
        "close": "",
        "start_time": "10:00",
        "end_time": "19:00",
        "is_dual": "0",
        "dual_start_time": "",
        "dual_end_time": ""
    },
    {
        "value": "Tue",
        "open": "",
        "close": "",
        "start_time": "10:00",
        "end_time": "19:00",
        "is_dual": "0",
        "dual_start_time": "",
        "dual_end_time": ""
    },
    {
        "value": "Wed",
        "open": "",
        "close": "",
        "start_time": "10:00",
        "end_time": "19:00",
        "is_dual": "0",
        "dual_start_time": "",
        "dual_end_time": ""
    },
    {
        "value": "Thu",
        "open": "",
        "close": "",
        "start_time": "10:00",
        "end_time": "19:00",
        "is_dual": "0",
        "dual_start_time": "",
        "dual_end_time": ""
    },
    {
        "value": "Fri",
        "open": "",
        "close": "",
        "start_time": "10:00",
        "end_time": "19:00",
        "is_dual": "0",
        "dual_start_time": "",
        "dual_end_time": ""
    },
    {
        "value": "Sat",
        "open": "",
        "close": "",
        "start_time": "10:00",
        "end_time": "19:00",
        "is_dual": "0",
        "dual_start_time": "",
        "dual_end_time": ""
    },
    {
        "value": "Sun",
        "open": "",
        "close": "",
        "start_time": "10:00",
        "end_time": "19:00",
        "is_dual": "0",
        "dual_start_time": "",
        "dual_end_time": ""
    }
];
const ViewBasicDetail = ({ basicDetails , csrfToken , userID  })=>{
    var ref33, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref30;
    var weekDayNameArray = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];
    const { 0: days , 1: SetDays  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(daysDefaultList);
    const { 0: todayTime , 1: SetTodayTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: showTime , 1: setShowTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "type": "",
        "message": "",
        "title": ""
    });
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: master , 1: setMaster  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        gst: {},
        pancard: {}
    });
    /*{ "business_name": updateDetails.name, "address": updateDetails.address, "pincode": updateDetails.pincode, "city": updateDetails.city_id, "area": updateDetails.area_id, "state": updateDetails.state_id, "landmark": updateDetails.landmark, "lat": updateDetails.lat, "long": updateDetails.lng, "id": updateDetails.id }*/ const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: showButton , 1: setShowButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showLoadBtn , 1: setShowLoadBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loadData , 1: setLoadData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("---effect------", loadData);
        if (loadData) {
            const data = (0,_front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_16__/* .BusinessOtherInfo */ .Ef)(basicDetails.id, userID);
            setAllrecords(data);
            masterData1();
            return ()=>setLoadData(false)
            ;
        }
    }, [
        loadData
    ]);
    const masterData1 = async ()=>{
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/get-master-module-details`, {
            method: "POST",
            body: JSON.stringify({
                "csrfToken": csrfToken
            })
        });
        let srJson = await srRes.json();
        //console.log("srJson________________", srJson)
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) && (srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
            var ref, ref31, ref32;
            let masterData = {};
            masterData.typeOfBusiness = srJson === null || srJson === void 0 ? void 0 : (ref = srJson.data) === null || ref === void 0 ? void 0 : ref.typeofbusiness;
            masterData.modeofpayment = srJson === null || srJson === void 0 ? void 0 : (ref31 = srJson.data) === null || ref31 === void 0 ? void 0 : ref31.modeofpayment;
            masterData.subcategory = srJson === null || srJson === void 0 ? void 0 : (ref32 = srJson.data) === null || ref32 === void 0 ? void 0 : ref32.subcategory;
            setMaster(masterData);
        }
    };
    const setAllrecords = (allData)=>{
        let promise = new Promise((resolve)=>{
            resolve(allData);
        });
        promise.then((result)=>{
            if (result === null || result === void 0 ? void 0 : result.detailsAll) {
                var ref, ref34;
                //console.log("____result_____final_____", result)
                let businessObj = {
                    "name": result.detailsAll[0].type_of_business_name,
                    "obj": objCreate(result.detailsAll[0].typeBuObj)
                };
                let subcatObj = {
                    "name": result.detailsAll[0].subcat_name,
                    "obj": objCreate(result.detailsAll[0].subcatObj)
                };
                let keywordsObj = {
                    "name": result.detailsAll[0].keyword_name,
                    "obj": objCreate(result.detailsAll[0].keywordObj)
                };
                SetDays(((ref = result.businessTiming) === null || ref === void 0 ? void 0 : ref.length) > 0 ? result.businessTiming : daysDefaultList);
                if (result.businessTiming.length > 0) {
                    SetTodayTime(result.businessTiming.filter((val)=>val.value == (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .getDateTime */ .Fc)(4)
                    ));
                }
                let basicData = result.basicDetails[0];
                setProfile({
                    ["business"]: businessObj,
                    ["subcat"]: subcatObj,
                    ["keywords"]: keywordsObj,
                    ["payments"]: result.detailsAll[0].paymentOption,
                    ["timings"]: ((ref34 = result.businessTiming) === null || ref34 === void 0 ? void 0 : ref34.length) > 0 ? result.businessTiming : daysDefaultList,
                    ["basic"]: basicData
                });
            }
        });
    //setSocilaLinks(allData.socilLinks)
    };
    const objCreate = (string)=>{
        let arr = (string === null || string === void 0 ? void 0 : string.split("$")) || [];
        if (arr.length > 0) {
            let newObj = arr.map((val)=>{
                let arrVal = val.split(",");
                return {
                    value: parseInt(arrVal[0]),
                    label: arrVal[1]
                };
            });
            return newObj;
        } else {
            return [];
        }
    };
    // Custom accordion toggle
    const CustomToggle = ({ eventKey  })=>{
        //console.log("CustomToggle", Object.keys(formError))
        const handleClick = Object.entries(formError).length !== 0 ? (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(Object.keys(formError), (e)=>e.preventDefault()
        ) : (0,react_bootstrap_AccordionButton__WEBPACK_IMPORTED_MODULE_3__.useAccordionButton)(eventKey, (e)=>e.preventDefault()
        );
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default()), {
            placement: "top",
            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: "Edit"
            }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: `nav-link text-end pt-0 pb-0 pe-0 ps-0 d-inline-block ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormEdit)}`,
                onClick: handleClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fi-edit-sr"
                })
            })
        });
    };
    const handleForm = async ()=>{
        setShowLoadBtn(true);
        setShowButton(false);
        console.log("---- view ------", loadData);
        //submit form
        let srRes = await fetch(`${process.env.BASE_URL}/api/protect/update-other-details`, {
            method: "POST",
            body: JSON.stringify({
                "profile": profile,
                "csrfToken": csrfToken,
                "business_id": basicDetails.id,
                "form": form
            })
        });
        let srJson = await srRes.json();
        //console.log("srJson________________", srJson)
        if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) && (srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
            setLoadData(true);
            setForm({
                gst: {},
                pancard: {}
            });
            setShowLoadBtn(false);
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: srJson.msg,
                    ["type"]: "success",
                    ["title"]: "Success"
                };
            });
            setLoadData(true);
        } else {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: srJson.msg,
                    ["type"]: "Error",
                    ["title"]: "Error"
                };
            });
            setShowButton(true);
            setShowLoadBtn(false);
        }
    };
    const businessHandleChange = async (selected)=>{
        //console.log("-----selected -----", selected)
        let resultData = selected.map((val)=>val.label
        );
        let neString = resultData.join(", ");
        let proObj = {
            name: neString,
            obj: selected
        };
        //console.log(neString,"-- profile---------- ", proObj)
        await setProfile((pre)=>{
            return {
                ...pre,
                ["business"]: proObj
            };
        });
        setShowButton(true);
    };
    const subcatHandleChange = async (selected)=>{
        let resultData = selected.map((val)=>val.label
        );
        let neString = resultData.join(", ");
        let proObj = {
            name: neString,
            obj: selected
        };
        // console.log(neString, "-- profile---------- ", proObj)
        await setProfile((pre)=>{
            return {
                ...pre,
                ["subcat"]: proObj
            };
        });
        setShowButton(true);
    };
    const keywordHandleChange = async (selected)=>{
        //console.log(selected,"-------keyword------------")
        let resultData = selected.map((val)=>val.label
        );
        let neString = resultData.join(", ");
        let proObj = {
            name: neString,
            obj: selected
        };
        //console.log(neString, "-- profile---------- ", proObj)
        await setProfile((pre)=>{
            return {
                ...pre,
                ["keywords"]: proObj
            };
        });
        setShowButton(true);
    };
    const handleChangeCheckbox = (e)=>{
        var ref;
        //e.preventDefault();
        const { value , checked  } = e.target;
        let arrayChecks = ((ref = profile.payments) === null || ref === void 0 ? void 0 : ref.length) > 0 ? profile.payments.split(",") : [];
        //console.log("---------",arrayChecks)
        if (checked) {
            arrayChecks.push(value);
            let newVal = arrayChecks.join(",");
            setProfile((pre)=>({
                    ...pre,
                    ["payments"]: newVal
                })
            );
        //const updatedDetails = { ...fields, ['share_type']: value };
        //setFields(updatedDetails)
        } else {
            arrayChecks.splice(arrayChecks.indexOf(value), 1);
            let newVal = arrayChecks.join(",");
            setProfile((pre)=>({
                    ...pre,
                    ["payments"]: newVal
                })
            );
        //const updatedDetails = { ...fields, ['share_type']: value };
        //setFields(updatedDetails)
        }
        setShowButton(true);
    };
    const handleChanges = (e, type)=>{
        if (type == "gst") {
            let data = form.gst;
            data.gst_number = e.target.value;
            setForm((pre)=>({
                    ...pre,
                    ["gst"]: data
                })
            );
        } else {
            let data = form.pancard;
            data.pancard_number = e.target.value;
            setForm((pre)=>({
                    ...pre,
                    ["pancard"]: data
                })
            );
        }
        setShowButton(true);
    };
    const filterKeywords = async (inputValue)=>{
        let options = [];
        options = await getKeywordRecords(inputValue);
        if (options) {
            // console.log("datadata-keyword----------", options)
            return options;
        // console.log("datadata", options)
        } else {
            return options.filter((i)=>i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        }
    };
    const getKeywordRecords = async (val)=>{
        if (val.length >= 2) {
            let srRes = await fetch(`${process.env.BASE_URL}/api/protect/search-keywords`, {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: JSON.stringify({
                    "keyword": val
                })
            });
            let srJson = await srRes.json();
            if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
                var ref;
                //console.log("Searched Data-----", srJson.data?.keywords)
                return ((ref = srJson.data) === null || ref === void 0 ? void 0 : ref.keywords) || [];
            } else {
                return [];
            }
        } else {
            return [];
        }
    };
    const promiseOptions = (inputValue)=>new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(filterKeywords(inputValue));
            }, 1000);
        })
    ;
    const setTimingHrs = (val)=>{
        console.log("val-----", val);
        setProfile((pre)=>({
                ...pre,
                ["timings"]: val.daysHourslist
            })
        );
        setShowButton(true);
    };
    const specifyOpeningHoursChange = async (e, dayIndex, fieldname)=>{
        e.preventDefault();
        console.log("e, dayIndex, fieldname", e, dayIndex, fieldname);
        const value = e.target.value;
        let daysObjectArray = [
            ...days
        ];
        weekDayNameArray.map((day)=>{
            if (fieldname == "start_time") {
                daysObjectArray[dayIndex].start_time = value;
            } else if (fieldname == "end_time") {
                daysObjectArray[dayIndex].end_time = value;
            } else if (fieldname == "dual_start_time") {
                daysObjectArray[dayIndex].dual_start_time = value;
            } else if (fieldname == "dual_end_time") {
                daysObjectArray[dayIndex].dual_end_time = value;
            } else if (fieldname == "open") {
                daysObjectArray[dayIndex].open = openCloseCheckBox == "on" ? "1" : "0";
            } else if (fieldname == "close") {
                daysObjectArray[dayIndex].close = openCloseCheckBox == "on" ? "1" : "0";
            }
        });
        setProfile((pre)=>({
                ...pre,
                ["timings"]: daysObjectArray
            })
        );
        setShowButton(true);
    };
    const handleSetDaysInSetValue = (daysArray)=>{
        //console.log(daysArray, "---------  daysArray------------")
        setProfile((pre)=>({
                ...pre,
                ["timings"]: daysArray
            })
        );
        //setValue('daysHourslist', daysArray)
        setShowButton(true);
    };
    const onSelectFile = async (event, type)=>{
        const selectedFiles = event.target.files;
        let allowedTypes = {
            jpg: "jpg",
            jpeg: "jpeg",
            png: "png",
            webp: "webp"
        };
        let formData = type == "gst" ? form.gst : form.pancard;
        const selectedFilesArray = Array.from(selectedFiles);
        //console.log("---selectedFilesArray-------", selectedFilesArray)
        let imagesArray = [];
        let i = 0;
        //console.log("--------------", selectedFilesArray[i])
        let extension = selectedFilesArray[i].name.substring(selectedFilesArray[i].name.lastIndexOf(".") + 1).toLowerCase();
        if (selectedFilesArray[i].size / (1024 * 1024) > 10) {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Image size can not be greater than 10MB.",
                    ["type"]: "error",
                    ["title"]: "Warning"
                };
            });
        } else if (allowedTypes[extension]) {
            //console.log(extension, "allowed----------", selectedFilesArray[i].size / (1024 * 1024))
            let url = await uploadFileOnS3(selectedFilesArray[i]);
            formData.image_data = {
                url: URL.createObjectURL(selectedFilesArray[i]),
                key_id: "",
                file_name: url
            };
            setForm((pre)=>({
                    ...pre,
                    [type]: formData
                })
            );
        } else {
            //extension not allowed
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "Only jpg,png and webp images allowed.",
                    ["type"]: "error",
                    ["title"]: "Warning"
                };
            });
        }
        // FOR BUG IN CHROME
        event.target.value = "";
        setShowButton(true);
    };
    const uploadFileOnS3 = async (sourceFile, methodType = "POST")=>{
        const url = process.env.BASE_URL + "/api/upload-file";
        const formData = new FormData();
        formData.append("image", sourceFile);
        formData.append("fileName", sourceFile.name);
        formData.append("imgKey", "image");
        formData.append("uploadPath", "company/image/");
        const res = await fetch(url, {
            method: methodType,
            body: formData
        });
        const result = await res.json();
        //console.log("-----upload image----------", result)
        if ((result === null || result === void 0 ? void 0 : result.status) == "200") {
            return result === null || result === void 0 ? void 0 : result.filename;
        } else {
            return false;
        }
    };
    const deleteImage = (type, e)=>{
        //console.log("dlee-",type)
        if (type == "gst") {
            let data = form === null || form === void 0 ? void 0 : form.gst;
            delete data.image_data;
            setForm((pre)=>({
                    ...pre,
                    ["gst"]: data
                })
            );
        } else {
            let data = form === null || form === void 0 ? void 0 : form.pancard;
            delete data.image_data;
            // console.log("- After delete    --------",data)
            setForm((pre)=>({
                    ...pre,
                    ["pancard"]: data
                })
            );
        }
    };
    const setMessageModal = (e)=>{
        setMsgModal((pre)=>{
            return {
                ...pre,
                ["message"]: "",
                ["type"]: "",
                ["title"]: ""
            };
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ListingInfoHead)}`,
                children: "Other details"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default()), {
                id: "user-profile-update",
                autoComplete: "off",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "csrfToken",
                        defaultValue: csrfToken
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ListingInfoBox)}`,
                        alwaysOpen: true,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex align-items-center justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Type of business"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : (ref33 = profile.business) === null || ref33 === void 0 ? void 0 : ref33.name) || ""
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "business"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "business",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.business_name) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    options: (master === null || master === void 0 ? void 0 : master.typeOfBusiness) || [],
                                                    isMulti: true,
                                                    closeMenuOnSelect: false,
                                                    hideSelectedOptions: false,
                                                    onChange: businessHandleChange,
                                                    allowSelectAll: false,
                                                    ShowSelectAll: false,
                                                    value: (profile === null || profile === void 0 ? void 0 : (ref1 = profile.business) === null || ref1 === void 0 ? void 0 : ref1.obj) || [],
                                                    volume: (profile === null || profile === void 0 ? void 0 : (ref2 = profile.business) === null || ref2 === void 0 ? void 0 : ref2.obj) || []
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.name) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.name
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex align-items-center justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Sub-category"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : (ref3 = profile.subcat) === null || ref3 === void 0 ? void 0 : ref3.name) || ""
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "category"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "category",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.address) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    options: (master === null || master === void 0 ? void 0 : master.subcategory) || [],
                                                    isMulti: true,
                                                    closeMenuOnSelect: false,
                                                    hideSelectedOptions: false,
                                                    onChange: subcatHandleChange,
                                                    allowSelectAll: false,
                                                    ShowSelectAll: false,
                                                    value: (profile === null || profile === void 0 ? void 0 : (ref4 = profile.subcat) === null || ref4 === void 0 ? void 0 : ref4.obj) || [],
                                                    volume: (profile === null || profile === void 0 ? void 0 : (ref5 = profile.subcat) === null || ref5 === void 0 ? void 0 : ref5.obj) || []
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.address) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.address
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex align-items-center justify-content-between",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pe-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "form-label",
                                                children: "Select Payment Options"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `mt-2 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().SelectPayment)}`,
                                        children: [
                                            console.log("master?.modeofpayment  ", master === null || master === void 0 ? void 0 : master.modeofpayment),
                                            (master === null || master === void 0 ? void 0 : (ref6 = master.modeofpayment) === null || ref6 === void 0 ? void 0 : ref6.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Group), {
                                                controlId: "modeofpayment",
                                                className: "mb-3",
                                                onChange: handleChangeCheckbox,
                                                children: master === null || master === void 0 ? void 0 : (ref7 = master.modeofpayment) === null || ref7 === void 0 ? void 0 : ref7.map((val, inx)=>{
                                                    var ref, ref35;
                                                    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Check), {
                                                        type: "checkbox",
                                                        value: val.value,
                                                        checked: (profile === null || profile === void 0 ? void 0 : (ref = profile.payments) === null || ref === void 0 ? void 0 : ref.length) > 0 && (profile === null || profile === void 0 ? void 0 : (ref35 = profile.payments) === null || ref35 === void 0 ? void 0 : ref35.split(",").includes(val.value.toString())) ? true : false,
                                                        id: `payment-mode-${val.value}`,
                                                        label: val.label,
                                                        className: ` ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().PaymentOption)}`
                                                    }, inx);
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex align-items-center justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pe-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "form-label",
                                                        children: "Keywords"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (profile === null || profile === void 0 ? void 0 : (ref8 = profile.keywords) === null || ref8 === void 0 ? void 0 : ref8.name) || ""
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "keywords"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "keywords",
                                        className: `${(formError === null || formError === void 0 ? void 0 : formError.address) !== undefined ? "show" : ""}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select_async__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    isMulti: true,
                                                    //closeMenuOnSelect={false}
                                                    //hideSelectedOptions={false}
                                                    onChange: keywordHandleChange,
                                                    loadOptions: promiseOptions,
                                                    allowSelectAll: false,
                                                    ShowSelectAll: false,
                                                    value: (profile === null || profile === void 0 ? void 0 : (ref9 = profile.keywords) === null || ref9 === void 0 ? void 0 : ref9.obj) || []
                                                }),
                                                (formError === null || formError === void 0 ? void 0 : formError.address) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control.Feedback), {
                                                    type: "invalid",
                                                    tooltip: true,
                                                    children: [
                                                        " ",
                                                        formError === null || formError === void 0 ? void 0 : formError.address
                                                    ]
                                                }) : ""
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex align-items-center justify-content-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pe-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "form-label",
                                                    children: "Specify opening hours"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                eventKey: "openinghours"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row mt-md-3 mt-sm-3 mt-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        md: 2,
                                                        lg: 2,
                                                        sm: 2,
                                                        xs: 3,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mb-0",
                                                            children: "Today"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        md: 8,
                                                        lg: 6,
                                                        sm: 10,
                                                        xs: 9,
                                                        className: "ps-md-0 ps-0",
                                                        children: (todayTime === null || todayTime === void 0 ? void 0 : todayTime.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "d-flex",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: ` ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().TimeBetween)}`,
                                                                        children: [
                                                                            todayTime[0].open == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: "Open 24 hrs"
                                                                            }),
                                                                            todayTime[0].close == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: "Closed"
                                                                            }),
                                                                            todayTime[0].open == "" && todayTime[0].close == "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: [
                                                                                    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .formatAmPm */ .Wr)(todayTime[0].start_time, "2", "H:i:s", "H:i"),
                                                                                    " - ",
                                                                                    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .formatAmPm */ .Wr)(todayTime[0].end_time, "2", "H:i:s", "H:i"),
                                                                                    todayTime[0].is_dual == "1" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                            (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .formatAmPm */ .Wr)(todayTime[0].dual_start_time, "2", "H:i:s", "H:i"),
                                                                                            " - ",
                                                                                            (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .formatAmPm */ .Wr)(todayTime[0].dual_end_time, "2", "H:i:s", "H:i")
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    todayTime[0].open == "" && todayTime[0].close == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().OfficeOpenStatus)}`,
                                                                        children: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .businessOpen */ .n6)(todayTime[0].start_time + "," + todayTime[0].end_time + "," + todayTime[0].dual_start_time + "," + todayTime[0].dual_end_time) ? "Open" : "Close"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ShowWeekTiming)}`,
                                                                        onClick: ()=>setShowTime((pre)=>!pre
                                                                            )
                                                                        ,
                                                                        children: [
                                                                            "(",
                                                                            showTime ? "Hide All" : "Show All",
                                                                            ")"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            showTime && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " ",
                                                children: (profile === null || profile === void 0 ? void 0 : profile.timings) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "",
                                                    children: profile === null || profile === void 0 ? void 0 : profile.timings.map((time, inx)=>{
                                                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "row mt-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                    md: 2,
                                                                    lg: 2,
                                                                    sm: 2,
                                                                    xs: 3,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "mb-0",
                                                                        children: time.value
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                    md: 8,
                                                                    lg: 6,
                                                                    sm: 10,
                                                                    xs: 9,
                                                                    className: "ps-md-0 ps-0",
                                                                    children: (todayTime === null || todayTime === void 0 ? void 0 : todayTime.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "d-flex",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().TimeBetween)}`,
                                                                                    children: [
                                                                                        time.open == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "",
                                                                                            children: "Open 24 hrs"
                                                                                        }),
                                                                                        time.close == "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                children: "Closed"
                                                                                            })
                                                                                        }),
                                                                                        time.open == "" && time.close == "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                            children: [
                                                                                                (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .formatAmPm */ .Wr)(time.start_time, "2", "H:i:s", "H:i"),
                                                                                                " - ",
                                                                                                (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .formatAmPm */ .Wr)(time.end_time, "2", "H:i:s", "H:i"),
                                                                                                time.is_dual == "1" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                                        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .formatAmPm */ .Wr)(time.dual_start_time, "2", "H:i:s", "H:i"),
                                                                                                        " - ",
                                                                                                        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .formatAmPm */ .Wr)(time.dual_end_time, "2", "H:i:s", "H:i")
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                time.open == "" && time.close == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().OfficeOpenStatus)}`,
                                                                                    children: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_17__/* .businessOpen */ .n6)(time.start_time + "," + time.end_time + "," + todayTime[0].dual_start_time + "," + todayTime[0].dual_end_time) ? "Open" : "Close"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ShowWeekTiming)}`,
                                                                                    onClick: ()=>setShowTime((pre)=>!pre
                                                                                        )
                                                                                    ,
                                                                                    children: [
                                                                                        "(",
                                                                                        showTime ? "Hide All" : "Show All",
                                                                                        ")"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }, inx);
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                        eventKey: "openinghours",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OpenHour__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            days: (profile === null || profile === void 0 ? void 0 : profile.timings) || days,
                                            SetDays: SetDays,
                                            setFormValues: setTimingHrs,
                                            is_dual_button: true,
                                            formValues: profile === null || profile === void 0 ? void 0 : profile.timings,
                                            csrfToken: "",
                                            specifyOpeningHoursChange: specifyOpeningHoursChange,
                                            AddMoreBtnCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().AddMoreBtn),
                                            StepheadCls: ``,
                                            dayValueCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().dayValue),
                                            TimeValueCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().TimeValue),
                                            OpenHourHeadCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().OpenHourHead),
                                            switchBtnColumnSizeXS: "5",
                                            switchBtnColumnSize: "6",
                                            switchBtnColumnSizeXL: "3",
                                            labelColumnSize: "2",
                                            businessOtherDetailsSize: "1",
                                            setDaysOnClickOnDualButton: handleSetDaysInSetValue,
                                            timeborderCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().timeborder),
                                            DayGapCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().DayGap)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `mb-0 pb-0 border-0  ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormListBox)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex align-items-center justify-content-between",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pe-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: "form-label",
                                                children: [
                                                    "Verified Documents",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        placement: "right",
                                                        overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            children: "Add your GST number and Certificate to verify your listing"
                                                        }),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `fi-help ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().helpIcon)}`
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().DocBcox)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center justify-content-between mb-md-3 mb-sm-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "pe-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "mb-0",
                                                            children: "GST Number"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                        eventKey: "gstevent"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        md: 4,
                                                        xs: 6,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                className: "mb-md-3 mb-sm-2 mb-2",
                                                                children: (profile === null || profile === void 0 ? void 0 : (ref10 = profile.basic) === null || ref10 === void 0 ? void 0 : ref10.gst_number) || "-"
                                                            }),
                                                            (profile === null || profile === void 0 ? void 0 : (ref11 = profile.basic) === null || ref11 === void 0 ? void 0 : ref11.is_gst_verified) == "1" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: ` ms-3 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().badgescustom)}`,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        class: "fi-security me-1"
                                                                    }),
                                                                    " ",
                                                                    (profile === null || profile === void 0 ? void 0 : (ref12 = profile.basic) === null || ref12 === void 0 ? void 0 : ref12.is_gst_verified) == "1" ? "Verified" : ""
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        md: 6,
                                                        xs: 6,
                                                        children: (profile === null || profile === void 0 ? void 0 : (ref13 = profile.basic) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.gst_document) === null || ref14 === void 0 ? void 0 : ref14.length) > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `mt-md-n3 position-relative overflow-hidden ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().BusinessDetailsHeroLeft)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                src: profile === null || profile === void 0 ? void 0 : (ref15 = profile.basic) === null || ref15 === void 0 ? void 0 : ref15.gst_document,
                                                                alt: "",
                                                                quality: 100,
                                                                layout: "fill",
                                                                objectFit: "contain",
                                                                className: "position-relative py-3 px-2 rounded"
                                                            })
                                                        }) : null
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                                eventKey: "gstevent",
                                                className: "mt-md-3 mt-sm-2 mt-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Verified detail needs to be reverify if any changes made here."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control), {
                                                            placeholder: "Enter GST number",
                                                            name: "gst_number",
                                                            value: form === null || form === void 0 ? void 0 : (ref16 = form.gst) === null || ref16 === void 0 ? void 0 : ref16.gst_number,
                                                            onChange: (e)=>handleChanges(e, "gst")
                                                        }),
                                                        (form === null || form === void 0 ? void 0 : (ref17 = form.gst) === null || ref17 === void 0 ? void 0 : (ref18 = ref17.image_data) === null || ref18 === void 0 ? void 0 : ref18.url) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "row",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-md-3",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `position-relative mt-3 w-100 overflow-hidden ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().BusinessDetailsHeroLeft)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                            src: form === null || form === void 0 ? void 0 : (ref19 = form.gst) === null || ref19 === void 0 ? void 0 : (ref20 = ref19.image_data) === null || ref20 === void 0 ? void 0 : ref20.url,
                                                                            alt: "",
                                                                            quality: 100,
                                                                            layout: "fill",
                                                                            objectFit: "contain",
                                                                            className: "position-relative py-3 px-2 rounded"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ImagesHeadNew)}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: `fi-x-circle ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().TrashImg)}`,
                                                                                onClick: (e)=>deleteImage("gst", e)
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().DocumentsVerified)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "row",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-md-3",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        className: "AddImageLabel d-flex text-center justify-content-center flex-column",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fi-cloud-upload"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                className: "mb-0",
                                                                                children: "Upload Documents"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "file",
                                                                                name: "images",
                                                                                onChange: (e)=>onSelectFile(e, "gst")
                                                                                ,
                                                                                accept: "image/png , image/jpeg, image/webp, image/jpg, image/svg"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().DocBcox)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center justify-content-between mb-md-3 mb-sm-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "pe-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "mb-0",
                                                            children: "PAN Card"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                                        eventKey: "panevent"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        md: 4,
                                                        xs: 6,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                children: (profile === null || profile === void 0 ? void 0 : (ref21 = profile.basic) === null || ref21 === void 0 ? void 0 : ref21.pancard_number) || "-"
                                                            }),
                                                            (profile === null || profile === void 0 ? void 0 : (ref22 = profile.basic) === null || ref22 === void 0 ? void 0 : ref22.is_pancard_verfied) == "1" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: ` ms-3 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().badgescustom)}`,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        class: "fi-security me-1"
                                                                    }),
                                                                    " Verified"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        md: 6,
                                                        xs: 6,
                                                        children: (profile === null || profile === void 0 ? void 0 : (ref23 = profile.basic) === null || ref23 === void 0 ? void 0 : (ref24 = ref23.pancard_document) === null || ref24 === void 0 ? void 0 : ref24.length) > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `position-relative overflow-hidden ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().BusinessDetailsHeroLeft)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                src: profile === null || profile === void 0 ? void 0 : (ref25 = profile.basic) === null || ref25 === void 0 ? void 0 : ref25.pancard_document,
                                                                alt: "",
                                                                quality: 100,
                                                                layout: "fill",
                                                                objectFit: "contain",
                                                                className: "position-relative py-3 px-2 rounded"
                                                            })
                                                        }) : null
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2___default().Collapse), {
                                                eventKey: "panevent",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Verified detail needs to be reverify if any changes made here."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default().Control), {
                                                            placeholder: "Enter pan card number",
                                                            name: "pancard_number",
                                                            value: form === null || form === void 0 ? void 0 : (ref26 = form.pancard) === null || ref26 === void 0 ? void 0 : ref26.pancard_number,
                                                            onChange: handleChanges
                                                        }),
                                                        (form === null || form === void 0 ? void 0 : (ref27 = form.pancard) === null || ref27 === void 0 ? void 0 : (ref28 = ref27.image_data) === null || ref28 === void 0 ? void 0 : ref28.url) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "row",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-md-3",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `position-relative mt-3 w-100  overflow-hidden ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().BusinessDetailsHeroLeft)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                            src: form === null || form === void 0 ? void 0 : (ref29 = form.pancard) === null || ref29 === void 0 ? void 0 : (ref30 = ref29.image_data) === null || ref30 === void 0 ? void 0 : ref30.url,
                                                                            alt: "",
                                                                            quality: 100,
                                                                            layout: "fill",
                                                                            objectFit: "contain",
                                                                            className: "position-relative py-3 px-2 rounded"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().ImagesHeadNew)}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: `fi-x-circle ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_18___default().TrashImg)}`,
                                                                                onClick: (e)=>deleteImage("pancard", e)
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "row",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-md-3",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                    className: "AddImageLabel d-flex text-center justify-content-center flex-column",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-cloud-upload"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            className: "mb-0",
                                                                            children: "Upload Documents"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "file",
                                                                            name: "images",
                                                                            onChange: (e)=>onSelectFile(e, "pancard")
                                                                            ,
                                                                            accept: "image/png , image/jpeg, image/webp, image/jpg, image/svg"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    showButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            onClick: handleForm,
                            children: "Save changes"
                        })
                    }),
                    showLoadBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end mt-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                            type: "button",
                            variant: "primary px-3 px-sm-3",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    animation: "border",
                                    size: "sm",
                                    role: "status",
                                    className: "me-2"
                                }),
                                "Wait..."
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewBasicDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5110);
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _searching_BusinessDetailsReview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3605);
/* harmony import */ var _front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2110);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_searching_BusinessDetailsReview__WEBPACK_IMPORTED_MODULE_6__]);
_searching_BusinessDetailsReview__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ViewReview = ({ basicDetails , csrfToken , userID  })=>{
    var ref;
    // Reviews about you array
    const { 0: otherDetails , 1: setOtherDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)() //use login session
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const data = (0,_front_methods_EditListUser__WEBPACK_IMPORTED_MODULE_7__/* .ReviewInfo */ .aB)(basicDetails.id, userID);
        setAllrecords(data);
    }, []);
    const setAllrecords = (allData)=>{
        let promise = new Promise((resolve)=>{
            resolve(allData);
        });
        promise.then((result)=>{
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                setOtherDetails(result[0]);
            }
        });
    };
    console.log("____PRO_____", otherDetails);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ListingInfoHead)}`,
                children: "Reviews & Rating"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ListingInfoBox) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ListingFAQBox)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ProgressBarReviews)}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "align-items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                                md: 7,
                                lg: 6,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `d-flex justify-content-center align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateBox)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateValue)}`,
                                                children: [
                                                    "5 ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-star"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ProgressBarRate)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    variant: "warning",
                                                    now: (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.five_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.five_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    style: {
                                                        height: "16px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().Ratepercentage)}`,
                                                children: [
                                                    (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.five_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.five_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `d-flex justify-content-center align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateBox)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateValue)}`,
                                                children: [
                                                    "4 ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-star"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ProgressBarRate)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    variant: "warning",
                                                    now: (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.four_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.four_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    style: {
                                                        height: "16px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().Ratepercentage)}`,
                                                children: [
                                                    (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.four_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.four_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `d-flex justify-content-center align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateBox)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateValue)}`,
                                                children: [
                                                    "3 ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-star"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ProgressBarRate)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    variant: "warning",
                                                    now: (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.three_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.three_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    style: {
                                                        height: "16px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().Ratepercentage)}`,
                                                children: [
                                                    (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.three_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.three_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `d-flex justify-content-center align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateBox)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateValue)}`,
                                                children: [
                                                    "2 ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-star"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ProgressBarRate)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    variant: "warning",
                                                    now: (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.two_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.two_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    style: {
                                                        height: "16px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().Ratepercentage)}`,
                                                children: [
                                                    (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.two_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.two_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `d-flex justify-content-center align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateBox)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RateValue)}`,
                                                children: [
                                                    "1 ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-star"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ProgressBarRate)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    variant: "warning",
                                                    now: (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.one_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.one_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    style: {
                                                        height: "16px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().Ratepercentage)}`,
                                                children: [
                                                    (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.one_rate) > 0 ? ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.one_rate) * 100 / (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews)).toFixed(2) : 0,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                                md: 5,
                                lg: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().Global)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().GlobalValue)}`,
                                            children: (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.ratings) > 0 ? otherDetails === null || otherDetails === void 0 ? void 0 : (ref = otherDetails.ratings) === null || ref === void 0 ? void 0 : ref.toFixed(2) : 0.00
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RatingIcons)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RatingIconsOne)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RatingIconsOne) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().RatingIconsTwo)}`,
                                                    style: {
                                                        background: "linear-gradient(to right, rgb(253, 188, 49) " + ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews) > 0 ? (otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.ratings) * 100 / 5 : 0) + "%, transparent 0%)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-star-filled"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().TotalReviews)}`,
                                            children: [
                                                otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.total_reviews,
                                                " reviews"
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_searching_BusinessDetailsReview__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                businessID: basicDetails.id,
                currentSession: session,
                sessionStatus: status,
                MainReviewLeftCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().MainReviewLeft),
                ReviewReportCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ReviewReport),
                MainReviewLeftUserCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().MainReviewLeftUser),
                MostCommentCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().MostComment)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewReview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var _partials_VerifyOtp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7936);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_8__, _partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_11__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_8__, _partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












{}const ReportComments = ({ showStatus , sessionStatus , currentSession ="" , commentID , ...props })=>{
    var ref4, ref1, ref2;
    //console.log("show", showStatus, commentID)
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showStatus);
    const { 0: showOTP , 1: setShowOTP  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: fields1 , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        phone: "",
        email: "",
        comment: "",
        wrong_type: ""
    });
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: isSubmit , 1: setIsSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); /// ref
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentSession && currentSession !== undefined) {
            var ref, ref3;
            setFields((fields)=>{
                return {
                    ...fields,
                    ["name"]: currentSession.user.name
                };
            });
            if (currentSession === null || currentSession === void 0 ? void 0 : (ref = currentSession.user) === null || ref === void 0 ? void 0 : ref.email) {
                setFields((fields)=>{
                    return {
                        ...fields,
                        ["email"]: currentSession.user.email
                    };
                });
            }
            if (currentSession === null || currentSession === void 0 ? void 0 : (ref3 = currentSession.user) === null || ref3 === void 0 ? void 0 : ref3.phone) {
                setFields((fields)=>{
                    return {
                        ...fields,
                        ["phone"]: currentSession.user.phone
                    };
                });
            }
        }
        return ()=>fields1
        ;
    }, [
        currentSession
    ]);
    const handleChange = (e)=>{
        if (currentSession && currentSession !== undefined) {
            var ref, ref5, ref6;
            if ((currentSession === null || currentSession === void 0 ? void 0 : (ref = currentSession.user) === null || ref === void 0 ? void 0 : ref.name) && e.target.name == "name" || e.target.name == "email" && (currentSession === null || currentSession === void 0 ? void 0 : (ref5 = currentSession.user) === null || ref5 === void 0 ? void 0 : ref5.email) || (currentSession === null || currentSession === void 0 ? void 0 : (ref6 = currentSession.user) === null || ref6 === void 0 ? void 0 : ref6.phone) && e.target.name == "phone") {
                return true;
            }
        }
        let changes = {
            ...fields1,
            [e.target.name]: e.target.value
        };
        setFields((fields)=>{
            return {
                ...fields,
                [e.target.name]: e.target.value
            };
        });
        let errros = formError(changes);
        //console.log(errros)
        setError(errros);
    };
    const handleSubmit = async (sessionData)=>{
        setIsSubmit(false);
        let errorReponse = await formError(fields1);
        if (Object.entries(errorReponse).length !== 0) {
            setError(errorReponse);
            setIsSubmit(true);
        } else {
            let captchVal = recaptchaRef.current.getValue();
            if (captchVal) {
                var ref;
                setError({});
                if (sessionData || currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref = currentSession.user) === null || ref === void 0 ? void 0 : ref.is_verified_mob)) {
                    var ref7;
                    // console.log("Finally Working Good")
                    setShowOTP(false);
                    let searchCity = JSON.parse(window === null || window === void 0 ? void 0 : (ref7 = window.localStorage) === null || ref7 === void 0 ? void 0 : ref7.getItem("searchFilterItem"));
                    let cityIDselected = (searchCity === null || searchCity === void 0 ? void 0 : searchCity.id) ? searchCity.id : "";
                    //can not submit form with login or OTP verify resJson
                    let srRes = await fetch(`${process.env.BASE_URL}/api/protect/report-comment`, {
                        method: "POST",
                        body: JSON.stringify({
                            "form": fields1,
                            captcha: captchVal,
                            comment_id: commentID
                        })
                    });
                    let srJson = await srRes.json();
                    if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == 200) {
                        setFields((fields)=>{
                            return {
                                ...fields,
                                ["search_query"]: ""
                            };
                        });
                        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Your request submitted successfully.");
                        recaptchaRef.current.reset();
                        setIsSubmit(true);
                        props.onHide();
                    } else {
                        if (srJson === null || srJson === void 0 ? void 0 : srJson.msg) {
                            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(srJson.msg);
                        } else {
                            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Something went wrong! Please try after sometime.");
                        }
                        recaptchaRef.current.reset();
                        setIsSubmit(true);
                    }
                } else if (sessionStatus == "loading") {
                    setShowOTP(false);
                } else {
                    checkUserDetail(fields1, captchVal); // send OTP to user
                }
            } else {
                setError((error)=>{
                    return {
                        ...error,
                        ["captcha"]: "Please check the captcha"
                    };
                });
                setIsSubmit(true);
            }
        }
    };
    const checkUserDetail = async (formData, captchVal)=>{
        try {
            let saveBusinessData = {
                method: "POST",
                body: JSON.stringify({
                    email: formData.email,
                    phone: formData.phone,
                    captcha: captchVal
                })
            };
            let res = await fetch(`${process.env.BASE_URL}/api/protect/check-user-already-register`, saveBusinessData);
            const resJson = await res.json();
            if (resJson.status == 200) {
                setShowOTP(true); //Open verify OTP modal
            } else {
                if (resJson === null || resJson === void 0 ? void 0 : resJson.msg) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(resJson.msg);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Something went wrong! Please try after sometime.");
                }
            }
        } catch (err) {
            // console.log(err)
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Something went wrong! Please try after sometime.");
        }
    };
    const formError = (frm)=>{
        let errors = {};
        if (!frm.name) {
            errors = {
                ...errors,
                ["name"]: "This field is required."
            };
        } else if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
            errors = {
                ...errors,
                ["name"]: "This field is required."
            };
        } else if (frm.name !== undefined && frm.name.length > 100) {
            errors = {
                ...errors,
                ["name"]: "You can not enter more than 100 charactors."
            };
        }
        if (!frm.phone) {
            errors = {
                ...errors,
                ["phone"]: "This field is required."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
            errors = {
                ...errors,
                ["phone"]: "Only numbers allowed."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
            errors = {
                ...errors,
                ["phone"]: "10 digits numbers allowed."
            };
        }
        if (!frm.email) {
            errors = {
                ...errors,
                ["email"]: "This field is required."
            };
        } else if (frm.email !== undefined && frm.email == "") {
            errors = {
                ...errors,
                ["email"]: "This field is required."
            };
        } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
            errors = {
                ...errors,
                ["email"]: "Invalid email format."
            };
        }
        if (!frm.comment) {
            errors = {
                ...errors,
                ["comment"]: "This field is required."
            };
        } else if (frm.comment !== undefined && frm.comment != "" && frm.comment.length < 4) {
            errors = {
                ...errors,
                ["comment"]: "More than 4 charactors required."
            };
        } else if (frm.comment !== undefined && frm.comment != "" && frm.comment.length > 1000) {
            errors = {
                ...errors,
                ["comment"]: "You can not enter more than 1000 charactors."
            };
        }
        return errors;
    };
    //handle OTP page
    const handleOTP = ()=>false
    ;
    const setVerifiedUser = (status)=>{
        // console.log("OTP received form user IS", status)
        if (status) {
            setShowOTP(false); // hide OTP div
            handleSubmit(true);
        } else {
            setShowOTP(true) // show OTP div if invalid OTP
            ;
        }
    };
    const handleChangeCheckbox = (e1)=>{
        //e.preventDefault();
        const { value , checked  } = e1.target;
        if (checked) {
            const updatedDetails = {
                ...fields1,
                ["wrong_type"]: [
                    ...fields1.wrong_type,
                    value
                ]
            };
            setFields(updatedDetails);
        } else {
            const updatedDetails = {
                ...fields1,
                ["wrong_type"]: fields1.wrong_type.filter((e)=>e !== value
                )
            };
            setFields(updatedDetails);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: currentSession && currentSession !== "undefined" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
            show: show,
            ...props,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Header), {
                    closeButton: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Title), {
                        children: "Report Comment"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Body), {
                    children: [
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default()), {
                                className: "",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group), {
                                        controlId: "name",
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                                children: [
                                                    "Name",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-danger",
                                                        children: "\xa0*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control), {
                                                placeholder: "Enter your name",
                                                name: "name",
                                                value: fields1.name,
                                                onChange: handleChange,
                                                className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.name) !== undefined ? "is-invalid" : ""}`,
                                                disabled: currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref4 = currentSession.user) === null || ref4 === void 0 ? void 0 : ref4.name) ? true : false
                                            }),
                                            (error1 === null || error1 === void 0 ? void 0 : error1.name) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control.Feedback), {
                                                type: "invalid",
                                                tooltip: true,
                                                children: [
                                                    " ",
                                                    error1 === null || error1 === void 0 ? void 0 : error1.name
                                                ]
                                            }) : ""
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group), {
                                        controlId: "phone",
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                                children: [
                                                    "Phone",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-danger",
                                                        children: "\xa0*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control), {
                                                as: (react_number_format__WEBPACK_IMPORTED_MODULE_3___default()),
                                                format: "##########",
                                                placeholder: "Enter your phone",
                                                name: "phone",
                                                value: fields1.phone,
                                                onChange: handleChange,
                                                className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.phone) !== undefined ? "is-invalid" : ""}`,
                                                disabled: currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref1 = currentSession.user) === null || ref1 === void 0 ? void 0 : ref1.phone) ? true : false
                                            }),
                                            (error1 === null || error1 === void 0 ? void 0 : error1.phone) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control.Feedback), {
                                                type: "invalid",
                                                tooltip: true,
                                                children: [
                                                    " ",
                                                    error1 === null || error1 === void 0 ? void 0 : error1.phone
                                                ]
                                            }) : ""
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group), {
                                        controlId: "email",
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                                children: [
                                                    "Email",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-danger",
                                                        children: "\xa0*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control), {
                                                placeholder: "Enter your email",
                                                name: "email",
                                                value: fields1.email,
                                                onChange: handleChange,
                                                className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.email) !== undefined ? "is-invalid" : ""}`,
                                                disabled: currentSession && currentSession !== undefined && (currentSession === null || currentSession === void 0 ? void 0 : (ref2 = currentSession.user) === null || ref2 === void 0 ? void 0 : ref2.email) ? true : false
                                            }),
                                            (error1 === null || error1 === void 0 ? void 0 : error1.email) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control.Feedback), {
                                                type: "invalid",
                                                tooltip: true,
                                                children: [
                                                    " ",
                                                    error1 === null || error1 === void 0 ? void 0 : error1.email
                                                ]
                                            }) : ""
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group), {
                                        controlId: "wrong_type",
                                        className: "mb-3",
                                        onChange: handleChange,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                                children: "What's wrong?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                variant: "secondary",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Check), {
                                                        type: "radio",
                                                        //id={`phone`}
                                                        label: `Spam`,
                                                        name: "wrong_type",
                                                        value: "1",
                                                        role: "button"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Check), {
                                                        type: "radio",
                                                        //id={`address`}
                                                        label: `Harmfull`,
                                                        name: "wrong_type",
                                                        value: "2",
                                                        role: "button"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Check), {
                                                        type: "radio",
                                                        //id={`closed`}
                                                        label: `Misleading`,
                                                        name: "wrong_type",
                                                        value: "3",
                                                        role: "button"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group), {
                                        controlId: "looking",
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                                children: [
                                                    "Comment",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-danger",
                                                        children: "\xa0*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control), {
                                                as: "textarea",
                                                placeholder: "Enter your query?",
                                                name: "comment",
                                                value: fields1.comment,
                                                onChange: handleChange,
                                                className: `form-control ${(error1 === null || error1 === void 0 ? void 0 : error1.comment) !== undefined ? "is-invalid" : ""}`
                                            }),
                                            (error1 === null || error1 === void 0 ? void 0 : error1.comment) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control.Feedback), {
                                                type: "invalid",
                                                tooltip: true,
                                                children: [
                                                    " ",
                                                    error1 === null || error1 === void 0 ? void 0 : error1.comment
                                                ]
                                            }) : ""
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        ref: recaptchaRef,
                                        sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                        size: "normal"
                                    }),
                                    (error1 === null || error1 === void 0 ? void 0 : error1.captcha) !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control.Feedback), {
                                        type: "invalid",
                                        tooltip: true,
                                        style: {
                                            display: "table"
                                        },
                                        children: [
                                            " ",
                                            error1 === null || error1 === void 0 ? void 0 : error1.captcha
                                        ]
                                    }) : "",
                                    isSubmit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "mt-2",
                                        size: "sm",
                                        onClick: ()=>handleSubmit(false)
                                        ,
                                        children: "Submit"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "mt-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                animation: "border",
                                                size: "sm",
                                                role: "status",
                                                className: "me-2"
                                            }),
                                            "wait..."
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_SigninSignupCommon__WEBPACK_IMPORTED_MODULE_11__["default"], {
            session: currentSession,
            show: true,
            onHide: ()=>props.onHide()
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportComments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3605:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3707);
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4883);
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _listings_modals_ReportComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _listings_modals_ReportComment__WEBPACK_IMPORTED_MODULE_6__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, _listings_modals_ReportComment__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const BusinessDetailsReview = ({ businessID , currentSession , sessionStatus , MainReviewLeftCls ="" , ReviewReportCls ="" , MainReviewLeftUserCls ="" , MostCommentCls =""  })=>{
    // Reviews about you array
    const { 0: sort , 1: setSort  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("new");
    const { 0: pageIndex , 1: setPageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: loader , 1: setLoader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: reportCommentID , 1: setReportCommentID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const reviewFetcher = async (url, pageNum, id)=>{
        //console.log("Fectcher ---------------- ", url, pageNum, id)
        var resFet = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "id": id,
                "page": pageNum
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        var allList = await resFet.json();
        if ((allList === null || allList === void 0 ? void 0 : allList.status) == 200) {
            return allList;
        } else {
            return [];
        }
    };
    const { data: allRecords , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])([
        `${process.env.BASE_URL}/api/protect/business-details-reviews`,
        pageIndex,
        businessID
    ], reviewFetcher);
    const reviews = (allRecords === null || allRecords === void 0 ? void 0 : allRecords.data) || [];
    const totalLen = (allRecords === null || allRecords === void 0 ? void 0 : allRecords.total) || 1;
    // ... handle loading and error states
    const handleSort = async (e)=>{
        //console.log("asdjka aca", e.target.value)
        setSort(e.target.value);
        setSize(1);
    };
    const updateIndexPage = (pageVal)=>{
        setLoader(true);
        setTimeout(()=>{
            setLoader(false);
            setPageIndex(pageVal);
        }, 3000);
    };
    const reportComment = (reportID)=>{
        //console.log("reportID----------------", reportID)
        setReportCommentID(reportID);
    };
    const reportCommentHide = ()=>{
        setReportCommentID("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            reportCommentID && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_listings_modals_ReportComment__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                commentID: reportCommentID,
                onHide: reportCommentHide,
                showStatus: true,
                sessionStatus: sessionStatus,
                currentSession: currentSession
            }),
            reviews && reviews.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    loader ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "450px"
                        },
                        className: "align-bottom",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center align-bottom my-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    animation: "grow",
                                    size: "sm",
                                    role: "status",
                                    className: "me-2"
                                }),
                                "Loading..."
                            ]
                        })
                    }) : reviews.map((review, indx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Review__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            author: {
                                thumbSrc: review.user_image,
                                thumbSize: 48,
                                thumbShape: "rounded-circle",
                                name: review.name
                            },
                            showLikeDislike: false,
                            showReportButton: true,
                            commentID: review.id,
                            reportComment: reportComment,
                            rating: review.rating,
                            date: review.date,
                            statusReview: review.is_active,
                            className: "border-bottom mb-3 pb-3 mb-md-4 pb-md-4 mb-sm-3 pb-sm-3",
                            MainReviewLeftCls: MainReviewLeftCls,
                            ReviewReportCls: ReviewReportCls,
                            MainReviewLeftUserCls: MainReviewLeftUserCls,
                            MostCommentCls: MostCommentCls,
                            children: review.review
                        }, indx)
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-sm-flex align-items-center justify-content-between",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            "aria-label": "Reviews pagination",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_5___default()), {
                                className: "mb-4 mb-sm-0",
                                children: [
                                    pageIndex > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                        onClick: ()=>updateIndexPage(pageIndex - 1)
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-chevron-left"
                                            }),
                                            "Prev"
                                        ]
                                    }),
                                    totalLen != pageIndex && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                        onClick: ()=>updateIndexPage(pageIndex + 1)
                                        ,
                                        children: [
                                            "Next ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-chevron-right"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center pt-md-4 pb-2 pb-md-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fi-star display-6 text-muted mb-4"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "h5 mb-2",
                        children: "There are no reviews yet!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-muted pb-1",
                        children: "All reviews will be displayed here."
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessDetailsReview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ef": () => (/* binding */ BusinessOtherInfo),
/* harmony export */   "Rq": () => (/* binding */ BusinessBasic),
/* harmony export */   "a$": () => (/* binding */ MediaInfo),
/* harmony export */   "aB": () => (/* binding */ ReviewInfo),
/* harmony export */   "eJ": () => (/* binding */ BusinessContactInfo),
/* harmony export */   "ww": () => (/* binding */ businessLeadGraph),
/* harmony export */   "z$": () => (/* binding */ businessFaqs),
/* harmony export */   "zW": () => (/* binding */ CompanyInfo)
/* harmony export */ });
async function BusinessBasic(id, userID) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "id": id,
                "user_id": userID
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/business-basic-info`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        //console.log("______resJson_____", resJson)
        if ((resJson === null || resJson === void 0 ? void 0 : resJson.length) > 0) {
            return resJson;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}
async function CompanyInfo(id, userID) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "id": id,
                "user_id": userID
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/business-company-info`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        //console.log("______CompanyInfo resJson_____", resJson)
        if ((resJson === null || resJson === void 0 ? void 0 : resJson.length) > 0) {
            return resJson;
        } else {
            return [];
        }
    } catch (err) {
        console.log("______CompanyInfo _____", err);
        return [];
    }
}
async function MediaInfo(id, userID) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "id": id,
                "user_id": userID
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/business-media-info`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        return resJson;
    } catch (err) {
        console.log("______CompanyInfo _____", err);
        return {
            "images": [],
            "other": []
        };
    }
}
async function ReviewInfo(id, userID) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "id": id,
                "user_id": userID
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/business-reviews-info`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        return resJson;
    } catch (err) {
        console.log("______CompanyInfo _____", err);
        return [];
    }
}
async function businessLeadGraph(id, from_date, to_date) {
    try {
        //console.log("Calling ___", id, from_date, to_date)
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "id": id,
                "from_date": from_date,
                "to_date": to_date
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/business-leads-graph`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        //console.log("____resJson____", resJson)
        return resJson;
    } catch (err) {
        console.log("______  BusinessLeadGraph _____", err);
        return [];
    }
}
async function businessFaqs(id) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "id": id
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/business-faq-info`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        console.log("____resJson____", resJson);
        return resJson;
    } catch (err) {
        console.log("______  BusinessLeadGraph _____", err);
        return [];
    }
}
async function BusinessContactInfo(id) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "id": id
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/business-contact-info`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        console.log("____resJson____", resJson);
        return resJson;
    } catch (err) {
        console.log("______  BusinessLeadGraph _____", err);
        return [];
    }
}
async function BusinessOtherInfo(id) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "id": id
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/business-other-info`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        console.log("____resJson____", resJson);
        return resJson;
    } catch (err) {
        console.log("______  BusinessLeadGraph _____", err);
        return [];
    }
}


/***/ }),

/***/ 5753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1636);
/* harmony import */ var _front_methods_UserDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1795);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4937);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_listings_ListingEditLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7681);
/* harmony import */ var _components_listings_ViewBasicDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5962);
/* harmony import */ var _components_listings_ViewCompanyDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8917);
/* harmony import */ var _components_listings_ViewMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2099);
/* harmony import */ var _components_listings_ViewContactInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3571);
/* harmony import */ var _components_listings_ViewOtherDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1915);
/* harmony import */ var _components_listings_ViewFaq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7661);
/* harmony import */ var _components_listings_ViewReview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8364);
/* harmony import */ var _components_listings_ViewLeads__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5704);
/* harmony import */ var _components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_listings_ViewCompanyDetail__WEBPACK_IMPORTED_MODULE_9__, _components_listings_ViewMedia__WEBPACK_IMPORTED_MODULE_10__, _components_listings_ViewOtherDetails__WEBPACK_IMPORTED_MODULE_12__, _components_listings_ViewReview__WEBPACK_IMPORTED_MODULE_14__, _components_listings_ViewLeads__WEBPACK_IMPORTED_MODULE_15__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_listings_ViewCompanyDetail__WEBPACK_IMPORTED_MODULE_9__, _components_listings_ViewMedia__WEBPACK_IMPORTED_MODULE_10__, _components_listings_ViewOtherDetails__WEBPACK_IMPORTED_MODULE_12__, _components_listings_ViewReview__WEBPACK_IMPORTED_MODULE_14__, _components_listings_ViewLeads__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const EditBusiness = ({ businessDetails , csrfToken , userID  })=>{
    //console.log("ViewCompanyDetail", companyDetailUpdate)
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Basic Info");
    const { 0: basicDetails , 1: setBasicDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(businessDetails);
    const { 0: pageEdit , 1: setPageEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //console.log(router, "router")
    //console.log("router", isPending)
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    console.log("EDITPage ==> ", page);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        pageTitle: "Edit Listing",
        activeNav: "Account",
        updateUser: updateUserDetails,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            userData: empDetails,
            accountPageTitle: "Listings",
            csrfToken: csrfToken,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shadow-none border-0 card",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_ListingEditLayout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            pageName: page,
                            setPage: setPage,
                            csrfToken: csrfToken,
                            details: businessDetails
                        }),
                        page === "Basic Info" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_ViewBasicDetail__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            basicDetails: businessDetails,
                            csrfToken: csrfToken,
                            userID: userID
                        }),
                        page === "Company Info" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_ViewCompanyDetail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            basicDetails: businessDetails,
                            csrfToken: csrfToken,
                            userID: userID
                        }),
                        page === "Media" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_ViewMedia__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            basicDetails: businessDetails,
                            csrfToken: csrfToken,
                            userID: userID
                        }),
                        page === "Contact Info" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_ViewContactInfo__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            basicDetails: businessDetails,
                            csrfToken: csrfToken,
                            userID: userID
                        }),
                        page === "Other Details" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_ViewOtherDetails__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            basicDetails: businessDetails,
                            csrfToken: csrfToken,
                            userID: userID
                        }),
                        page === "FAQ" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_ViewFaq__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            basicDetails: businessDetails,
                            csrfToken: csrfToken,
                            userID: userID
                        }),
                        page === "Reviews" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_ViewReview__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            basicDetails: businessDetails,
                            csrfToken: csrfToken,
                            userID: userID
                        }),
                        page === "Leads" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_ViewLeads__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            basicDetails: businessDetails,
                            csrfToken: csrfToken,
                            userID: userID
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditBusiness);
async function getServerSideProps(ctx) {
    const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { business_id  } = ctx.query;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.getSession)(ctx);
    if (session) {
        const { user  } = session;
        //console.log(user,"useruser")
        const details = await (0,_front_methods_UserDetails__WEBPACK_IMPORTED_MODULE_3__/* .ListingDetails */ .Le)(db, business_id, user.id);
        //console.log("details#################################", details)
        const data = JSON.parse(details);
        let records = (data === null || data === void 0 ? void 0 : data.status) == "200" ? data === null || data === void 0 ? void 0 : data.data[0] : [];
        if (records === null || records === void 0 ? void 0 : records.id) {
            return {
                props: {
                    businessDetails: records,
                    csrfToken: await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.getCsrfToken)(ctx),
                    userID: user.id
                }
            };
        } else {
            return {
                redirect: {
                    permanent: false,
                    destination: `/user/my-businesses`
                }
            };
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: `/`
            }
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 6936:
/***/ ((module) => {

module.exports = require("@aws-sdk/s3-request-presigner");

/***/ }),

/***/ 6011:
/***/ ((module) => {

module.exports = require("date-fns/addDays");

/***/ }),

/***/ 4538:
/***/ ((module) => {

module.exports = require("date-fns/addMonths");

/***/ }),

/***/ 6924:
/***/ ((module) => {

module.exports = require("date-fns/endOfMonth");

/***/ }),

/***/ 3864:
/***/ ((module) => {

module.exports = require("date-fns/endOfWeek");

/***/ }),

/***/ 5914:
/***/ ((module) => {

module.exports = require("date-fns/startOfMonth");

/***/ }),

/***/ 2659:
/***/ ((module) => {

module.exports = require("date-fns/startOfWeek");

/***/ }),

/***/ 5358:
/***/ ((module) => {

module.exports = require("date-fns/subDays");

/***/ }),

/***/ 3182:
/***/ ((module) => {

module.exports = require("localforage");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ 5422:
/***/ ((module) => {

module.exports = require("react-bootstrap/AccordionButton");

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

/***/ 128:
/***/ ((module) => {

module.exports = require("react-bootstrap/Collapse");

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

/***/ 7047:
/***/ ((module) => {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ 2635:
/***/ ((module) => {

module.exports = require("react-bootstrap/FormSelect");

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

/***/ 4883:
/***/ ((module) => {

module.exports = require("react-bootstrap/Pagination");

/***/ }),

/***/ 9736:
/***/ ((module) => {

module.exports = require("react-bootstrap/Popover");

/***/ }),

/***/ 5110:
/***/ ((module) => {

module.exports = require("react-bootstrap/ProgressBar");

/***/ }),

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 3742:
/***/ ((module) => {

module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ 1553:
/***/ ((module) => {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ 4013:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tooltip");

/***/ }),

/***/ 5813:
/***/ ((module) => {

module.exports = require("react-csv");

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

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("react-multi-date-picker");

/***/ }),

/***/ 3371:
/***/ ((module) => {

module.exports = require("react-multi-date-picker/plugins/date_panel");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 3618:
/***/ ((module) => {

module.exports = require("react-select/async");

/***/ }),

/***/ 9777:
/***/ ((module) => {

module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2261:
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ 7441:
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 3512:
/***/ ((module) => {

module.exports = import("firebase/messaging");;

/***/ }),

/***/ 8421:
/***/ ((module) => {

module.exports = import("react-google-charts");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 1448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,4301,8176,7559,6256,467,6439,767,9749,4823,6463,7666,129,902,5415,4354], () => (__webpack_exec__(5753)));
module.exports = __webpack_exports__;

})();