"use strict";
(() => {
var exports = {};
exports.id = 5595;
exports.ids = [5595];
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

/***/ 4305:
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
        const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        if (req.method == "POST") {
            var ref;
            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({
                req
            });
            const body = (req === null || req === void 0 ? void 0 : req.body) ? typeof req.body === "object" ? req.body : JSON.parse(req.body) : "";
            let businessID = (body === null || body === void 0 ? void 0 : body.id) || "";
            let details = await db.query("SELECT (SELECT (SUM(rating)/COUNT(id)) as rating from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as ratings,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL AND is_history='0') as total_reviews,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='5' AND is_history='0') as five_rate,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='4' AND is_history='0') as four_rate,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='3' AND is_history='0') as three_rate,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='2' AND is_history='0') as two_rate,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='1' AND is_history='0') as one_rate,(SELECT GROUP_CONCAT(keyword) FROM master_keywords WHERE FIND_IN_SET(id,b.keywords)) as keywords_name,(SELECT GROUP_CONCAT(name) as name FROM master_type_of_business WHERE FIND_IN_SET(id,b.type_of_business)) as type_of_businesses,(SELECT GROUP_CONCAT(mp.name) as payments FROM business_payment_modes p LEFT JOIN master_payment_modes mp ON mp.id = p.payment_mode_id WHERE p.status='1' AND p.business_id = b.id) as payment_modes,(SELECT GROUP_CONCAT(mp.id) as payments FROM business_payment_modes p LEFT JOIN master_payment_modes mp ON mp.id = p.payment_mode_id WHERE p.status='1' AND p.business_id = b.id) as payment_modes_id,de.whatsapp_no,de.book_now_url,de.business_pdf,(SELECT GROUP_CONCAT(CONCAT(name,'@',slug)) as name FROM master_sub_categories WHERE FIND_IN_SET(id,b.subcategory)) as sub_categories,b.is_claimed,b.is_verified,b.head_office,b.branch_office,b.no_of_employee,b.subcategory,b.keywords,b.is_faq_show FROM businesses b LEFT JOIN business_details de ON de.business_id = b.id WHERE b.id =? AND b.is_active ='1' AND b.deleted_at IS NULL", [
                businessID
            ]);
            let subcategoriesData = [];
            let keywords = [];
            if (details.length > 0) {
                details[0].business_pdf = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(details[0].business_pdf, "uploads/company/pdf/", false);
                subcategoriesData = await db.query("SELECT id, name as label,slug FROM master_sub_categories WHERE FIND_IN_SET(id,?)", [
                    details[0].subcategory
                ]);
                keywords = await db.query("SELECT id, keyword as label FROM master_keywords WHERE FIND_IN_SET(id,?)", [
                    details[0].keywords
                ]);
            }
            let is_review_submmitted = 0;
            if (session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.id) {
                var ref1;
                let reviewCheck = await db.query("SELECT id FROM business_rating_reviews WHERE business_id =? AND user_id=? AND deleted_at IS NULL AND is_active != '2' AND is_history='0'", [
                    businessID,
                    session === null || session === void 0 ? void 0 : (ref1 = session.user) === null || ref1 === void 0 ? void 0 : ref1.id
                ]);
                is_review_submmitted = (reviewCheck === null || reviewCheck === void 0 ? void 0 : reviewCheck.length) > 0 ? 1 : 0;
            }
            let businessTiming = await db.query("SELECT day,is_open,open_at,close_at,dual_open_at,dual_close_at FROM business_timings WHERE business_id=?", [
                businessID
            ]);
            let mobEmailWeb = await db.query("SELECT IF(type ='1','mobile',IF(type ='2','email',IF(type ='3','web',IF(type = '4','landline','mobile_email')))) as type,text as details,is_primary,is_verified,name,email,phone,is_verified_phone,is_display_mobile FROM business_mobile_emails WHERE business_id= ? ORDER BY type ASC", [
                businessID
            ]);
            let images = await db.query("SELECT url FROM business_img_videos WHERE is_active = '2' AND business_id=?", [
                businessID
            ]);
            if ((images === null || images === void 0 ? void 0 : images.length) > 0) {
                //console.log("images", images)
                for(var i = 0; i < images.length; i++){
                    images[i].url = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(images[i].url, "uploads/company/image/");
                }
            }
            let faq = details[0].is_faq_show == "1" ? await db.query("SELECT question,answer FROM business_faqs WHERE business_id=? AND is_active='1' AND deleted_at IS NULL order by sort ASC", [
                businessID
            ]) : [];
            let socilLinks = await db.query("SELECT id,social_link,social_name FROM business_social_links WHERE business_id=?", [
                businessID
            ]);
            //console.log("DATA INSIDE--------------------------", images)
            res.status(200).json({
                details: details,
                businessTiming: businessTiming,
                mobEmail: mobEmailWeb,
                images: images,
                socilLinks: socilLinks,
                faq: faq,
                review_status: is_review_submmitted,
                status: 200,
                sub_categories: subcategoriesData,
                keywords: keywords
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
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(4305)));
module.exports = __webpack_exports__;

})();