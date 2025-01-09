exports.id = 2726;
exports.ids = [2726];
exports.modules = {

/***/ 2711:
/***/ ((module) => {

// Exports
module.exports = {
	"JobTopHeroText": "Career_JobTopHeroText__ymAr_",
	"JobStepBox": "Career_JobStepBox__5FfQd",
	"JobJoinUs": "Career_JobJoinUs__7Sgz9",
	"JobJoinUsLeft": "Career_JobJoinUsLeft__F8LBc",
	"FormControl": "Career_FormControl__3JZbS",
	"FormControlSecond": "Career_FormControlSecond__uTyM1",
	"FormControlOne": "Career_FormControlOne__V3STL",
	"Jobtag": "Career_Jobtag__hvZB_",
	"JobtagLeft": "Career_JobtagLeft__JkFBm",
	"searchIcon": "Career_searchIcon__160X7",
	"totalJobTitle": "Career_totalJobTitle__7Mg3A",
	"JobLast": "Career_JobLast__Se5Uo",
	"JobCard": "Career_JobCard__4Hh7I",
	"JobtagRight": "Career_JobtagRight__Gnd9A",
	"searchIconPin": "Career_searchIconPin__PORYl",
	"applyJobRight": "Career_applyJobRight__KAfWv",
	"applyJocVards": "Career_applyJocVards__HMEfJ",
	"ApplyCardBody": "Career_ApplyCardBody__Jc6ld",
	"ApplyCardBodyJobLast": "Career_ApplyCardBodyJobLast__AW6rS",
	"dynamicContent": "Career_dynamicContent__9Guq7",
	"ApplyCardBodyCls": "Career_ApplyCardBodyCls__9XFRN",
	"ApplyCardBodyJobLastCls": "Career_ApplyCardBodyJobLastCls__OPIyx",
	"NewJobPage": "Career_NewJobPage__WBhI3",
	"JobLastNew": "Career_JobLastNew__AmMTz",
	"NewJobPageCls": "Career_NewJobPageCls__m_J40",
	"ApplyCardBodyClsNew": "Career_ApplyCardBodyClsNew__q3YRo",
	"JobcardBodyNew": "Career_JobcardBodyNew__Wok4j",
	"workBoxIcon": "Career_workBoxIcon__cac2O",
	"workBoxText": "Career_workBoxText__ts245",
	"workBox": "Career_workBox__0_iEK",
	"viewvideo": "Career_viewvideo__Bveav",
	"JobTopHeroImg": "Career_JobTopHeroImg__61Dkl",
	"JobTopHero": "Career_JobTopHero__qUr_j",
	"JobStepMainImg": "Career_JobStepMainImg__3UIfR",
	"ApplyJobBtn": "Career_ApplyJobBtn__PRzOs"
};


/***/ }),

/***/ 2726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Career_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2711);
/* harmony import */ var _styles_Career_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_2__);



const JobCard = ({ href , company , title , category , description , jobtype , location , salary , no_of_vacancy , badges , dropdown , applyNowButton =true , light , className , onClickApplyForJob , JobLastCls , ApplyCardBodyCls , ApplyCardBodyJobLastCls , dynamicContentCls , NewJobPageCls ="" , JobLastNew ="" , JobcardBodyCls ="" , JobcardBodyNewCls ="" , ApplyJobBtnCls ="" , ...props })=>{
    const extraClass = className ? ` ${className}` : "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: light ? `card card-light mb-3 card-hover${extraClass}` : `card mb-2 ${extraClass}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `card-body pt-1 ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_2___default().ApplyCardBodyClsNew) + " " + JobcardBodyNewCls}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-between align-items-start mb-2"
                    }),
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "h5 card-title pt-1 mb-2",
                        children: href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: href,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: `${light ? "text-light " : " "} stretched-link text-decoration-none`,
                                children: title
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: light ? "text-light" : " ",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between align-items-center",
                        children: [
                            category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-n2 mb-0",
                                style: {
                                    color: "#606060"
                                },
                                children: category
                            }),
                            applyNowButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: onClickApplyForJob,
                                type: "button",
                                className: `btn btn-sm btn-primary ${ApplyJobBtnCls}`,
                                children: "Apply Now"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `card-footer d-flex align-items-center justify-content-between border-0 pt-0  ${NewJobPageCls}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_2___default().JobLastNew)}`,
                    children: [
                        jobtype && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-nowrap me-sm-4 me-md-4 ms-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `me-2 mt-n1 fi-clock ${light ? "text-light opacity-50" : "text-muted"} `
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: light ? "text-light opacity-60" : "",
                                    children: jobtype
                                })
                            ]
                        }),
                        location && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-nowrap me-sm-4 me-md-4 ms-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `me-2 mt-n1 fi-globe ${light ? "text-light opacity-50" : "text-muted"} `
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: light ? "text-light opacity-60" : "",
                                    children: location
                                })
                            ]
                        }),
                        no_of_vacancy && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-nowrap me-sm-4 me-md-4 ms-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `me-2 mt-n1 fi-user-check ${light ? "text-light opacity-50" : "text-muted"} `
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: light ? "text-light opacity-60" : "",
                                    children: no_of_vacancy
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${dynamicContentCls}`,
                children: description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: description
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobCard);


/***/ })

};
;