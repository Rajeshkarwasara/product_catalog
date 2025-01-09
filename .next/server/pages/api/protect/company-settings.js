"use strict";
(() => {
var exports = {};
exports.id = 6308;
exports.ids = [6308];
exports.modules = {

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

/***/ 9625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9090);

async function handler(req, res) {
    try {
        const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        if (req.method == "POST") {
            var companySettings = await db.query("SELECT company_name,description FROM setting_company  WHERE id= '1'");
            await db.end();
            res.status(200).json({
                data: companySettings,
                status: 200
            });
        } else {
            res.status(200).json({
                msg: "Invalid Request.",
                status: 201
            });
        }
    } catch (err) {
        console.log(err);
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
var __webpack_exports__ = (__webpack_exec__(9625));
module.exports = __webpack_exports__;

})();