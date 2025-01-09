"use strict";
(() => {
var exports = {};
exports.id = 6600;
exports.ids = [6600];
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

/***/ 9271:
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
        let ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        ip = ip.replace("::ffff:", "");
        /*var records = await db.query("SELECT id, id as value,name as label,state_id,banner as banner_img,banner_video,image as icon FROM master_cities WHERE is_active='1' AND deleted_at IS NULL ORDER BY name ASC")*/ var records = await db.query("SELECT c.id, c.id as value,c.name as label,c.state_id,c.banner as banner_img,c.banner_video,c.image as icon FROM `businesses` b LEFT JOIN master_cities c ON c.id = b.city_id WHERE b.city_id IS NOT NULL AND b.city_id > 0 AND c.is_active='1' AND c.deleted_at IS NULL AND b.is_active='1' AND b.approved_at IS NOT NULL AND b.deleted_at IS NULL GROUP BY city_id ORDER BY c.name ASC");
        var defaultData = await db.query("SELECT id, id as value,name as label,state_id,banner as banner_img,banner_video,image as icon FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND (name LIKE '%jaipur%' OR name LIKE '%Jaipur%') LIMIT 1");
        await db.end();
        if ((defaultData === null || defaultData === void 0 ? void 0 : defaultData.length) > 0) {
            let citySlug = defaultData[0].label.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            citySlug = citySlug.replace(" ", "-");
            defaultData[0].slug = citySlug;
            defaultData[0].banner_img = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(defaultData[0].banner_img, "uploads/city/banner/", false);
            defaultData[0].banner_video = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(defaultData[0].banner_video, "uploads/city/banner/", false);
            defaultData[0].icon = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(defaultData[0].icon, "uploads/city/image/");
        }
        if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
            for(var i = 0; i < records.length; i++){
                let citySlug = records[i].label.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                });
                citySlug = citySlug.replace(" ", "-");
                records[i].slug = citySlug;
                records[i].banner_img = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(records[i].banner_img, "uploads/city/banner/", false);
                records[i].banner_video = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(records[i].banner_video, "uploads/city/banner/", false);
                records[i].icon = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(records[i].icon, "uploads/city/image/");
            }
            res.status(200).json({
                data: {
                    "cities": records,
                    "defaultCity": (defaultData === null || defaultData === void 0 ? void 0 : defaultData.length) > 0 ? defaultData[0] : (records === null || records === void 0 ? void 0 : records.length) > 0 ? records[0] : ""
                },
                status: 200
            });
        } else {
            res.status(201).json({
                msg: "Invalid.",
                status: 201
            });
        }
    } catch (err) {
        console.log("cities-list API ERROR_________________", err);
        res.status(201).json({
            msg: "Invalid.",
            status: 201
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(9271)));
module.exports = __webpack_exports__;

})();