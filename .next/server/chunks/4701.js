exports.id = 4701;
exports.ids = [4701];
exports.modules = {

/***/ 8885:
/***/ ((module) => {

// Exports
module.exports = {
	"categoryHeading": "CategoryDetails_categoryHeading__AFLtD",
	"ContactsSeacrh": "CategoryDetails_ContactsSeacrh__0BVKW",
	"ContactsSeacrhIcon": "CategoryDetails_ContactsSeacrhIcon__iynPZ",
	"FormControl": "CategoryDetails_FormControl__n9Zsc",
	"AccordionItem": "CategoryDetails_AccordionItem__OqDOD",
	"AccordionHeader": "CategoryDetails_AccordionHeader__PIc8m",
	"collapsed": "CategoryDetails_collapsed__4k4mO",
	"AccordionBody": "CategoryDetails_AccordionBody__kC1tC",
	"ImportantLi": "CategoryDetails_ImportantLi__eVb1J",
	"ImportantRight": "CategoryDetails_ImportantRight__yK1M6",
	"importantPhone": "CategoryDetails_importantPhone__gjfAm",
	"subCategoryActive": "CategoryDetails_subCategoryActive__f5PbA",
	"ImportantDetailsClose": "CategoryDetails_ImportantDetailsClose__WHkKd",
	"ImportantHeadings": "CategoryDetails_ImportantHeadings__N_btF",
	"dialmenowListingTop": "CategoryDetails_dialmenowListingTop__W1ki7",
	"dialmenow-hero": "CategoryDetails_dialmenow-hero__igOkY",
	"dialmenowListingCategorTop": "CategoryDetails_dialmenowListingCategorTop__OD_OM"
};


/***/ }),

/***/ 4701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ImportantInfo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: external "react-bootstrap/Accordion"
var Accordion_ = __webpack_require__(2423);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
// EXTERNAL MODULE: ./components/Loader.js
var Loader = __webpack_require__(9270);
// EXTERNAL MODULE: ./styles/CategoryDetails.module.css
var CategoryDetails_module = __webpack_require__(8885);
var CategoryDetails_module_default = /*#__PURE__*/__webpack_require__.n(CategoryDetails_module);
// EXTERNAL MODULE: external "react-bootstrap/Offcanvas"
var Offcanvas_ = __webpack_require__(6865);
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(Offcanvas_);
;// CONCATENATED MODULE: ./front_methods/ImportantInformation.js
async function ImportantCategoriesSubcategories(search = "") {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "search_filter": search
            })
        };
        let res = await fetch(`${process.env.BASE_URL}/api/protect/important-cat-sub-category`, requestOptions);
        const resJson = await res.json();
        if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
            return resJson === null || resJson === void 0 ? void 0 : resJson.data;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}
//get important information Contact listing by city id and subcategory
async function ImportantSubcategoriesContactList(argu) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify(argu)
        };
        let res = await fetch(`${process.env.BASE_URL}/api/protect/important-contact-list`, requestOptions);
        const resJson = await res.json();
        if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
            return resJson === null || resJson === void 0 ? void 0 : resJson.data;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/importantInfo/ImportantInfo.js











