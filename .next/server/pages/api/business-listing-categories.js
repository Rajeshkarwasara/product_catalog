"use strict";
(() => {
var exports = {};
exports.id = 4713;
exports.ids = [4713];
exports.modules = {

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 6936:
/***/ ((module) => {

module.exports = require("@aws-sdk/s3-request-presigner");

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

/***/ 6470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_S3img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9090);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2212);



async function handler(req, res) {
    try {
        if (req.method == "POST") {
            var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12;
            const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
            const body = (req === null || req === void 0 ? void 0 : req.body) ? typeof req.body === "object" ? req.body : JSON.parse(req.body) : "";
            let randno = (body === null || body === void 0 ? void 0 : (ref = body.other) === null || ref === void 0 ? void 0 : ref.randno) || 0;
            //console.log("randno ----------------  ", randno)
            let cityID = (body === null || body === void 0 ? void 0 : (ref1 = body.other) === null || ref1 === void 0 ? void 0 : ref1.city_id) || "";
            let stateID = (body === null || body === void 0 ? void 0 : (ref2 = body.other) === null || ref2 === void 0 ? void 0 : ref2.state_id) || "";
            let subcategoryID = (body === null || body === void 0 ? void 0 : (ref3 = body.other) === null || ref3 === void 0 ? void 0 : ref3.sub_id) || "";
            let query = (body === null || body === void 0 ? void 0 : (ref4 = body.other) === null || ref4 === void 0 ? void 0 : ref4.query) || "";
            let sameCity = (body === null || body === void 0 ? void 0 : (ref5 = body.other) === null || ref5 === void 0 ? void 0 : ref5.sameCity) || 0;
            console.log("Same city -------- ", sameCity);
            const pageNum = body.page || "";
            let sort = (body === null || body === void 0 ? void 0 : (ref6 = body.other) === null || ref6 === void 0 ? void 0 : ref6.sort) || "";
            console.log("Sorting selected ================> ", sort);
            //console.log("____________",body?.other)
            let lat_long = (body === null || body === void 0 ? void 0 : (ref7 = body.other) === null || ref7 === void 0 ? void 0 : ref7.lat_long) ? body === null || body === void 0 ? void 0 : (ref8 = body.other) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.lat_long) === null || ref9 === void 0 ? void 0 : ref9.split(",") : "";
            let lat_long_loc = (body === null || body === void 0 ? void 0 : (ref10 = body.other) === null || ref10 === void 0 ? void 0 : ref10.location_lat) ? body === null || body === void 0 ? void 0 : (ref11 = body.other) === null || ref11 === void 0 ? void 0 : (ref12 = ref11.location_lat) === null || ref12 === void 0 ? void 0 : ref12.split(",") : "";
            let sortCondition = "";
            let distanceColumn = "";
            let sortConditionOrder = "";
            let locationCondition = "";
            let cityCondition = " AND mb.city_id=" + cityID;
            if (stateID && stateID !== "") {
                cityCondition = " AND mb.state_id=" + stateID;
            }
            let openCondition = "";
            let currentTime = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__/* .getDateTime */ .Fc)(2) // only time
            ;
            let currentDay = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__/* .getDateTime */ .Fc)(4); // Only Day Name
            let currentDate = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__/* .getDateTime */ .Fc)(1); // Only Date
            if (sort.indexOf("verified") >= 0) {
                sortCondition = " AND mb.is_verified= '1'";
            }
            let locationColumn = "";
            if (sort.indexOf("location") >= 0) {
                //console.log("inside ----",lat_long_loc,"--")
                if (lat_long) {
                    distanceColumn = ",111.111 * DEGREES(ACOS(LEAST(COS(RADIANS(mb.lat)) * COS(RADIANS(" + lat_long[0] + ")) * COS(RADIANS(" + lat_long[1] + ") - RADIANS(mb.lng)) + SIN(RADIANS(mb.lat)) * SIN(RADIANS(" + lat_long[0] + ")), 1.0))) AS distance_in_km";
                    sortConditionOrder = sortConditionOrder != "" ? sortConditionOrder + ",distance_in_km ASC" : "ORDER BY (CASE WHEN is_paid = '1' THEN 1 ELSE 2 END) ASC,(CASE WHEN package_priority IS NULL THEN 100 ELSE package_priority END) ASC,distance_in_km ASC";
                } else {
                    locationColumn = ",111.111 * DEGREES(ACOS(LEAST(COS(RADIANS(mb.lat)) * COS(RADIANS(" + lat_long_loc[0] + ")) * COS(RADIANS(" + lat_long_loc[1] + ") - RADIANS(mb.lng)) + SIN(RADIANS(mb.lat)) * SIN(RADIANS(" + lat_long_loc[0] + ")), 1.0))) AS distance_location";
                    sortConditionOrder = sortConditionOrder != "" ? sortConditionOrder + ",distance_location ASC" : "ORDER BY (CASE WHEN is_paid = '1' THEN 1 ELSE 2 END) ASC,(CASE WHEN package_priority IS NULL THEN 100 ELSE package_priority END) ASC,distance_location ASC";
                }
            //locationCondition = " AND (111.111 * DEGREES(ACOS(LEAST(COS(RADIANS(mb.lat)) * COS(RADIANS(" + lat_long_loc[0] + ")) * COS(RADIANS(" + lat_long_loc[1] + ") - RADIANS(mb.lng)) + SIN(RADIANS(mb.lat)) * SIN(RADIANS(" + lat_long_loc[0] + ")), 1.0)))) < 5 AND mb.lat IS NOT NULL ";
            //location search withing 5 km radius of the location
            //remove city condition and search for every where
            //cityCondition = "";
            }
            if (sort.indexOf("open") >= 0) {
                openCondition = " AND (SELECT IF(is_open='0',0,IF(is_open ='1',1,IF(('" + currentTime + "' BETWEEN open_at AND close_at) OR ('" + currentTime + "' BETWEEN dual_open_at AND dual_close_at),1,0))) FROM business_timings WHERE business_id = mb.id AND day='" + currentDay + "') = 1 ";
            }
            if (sort.indexOf("rating") >= 0) {
                sortConditionOrder = sortConditionOrder != "" ? sortConditionOrder + ",ratings DESC" : " ORDER BY (CASE WHEN is_paid = '1' THEN 1 ELSE 2 END) ASC,(CASE WHEN package_priority IS NULL THEN 100 ELSE package_priority END) ASC,ratings DESC";
            }
            if (sort.indexOf("distance") >= 0 && sort.indexOf("location") < 0) {
                distanceColumn = ",111.111 * DEGREES(ACOS(LEAST(COS(RADIANS(mb.lat)) * COS(RADIANS(" + lat_long[0] + ")) * COS(RADIANS(" + lat_long[1] + ") - RADIANS(mb.lng)) + SIN(RADIANS(mb.lat)) * SIN(RADIANS(" + lat_long[0] + ")), 1.0))) AS distance_in_km";
                sortConditionOrder = sortConditionOrder != "" ? sortConditionOrder + ",distance_in_km ASC" : " ORDER BY (CASE WHEN is_paid = '1' THEN 1 ELSE 2 END) ASC,(CASE WHEN package_priority IS NULL THEN 100 ELSE package_priority END) ASC,distance_in_km ASC";
            }
            let hasAnyFilter = sortConditionOrder != "" ? true : false;
            sortConditionOrder = sortConditionOrder != "" ? sortConditionOrder + ",mb.name ASC" : " ORDER BY (CASE WHEN is_paid = '1' THEN 1 ELSE 2 END) ASC,(CASE WHEN package_priority IS NULL THEN 100 ELSE package_priority END) ASC, (CASE WHEN is_paid='1' THEN RAND()*-1500000 ELSE ABS(" + randno + " - mb.id) END) ASC";
            //console.log("   ----------- ", sortConditionOrder)
            if ((query || subcategoryID) && cityID) {
                var offset = 10 * (pageNum - 1);
                var limit = 10;
                if (subcategoryID) {
                    let listings = await db.query("SELECT mb.id,mb.name,mb.company_description,mb.additional_information,mb.logo,mb.contact_person,mb.phone_number,IFNULL(de.ivr_number,(SELECT GROUP_CONCAT(IF(type='5',phone,text)) FROM business_mobile_emails WHERE business_id=mb.id AND (type='4' OR (type='5' AND is_verified_phone='1')) LIMIT 1)) as business_phone,mb.address,mb.landmark,mb.pincode,CONCAT(mb.lat,',',mb.lng) as geo_location,mb.is_faq_show,mb.is_claimed,mb.is_verified,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,de.ivr_number,(SELECT GROUP_CONCAT(keyword) FROM master_keywords WHERE FIND_IN_SET(id,mb.keywords)) as keywords_name,(SELECT GROUP_CONCAT(name) as name FROM master_type_of_business WHERE FIND_IN_SET(id,mb.type_of_business)) as type_of_businesses,IF((SELECT COUNT(id) FROM business_packages WHERE business_id =mb.id AND (? BETWEEN begins_on AND ends_on) LIMIT 1) > 0,1,2) as is_paid,(SELECT mpl.priority FROM business_packages bp  LEFT JOIN master_listing_packages mpl ON mpl.id = bp.package_id WHERE bp.business_id =mb.id AND bp.is_current ='1' AND (? BETWEEN bp.begins_on AND bp.ends_on) LIMIT 1) as package_priority,(SELECT mpl.name FROM business_packages bp  LEFT JOIN master_listing_packages mpl ON mpl.id = bp.package_id WHERE bp.business_id =mb.id AND bp.is_current ='1' AND (? BETWEEN bp.begins_on AND bp.ends_on) LIMIT 1) as package_name,de.year_establishment ,de.whatsapp_no ,de.ivr_number,de.book_now_url,de.business_pdf,de.store_front_image,de.store_back_image,(SELECT (SUM(rating)/COUNT(id)) as rating from business_rating_reviews WHERE business_id = mb.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as ratings,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = mb.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as total_reviews,(SELECT IF(is_open=0,'close',IF(is_open =2,CONCAT_WS(',',open_at,close_at,dual_open_at,dual_close_at),'open')) FROM business_timings WHERE business_id = mb.id AND day=?) as timings,ct.name as city_name,ar.name as area_name " + distanceColumn + locationColumn + " FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas ar ON ar.id = mb.area_id WHERE mb.approved_at IS NOT NULL AND mb.is_active='1' AND mb.deleted_at IS NULL " + cityCondition + " AND FIND_IN_SET(?,mb.subcategory) " + openCondition + sortCondition + locationCondition + sortConditionOrder + " LIMIT ?,?", [
                        currentDate,
                        currentDate,
                        currentDate,
                        currentDay,
                        subcategoryID,
                        offset,
                        limit
                    ]);
                    if (listings.length > 0) {
                        for(var x = 0; x < listings.length; x++){
                            let cityName = listings[x].city_name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                                return letter.toUpperCase();
                            });
                            cityName = cityName.replaceAll(" ", "-");
                            let areaname = listings[x].area_name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                                return letter.toUpperCase();
                            });
                            areaname = areaname.replaceAll(" ", "-");
                            let business = listings[x].name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                                return letter.toUpperCase();
                            });
                            business = business.replaceAll(" ", "-");
                            let url = process.env.BASE_URL + "/" + cityName + "/" + areaname + "/" + business + "-contact-details/" + listings[x].id;
                            listings[x].url = url;
                            listings[x].logo = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(listings[x].logo, "uploads/company/logo/", false, listings[x].name);
                        }
                        res.status(200).json({
                            status: 200,
                            data: listings
                        });
                    } else {
                        res.status(201).json({
                            status: 201,
                            message: "No records"
                        });
                    }
                } else {
                    //trim the string
                    let searchStr = query.trim();
                    let searchArr = [
                        currentDate,
                        currentDate
                    ];
                    /*
                        let stringSplitArry = searchStr.split(' ');
    
                        let searchArr = [currentDate, currentDate, currentDay, cityID]
                        let subcatCondition = "mb.name LIKE ? OR mb.name LIKE ? "
                        searchArr.push(searchStr + '%', '%' + searchStr + '%')
    
                        let caseOrderBy = " WHEN is_paid = '1' THEN 1 ";
                        let caseOrderByNum = 2;
                        let caseOrderArrVal = []
                        //add orderby
                        if (!hasAnyFilter) {
                            //exact name match have priority
                            caseOrderBy += " WHEN mb.name LIKE ? THEN " + caseOrderByNum;
                            caseOrderArrVal.push(searchStr)
                            caseOrderByNum++;
                        }

                        // find sub categories first 
                        
                        let categorySearchQu = "name LIKE ? OR name LIKE ? OR "
                        let categoryArrSerch = [searchStr + '%', '%' + searchStr + '%']
                        for (var i = 0; i < stringSplitArry.length; i++) {
    
                            categorySearchQu += (i == 0) ? "(name LIKE ? " : "AND name LIKE ? "
                            categoryArrSerch.push('%' + stringSplitArry[i] + '%')
                        }
                        categorySearchQu += ")";
    
                        let categoriesDetails = await db.query("SELECT id FROM master_sub_categories WHERE " + categorySearchQu + " and is_active='1' AND deleted_at IS NULL LIMIT 20", categoryArrSerch)
                        let categoryIDstring = categoriesDetails.length > 0 ? categoriesDetails.map((val) => val.id).join(",") : "";
    
                        
                        if (categoryIDstring) {
                            searchArr.push(categoryIDstring)
    
                            subcatCondition += " OR mb.subcategory REGEXP CONCAT('(^|,)(', REPLACE(?, ',', '|'), ')(,|$)')";
    
                            //add orderby
                            if (!hasAnyFilter) {
                                //exact category match have priority
                                caseOrderBy += " WHEN mb.subcategory REGEXP CONCAT('(^|,)(', REPLACE(?, ',', '|'), ')(,|$)') THEN " + caseOrderByNum;
                                caseOrderArrVal.push(categoryIDstring)
                                caseOrderByNum++;
                            }
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
    
                            //add orderby
                            if (!hasAnyFilter) {
                                //exact category match have priority
                                caseOrderBy += " WHEN mb.keywords REGEXP CONCAT('(^|,)(', REPLACE(?, ',', '|'), ')(,|$)') THEN " + caseOrderByNum;
                                caseOrderArrVal.push(keywordIDstring)
                                caseOrderByNum++;
                            }
                        }
    
                        //find in description
                        searchArr.push('%' + searchStr.toLowerCase() + '%')
    
                        subcatCondition += " OR LOWER(mb.company_description) LIKE ? ";
    
                        //add orderby
                        if (!hasAnyFilter) {
                            //in description match have priority
                            caseOrderBy += " WHEN LOWER(mb.company_description) LIKE ? THEN " + caseOrderByNum;
                            caseOrderArrVal.push(keywordIDstring)
                            caseOrderByNum++;
                        }
                        //add order by name match anywhere
                        if (!hasAnyFilter) {
                            //in description match have priority
                            caseOrderBy += " WHEN mb.name LIKE ? THEN " + caseOrderByNum;
                            caseOrderArrVal.push('%' + searchStr + '%')
                            caseOrderByNum++;
                        }
                        caseOrderBy += " ELSE " + caseOrderByNum
    
                       // console.log("   caseOrderBy ---------- ", caseOrderBy)
                        sortConditionOrder = hasAnyFilter ? sortConditionOrder : "ORDER BY (CASE " + caseOrderBy +" END) ASC,(CASE WHEN package_priority IS NULL THEN 100 ELSE package_priority END) ASC, (CASE WHEN is_paid='1' THEN RAND()*-1500000 ELSE ABS(" + randno + " - mb.id) END) ASC"
    
                        searchArr = [...searchArr, ...caseOrderArrVal]
                        */ /*
                        let listings = await db.query("SELECT mb.id,mb.name,mb.company_description,mb.additional_information,mb.logo,mb.contact_person,mb.phone_number,IFNULL(de.ivr_number,(SELECT GROUP_CONCAT(IF(type='5',phone,text)) FROM business_mobile_emails WHERE business_id=mb.id AND (type='4' OR (type='5' AND is_verified_phone='1')) LIMIT 1)) as business_phone,mb.address,mb.landmark,mb.pincode,CONCAT(mb.lat,',',mb.lng) as geo_location,mb.is_faq_show,mb.is_claimed,mb.is_verified,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,de.ivr_number,(SELECT GROUP_CONCAT(keyword) FROM master_keywords WHERE FIND_IN_SET(id,mb.keywords)) as keywords_name,(SELECT GROUP_CONCAT(name) as name FROM master_type_of_business WHERE FIND_IN_SET(id,mb.type_of_business)) as type_of_businesses,IF((SELECT COUNT(id) FROM business_packages WHERE business_id =mb.id AND (? BETWEEN begins_on AND ends_on)) > 0,1,2) as is_paid,(SELECT mpl.priority FROM business_packages bp  LEFT JOIN master_listing_packages mpl ON mpl.id = bp.package_id WHERE bp.business_id =mb.id AND bp.is_current ='1' AND (? BETWEEN bp.begins_on AND bp.ends_on)) as package_priority,de.year_establishment ,de.whatsapp_no ,de.ivr_number,de.book_now_url,de.business_pdf,de.store_front_image,de.store_back_image,(SELECT (SUM(rating)/COUNT(id)) as rating from business_rating_reviews WHERE business_id = mb.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as ratings,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = mb.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as total_reviews,(SELECT IF(is_open=0,'close',IF(is_open =2,CONCAT_WS(',',open_at,close_at,dual_open_at,dual_close_at),'open')) FROM business_timings WHERE business_id = mb.id AND day=?) as timings,ct.name as city_name,ar.name as area_name " + distanceColumn + locationColumn + " FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas ar ON ar.id = mb.area_id WHERE mb.approved_at IS NOT NULL AND mb.is_active='1' AND mb.deleted_at IS NULL AND mb.city_id=? AND (" + subcatCondition + " ) " + sortCondition + sortConditionOrder + " LIMIT ?,?", searchArr)
                        */ //let relevanceScore = ",(((MATCH(mb.name) AGAINST(? IN NATURAL LANGUAGE MODE) * 3) + (MATCH(mb.product_and_services) AGAINST (? IN NATURAL LANGUAGE MODE) * 2) + (MATCH(mb.company_description) AGAINST(? IN NATURAL LANGUAGE MODE) * 1) + (SELECT COUNT(id) FROM master_keywords WHERE FIND_IN_SET(id, mb.keywords) AND keyword = ?) * 3 + (SELECT COUNT(id) FROM master_sub_categories WHERE is_active = '1' AND deleted_at IS NULL and FIND_IN_SET(id, mb.subcategory) AND name = ?) * 3 + (SELECT COUNT(id) FROM business_mobile_emails WHERE business_id = mb.id AND type = '5' AND name = ?) * 3) / ( IF( mb.name = ?, 5, IF( (SELECT COUNT(id) FROM master_sub_categories WHERE is_active = '1' AND deleted_at IS NULL and FIND_IN_SET(id, mb.subcategory) AND name = ?) > 0, 4, IF( (SELECT COUNT(id) FROM master_keywords WHERE FIND_IN_SET(id, mb.keywords) AND keyword = ?) > 0, 3, IF( (SELECT COUNT(id) FROM business_mobile_emails WHERE business_id = mb.id AND type = '5' AND name = ?) > 0, 2, 1)))))) as relevance_score";
                    //searchArr.push(searchStr, searchStr, searchStr, searchStr, searchStr, searchStr, searchStr, searchStr, searchStr, searchStr)
                    // find sub categories first 
                    let stringSplitArry = searchStr.split(" ");
                    let seachableStr = "+" + searchStr.split(" ").join(" +");
                    let seachableStrEach = "*" + searchStr.split(" ").join(" *");
                    //categories find first alos exact match check for priority
                    let categorySearchQu = "name LIKE ? OR name LIKE ? OR ";
                    let categoryArrSerch = [
                        searchStr,
                        searchStr.replaceAll(" ", ""),
                        seachableStrEach,
                        searchStr + "%",
                        "%" + searchStr + "%"
                    ];
                    for(var i = 0; i < stringSplitArry.length; i++){
                        categorySearchQu += i == 0 ? "(name LIKE ? " : "AND name LIKE ? ";
                        categoryArrSerch.push("%" + stringSplitArry[i] + "%");
                    }
                    categorySearchQu += ")";
                    categoryArrSerch.push(seachableStrEach, searchStr + "%", "%" + searchStr + "%");
                    let categoriesDetails = await db.query("SELECT id,IF(name LIKE ? OR name LIKE ?,1,2) as exactMatch,MATCH(name) AGAINST(? IN BOOLEAN MODE) AS relevance_score FROM master_sub_categories WHERE (" + categorySearchQu + " OR MATCH(name) AGAINST(? IN BOOLEAN MODE)) and is_active='1' AND deleted_at IS NULL ORDER BY CASE WHEN name LIKE ? THEN 1 WHEN name LIKE ? THEN 2 ELSE 3 END, relevance_score DESC LIMIT 2", categoryArrSerch);
                    let categoryIDstring = categoriesDetails.length > 0 ? categoriesDetails.map((val)=>val.id
                    ).join(",") : "";
                    let exactMatchCategory = categoriesDetails.length > 0 ? categoriesDetails.map((val)=>val.exactMatch == "1" ? val.id : ""
                    ).join(",") : "";
                    exactMatchCategory = exactMatchCategory.replace(/(^,)|(,$)/g, "");
                    let priorityColumns = "";
                    let priorityColumnsOrder = "";
                    let priorityColumnsNum = 1;
                    let priorityColumnsOrderNum = 1;
                    if (!hasAnyFilter && exactMatchCategory) {
                        priorityColumns = " WHEN mb.subcategory REGEXP CONCAT('(^|,)(', REPLACE('" + exactMatchCategory + "', ',', '|'), ')(,|$)') THEN " + priorityColumnsNum;
                        priorityColumnsOrder = " WHEN mb.subcategory REGEXP CONCAT('(^|,)(', REPLACE('" + exactMatchCategory + "', ',', '|'), ')(,|$)') AND is_paid='1' THEN " + priorityColumnsOrderNum + " WHEN mb.subcategory REGEXP CONCAT('(^|,)(', REPLACE('" + exactMatchCategory + "', ',', '|'), ')(,|$)') THEN " + (priorityColumnsOrderNum + 1);
                        priorityColumnsOrderNum = priorityColumnsOrderNum + 2;
                    }
                    priorityColumnsNum++; // increase value for next column
                    let categorySeachCondi = "";
                    let categoryFilter = "";
                    if (categoryIDstring) {
                        //searchArr.push(categoryIDstring)
                        console.log("   categoryIDstring   ", categoryIDstring);
                        categorySeachCondi = " OR mb.subcategory REGEXP CONCAT('(^|,)(', REPLACE('" + categoryIDstring + "', ',', '|'), ')(,|$)')";
                        //add orderby
                        if (!hasAnyFilter) {
                            //exact category match have priority
                            categoryFilter = " (CASE WHEN mb.subcategory REGEXP CONCAT('(^|,)(', REPLACE('" + categoryIDstring + "', ',', '|'), ')(,|$)') THEN 1 ELSE 2 END) ASC,";
                        //caseOrderArrVal.push(categoryIDstring)
                        // caseOrderByNum++;
                        }
                    }
                    //Start Keyword find first also exact match check for priority
                    let keywordSearchQu = "keyword LIKE ? OR keyword LIKE ? OR ";
                    let keywordArrSerch = [
                        searchStr,
                        searchStr.replaceAll(" ", ""),
                        seachableStrEach,
                        searchStr + "%",
                        "%" + searchStr + "%"
                    ];
                    for(var i = 0; i < stringSplitArry.length; i++){
                        keywordSearchQu += i == 0 ? "(keyword LIKE ? " : "AND keyword LIKE ? ";
                        keywordArrSerch.push("%" + stringSplitArry[i] + "%");
                    }
                    keywordSearchQu += ")";
                    keywordArrSerch.push(seachableStrEach, searchStr + "%", "%" + searchStr + "%");
                    let keywordDetails = await db.query("SELECT id,IF(keyword LIKE ? OR keyword LIKE ?,1,2) as exactMatch,MATCH(keyword) AGAINST(? IN BOOLEAN MODE) AS relevance_score FROM master_keywords WHERE (" + keywordSearchQu + " OR MATCH(keyword) AGAINST(? IN BOOLEAN MODE)) and is_active='1' AND deleted_at IS NULL AND is_approved ='1' ORDER BY CASE WHEN keyword LIKE ? THEN 1 WHEN keyword LIKE ? THEN 2 ELSE 3 END, relevance_score DESC LIMIT 2", keywordArrSerch);
                    let keywordIDstring = keywordDetails.length > 0 ? keywordDetails.map((val)=>val.id
                    ).join(",") : "";
                    let exactMatchKeyword = keywordDetails.length > 0 ? keywordDetails.map((val)=>val.exactMatch == "1" ? val.id : ""
                    ).join(",") : "";
                    exactMatchKeyword = exactMatchKeyword.replace(/(^,)|(,$)/g, "");
                    if (!hasAnyFilter && exactMatchKeyword) {
                        priorityColumns += " WHEN mb.keywords REGEXP CONCAT('(^|,)(', REPLACE('" + exactMatchKeyword + "', ',', '|'), ')(,|$)') THEN " + priorityColumnsNum;
                        priorityColumnsOrder += " WHEN mb.keywords REGEXP CONCAT('(^|,)(', REPLACE('" + exactMatchKeyword + "', ',', '|'), ')(,|$)') AND is_paid= '1' THEN " + priorityColumnsOrderNum + " WHEN mb.keywords REGEXP CONCAT('(^|,)(', REPLACE('" + exactMatchKeyword + "', ',', '|'), ')(,|$)') THEN " + (priorityColumnsOrderNum + 1);
                        priorityColumnsOrderNum = priorityColumnsOrderNum + 2;
                    }
                    priorityColumnsNum++; // increase value for next column
                    let keywordSeachCondi = "";
                    let keywordFilter = "";
                    if (keywordIDstring) {
                        //searchArr.push(categoryIDstring)
                        console.log("   keywordIDstring   ", keywordIDstring);
                        keywordSeachCondi += " OR mb.keywords REGEXP CONCAT('(^|,)(', REPLACE('" + keywordIDstring + "', ',', '|'), ')(,|$)')";
                        //add orderby
                        if (!hasAnyFilter) {
                            //exact category match have priority
                            keywordFilter += " (CASE WHEN mb.keywords REGEXP CONCAT('(^|,)(', REPLACE('" + keywordIDstring + "', ',', '|'), ')(,|$)') THEN 1 ELSE 2 END) ASC,";
                        //caseOrderArrVal.push(categoryIDstring)
                        // caseOrderByNum++;
                        }
                    }
                    //End Keywords Search
                    //priority filter for exact name check or start with
                    priorityColumns += " WHEN mb.name LIKE '" + searchStr + "%' THEN " + priorityColumnsNum + "  WHEN mb.name LIKE '" + searchStr.replaceAll(" ", "") + "%' THEN " + priorityColumnsNum + " ELSE " + (priorityColumnsNum + 1);
                    priorityColumnsOrder += " WHEN (mb.name LIKE '" + searchStr + "%' OR mb.name LIKE '" + searchStr.replaceAll(" ", "") + "%') AND is_paid='1' THEN " + priorityColumnsOrderNum + " WHEN (mb.name LIKE '" + searchStr + "%' OR mb.name LIKE '" + searchStr.replaceAll(" ", "") + "%')  THEN " + (priorityColumnsOrderNum + 1) + " ELSE " + (priorityColumnsOrderNum + 2);
                    let relevanceScore = ",COALESCE((MATCH(mb.name) AGAINST (? IN BOOLEAN MODE)),0) as name_score,COALESCE((MATCH(mb.company_description) AGAINST (? IN BOOLEAN MODE)),0) as description_score,COALESCE((MATCH(mb.product_and_services) AGAINST (? IN BOOLEAN MODE)),0) as service_score,COALESCE((SELECT MATCH(name) AGAINST(? IN BOOLEAN MODE) as re FROM master_sub_categories WHERE is_active = '1' AND deleted_at IS NULL AND FIND_IN_SET(id, mb.subcategory) AND MATCH(name) AGAINST(? IN BOOLEAN MODE) ORDER BY re DESC LIMIT 1),0) as category_score,COALESCE((SELECT MATCH(name) AGAINST(? IN BOOLEAN MODE) as re FROM business_mobile_emails WHERE business_id = mb.id AND type = '5' AND MATCH(name) AGAINST(? IN BOOLEAN MODE) ORDER BY re DESC LIMIT 1),0) as contact_score,COALESCE((SELECT MATCH(keyword) AGAINST(? IN BOOLEAN MODE) as re FROM master_keywords WHERE FIND_IN_SET(id, mb.keywords) AND MATCH(keyword) AGAINST(? IN BOOLEAN MODE) ORDER BY re desc LIMIT 1),0) as keyword_score";
                    searchArr.push(seachableStr, seachableStrEach, seachableStrEach, seachableStrEach, seachableStrEach, seachableStr, seachableStr, seachableStr, seachableStr);
                    //EXISTS(SELECT 1 FROM master_sub_categories WHERE is_active = '1' AND deleted_at IS NULL AND FIND_IN_SET(id, mb.subcategory) AND MATCH(name) AGAINST(? IN BOOLEAN MODE)) OR
                    //OR EXISTS(SELECT 1 FROM master_keywords WHERE FIND_IN_SET(id, mb.keywords) AND MATCH(keyword) AGAINST(? IN BOOLEAN MODE))
                    let querySearchCondition = " AND (MATCH(mb.name) AGAINST (? IN BOOLEAN MODE) OR MATCH(mb.company_description) AGAINST(? IN BOOLEAN MODE) OR MATCH(mb.product_and_services) AGAINST(? IN BOOLEAN MODE) OR  EXISTS(SELECT 1 FROM business_mobile_emails WHERE business_id = mb.id AND type = '5' AND MATCH(name) AGAINST(? IN BOOLEAN MODE)) OR mb.name LIKE ? OR mb.name LIKE ? " + categorySeachCondi + keywordSeachCondi + ") ";
                    //cityID,   AND mb.city_id=?
                    searchArr.push(seachableStrEach, seachableStrEach, seachableStrEach, seachableStr, "% " + searchStr + " %", "%" + searchStr.replaceAll(" ", "%") + "%", offset, limit);
                    //check city condition, if records not found in same city then find in all cities
                    cityCondition = sameCity == "1" ? "" : cityCondition;
                    sortConditionOrder = hasAnyFilter ? sortConditionOrder : "ORDER BY (CASE " + priorityColumnsOrder + " END) ASC," + categoryFilter + keywordFilter + " (CASE WHEN mb.name LIKE '" + searchStr + "%' THEN 1 ELSE 2 END) ASC,(CASE WHEN is_paid = '1' THEN 1 ELSE 2 END) ASC,(CASE WHEN package_priority IS NULL THEN 100 ELSE package_priority END) ASC,GREATEST(name_score,category_score,keyword_score,contact_score) DESC,GREATEST(description_score,service_score) DESC, (CASE WHEN is_paid='1' THEN RAND()*-1500000 ELSE ABS(" + randno + " - mb.id) END) ASC";
                    //sortConditionOrder = hasAnyFilter ? sortConditionOrder : "ORDER BY mb.id DESC";
                    //console.log("Query started=======================")
                    let dateAct = new Date();
                    let listings = await db.query("SELECT mb.id,mb.name,mb.logo,mb.address,mb.landmark,mb.pincode,CONCAT(mb.lat,',',mb.lng) as geo_location,mb.is_faq_show,mb.is_claimed,mb.is_verified,IF((SELECT COUNT(id) FROM business_packages WHERE business_id =mb.id AND (? BETWEEN begins_on AND ends_on) LIMIT 1) > 0,1,2) as is_paid,(SELECT mpl.priority FROM business_packages bp  LEFT JOIN master_listing_packages mpl ON mpl.id = bp.package_id WHERE bp.business_id =mb.id AND bp.is_current ='1' AND (? BETWEEN bp.begins_on AND bp.ends_on) LIMIT 1) as package_priority,de.book_now_url,ct.name as city_name,ar.name as area_name,(SELECT (SUM(rating)/COUNT(id)) as rating from business_rating_reviews WHERE business_id = mb.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as ratings " + distanceColumn + locationColumn + relevanceScore + ",(CASE " + priorityColumns + " END) as priorityColumns FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas ar ON ar.id = mb.area_id WHERE mb.approved_at IS NOT NULL AND mb.is_active='1' AND mb.deleted_at IS NULL " + cityCondition + openCondition + sortCondition + locationCondition + querySearchCondition + sortConditionOrder + " LIMIT ?,?", searchArr);
                    await db.end();
                    let dateEnd = new Date();
                    console.log("   listings result time taken---------   ", dateAct, dateEnd);
                    //console.log("   searchArr   ", searchArr)
                    //console.log(listings)
                    if (listings.length > 0) {
                        for(var x = 0; x < listings.length; x++){
                            //listing showing reason
                            let showReason = hasAnyFilter ? 0 : listings[x].priorityColumns;
                            // 1 => Eact category match
                            // 2 => eact match keyword
                            //  3 => Name start with search query
                            // 4 => Similar matching category
                            // 5=> Relevance score 
                            // 6 => keyword found anyanwhere in Name 
                            if (listings[x].priorityColumns == "4") {
                                if (listings[x].category_score > 0) {
                                    showReason = 4;
                                } else if (listings[x].keyword_score > 0 && listings[x].keyword_score >= listings[x].name_score && listings[x].keyword_score >= listings[x].contact_score) {
                                    showReason = 5; // similar keywords found
                                } else if (listings[x].name_score > 0 && listings[x].name_score >= listings[x].contact_score && listings[x].name_score >= listings[x].keyword_score) {
                                    showReason = 6; // name find relevance score
                                } else if (listings[x].contact_score > 0 && listings[x].contact_score >= listings[x].name_score && listings[x].contact_score >= listings[x].keyword_score) {
                                    showReason = 7; // contact find relevance score
                                } else if (listings[x].description_score > 0 || listings[x].service_score > 0) {
                                    showReason = 8; // find description or seavices relevance score
                                } else {
                                    showReason = 9; // relevance score
                                }
                            }
                            let otherDetails = await db.query("SELECT IFNULL(de.ivr_number,(SELECT GROUP_CONCAT(IF(type='5',phone,text)) FROM business_mobile_emails WHERE business_id=mb.id AND (type='4' OR (type='5' AND is_verified_phone='1')) LIMIT 1)) as business_phone,(SELECT mpl.name FROM business_packages bp  LEFT JOIN master_listing_packages mpl ON mpl.id = bp.package_id WHERE bp.business_id =mb.id AND bp.is_current ='1' AND (? BETWEEN bp.begins_on AND bp.ends_on) LIMIT 1) as package_name,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = mb.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as total_reviews,(SELECT IF(is_open=0,'close',IF(is_open =2,CONCAT_WS(',',open_at,close_at,dual_open_at,dual_close_at),'open')) FROM business_timings WHERE business_id = mb.id AND day=?) as timings FROM businesses mb LEFT JOIN business_details de ON de.business_id=mb.id WHERE mb.id=?", [
                                currentDate,
                                currentDay,
                                listings[x].id
                            ]);
                            listings[x] = {
                                ...listings[x],
                                ...otherDetails[0]
                            };
                            ///console.log("$otherDetails   ", otherDetails, listings[x])
                            let cityName = listings[x].city_name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                                return letter.toUpperCase();
                            });
                            cityName = cityName.replaceAll(" ", "-");
                            let areaname = listings[x].area_name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                                return letter.toUpperCase();
                            });
                            areaname = areaname.replaceAll(" ", "-");
                            let business = listings[x].name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                                return letter.toUpperCase();
                            });
                            business = business.replaceAll(" ", "-");
                            let url = process.env.BASE_URL + "/" + cityName + "/" + areaname + "/" + business + "-contact-details/" + listings[x].id;
                            listings[x].url = url;
                            listings[x].logo = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(listings[x].logo, "uploads/company/logo/", false, listings[x].name);
                            listings[x].show_reason = showReason;
                        }
                        //console.log("   listings   ", listings)
                        res.status(200).json({
                            status: 200,
                            data: listings
                        });
                    } else {
                        res.status(201).json({
                            status: 201,
                            message: "No records"
                        });
                    }
                }
            } else {
                res.status(201).json({
                    status: 201,
                    msg: "No records"
                });
            }
        } else {
            res.status(201).json({
                status: 201,
                msg: "No records"
            });
        }
    } catch (err) {
        console.log("___________________business-listing-catefgories______________________", err);
        res.status(201).json({
            status: 201,
            msg: "No records"
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
var __webpack_exports__ = __webpack_require__.X(0, [8365,2212], () => (__webpack_exec__(6470)));
module.exports = __webpack_exports__;

})();