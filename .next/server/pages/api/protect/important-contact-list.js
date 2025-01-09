"use strict";
(() => {
var exports = {};
exports.id = 7457;
exports.ids = [7457];
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

/***/ 8761:
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
            req.body = JSON.parse(req.body);
            const search_cat_name = req.body.search_filter;
            const city_id = req.body.city_id;
            const sub_cat_id = req.body.sub_cat_id;
            let condition = "";
            if (search_cat_name != undefined && search_cat_name != "" && search_cat_name != null) {
                condition = ` ic.dispaly_name Like '%${search_cat_name}%' AND `;
            }
            var result = await db.query("SELECT ic.id,ic.business_id,ic.dispaly_name,if(bd.ivr_number!=null || bd.ivr_number!='',bd.ivr_number,GROUP_CONCAT(bme.phone)) as important_contact FROM important_into_cities ic LEFT JOIN business_details bd ON ic.business_id = bd.business_id LEFT JOIN business_mobile_emails bme ON ic.business_id=bme.business_id WHERE " + condition + " ic.imp_sub_cat_id=" + sub_cat_id + " AND (ic.city_id=0 || ic.city_id=" + city_id + ") AND (bme.type=1 || bme.type=5) GROUP by bme.business_id");
            await db.end();
            for(let i = 0; i < result.length; i++){
                result[i].important_contact = result[i].important_contact.split(",");
            }
            res.status(200).json({
                data: result,
                status: 200
            });
        } else {
            res.status(200).json({
                msg: "No records.",
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
var __webpack_exports__ = (__webpack_exec__(8761));
module.exports = __webpack_exports__;

})();