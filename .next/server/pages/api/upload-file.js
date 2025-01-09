"use strict";
(() => {
var exports = {};
exports.id = 8010;
exports.ids = [8010];
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

/***/ 9038:
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
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2212);
/* harmony import */ var _lib_S3img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8365);



var mv = __webpack_require__(9932);

const config = {
    api: {
        bodyParser: false
    }
};
const saveFile = async (file)=>{
    const data = fs.readFileSync(file.filepath);
    const todayDate = getDateTime(1);
    //make directory
    const dir = `./public/temp/${todayDate}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }
    fs.writeFileSync(`${dir}/${file.originalFilename}`, data);
    await fs.unlinkSync(file.filepath);
    return;
};
const saveFileS3 = async (file, path)=>{
    console.log(path, "-------", file.filepath);
    let isUploadFile = await (0,_lib_S3img__WEBPACK_IMPORTED_MODULE_2__/* .DirectUploadFileAtS3 */ .EK)(path, file.filepath);
    console.log("----s3----s3---------", isUploadFile);
    return isUploadFile;
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
                let imageKey = (fields === null || fields === void 0 ? void 0 : fields.imgKey) ? fields === null || fields === void 0 ? void 0 : fields.imgKey : "file";
                if (fields === null || fields === void 0 ? void 0 : fields.s3On) {
                    var filename = files[imageKey].originalFilename;
                } else {
                    let extension = files[imageKey].originalFilename.substring(files[imageKey].originalFilename.lastIndexOf(".") + 1);
                    var filename = files[imageKey].newFilename + "." + extension;
                }
                let uploadPath = (fields === null || fields === void 0 ? void 0 : fields.uploadPath) ? "uploads/" + (fields === null || fields === void 0 ? void 0 : fields.uploadPath) + filename : "";
                let resOf = await saveFileS3(files[imageKey], uploadPath);
                return res.status(200).json({
                    msg: "Done",
                    status: 200,
                    filename: filename
                });
            });
        });
    } else if (req.method == "DELETE") {
        const data = await new Promise((resolve, reject)=>{
            const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm();
            const todayDate = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__/* .getDateTime */ .Fc)(1);
            //console.log(req)
            console.log("-----method------------", req.method);
            form.parse(req, async function(err, fields, files) {
                var img = req.headers["x-img-name"];
                var filePath = `./public/temp/${todayDate}/` + img;
                if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(filePath)) {
                    fs__WEBPACK_IMPORTED_MODULE_1___default().unlinkSync(filePath);
                }
                return res.status(200).json({
                    msg: "Done",
                    status: 200,
                    filePath
                });
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
var __webpack_exports__ = __webpack_require__.X(0, [8365,2212], () => (__webpack_exec__(9038)));
module.exports = __webpack_exports__;

})();