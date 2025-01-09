"use strict";
(() => {
var exports = {};
exports.id = 9060;
exports.ids = [9060];
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

/***/ 8264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_S3img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2212);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9090);



async function handler(req, res) {
    try {
        const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        if (req.method == "POST") {
            const body = (req === null || req === void 0 ? void 0 : req.body) ? typeof req.body === "object" ? req.body : JSON.parse(req.body) : "";
            let businessID = (body === null || body === void 0 ? void 0 : body.business_id) || "";
            let areaID = (body === null || body === void 0 ? void 0 : body.area_id) || "";
            let subcategory = (body === null || body === void 0 ? void 0 : body.subcategory) || "";
            let currentDate = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__/* .getDateTime */ .Fc)(1);
            if (areaID && businessID && subcategory) {
                subcategory = "(^|,)(" + subcategory.replaceAll(",", "|") + ")(,|$)";
                //console.log("subcategory-----------------------", subcategory)
                //similar listings
                let details = await db.query("SELECT b.id,b.name,b.logo,b.city_id,b.area_id,b.address,de.store_front_image,b.landmark,b.pincode,CONCAT(b.lat,',',b.lng) as geo_location,b.is_claimed,b.is_verified,(SELECT (SUM(rating)/COUNT(id)) as rating from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as ratings,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as total_reviews,'' as keywords_name,(SELECT GROUP_CONCAT(name) as name FROM master_type_of_business WHERE FIND_IN_SET(id,b.type_of_business)) as type_of_businesses,(SELECT GROUP_CONCAT(text) as number FROM business_mobile_emails WHERE business_id = b.id AND type='1' AND is_verified='1') as phone_numbers,IFNULL(de.ivr_number,(SELECT GROUP_CONCAT(IF(type='5',phone,text)) FROM business_mobile_emails WHERE business_id=b.id AND (type='4' OR (type='5' AND is_verified_phone='1')) LIMIT 1)) as business_phone,IF((SELECT COUNT(id) FROM business_packages WHERE (? BETWEEN begins_on AND ends_on) LIMIT 1) > 0,1,2) as is_paid,ct.name as city_name,ar.name as area_name,de.ivr_number FROM businesses b LEFT JOIN business_details de ON de.business_id = b.id LEFT JOIN master_areas ar ON ar.id = b.area_id LEFT JOIN master_cities ct ON ct.id = b.city_id  WHERE b.is_active ='1' AND b.approved_at IS NOT NULL AND b.deleted_at IS NULL AND b.id != ? AND b.subcategory REGEXP ? ORDER BY is_paid ASC,b.prefrence ASC LIMIT 40", [
                    currentDate,
                    businessID,
                    subcategory
                ]);
                if (details.length > 0) {
                    for(var i = 0; i < details.length; i++){
                        details[i].logo = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(details[i].logo, "uploads/company/logo/", false, details[i].name);
                        details[i].store_front_image = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(details[i].store_front_image, "uploads/company/image/", false);
                        details[i].url = createBusinessURL(details, i);
                    }
                }
                let detailsArea = await db.query("SELECT b.id,b.name,b.logo,b.city_id,b.area_id,b.address,de.store_front_image,b.landmark,b.pincode,CONCAT(b.lat,',',b.lng) as geo_location,b.is_claimed,b.is_verified,(SELECT (SUM(rating)/COUNT(id)) as rating from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as ratings,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as total_reviews,'' as keywords_name,(SELECT GROUP_CONCAT(name) as name FROM master_type_of_business WHERE FIND_IN_SET(id,b.type_of_business)) as type_of_businesses,(SELECT GROUP_CONCAT(text) as number FROM business_mobile_emails WHERE business_id = b.id AND type='1' AND is_verified='1') as phone_numbers,IFNULL(de.ivr_number,(SELECT GROUP_CONCAT(IF(type='5',phone,text)) FROM business_mobile_emails WHERE business_id=b.id AND (type='4' OR (type='5' AND is_verified_phone='1')) LIMIT 1)) as business_phone,IF((SELECT id FROM business_packages WHERE business_id =b.id AND (? BETWEEN begins_on AND ends_on) LIMIT 1) > 0,1,2) as is_paid,ct.name as city_name,ar.name as area_name,de.ivr_number FROM businesses b LEFT JOIN business_details de ON de.business_id = b.id LEFT JOIN master_areas ar ON ar.id = b.area_id LEFT JOIN master_cities ct ON ct.id = b.city_id  WHERE b.is_active ='1' AND b.approved_at IS NOT NULL AND b.deleted_at IS NULL AND b.id != ? AND b.area_id=? ORDER BY is_paid ASC,b.prefrence ASC LIMIT 40", [
                    currentDate,
                    businessID,
                    areaID
                ]);
                if (detailsArea.length > 0) {
                    for(var i = 0; i < detailsArea.length; i++){
                        detailsArea[i].logo = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(detailsArea[i].logo, "uploads/company/logo/", false, detailsArea[i].name);
                        detailsArea[i].store_front_image = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(detailsArea[i].store_front_image, "uploads/company/image/", false);
                        detailsArea[i].url = createBusinessURL(detailsArea, i);
                    }
                }
                //console.log("Total Count ----------------", details.length)
                res.status(200).json({
                    similar: details,
                    areaList: detailsArea,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else {
            res.status(200).json({
                msg: "Invalid Request.",
                status: 201
            });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({
            msg: "No records found.",
            status: 201
        });
    }
};
function createBusinessURL(listings, x) {
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
    return url;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8365,2212], () => (__webpack_exec__(8264)));
module.exports = __webpack_exports__;

})();