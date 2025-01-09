"use strict";
(() => {
var exports = {};
exports.id = 9285;
exports.ids = [9285];
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

/***/ 6263:
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
            var typeofbusiness = await db.query("SELECT id as value,name as label FROM master_type_of_business WHERE is_active='1' AND deleted_at IS NULL");
            var modeofpayment = await db.query("SELECT id as value,name as label FROM master_payment_modes WHERE is_active='1'");
            var category = await db.query("SELECT id,name FROM master_categories WHERE is_active='1' AND deleted_at IS NULL order by sort asc");
            var cities = await db.query("SELECT id,name FROM master_cities WHERE is_active='1' AND deleted_at IS NULL");
            var arr = [];
            for(var i = 0; i < category.length; i++){
                var categoryOption = await db.query("SELECT id as value,name as label,category_id FROM master_sub_categories WHERE is_active='1' AND deleted_at IS NULL AND category_id=? order by sort asc", [
                    category[i].id
                ]);
                if (categoryOption.length > 0) {
                    var data = {
                        label: category[i].name,
                        options: categoryOption
                    };
                    arr.push(data);
                }
            }
            res.status(200).json({
                "typeofbusiness": typeofbusiness,
                "modeofpayment": modeofpayment,
                "subcategory": arr,
                "cities": cities
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
var __webpack_exports__ = (__webpack_exec__(6263));
module.exports = __webpack_exports__;

})();