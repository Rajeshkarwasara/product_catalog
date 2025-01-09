"use strict";
(() => {
var exports = {};
exports.id = 1858;
exports.ids = [1858];
exports.modules = {

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 7525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9090);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2212);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);



async function handler(req, res) {
    try {
        const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        //console.log(req)
        const originPath = req.headers["host"];
        if (req.method == "GET" && (originPath == "localhost:3000" || originPath == "app.dialmenow.in" || originPath == "dialmenow.in" || originPath == "m.dialmenow.in") && req.headers["referer"] != undefined) {
            const forwarded = req.headers["x-forwarded-for"];
            const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
            let blockedIPs = await db.query("SELECT ip FROM users_ip_blocked WHERE status='1' AND ip=?", [
                ip
            ]);
            if (blockedIPs.length > 0) {
                //block this user
                res.status(201).json({
                    status: 403,
                    msg: "Your IP address is blocked from accessing this website.",
                    ip: ip
                });
            } else {
                var ref;
                const current = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__/* .getDateTime */ .Fc)();
                const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
                    req
                });
                let userID = (session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.id) || 0;
                const useSecureCookies = process.env.NEXTAUTH_URL.startsWith("http://");
                const csrfProp = `${useSecureCookies ? "__Host-" : ""}next-auth.csrf-token`;
                let host = req.headers["host"];
                let pageCurrent = req.headers["referer"];
                pageCurrent = pageCurrent.split(host);
                let currentPageLink = pageCurrent[1];
                /***First check page exist or not***********/ let currentPageData = await db.query("SELECT id FROM analytics_pages WHERE url =?", currentPageLink);
                let pageID = 0;
                if (currentPageData.length > 0) {
                    //insert
                    pageID = currentPageData[0].id;
                } else {
                    let insertPage = await db.query("INSERT INTO analytics_pages SET url=?", currentPageLink);
                    pageID = insertPage.insertId;
                }
                //console.log("_____pageID--______________", pageID, currentPageData, req.cookies["next-auth.csrf-token"])
                if (pageID > 0) {
                    let ipData = await db.query("SELECT id,TIMESTAMPDIFF(HOUR,time,?) as days,time FROM analytics WHERE ip=? AND user_id=?", [
                        current,
                        ip,
                        userID
                    ]);
                    let analyticID = 0;
                    if (ipData.length > 0) {
                        db.query("UPDATE analytics SET today_hits = today_hits + 1 ,total_hits = total_hits + 1 WHERE id=?", [
                            ipData[0].id
                        ]);
                        //console.log("  ipData.time   ", ipData[0].time)
                        if (ipData[0].days > 24) {
                            //user returning after one day then returning users is
                            db.query("UPDATE analytics SET is_returning='2',time=? WHERE id=?", [
                                current,
                                ipData[0].id
                            ]);
                        } else if (ipData[0].time == null || ipData[0].time == "") {
                            db.query("UPDATE analytics SET time=? WHERE id=?", [
                                current,
                                ipData[0].id
                            ]);
                        }
                        analyticID = ipData[0].id;
                    } else {
                        //insert new record
                        let insertRecord = await db.query("INSERT INTO analytics SET ip=?,today_hits = today_hits + 1 ,total_hits = total_hits + 1,user_id=?,is_returning='1',time=?", [
                            ip,
                            userID,
                            current
                        ]);
                        analyticID = insertRecord.insertId;
                    }
                    let pageRecords = await db.query("SELECT id FROM analytics_searchings WHERE analytic_id=? AND page_id = ?", [
                        analyticID,
                        pageID
                    ]);
                    if ((pageRecords === null || pageRecords === void 0 ? void 0 : pageRecords.length) > 0) {
                        //update
                        db.query("UPDATE analytics_searchings SET hits = hits + 1,time=? WHERE id=?", [
                            current,
                            pageRecords[0].id
                        ]);
                    } else {
                        //page records
                        let pageRecordsNew = db.query("INSERT INTO analytics_searchings SET analytic_id=?, page_id = ?, hits=1,time=?", [
                            analyticID,
                            pageID,
                            current
                        ]);
                        //update business cnt, category cnt and sub category hit count
                        let cookie = req.cookies["cpdmn"];
                        console.log("cookie ANA ", cookie, currentPageLink);
                        if (cookie && cookie != "") {
                            cookie = cookie.split("|");
                            if (cookie[0] == "details" && currentPageLink.includes("contact-details") && cookie[1]) {
                                //update business count
                                db.query("UPDATE businesses SET hits = IF(hits IS NULL OR hits = '',0,hits) + 1 WHERE id=?", [
                                    cookie[1]
                                ]);
                            } else if (cookie[0] == "listing" && cookie[1]) {
                                //update sub categories count
                                db.query("UPDATE master_sub_categories SET hits = IF(hits IS NULL OR hits = '',0,hits) + 1 WHERE id=?", [
                                    cookie[1]
                                ]);
                            } else if (cookie[0] == "category" && currentPageLink.includes("categories") && cookie[1]) {
                                //update categories count
                                db.query("UPDATE master_categories SET hits = IF(hits IS NULL OR hits = '',0,hits) + 1 WHERE id=?", [
                                    cookie[1]
                                ]);
                            }
                        }
                    }
                }
                res.status(200).json({
                    status: 200,
                    msg: "ok"
                });
            }
        } else {
            res.status(201).json({
                status: 201,
                msg: "No records"
            });
        }
    } catch (err) {
        console.log("_____ANALYTICS JS_____________", err);
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
var __webpack_exports__ = __webpack_require__.X(0, [2212], () => (__webpack_exec__(7525)));
module.exports = __webpack_exports__;

})();