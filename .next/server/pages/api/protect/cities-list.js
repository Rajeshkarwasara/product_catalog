"use strict";
(() => {
var exports = {};
exports.id = 6944;
exports.ids = [6944];
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

/***/ 9657:
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
        let ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        ip = ip.replace("::ffff:", "");
        /*var records = await db.query("SELECT id, id as value,name as label,state_id,banner as banner_img,banner_video,image as icon FROM master_cities WHERE is_active='1' AND deleted_at IS NULL ORDER BY name ASC")*/ // var records = await db.query("SELECT c.id, c.id as value,c.name as label,c.state_id,c.banner as banner_img,c.banner_video,c.image as icon FROM `businesses` b LEFT JOIN master_cities c ON c.id = b.city_id WHERE b.city_id IS NOT NULL AND b.city_id > 0 AND c.is_active='1' AND c.deleted_at IS NULL AND b.is_active='1' AND b.approved_at IS NOT NULL AND b.deleted_at IS NULL GROUP BY city_id ORDER BY c.name ASC")
        var records = [
            {
                "id": 286,
                "value": 286,
                "label": "Ajmer",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 321,
                "value": 321,
                "label": "Alwar",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 417,
                "value": 417,
                "label": "Banswara",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 419,
                "value": 419,
                "label": "Baran",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 415,
                "value": 415,
                "label": "Barmer",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 337,
                "value": 337,
                "label": "Bharatpur",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 349,
                "value": 349,
                "label": "Bhilwara",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 291,
                "value": 291,
                "label": "Bikaner",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 456,
                "value": 456,
                "label": "Bundi",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 362,
                "value": 362,
                "label": "Chittorgarh",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 383,
                "value": 383,
                "label": "Churu",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 377,
                "value": 377,
                "label": "Dausa",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 396,
                "value": 396,
                "label": "Dholpur",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 425,
                "value": 425,
                "label": "Dungarpur",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 389,
                "value": 389,
                "label": "Hanumangarh",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 1,
                "value": 1,
                "label": "Jaipur",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 342,
                "value": 342,
                "label": "Jaisalmer",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 408,
                "value": 408,
                "label": "Jalore",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 428,
                "value": 428,
                "label": "Jhalawar",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 368,
                "value": 368,
                "label": "Jhunjhunu",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 285,
                "value": 285,
                "label": "Jodhpur",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 379,
                "value": 379,
                "label": "Karauli",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 288,
                "value": 288,
                "label": "Kota",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 365,
                "value": 365,
                "label": "Nagaur",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 367,
                "value": 367,
                "label": "Pali",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 401,
                "value": 401,
                "label": "Pratapgarh",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 353,
                "value": 353,
                "label": "Rajsamand",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 329,
                "value": 329,
                "label": "Sawai Madhopur",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 317,
                "value": 317,
                "label": "Sikar",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 366,
                "value": 366,
                "label": "Sirohi",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 394,
                "value": 394,
                "label": "Sri Ganganagar",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 432,
                "value": 432,
                "label": "Tonk",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            },
            {
                "id": 287,
                "value": 287,
                "label": "Udaipur",
                "state_id": 1,
                "banner_img": null,
                "banner_video": null,
                "icon": null
            }
        ];
        var defaultData = await db.query("SELECT id, id as value,name as label,state_id,banner as banner_img,banner_video,image as icon FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND (name LIKE '%jaipur%' OR name LIKE '%Jaipur%') LIMIT 1");
        await db.end();
        if ((defaultData === null || defaultData === void 0 ? void 0 : defaultData.length) > 0) {
            let citySlug = defaultData[0].label.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            citySlug = citySlug.replace(" ", "-");
            defaultData[0].slug = citySlug;
            defaultData[0].banner_img = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(defaultData[0].banner_img, "uploads/city/banner/", false);
            defaultData[0].banner_video = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(defaultData[0].banner_video, "uploads/city/banner/", false);
            defaultData[0].icon = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(defaultData[0].icon, "uploads/city/image/");
        }
        if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
            for(var i = 0; i < records.length; i++){
                let citySlug = records[i].label.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                });
                citySlug = citySlug.replace(" ", "-");
                records[i].slug = citySlug;
                records[i].banner_img = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(records[i].banner_img, "uploads/city/banner/", false);
                records[i].banner_video = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(records[i].banner_video, "uploads/city/banner/", false);
                records[i].icon = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_0__/* .S3img */ .y9)(records[i].icon, "uploads/city/image/");
            }
            res.status(200).json({
                data: {
                    "cities": records,
                    "defaultCity": (defaultData === null || defaultData === void 0 ? void 0 : defaultData.length) > 0 ? defaultData[0] : (records === null || records === void 0 ? void 0 : records.length) > 0 ? records[0] : ""
                },
                status: 200
            });
        } else {
            res.status(201).json({
                msg: "Invalid.",
                status: 201
            });
        }
    } catch (err) {
        console.log("cities-list API ERROR_________________", err);
        res.status(201).json({
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
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(9657)));
module.exports = __webpack_exports__;

})();