const ImportantInfoDetail = ({ impCategoryId  })=>{
    const { 0: importantCategories , 1: setImportantCategories  } = (0,external_react_.useState)([]);
    const { 0: selectedCityId , 1: setSelectedCityId  } = (0,external_react_.useState)("0");
    const { 0: subCategoryName , 1: setSubCategoryName  } = (0,external_react_.useState)("");
    const { 0: subCategoryID , 1: setSubCategoryID  } = (0,external_react_.useState)(0);
    const { 0: importantContacts , 1: setImportantContacts  } = (0,external_react_.useState)([]);
    const { 0: isLoading , 1: setIsloading  } = (0,external_react_.useState)(false) //use loder
    ;
    const { 0: addClassOnContactsListDiv , 1: setAddClassOnContactsListDiv  } = (0,external_react_.useState)("") //use loder
    ;
    const { 0: showCanvas , 1: setShowCanvas  } = (0,external_react_.useState)(false);
    const handleCloseCanvas = ()=>{
        setShowCanvas((pre)=>!pre
        );
    };
    // Media query for displaying Offcanvas on screens larger than 991px
    const isDesktop = (0,external_react_responsive_.useMediaQuery)({
        query: "(max-width: 768px)"
    });
    (0,external_react_.useEffect)(async ()=>{
        let getImportantCategories = await ImportantCategoriesSubcategories();
        setImportantCategories(getImportantCategories.impCategories);
    }, []);
    //onchange function for searching
    const onChangeSearchCategories = async (e)=>{
        const query = e.target.value;
        let getImportantCategories = await ImportantCategoriesSubcategories(query);
        setImportantCategories(getImportantCategories.impCategories);
        if ((importantCategories === null || importantCategories === void 0 ? void 0 : importantCategories.length) < 1) {
            setSubCategoryName("") //set the sub category name
            ;
            setSubCategoryID(0) //set sub category id
            ;
            setImportantContacts([]) //set blank array in contact list
            ;
        }
    };
    //onclick get contact list by subcategory
    const importantContactList = async (id, subCatName)=>{
        const query = {
            sub_cat_id: id,
            city_id: selectedCityId,
            search_filter: ""
        };
        let getImportantContactsList = await ImportantSubcategoriesContactList(query);
        setImportantContacts(getImportantContactsList);
        setSubCategoryName(subCatName) //set the sub category name
        ;
        setSubCategoryID(id) //set sub category id
        ;
    };
    const onChangeSearchContactList = async (e)=>{
        const searchName = e.target.value // subCategoryID
        ;
        const query = {
            sub_cat_id: subCategoryID,
            city_id: selectedCityId,
            search_filter: searchName
        };
        let getImportantContactsList = await ImportantSubcategoriesContactList(query);
        setImportantContacts(getImportantContactsList);
    };
    (0,external_react_.useEffect)(()=>{
        //get selected city id from local storage
        if (false) {}
    }, []);
    (0,external_react_.useEffect)(async ()=>{
        var ref, ref1;
        let selectedCategoryObj;
        if (impCategoryId) {
            //find the selected category array object by category id
            selectedCategoryObj = importantCategories.find((o)=>o.id == impCategoryId
            );
        } else {
            selectedCategoryObj = (importantCategories === null || importantCategories === void 0 ? void 0 : importantCategories.length) > 0 ? importantCategories[0] : [];
        }
        //fetch the contact list 
        if ((selectedCategoryObj === null || selectedCategoryObj === void 0 ? void 0 : (ref = selectedCategoryObj.subcategories) === null || ref === void 0 ? void 0 : ref.length) > 0 && ((ref1 = selectedCategoryObj === null || selectedCategoryObj === void 0 ? void 0 : selectedCategoryObj.subcategories[0]) === null || ref1 === void 0 ? void 0 : ref1.id) > 0) {
            await importantContactList(selectedCategoryObj.subcategories[0].id, selectedCategoryObj.subcategories[0].name) //sub category id and name
            ;
        }
    }, [
        importantCategories
    ]);
    //check screen size and add class according to screen
    (0,external_react_.useEffect)(async ()=>{
        if (screen.width < 767.98) {
            setAddClassOnContactsListDiv((CategoryDetails_module_default()).contactsListInMobile);
        } else {
            setAddClassOnContactsListDiv("");
        }
    }, [
        addClassOnContactsListDiv
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {}) : "",
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                        sm: "12",
                        md: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: `mb-3 mt-4 mt-sm-4 mt-md-5 ${(CategoryDetails_module_default()).ImportantHeadings}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Important Contacts"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${(CategoryDetails_module_default()).ContactsSeacrh}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: `form-control ${(CategoryDetails_module_default()).FormControl}`,
                                        onChange: onChangeSearchCategories,
                                        placeholder: "Search..."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `${(CategoryDetails_module_default()).ContactsSeacrhIcon}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fi-search"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()), {
                                defaultActiveKey: 0,
                                children: (importantCategories === null || importantCategories === void 0 ? void 0 : importantCategories.length) > 0 ? importantCategories.map((category, index)=>{
                                    /*#__PURE__*/ return (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                        className: `${(CategoryDetails_module_default()).AccordionItem}`,
                                        eventKey: index,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Header, {
                                                className: `${(CategoryDetails_module_default()).AccordionHeader}`,
                                                children: category.name
                                            }),
                                            (category === null || category === void 0 ? void 0 : category.subcategories) && (category === null || category === void 0 ? void 0 : category.subcategories.map((subCategory, subCatIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: subCategoryID == subCategory.id ? `selected-sub-cat-li ${(CategoryDetails_module_default()).subCategoryActive} ${(CategoryDetails_module_default()).ImportantLi}` : `${(CategoryDetails_module_default()).ImportantLi}`,
                                                    onClick: ()=>{
                                                        importantContactList(subCategory.id, subCategory.name);
                                                        handleCloseCanvas();
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Body, {
                                                        className: `${(CategoryDetails_module_default()).AccordionBody}`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: subCategory.name
                                                            }),
                                                            subCategoryID == subCategory.id && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi-arrow-long-right"
                                                            })
                                                        ]
                                                    })
                                                }, subCatIndex + index)
                                            ))
                                        ]
                                    }, index);
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Result not found"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                        sm: "12",
                        md: 6,
                        children: isDesktop ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Offcanvas_default()), {
                            show: showCanvas,
                            onHide: handleCloseCanvas,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Header, {
                                    closeButton: true,
                                    className: "py-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Title, {
                                        as: "h4",
                                        children: subCategoryName
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Body, {
                                    className: "p-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `${(CategoryDetails_module_default()).ImportantRight + " " + addClassOnContactsListDiv}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${(CategoryDetails_module_default()).ContactsSeacrh}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        className: "form-control",
                                                        onChange: onChangeSearchContactList,
                                                        placeholder: "Search..."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `${(CategoryDetails_module_default()).ContactsSeacrhIcon}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fi-search"
                                                        })
                                                    })
                                                ]
                                            }),
                                            (importantContacts === null || importantContacts === void 0 ? void 0 : importantContacts.length) > 0 ? importantContacts.map((contact, index1)=>{
                                                var ref;
                                                /*#__PURE__*/ return (0,jsx_runtime_.jsxs)((Row_default()), {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                            xs: "6",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "mb-2",
                                                                children: contact.dispaly_name
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                            xs: "6",
                                                            className: "text-end",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: `d-flex align-items-center ${(CategoryDetails_module_default()).importantPhone}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fi-phone"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "mb-0 ms-n2",
                                                                        children: (contact === null || contact === void 0 ? void 0 : (ref = contact.important_contact) === null || ref === void 0 ? void 0 : ref.length) > 0 && contact.important_contact.map((phone, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: `tel:${phone}`,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "text-dark ms-2 fs-sm ",
                                                                                        children: phone
                                                                                    })
                                                                                }, index)
                                                                            })
                                                                        )
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, "display-" + index1);
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Result not found"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(CategoryDetails_module_default()).ImportantRight + " " + addClassOnContactsListDiv}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: subCategoryName
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `${(CategoryDetails_module_default()).ImportantDetailsClose}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        class: "fi-x-circle"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(CategoryDetails_module_default()).ContactsSeacrh}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "form-control",
                                            onChange: onChangeSearchContactList,
                                            placeholder: "Search..."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(CategoryDetails_module_default()).ContactsSeacrhIcon}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fi-search"
                                            })
                                        })
                                    ]
                                }),
                                (importantContacts === null || importantContacts === void 0 ? void 0 : importantContacts.length) > 0 ? importantContacts.map((contact, index2)=>{
                                    var ref;
                                    /*#__PURE__*/ return (0,jsx_runtime_.jsxs)((Row_default()), {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                xs: "6",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-2",
                                                    children: contact.dispaly_name
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                xs: "6",
                                                className: "text-end",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `d-flex align-items-center ${(CategoryDetails_module_default()).importantPhone}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fi-phone"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "mb-0 ms-n2",
                                                            children: (contact === null || contact === void 0 ? void 0 : (ref = contact.important_contact) === null || ref === void 0 ? void 0 : ref.length) > 0 && contact.important_contact.map((phone, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: `tel:${phone}`,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-dark ms-2 fs-sm ",
                                                                            children: phone
                                                                        })
                                                                    }, index)
                                                                })
                                                            )
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }, "display-" + index2);
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Result not found"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ImportantInfo = (ImportantInfoDetail);


/***/ })

};
;