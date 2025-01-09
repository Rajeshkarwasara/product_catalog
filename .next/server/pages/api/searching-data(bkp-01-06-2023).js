"use strict";
(() => {
var exports = {};
exports.id = 8761;
exports.ids = [8761];
exports.modules = {

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 6936:
/***/ ((module) => {

module.exports = require("@aws-sdk/s3-request-presigner");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 7441:
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 9090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ dbConn)
});

;// CONCATENATED MODULE: external "serverless-mysql"
const external_serverless_mysql_namespaceObject = require("serverless-mysql");
var external_serverless_mysql_default = /*#__PURE__*/__webpack_require__.n(external_serverless_mysql_namespaceObject);
;// CONCATENATED MODULE: ./lib/dbConn.js

const db = external_serverless_mysql_default()({
    config: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
});
async function dbConn() {
    return db;
};


/***/ }),

/***/ 1598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9090);
/* harmony import */ var _lib_S3img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8365);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2212);




async function handler(req, res) {
    try {
        const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        if (req.method == "POST") {
            var ref, ref1;
            const body = (req === null || req === void 0 ? void 0 : req.body) ? typeof req.body === "object" ? req.body : JSON.parse(req.body) : "";
            let searchData = (body === null || body === void 0 ? void 0 : body.search_data) || [];
            let query = (body === null || body === void 0 ? void 0 : (ref = body.stringSearch) === null || ref === void 0 ? void 0 : ref.trim()) || "";
            let cityID = (body === null || body === void 0 ? void 0 : body.city_id) || "";
            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({
                req
            });
            let userID = (session === null || session === void 0 ? void 0 : (ref1 = session.user) === null || ref1 === void 0 ? void 0 : ref1.id) || 0;
            //console.log("---------body-----------------", body)
            // page => listing | details | categories | no_record
            if (searchData.length >= 4) {
                // city | area | business name | business ID
                //let pageName = searchData.indexOf("edit-list") == 4 ? "edit" : "details"
                //first check city
                let cityData = await db.query("SELECT id,name,description FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND REPLACE(LOWER(name),' ','-') = ?", [
                    searchData[0].toLowerCase()
                ]);
                if (cityData) {
                    //city found
                    //let areaData = await db.query("SELECT id,name,description FROM master_areas WHERE is_active='1' AND deleted_at IS NULL AND REPLACE(LOWER(name),' ','-') = ? AND city_id=?", [searchData[1], cityData[0].id])
                    let currentDay = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__/* .getDateTime */ .Fc)(4);
                    let currentDate = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__/* .getDateTime */ .Fc)(1);
                    //get business details
                    let businessDetails = await db.query("SELECT mb.id,mb.name,st.name as state_name,mb.company_description,mb.additional_information,mb.logo,mb.contact_person,mb.phone_number,(SELECT phone FROM business_mobile_emails WHERE type='5' AND business_id=mb.id AND is_verified_phone='1' LIMIT 1) as business_phone,(SELECT GROUP_CONCAT(text SEPARATOR ', ') FROM `business_mobile_emails` WHERE business_id =mb.id AND type='4') as landlines,IFNULL(de.ivr_number,(SELECT GROUP_CONCAT(IF(type='5',phone,text)) FROM business_mobile_emails WHERE business_id=mb.id AND (type='4' OR (type='5' AND is_verified_phone='1')) LIMIT 1)) as all_numbers,mb.city_id,mb.area_id,mb.address,mb.landmark,mb.pincode,CONCAT(mb.lat,',',mb.lng) as geo_location,mb.is_faq_show,mb.is_claimed,mb.is_verified,mb.professional_association,mb.past_experience,mb.awards,mb.product_and_services,mb.business_more_info,(SELECT GROUP_CONCAT(keyword) FROM master_keywords WHERE FIND_IN_SET(id,mb.keywords)) as keywords_name,(SELECT GROUP_CONCAT(name) as name FROM master_type_of_business WHERE FIND_IN_SET(id,mb.type_of_business)) as type_of_businesses,de.year_establishment ,de.whatsapp_no ,de.ivr_number,de.book_now_url,de.business_pdf,de.store_front_image,de.store_back_image,ar.name as area_name,ct.name as city_name,(SELECT IF(is_open=0,'close',IF(is_open =2,CONCAT_WS(',',open_at,close_at,dual_open_at,dual_close_at),'open')) FROM business_timings WHERE business_id = mb.id AND day=?) as timings,mb.is_claimed,mb.is_verified,mb.subcategory,IF((SELECT COUNT(id) FROM business_packages WHERE business_id =mb.id AND (? BETWEEN begins_on AND ends_on)) > 0,1,2) as is_paid FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_areas ar ON ar.id = mb.area_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_states st ON st.id = mb.state_id WHERE mb.approved_at IS NOT NULL AND mb.is_active='1' AND mb.deleted_at IS NULL AND mb.city_id=? AND mb.id=?", [
                        currentDay,
                        currentDate,
                        cityData[0].id,
                        searchData[3]
                    ]);
                    //console.log("---------kkk______________", currentDay, cityData[0].id, searchData[3], businessDetails)
                    if ((businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.length) > 0) {
                        //console.log("businessDetails",businessDetails)
                        businessDetails[0].logo = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_1__/* .S3img */ .y9)(businessDetails[0].logo, "uploads/company/logo/", false);
                        businessDetails[0].url = await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__/* .getBusinessUrl */ .g9)(businessDetails[0].area_name, businessDetails[0].city_name, businessDetails[0].name, businessDetails[0].id);
                        businessDetails[0].store_front_image = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_1__/* .S3img */ .y9)(businessDetails[0].store_front_image, "uploads/company/image/", false);
                        businessDetails[0].store_back_image = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_1__/* .S3img */ .y9)(businessDetails[0].store_back_image, "uploads/company/image/", false);
                        let images = await db.query("SELECT url FROM business_img_videos WHERE is_active = '2' AND business_id=? LIMIT 1", [
                            businessDetails[0].id
                        ]);
                        if ((images === null || images === void 0 ? void 0 : images.length) > 0) {
                            businessDetails[0].image_back = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_1__/* .S3img */ .y9)(images[0].url, "uploads/company/image/", false);
                        } else {
                            businessDetails[0].image_back = null;
                        }
                        res.status(200).json({
                            status: 200,
                            records: businessDetails,
                            "page": "details",
                            city_id: cityData[0].id,
                            city_name: cityData[0].name
                        });
                    } else {
                        //business not found
                        res.status(200).json({
                            status: 201,
                            message: "No records",
                            "page": "no_record",
                            "city_id": cityData[0].id
                        });
                    }
                } else {
                    //city not found
                    res.status(200).json({
                        status: 201,
                        message: "No records",
                        page: "no_record"
                    });
                }
            } else if (searchData.length == 2 && searchData[0] != "categories") {
                console.log("searchData    ", searchData);
                let cityData = await db.query("SELECT id,name,description,state_id FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND REPLACE(LOWER(name),' ','-') = ?", [
                    searchData[0].toLowerCase()
                ]);
                //console.log("Data City is----------------", cityData)
                if (cityData) {
                    let category = await db.query("SELECT sub.id,sub.name,sub.description,sub.meta_title,sub.image,sub.meta_keywords,sub.meta_description,c.name as category_name FROM master_sub_categories sub LEFT JOIN master_categories c ON c.id = sub.category_id WHERE sub.is_active='1' AND sub.deleted_at IS NULL AND sub.slug = ?", [
                        searchData[1]
                    ]);
                    if ((category === null || category === void 0 ? void 0 : category.length) > 0) {
                        //console.log("______log-__________", category)
                        category[0].image = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_1__/* .S3img */ .y9)(category[0].image, "uploads/sub_category/images/", false);
                        let listings = await db.query("SELECT mb.id,mb.name,mb.company_description,mb.additional_information,mb.logo,mb.contact_person,mb.phone_number,mb.address,mb.landmark,mb.pincode,CONCAT(mb.lat,',',mb.lng) as geo_location,mb.is_faq_show,mb.is_claimed,mb.is_verified,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,(SELECT GROUP_CONCAT(keyword) FROM master_keywords WHERE FIND_IN_SET(id,mb.keywords)) as keywords_name,(SELECT GROUP_CONCAT(name) as name FROM master_type_of_business WHERE FIND_IN_SET(id,mb.type_of_business)) as type_of_businesses,de.year_establishment ,de.whatsapp_no ,de.ivr_number,de.book_now_url,de.business_pdf,de.store_front_image,de.store_back_image FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id WHERE mb.approved_at IS NOT NULL AND mb.is_active='1' AND mb.deleted_at IS NULL AND mb.city_id=? AND FIND_IN_SET(?,mb.subcategory) ORDER BY id ASC LIMIT 1", [
                            cityData[0].id,
                            category[0].id
                        ]);
                        if (listings.length > 0) {
                            console.log("Yes records found 11");
                            res.status(200).json({
                                status: 200,
                                records: {
                                    city_id: cityData[0].id,
                                    category_id: category[0].id,
                                    category_name: category[0].name,
                                    city_name: cityData[0].name,
                                    query: query,
                                    "category_details": category[0]
                                },
                                page: "listing",
                                defaultImage: category[0].image
                            });
                        } else {
                            //console.log('vikram ------state---',cityData[0].id,cityData[0].state_id,category[0].id)
                            let listings = await db.query("SELECT mb.id,mb.name,mb.company_description,mb.additional_information,mb.logo,mb.contact_person,mb.phone_number,mb.address,mb.landmark,mb.pincode,CONCAT(mb.lat,',',mb.lng) as geo_location,mb.is_faq_show,mb.is_claimed,mb.is_verified,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,(SELECT GROUP_CONCAT(keyword) FROM master_keywords WHERE FIND_IN_SET(id,mb.keywords)) as keywords_name,(SELECT GROUP_CONCAT(name) as name FROM master_type_of_business WHERE FIND_IN_SET(id,mb.type_of_business)) as type_of_businesses,de.year_establishment ,de.whatsapp_no ,de.ivr_number,de.book_now_url,de.business_pdf,de.store_front_image,de.store_back_image FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id WHERE mb.approved_at IS NOT NULL AND mb.is_active='1' AND mb.deleted_at IS NULL AND mb.state_id=? AND FIND_IN_SET(?,mb.subcategory) ORDER BY id ASC LIMIT 1", [
                                cityData[0].state_id,
                                category[0].id
                            ]);
                            if (listings.length > 0) {
                                console.log("Yes records found 222");
                                res.status(200).json({
                                    status: 200,
                                    records: {
                                        city_id: cityData[0].id,
                                        state_id: cityData[0].state_id,
                                        category_id: category[0].id,
                                        category_name: category[0].name,
                                        city_name: cityData[0].name,
                                        query: query,
                                        "category_details": category[0]
                                    },
                                    page: "listing",
                                    defaultImage: category[0].image
                                });
                            } else {
                                console.log("when not found ---333");
                                //insert logs
                                db.query("INSERT INTO search_logs SET city_id=?,user_id=?,is_result_found='0',created_at=?,sub_category_id=?", [
                                    cityData[0].id,
                                    userID,
                                    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__/* .getDateTime */ .Fc)(),
                                    category[0].id
                                ]);
                                //listing not found
                                res.status(200).json({
                                    status: 201,
                                    message: "No records",
                                    page: "no_record",
                                    "city_id": cityData[0].id
                                });
                            }
                        }
                    } else {
                        //category not found
                        res.status(200).json({
                            status: 201,
                            message: "No records",
                            page: "no_record",
                            "city_id": cityData[0].id
                        });
                    }
                } else {
                    //city not found
                    res.status(201).json({
                        status: 201,
                        message: "No records",
                        page: "no_record"
                    });
                }
            } else if (searchData.length == 2) {
                if (searchData[0] == "categories") {
                    //console.log("body   ",body)
                    let cityQuery = (body === null || body === void 0 ? void 0 : body.city) || "";
                    let cityData = [];
                    if (cityQuery) {
                        cityData = await db.query("SELECT id,name,description FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND REPLACE(LOWER(name),' ','-') = ?", [
                            cityQuery.toLowerCase()
                        ]);
                    }
                    let defaultCity = await db.query("SELECT id,name,description FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND REPLACE(LOWER(name),' ','-') = ?", [
                        "jaipur"
                    ]) // default city
                    ;
                    let CityRecord = (cityData === null || cityData === void 0 ? void 0 : cityData.length) > 0 ? cityData : defaultCity;
                    //console.log("CITY RECORDS -------------------- ", CityRecord)
                    let category = await db.query("SELECT sub.id,sub.name,sub.description,c.meta_title,c.meta_keywords,c.meta_description,c.name as category_name,sub.slug,sub.icon,c.id as category_id,c.image as category_img FROM master_sub_categories sub LEFT JOIN master_categories c ON c.id = sub.category_id WHERE sub.is_active='1' AND sub.deleted_at IS NULL AND c.is_active='1' AND c.deleted_at IS NULL AND c.slug= ? LIMIT 1", [
                        searchData[1],
                        CityRecord[0].id
                    ]);
                    if ((category === null || category === void 0 ? void 0 : category.length) > 0) {
                        category[0].category_img = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_1__/* .S3img */ .y9)(category[0].category_img, "uploads/category/images/", false);
                        res.status(200).json({
                            status: 200,
                            records: category,
                            page: "category",
                            city_id: CityRecord[0].id,
                            city_name: CityRecord[0].name,
                            defaultImage: category[0].category_img
                        });
                    } else {
                        res.status(201).json({
                            status: 201,
                            message: "No records",
                            page: "no_record"
                        });
                    }
                } else {
                    res.status(201).json({
                        status: 201,
                        message: "No records",
                        page: "no_record"
                    });
                }
            } else if (searchData.length == 1) {
                var ref2;
                let cityData = await db.query("SELECT id,state_id,name,description,meta_description FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND REPLACE(LOWER(name),' ','-') = ? AND id=?", [
                    (ref2 = searchData[0]) === null || ref2 === void 0 ? void 0 : ref2.toLowerCase(),
                    cityID
                ]);
                // console.log("searchData   ======", searchData, query)
                if ((cityData === null || cityData === void 0 ? void 0 : cityData.length) > 0 && query) {
                    let stateID = cityData[0].state_id;
                    //trim the string
                    let searchStr = query.trim();
                    /*let searchArr = [searchStr, cityData[0].id]
                    
                    let subcatCondition = "mb.name LIKE ? OR mb.name LIKE ? "
                    searchArr.push(searchStr + '%', '%' + searchStr + '%')
                    let stringSplitArry = searchStr.split(' ');
                    // find sub categories first 
                    
                    let categorySearchQu = "name LIKE ? OR name LIKE ? OR "
                    let categoryArrSerch = [searchStr + '%', '%' + searchStr + '%']
                    for (var i = 0; i < stringSplitArry.length; i++) {

                        categorySearchQu += (i == 0) ? "(name LIKE ? " : "AND name LIKE ? "
                        categoryArrSerch.push('%' + stringSplitArry[i] + '%')
                    }
                    categorySearchQu += ")";

                    let categoriesDetails = await db.query("SELECT id FROM master_sub_categories WHERE " + categorySearchQu + " and is_active='1' AND deleted_at IS NULL LIMIT 10", categoryArrSerch)
                    let categoryIDstring = categoriesDetails.length > 0 ? categoriesDetails.map((val) => val.id).join(",") : "";


                    if (categoryIDstring) {
                        searchArr.push(categoryIDstring)

                        subcatCondition += " OR mb.subcategory REGEXP CONCAT('(^|,)(', REPLACE(?, ',', '|'), ')(,|$)')";
                    }

                    //find using keywords
                    let keywordSearchQu = "keyword LIKE ? OR keyword LIKE ? OR "
                    let keywordArrSerch = [searchStr + '%', '%' + searchStr + '%']
                    for (var i = 0; i < stringSplitArry.length; i++) {

                        keywordSearchQu += (i == 0) ? "(keyword LIKE ? " : "AND keyword LIKE ? "
                        keywordArrSerch.push('%' + stringSplitArry[i] + '%')
                    }
                    keywordSearchQu += ")";

                    let keywordDetails = await db.query("SELECT id FROM master_keywords WHERE " + keywordSearchQu + " and is_active='1' AND is_approved='1' AND deleted_at IS NULL LIMIT 10", keywordArrSerch)
                    let keywordIDstring = keywordDetails.length > 0 ? keywordDetails.map((val) => val.id).join(",") : "";

                    
                    if (keywordIDstring) {
                        searchArr.push(keywordIDstring)

                        subcatCondition += " OR mb.keywords REGEXP CONCAT('(^|,)(', REPLACE(?, ',', '|'), ')(,|$)')";
                    }
                    
                    //find in description
                    searchArr.push('%'+searchStr.toLowerCase()+'%')

                    subcatCondition += " OR LOWER(mb.company_description) LIKE ? ";
                    
                    */ //console.log("         ----------------           ", searchArr, subcatCondition)
                    /*
                    let listings = await db.query("SELECT mb.id,mb.name,mb.company_description,mb.additional_information,mb.logo,mb.contact_person,mb.phone_number,mb.address,mb.landmark,mb.pincode,CONCAT(mb.lat,',',mb.lng) as geo_location,mb.is_faq_show,mb.is_claimed,mb.is_verified,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,(SELECT GROUP_CONCAT(keyword) FROM master_keywords WHERE FIND_IN_SET(id,mb.keywords)) as keywords_name,(SELECT GROUP_CONCAT(name) as name FROM master_type_of_business WHERE FIND_IN_SET(id,mb.type_of_business)) as type_of_businesses,de.year_establishment ,de.whatsapp_no ,de.ivr_number,de.book_now_url,de.business_pdf,de.store_front_image,de.store_back_image FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_areas ar ON ar.id = mb.area_id WHERE mb.approved_at IS NOT NULL AND mb.is_active='1' AND mb.deleted_at IS NULL AND mb.city_id=? AND (" + subcatCondition + ") ORDER BY id ASC LIMIT 1", searchArr)
                    */ let querySearch = "(MATCH(mb.name) AGAINST (? IN BOOLEAN MODE) OR MATCH(mb.company_description) AGAINST (? IN BOOLEAN MODE) OR MATCH(mb.product_and_services) AGAINST (? IN BOOLEAN MODE) OR (SELECT COUNT(id) FROM master_keywords WHERE FIND_IN_SET(id, mb.keywords) AND MATCH(keyword) AGAINST(? IN BOOLEAN MODE)) > 0 OR (SELECT COUNT(id) FROM master_sub_categories WHERE is_active = '1' AND deleted_at IS NULL AND FIND_IN_SET(id, mb.subcategory) AND MATCH(name) AGAINST(? IN BOOLEAN MODE)) > 0 OR (SELECT COUNT(id) FROM business_mobile_emails WHERE business_id = mb.id AND type = '5' AND MATCH(name) AGAINST(? IN BOOLEAN MODE)) > 0 OR mb.name LIKE ? OR mb.name LIKE ?)";
                    let seachableStr = "*" + searchStr.split(" ").join(" *");
                    //we have to find in all cities of selected city's state
                    let toSt = Date();
                    let listings = await db.query("SELECT mb.id,mb.name,'0' as city_order FROM businesses mb WHERE mb.approved_at IS NOT NULL AND mb.is_active='1' AND mb.deleted_at IS NULL AND mb.city_id=? AND " + querySearch + " LIMIT 1", [
                        cityID,
                        seachableStr,
                        seachableStr,
                        seachableStr,
                        seachableStr,
                        seachableStr,
                        seachableStr,
                        "% " + searchStr + " %",
                        "%" + searchStr.replaceAll(" ", "%") + "%"
                    ]);
                    if (listings.length <= 0) {
                        //find in all cities
                        listings = await db.query("SELECT mb.id,mb.name,'1' as city_order FROM businesses mb WHERE mb.approved_at IS NOT NULL AND mb.is_active='1' AND mb.deleted_at IS NULL AND " + querySearch + " LIMIT 1", [
                            seachableStr,
                            seachableStr,
                            seachableStr,
                            seachableStr,
                            seachableStr,
                            seachableStr,
                            "% " + searchStr + " %",
                            "%" + searchStr.replaceAll(" ", "%") + "%"
                        ]);
                    }
                    let toEnd = Date();
                    console.log(" --------- ------QUERY TIMING ---------- ", toSt, toEnd);
                    await db.end();
                    // console.log("  subcatCondition   ", subcatCondition)
                    if (listings.length > 0) {
                        db.query("INSERT INTO search_logs SET search_query=?,city_id=?,user_id=?,is_result_found='1',created_at=?,found_in_other_cities=?", [
                            searchStr,
                            cityID,
                            userID,
                            (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__/* .getDateTime */ .Fc)(),
                            listings[0].city_order
                        ]);
                        res.status(200).json({
                            status: 200,
                            records: {
                                city_id: cityData[0].id,
                                category_id: "",
                                category_name: "",
                                city_name: cityData[0].name,
                                query: query,
                                "category_details": {
                                    meta_title: query + " in " + cityData[0].name,
                                    meta_description: "Find " + query + " in " + cityData[0].name + " " + cityData[0].meta_description,
                                    meta_keywords: cityData[0].meta_keywords
                                },
                                found_in_city: listings[0].city_order
                            },
                            page: "listing"
                        });
                    } else {
                        //listing not found
                        db.query("INSERT INTO search_logs SET search_query=?,city_id=?,user_id=?,is_result_found='0',created_at=?", [
                            searchStr,
                            cityID,
                            userID,
                            (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__/* .getDateTime */ .Fc)()
                        ]);
                        res.status(201).json({
                            status: 201,
                            message: "No records",
                            page: "no_record",
                            "city_id": cityData[0].id,
                            query: query
                        });
                    }
                } else {
                    res.status(201).json({
                        status: 201,
                        message: "No records",
                        page: "no_record"
                    });
                }
            } else {
                res.status(201).json({
                    status: 201,
                    message: "No records",
                    page: "no_record"
                });
            }
        } else {
            res.status(201).json({
                status: 201,
                message: "No records",
                page: "no_record"
            });
        }
    } catch (err) {
        console.log("___________________searching-data API___________________________", err);
        res.status(201).json({
            status: 201,
            message: "No records",
            page: "no_record"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8365,2212], () => (__webpack_exec__(1598)));
module.exports = __webpack_exports__;

})();