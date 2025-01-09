"use strict";
(() => {
var exports = {};
exports.id = 8995;
exports.ids = [8995];
exports.modules = {

/***/ 5543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    console.log(req);
    try {
        //console.log(req)
        const originPath = req.headers["origin"];
        if (req.method == "GET" && (originPath == "http://localhost:3000" || originPath == "https://app.dialmenow.in")) {
            const forwarded = req.headers["x-forwarded-for"];
            const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        // console.log(req)
        }
    } catch (err) {
        console.log(err);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5543));
module.exports = __webpack_exports__;

})();