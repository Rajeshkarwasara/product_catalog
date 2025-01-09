"use strict";
(() => {
var exports = {};
exports.id = 2878;
exports.ids = [2878];
exports.modules = {

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 6936:
/***/ ((module) => {

module.exports = require("@aws-sdk/s3-request-presigner");

/***/ }),

/***/ 301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6936);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);


const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({
    region: "us-east-1",
    credentials: {
        secretAccessKey: "AQSZk6CW/y5o9HJ8UC7+Yiy4MIbPKz6Hn3pwzVeH",
        accessKeyId: "AKIAWL3PCQAVNKFFHIHB"
    }
});
async function handler(req, res) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        if ((body === null || body === void 0 ? void 0 : body.token) && (body === null || body === void 0 ? void 0 : body.ketPath)) {
            const objectParams = {
                Bucket: "dialmedevuploads",
                Key: "uploads/category/images/octqk0SfPUO99hZAk7GPfdJkWyhvsrCyuHpRhyeB.jpg",
                Expires: 900
            };
            //const url = s3.getSignedUrl("getObject", objectParams);
            if ((body === null || body === void 0 ? void 0 : body.type) && (body === null || body === void 0 ? void 0 : body.type) == "put") {
                const commandGet = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.GetObjectCommand(objectParams);
            } else {
                const commandPut = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.PutObjectCommand(bucketParams);
            }
            const url = await (0,_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_0__.getSignedUrl)(client, command, {
                expiresIn: 3600
            });
            res.status(200).json({
                url
            });
        } else {
            res.status(201).json({
                msg: "Invalid.",
                status: 201
            });
        }
    } catch (err) {
        console.log("______________________________s3-files API____________________________", err);
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
var __webpack_exports__ = (__webpack_exec__(301));
module.exports = __webpack_exports__;

})();