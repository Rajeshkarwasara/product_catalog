"use strict";
(() => {
var exports = {};
exports.id = 7583;
exports.ids = [7583];
exports.modules = {

/***/ 2092:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1636);
/* harmony import */ var _components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6439);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_StarRating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6463);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_PropertyCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6492);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(348);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9270);
/* harmony import */ var _components_partials_EditfeedbackModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4242);
/* harmony import */ var _components_partials_FeedbackConfirmationModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4354);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4165);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4013);
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5698);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4692);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_14__, _components_partials_EditfeedbackModal__WEBPACK_IMPORTED_MODULE_19__, react_toastify__WEBPACK_IMPORTED_MODULE_25__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_14__, _components_partials_EditfeedbackModal__WEBPACK_IMPORTED_MODULE_19__, react_toastify__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const AccountFeedbackPage = ()=>{
    // Partner with us modal
    const { 0: feedbackModalShow , 1: setFeedbackModalShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: editFeedbackObject , 1: setEditFeedbackObject  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleFeedbackModalClose = ()=>setFeedbackModalShow(false)
    ;
    const handleFeedbackModalShow = ()=>setFeedbackModalShow(true)
    ;
    const { 0: feedbackConfirmModalHideShow , 1: setFeedbackConfirmModalHideShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleFeedbackConfirmModalClose = ()=>setFeedbackConfirmModalHideShow(false)
    ;
    const handleFeedbackConfirmModalShow = ()=>setFeedbackConfirmModalHideShow(true)
    ;
    const { 0: deleteRecordId , 1: setDeleteRecordId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_17__.useSession)() //use login session   
    ;
    // Add class to body to enable gray background
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const body = document.querySelector("body");
        document.body.classList.add("bg-secondary");
        return ()=>body.classList.remove("bg-secondary")
        ;
    });
    const { businessRecords , isLoadingMore , isReachingEnd , isRefreshing , size , setSize , mutate  } = (0,_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_14__/* .usePagination */ .h)("/api/protect/my-feedbacks");
    //const businessRecords = []
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    //For edit the feedback
    const editFeedbackOnClick = (reviewObject)=>{
        setEditFeedbackObject(reviewObject);
        setFeedbackModalShow(true);
    };
    //For delete the feedback
    const deleteFeedbackOnClick = async (reviewID)=>{
        if (reviewID) {
            let deleteReviewData = {
                method: "POST",
                body: JSON.stringify({
                    id: reviewID
                })
            };
            let res = await fetch(`${process.env.BASE_URL}/api/protect/delete-review`, deleteReviewData);
            const resJson = await res.json();
            if (resJson.status == 200) {
                await mutate();
                setFeedbackConfirmModalHideShow(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_25__.toast.success(resJson.msg);
            }
        }
    };
    const onClickOpenModal = async (reviewID)=>{
        if (reviewID) {
            setDeleteRecordId(reviewID);
            setFeedbackConfirmModalHideShow(true);
        }
    };
    var ref;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        pageTitle: "Feedback",
        activeNav: "Account",
        updateUser: updateUserDetails,
        children: [
            feedbackModalShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_EditfeedbackModal__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: feedbackModalShow,
                onHide: handleFeedbackModalClose,
                onSwap: handleFeedbackModalShow,
                sessionStatus: status,
                feedback: editFeedbackObject,
                mutate: mutate
            }),
            feedbackConfirmModalHideShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_FeedbackConfirmationModal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: feedbackConfirmModalHideShow,
                onHide: handleFeedbackConfirmModalClose,
                onSwap: handleFeedbackConfirmModalShow,
                deleteFeedbackRecord: deleteFeedbackOnClick,
                recordID: deleteRecordId
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                userData: empDetails,
                accountPageTitle: "Feedback",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "shadow-none border-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default().Body), {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `d-flex justify-content-between align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ProfileHeading)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "h3 mb-0 ",
                                        children: "Reviews"
                                    })
                                }),
                                businessRecords.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        next: ()=>setSize(size + 1)
                                        ,
                                        hasMore: !isReachingEnd,
                                        loader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "overflow-hidden text-center",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                    animation: "border",
                                                    role: "status",
                                                    className: " position-relative overflow-hidden",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "visually-hidden",
                                                        children: "Loading..."
                                                    })
                                                })
                                            ]
                                        }),
                                        endMessage: "",
                                        dataLength: (ref = businessRecords === null || businessRecords === void 0 ? void 0 : businessRecords.length) !== null && ref !== void 0 ? ref : 0,
                                        children: businessRecords.map((review, indx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: ` ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ReviewListing)}`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-block d-sm-flex d-md-flex",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ReviewListingLeft)}`,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: `mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ReviewerName)}`,
                                                                    children: [
                                                                        "  ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: review.url,
                                                                            children: review.name
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StarRating__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                        rating: review.rating
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: `mb-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ReviewerDate)}`,
                                                                    children: review.created_at
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0 mt-1",
                                                                    children: review.review
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `text-end ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ReviewListingRight)}`,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ReviewAction)}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                                                placement: "top",
                                                                                overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_22___default()), {
                                                                                    children: "Delete"
                                                                                }),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ReviewDelete)}`,
                                                                                    onClick: ()=>onClickOpenModal(review.id)
                                                                                    ,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "fi-del-sr"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                                                placement: "top",
                                                                                overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_22___default()), {
                                                                                    children: "Edit"
                                                                                }),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ReviewEdit)}`,
                                                                                    onClick: ()=>editFeedbackOnClick(review)
                                                                                    ,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "fi-edit-sr"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    review.is_active == "0" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mb-0",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().ReviewPending)}`,
                                                                                children: "Pending"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, indx)
                                        )
                                    })
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedback)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `d-sm-flex d-block justify-content-between align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackTop)}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().feedbackIcon)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                            src: "/images/MyAccount/NoFeedbacksImg.svg",
                                                            width: 89,
                                                            height: 89,
                                                            alt: "Square image",
                                                            quality: 100
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().FeedbacksRight)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                children: "No Reviews yet"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "mb-0",
                                                                children: "No feedback has been made yet."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackBenefits)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: "Benefits"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default()), {
                                                    as: "ul",
                                                    className: "d-block",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: " 1. User engagement: Adding reviews to your website can encourage user engagement and make your site more interactive. "
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "2. Social proof: Reviews can serve as social proof, providing potential customers with the reassurance they need to make a purchase or use your services."
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "3. SEO: Reviews can help improve your website's search engine optimization by providing fresh and relevant content, which can help increase its visibility in search results."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "4. Customer feedback: Reviews can provide valuable feedback about your products or services, which can help you identify areas for improvement and make necessary changes."
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "5. Increased conversions: Reviews can help increase conversions by providing potential customers with the information they need to make an informed decision about your products or services."
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "6. Brand reputation: Positive reviews can help build and maintain your brand reputation, while negative reviews can alert you to potential issues that need to be addressed."
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "7. User-generated content: Reviews can provide user-generated content that can be shared on social media and other platforms, helping to increase brand awareness and drive traffic to your website."
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_24___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_26___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "8. Personalization: Reviews can help personalize the customer experience by providing them with tailored product recommendations, which can increase the chances of them making a purchase."
                                                                }),
                                                                " "
                                                            ]
                                                        })
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
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountFeedbackPage);
async function getServerSideProps(ctx) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_17__.getSession)(ctx);
    if (session) {
        return {
            props: {
                userSessionData: ""
            }
        };
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

/***/ 6810:
/***/ ((module) => {

module.exports = require("react-bootstrap/Card");

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

/***/ 4013:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tooltip");

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

/***/ 1448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,7559,467,6439,6492,9749,6463,4354,176,4242], () => (__webpack_exec__(2092)));
module.exports = __webpack_exports__;

})();