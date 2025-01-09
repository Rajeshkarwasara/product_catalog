"use strict";
(() => {
var exports = {};
exports.id = 1167;
exports.ids = [1167];
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

/***/ 2148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_S3img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9090);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);



async function handler(req, res) {
    try {
        var ref;
        const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({
            req
        });
        let userID = (session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.id) || "";
        if (req.method == "POST") {
            const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
            const businessID = body.id || "";
            const pageNum = body.page || "";
            //console.log("pageNum ", pageNum, "userIDmain ", body)
            //const { user } = await getSession({ req })
            if (businessID) {
                var ref1;
                var offset = 10 * (pageNum - 1);
                var limit = 10;
                let sort = (body === null || body === void 0 ? void 0 : (ref1 = body.other) === null || ref1 === void 0 ? void 0 : ref1.sort) || "new";
                let orderBy = "order by de.created_at DESC";
                if (sort == "old") {
                    orderBy = "order by de.created_at ASC";
                } else if (sort == "high-rate") {
                    orderBy = "order by de.rating DESC";
                } else if (sort == "low-rate") {
                    orderBy = "order by de.rating ASC";
                }
                let userWiseCondition = userID && userID > 0 ? "(de.is_active='1' OR (de.is_active='0' AND de.user_id=" + userID + "))" : "de.is_active='1'";
                //console.log("SORT BY --", orderBy)
                var records = await db.query("SELECT de.id,mb.name as business_name,de.rating,de.review,u.name,u.image as user_image,DATE_FORMAT(de.created_at,'%b %d, %Y') as date,de.is_active FROM  business_rating_reviews de LEFT JOIN businesses mb ON de.business_id = mb.id LEFT JOIN users u ON u.id = de.user_id WHERE mb.is_active='1' AND mb.id=? AND " + userWiseCondition + " AND de.deleted_at IS NULL AND de.is_history='0' " + orderBy + " LIMIT ?,?", [
                    businessID,
                    offset,
                    limit
                ]);
                if (records.length > 0) {
                    let totalData = await db.query("SELECT COUNT(de.id) as total FROM  business_rating_reviews de LEFT JOIN businesses mb ON de.business_id = mb.id LEFT JOIN users u ON u.id = de.user_id WHERE mb.is_active='1' AND mb.id=? AND de.is_active='1' AND de.deleted_at IS NULL AND de.is_history='0'", [
                        businessID
                    ]);
                    for(var i = 0; i < records.length; i++){
                        records[i].user_image = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(records[i].user_image, "uploads/users/");
                    }
                    let totalMod = totalData[0].total % 10;
                    let total = 1;
                    if (totalMod > 0) {
                        total = Math.ceil(totalData[0].total / 10);
                    } else {
                        total = Math.floor(totalData[0].total / 10);
                    }
                    //console.log("REVIEWS DETAILS-------------------", total,records)
                    res.status(200).json({
                        data: records,
                        total: total,
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
                    msg: "No records found.",
                    status: 201
                });
            }
        } else {
            res.status(200).json({
                msg: "No records found.",
                status: 201
            });
        }
    } catch (err) {
        console.log("==================business-details-reviews==============================================", err);
        res.status(200).json({
            msg: "No records found.",
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
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(2148)));
module.exports = __webpack_exports__;

})();