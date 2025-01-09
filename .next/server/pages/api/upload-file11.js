"use strict";
(() => {
var exports = {};
exports.id = 4982;
exports.ids = [4982];
exports.modules = {

/***/ 2616:
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ 9932:
/***/ ((module) => {

module.exports = require("mv");

/***/ }),

/***/ 2938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2616);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);

//import { promises as fs } from 'fs'
var mv = __webpack_require__(9932);
const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    console.log(req.method);
    console.log(req);
    const data = await new Promise((resolve, reject)=>{
        const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm();
        form.parse(req, (err, fields, files)=>{
            console.log(files, "===>>>>files");
            if (err) return reject(err);
            let originalFilename = files.myprofile.originalFilename;
            originalFilename = originalFilename.replace(/ /g, "");
            var today = new Date();
            let filename = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds() + originalFilename;
            var oldPath = files.myprofile.filepath;
            //var newPath = `/home/mt/Projects/dialmenow-frontend/public/temp/${files.myprofile.originalFilename}`;
            var newPath = `/home/mt/Projects/dialmenow-frontend/public/temp/vikram.png`;
            //store file in folder
            mv(oldPath, newPath, {
                mkdirp: true
            }, function(err) {});
            //return res.status(200).json({ fields, files })
            return res.status(200).json({
                msg: "Done",
                status: 200,
                filename: filename
            });
        });
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2938));
module.exports = __webpack_exports__;

})();