"use strict";
(() => {
var exports = {};
exports.id = 9938;
exports.ids = [9938];
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

/***/ 969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_S3img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9090);


async function handler(req, res) {
    try {
        const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        if (req.method == "POST") {
            var ref;
            req.body = JSON.parse(req.body);
            const city_id = req === null || req === void 0 ? void 0 : (ref = req.body) === null || ref === void 0 ? void 0 : ref.city_id;
            var packageListings = await db.query("SELECT id,name,package_id,type,price,offer_price,(CASE WHEN offer_price IS NOT NULL && offer_price!='' THEN offer_price ELSE price END) as actual_price,description FROM master_combo_packages WHERE is_active='1'  ORDER BY priority ASC");
            await db.end();
            if ((packageListings === null || packageListings === void 0 ? void 0 : packageListings.length) > 0) {
                res.status(200).json({
                    data: packageListings,
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
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(969)));
module.exports = __webpack_exports__;

})();