"use strict";
(() => {
var exports = {};
exports.id = 4992;
exports.ids = [4992];
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

/***/ 8039:
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
            var records = await db.query("SELECT ut.id,ut.name,ut.designation,ut.image,ut.description,ut.video FROM user_testimonials ut   WHERE ut.is_active = '1' AND ut.deleted_at IS NULL");
            await db.end();
            if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
                for(let i = 0; i < records.length; i++){
                    let videoPath = "";
                    let dataVideoObject = "";
                    if (records[i].video != undefined && records[i].video != "" && records[i].video != null) {
                        videoPath = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(records[i].video, "uploads/testimonial/video/");
                        dataVideoObject = {
                            "source": [
                                {
                                    "src": videoPath,
                                    "type": "video/mp4"
                                }
                            ],
                            "attributes": {
                                "preload": false,
                                "playsinline": true,
                                "controls": true
                            }
                        };
                        dataVideoObject = JSON.stringify(dataVideoObject);
                    }
                    if (records[i].image != undefined && records[i].image != "" && records[i].image != null) {
                        records[i].image = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(records[i].image, "uploads/testimonial/image/");
                    } else {
                        records[i].image = "/images/avatars/24.png";
                    }
                    records[i].videoPath = videoPath;
                    records[i].dataVideoObject = dataVideoObject;
                }
                res.setHeader("Cache-Control", "max-age=900, immutable");
                res.status(200).json({
                    data: records,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "Invalid Request.",
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
        console.log("________Testimonial API____________________", err);
        res.status(200).json({
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
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(8039)));
module.exports = __webpack_exports__;

})();