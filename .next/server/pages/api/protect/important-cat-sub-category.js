"use strict";
(() => {
var exports = {};
exports.id = 8113;
exports.ids = [8113];
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

/***/ 1815:
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
            let condition = "";
            if (search_cat_name != undefined && search_cat_name != "" && search_cat_name != null) {
                condition = ` mic.name Like '%${search_cat_name}%' AND `;
            }
            /*
            var recordsCategory = await db.query("SELECT id,name FROM master_imp_info_categories  WHERE " + condition + " is_active = '1' AND deleted_at IS NULL  ORDER BY name ASC")
            await db.end();

            if (recordsCategory?.length > 0) {
                for (var i = 0; i < recordsCategory.length; i++) { 
                    let subCatData = await db.query("SELECT id,name FROM master_imp_info_subcategories  WHERE is_active = '1' AND deleted_at IS NULL AND category_id=? ORDER BY name ASC", [recordsCategory[i].id])
                    if (subCatData?.length > 0) {
                        recordsCategory[i].subcategories = subCatData;
                    }
                    else {
                        recordsCategory[i].subcategories = []
                    }

                }

            }*/ var recordsCategory = await db.query("SELECT mic.id,mic.id as cat_id,mic.name as cat_name,mis.id, mis.name FROM master_imp_info_categories mic LEFT JOIN master_imp_info_subcategories mis ON mic.id = mis.category_id WHERE " + condition + " mic.is_active = '1' AND mic.deleted_at IS NULL AND mis.is_active = '1' AND mis.deleted_at IS NULL ORDER BY mic.name,mis.name ASC");
            await db.end();
            let categories = [];
            let catID = 0;
            let catIndex = -1;
            if (recordsCategory) {
                recordsCategory.forEach((val, index)=>{
                    if (catID != val.cat_id) {
                        catIndex++;
                        catID = val.cat_id;
                        let Obj = {};
                        Obj.name = val.cat_name;
                        Obj.id = val.cat_id;
                        Obj.subcategories = [];
                        Obj.subcategories.push({
                            "id": val.id,
                            "name": val.name
                        });
                        categories.push(Obj);
                    } else {
                        categories[catIndex].subcategories.push({
                            "id": val.id,
                            "name": val.name
                        });
                    }
                });
            }
            res.status(200).json({
                data: {
                    "impCategories": categories
                },
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
var __webpack_exports__ = (__webpack_exec__(1815));
module.exports = __webpack_exports__;

})();