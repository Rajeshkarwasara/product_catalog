"use strict";
(() => {
var exports = {};
exports.id = 4085;
exports.ids = [4085];
exports.modules = {

/***/ 764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const token = body.token;
        /*var formdata = new FormData();
        formdata.append("secret", process.env.GCAPCHA_SECRET_KEY);
        formdata.append("response", token);
        */ console.log("captch-verify file");
        const resCap = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GCAPCHA_SECRET_KEY}&response=${token}`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            method: "POST"
        });
        const resJson = await resCap.json();
        console.log("captch-verify", resJson);
        if (resJson.success) {
            res.status(200).json({
                msg: "Success.",
                status: 200
            });
        } else {
            res.status(201).json({
                msg: "Invalid.",
                status: 201
            });
        }
    } catch (err) {
        console.log(err);
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
var __webpack_exports__ = (__webpack_exec__(764));
module.exports = __webpack_exports__;

})();