"use strict";
(() => {
var exports = {};
exports.id = 960;
exports.ids = [960];
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

/***/ 2818:
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
            const city_id = req.body.city_id;
            const search_title = req.body.searchTitle;
            const vacancy_id = req === null || req === void 0 ? void 0 : (ref = req.body) === null || ref === void 0 ? void 0 : ref.id;
            let condition = "";
            if (search_title != undefined && search_title != "" && search_title != null) {
                condition += " AND mvl.name LIKE '%" + search_title + "%'";
            }
            if (city_id != undefined && city_id != "" && city_id != null) {
                condition += " AND mvl.city_id=" + city_id + "";
            }
            if (vacancy_id != undefined && vacancy_id != "" && vacancy_id != null) {
                condition += " AND mvl.id=" + vacancy_id + "";
            }
            var jobs = await db.query("SELECT mvl.id,mvl.name,mvc.category_name,mvl.no_of_vacancy,mvl.description,mc.name as city_name,IF(mvl.job_type='1','Part Time','Full Time') as job_type FROM `master_vacancy_lists` as mvl  LEFT JOIN master_vacancy_categories mvc ON mvl.vacancy_category_id=mvc.id LEFT JOIN master_cities as mc ON mvl.city_id=mc.id WHERE mvl.is_active='1' AND mvl.deleted_at IS NULL   " + condition + " ORDER BY mvl.name ASC");
            await db.end();
            if ((jobs === null || jobs === void 0 ? void 0 : jobs.length) > 0) {
                res.status(200).json({
                    data: jobs,
                    totalJobs: jobs === null || jobs === void 0 ? void 0 : jobs.length,
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
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(2818)));
module.exports = __webpack_exports__;

})();