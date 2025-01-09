"use strict";
(() => {
var exports = {};
exports.id = 6126;
exports.ids = [6126];
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

/***/ 7129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_S3img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9090);


async function handler(req, res) {
    try {
        if (req.method == "POST") {
            var ref, ref1;
            const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
            const body = (req === null || req === void 0 ? void 0 : req.body) ? typeof req.body === "object" ? req.body : JSON.parse(req.body) : "";
            let mainID = (body === null || body === void 0 ? void 0 : body.id) || "";
            let cityID = (body === null || body === void 0 ? void 0 : (ref = body.other) === null || ref === void 0 ? void 0 : ref.city_id) || "";
            let cityName = (body === null || body === void 0 ? void 0 : (ref1 = body.other) === null || ref1 === void 0 ? void 0 : ref1.city_name) || "";
            cityName = cityName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            let cityUrl = cityName.replaceAll(" ", "-");
            // console.log("cityUrl -------", cityUrl)
            const pageNum = body.page || "";
            if (mainID && cityID) {
                var offset = 20 * (pageNum - 1);
                var limit = 20;
                let listings = await db.query("SELECT sub.id,sub.name,sub.description,sub.slug,sub.icon FROM master_sub_categories sub WHERE sub.is_active='1' AND sub.deleted_at IS NULL AND category_id= ? ORDER BY name ASC LIMIT ?,?", [
                    mainID,
                    offset,
                    limit
                ]);
                // console.log("listings -------", listings)
                if (listings.length > 0) {
                    for(var i = 0; i < listings.length; i++){
                        let url = "/" + cityUrl + "/" + listings[i].slug;
                        listings[i].url = url;
                        let s3IMG = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(listings[i].icon, "uploads/sub_category/icon/", false, listings[i].name);
                        listings[i].icon = s3IMG;
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
        console.log("____________subcategories-listing API______________________", err);
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
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(7129)));
module.exports = __webpack_exports__;

})();