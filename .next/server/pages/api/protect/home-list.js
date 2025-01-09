"use strict";
(() => {
var exports = {};
exports.id = 2110;
exports.ids = [2110];
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

/***/ 7618:
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
        if (req.method == "GET") {
            var recordsCategory = await db.query("SELECT c.id as cat_id,c.name as cat_name,c.image as cat_img,c.icon as cat_icon,c.slug as cat_slug FROM master_categories c WHERE c.is_active = '1' AND c.deleted_at IS NULL ORDER BY c.sort ASC LIMIT 9");
            await db.end();
            if ((recordsCategory === null || recordsCategory === void 0 ? void 0 : recordsCategory.length) > 0) {
                for(var i = 0; i < recordsCategory.length; i++){
                    let s3IMG = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(recordsCategory[i].cat_icon, "uploads/category/icon/");
                    recordsCategory[i].cat_icon = s3IMG;
                    let subCatData = await db.query("SELECT s.name,s.id,s.image,s.id,s.icon,s.slug FROM master_sub_categories s WHERE s.is_active = '1' AND s.deleted_at IS NULL AND s.category_id=? ORDER BY s.sort ASC LIMIT 5", [
                        recordsCategory[i].cat_id
                    ]);
                    if ((subCatData === null || subCatData === void 0 ? void 0 : subCatData.length) > 0) {
                        //get subcategory icons
                        for(var j = 0; j < subCatData.length; j++){
                            let subCat3IMG = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(subCatData[j].icon, "uploads/sub_category/icon/");
                            subCatData[j].sub_cat_icon = subCat3IMG;
                        }
                        recordsCategory[i].subcategories = subCatData;
                    } else {
                    //recordsCategory[i].subcategories = [];
                    }
                }
            }
            // var recordsImpCategory = await db.query("SELECT id,name FROM master_imp_info_categories WHERE is_active = '1' AND deleted_at IS NULL  ORDER BY name ASC")
            var recordsImpCategory = await db.query("SELECT mic.id,mic.name FROM master_imp_info_categories mic INNER JOIN master_imp_info_subcategories mis ON mic.id = mis.category_id WHERE  mic.is_active = '1' AND mic.deleted_at IS NULL AND mis.is_active = '1' AND mis.deleted_at IS NULL  GROUP BY mic.id ORDER BY mic.name,mis.name ASC LIMIT 5");
            await db.end();
            var recordsCities = await db.query("SELECT c.id, c.id as value,c.name as label,c.state_id,c.banner as banner_img,c.banner_video,c.image FROM `businesses` b LEFT JOIN master_cities c ON c.id = b.city_id WHERE b.city_id IS NOT NULL AND b.city_id > 0 AND c.is_active='1' AND c.deleted_at IS NULL AND is_display_home='1' AND b.is_active='1' AND b.approved_at IS NOT NULL AND b.deleted_at IS NULL GROUP BY city_id ORDER BY sort ASC,c.name ASC LIMIT 15");
            await db.end();
            if ((recordsCities === null || recordsCities === void 0 ? void 0 : recordsCities.length) > 0) {
                for(var i = 0; i < recordsCities.length; i++){
                    let citySlug = recordsCities[i].label.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                        return letter.toUpperCase();
                    });
                    citySlug = citySlug.replace(" ", "-");
                    recordsCities[i].slug = citySlug;
                    recordsCities[i].banner_img = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(recordsCities[i].banner_img, "uploads/city/banner/");
                    recordsCities[i].banner_video = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(recordsCities[i].banner_video, "uploads/city/banner/", false);
                    recordsCities[i].image = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(recordsCities[i].image, "uploads/city/image/", false, recordsCities[i].label);
                }
            }
            var setting = await db.query("SELECT guest_blog_package_amount FROM setting_company WHERE id='1'");
            res.status(200).json({
                data: {
                    "homeCities": recordsCities,
                    "categories": recordsCategory,
                    "impCategories": recordsImpCategory,
                    "setting": setting
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
        console.log("home-list_________________________", err);
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
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(7618)));
module.exports = __webpack_exports__;

})();