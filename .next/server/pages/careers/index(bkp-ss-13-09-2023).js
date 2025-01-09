"use strict";
(() => {
var exports = {};
exports.id = 6240;
exports.ids = [6240];
exports.modules = {

/***/ 9033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ FindCareerJobs)
/* harmony export */ });
async function FindCareerJobs(argu) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "city_id": argu.city_id,
                "searchTitle": argu.searchKeyword,
                "id": 0
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/find-jobs`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if (resJson.status == 200) {
            return resJson;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}


/***/ }),

/***/ 2090:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1636);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(329);
/* harmony import */ var _components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8184);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5698);
/* harmony import */ var _components_MySelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6256);
/* harmony import */ var _components_JobCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2726);
/* harmony import */ var _components_AboutUsSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4440);
/* harmony import */ var _front_methods_FindJobs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9033);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2711);
/* harmony import */ var _styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_Services__WEBPACK_IMPORTED_MODULE_10__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__, _components_Services__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const Career = (props)=>{
    const { 0: selectedCity , 1: setSelectedCity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props === null || props === void 0 ? void 0 : props.defaultCityRecords);
    const { 0: selectedCityId , 1: setSelectedCityID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: jobListing , 1: setJobListing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: totalJobListing , 1: setTotalJobListing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: searchJobKeyword , 1: setSearchJobKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: showErrorMsg , 1: setShowErrorMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //get path
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const PageUrl = query.asPath;
    const defaultSelectedCityId = props.defaultCityRecords.id;
    //on change set selected city in local storage
    const citiesListHandleChange = async (selected)=>{
        await setSelectedCity(selected);
        // set selected city id
        setSelectedCityID((selected === null || selected === void 0 ? void 0 : selected.id) || 0);
    };
    //on click on find job button
    const onClickFindJob = async ()=>{
        //if (searchJobKeyword != '') {
        const params = {
            city_id: selectedCityId,
            searchKeyword: searchJobKeyword
        };
        const getJobs = await (0,_front_methods_FindJobs__WEBPACK_IMPORTED_MODULE_17__/* .FindCareerJobs */ .k)(params);
        setJobListing((getJobs === null || getJobs === void 0 ? void 0 : getJobs.data) || []);
        setTotalJobListing((getJobs === null || getJobs === void 0 ? void 0 : getJobs.totalJobs) || 0);
    // } else {
    //     setShowErrorMsg(true) //show error message
    // }
    };
    //set search keyword in variable
    const onChangeInputJobTitle = (e)=>{
        let target = e.target;
        setSearchJobKeyword(target.value);
        setShowErrorMsg(false); //hide error message
    };
    //first time call function for find jobs by city id on load page
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        //get search city name from local storage
        let selected_city_id = "";
        if (false) {}
        console.log("selectedCityId-->>>", selected_city_id, "----" + selectedCityId);
        //get search city name from local storage
        const params = {
            city_id: selected_city_id,
            searchKeyword: ""
        };
        const getJobs = await (0,_front_methods_FindJobs__WEBPACK_IMPORTED_MODULE_17__/* .FindCareerJobs */ .k)(params);
        setJobListing((getJobs === null || getJobs === void 0 ? void 0 : getJobs.data) || []);
        setTotalJobListing((getJobs === null || getJobs === void 0 ? void 0 : getJobs.totalJobs) || 0);
    }, []);
    //set search keyword in variable
    const ApplyForJob = (jobId)=>{
        let url = "/careers/apply-now/" + jobId;
        next_router__WEBPACK_IMPORTED_MODULE_16___default().push(url, undefined, {
            shallow: false
        });
    };
    const customStyles = {
        control: (base, state)=>({
                ...base,
                border: "0",
                padding: "0"
            })
        ,
        control: (base, state)=>({
                ...base,
                border: state.isFocused ? 0 : 0,
                // This line disable the blue border
                boxShadow: state.isFocused ? 0 : 0,
                "&:hover": {
                    border: state.isFocused ? 0 : 0
                }
            })
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_SeoHead__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                title: "Careers at Dialmenow",
                description: "Start your career at Dialmenow. Dialmenow is the most comprehensive Jaipur Business Directory. Find Local Business Details, Contacts, Products, Services & Price Quotations for all Verticals in Jaipur.",
                keyword: "yellow pages Jaipur, yellowpages Jaipur, yellow pages, business directory Jaipur, Jaipur business directory, local business directory, Dialmenow yellow pages",
                url: PageUrl,
                city: "",
                area: "",
                companyName: "",
                SEOIndexing: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: "Career",
                activeNav: "Page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: `full position-relative ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobTopHero)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                src: "/images/CareerImg/CareerImgBgImg.jpg",
                                width: 1600,
                                height: 284,
                                alt: "Square image",
                                loading: "eager",
                                className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobTopHeroImg)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ` ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobTopHeroText)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        className: "align-items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            lg: 7,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                className: "",
                                                children: [
                                                    "Start your career at ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Dial Me Now"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: `full pt-md-5 pb-md-4 pt-sm-4 pb-sm-2 pt-4 pb-2  position-relative ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStep)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "From candidate to colleague: the different steps."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Build a career that suits your lifestyle, in a company where your voice matters. Let\u2019s build a sustainable world together."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    className: "mt-md-5 mt-sm-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "col",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `text-center ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepBox)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepMainImg)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            src: "/images/CareerImg/applyJobImg.png",
                                                            width: 114,
                                                            height: 114,
                                                            alt: "Square image",
                                                            loading: "eager"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "mb-1 mt-1",
                                                        children: "Apply for a job"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "col",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `text-center ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepBox)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepMainImg)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            src: "/images/CareerImg/JobshortCallImg.png",
                                                            width: 112,
                                                            height: 112,
                                                            alt: "Square image",
                                                            loading: "eager"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "mb-1 mt-1",
                                                        children: "Get a call"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "col",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `text-center ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepBox)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepMainImg)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            src: "/images/CareerImg/PersonInterviewImg.png",
                                                            width: 112,
                                                            height: 112,
                                                            alt: "Square image",
                                                            loading: "eager"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "mb-1 mt-1",
                                                        children: "In-person interview"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "col",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `text-center ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepBox)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepMainImg)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            src: "/images/CareerImg/JobEvaluationImg.png",
                                                            width: 112,
                                                            height: 112,
                                                            alt: "Square image",
                                                            loading: "eager"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "mb-1 mt-1",
                                                        children: "Evaluation"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "col",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `text-center ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepBox)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobStepMainImg)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            src: "/images/CareerImg/JobKudosImg.png",
                                                            width: 112,
                                                            height: 112,
                                                            alt: "Square image",
                                                            loading: "eager"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "mb-1 mt-1",
                                                        children: "Kudos, you got the job!"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: `full ptb-40 ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobJoinUs)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Current Job Openings"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "popular-services-main mt-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-md-flex d-block",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `d-sm-flex d-block ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobJoinUsLeft)}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `position-relative ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobtagLeft)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    onChange: onChangeInputJobTitle,
                                                                    className: `form-control ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormControl) + " " + (_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormControlOne)}`,
                                                                    placeholder: "Job title"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().Jobtag)}`,
                                                                    children: "Position"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().searchIcon)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-search"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `position-relative ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobtagRight)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySelect__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                    options: props.citiesData,
                                                                    defaultValue: defaultSelectedCityId,
                                                                    closeMenuOnSelect: true,
                                                                    hideSelectedOptions: false,
                                                                    onChange: citiesListHandleChange,
                                                                    allowSelectAll: false,
                                                                    value: selectedCity,
                                                                    ShowSelectAll: false,
                                                                    volume: selectedCity,
                                                                    className: `form-control ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormControl) + " " + (_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().FormControlSecond)}`,
                                                                    isSearchable: true,
                                                                    styles: customStyles
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().searchIconPin)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-geo"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                        size: "md",
                                                        type: "button",
                                                        onClick: onClickFindJob,
                                                        className: " w-100 w-md-auto ms-md-3 ms-sm-0 mt-md-0 mt-sm-2 mt-2",
                                                        children: "Find Jobs"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    sm: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    sm: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    sm: "2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "d-sm-flex"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                sm: "12",
                                                className: "mt-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: `fw-normal ${(_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().totalJobTitle)}`,
                                                    children: totalJobListing > 1 ? `${totalJobListing} jobs available` : `${totalJobListing} job available`
                                                })
                                            })
                                        }),
                                        (jobListing === null || jobListing === void 0 ? void 0 : jobListing.length) > 0 && jobListing.map((job, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    sm: "12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_JobCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                        title: job.name,
                                                        category: job.category_name,
                                                        jobtype: job.job_type,
                                                        location: job.city_name,
                                                        no_of_vacancy: job.no_of_vacancy,
                                                        // light // Optionally pass light prop so the card works well on dark backgrounds
                                                        style: {},
                                                        onClickApplyForJob: ()=>ApplyForJob(job.id)
                                                        ,
                                                        JobLastCls: (_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobLast),
                                                        className: (_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobCard),
                                                        JobcardBodyNewCls: (_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().JobcardBodyNew),
                                                        ApplyJobBtnCls: (_styles_Career_module_css__WEBPACK_IMPORTED_MODULE_18___default().ApplyJobBtn)
                                                    })
                                                })
                                            }, index)
                                        )
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AboutUsSection__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Career);

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

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4178,554,3930,7229,9340,8184,329,4440,6256,2726], () => (__webpack_exec__(2090)));
module.exports = __webpack_exports__;

})();