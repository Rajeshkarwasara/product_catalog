"use strict";
(() => {
var exports = {};
exports.id = 1147;
exports.ids = [1147];
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

/***/ 1200:
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
        const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        if (req.method == "POST") {
            var ref;
            req.body = JSON.parse(req.body);
            const city_id = req === null || req === void 0 ? void 0 : (ref = req.body) === null || ref === void 0 ? void 0 : ref.city_id;
            var featureListings = await db.query("SELECT b.id,b.logo,b.name,CONCAT(b.address,',',ma.name,',',mc.name,'-',b.pincode) as full_address,mc.name as city_name,ma.name as area_name,IFNULL(bd.ivr_number,(SELECT GROUP_CONCAT(IF(type='5',phone,text)) FROM business_mobile_emails WHERE business_id=b.id AND (type='4' OR (type='5' AND is_verified_phone='1')) LIMIT 1)) as mobile_number,bd.store_front_image,b.is_verified,(SELECT (SUM(rating)/COUNT(id)) as rating from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as ratings,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as total_reviews FROM businesses as b LEFT JOIN business_details as bd ON b.id=bd.business_id LEFT JOIN business_mobile_emails bme ON b.id=bme.business_id LEFT JOIN master_areas as ma ON b.area_id=ma.id LEFT JOIN master_cities as mc ON b.city_id = mc.id WHERE b.city_id=" + city_id + " AND (b.approved_at IS NOT NULL OR TRIM(b.approved_at) !='') AND b.is_featured='1' AND b.is_active= '1' AND b.deleted_at IS NULL GROUP by b.id ORDER BY b.featured_sort ASC LIMIT 40");
            await db.end();
            if ((featureListings === null || featureListings === void 0 ? void 0 : featureListings.length) > 0) {
                for(var i = 0; i < featureListings.length; i++){
                    // let img = await S3img(featureListings[i].store_front_image, 'uploads/company/image/');
                    // featureListings[i].store_front_image = img;
                    if (featureListings[i].hasOwnProperty("logo")) {
                        featureListings[i].logo = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(featureListings[i].logo, "uploads/company/logo/", false, featureListings[i].name);
                    }
                    //featureListings[i].url = createBusinessURL(featureListings, i)
                    featureListings[i].url = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__/* .createBusinessURL */ .Eo)(featureListings[i].id, featureListings[i].name, featureListings[i].city_name, featureListings[i].area_name);
                }
                res.status(200).json({
                    data: featureListings,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No Record.",
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
            msg: "Invalid Request.",
            status: 201
        });
    }
}; // function createBusinessURL(listings, x) {
 //     //console.log(listings,"listings...........",x)
 //     let cityName = listings[x].city_name.toLowerCase().replace(/\b[a-z]/g, function (letter) {
 //         return letter.toUpperCase();
 //     });
 //    // console.log(cityName,"cityName....")
 //     cityName = cityName.replaceAll(" ", "-")
 //     let areaname = listings[x].area_name.toLowerCase().replace(/\b[a-z]/g, function (letter) {
 //         return letter.toUpperCase();
 //     });
 //     areaname = areaname.replaceAll(" ", "-")
 //     let business = listings[x].name.toLowerCase().replace(/\b[a-z]/g, function (letter) {
 //         return letter.toUpperCase();
 //     });
 //     business = business.replaceAll(" ", "-")
 //     let url = process.env.BASE_URL + '/' + cityName + '/' + areaname + '/' + business + '-contact-details/' + listings[x].id
 //     return url
 // }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8365,2212], () => (__webpack_exec__(1200)));
module.exports = __webpack_exports__;

})();