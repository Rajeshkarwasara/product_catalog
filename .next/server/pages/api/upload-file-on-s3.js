"use strict";
(() => {
var exports = {};
exports.id = 6142;
exports.ids = [6142];
exports.modules = {

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 6936:
/***/ ((module) => {

module.exports = require("@aws-sdk/s3-request-presigner");

/***/ }),

/***/ 2616:
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ 9932:
/***/ ((module) => {

module.exports = require("mv");

/***/ }),

/***/ 7441:
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 74:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2616);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_S3img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8365);



var mv = __webpack_require__(9932);

const config = {
    api: {
        bodyParser: false
    }
};
const saveFile = async (file)=>{
    let originalFilename = file.originalFilename;
    //get file extension from file name
    let extension = originalFilename.substring(originalFilename.lastIndexOf(".") + 1);
    let filename = file.newFilename + "." + extension;
    if (extension == "jpg" || extension == "jpeg" || extension == "png" || extension == "PNG" || extension == "webp") {
        //upload path of s3
        var s3Patch = "uploads/users/" + filename;
        //Upload image on s3
        let isUploadFile = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_2__/* .DirectUploadFileAtS3 */ .EK)(s3Patch, file.filepath);
        if (isUploadFile) {
            return {
                "code": 200,
                "filename": filename
            };
        } else {
            return {
                "code": 201,
                "msg": "Something went wrong!"
            };
        }
    } else {
        return {
            "code": 202,
            "msg": "Only jpg,jpeg,png,webp format allow"
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    let query = req.query || {};
    //console.log("CHECK", query)
    if ((query === null || query === void 0 ? void 0 : query.type) == "fetch") {
        return query.key;
    } else if (req.method == "POST") {
        const data = await new Promise((resolve, reject)=>{
            const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm();
            form.parse(req, async function(err, fields, files) {
                //console.log('Yessssssssssss====>>',err, fields, files);
                let uploadedFilename = await saveFile(files.image);
                if (uploadedFilename.code == 201 || uploadedFilename.code == 202) {
                    return res.status(200).json({
                        msg: uploadedFilename.msg,
                        status: 201
                    });
                } else {
                    return res.status(200).json({
                        msg: "Done",
                        status: 200,
                        filename: uploadedFilename.filename
                    });
                }
            });
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8365], () => (__webpack_exec__(74)));
module.exports = __webpack_exports__;

})();