"use strict";
(() => {
var exports = {};
exports.id = 4609;
exports.ids = [4609];
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

/***/ 8541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_S3img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9090);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2212);




async function handler(req, res) {
    try {
        //console.log(req)
        const originPath = req.headers["origin"];
        //console.log(originPath," ADS ORIGIN PATH------------------------------")
        if (req.method == "POST" && (originPath == "http://localhost:3000" || originPath == "https://app.dialmenow.in" || originPath == "https://dialmenow.in" || originPath == "https://m.dialmenow.in" || originPath == "https://www.dialmenow.in")) {
            var ref;
            const forwarded = req.headers["x-forwarded-for"];
            let pageUrl = req.headers["referer"];
            pageUrl = pageUrl.replace(originPath, "");
            //console.log("Request headers ADS==========", req.headers)
            const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
            const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
            const body = (req === null || req === void 0 ? void 0 : req.body) ? typeof req.body === "object" ? req.body : JSON.parse(req.body) : "";
            const adsID = body.ads_id || 0;
            let current = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__/* .getDateTime */ .Fc)();
            let city_id = body.city_id || 0;
            let category_id = body.category_id || 0;
            let type = body.type || 1;
            console.log("type  of ads  ", type);
            let session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({
                req
            });
            let user = (session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.id) || null;
            let exculdeAds = "";
            if (adsID > 0) {
                //update click count
                db.query("UPDATE ads_view_analytics SET is_clicked='1' WHERE id=?", [
                    adsID
                ]);
                res.status(200).json({
                    status: 200,
                    msg: "Done"
                });
            } else {
                var ref1;
                //get page from 
                let page = await db.query("SELECT id FROM analytics_pages WHERE url=?", [
                    pageUrl
                ]);
                let pageID = page.length > 0 ? page[0].id : null;
                let extractCond = pageID ? " AND page_id = " + pageID : " AND page_id is NULL";
                //get all Ads of the user IP or ID in last 1 min 
                let seenAds = await db.query("SELECT GROUP_CONCAT(ads_id) as seen_ads FROM ads_view_analytics WHERE (ip_address=? OR user_id =?) " + extractCond + " AND TIMESTAMPDIFF(MINUTE,date_time,?) <= 0 ", [
                    ip,
                    user,
                    current
                ]);
                if (seenAds.length > 0 && ((ref1 = seenAds[0]) === null || ref1 === void 0 ? void 0 : ref1.seen_ads) != null) {
                    //exclude those ads which is seen by user within 1 minute
                    exculdeAds = " AND a.id NOT IN (" + seenAds[0].seen_ads + ")";
                }
                let cityCond = " AND a.city_id='0' ";
                //city condition
                if (city_id > 0) {
                    cityCond = " AND (a.city_id='0' || FIND_IN_SET(" + city_id + ",a.city_id)) ";
                }
                let currentDay = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__/* .getDateTime */ .Fc)(4);
                //fetch Ads
                let adsData = await db.query("SELECT a.id as ads_id,(SELECT date_time FROM `ads_view_analytics` WHERE ads_id = a.id ORDER BY date_time ASC LIMIT 1) as last_seen,(SELECT IF(is_open =2,start_time,'') FROM ads_show_times WHERE ads_id = a.id AND day=?) as ad_start,(SELECT IF(is_open =2,end_time,'') FROM ads_show_times WHERE ads_id = a.id AND day=?) as ad_end,IF(a.package_type = '3' OR a.package_type = '1','1',(SELECT is_open FROM ads_show_times WHERE ads_id = a.id AND day=?)) as ad_open,a.package_type,a.payment,a.per_click_price,a.per_impression_price,a.business_name,a.redirect_url,a.ads_click as click_type,a.banner_image,IF(a.banner_position = '3' OR a.banner_position = '4',1,2) as banner_position,(SELECT SUM(IF(is_clicked = '1',1,0)) as total_clicks FROM `ads_view_analytics` WHERE ads_id = a.id) as total_clicks,(SELECT COUNT(id) as total FROM `ads_view_analytics` WHERE ads_id = a.id) as total_impresion FROM advertise_bussiness_requestes a LEFT JOIN  master_ads_packages m ON m.id = a.package_id WHERE  a.deleted_at IS NULL AND a.is_active='1' AND a.ads_status='1' AND a.sub_category_id REGEXP CONCAT('(^|,)(', REPLACE(?, ',', '|'), ')(,|$)') AND a.banner_position=? " + exculdeAds + cityCond + "   AND (CASE WHEN a.package_type = '1' THEN (IFNULL((((SELECT COUNT(id) as total FROM `ads_view_analytics` WHERE ads_id = a.id) * a.per_impression_price) + a.per_impression_price),0) <= a.payment AND (IFNULL((((SELECT COUNT(id) as total FROM `ads_view_analytics` WHERE ads_id = a.id AND DATE_FORMAT(date_time,'%Y-%m-%d') = DATE_FORMAT(?,'%Y-%m-%d')) * a.per_impression_price) + a.per_impression_price),0) <= IFNULL(a.per_day_amount,a.payment))) WHEN a.package_type = '2' THEN (IFNULL(((((SELECT COUNT(id) as total FROM`ads_view_analytics` WHERE ads_id = a.id) * a.per_impression_price) + ((SELECT SUM(IF(is_clicked = '1', 1, 0)) as total_clicks FROM`ads_view_analytics` WHERE ads_id = a.id) * a.per_click_price)) + a.per_click_price + a.per_impression_price),0) <= a.payment AND (IFNULL(((((SELECT COUNT(id) as total FROM`ads_view_analytics` WHERE ads_id = a.id AND DATE_FORMAT(date_time,'%Y-%m-%d') = DATE_FORMAT(?,'%Y-%m-%d')) * a.per_impression_price) + ((SELECT SUM(IF(is_clicked = '1', 1, 0)) as total_clicks FROM`ads_view_analytics` WHERE ads_id = a.id AND DATE_FORMAT(date_time,'%Y-%m-%d') = DATE_FORMAT(?,'%Y-%m-%d')) * a.per_click_price)) + a.per_click_price + a.per_impression_price),0) <= IFNULL(a.per_day_amount,a.payment))) ELSE DATE_FORMAT(?,'%Y-%m-%d') BETWEEN a.published_date AND a.expired_date END) HAVING (ad_open='1' OR (ad_open='2' AND DATE_FORMAT(?,'%H:%i:%s') BETWEEN ad_start AND ad_end)) ORDER BY last_seen ASC,sequence ASC LIMIT 1", [
                    currentDay,
                    currentDay,
                    currentDay,
                    category_id,
                    type,
                    current,
                    current,
                    current,
                    current,
                    current
                ]);
                //console.log("ADs---------------------cat --", adsData, type, category_id, exculdeAds, cityCond)
                /*
                 (a.package_type ='4' OR a.package_type ='3' OR IFNULL((((SELECT COUNT(id) as total FROM `ads_view_analytics` WHERE ads_id = a.id AND DATE_FORMAT(date_time,'%Y-%m-%d') = ?) * a.per_impression_price) + a.per_impression_price),0) <= a.per_day_amount)

                    per day condition for impression type package
                 
                 */ if (adsData.length > 0) {
                    adsData[0].banner_image = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(adsData[0].banner_image, "uploads/advertisements/");
                    if (adsData[0].redirect_url) {
                        adsData[0].redirect_url = adsData[0].click_type == "1" ? "tel:" + adsData[0].redirect_url : adsData[0].redirect_url;
                    }
                    //insert add impression
                    let insertData = await db.query("INSERT INTO ads_view_analytics SET ads_id=?,ip_address=?,user_id=?,is_clicked='0',date_time=?,page_id=?", [
                        adsData[0].ads_id,
                        ip,
                        user,
                        current,
                        pageID
                    ]);
                    // console.log("ADs---------------------", adsData)
                    res.status(200).json({
                        status: 200,
                        data: adsData,
                        adsID: insertData.insertId
                    });
                } else {
                    res.status(200).json({
                        status: 201,
                        msg: "Not ads available"
                    });
                }
            }
        } else {
            res.status(201).json({
                status: 201,
                msg: "No records"
            });
        }
    } catch (err) {
        console.log("ads error  ", err);
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
var __webpack_exports__ = __webpack_require__.X(0, [8365,2212], () => (__webpack_exec__(8541)));
module.exports = __webpack_exports__;

})();