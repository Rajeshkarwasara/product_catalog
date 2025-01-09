"use strict";
(() => {
var exports = {};
exports.id = 7948;
exports.ids = [7948];
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

/***/ 4871:
/***/ ((module) => {

module.exports = require("razorpay");

/***/ }),

/***/ 7441:
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ 5031:
/***/ ((module) => {

module.exports = require("shortid");

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

/***/ 7396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// NAMESPACE OBJECT: ./methods/UserDetails.js
var UserDetails_namespaceObject = {};
__webpack_require__.r(UserDetails_namespaceObject);
__webpack_require__.d(UserDetails_namespaceObject, {
  "Di": () => (DebitCreditUserWalletAmount),
  "jZ": () => (DeleteReview),
  "i": () => (ListingReviews),
  "lg": () => (Listings),
  "zf": () => (ReportComment),
  "_H": () => (ReportListingAbuse),
  "OO": () => (ReportListingInaccurate),
  "FW": () => (ReviewSubmit),
  "Zu": () => (UserActivePlanListing),
  "LY": () => (UserAdvertises),
  "l2": () => (UserBusinessListing),
  "xt": () => (UserDetails),
  "by": () => (UserEnquiries),
  "Vn": () => (UserFeedback),
  "Dk": () => (deleteMediaDetails),
  "uh": () => (getUserDetailsById),
  "um": () => (getUserWalletAmount),
  "tf": () => (getUserWalletHistoryListing),
  "yh": () => (updateMediaDetails)
});

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./lib/gcaptchVerify.js
async function gVerify(token) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "token": token
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/captch-verify`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if (resJson.status == 200) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
};

;// CONCATENATED MODULE: external "next-auth/jwt"
const jwt_namespaceObject = require("next-auth/jwt");
;// CONCATENATED MODULE: ./lib/middlewareAPI.js



async function middleWareAPI(req, res) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        if (req.method == "POST") {
            //return true;
            const { route  } = req.query;
            //console.log("Middle")
            //captch verification add
            // console.log("body data",req.body)
            const body = (req === null || req === void 0 ? void 0 : req.body) ? typeof req.body === "object" ? req.body : JSON.parse(req.body) : "";
            const captch = (body === null || body === void 0 ? void 0 : body.captcha) || "";
            //console.log("body data after",body)
            if (route == "login-user" || route == "login-google" || route == "login-facebook" || route == "newsletter-subscriber" || route == "partner-with-us" || route == "contact-us" || route == "get-master-module-details" || route == "faq-list" || route == "dynamic-pages-content" || route == "search-keywords" || route == "search-subcategories" || route == "verify-password" || route == "signup-details" || route == "state-wise-cities" || route == "check-mail" || route == "cities-list" || route == "categories-home" || route == "area-listing-by-city" || route == "save-free-listing" || route == "city-state-listing-by-statename" || route == "otp-verify-and-user-registration" || route == "master-package-listing" || route == "search-businesses" || route == "user-testimonials" || route == "sendotp-business" || route == "resend-otp" || route == "save-apply-job-form" || route == "check-user-already-register" || route == "guest-blogs" || route == "master-combo-package-listing" || route == "refer-details" || route == "refer-details-submit" || route == "guest-blogs-amt" || route == "refer-earn-sevices" || route == "business-check-mail" || route == "get-feedback-details" || route == "media-details-page" || route == "auto-search-subcategories" || route == "auto-search-keywords" || route == "get-user-detail-by-id" || route == "all-cities-list") {
                return true;
            }
            //routes validated with captcha
            if (route == "send-otp" && captch != "" || route == "send-otp-verify" || route == "forgot-password" || route == "submit-details-signup" || route == "otp-verify-and-user-registration" || route == "listing-report-abuse" || route == "report-comment" || route == "razorpay" && captch != "" || route == "feedbacks-submit") {
                const resRoute = await gVerify(captch);
                //console.log(resRoute, "resRoute..............")
                return resRoute;
            }
            const session = await (0,react_.getSession)({
                req
            });
            const token = await (0,jwt_namespaceObject.getToken)({
                req
            });
            //console.log("SESSION IS", session, token)
            if (session) {
                //console.log("SESSION CHEKC", session)
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log("_______________________Middelware error___________________________", err);
        return false;
    }
};

;// CONCATENATED MODULE: external "crypto-js"
const external_crypto_js_namespaceObject = require("crypto-js");
var external_crypto_js_default = /*#__PURE__*/__webpack_require__.n(external_crypto_js_namespaceObject);
// EXTERNAL MODULE: ./lib/S3img.js
var lib_S3img = __webpack_require__(8365);
// EXTERNAL MODULE: ./helper/helper.js
var helper = __webpack_require__(2212);
;// CONCATENATED MODULE: external "google-auth-library"
const external_google_auth_library_namespaceObject = require("google-auth-library");
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
;// CONCATENATED MODULE: ./helper/validation.js

const emailValidator = (email)=>{
    if (!email) {
        return "Email is required";
    } else if (!new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(email)) {
        return "Incorrect email format";
    }
    return "";
};
const urlValidator = (url)=>{
    if (!url) {
        return "Website link is required";
    } else if (!new RegExp("(http(s)?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?").test(url)) {
        return "Link is not valid";
    }
    return "";
};
const passwordValidator = (password)=>{
    if (!password) {
        return "Password is required";
    } else if (password.length < 8) {
        return "Password must have a minimum 8 characters";
    }
    return "";
};
const confirmPasswordValidator = (confirmPassword, form)=>{
    if (!confirmPassword) {
        return "Confirm password is required";
    } else if (confirmPassword.length < 8) {
        return "Confirm password must have a minimum 8 characters";
    } else if (confirmPassword !== form.password) {
        return "Passwords do not match";
    }
    return "";
};
const changePasswordFormValidate = (frm)=>{
    let errors = {};
    if (!frm.newPassword) {
        errors = {
            ...errors,
            ["newPassword"]: "Password is required."
        };
    } else if (frm.newPassword.length < 8) {
        errors = {
            ...errors,
            ["newPassword"]: "Password must have a minimum 8 characters."
        };
    } else if (frm.newPassword.length > 18) {
        errors = {
            ...errors,
            ["newPassword"]: "Password can not be greater than 18 characters."
        };
    } else if (frm.newPassword != "" && !new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/).test(frm.newPassword)) {
        errors = {
            ...errors,
            ["newPassword"]: "Password atleast have one upper case char, lower case char, digit and special char from these ! @ # $ % ^ & *"
        };
    }
    if (!frm.confirmPassword) {
        errors = {
            ...errors,
            ["confirmPassword"]: "Confirm password is required"
        };
    } else if (frm.confirmPassword.length < 8) {
        errors = {
            ...errors,
            ["confirmPassword"]: "Confirm password must have a minimum 8 characters"
        };
    } else if (frm.confirmPassword !== frm.newPassword) {
        errors = {
            ...errors,
            ["confirmPassword"]: "Passwords do not match"
        };
    }
    return errors;
};
const formValidate = (frm)=>{
    let errors = {};
    if (frm.role !== undefined && !frm.role) {
        errors = {
            ...errors,
            ["role"]: "Choose an option."
        };
    } else if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
        errors = {
            ...errors,
            ["name"]: "This field is required."
        };
    } else if (frm && frm.name && frm.name.length > 100) {
        errors = {
            ...errors,
            ["name"]: "Upto 100 characters allowed."
        };
    } else if (frm && frm.name && frm.name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.name)) {
        errors = {
            ...errors,
            ["name"]: "Only Alphanumeric allowed."
        };
    } else if (frm.email !== undefined && frm.email == "") {
        errors = {
            ...errors,
            ["email"]: "This field is required."
        };
    } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
        errors = {
            ...errors,
            ["email"]: "Invalid email format."
        };
    } else if (frm.phone !== undefined && frm.phone == "") {
        errors = {
            ...errors,
            ["phone"]: "This field is required."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
        errors = {
            ...errors,
            ["phone"]: "Only numbers allowed."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
        errors = {
            ...errors,
            ["phone"]: "10 digits numbers allowed."
        };
    } else if (frm.password !== undefined && !frm.password) {
        errors = {
            ...errors,
            ["password"]: "This field is required."
        };
    } else if (frm.password !== undefined && frm.password != "" && frm.password.length < 8) {
        errors = {
            ...errors,
            ["password"]: "Minimum 8 characters required."
        };
    } else if (frm.dob !== undefined && typeof frm.dob == "object") {
        let date = JSON.stringify(frm.dob);
        if (date == "" || date == null || date == "null") {
            errors = {
                ...errors,
                ["dob"]: "This field is required."
            };
        }
    } else if (frm.dob !== undefined && (frm.dob == "" || frm.dob === null)) {
        errors = {
            ...errors,
            ["dob"]: "This field is required."
        };
    } else if (frm.dob !== undefined && !frm.dob instanceof Date && isNaN(frm.dob)) {
        errors = {
            ...errors,
            ["dob"]: "Invalid date."
        };
    } else if (frm.address !== undefined && frm.address == "") {
        errors = {
            ...errors,
            ["address"]: "This field is required."
        };
    } else if (frm.address !== undefined && frm.address != "" && frm.address.length < 8) {
        errors = {
            ...errors,
            ["address"]: "Minimum 8 characters required."
        };
    } else if (frm && frm.address && frm.address.length > 200) {
        errors = {
            ...errors,
            ["address"]: "Upto 200 characters allowed."
        };
    } else if (frm && frm.address && frm.address != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.address)) {
        errors = {
            ...errors,
            ["address"]: "Only Alphanumeric allowed."
        };
    }
    return errors;
};
// validate the partner with us form
const partnerFormValidate = (frm, type)=>{
    let errors = {};
    if (type == 1) {
        if (frm.phone !== undefined && frm.phone == "") {
            errors = {
                ...errors,
                ["phone"]: "This field is required."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
            errors = {
                ...errors,
                ["phone"]: "Only numbers allowed."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
            errors = {
                ...errors,
                ["phone"]: "10 digits numbers allowed."
            };
        }
    } else if (type == 3) {
        if (frm.company !== undefined && (frm.company.length <= 0 || frm.company == null)) {
            errors = {
                ...errors,
                ["company"]: "This field is required."
            };
        } else if (frm && frm.company && frm.company.length > 50) {
            errors = {
                ...errors,
                ["company"]: "Upto 50 characters allowed."
            };
        } else if (frm && frm.company && frm.company != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.company)) {
            errors = {
                ...errors,
                ["company"]: "Only Alphanumeric allowed."
            };
        }
        if (frm.email !== undefined && frm.email == "") {
            errors = {
                ...errors,
                ["email"]: "This field is required."
            };
        } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
            errors = {
                ...errors,
                ["email"]: "Invalid email format."
            };
        }
        if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
            errors = {
                ...errors,
                ["name"]: "This field is required."
            };
        } else if (frm && frm.name && frm.name.length > 50) {
            errors = {
                ...errors,
                ["name"]: "Upto 50 characters allowed."
            };
        } else if (frm && frm.name && frm.name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.name)) {
            errors = {
                ...errors,
                ["name"]: "Only Alphanumeric allowed."
            };
        }
        if (frm.phone !== undefined && frm.phone == "") {
            errors = {
                ...errors,
                ["phone"]: "This field is required."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
            errors = {
                ...errors,
                ["phone"]: "Only numbers allowed."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
            errors = {
                ...errors,
                ["phone"]: "10 digits numbers allowed."
            };
        }
        if (frm.comment !== undefined && (frm.comment.length <= 0 || frm.comment == null)) {
            errors = {
                ...errors,
                ["comment"]: "This field is required."
            };
        } else if (frm && frm.comment && frm.comment.length > 1000) {
            errors = {
                ...errors,
                ["comment"]: "Upto 1000 characters allowed."
            };
        }
    }
    return errors;
};
// validate the partner with us form
const guestBlogFormValidate = (frm, type)=>{
    let errors = {};
    if (frm.company !== undefined && (frm.company.length <= 0 || frm.company == null)) {
        errors = {
            ...errors,
            ["company"]: "This field is required."
        };
    } else if (frm && frm.company && frm.company.length > 50) {
        errors = {
            ...errors,
            ["company"]: "Upto 50 characters allowed."
        };
    }
    if (frm.email !== undefined && frm.email == "") {
        errors = {
            ...errors,
            ["email"]: "This field is required."
        };
    } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
        errors = {
            ...errors,
            ["email"]: "Invalid email format."
        };
    }
    if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
        errors = {
            ...errors,
            ["name"]: "This field is required."
        };
    } else if (frm && frm.name && frm.name.length > 50) {
        errors = {
            ...errors,
            ["name"]: "Upto 50 characters allowed."
        };
    } else if (frm && frm.name && frm.name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.name)) {
        errors = {
            ...errors,
            ["name"]: "Only Alphanumeric allowed."
        };
    }
    if (frm.phone !== undefined && frm.phone == "") {
        errors = {
            ...errors,
            ["phone"]: "This field is required."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
        errors = {
            ...errors,
            ["phone"]: "Only numbers allowed."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
        errors = {
            ...errors,
            ["phone"]: "10 digits numbers allowed."
        };
    }
    if (frm.message !== undefined && (frm.message.length <= 0 || frm.message == null)) {
        errors = {
            ...errors,
            ["message"]: "This field is required."
        };
    } else if (frm && frm.message && frm.message.length > 600) {
        errors = {
            ...errors,
            ["message"]: "Upto 600 characters allowed."
        };
    } else if (frm && frm.message && frm.message.trim().length < 10) {
        errors = {
            ...errors,
            ["message"]: "Minimum 10 characters required."
        };
    }
    if (!frm.terms || frm.terms !== undefined && frm.terms == "") {
        errors = {
            ...errors,
            ["terms"]: "Terms & Policy required."
        };
    }
    return errors;
};
// validate the advertise with us form
const advertiseFormValidate = (frm)=>{
    let errors = {};
    if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
        errors = {
            ...errors,
            ["name"]: "This field is required."
        };
    } else if (frm && frm.name && frm.name.length > 50) {
        errors = {
            ...errors,
            ["name"]: "Upto 50 characters allowed."
        };
    } else if (frm && frm.name && frm.name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.name)) {
        errors = {
            ...errors,
            ["name"]: "Only Alphanumeric allowed."
        };
    }
    if (frm.phone !== undefined && frm.phone == "") {
        errors = {
            ...errors,
            ["phone"]: "This field is required."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
        errors = {
            ...errors,
            ["phone"]: "Only numbers allowed."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
        errors = {
            ...errors,
            ["phone"]: "10 digits numbers allowed."
        };
    }
    return errors;
};
// validate the partner with us form
const userProfileFormValidate = (frm)=>{
    console.log(frm, "----validation.js");
    let errors = {};
    if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
        errors = {
            ...errors,
            ["name"]: "This field is required."
        };
    } else if (frm && frm.name && frm.name.length > 50) {
        errors = {
            ...errors,
            ["name"]: "Upto 50 characters allowed."
        };
    } else if (frm && frm.name && frm.name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.name)) {
        errors = {
            ...errors,
            ["name"]: "Only Alphanumeric allowed."
        };
    }
    if (frm.email !== undefined && frm.email == "") {
        errors = {
            ...errors,
            ["email"]: "This field is required."
        };
    } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
        errors = {
            ...errors,
            ["email"]: "Invalid email format."
        };
    }
    if (frm.phone !== undefined && frm.phone == "") {
        errors = {
            ...errors,
            ["phone"]: "This field is required."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
        errors = {
            ...errors,
            ["phone"]: "Only numbers allowed."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
        errors = {
            ...errors,
            ["phone"]: "10 digits numbers allowed."
        };
    }
    console.log("dddd----", frm.address.length);
    if (frm.address !== undefined && frm.address == "") {
        errors = {
            ...errors,
            ["address"]: "This field is required."
        };
    } else if (frm.address !== undefined && frm.address != "" && frm.address.length < 8) {
        errors = {
            ...errors,
            ["address"]: "Minimum 8 characters required."
        };
    } else if (frm && frm.address && frm.address.length > 200) {
        errors = {
            ...errors,
            ["address"]: "Upto 200 characters allowed."
        };
    }
    // else if (frm && frm.address && frm.address != '' && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.address)) {
    //     errors = { ...errors, ['address']: 'Only Alphanumeric allowed.' }
    // }
    if (!frm.pincode || frm.pincode !== undefined && frm.pincode == "") {
        errors = {
            ...errors,
            ["pincode"]: "This field is required."
        };
    } else if (frm.pincode != "" && !new RegExp(/^[0-9]{6}$/).test(frm.pincode)) {
        errors = {
            ...errors,
            ["pincode"]: "Only six digits allowed."
        };
    }
    if (!frm.gender || frm.gender !== undefined && frm.gender == "") {
        errors = {
            ...errors,
            ["gender"]: "This field is required."
        };
    }
    if (!frm.occupation || frm.occupation !== undefined && frm.occupation == "") {
        errors = {
            ...errors,
            ["occupation"]: "This field is required."
        };
    }
    if (!frm.birthdate || frm.birthdate !== undefined && frm.birthdate == "") {
        errors = {
            ...errors,
            ["birthdate"]: "This field is required."
        };
    }
    // if (!frm.anniversary || (frm.anniversary !== undefined && frm.anniversary == '')) {
    //     errors = { ...errors, ['anniversary']: 'This field is required.' }
    // }
    if (!frm.city || frm.city !== undefined && frm.city == "") {
        errors = {
            ...errors,
            ["city"]: "This field is required."
        };
    }
    if (!frm.state || frm.state !== undefined && frm.state == "") {
        errors = {
            ...errors,
            ["state"]: "This field is required."
        };
    }
    return errors;
};
// validate the advertisement user profile page
const advertisementEditFormValidate = (frm)=>{
    console.log(frm, "advertisement frm");
    let errors = {};
    if (frm.per_day_amount == "" || frm.per_day_amount == null) {
        errors = {
            ...errors,
            ["per_day_amount"]: "This field is required."
        };
    } else if (frm.per_day_amount !== undefined && frm.per_day_amount != "" && frm.per_day_amount.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.per_day_amount)) {
        errors = {
            ...errors,
            ["per_day_amount"]: "Only numbers allowed."
        };
    } else if (frm.per_day_amount !== undefined && frm.per_day_amount != "" && frm.per_day_amount > frm.plan_amount) {
        errors = {
            ...errors,
            ["per_day_amount"]: "Per day amount not greater than plan amount."
        };
    }
    return errors;
};
// validate the partner with us form
const contactFormValidate = (frm)=>{
    let errors = {};
    if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
        errors = {
            ...errors,
            ["name"]: "This field is required."
        };
    } else if (frm && frm.name && frm.name.length > 50) {
        errors = {
            ...errors,
            ["name"]: "Upto 50 characters allowed."
        };
    } else if (frm && frm.name && frm.name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.name)) {
        errors = {
            ...errors,
            ["name"]: "Only Alphanumeric allowed."
        };
    }
    if (frm.email !== undefined && frm.email == "") {
        errors = {
            ...errors,
            ["email"]: "This field is required."
        };
    } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
        errors = {
            ...errors,
            ["email"]: "Invalid email format."
        };
    }
    if (frm.phone !== undefined && frm.phone == "") {
        errors = {
            ...errors,
            ["phone"]: "This field is required."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
        errors = {
            ...errors,
            ["phone"]: "Only numbers allowed."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
        errors = {
            ...errors,
            ["phone"]: "10 digits numbers allowed."
        };
    }
    if (frm.message !== undefined && frm.message == "") {
        errors = {
            ...errors,
            ["message"]: "This field is required."
        };
    }
    return errors;
};
const signupValidations = (frm)=>{
    let errors = {};
    if (!frm.name || frm.name !== undefined && (frm.name.trim().length <= 0 || frm.name.trim() == null)) {
        errors = {
            ...errors,
            ["name"]: "This field is required."
        };
    } else if (frm && frm.name && frm.name.length > 50) {
        errors = {
            ...errors,
            ["name"]: "Upto 50 characters allowed."
        };
    } else if (frm && frm.name && frm.name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.name)) {
        errors = {
            ...errors,
            ["name"]: "Only Alphanumeric allowed."
        };
    }
    if (!frm.password) {
        errors = {
            ...errors,
            ["password"]: "Password is required."
        };
    } else if (frm.password.length < 8) {
        errors = {
            ...errors,
            ["password"]: "Password must have a minimum 8 characters."
        };
    } else if (frm.password.length > 18) {
        errors = {
            ...errors,
            ["password"]: "Password can not be greater than 18 characters."
        };
    } else if (frm.password != "" && !new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/).test(frm.password)) {
        errors = {
            ...errors,
            ["password"]: "Password atleast have one upper case char, lower case char, digit and special char from these ! @ # $ % ^ & *"
        };
    }
    if (!frm.confirm_password) {
        errors = {
            ...errors,
            ["confirm_password"]: "Password is required."
        };
    } else if (frm.confirm_password.length < 8) {
        errors = {
            ...errors,
            ["confirm_password"]: "Password must have a minimum 6 characters."
        };
    } else if (frm.confirm_password.length > 18) {
        errors = {
            ...errors,
            ["confirm_password"]: "Password can not be greater than 18 characters."
        };
    } else if (frm.confirm_password != frm.password) {
        errors = {
            ...errors,
            ["confirm_password"]: "Password do not match!"
        };
    }
    if (!frm.address || frm.address !== undefined && (frm.address.length <= 0 || frm.address == null)) {
        errors = {
            ...errors,
            ["address"]: "This field is required."
        };
    } else if (frm.address !== undefined && frm.address != "" && frm.address.length < 8) {
        errors = {
            ...errors,
            ["address"]: "Minimum 8 characters required."
        };
    } else if (frm && frm.address && frm.address.length > 151) {
        errors = {
            ...errors,
            ["address"]: "Upto 150 characters allowed."
        };
    } else if (frm.address != "" && !new RegExp(/^[a-zA-Z0-9&'\s]*$/).test(frm.address)) {
        errors = {
            ...errors,
            ["address"]: "Only Alphanumeric allowed. Special characters Ampersand (&), Single quote (') allowed."
        };
    }
    if (!frm.email || frm.email !== undefined && frm.email == "") {
        errors = {
            ...errors,
            ["email"]: "This field is required."
        };
    } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
        errors = {
            ...errors,
            ["email"]: "Invalid email format."
        };
    }
    if (!frm.gender || frm.gender !== undefined && frm.gender == "") {
        errors = {
            ...errors,
            ["gender"]: "This field is required."
        };
    }
    if (!frm.occupation || frm.occupation !== undefined && frm.occupation == "") {
        errors = {
            ...errors,
            ["occupation"]: "This field is required."
        };
    }
    if (!frm.pincode || frm.pincode !== undefined && frm.pincode == "") {
        errors = {
            ...errors,
            ["pincode"]: "This field is required."
        };
    } else if (frm.pincode != "" && !new RegExp(/^[0-9]{6}$/).test(frm.pincode)) {
        errors = {
            ...errors,
            ["pincode"]: "Only six digits allowed."
        };
    }
    if (!frm.phone || frm.phone !== undefined && frm.phone == "") {
        errors = {
            ...errors,
            ["phone"]: "This field is required."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
        errors = {
            ...errors,
            ["phone"]: "10 digits numbers allowed."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && !new RegExp(/^[0-9]*$/).test(frm.phone)) {
        errors = {
            ...errors,
            ["phone"]: "Only numbers allowed."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && !new RegExp(/^[1-9][0-9]*$/).test(frm.phone)) {
        errors = {
            ...errors,
            ["phone"]: "The first digit cannot be 0."
        };
    }
    if (!frm.terms || frm.terms !== undefined && frm.terms == "") {
        errors = {
            ...errors,
            ["terms"]: "Terms & Policy required."
        };
    }
    if (!frm.city || frm.city !== undefined && frm.city == "") {
        errors = {
            ...errors,
            ["city"]: "This field is required."
        };
    }
    if (!frm.state || frm.state !== undefined && frm.state == "") {
        errors = {
            ...errors,
            ["state"]: "This field is required."
        };
    }
    return errors;
};
// validate the partner with us form
const freeListingValidate = (frm, step)=>{
    console.log(frm, "validation.js");
    let errors = {};
    if (step == "1") {
        //For Basic info form validation
        if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
            errors = {
                ...errors,
                ["name"]: "This field is required."
            };
        }
        //if (!frm.company || (frm.company !== undefined && (frm.company.length <= 0 || frm.company == null))) {
        if (!frm.company || frm.company !== undefined && frm.company == "") {
            errors = {
                ...errors,
                ["company"]: "This field is required."
            };
        } else if (frm && frm.company && frm.company.length > 50) {
            errors = {
                ...errors,
                ["company"]: "Upto 50 characters allowed."
            };
        } else if (frm && frm.company && frm.company != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.company)) {
        //errors = { ...errors, ['company']: 'Only Alphanumeric allowed.' }
        }
        if (frm.email !== undefined && frm.email == "") {
            errors = {
                ...errors,
                ["email"]: "This field is required."
            };
        } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
            errors = {
                ...errors,
                ["email"]: "Invalid email format."
            };
        }
        if (frm.phone !== undefined && frm.phone == "") {
            errors = {
                ...errors,
                ["phone"]: "This field is required."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
            errors = {
                ...errors,
                ["phone"]: "Only numbers allowed."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
            errors = {
                ...errors,
                ["phone"]: "10 digits numbers allowed."
            };
        }
        if (!frm.address || frm.address !== undefined && frm.address == "") {
            errors = {
                ...errors,
                ["address"]: "This field is required."
            };
        } else if (frm.address !== undefined && frm.address != "" && frm.address.length < 8) {
        //  errors = { ...errors, ['address']: 'Minimum 8 characters required.' }
        } else if (frm && frm.address && frm.address.length > 200) {
        //errors = { ...errors, ['address']: 'Upto 200 characters allowed.' }
        } else if (frm && frm.address && frm.address != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.address)) {
        // errors = { ...errors, ['address']: 'Only Alphanumeric allowed.' }
        }
        if (!frm.pincode || frm.pincode !== undefined && frm.pincode == "") {
            errors = {
                ...errors,
                ["pincode"]: "This field is required."
            };
        } else if (frm.pincode != "" && !new RegExp(/^[0-9]{6}$/).test(frm.pincode)) {
            errors = {
                ...errors,
                ["pincode"]: "Only six digits allowed."
            };
        }
        if (!frm.city_id || frm.city_id !== undefined && frm.city_id == "") {
            errors = {
                ...errors,
                ["city_id"]: "This field is required."
            };
        }
        console.log("frm.area", frm.area);
        if (!frm.area || frm.area !== undefined && frm.area == "") {
            errors = {
                ...errors,
                ["area"]: "This field is required."
            };
        }
        if (frm.area == "other" && (!frm.areaName || frm.areaName !== undefined && frm.areaName == "")) {
            errors = {
                ...errors,
                ["areaName"]: "This field is required."
            };
        }
        if (!frm.state_id || frm.state_id !== undefined && frm.state_id == "") {
            errors = {
                ...errors,
                ["state_id"]: "This field is required."
            };
        }
    // if (frm.landmark !== undefined && frm.landmark == '') {
    //     errors = { ...errors, ['landmark']: 'This field is required.' }
    // }
    } else if (step == 2) {
        /* if (frm.year_establishment) {
             var getYear = new Date(frm.year_establishment)
             var establishmentYear = getYear.getFullYear();
             //console.log(establishmentYear,'establishmentYear')
             if (establishmentYear !== undefined && (establishmentYear.length <= 0 || establishmentYear == null)) {
                 errors = { ...errors, ['year_establishment']: 'This field is required.' }
 
             } else if (establishmentYear && establishmentYear != '' && !new RegExp(/^[0-9]{4}$/).test(establishmentYear)) {
                 errors = { ...errors, ['year_establishment']: 'Only four digits allowed.' }
 
             }
         }*/ // if (frm.company_description !== undefined && (frm.company_description.length <= 0 || frm.company_description == null)) {
        //     errors = { ...errors, ['company_description']: 'This field is required.' }
        // } else
        if (frm && frm.company_description && frm.company_description.length > 2000) {
            errors = {
                ...errors,
                ["company_description"]: "Upto 2000 characters allowed."
            };
        }
        if (frm && frm.product_and_services && frm.product_and_services.length > 2000) {
            errors = {
                ...errors,
                ["product_and_services"]: "Upto 2000 characters allowed."
            };
        }
        // else if (frm && frm.company_description && frm.company_description != '' && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.company_description)) {
        //     errors = { ...errors, ['company_description']: 'Only Alphanumeric allowed.' }
        // }
        if (frm && frm.business_more_info && frm.business_more_info.length < 50) {
            errors = {
                ...errors,
                ["business_more_info"]: "Minimum 50 characters allowed."
            };
        } else if (frm && frm.business_more_info && frm.business_more_info.length > 200) {
            errors = {
                ...errors,
                ["business_more_info"]: "Upto 200 characters allowed."
            };
        }
        if (frm && frm.past_experience && frm.past_experience.length < 50) {
            errors = {
                ...errors,
                ["past_experience"]: "Minimum 50 characters allowed."
            };
        } else if (frm && frm.past_experience && frm.past_experience.length > 100) {
            errors = {
                ...errors,
                ["past_experience"]: "Upto 100 characters allowed."
            };
        }
        if (frm && frm.awards && frm.awards.length > 200) {
            errors = {
                ...errors,
                ["awards"]: "Upto 200 characters allowed."
            };
        }
        if (frm && frm.additional_information && frm.additional_information.length > 200) {
            errors = {
                ...errors,
                ["additional_information"]: "Upto 200 characters allowed."
            };
        }
    //company logo image
    // if (frm.company_logo == undefined || frm.company_logo == null) {
    //     errors = { ...errors, ['company_logo']: 'This field is required.' }
    // }
    } else if (step == 3) {
        var ref;
        /*
        if (!frm?.mediaImages || (frm?.mediaImages !== undefined && frm?.mediaImages?.length < 1)) {
            errors = { ...errors, ['mediaImages']: 'This field is required.' }
        }
        if (!frm?.brochure_document || (frm?.brochure_document !== undefined && frm?.brochure_document == '' && frm?.brochure_document?.length < 1)) {
            errors = { ...errors, ['brochure_document']: 'This field is required.' }
        }*/ if (((ref = frm.video_type) === null || ref === void 0 ? void 0 : ref.length) > 0 && frm.video_type !== undefined && frm.video_type != "") {
            if (!frm.video_url || frm.video_url != undefined && frm.video_url == "") {
                errors = {
                    ...errors,
                    ["video_url"]: "This field is required."
                };
            } else if (frm.video_type == "1" && !new RegExp(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/).test(frm.video_url)) {
                errors = {
                    ...errors,
                    ["video_url"]: "Invalid Link, Only Youtube links allowed."
                };
            } else if (frm.video_type == "2" && !new RegExp(/((http(s)?:\/\/)?)(www\.)?(vimeo\.com\/)[\S]+/).test(frm.video_url)) {
                errors = {
                    ...errors,
                    ["video_url"]: "Invalid Link, Only Vimeo links allowed."
                };
            }
        }
    } else if (step == 4) {
        //mobile number validation (for addmore)
        /*
        let mobileError = [];
        if (frm?.mobile) {
            {

                frm.mobile.map((mobile_number, i) => {
                    if (mobile_number?.mobile !== undefined && mobile_number?.mobile == '') {
                        mobileError[i] = 'This field is required.';
                    } else if (mobile_number?.mobile !== undefined && mobile_number?.mobile != '' && !new RegExp(/^[0-9\b]+$/).test(mobile_number?.mobile)) {
                        mobileError[i] = 'Only numbers allowed.';
                    } else if (mobile_number?.mobile !== undefined && mobile_number?.mobile.length > 1 && mobile_number?.mobile?.length != 10) {
                        mobileError[i] = '10 digits numbers allowed.';
                    }
                })
            }
        }*/ let mobileError = [];
        let emailError = [];
        if ((frm === null || frm === void 0 ? void 0 : frm.contact_p_mobile) && (frm === null || frm === void 0 ? void 0 : frm.contact_p_mobile.length) > 0) {
            // for mobile number validation
            frm.contact_p_mobile.map((mobile, i)=>{
                if (i == 0 && (!(mobile === null || mobile === void 0 ? void 0 : mobile.contact_p_mobile) || (mobile === null || mobile === void 0 ? void 0 : mobile.contact_p_mobile) == "")) {
                    mobileError[i] = "This field is required.";
                } else {
                    if ((mobile === null || mobile === void 0 ? void 0 : mobile.contact_p_mobile) !== undefined && (mobile === null || mobile === void 0 ? void 0 : mobile.contact_p_mobile) != "") {
                        var ref, ref4;
                        if (!new RegExp(/^[0-9\b]+$/).test(mobile === null || mobile === void 0 ? void 0 : mobile.contact_p_mobile)) {
                            mobileError[i] = "Only numbers allowed.";
                        } else if ((mobile === null || mobile === void 0 ? void 0 : (ref = mobile.contact_p_mobile) === null || ref === void 0 ? void 0 : ref.length) > 1 && (mobile === null || mobile === void 0 ? void 0 : (ref4 = mobile.contact_p_mobile) === null || ref4 === void 0 ? void 0 : ref4.length) != 10) {
                            mobileError[i] = "10 digits numbers allowed.";
                        }
                    }
                }
            });
        }
        if ((frm === null || frm === void 0 ? void 0 : frm.contact_p_email) && (frm === null || frm === void 0 ? void 0 : frm.contact_p_email.length) > 0) {
            // for mobile number validation
            //for email validation
            frm.contact_p_email.map((email, i)=>{
                if (i == 0 && (!(email === null || email === void 0 ? void 0 : email.contact_p_email) || (email === null || email === void 0 ? void 0 : email.contact_p_email) == "")) {
                    emailError[i] = "This field is required.";
                } else {
                    // email id
                    if ((email === null || email === void 0 ? void 0 : email.contact_p_email) !== undefined && (email === null || email === void 0 ? void 0 : email.contact_p_email) != "") {
                        if ((email === null || email === void 0 ? void 0 : email.contact_p_email) != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(email === null || email === void 0 ? void 0 : email.contact_p_email)) {
                            emailError[i] = "Invalid email format.";
                        }
                    }
                }
            });
        }
        if ((frm === null || frm === void 0 ? void 0 : frm.contact_person) && (frm === null || frm === void 0 ? void 0 : frm.contact_person.length) > 0) {
            // for mobile number validation
            frm.contact_person.map((person_detail, i)=>{
                if (i == 0 && (!(person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_mobile) || (person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_mobile) == "")) {
                    mobileError[i] = "This field is required.";
                } else {
                    if ((person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_mobile) !== undefined && (person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_mobile) != "") {
                        var ref, ref5;
                        if (!new RegExp(/^[0-9\b]+$/).test(person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_mobile)) {
                            mobileError[i] = "Only numbers allowed.";
                        } else if ((person_detail === null || person_detail === void 0 ? void 0 : (ref = person_detail.contact_p_mobile) === null || ref === void 0 ? void 0 : ref.length) > 1 && (person_detail === null || person_detail === void 0 ? void 0 : (ref5 = person_detail.contact_p_mobile) === null || ref5 === void 0 ? void 0 : ref5.length) != 10) {
                            mobileError[i] = "10 digits numbers allowed.";
                        }
                    }
                }
            });
            //for email validation
            frm.contact_person.map((person_detail, i)=>{
                if (i == 0 && (!(person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_email) || (person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_email) == "")) {
                    emailError[i] = "This field is required.";
                } else {
                    // email id
                    if ((person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_email) !== undefined && (person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_email) != "") {
                        if ((person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_email) != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(person_detail === null || person_detail === void 0 ? void 0 : person_detail.contact_p_email)) {
                            emailError[i] = "Invalid email format.";
                        }
                    }
                }
            });
        }
        if ((mobileError === null || mobileError === void 0 ? void 0 : mobileError.length) > 0) {
            errors = {
                ...errors,
                ["contact_p_mobile"]: mobileError
            };
        }
        if ((emailError === null || emailError === void 0 ? void 0 : emailError.length) > 0) {
            errors = {
                ...errors,
                ["contact_p_email"]: emailError
            };
        }
        /*
        //email validation (for addmore)
        let emailError = [];
        if (frm.contact_email) {
            frm.contact_email.map((emailObj, i) => {
                //console.log(emailObj.contact_email, 'contact_email', i)            
                if (emailObj?.contact_email !== undefined && emailObj?.contact_email == '') {
                    emailError[i] = 'This field is required.';
                } else if (emailObj?.contact_email !== undefined && emailObj?.contact_email != '' && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(emailObj?.contact_email)) {
                    emailError[i] = 'Invalid email format.';
                }
            })
        }
        if (emailError.length > 0) {
            errors = { ...errors, ['contact_email']: emailError }
        }*/ //website validation (for addmore)
        let websiteError = [];
        if (frm.website) {
            frm.website.map((websiteObj, i)=>{
                //console.log(websiteObj.website, 'website', i)
                //new RegExp(/^(ftp|http|https):\/\/[^ "]+$/)
                if (websiteObj.website != undefined && websiteObj.website != "" && !validateUrl(websiteObj.website)) {
                    websiteError[i] = "Enter valid URL..";
                }
            });
        }
        if (websiteError.length > 0) {
            errors = {
                ...errors,
                ["website"]: websiteError
            };
        }
        //social links validation (for addmore)
        let sociallinkError = [];
        if (frm.sociallink) {
            frm.sociallink.map((sociallinkObj, i)=>{
                // console.log(sociallinkObj.sociallink, 'sociallink', i)
                if (sociallinkObj.sociallink != undefined && sociallinkObj.sociallink != "" && !validateUrl(sociallinkObj.sociallink)) {
                    sociallinkError[i] = "Enter valid URL.";
                }
            });
        }
        if (sociallinkError.length > 0) {
            errors = {
                ...errors,
                ["sociallink"]: sociallinkError
            };
        }
        /*
        //For whatsup number
        if (frm.whatsapp_number !== undefined && frm.whatsapp_number == '') {
            errors = { ...errors, ['whatsapp_number']: 'This field is required.' }
        } else*/ if (frm.whatsapp_number !== undefined && frm.whatsapp_number != "" && frm.whatsapp_number.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.whatsapp_number)) {
            errors = {
                ...errors,
                ["whatsapp_number"]: "Only numbers allowed."
            };
        } else if (frm.whatsapp_number !== undefined && frm.whatsapp_number != "" && frm.whatsapp_number.length != 10) {
            errors = {
                ...errors,
                ["whatsapp_number"]: "10 digits numbers allowed."
            };
        }
        /*
        //For landline number
        if (frm.landline_number !== undefined && frm.landline_number == '') {
            errors = { ...errors, ['landline_number']: 'This field is required.' }
        }
        else*/ if (frm.landline_number !== undefined && frm.landline_number != "" && frm.landline_number.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.landline_number)) {
            errors = {
                ...errors,
                ["landline_number"]: "Only numbers allowed."
            };
        } else if (frm.landline_number !== undefined && frm.landline_number != "" && frm.landline_number.length != 10) {
            errors = {
                ...errors,
                ["landline_number"]: "10 digits numbers allowed."
            };
        }
        /*
        //For toll free number
        if (frm.toll_free_number !== undefined && frm.toll_free_number == '') {
            errors = { ...errors, ['toll_free_number']: 'This field is required.' }
        }
        else*/ if (frm.toll_free_number !== undefined && frm.toll_free_number != "" && frm.toll_free_number.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.toll_free_number)) {
            errors = {
                ...errors,
                ["toll_free_number"]: "Only numbers allowed."
            };
        } else if (frm.toll_free_number !== undefined && frm.toll_free_number != "" && frm.toll_free_number.length < 10) {
            errors = {
                ...errors,
                ["toll_free_number"]: "Minmum 10 digits numbers allowed."
            };
        } else if (frm.toll_free_number !== undefined && frm.toll_free_number != "" && frm.toll_free_number.length > 11) {
            errors = {
                ...errors,
                ["toll_free_number"]: "Maximum 11 digits numbers allowed."
            };
        }
        //for social links validation
        if (frm.facebook_link != undefined && frm.facebook_link != "" && !validateUrl(frm.facebook_link)) {
            errors = {
                ...errors,
                ["facebook_link"]: "Enter valid URL."
            };
        }
        if (frm.google_link != undefined && frm.google_link != "" && !validateUrl(frm.google_link)) {
            errors = {
                ...errors,
                ["google_link"]: "Enter valid URL."
            };
        }
        if (frm.linkedin_link != undefined && frm.linkedin_link != "" && !validateUrl(frm.linkedin_link)) {
            errors = {
                ...errors,
                ["linkedin_link"]: "Enter valid URL."
            };
        }
        if (frm.instagram_link != undefined && frm.instagram_link != "" && !validateUrl(frm.instagram_link)) {
            errors = {
                ...errors,
                ["instagram_link"]: "Enter valid URL."
            };
        }
        if (frm.twitter_link != undefined && frm.twitter_link != "" && !validateUrl(frm.twitter_link)) {
            errors = {
                ...errors,
                ["twitter_link"]: "Enter valid URL."
            };
        }
    } else if (step == 5) {
        var ref1, ref2, ref3;
        /*
         //For gst number
         if (frm.gst_number !== undefined && frm.gst_number == '') {
             errors = { ...errors, ['gst_number']: 'This field is required.' }
         }
         else if (frm.gst_number !== undefined && frm.gst_number != '' && frm.gst_number.length > 1 && !new RegExp(/^[a-zA-Z0-9]+$/).test(frm.gst_number)) {
             errors = { ...errors, ['gst_number']: 'Only alphanumbers allowed.' }
         }
         else if (frm.gst_number !== undefined && frm.gst_number != '' && frm.gst_number.length != 15) {
             errors = { ...errors, ['gst_number']: '15 digits alphanumbers allowed.' }
         }
 
         //For pancard number
         if (frm.pancard_number !== undefined && frm.pancard_number == '') {
             errors = { ...errors, ['pancard_number']: 'This field is required.' }
         }
         else if (frm.pancard_number !== undefined && frm.pancard_number != '' && frm.pancard_number.length > 1 && !new RegExp(/^[a-zA-Z0-9]+$/).test(frm.pancard_number)) {
             errors = { ...errors, ['pancard_number']: 'Only alphanumbers allowed.' }
         }
         else if (frm.pancard_number !== undefined && frm.pancard_number != '' && frm.pancard_number.length != 10) {
             errors = { ...errors, ['pancard_number']: '10 digits alphanumbers allowed.' }
         }
 
         //For registration certificate number      
         if (frm.registration_number !== undefined && frm.registration_number == '') {
             errors = { ...errors, ['registration_number']: 'This field is required.' }
         }
         else if (frm.registration_number !== undefined && frm.registration_number != '' && frm.registration_number.length > 1 && !new RegExp(/^[a-zA-Z0-9]+$/).test(frm.registration_number)) {
             errors = { ...errors, ['registration_number']: 'Only alphanumbers allowed.' }
         }
         console.log(errors, 'errors 00')*/ //For type of business
        if ((frm === null || frm === void 0 ? void 0 : frm.type_of_business) && (frm === null || frm === void 0 ? void 0 : (ref1 = frm.type_of_business) === null || ref1 === void 0 ? void 0 : ref1.length) > 5) {
            errors = {
                ...errors,
                ["type_of_business"]: "Upto 5 type of business allowed"
            };
        }
        //For subcategories
        if ((frm === null || frm === void 0 ? void 0 : frm.categories) && (frm === null || frm === void 0 ? void 0 : (ref2 = frm.categories) === null || ref2 === void 0 ? void 0 : ref2.length) > 5) {
            errors = {
                ...errors,
                ["categories"]: "Upto 5 sub categories allowed"
            };
        }
        let conflictTimeDataArray = [];
        let timeConflictError;
        let errorCount = 0;
        if ((frm === null || frm === void 0 ? void 0 : frm.daysHourslist) && (frm === null || frm === void 0 ? void 0 : (ref3 = frm.daysHourslist) === null || ref3 === void 0 ? void 0 : ref3.length) > 0) {
            frm.daysHourslist.map((daysHourslisting, keyIndex)=>{
                if (keyIndex == 0) {
                // console.log('start time', daysHourslisting.start_time, 'end time', daysHourslisting.end_time)
                // console.log('dual start time', daysHourslisting.dual_start_time, 'dual end time', daysHourslisting.dual_end_time)
                // console.log('open', daysHourslisting.open, 'close', daysHourslisting.close)
                }
                timeConflictError = 0;
                if (daysHourslisting.open == "" && daysHourslisting.open != "1" && daysHourslisting.close == "" && daysHourslisting.close != "1") {
                    if (daysHourslisting.start_time == "" || daysHourslisting.end_time == "") {
                        timeConflictError = 6;
                    } else {
                        if (daysHourslisting.start_time > daysHourslisting.end_time) {
                            timeConflictError = 1;
                        }
                        if (daysHourslisting.is_dual == "1" && daysHourslisting.dual_start_time != "" && daysHourslisting.dual_end_time != "") {
                            if (daysHourslisting.dual_start_time > daysHourslisting.dual_end_time) {
                                timeConflictError = 1;
                            } else if (daysHourslisting.start_time <= daysHourslisting.dual_start_time && daysHourslisting.dual_start_time <= daysHourslisting.end_time) {
                                //check dual start time conflict from start and end time
                                timeConflictError = 2;
                            } else if (daysHourslisting.start_time <= daysHourslisting.dual_end_time && daysHourslisting.dual_end_time <= daysHourslisting.end_time) {
                                //check dual end time conflict from start and end time
                                timeConflictError = 3;
                            } else if (daysHourslisting.dual_start_time <= daysHourslisting.start_time && daysHourslisting.start_time <= daysHourslisting.dual_end_time) {
                                //check start time conflict from dual start time and dual end time
                                timeConflictError = 4;
                            } else if (daysHourslisting.dual_start_time <= daysHourslisting.end_time && daysHourslisting.end_time <= daysHourslisting.dual_end_time) {
                                //check end time conflict from dual start time and dual end time
                                timeConflictError = 5;
                            }
                        } else if (daysHourslisting.is_dual == "1") {
                            timeConflictError = 7;
                        }
                    }
                    //set time conflict error message
                    if (timeConflictError) {
                        errorCount++;
                        if (timeConflictError == 6) {
                            conflictTimeDataArray.push({
                                error: daysHourslisting.value + "Time Filed is requared ",
                                found: 1
                            });
                        } else if (timeConflictError == 7) {
                            conflictTimeDataArray.push({
                                error: daysHourslisting.value + "Dual Time Filed is required because your dual time field is open",
                                found: 1
                            });
                        } else {
                            conflictTimeDataArray.push({
                                error: daysHourslisting.value + "Time is conflict.",
                                found: 1
                            });
                        }
                    } else {
                        conflictTimeDataArray.push({
                            error: "",
                            found: 0
                        });
                    }
                }
            });
            if (errorCount > 0) {
                errors = {
                    ...errors,
                    ["daysHourslist"]: conflictTimeDataArray
                };
            }
        }
    }
    console.log("errors---", errors);
    return errors;
};
function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}
// validate the advertise with us form
const advertiseWithUsValidate = (frm, step)=>{
    console.log(frm, " validation.js");
    let errors = {};
    if (step == "1") {
        //For Basic info form validation
        if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
            errors = {
                ...errors,
                ["name"]: "This field is required."
            };
        }
        if (frm.company !== undefined && (frm.company.length <= 0 || frm.company == null)) {
            errors = {
                ...errors,
                ["company"]: "This field is required."
            };
        } else if (frm && frm.company && frm.company.length > 50) {
            errors = {
                ...errors,
                ["company"]: "Upto 50 characters allowed."
            };
        } else if (frm && frm.company && frm.company != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.company)) {
        // errors = { ...errors, ['company']: 'Only Alphanumeric allowed.' }
        }
        if (frm.email !== undefined && frm.email == "") {
            errors = {
                ...errors,
                ["email"]: "This field is required."
            };
        } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
            errors = {
                ...errors,
                ["email"]: "Invalid email format."
            };
        }
        if (frm.phone !== undefined && frm.phone == "") {
            errors = {
                ...errors,
                ["phone"]: "This field is required."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.phone)) {
            errors = {
                ...errors,
                ["phone"]: "Only numbers allowed."
            };
        } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
            errors = {
                ...errors,
                ["phone"]: "10 digits numbers allowed."
            };
        }
        if (!frm.city_id || frm.city_id !== undefined && frm.city_id == "") {
            errors = {
                ...errors,
                ["city_id"]: "This field is required."
            };
        }
        if (!frm.categories || frm.categories !== undefined && frm.categories == "") {
            errors = {
                ...errors,
                ["categories"]: "This field is required."
            };
        }
    } else if (step == 2) {
        if (frm.redirectValue == "" || frm.redirectValue == null) {
            errors = {
                ...errors,
                ["redirectValue"]: "This field is required."
            };
        } else if (frm.redirect == "2" && !new RegExp("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?").test(frm.redirectValue)) {
            errors = {
                ...errors,
                ["redirectValue"]: "Please enter valid url."
            };
        } else if (frm.redirect == "1" && frm.redirectValue.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.redirectValue)) {
            errors = {
                ...errors,
                ["redirectValue"]: "Only numbers allowed."
            };
        } else if (frm.redirect == "1" && frm.redirectValue != "" && frm.redirectValue.length != 10) {
            errors = {
                ...errors,
                ["redirectValue"]: "10 digits numbers allowed."
            };
        }
        //banner image
        if (frm.banner_image == undefined || frm.banner_image == null) {
        //  errors = { ...errors, ['banner_image']: 'This field is required.' }
        }
    } else if (step == 3) {
        var ref, ref6;
        if ((frm === null || frm === void 0 ? void 0 : (ref = frm.new_package) === null || ref === void 0 ? void 0 : ref.type) == 1 || (frm === null || frm === void 0 ? void 0 : (ref6 = frm.new_package) === null || ref6 === void 0 ? void 0 : ref6.type) == 2) {
            const package_amount = (frm === null || frm === void 0 ? void 0 : frm.new_package.offer_amount) ? frm === null || frm === void 0 ? void 0 : frm.new_package.offer_amount : frm === null || frm === void 0 ? void 0 : frm.new_package.amount;
            if (frm.per_day_amount == "" || frm.per_day_amount == null) {
                errors = {
                    ...errors,
                    ["per_day_amount"]: "This field is required."
                };
            } else if (frm.per_day_amount !== undefined && frm.per_day_amount != "" && frm.per_day_amount.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.per_day_amount)) {
                errors = {
                    ...errors,
                    ["per_day_amount"]: "Only numbers allowed."
                };
            } else if (frm.per_day_amount !== undefined && frm.per_day_amount != "" && frm.per_day_amount > package_amount) {
                errors = {
                    ...errors,
                    ["per_day_amount"]: "Per day amount not greater than plan amount."
                };
            }
        }
    }
    return errors;
};
const editBusinessBasicDetailsValid = (frm)=>{
    //console.log(frm, 'validation.js');
    let errors = {};
    if (frm.name !== undefined && (frm.name.length <= 0 || frm.name == null)) {
        errors = {
            ...errors,
            ["name"]: "This field is required."
        };
    }
    if (frm.business_name !== undefined && (frm.business_name.length <= 0 || frm.business_name == null)) {
        errors = {
            ...errors,
            ["business_name"]: "This field is required."
        };
    } else if (frm && frm.business_name && frm.business_name.length > 50) {
        errors = {
            ...errors,
            ["business_name"]: "Upto 50 characters allowed."
        };
    } else if (frm && frm.business_name && frm.business_name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.business_name)) {
        errors = {
            ...errors,
            ["business_name"]: "Only Alphanumeric allowed."
        };
    }
    if (frm.address !== undefined && frm.address == "") {
        errors = {
            ...errors,
            ["address"]: "This field is required."
        };
    } else if (frm.address !== undefined && frm.address != "" && frm.address.length < 8) {
        errors = {
            ...errors,
            ["address"]: "Minimum 8 characters required."
        };
    } else if (frm && frm.address && frm.address.length > 200) {
        errors = {
            ...errors,
            ["address"]: "Upto 200 characters allowed."
        };
    } else if (frm && frm.address && frm.address != "" && !new RegExp(/^[a-zA-Z0-9,\s]*$/).test(frm.address)) {
        errors = {
            ...errors,
            ["address"]: "Only Alphanumeric allowed."
        };
    }
    if (!frm.pincode || frm.pincode !== undefined && frm.pincode == "") {
        errors = {
            ...errors,
            ["pincode"]: "This field is required."
        };
    } else if (frm.pincode != "" && !new RegExp(/^[0-9]{6}$/).test(frm.pincode)) {
        errors = {
            ...errors,
            ["pincode"]: "Only six digits allowed."
        };
    }
    if (!frm.city || frm.city !== undefined && frm.city == "") {
        errors = {
            ...errors,
            ["city"]: "This field is required."
        };
    }
    if (!frm.area || frm.area !== undefined && frm.area == "") {
        errors = {
            ...errors,
            ["area"]: "This field is required."
        };
    }
    if (!frm.state || frm.state !== undefined && frm.state == "") {
        errors = {
            ...errors,
            ["state"]: "This field is required."
        };
    }
    return errors;
};
const editBusinessCompanyDetailsValid = (frm)=>{
    console.log(frm, "validation.js");
    let errors = {};
    if (frm.year_establish) {
        var getYear = new Date(frm.year_establish);
        var establishmentYear = getYear.getFullYear();
        //console.log(establishmentYear,'establishmentYear')
        if (establishmentYear && establishmentYear != "" && !new RegExp(/^[0-9]{4}$/).test(establishmentYear)) {
            errors = {
                ...errors,
                ["year_establish"]: "Only four digits allowed."
            };
        }
    }
    if (frm && (frm === null || frm === void 0 ? void 0 : frm.description) && (frm === null || frm === void 0 ? void 0 : frm.description.length) > 2000) {
        errors = {
            ...errors,
            ["description"]: "Upto 2000 characters allowed."
        };
    }
    if (frm && (frm === null || frm === void 0 ? void 0 : frm.more_desc) && (frm === null || frm === void 0 ? void 0 : frm.more_desc.length) > 2000) {
        errors = {
            ...errors,
            ["more_desc"]: "Upto 2000 characters allowed."
        };
    }
    if (frm && (frm === null || frm === void 0 ? void 0 : frm.association) && (frm === null || frm === void 0 ? void 0 : frm.association.length) > 2000) {
        errors = {
            ...errors,
            ["association"]: "Upto 2000 characters allowed."
        };
    }
    if (frm && (frm === null || frm === void 0 ? void 0 : frm.expreience) && (frm === null || frm === void 0 ? void 0 : frm.expreience.length) > 2000) {
        errors = {
            ...errors,
            ["expreience"]: "Upto 2000 characters allowed."
        };
    }
    if (frm && (frm === null || frm === void 0 ? void 0 : frm.awards) && (frm === null || frm === void 0 ? void 0 : frm.awards.length) > 200) {
        errors = {
            ...errors,
            ["awards"]: "Upto 200 characters allowed."
        };
    }
    if (frm && (frm === null || frm === void 0 ? void 0 : frm.addi_info) && (frm === null || frm === void 0 ? void 0 : frm.addi_info.length) > 2000) {
        errors = {
            ...errors,
            ["addi_info"]: "Upto 2000 characters allowed."
        };
    }
    if (frm && (frm === null || frm === void 0 ? void 0 : frm.product_and_services) && (frm === null || frm === void 0 ? void 0 : frm.product_and_services.length) > 2000) {
        errors = {
            ...errors,
            ["product_and_services"]: "Upto 2000 characters allowed."
        };
    }
    return errors;
};
const ReviewAndPayValidation = (frm)=>{
    console.log(frm, "validation.js");
    let errors = {};
    if (!frm.name || frm.name !== undefined && (frm.name.trim().length <= 0 || frm.name.trim() == null)) {
        errors = {
            ...errors,
            ["name"]: "This field is required."
        };
    } else if (frm && frm.name && frm.name.length > 50) {
        errors = {
            ...errors,
            ["name"]: "Upto 50 characters allowed."
        };
    } else if (frm && frm.name && frm.name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.name)) {
        errors = {
            ...errors,
            ["name"]: "Only Alphanumeric allowed."
        };
    }
    //For mobile number
    if (!frm.phone || frm.phone !== undefined && frm.phone == "") {
        errors = {
            ...errors,
            ["phone"]: "This field is required."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
        errors = {
            ...errors,
            ["phone"]: "10 digits numbers allowed."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && !new RegExp(/^[0-9]*$/).test(frm.phone)) {
        errors = {
            ...errors,
            ["phone"]: "Only numbers allowed."
        };
    }
    //for email
    if (!frm.email || frm.email !== undefined && frm.email == "") {
        errors = {
            ...errors,
            ["email"]: "This field is required."
        };
    } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
        errors = {
            ...errors,
            ["email"]: "Invalid email format."
        };
    }
    return errors;
};
const ApplyForJobValidation = (frm)=>{
    console.log(frm, "validation.js");
    let errors = {};
    if (!frm.name || frm.name !== undefined && (frm.name.trim().length <= 0 || frm.name.trim() == null)) {
        errors = {
            ...errors,
            ["name"]: "This field is required."
        };
    } else if (frm && frm.name && frm.name.length > 50) {
        errors = {
            ...errors,
            ["name"]: "Upto 50 characters allowed."
        };
    } else if (frm && frm.name && frm.name != "" && !new RegExp(/^[a-zA-Z0-9\s]*$/).test(frm.name)) {
        errors = {
            ...errors,
            ["name"]: "Only Alphanumeric allowed."
        };
    }
    //For mobile number
    if (!frm.phone || frm.phone !== undefined && frm.phone == "") {
        errors = {
            ...errors,
            ["phone"]: "This field is required."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && frm.phone.length != 10) {
        errors = {
            ...errors,
            ["phone"]: "10 digits numbers allowed."
        };
    } else if (frm.phone !== undefined && frm.phone != "" && !new RegExp(/^[0-9]*$/).test(frm.phone)) {
        errors = {
            ...errors,
            ["phone"]: "Only numbers allowed."
        };
    }
    //for email
    if (!frm.email || frm.email !== undefined && frm.email == "") {
        errors = {
            ...errors,
            ["email"]: "This field is required."
        };
    } else if (frm && frm.email && frm.email != "" && !new RegExp(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/).test(frm.email)) {
        errors = {
            ...errors,
            ["email"]: "Invalid email format."
        };
    }
    if (!frm.date_of_birth || frm.date_of_birth !== undefined && frm.date_of_birth == "") {
        errors = {
            ...errors,
            ["date_of_birth"]: "This field is required."
        };
    }
    //for year_of_experience
    if (!frm.year_of_experience || frm.year_of_experience !== undefined && frm.year_of_experience == "") {
        errors = {
            ...errors,
            ["year_of_experience"]: "This field is required."
        };
    }
    return errors;
};
const addMoneyFormValidate = (frm)=>{
    let errors = {};
    if (!frm.amount || frm.amount !== undefined && (frm.amount.trim().length <= 0 || frm.amount.trim() == null)) {
        errors = {
            ...errors,
            ["amount"]: "This field is required."
        };
    } else if (frm.amount !== undefined && frm.amount != "" && frm.amount.length > 1 && !new RegExp(/^[0-9\b]+$/).test(frm.amount)) {
        errors = {
            ...errors,
            ["amount"]: "Only numbers allowed."
        };
    }
    return errors;
};

;// CONCATENATED MODULE: ./methods/Login.js







const client = new external_google_auth_library_namespaceObject.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
async function UserLogin(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const email = body.username || "";
        const password = body.password || "";
        var current_datetime = (0,helper/* getDateTime */.Fc)();
        if (email != "" && password != "") {
            const records = await db.query("SELECT id,name,mobile,is_verify_email,is_verify_mob,email,password,image FROM users WHERE is_active='1' AND deleted_at IS NULL AND email=?", [
                email
            ]);
            await db.end();
            if (records.length > 0) {
                // const encrptPass = encryptID(password);
                //const passVerify = decryptID(records[0].password, encrptPass);
                const encrptPass = external_crypto_js_default().MD5(password);
                const passVerify = records[0].password;
                console.log("MATCH____", encrptPass.toString(), "     ", passVerify);
                if (passVerify == encrptPass.toString()) {
                    var ref;
                    var date = new Date();
                    var str = date + email + records[0].id;
                    var loginToken = encryptID(str);
                    loginToken = loginToken.toString();
                    //console.log("===> " + loginToken)
                    const updateRe = await db.query("UPDATE users SET login_token=?,last_login=? WHERE id=?", [
                        loginToken,
                        current_datetime,
                        records[0].id
                    ]);
                    await db.end();
                    let mobVerify = records[0].is_verify_mob == "1" ? true : false;
                    let mailVerify = records[0].is_verify_email == "1" ? true : false;
                    let imagePath = await (0,lib_S3img/* S3img */.y9)((ref = records[0]) === null || ref === void 0 ? void 0 : ref.image, "uploads/users/");
                    return {
                        id: records[0].id,
                        email: records[0].email,
                        name: records[0].name,
                        user_token: loginToken,
                        phone: records[0].mobile,
                        is_verified_mob: mobVerify,
                        is_verfied_email: mailVerify,
                        image: imagePath
                    };
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
async function GoogleLogin(db, req) {
    try {
        const details = client.verifyIdToken({
            idToken: req.body.access_token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        //console.log("PRINTING=============")
        var current_datetime = (0,helper/* getDateTime */.Fc)();
        var gData = (await details).getPayload();
        console.log("---inside API----GLOGIN----", gData);
        if (gData) {
            const records = await db.query("SELECT id,name,mobile,is_verify_email,is_verify_mob,email,image FROM users WHERE is_active='1' AND deleted_at IS NULL AND email=?", [
                gData.email
            ]);
            await db.end();
            if (records.length > 0) {
                // user registered in
                var checkGID = await db.query("SELECT google_login_id FROM users WHERE id=?", [
                    records[0].id
                ]);
                if (checkGID.lenght > 0) {
                    var ref;
                    //return response
                    var date = new Date();
                    var str = date + records[0].email + records[0].id;
                    var loginToken = encryptID(str);
                    loginToken = loginToken.toString();
                    const updateRe = await db.query("UPDATE users SET login_token=?,is_verify_email='1',last_login=? WHERE id=?", [
                        loginToken,
                        current_datetime,
                        records[0].id
                    ]);
                    await db.end();
                    let imagePath = await (0,lib_S3img/* S3img */.y9)((ref = records[0]) === null || ref === void 0 ? void 0 : ref.image, "uploads/users/");
                    return {
                        id: records[0].id,
                        email: records[0].email,
                        name: records[0].name,
                        user_token: loginToken,
                        phone: records[0].mobile,
                        is_verified_mob: records[0].is_verify_mob,
                        is_verfied_email: true,
                        image: imagePath
                    };
                } else {
                    var ref1;
                    //update google ID
                    const updateGoogle = await db.query("UPDATE users SET google_login_id=?,is_verify_email='1' WHERE id=?", [
                        gData.sub,
                        records[0].id
                    ]);
                    var date = new Date();
                    var str = date + records[0].email + records[0].id;
                    var loginToken = encryptID(str);
                    loginToken = loginToken.toString();
                    const updateRe = await db.query("UPDATE users SET login_token=?,last_login=? WHERE id=?", [
                        loginToken,
                        current_datetime,
                        records[0].id
                    ]);
                    await db.end();
                    let imagePath = await (0,lib_S3img/* S3img */.y9)((ref1 = records[0]) === null || ref1 === void 0 ? void 0 : ref1.image, "uploads/users/");
                    return {
                        id: records[0].id,
                        email: records[0].email,
                        name: records[0].name,
                        user_token: loginToken,
                        phone: records[0].mobile,
                        is_verified_mob: records[0].is_verify_mob,
                        is_verfied_email: true,
                        image: imagePath
                    };
                }
            } else {
                //new user
                //insert record
                let newRecord = await db.query("INSERT INTO users SET name=?,email=?,is_verify_email='1',is_verify_mob='0',google_login_id=?,is_active='1',created_at=?,last_login=?", [
                    gData.name,
                    gData.email,
                    gData.sub,
                    current_datetime,
                    current_datetime, 
                ]);
                if (newRecord.affectedRows > 0) {
                    let imagePath = await (0,lib_S3img/* S3img */.y9)(null, "uploads/users/");
                    return {
                        id: newRecord.insertId,
                        email: gData.email,
                        name: gData.name,
                        user_token: gData.sub,
                        phone: "",
                        is_verified_mob: false,
                        is_verfied_email: true,
                        image: imagePath
                    };
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log("Error in Google Login API-------------------------------------", err);
        return fasle;
    }
}
async function FacebookLogin(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const name = (body === null || body === void 0 ? void 0 : body.name) || null;
        const email = body.email || null;
        const fbID = body.id || null;
        //console.log("INSIDE API==================================")
        // console.log(body)
        //check mail ID
        var current_datetime = (0,helper/* getDateTime */.Fc)();
        let checkMail = email ? await db.query("SELECT id,deleted_at,is_active,is_verify_mob,is_verify_email,name,email,mobile,image FROM users WHERE email=? OR facebook_login_id=?", [
            email,
            fbID
        ]) : await db.query("SELECT id,deleted_at,is_active FROM users WHERE  facebook_login_id=?", [
            fbID
        ]);
        var str = current_datetime + email + fbID;
        var loginToken = encryptID(str);
        loginToken = loginToken.toString();
        if (checkMail.length > 0) {
            //already have accont
            if (checkMail[0].is_active == "1" && checkMail[0].deleted_at == null) {
                var ref;
                //login success
                let imagePath = await (0,lib_S3img/* S3img */.y9)((ref = checkMail[0]) === null || ref === void 0 ? void 0 : ref.image, "uploads/users/");
                return {
                    status: 200,
                    msg: "Login successfully.",
                    data: {
                        id: checkMail[0].id,
                        email: checkMail[0].email,
                        name: checkMail[0].name,
                        user_token: loginToken,
                        phone: checkMail[0].mobile,
                        is_verified_mob: checkMail[0].is_verify_mob,
                        is_verfied_email: checkMail[0].is_verify_email
                    },
                    image: imagePath
                };
            } else {
                //inactive
                return {
                    status: 201,
                    msg: "Your account is inactive. Please contact us at our mail."
                };
            }
        } else {
            let verifyMail = email ? "1" : "0";
            //insert Data and create new login
            let insertData = await db.query("INSERT INTO users SET name=?,email=?,facebook_login_id=?,is_verify_email=?,login_token=?,last_login=?,is_active='1',created_at=?", [
                name,
                email,
                fbID,
                verifyMail,
                loginToken,
                current_datetime,
                current_datetime, 
            ]);
            if ((insertData === null || insertData === void 0 ? void 0 : insertData.insertId) > 0) {
                //login success
                let imagePath = null;
                return {
                    status: 200,
                    msg: "Login successfully.",
                    data: {
                        id: insertData === null || insertData === void 0 ? void 0 : insertData.insertId,
                        email: email,
                        name: name,
                        user_token: loginToken,
                        phone: "",
                        is_verified_mob: false,
                        is_verfied_email: email ? true : false,
                        image: imagePath
                    }
                };
            } else {
                //errro
                return {
                    status: 201,
                    msg: "Something went wrong. Please try after sometime."
                };
            }
        }
    } catch (err) {
        return {
            status: 201,
            msg: "Something went wrong. Please try after sometime."
        };
    }
}
async function OtpSend(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const phone = body.phone || "";
        const type = (body === null || body === void 0 ? void 0 : body.type) || "phone";
        // console.log("INSIDE API==================================")
        // console.log(body)
        let phoneNum = body.phone || "";
        const receiverPhone = "+91" + phoneNum;
        const signinStatus = body.signin || "";
        let current_datetime = (0,helper/* getDateTime */.Fc)();
        //console.log(signinStatus + "   --->")
        if (type == "mail") {
            let otpIS = await db.query("SELECT otpGen(?) as otp", [
                phoneNum
            ]);
            if ((otpIS === null || otpIS === void 0 ? void 0 : otpIS.length) > 0) {
                let insertOTP = await db.query("INSERT INTO emails_otp SET email=?,otp=?,time=?", [
                    phoneNum,
                    otpIS[0].otp,
                    current_datetime
                ]);
                //get OTP template
                let getTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id='22'");
                var emailval = getTemplate[0].description;
                var mapObj = {
                    "@user_otp": otpIS[0].otp,
                    "@logo": process.env.BASE_URL + "/logo/dialmenow_email.png"
                };
                emailval = emailval.replace(/@user_otp|@logo/gi, function(matched) {
                    return mapObj[matched];
                });
                const subject = getTemplate[0].title;
                //insert into OTP template
                const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                    subject,
                    emailval,
                    phoneNum,
                    current_datetime
                ]);
                return {
                    status: 200,
                    msg: "OTP sent. Please check your mail."
                };
            } else {
                return {
                    status: 201,
                    msg: "OTP not sent. Please try after sometime."
                };
            }
            console.log("-----", insertOTP);
        } else if (signinStatus) {
            //check user details with phone number
            let userDetails = await db.query("SELECT id FROM users WHERE mobile=? AND is_active='1' AND deleted_at IS NULL", [
                phoneNum
            ]);
            //  console.log("   --->")
            //  console.log(userDetails)
            if (userDetails.length > 0) {
                let OTPstatus = await sendOTPphone(db, "+91" + phoneNum);
                if (OTPstatus) {
                    return {
                        status: 200,
                        msg: "OTP sent."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "OTP not sent. Please try after sometime."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "You are not registered with us. Please signup."
                };
            }
        } else {
            let OTPstatus = await sendOTPphone(db, "+91" + phoneNum);
            if (OTPstatus) {
                return {
                    status: 200,
                    msg: "OTP sent."
                };
            } else {
                return {
                    status: 201,
                    msg: "OTP not sent. Please try after sometime."
                };
            }
        }
    } catch (err) {
        console.log("OtpSend---", err);
        return false;
    }
}
async function sendOTPphone(db, phone = "", otp = "") {
    try {
        let justPhone = phone.replace("+91", "");
        //check OTP send in last 20 min if greater then 5 then STOP OTP
        let current_datetime = (0,helper/* getDateTime */.Fc)();
        let insertOTP = await db.query("INSERT INTO sms_otp_logs SET phone=?,otp=otpGenPhone(?),created_at=?", [
            justPhone,
            justPhone,
            current_datetime
        ]);
        if (insertOTP === null || insertOTP === void 0 ? void 0 : insertOTP.insertId) {
            let otp = await db.query("SELECT otp FROM sms_otp_logs WHERE id=?", [
                insertOTP === null || insertOTP === void 0 ? void 0 : insertOTP.insertId, 
            ]);
            let templateID = "1407167350837480457";
            let template = encodeURIComponent("Thank you for using Dial Me Now. Use " + otp[0].otp + " as your OTP. OTP is confidential and valid for 10 min. www.dialmenow.in Feel free to call us on 9252392523");
            const APIpath = "http://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=" + phone + "&sms=" + template + "&tempid=" + templateID;
            const resOTP = await fetch(APIpath);
            if (resOTP.status != "undefined" && resOTP.status == 200) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
async function OtpSendVerify(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const signinStatus = body.signin || "";
        const acPhone = body.phone || "";
        const receiverPhone = "+91" + acPhone;
        const receiverOTP = body.otp;
        const receiverUser = body.user || "";
        const pertnerWithUs = body.pertnerWithUs || "";
        const isFromFreeListing = body.isFromFreeListing || false; //vs its use for free listing forms
        const type = (body === null || body === void 0 ? void 0 : body.type) || "";
        let currentTime = (0,helper/* getDateTime */.Fc)();
        const session = await (0,react_.getSession)({
            req
        });
        const optCheck = await db.query("SELECT id,phone FROM sms_otp_logs WHERE phone=? AND otp=? AND status='0' AND TIMESTAMPDIFF(MINUTE, created_at, ?) <= 10", [
            acPhone,
            receiverOTP,
            currentTime
        ]);
        //update OTP status
        if (optCheck === null || optCheck === void 0 ? void 0 : optCheck.length) {
            db.query("UPDATE sms_otp_logs SET status='1' WHERE id=?", [
                optCheck[0].id, 
            ]);
            db.query("UPDATE sms_otp_logs SET status='2' WHERE phone=? AND TIMESTAMPDIFF(MINUTE, created_at, ?) >= 10", [
                acPhone,
                currentTime
            ]);
        }
        let otpStatus = optCheck.length > 0 && optCheck[0].phone == acPhone ? true : false;
        if (isFromFreeListing) {
            if (otpStatus) {
                return true;
            } else {
                return false;
            }
        } else if (type != "" && type == "changePassword") {
            if (session && session.user.id > 0 && otpStatus) {
                return true;
            } else {
                return false;
            }
        } else if (pertnerWithUs) {
            if (otpStatus) {
                return true;
            } else {
                return false;
            }
        } else {
            if (signinStatus == "true" || signinStatus == true) {
                //checkin signin
                var recordDetails = await db.query("SELECT id,name,mobile,is_verify_email,is_verify_mob,email,image FROM users WHERE is_active='1' AND deleted_at IS NULL AND mobile=?", [
                    acPhone
                ]);
                console.log("recordDetails signinStatus   ", acPhone, recordDetails);
            } else {
                var recordDetails = await db.query("SELECT id,name,mobile,is_verify_email,is_verify_mob,email,image FROM users WHERE is_active='1' AND deleted_at IS NULL AND id=?", [
                    receiverUser
                ]);
                console.log("recordDetails    ", recordDetails);
            }
            let records = await recordDetails;
            if (records.length > 0) {
                if (otpStatus) {
                    //check phone already exists or not
                    let phoneExist = await db.query("SELECT id FROM users WHERE mobile=? AND is_verify_mob='1'", [
                        acPhone
                    ]);
                    if ((phoneExist === null || phoneExist === void 0 ? void 0 : phoneExist.length) > 1) {
                        return {
                            status: 201,
                            msg: "You can not use this number. Use a different number or contact to admin."
                        };
                    } else {
                        //update not verified mobiles
                        await db.query("UPDATE users SET mobile=NULL WHERE mobile=? AND is_verify_mob='0'", [
                            acPhone
                        ]);
                        //update records
                        let resUp = await db.query("UPDATE users SET is_verify_mob='1',mobile=? WHERE id=?", [
                            acPhone,
                            receiverUser
                        ]);
                        if (resUp) {
                            if (signinStatus || (body === null || body === void 0 ? void 0 : body.reLoadSess) == true || (body === null || body === void 0 ? void 0 : body.reLoadSess) == "true") {
                                var ref;
                                var date = new Date();
                                var str = date + records[0].email + records[0].id;
                                var loginToken = encryptID(str);
                                loginToken = loginToken.toString();
                                const updateRe = await db.query("UPDATE users SET login_token=? WHERE id=?", [
                                    loginToken,
                                    records[0].id
                                ]);
                                await db.end();
                                let mobVerify = true;
                                let mailVerify = records[0].is_verify_email == "1" ? true : false;
                                let imagePath = await (0,lib_S3img/* S3img */.y9)((ref = records[0]) === null || ref === void 0 ? void 0 : ref.image, "uploads/users/");
                                return {
                                    id: records[0].id,
                                    email: records[0].email,
                                    name: records[0].name,
                                    user_token: loginToken,
                                    phone: acPhone,
                                    is_verified_mob: mobVerify,
                                    is_verfied_email: mailVerify,
                                    image: imagePath
                                };
                            } else {
                                //update session at here
                                //console.log(session)
                                session.user.is_verified_mob = true;
                                //console.log(session)
                                return true;
                            }
                        } else {
                            return {
                                status: 201,
                                msg: "Please try after sometime."
                            };
                        }
                    }
                }
            } else {
                if (signinStatus) {
                    return {
                        status: 201,
                        msg: "You are not registered with us. Please signup."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "Please try after sometime."
                    };
                }
            }
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
async function verifyOTPuser(db, acPhone, receiverOTP) {
    let currentTime = (0,helper/* getDateTime */.Fc)();
    const optCheck = await db.query("SELECT id,phone FROM sms_otp_logs WHERE phone=? AND otp=? AND status='0' AND TIMESTAMPDIFF(MINUTE, created_at, ?) <= 10", [
        acPhone,
        receiverOTP,
        currentTime
    ]);
    //update OTP status
    if (optCheck === null || optCheck === void 0 ? void 0 : optCheck.length) {
        db.query("UPDATE sms_otp_logs SET status='1' WHERE id=?", [
            optCheck[0].id
        ]);
        db.query("UPDATE sms_otp_logs SET status='2' WHERE phone=? AND TIMESTAMPDIFF(MINUTE, created_at, ?) >= 10", [
            acPhone,
            currentTime
        ]);
    }
    let otpStatus = optCheck.length > 0 && optCheck[0].phone == acPhone ? true : false;
    return otpStatus;
}
async function VerifyOtpBusiness(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const phoneNum = body.phone || "";
        const phoneWithCode = "+91" + phoneNum;
        const userOTP = body.otp || "";
        const businessID = body.business_id || "";
        const type = (body === null || body === void 0 ? void 0 : body.type) || "";
        const pkID = body.pkID || "";
        const verifyEmailType = (body === null || body === void 0 ? void 0 : body.verifyEmailType) || "";
        let dataTypeReq = (body === null || body === void 0 ? void 0 : body.dataType) || "phone";
        const is_primary = ((body === null || body === void 0 ? void 0 : body.is_pm) ? "1" : "0") || "0";
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && businessID) {
            // only login user can check
            let dataTypeNaming = {
                phone: "Phone number",
                email: "Email address",
                social: "Social record",
                website: "Website link",
                mail: "Email Address"
            };
            let dataTypeID = {
                mail: "2",
                phone: "1",
                email: "2",
                website: "3"
            };
            let dataType = dataTypeID[dataTypeReq];
            let typeText = dataTypeNaming[dataTypeReq];
            if (type == "remove" && pkID) {
                console.log("__________console______________", dataType, type, pkID, body);
                let recordUpdate = "";
                //delete record
                if (dataTypeReq == "social") {
                    console.log("status-----------INSODE");
                    recordUpdate = await db.query("DELETE FROM business_social_links WHERE id=? AND business_id=?", [
                        pkID,
                        businessID
                    ]);
                    console.log("status-----------", recordUpdate);
                } else {
                    recordUpdate = await db.query("DELETE FROM business_mobile_emails WHERE id=? AND business_id=?", [
                        pkID,
                        businessID
                    ]);
                }
                return {
                    status: 200,
                    msg: "Record deleted successfully."
                };
            } else {
                console.log(phoneNum, " ==== ", businessID, " ==== ", pkID, "=======", is_primary, "------", dataType);
                //verify OTP
                let otpResponse = dataType == "1" ? await sendOTPphone(db, "+91" + phoneNum) : await checkMailOtp(phoneNum, userOTP, db);
                if (otpResponse) {
                    console.log("OTP status------------", otpResponse);
                    if (pkID && !pkID.toString().includes("new")) {
                        //update phone number and verified
                        if (dataType == "2") {
                            //email
                            if (verifyEmailType == "userEmail") {
                                let recordUpdate = await db.query("UPDATE users SET is_verify_email='1' WHERE id=? ", [
                                    pkID
                                ]);
                            } else {
                                let recordUpdate = await db.query("UPDATE business_mobile_emails SET email=?,is_verified='1' WHERE id=? AND business_id=?", [
                                    phoneNum,
                                    pkID,
                                    businessID
                                ]);
                            }
                        }
                        if (dataType == "1") {
                            console.log("Caling inside in");
                            //phone
                            let recordUpdate = await db.query("UPDATE business_mobile_emails SET phone=?,is_verified_phone='1' WHERE id=? AND business_id=?", [
                                phoneNum,
                                pkID,
                                businessID
                            ]);
                        }
                        return {
                            status: 200,
                            msg: typeText + " verified successfully."
                        };
                    } else {
                        //add phone number /email and verified
                        let recordUpdate = await db.query("INSERT INTO business_mobile_emails SET text=? ,type=?,is_verified='1',business_id=?,is_primary=?", [
                            phoneNum,
                            dataType,
                            businessID,
                            is_primary
                        ]);
                        return {
                            status: 200,
                            msg: typeText + " verified successfully."
                        };
                    }
                } else {
                    return {
                        status: 201,
                        msg: "Invalid OTP."
                    };
                }
            }
        } else {
            return {
                status: 201,
                msg: "Invalid OTP."
            };
        }
    } catch (err) {
        console.log("Verify otp Business API error______________", err);
        return {
            status: 201,
            msg: "Something went wrong."
        };
    }
}
async function checkMailOtp(mail, otp, db) {
    let record = await db.query("UPDATE emails_otp SET status='1' WHERE email=? AND otp=? AND status='0'", [
        mail,
        otp
    ]);
    if ((record === null || record === void 0 ? void 0 : record.affectedRows) > 0) {
        return true;
    } else {
        return false;
    }
//console.log(record, "-----record-record---")
}
async function ForgotPassword(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const phone = body.phone || "";
        let mail = body.email || "";
        if (mail) {
            var records = await db.query("SELECT id,name,email,mobile FROM users WHERE is_active='1' AND deleted_at IS NULL AND email=?", [
                mail
            ]);
            if (records.length > 0) {
                const current_datetime = (0,helper/* getDateTime */.Fc)();
                const keyUrl = encryptID(current_datetime + records[0].id);
                let keyVal = external_jsonwebtoken_default().sign({
                    data: keyUrl.toString()
                }, process.env.SECRET_KEYID, {
                    expiresIn: "24h"
                });
                //update remember token
                await db.query("UPDATE users SET remember_token=? WHERE id=?", [
                    keyVal,
                    records[0].id, 
                ]);
                // send the email to the admin
                const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                    "2"
                ]);
                var emailval = adminTemplate[0].description;
                var basrURL = process.env.BASE_URL + "/reset-password/" + encodeURI(keyVal);
                var mapObj = {
                    "@name": records[0].name,
                    "@company": "Dailmenow",
                    "@url": basrURL,
                    "@logo": ""
                };
                emailval = emailval.replace(/@name|@company|@url|@logo/gi, function(matched) {
                    return mapObj[matched];
                });
                const subject = adminTemplate[0].title;
                const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                    subject,
                    emailval,
                    records[0].email,
                    current_datetime
                ]);
                await db.end();
                return {
                    status: 200,
                    msg: "Mail sent successfully.",
                    urlForgot: basrURL,
                    mobile: records[0].mobile || "",
                    name: records[0].name || ""
                };
            } else {
                return {
                    status: 201,
                    msg: "You are not registered with us. Please signup."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Invalid email address."
            };
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
async function ChangePassword(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const user_id = body.user_id || "";
        let password = body.newPassword || "";
        if (user_id) {
            //update password
            var Encryptpassword = external_crypto_js_default().MD5(password).toString();
            await db.query("UPDATE users SET password=? WHERE id=?", [
                Encryptpassword,
                user_id, 
            ]);
            return {
                status: 200,
                msg: "Password change successfully."
            };
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
async function VerifyPassword(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        if (body.is_verify) {
            let codeVerify = body.code || "";
            //var decoded = jwt.verify(codeVerify, process.env.SECRET_KEYID);
            var records = await db.query("SELECT id,name,email FROM users WHERE is_active='1' AND deleted_at IS NULL AND remember_token=?", [
                codeVerify
            ]);
            console.log("_______________", records);
            if (records.length > 0) {
                return {
                    status: 200,
                    msg: "Ok"
                };
            } else {
                return {
                    status: 201,
                    msg: "Link is expired or invalid."
                };
            }
        } else {
            let newPass = body.new_pass || "";
            let newconfirm = body.confirm || "";
            let codeVerify = body.code || "";
            // console.log(body)
            // var decoded = jwt.verify(codeVerify, process.env.SECRET_KEYID);
            // console.log(decoded)
            if (newPass != "" && newconfirm == newconfirm) {
                var records = await db.query("SELECT id,name,email FROM users WHERE is_active='1' AND deleted_at IS NULL AND remember_token=?", [
                    codeVerify
                ]);
                if (records.length > 0) {
                    var password = external_crypto_js_default().MD5(newPass).toString();
                    await db.query("UPDATE users SET password=?,remember_token=NULL WHERE id=?", [
                        password,
                        records[0].id
                    ]);
                    return {
                        status: 200,
                        msg: "Password updated successfully."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "Link is expired or invalid."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "Password do not match!"
                };
            }
        }
    } catch (err) {
        console.log("___________________VerifyPassword API_________________", err);
        return false;
    }
}
async function SignBasicDetails(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        var occupations = await db.query("SELECT id,name FROM master_occupations WHERE is_active='1' AND deleted_at IS NULL ORDER BY id ASC");
        var states = await db.query("SELECT id,name FROM master_states WHERE is_active='1' AND deleted_at IS NULL ORDER BY name ASC");
        await db.end();
        //console.log(states)
        return {
            occupetion: occupations,
            state: states
        };
    } catch (err) {
        return false;
    }
}
async function SubmitSignUp(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        if (body.form && body.captcha) {
            var password = external_crypto_js_default().MD5(body.form.password);
            password = password.toString();
            var current_datetime = (0,helper/* getDateTime */.Fc)();
            var validate = signupValidations(body.form);
            if (Object.entries(validate).length <= 0) {
                //check already exists
                var checkQu = await db.query("SELECT id FROM users WHERE (mobile=? OR email=?) AND deleted_at IS NULL", [
                    body.form.phone,
                    body.form.email
                ]);
                if (checkQu.length > 0) {
                    return {
                        status: 201,
                        msg: "You are already registered with us. Please try to signin."
                    };
                } else {
                    // console.log(body.form)
                    var gender, dob, aod;
                    gender = dob = aod = null;
                    if (body.form.gender.toLowerCase() == "male") {
                        gender = "1";
                    } else if (body.form.gender.toLowerCase() == "female") {
                        gender = "2";
                    } else if (body.form.gender.toLowerCase() == "other") {
                        gender = "3";
                    }
                    if (body.form.dob != "") {
                        dob = (0,helper/* getDateTime */.Fc)("1", body.form.dob);
                    }
                    if (body.form.aod != "") {
                        aod = (0,helper/* getDateTime */.Fc)("1", body.form.aod);
                    }
                    var whatapp = "0";
                    if (body.form.whatsapp == "undefined" || body.form.whatsapp == null || body.form.whatsapp == "" || body.form.whatsapp == "false" || !body.form.whatsapp) {
                        whatapp = "0";
                    } else {
                        whatapp = "1";
                    }
                    const qu = await db.query("INSERT INTO users SET name=?,email=?,password=?,mobile=?,sex=?,dob=?,date_of_anniversary=?,address=?,city_id=?,state_id=?,pincode=?,occupation=?,is_whatsapp_updated=?,is_active='1',created_at=?,created_by_id=0", [
                        body.form.name,
                        body.form.email,
                        password,
                        body.form.phone,
                        gender,
                        dob,
                        aod,
                        body.form.address,
                        body.form.city,
                        body.form.state,
                        body.form.pincode,
                        body.form.occupation,
                        whatapp,
                        current_datetime, 
                    ]);
                    //console.log(qu)
                    if (qu.affectedRows > 0 && qu.insertId > 0) {
                        //send Mail
                        let keyVal = external_jsonwebtoken_default().sign({
                            data: {
                                id: qu.insertId,
                                email: body.form.email
                            }
                        }, process.env.SECRET_KEYID);
                        /*********Insert Registration Mail********************/ const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                            "5"
                        ]);
                        var emailval = adminTemplate[0].description;
                        var basrURL = process.env.BASE_URL + "/verify-mail/" + encodeURI(keyVal);
                        var mapObj = {
                            "@name": body.form.name,
                            "@company": "Dailmenow",
                            "@link": basrURL,
                            "@email": body.form.email,
                            "@password": body.form.password
                        };
                        emailval = emailval.replace(/@name|@company|@link|@email|@password/gi, function(matched) {
                            return mapObj[matched];
                        });
                        const subject = adminTemplate[0].title;
                        const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                            subject,
                            emailval,
                            body.form.email,
                            current_datetime
                        ]);
                        await db.end();
                        /*********END Insert Registration Mail********************/ return {
                            status: 200,
                            msg: "You are registered with us successfully. Please verify your email."
                        };
                    } else {
                        return {
                            status: 201,
                            msg: "Something went wrong. Try after some time."
                        };
                    }
                }
            } else {
                return {
                    status: 201,
                    msg: "* fields are required."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Something went wrong. Try after some time."
            };
        }
    } catch (err) {
        //  console.log(err)
        return {
            status: 201,
            msg: "Something went wrong. Try after some time."
        };
    }
}
async function VerifyMail(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        if (body.is_verify) {
            let codeVerify = body.code || "";
            try {
                var ref, ref2;
                var decoded = external_jsonwebtoken_default().verify(codeVerify, process.env.SECRET_KEYID);
                //console.log("DECODED DATA", decoded)
                var id = (decoded === null || decoded === void 0 ? void 0 : (ref = decoded.data) === null || ref === void 0 ? void 0 : ref.id) || "";
                var email = (decoded === null || decoded === void 0 ? void 0 : (ref2 = decoded.data) === null || ref2 === void 0 ? void 0 : ref2.email) || "";
                if (id != "" && id !== "undefined" && email) {
                    //console.log(id)
                    var records = [];
                    var records = await db.query("SELECT id,name,email,is_verify_email FROM users WHERE is_active='1' AND deleted_at IS NULL AND id=? AND email=?", [
                        id,
                        email
                    ]);
                    //console.log("RECORDS ======> ",records)
                    if (records.length > 0 && records[0].is_verify_email != "1") {
                        await db.query("UPDATE users SET is_verify_email='1' WHERE id=?", [
                            records[0].id, 
                        ]);
                        return {
                            status: 200,
                            msg: "Mail verified successfully."
                        };
                    } else if (records.length > 0 && records[0].is_verify_email == "1") {
                        return {
                            status: 200,
                            msg: "Mail already verified."
                        };
                    } else {
                        return {
                            status: 201,
                            msg: "Link is expired or invalid."
                        };
                    }
                } else {
                    return {
                        status: 201,
                        msg: "Link is expired or invalid."
                    };
                }
            } catch (errD) {
                console.log(errD);
                return {
                    status: 201,
                    msg: "Link is expired or invalid."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Link is expired or invalid."
            };
        }
    } catch (err) {
        console.log(err);
        return {
            status: 201,
            msg: "Link is expired or invalid."
        };
    }
}
async function BusinessVerifyMail(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        console.log("-------log of ----------", body);
        if (body.is_verify) {
            let codeVerify = body.code || "";
            try {
                var ref, ref3;
                var decoded = external_jsonwebtoken_default().verify(codeVerify, process.env.SECRET_KEYID);
                var id = (decoded === null || decoded === void 0 ? void 0 : (ref = decoded.data) === null || ref === void 0 ? void 0 : ref.id) || "";
                var email = (decoded === null || decoded === void 0 ? void 0 : (ref3 = decoded.data) === null || ref3 === void 0 ? void 0 : ref3.email) || "";
                if (id != "" && id !== "undefined" && email) {
                    //console.log(id)
                    var records = [];
                    var records = await db.query("SELECT id,is_verified FROM business_mobile_emails WHERE type='2' AND business_id=? AND text=?", [
                        id,
                        email
                    ]);
                    //console.log("RECORDS ======> ",records)
                    if (records.length > 0 && records[0].is_verified != "1") {
                        await db.query("UPDATE business_mobile_emails SET is_verified='1' WHERE id=?", [
                            records[0].id
                        ]);
                        return {
                            status: 200,
                            msg: "Mail verified successfully."
                        };
                    } else if (records.length > 0 && records[0].is_verified == "1") {
                        return {
                            status: 200,
                            msg: "Mail already verified."
                        };
                    } else {
                        return {
                            status: 201,
                            msg: "Link is expired or invalid."
                        };
                    }
                } else {
                    return {
                        status: 201,
                        msg: "Link is expired or invalid."
                    };
                }
            } catch (errD) {
                console.log(errD);
                return {
                    status: 201,
                    msg: "Link is expired or invalid."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Link is expired or invalid."
            };
        }
    } catch (err) {
        console.log(err);
        return {
            status: 201,
            msg: "Link is expired or invalid."
        };
    }
}
function encryptID(str) {
    const ciphertext = external_crypto_js_default().HmacSHA256(str, process.env.SECRET_KEYID);
    return ciphertext;
}
function decryptID(str, val) {
    if (str == val) {
        return true;
    }
    return false;
}
async function OtpVerifyAndUserRegistration(db, req, res) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //   console.log("deeksha")
        // console.log(body)
        // const phone = body.phone || '';
        // const signinStatus = body.signin || '';
        // const acPhone = body.phone || '';
        // const receiverPhone = '+91' + acPhone;
        let phoneNum = body.phone || "";
        let email = body.email || "";
        const receiverOTP = body.otp;
        const formdata = JSON.parse(body.formdata);
        let optStatus = await verifyOTPuser(db, phoneNum, receiverOTP);
        //  console.log(receiverOTP)
        if (optStatus) {
            //    console.log("hello")
            //check user already register or not with phone number and email address
            let checkAlreadyExist = await db.query("SELECT id,mobile FROM users WHERE (mobile=? OR email=?) AND deleted_at IS NULL", [
                phoneNum,
                email
            ]);
            // already register
            //  console.log(checkAlreadyExist)
            if (checkAlreadyExist.length > 0) {
                const user_id = checkAlreadyExist[0].id;
                const records = await db.query("SELECT id,name,mobile,is_verify_email,is_verify_mob,email,password,image FROM users WHERE is_active='1' AND deleted_at IS NULL AND id=?", [
                    user_id
                ]);
                await db.end();
                if (records.length > 0) {
                    var ref;
                    var date = new Date();
                    var str = date + records[0].email + records[0].id;
                    var loginToken = encryptID(str);
                    loginToken = loginToken.toString();
                    const updateRe = await db.query("UPDATE users SET login_token=? WHERE id=?", [
                        loginToken,
                        records[0].id
                    ]);
                    if (phoneNum) {
                        const updateRe = db.query("UPDATE users SET is_verify_mob='1',mobile=? WHERE id=?", [
                            phoneNum,
                            records[0].id
                        ]);
                    }
                    await db.end();
                    let mobVerify = true;
                    let mailVerify = records[0].is_verify_email == "1" ? true : false;
                    let imagePath = await (0,lib_S3img/* S3img */.y9)((ref = records[0]) === null || ref === void 0 ? void 0 : ref.image, "uploads/users/");
                    return {
                        id: records[0].id,
                        email: records[0].email,
                        name: records[0].name,
                        user_token: loginToken,
                        phone: records[0].mobile,
                        is_verified_mob: mobVerify,
                        is_verfied_email: mailVerify,
                        image: imagePath
                    };
                } else {
                    return false;
                }
            } else {
                // register the user
                const user_id = await userRegistration(db, formdata);
                if (user_id && user_id > 0) {
                    const records = await db.query("SELECT id,name,mobile,is_verify_email,is_verify_mob,email,password,image FROM users WHERE is_active='1' AND deleted_at IS NULL AND id=?", [
                        user_id
                    ]);
                    await db.end();
                    if (records.length > 0) {
                        var ref4;
                        var date = new Date();
                        var str = date + records[0].email + records[0].id;
                        var loginToken = encryptID(str);
                        loginToken = loginToken.toString();
                        const updateRe = await db.query("UPDATE users SET login_token=? WHERE id=?", [
                            loginToken,
                            records[0].id
                        ]);
                        if (phoneNum) {
                            const updateRe = db.query("UPDATE users SET is_verify_mob='1',mobile=? WHERE id=?", [
                                phoneNum,
                                records[0].id
                            ]);
                        }
                        await db.end();
                        let mobVerify = true;
                        let mailVerify = records[0].is_verify_email == "1" ? true : false;
                        let imagePath = await (0,lib_S3img/* S3img */.y9)((ref4 = records[0]) === null || ref4 === void 0 ? void 0 : ref4.image, "uploads/users/");
                        return {
                            id: records[0].id,
                            email: records[0].email,
                            name: records[0].name,
                            user_token: loginToken,
                            phone: records[0].mobile,
                            is_verified_mob: mobVerify,
                            is_verfied_email: mailVerify,
                            image: imagePath
                        };
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
async function userRegistration(db, argu) {
    if (argu.user_id == 0 || argu.user_id === undefined) {
        const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
        //generate 8 digit password
        const generatedPassword = (0,helper/* generatePassword */.F2)(8);
        var password = external_crypto_js_default().MD5(generatedPassword).toString();
        const userRegistrationQuery = await db.query("INSERT INTO users SET name=?,email=?,is_verify_email='0',password=?,mobile=?,address=?,city_id=?,state_id=?,pincode=?,is_verify_mob='1',is_active='1',created_at=?,created_by_id=0", [
            argu.name,
            argu.email,
            password,
            argu.phone,
            argu.address,
            argu.city_id,
            argu.state_id,
            argu.pincode,
            current_datetime, 
        ]);
        if (userRegistrationQuery.affectedRows > 0 && userRegistrationQuery.insertId > 0) {
            //send Mail
            if (argu.email) {
                let keyVal = external_jsonwebtoken_default().sign({
                    sub: {
                        id: userRegistrationQuery.insertId,
                        email: argu.email
                    }
                }, process.env.SECRET_KEYID);
                /*********Insert Registration Mail********************/ const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                    "5"
                ]);
                var emailval = adminTemplate[0].description;
                var basrURL = process.env.BASE_URL + "/verify-mail/" + encodeURI(keyVal);
                var mapObj = {
                    "@name": argu.name,
                    "@company": "Dailmenow",
                    "@link": basrURL,
                    "@email": argu.email,
                    "@password": generatedPassword
                };
                emailval = emailval.replace(/@name|@company|@link|@email|@password/gi, function(matched) {
                    return mapObj[matched];
                });
                const subject = adminTemplate[0].title;
                const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                    subject,
                    emailval,
                    argu.email,
                    current_datetime
                ]);
            }
            return userRegistrationQuery.insertId;
        } else {
            return 0;
        }
    } else {
        return argu.user_id;
    }
}
async function ResendOTPcommon(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let businessID = body.businessID || "";
        let userID = body.userID || "";
        let phone = body.phone || "";
        if (phone) {
            // received phone number then send OTP to this Phone
            let status = await sendOTPphone(db, "+91" + phone);
            if (status) {
                return {
                    status: 200,
                    msg: "OTP resent successfully."
                };
            } else {
                return {
                    status: 201,
                    msg: "OTP send failed."
                };
            }
        } else if (businessID) {
            let details = await db.query("SELECT m.id,e.phone as mobile FROM businesses m LEFT JOIN business_mobile_emails e ON e.business_id = m.id AND e.type='5' AND e.is_primary = '1' WHERE m.id = ? LIMIT 1", [
                businessID
            ]);
            if ((details === null || details === void 0 ? void 0 : details.length) > 0 && details[0].mobile) {
                let status = await sendOTPphone(db, "+91" + details[0].mobile);
                if (status) {
                    return {
                        status: 200,
                        msg: "OTP resent successfully."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "OTP send failed."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "OTP send failed."
                };
            }
        } else if (userID) {
            let details = await db.query("SELECT mobile,id from users WHERE id=?", [
                userID, 
            ]);
            if ((details === null || details === void 0 ? void 0 : details.length) > 0) {
                let status = await sendOTPphone(db, "+91" + details[0].mobile);
                if (status) {
                    return {
                        status: 200,
                        msg: "OTP resent successfully."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "OTP send failed."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "OTP send failed."
                };
            }
        } else {
            return {
                status: 201,
                msg: "OTP send failed."
            };
        }
    } catch (err) {
        console.log("______________________Login Method__________________________", err);
        return {
            status: 201,
            msg: "OTP send failed."
        };
    }
}

;// CONCATENATED MODULE: ./methods/Newsletter.js

async function UserNewsSubscriber(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const email = body.email || "";
    console.log("INSIDE API==================================");
    if (email != "") {
        const records = await db.query("SELECT id FROM newsletter_subscribers WHERE email=?", [
            email
        ]);
        await db.end();
        if (records.length > 0) {
            return {
                "code": 401
            };
        } else {
            const current_datetime = (0,helper/* getDateTime */.Fc)();
            const updateRe = await db.query("INSERT INTO `newsletter_subscribers`(`ip_address`, `email`,`created_at`) VALUES (?,?,?)", [
                ip,
                email,
                current_datetime
            ]);
            await db.end();
            return true;
        }
    } else {
        return false;
    }
}

;// CONCATENATED MODULE: ./methods/PartnerWithUs.js

async function UserPartnerWithUs(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const email = body.email || "";
    const name = body.name || "";
    const phone = body.phone || "";
    const company = body.company || "";
    const service = body.service || "";
    const comment = body.comment || "";
    console.log(body);
    if (email != "" && name != "" && phone != "" && company != "" && service != "" && comment != "") {
        // const records = await db.query("SELECT id FROM business_partner_with_us WHERE email=? OR phone=?", [email,phone]);
        // await db.end();
        // if (records.length > 0) {
        //   console.log("if")
        //     return { "code": 401};
        // }
        // else
        // {
        // console.log("else")
        // insert the data for the pertner with us
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        const updateRe = await db.query("INSERT INTO `business_partner_with_us`(`company_name`, `name`, `email`, `phone`,`service`, `created_at`,`comment`) VALUES (?,?,?,?,?,?,?)", [
            company,
            name,
            email,
            phone,
            service,
            current_datetime,
            comment
        ]);
        await db.end();
        // send the email to the admin
        const setting = await db.query("SELECT admin_email as email,company_name FROM setting_company WHERE id=?", [
            "1"
        ]);
        const adminTemplate = await db.query("SELECT description FROM master_email_template WHERE id=?", [
            "3"
        ]);
        var emailval = adminTemplate[0].description;
        const temp = "Name :- " + name + " Email :- " + email + " Phone :- " + phone + " Company Name :- " + company;
        var mapObj = {
            "@": "",
            title: "Partner With US",
            detail: temp,
            company: setting[0].company_name
        };
        emailval = emailval.replace(/@|title|detail|company/gi, function(matched) {
            return mapObj[matched];
        });
        const subject = "Partner With Us request from " + name;
        const adminEmail = setting[0].email;
        const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
            subject,
            emailval,
            adminEmail,
            current_datetime
        ]);
        await db.end();
        // send the email to the user
        const userTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
            "4"
        ]);
        var userEmailval = userTemplate[0].description;
        var userSubject = userTemplate[0].title;
        var mapObj = {
            "@": "",
            name: name,
            company: setting[0].company_name
        };
        userEmailval = userEmailval.replace(/@|name|company/gi, function(matched) {
            return mapObj[matched];
        });
        userSubject = userSubject.replace(/@|name/gi, function(matched) {
            return mapObj[matched];
        });
        const insertUserEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
            userSubject,
            userEmailval,
            email,
            current_datetime
        ]);
        await db.end();
        return true;
    //}
    } else {
        return false;
    }
}

;// CONCATENATED MODULE: ./methods/UserContactUs.js

async function ContactUs(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const email = body.email || "";
    const name = body.name || "";
    const phone = body.phone || "";
    const message = body.message || "";
    if (email != "" && name != "" && phone != "" && message != "") {
        // insert the data for the pertner with us
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        const updateRe = await db.query("INSERT INTO `web_contact_us`(`name`, `email`, `phone`, `comment`, `created_at`) VALUES (?,?,?,?,?)", [
            name,
            email,
            phone,
            message,
            current_datetime
        ]);
        await db.end();
        // send the email to the admin 
        const setting = await db.query("SELECT admin_email as email FROM setting_company WHERE id=?", [
            "1"
        ]);
        const adminTemplate = await db.query("SELECT description FROM master_email_template WHERE id=?", [
            "9"
        ]);
        var emailval = adminTemplate[0].description;
        var mapObj = {
            "@user": name,
            "@uemail": email,
            "@uphone": phone,
            "@umsg": message
        };
        emailval = emailval.replace(/@user|@uemail|@uphone|@umsg/gi, function(matched) {
            return mapObj[matched];
        });
        const subject = "Contact Us request from " + name;
        const adminEmail = setting[0].email;
        const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
            subject,
            emailval,
            adminEmail,
            current_datetime
        ]);
        await db.end();
        // send the email to the user 
        const userTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
            "10"
        ]);
        var userEmailval = userTemplate[0].description;
        var userSubject = userTemplate[0].title;
        var mapObj = {
            "@name": name
        };
        userEmailval = userEmailval.replace(/@name/gi, function(matched) {
            return mapObj[matched];
        });
        userSubject = userSubject.replace(/@name/gi, function(matched) {
            return mapObj[matched];
        });
        const insertUserEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
            userSubject,
            userEmailval,
            email,
            current_datetime
        ]);
        await db.end();
        return true;
    } else {
        return false;
    }
}

;// CONCATENATED MODULE: ./methods/FAQ.js


async function FAQ(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const categoryId = body.categoryId || "";
    if (categoryId != "") {
        var category = await db.query("SELECT id,name,icon FROM master_faq_categories WHERE is_active='1' AND deleted_at IS NULL AND id=? order by sort asc", [
            categoryId
        ]);
        var categoryOption = await db.query("SELECT id,question,answer FROM master_web_faqs  WHERE is_active='1' AND master_web_faqs.deleted_at IS NULL  AND category_id=? order by sort asc", [
            categoryId
        ]);
        if (categoryOption.length > 0) {
            var faqImage = await (0,lib_S3img/* S3img */.y9)(category[0].icon, "uploads/faq/category/", true);
            var data = {
                id: category[0].id,
                label: category[0].name,
                icon: faqImage,
                options: categoryOption
            };
        }
        return {
            "faq": data
        };
    } else {
        var category = await db.query("SELECT id,name,icon FROM master_faq_categories WHERE is_active='1' AND deleted_at IS NULL order by sort asc");
        var arr = [];
        for(var i = 0; i < category.length; i++){
            var categoryOption = await db.query("SELECT id,question,answer FROM master_web_faqs  WHERE is_active='1' AND master_web_faqs.deleted_at IS NULL  AND category_id=? order by sort asc", [
                category[i].id
            ]);
            if (categoryOption.length > 0) {
                var faqImage = await (0,lib_S3img/* S3img */.y9)(category[i].icon, "uploads/faq/category/", true);
                var data = {
                    id: category[i].id,
                    label: category[i].name,
                    icon: faqImage,
                    options: categoryOption
                };
                arr.push(data);
            }
        }
        return {
            "faq": arr
        };
    }
}

;// CONCATENATED MODULE: ./methods/DynamicPagesContent.js

async function DynamicPagesContent(db, req) {
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    let PageUrl = body.dynamic_pages || "";
    if (PageUrl != "" && PageUrl !== "undefined") {
        var records = [];
        var records = await db.query("SELECT title,description,meta_title,meta_keyword,meta_description,page_slug FROM master_pages WHERE status='1' AND deleted_at IS NULL AND page_slug=?", [
            PageUrl
        ]);
        if (records.length > 0) {
            return {
                "pages": records
            };
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: ./methods/razorpayPayment.js
const Razorpay = __webpack_require__(4871);
const shortid = __webpack_require__(5031);
const razorpay = new Razorpay({
    key_id: "rzp_test_SzdPFKi5MgcYYh",
    key_secret: process.env.RAZORPAY_KEY_SECRET
});
async function razorpayPayment(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    let amount = body.plan_amount || "";
    console.log("Amt is -------", amount);
    if (amount) {
        amount = parseFloat(amount);
        const payment_capture = 1;
        const currency = "INR";
        let payAmount = amount;
        //remove decimal amount     
        payAmount = parseInt(payAmount.toFixed(2).toString().replace(".", ""));
        const options = {
            amount: payAmount,
            currency,
            receipt: shortid.generate(),
            payment_capture
        };
        try {
            const response = await razorpay.orders.create(options);
            return {
                "status": 200,
                "id": response.id,
                "currency": response.currency,
                "amount": response.amount
            };
        } catch (error) {
            //console.log('error--->>>',error)
            return false;
        }
    } else {
        return false;
    }
}
async function razorpayPaymentDetails(db, paymentId) {
    try {
        const paymentDetails = await razorpay.payments.fetch(paymentId);
        if (paymentDetails === null || paymentDetails === void 0 ? void 0 : paymentDetails.method) {
            let id = await db.query("SELECT id FROM master_payment_modes WHERE LOWER(name) =?", [
                paymentDetails === null || paymentDetails === void 0 ? void 0 : paymentDetails.method.toLowerCase()
            ]);
            if ((id === null || id === void 0 ? void 0 : id.length) > 0) {
                paymentDetails.method_id = id[0].id;
                return paymentDetails;
            } else {
                let insertRecord = await db.query("INSERT INTO master_payment_modes SET name=?,type='1',is_active='1'", [
                    paymentDetails === null || paymentDetails === void 0 ? void 0 : paymentDetails.method
                ]);
                paymentDetails.method_id = insertRecord.insertId;
                return paymentDetails;
            }
        } else {
            return paymentDetails;
        }
    } catch (error) {
        return null;
    }
}

;// CONCATENATED MODULE: ./methods/CreateFreeListing.js








async function GetMasterTableDetails(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    var typeofbusiness = await db.query("SELECT id as value,name as label FROM master_type_of_business WHERE is_active='1' AND deleted_at IS NULL");
    var modeofpayment = await db.query("SELECT id as value,name as label FROM master_payment_modes WHERE is_active='1' AND type='0' ORDER BY name ASC");
    var category = await db.query("SELECT id,name FROM master_categories WHERE is_active='1' AND deleted_at IS NULL order by sort asc");
    var cities = await db.query("SELECT id,name FROM master_cities WHERE is_active='1' AND deleted_at IS NULL order by name asc");
    var arr = [];
    for(var i = 0; i < category.length; i++){
        var categoryOption = await db.query("SELECT id as value,name as label,category_id FROM master_sub_categories WHERE is_active='1' AND deleted_at IS NULL AND category_id=? order by sort asc", [
            category[i].id
        ]);
        if (categoryOption.length > 0) {
            var data = {
                label: category[i].name,
                options: categoryOption
            };
            arr.push(data);
        }
    }
    return {
        typeofbusiness: typeofbusiness,
        modeofpayment: modeofpayment,
        subcategory: arr,
        cities: cities
    };
}
async function GetMasterAdsPackage(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const city_id = body.city_id || "";
    const package_id = body.package_id || "";
    const package_type = body.package_type || "";
    // console.log(package_id, "package_id...........")
    // console.log(city_id, "city_id...........")
    if (package_id != "") {
        let condition = "";
        //If ads current package type is monthly=>3 or yearly=>4 then we get only monthly or yearly packages listing otherwise we get all type packages listing
        if (package_type == "3" || package_type == "4") {
            condition = " (type='3' || type='4') AND ";
        }
        var Adspackage = await db.query("SELECT * FROM master_ads_packages WHERE " + condition + " is_active='1' AND deleted_at IS NULL AND (city_id = '0' OR FIND_IN_SET(?,city_id) > 0) and id != ?", [
            city_id,
            package_id
        ]);
    } else {
        var Adspackage = await db.query("SELECT * FROM master_ads_packages WHERE is_active='1' AND deleted_at IS NULL AND (city_id = '0' OR FIND_IN_SET(?,city_id) > 0)", [
            city_id
        ]);
    }
    if (Adspackage.length > 0) {
        return {
            status: 200,
            message: "Data fetch successfully",
            records: Adspackage
        };
    } else {
        return {
            status: 201,
            msg: "No records found",
            records: []
        };
    }
}
async function SearchKeywords(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const keywordValue = body.keyword || "";
    if (keywordValue) {
        var keywords = await db.query("SELECT id as value,keyword as label FROM master_keywords WHERE keyword like ? AND is_active='1' AND is_approved ='1' AND deleted_at IS NULL", [
            "%" + keywordValue + "%"
        ]);
        return {
            keywords: keywords
        };
    } else {
        return false;
    }
}
//SaveFreeListing forms
async function SaveFreeListing(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
    const current_date = (0,helper/* getDateTime */.Fc)(1); //current date
    //const user_id = await userRegistration(db, body)
    const session = await (0,react_.getSession)({
        req
    });
    //console.log('body=save Free listing=>>>>', body)
    // add business
    if (body.action === "businessEmailCheck") {
        const checkBusinessEmail = await db.query("SELECT id FROM business_mobile_emails WHERE email = ? and is_primary = '1'", [
            body.selectedValue
        ]);
        if (checkBusinessEmail.length > 0) {
            return {
                status: 201,
                msg: "You are already register, please login your email."
            };
        } else {
            return {
                status: 200,
                msg: "New business email"
            };
        }
    }
    if (session && session.user.id > 0) {
        const user_id = session.user.id;
        //check business name exist yes or not --- code added by ganpat yadav
        if (body.action === "businessNameCheck") {
            const checkBusinessName = await db.query("SELECT id,user_id,name FROM businesses WHERE user_id = ? and name = ?", [
                user_id,
                body.selectedValue
            ]);
            if (checkBusinessName.length > 0) {
                return {
                    status: 201,
                    msg: "The same business name is already associated with your account."
                };
            } else {
                return {
                    status: 200,
                    msg: "New Business name"
                };
            }
        } else {
            // return { status: 200, msg: "New Business name21" };
            const userDataAll = await db.query("SELECT id,email,mobile,name FROM users WHERE id = ?", [
                user_id
            ]);
            var userData = "";
            if (userDataAll.length > 0) {
                userData = userDataAll[0];
            }
            // console.log(
            //   "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&====================================",
            //   userDataAll,
            //   userData
            // );
            //insert keyword in master table
            const keywords = body.keywords;
            const getKeyword_ids = await addKeywords(db, user_id, body);
            //join category ids with seperate comma
            let subCategory_ids = "";
            let category_ids = "";
            if (body.categories && body.categories.length > 0) {
                let categoriesObject = body.categories;
                let subcategory_idsArray = [];
                let category_idsArray = [];
                categoriesObject.map(async (subcategory, keywordIndex)=>{
                    //category_idsArray.push(subcategory.value)
                    category_idsArray.push(subcategory.category_id);
                    subcategory_idsArray.push(subcategory.id);
                });
                if (category_idsArray.length > 0) {
                    subCategory_ids = subcategory_idsArray.join(",");
                    category_ids = category_idsArray.join(",");
                }
            }
            //join type_of_business ids with seperate comma
            let type_of_business_ids = "";
            if (body.type_of_business && body.type_of_business.length > 0) {
                let type_of_businessObject = body.type_of_business;
                let type_of_business_idsArray = [];
                type_of_businessObject.map(async (category, keywordIndex)=>{
                    type_of_business_idsArray.push(category.value);
                });
                if (type_of_business_idsArray.length > 0) {
                    type_of_business_ids = type_of_business_idsArray.join(",");
                }
            }
            //Upload buisness logo image
            let companyLogo = (body === null || body === void 0 ? void 0 : body.company_logo) || "";
            let no_of_employee = null;
            if ((body === null || body === void 0 ? void 0 : body.range_of_employees) && (body === null || body === void 0 ? void 0 : body.range_of_employees) != "" && (body === null || body === void 0 ? void 0 : body.range_of_employees) != undefined) {
                no_of_employee = body === null || body === void 0 ? void 0 : body.range_of_employees;
            }
            let productAndService = "";
            if ((body === null || body === void 0 ? void 0 : body.product_and_services) && (body === null || body === void 0 ? void 0 : body.product_and_services) != "" && (body === null || body === void 0 ? void 0 : body.product_and_services) != undefined) {
                productAndService = (body === null || body === void 0 ? void 0 : body.product_and_services).trim();
            }
            let headOffice = "";
            if ((body === null || body === void 0 ? void 0 : body.head_office) && (body === null || body === void 0 ? void 0 : body.head_office) != "" && (body === null || body === void 0 ? void 0 : body.head_office) != undefined) {
                headOffice = (body === null || body === void 0 ? void 0 : body.head_office).trim();
            }
            let branchOffice = "";
            if ((body === null || body === void 0 ? void 0 : body.branch_office) && (body === null || body === void 0 ? void 0 : body.branch_office) != "" && (body === null || body === void 0 ? void 0 : body.branch_office) != undefined) {
                branchOffice = (body === null || body === void 0 ? void 0 : body.branch_office).trim();
            }
            let company_description = "";
            if ((body === null || body === void 0 ? void 0 : body.company_description) && (body === null || body === void 0 ? void 0 : body.company_description) != "" && (body === null || body === void 0 ? void 0 : body.company_description) != undefined) {
                company_description = (body === null || body === void 0 ? void 0 : body.company_description).trim();
            }
            let additional_information = "";
            if ((body === null || body === void 0 ? void 0 : body.additional_information) && (body === null || body === void 0 ? void 0 : body.additional_information) != "" && (body === null || body === void 0 ? void 0 : body.additional_information) != undefined) {
                additional_information = (body === null || body === void 0 ? void 0 : body.additional_information).trim();
            }
            let professional_association = "";
            if ((body === null || body === void 0 ? void 0 : body.professional_association) && (body === null || body === void 0 ? void 0 : body.professional_association) != "" && (body === null || body === void 0 ? void 0 : body.professional_association) != undefined) {
                professional_association = (body === null || body === void 0 ? void 0 : body.professional_association).trim();
            }
            let past_experience = "";
            if ((body === null || body === void 0 ? void 0 : body.past_experience) && (body === null || body === void 0 ? void 0 : body.past_experience) != "" && (body === null || body === void 0 ? void 0 : body.past_experience) != undefined) {
                past_experience = (body === null || body === void 0 ? void 0 : body.past_experience).trim();
            }
            let awards = "";
            if ((body === null || body === void 0 ? void 0 : body.awards) && (body === null || body === void 0 ? void 0 : body.awards) != "" && (body === null || body === void 0 ? void 0 : body.awards) != undefined) {
                awards = (body === null || body === void 0 ? void 0 : body.awards).trim();
            }
            let business_more_info = "";
            if ((body === null || body === void 0 ? void 0 : body.business_more_info) && (body === null || body === void 0 ? void 0 : body.business_more_info) != "" && (body === null || body === void 0 ? void 0 : body.business_more_info) != undefined) {
                business_more_info = (body === null || body === void 0 ? void 0 : body.business_more_info).trim();
            }
            const lat = body.lat || "";
            const long = body.long || "";
            //add business
            const insertBusiness = await db.query("INSERT INTO businesses SET user_id=?,name=?,keywords=?,company_description=?,additional_information=?,professional_association=?,past_experience=?,awards=?,business_more_info=?,product_and_services=?,head_office=?,branch_office=?,no_of_employee=?,logo=?,contact_person=?,phone_number=?,tollfree=?,address=?,landmark=?,area_id=?,pincode=?,city_id=?,state_id=?,lat=?,lng=?,category=?,subcategory=?,type_of_business=?,prefrence='0',is_advertise='0',is_newsletter='0',is_faq_show='0',is_claimed='0',is_verified='0',is_active='0',is_featured='0',created_at=?", [
                user_id,
                body.company,
                getKeyword_ids,
                company_description,
                additional_information,
                professional_association,
                past_experience,
                awards,
                business_more_info,
                productAndService,
                headOffice,
                branchOffice,
                no_of_employee,
                companyLogo,
                body.name,
                body.phone,
                body.toll_free_number,
                body.address,
                body.landmark,
                body.area,
                body.pincode,
                body.city_id,
                body.state_id,
                lat,
                long,
                category_ids,
                subCategory_ids,
                type_of_business_ids,
                current_datetime, 
            ]);
            if (insertBusiness.affectedRows > 0 && insertBusiness.insertId > 0) {
                var ref6, ref1, ref2, ref3, ref4, ref5;
                //insert business detail
                const booknowURL = (body === null || body === void 0 ? void 0 : body.booknow_chk) && (body === null || body === void 0 ? void 0 : body.booknow_chk) == true ? body.booknow : "";
                const year_establishment = (0,helper/* getDateTime */.Fc)(3, body.year_establishment); //current date time
                const IVR_number = (body === null || body === void 0 ? void 0 : body.ivr_number) && (body === null || body === void 0 ? void 0 : body.ivr_number) == true ? 1 : 0;
                //add brochure pdf
                let brochurePdfName = (body === null || body === void 0 ? void 0 : body.brochure_document) || "";
                //video URL
                let videoURL = null;
                let videoType = null;
                if ((body === null || body === void 0 ? void 0 : body.video_type) !== undefined && (body === null || body === void 0 ? void 0 : body.video_type) != "" && (body.video_type == "1" || body.video_type == "2")) {
                    videoType = body === null || body === void 0 ? void 0 : body.video_type;
                    videoURL = body === null || body === void 0 ? void 0 : body.video_url;
                }
                // add business detail
                const insertBusinessDetail = await db.query("INSERT INTO business_details SET business_id=?,year_establishment=?,whatsapp_no=?,video_type=?,video=?,is_ivr_requested=?,book_now_url=?,business_pdf=?", [
                    insertBusiness.insertId,
                    year_establishment,
                    body.whatsapp_number,
                    videoType,
                    videoURL,
                    IVR_number,
                    booknowURL,
                    brochurePdfName, 
                ]);
                //add payment mode mode_of_payment
                if ((body === null || body === void 0 ? void 0 : body.mode_of_payment) && (body === null || body === void 0 ? void 0 : (ref6 = body.mode_of_payment) === null || ref6 === void 0 ? void 0 : ref6.length) > 0) {
                    let paymentOptionsArray = [];
                    for(let i = 0; i < body.mode_of_payment.length; i++){
                        paymentOptionsArray.push([
                            insertBusiness.insertId,
                            body.mode_of_payment[i],
                            "1", 
                        ]);
                    }
                    if (paymentOptionsArray.length > 0) {
                        const insertPaymentOptions = await db.query("INSERT INTO business_payment_modes (business_id,payment_mode_id,status) VALUES ?", [
                            paymentOptionsArray
                        ]);
                        if (insertPaymentOptions.affectedRows < 1) {
                            return {
                                status: 201,
                                msg: "Error in insert payment mode options."
                            };
                        }
                    }
                }
                //upload and add the media images on s3
                let uploadedMediaImages = [];
                if ((body === null || body === void 0 ? void 0 : body.mediaImages) && (body === null || body === void 0 ? void 0 : (ref1 = body.mediaImages) === null || ref1 === void 0 ? void 0 : ref1.length) > 0) {
                    for(let i = 0; i < (body === null || body === void 0 ? void 0 : body.mediaImages.length); i++){
                        uploadedMediaImages.push([
                            insertBusiness.insertId,
                            "1",
                            body.mediaImages[i].file_name, 
                        ]);
                    }
                    if ((uploadedMediaImages === null || uploadedMediaImages === void 0 ? void 0 : uploadedMediaImages.length) > 0) {
                        const insertMediaImages = await db.query("INSERT INTO business_img_videos (business_id,type,url) VALUES ?", [
                            uploadedMediaImages
                        ]);
                        if (insertMediaImages.affectedRows < 1) {
                            return {
                                status: 201,
                                msg: "Error in insert business media images."
                            };
                        }
                    }
                }
                //console.log('uploadedMediaImages--->>>>',uploadedMediaImages)
                //insert social links
                let socialLinkArrayObject = [
                    {
                        val: "1",
                        link: (body === null || body === void 0 ? void 0 : body.facebook_link) || ""
                    },
                    {
                        val: "2",
                        link: (body === null || body === void 0 ? void 0 : body.google_link) || ""
                    },
                    {
                        val: "3",
                        link: (body === null || body === void 0 ? void 0 : body.linkedin_link) || ""
                    },
                    {
                        val: "4",
                        link: (body === null || body === void 0 ? void 0 : body.instagram_link) || ""
                    },
                    {
                        val: "5",
                        link: (body === null || body === void 0 ? void 0 : body.twitter_link) || ""
                    }, 
                ];
                let socialURLDataArray = [];
                socialLinkArrayObject.map(function(socialLink, keyIndex) {
                    if (socialLink.link != "") {
                        socialURLDataArray.push([
                            insertBusiness.insertId,
                            socialLink.val,
                            socialLink.link, 
                        ]);
                    }
                });
                if ((socialURLDataArray === null || socialURLDataArray === void 0 ? void 0 : socialURLDataArray.length) > 0) {
                    const insertSociallinkURL = await db.query("INSERT INTO business_social_links (business_id,social_name,social_link) VALUES ?", [
                        socialURLDataArray
                    ]);
                    if (insertSociallinkURL.affectedRows < 1) {
                        return {
                            status: 201,
                            msg: "Error in insert social type and link."
                        };
                    }
                }
                //insert the contact person detail ---Ganpat Yadav ADD New if code update
                if ((body === null || body === void 0 ? void 0 : body.contact_person) && (body === null || body === void 0 ? void 0 : (ref2 = body.contact_person) === null || ref2 === void 0 ? void 0 : ref2.length) > 0) {
                    const contact_persons_details = body.contact_person;
                    let contactDetailDataArray = [];
                    await Promise.all(contact_persons_details.map(async (contact_persons_detail, keyIndex)=>{
                        if (contact_persons_detail.contact_p_email !== "" || contact_persons_detail.contact_p_mobile !== "") {
                            //check if verified
                            const businessMobileData = await db.query("SELECT business_mobile_emails.* FROM business_mobile_emails RIGHT JOIN businesses ON businesses.id = business_mobile_emails.business_id WHERE businesses.user_id = ? AND business_mobile_emails.type = ? AND business_mobile_emails.phone = ? AND is_verified_phone = ?", [
                                user_id,
                                "5",
                                contact_persons_detail.contact_p_mobile,
                                "1"
                            ]);
                            const businessEmailData = await db.query("SELECT business_mobile_emails.* FROM business_mobile_emails RIGHT JOIN businesses ON businesses.id = business_mobile_emails.business_id WHERE businesses.user_id = ? AND business_mobile_emails.type = ? AND business_mobile_emails.email = ? AND business_mobile_emails.is_verified = ?", [
                                user_id,
                                "5",
                                contact_persons_detail.contact_p_email,
                                "1"
                            ]);
                            let is_verified_phone = "0";
                            if (businessMobileData.length > 0) {
                                is_verified_phone = "1";
                            }
                            let is_verified = "0";
                            if (businessEmailData.length > 0) {
                                is_verified = "1";
                            }
                            let is_primary = "0";
                            if (keyIndex === 0) {
                                is_primary = "1";
                            }
                            contactDetailDataArray.push([
                                insertBusiness.insertId,
                                5,
                                contact_persons_detail.contact_p_name,
                                contact_persons_detail.contact_p_email,
                                contact_persons_detail.contact_p_mobile,
                                is_verified_phone,
                                is_verified,
                                null,
                                is_primary,
                                contact_persons_detail.contact_p_checkbox, 
                            ]);
                        }
                    }));
                    if (contactDetailDataArray.length > 0) {
                        const insertBusinessContactEmail = await db.query("INSERT INTO business_mobile_emails (business_id,type,name,email,phone,is_verified_phone,is_verified,text,is_primary,is_display_mobile) VALUES ?", [
                            contactDetailDataArray
                        ]);
                        if (insertBusinessContactEmail.affectedRows < 1) {
                            return {
                                status: 201,
                                msg: "Error in insert business contact email."
                            };
                        }
                    }
                }
                //insert the contact person detail section with this code
                //insert business website
                if ((body === null || body === void 0 ? void 0 : body.website) && (body === null || body === void 0 ? void 0 : (ref3 = body.website) === null || ref3 === void 0 ? void 0 : ref3.length) > 0) {
                    const websites = body === null || body === void 0 ? void 0 : body.website;
                    let websiteDataArray = [];
                    websites.map(function(website, keyIndex) {
                        var ref;
                        if ((website === null || website === void 0 ? void 0 : (ref = website.website) === null || ref === void 0 ? void 0 : ref.length) > 0 && (website === null || website === void 0 ? void 0 : website.website) != "" && (website === null || website === void 0 ? void 0 : website.website) !== undefined) {
                            websiteDataArray.push([
                                insertBusiness.insertId,
                                3,
                                website.website, 
                            ]);
                        }
                    });
                    if (websiteDataArray.length > 0) {
                        const insertBusinessWebsite = await db.query("INSERT INTO business_mobile_emails (business_id,type,text) VALUES ?", [
                            websiteDataArray
                        ]);
                        if (insertBusinessWebsite.affectedRows < 1) {
                            return {
                                status: 201,
                                msg: "Error in insert business website."
                            };
                        }
                    }
                }
                if ((body === null || body === void 0 ? void 0 : body.landline_number) && (body === null || body === void 0 ? void 0 : (ref4 = body.landline_number) === null || ref4 === void 0 ? void 0 : ref4.length) > 0) {
                    //insert business landline number
                    const insertBusinessWebsite = await db.query("INSERT INTO business_mobile_emails (business_id,type,text) VALUES (?,?,?)", [
                        insertBusiness.insertId,
                        4,
                        body.landline_number
                    ]);
                    await db.end();
                }
                let faqBusinessTiming = [];
                //insert the business timming
                if ((body === null || body === void 0 ? void 0 : body.daysHourslist) && (body === null || body === void 0 ? void 0 : (ref5 = body.daysHourslist) === null || ref5 === void 0 ? void 0 : ref5.length) > 0) {
                    const daysHourslistings = body.daysHourslist;
                    //console.log(daysHourslistings,'======>>>>>>>>daysHourslistings')
                    let daysDataArray = [];
                    daysHourslistings.map(function(daysHourslisting, keyIndex) {
                        let is_open = 2;
                        if (daysHourslisting.open && daysHourslisting.open == 1) {
                            is_open = 1;
                            daysHourslisting.start_time = null;
                            daysHourslisting.end_time = null;
                        } else if (daysHourslisting.close && daysHourslisting.close == 1) {
                            is_open = 0;
                            daysHourslisting.start_time = null;
                            daysHourslisting.end_time = null;
                        }
                        //for is dual timing
                        if (daysHourslisting.dual_start_time != "" && daysHourslisting.dual_end_time != "") {
                            daysHourslisting.dual_start_time = daysHourslisting.dual_start_time;
                            daysHourslisting.dual_end_time = daysHourslisting.dual_end_time;
                        } else {
                            daysHourslisting.dual_start_time = null;
                            daysHourslisting.dual_end_time = null;
                        }
                        let dayname = daysHourslisting.value;
                        dayname = dayname.toUpperCase(); //upper case
                        //dayname = getWeekDaysShortName(dayname)//upper case
                        daysDataArray.push([
                            insertBusiness.insertId,
                            dayname,
                            is_open,
                            daysHourslisting.start_time,
                            daysHourslisting.end_time,
                            daysHourslisting.dual_start_time,
                            daysHourslisting.dual_end_time, 
                        ]);
                        //Its use in business faq
                        if (is_open == 2) {
                            var timing = (0,helper/* formatAmPm */.Wr)(daysHourslisting.start_time, 2, "H:i:s", "H:i") + "-" + (0,helper/* formatAmPm */.Wr)(daysHourslisting.end_time, 2, "H:i:s", "H:i");
                        } else if (is_open == 1) {
                            //open
                            var timing = "open";
                        } else {
                            //close
                            var timing = "close";
                        }
                        faqBusinessTiming.push(dayname + ": " + timing);
                    });
                    const insertBusinessDays = await db.query("INSERT INTO business_timings  (business_id,day,is_open,open_at,close_at,dual_open_at,dual_close_at) VALUES ?", [
                        daysDataArray
                    ]);
                    await db.end();
                    if (insertBusinessDays.affectedRows < 1) {
                        return {
                            status: 201,
                            msg: "Error in insert business days."
                        };
                    }
                }
                let paymentModesArray = (body === null || body === void 0 ? void 0 : body.mode_of_payment) || [];
                // paymentModesArray = paymentModesArray.join(',');
                //add business faq
                let faqBusinessObject = {
                    user_id: user_id,
                    business_id: insertBusiness.insertId,
                    address: body === null || body === void 0 ? void 0 : body.address,
                    company_name: body === null || body === void 0 ? void 0 : body.company,
                    product_and_service: productAndService,
                    payment_mode: paymentModesArray,
                    businessTiming: faqBusinessTiming.join(","),
                    landmark: body === null || body === void 0 ? void 0 : body.landmark
                };
                await addAutoGeneratedBusinessFaq(db, faqBusinessObject);
                //Send email to admin
                const getAdminDetail = await db.query("SELECT admin_email FROM setting_company WHERE id=?", [
                    "1"
                ]);
                /*********Insert Registration Mail********************/ const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                    "18"
                ]);
                var emailval = adminTemplate[0].description;
                var mapObj = {
                    "@name": userData.name,
                    "@business_name": body.company,
                    "@company": "Dailmenow"
                };
                emailval = emailval.replace(/@name|@company|@business_name/gi, function(matched) {
                    return mapObj[matched];
                });
                const getCity = await db.query("SELECT name FROM master_cities WHERE id=?", [
                    body.city_id
                ]);
                // Send Email for user /////////////////
                const userTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                    "30"
                ]);
                var emailvalUser = userTemplate[0].description;
                var mapObjU = {
                    "@name": userData.name
                };
                emailvalUser = emailvalUser.replace(/@name/gi, function(matched) {
                    return mapObjU[matched];
                });
                // msg  templte code add
                const templateID = "1407162668699811234";
                const template = encodeURIComponent(`Dear ${body.name},
      \n Company Details Are
      \n Name:  ${body.company}
      \n Person : ${body.name}
      \n Number : ${body.phone}
      \n City : ${getCity[0].name}
      \n Thank you for using Dial Me Now.
      \n Dialmenow.in
      \n If you own a business, List it ${`test`} on www.dialmenow.in
      \n +919252392523`);
                const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${body.phone}&sms=${template}&tempid=${templateID}`;
                try {
                    const CreateFreeListingSMs = await fetch(APIpath);
                } catch (error) {
                    console.error("Error sending SMS:", error);
                    return false;
                }
                const subject = adminTemplate[0].title;
                const subject2 = userTemplate[0].title;
                const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                    subject,
                    emailval,
                    getAdminDetail[0].admin_email,
                    current_datetime
                ]);
                const insertuserEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                    subject2,
                    emailvalUser,
                    userData.email,
                    current_datetime
                ]);
                await db.end();
                /*********END Insert Registration Mail********************/ return {
                    status: 200,
                    msg: "Form successfully submitted.",
                    id: insertBusiness.insertId,
                    user_id: user_id
                };
            } else {
                return {
                    status: 201,
                    msg: "Something went wrong. Try after some time."
                };
            }
        }
    } else {
        return {
            status: 201,
            msg: "Something went wrong. Try after some time."
        };
    }
// if (businessQuery.affectedRows > 0 && businessQuery.insertId > 0) {
// }
}
async function SavePackageNotify(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    //console.log(body);
    const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
    const session = await (0,react_.getSession)({
        req
    });
    // add notify me for package in business
    if (session && session.user.id > 0) {
        const user_id = session.user.id;
        const insertNotify = await db.query("INSERT INTO `business_packages_notify`( `request_user_id`, `package_id`,`created_at`) VALUES (?,?,?)", [
            user_id,
            body.package_id,
            current_datetime
        ]);
        return {
            status: 200,
            msg: "Form successfully submitted.",
            id: insertNotify.insertId
        };
    }
}
async function SaveBuyPackageListing(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    //console.log('call method-->>>>>>', body);
    const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
    const current_date = (0,helper/* getDateTime */.Fc)(1);
    const is_payment_from = body === null || body === void 0 ? void 0 : body.is_payment_from;
    const deduct_total_user_wallet_amount = body === null || body === void 0 ? void 0 : body.deduct_total_user_wallet_amount;
    const coupon_id = (body === null || body === void 0 ? void 0 : body.coupon_id) ? body === null || body === void 0 ? void 0 : body.coupon_id : 0;
    const payment_mode = (body === null || body === void 0 ? void 0 : body.payment_mode) ? body === null || body === void 0 ? void 0 : body.payment_mode : null;
    const transaction_id = (body === null || body === void 0 ? void 0 : body.transaction_id) ? body === null || body === void 0 ? void 0 : body.transaction_id : null;
    const razorpay_payment_id = (body === null || body === void 0 ? void 0 : body.razorpay_payment_id) ? body === null || body === void 0 ? void 0 : body.razorpay_payment_id : null;
    const transaction_date = (body === null || body === void 0 ? void 0 : body.transaction_date) ? body === null || body === void 0 ? void 0 : body.transaction_date : current_datetime;
    const comment = "Paid Listing";
    const wallet_description = "Purchase " + (body === null || body === void 0 ? void 0 : body.name);
    const total_payable_amount = body === null || body === void 0 ? void 0 : body.total_payable_amount;
    const package_amount = body === null || body === void 0 ? void 0 : body.plan_price;
    const gst = body === null || body === void 0 ? void 0 : body.gst;
    const session = await (0,react_.getSession)({
        req
    });
    // add notify me for package in business
    if (session && session.user.id > 0) {
        var ref;
        const user_id = session.user.id;
        let plan_start_date = current_date;
        //check current plan is expired or not before the take new plan package of business
        const checkCureentPlan = await db.query("SELECT id,ends_on FROM business_packages WHERE business_id= ? AND is_current=? AND (? BETWEEN begins_on AND ends_on)", [
            body.business_id,
            1,
            current_datetime
        ]);
        let is_current = 1; //current plan(1=>current plan)
        //if plan is active (in current date) then we add plan as upcoming(2=> upcoming plan)
        if (checkCureentPlan.length > 0 && ((ref = checkCureentPlan[0]) === null || ref === void 0 ? void 0 : ref.id) > 0) {
            var ref10;
            is_current = 2; //upcoming plan
            plan_start_date = (ref10 = checkCureentPlan[0]) === null || ref10 === void 0 ? void 0 : ref10.ends_on;
            // add 1 day in date
            plan_start_date = (0,helper/* addDayInDate */.a4)(1, new Date(plan_start_date));
        }
        //create the plan start and end date
        let type = "";
        if (body.plan_duration == "monthly") {
            type = "0";
            var plan_expiry_date = (0,helper/* addMonthsInDate */.e2)(1, new Date(plan_start_date)); // 1 month expiry date
            plan_expiry_date = (0,helper/* getDateTime */.Fc)(1, plan_expiry_date);
        } else {
            type = "1";
            var plan_expiry_date = (0,helper/* addMonthsInDate */.e2)(12, new Date(plan_start_date)); // 1 year expiry date
            plan_expiry_date = (0,helper/* getDateTime */.Fc)(1, plan_expiry_date);
        }
        //get payment details
        let paymentDetails = await razorpayPaymentDetails(db, razorpay_payment_id);
        //End
        const transaction_mode = (paymentDetails === null || paymentDetails === void 0 ? void 0 : paymentDetails.method_id) || 0;
        //insert the business packages
        const insertBusinessPackage = await db.query("INSERT INTO `business_packages`(`business_id`, `package_id`,`package_type`,`begins_on`,`ends_on`,`is_current`,`wallet_amount`,`coupon_amount`,`coupon_id`,`payment_mode`,`transaction_id`,`transaction_amount`,`transaction_date`,`gst`,`total_amount`,`comment`,`status`,`created_at`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
            body.business_id,
            body.id,
            type,
            plan_start_date,
            plan_expiry_date,
            is_current,
            deduct_total_user_wallet_amount,
            body.discount,
            coupon_id,
            transaction_mode,
            razorpay_payment_id,
            total_payable_amount,
            transaction_date,
            gst,
            package_amount,
            comment,
            1,
            current_datetime, 
        ]);
        //debit the user wallet amount
        if (deduct_total_user_wallet_amount > 0) {
            const insert_debit_credit_amount = await db.query("INSERT INTO user_wallets SET user_id=?,debit_credit=?,amount=?,description=?,type=?,type_id=?,created_at=?", [
                user_id,
                2,
                deduct_total_user_wallet_amount,
                wallet_description,
                3,
                insertBusinessPackage.insertId,
                current_datetime, 
            ]);
            await db.end();
        }
        //========= Start Send SMS added by shakti singh =============//
        const templateID = "1407168690172115003";
        const template = encodeURIComponent(`Dear ${body.user_name}\n,
     We are excited to have you on board and look forward to helping you achieve your goals.\n 
     Your Plan Name: ${body.name}\n
     Thank you for choosing Dialmenow.in.\n
     +919252392523`);
        const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${body.user_phone}&sms=${template}&tempid=${templateID}`;
        try {
            const msgChangepwd = await fetch(APIpath);
        } catch (error) {
            console.error("Error sending SMS:", error);
        }
        //========= End Send SMS added by kartik Pareek=============//
        return {
            status: 200,
            msg: "Form successfully submitted."
        };
    } else {
        return false;
    }
}
//save buy combo packages
async function SaveBuyComboPackage(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
    const current_date = (0,helper/* getDateTime */.Fc)(1);
    const is_payment_from = body === null || body === void 0 ? void 0 : body.is_payment_from;
    const deduct_total_user_wallet_amount = body === null || body === void 0 ? void 0 : body.deduct_total_user_wallet_amount;
    const coupon_id = (body === null || body === void 0 ? void 0 : body.coupon_id) ? body === null || body === void 0 ? void 0 : body.coupon_id : 0;
    const payment_mode = (body === null || body === void 0 ? void 0 : body.payment_mode) ? body === null || body === void 0 ? void 0 : body.payment_mode : null;
    const transaction_id = (body === null || body === void 0 ? void 0 : body.transaction_id) ? body === null || body === void 0 ? void 0 : body.transaction_id : null;
    const transaction_date = (body === null || body === void 0 ? void 0 : body.transaction_date) ? body === null || body === void 0 ? void 0 : body.transaction_date : current_datetime;
    const comment = "Combo Package";
    const total_payable_amount = body === null || body === void 0 ? void 0 : body.total_payable_amount;
    const package_amount = body === null || body === void 0 ? void 0 : body.plan_price;
    const gst = body === null || body === void 0 ? void 0 : body.gst;
    const newPackageDetail = body === null || body === void 0 ? void 0 : body.new_package;
    const business_id = body === null || body === void 0 ? void 0 : body.business_id;
    const package_id = newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.package_id;
    const wallet_description = "Purchase " + (newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.name);
    const session = await (0,react_.getSession)({
        req
    });
    const type = newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.type;
    const combo_package_id = newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.id;
    // add notify me for package in business
    if (session && session.user.id > 0) {
        var ref;
        const user_id = session.user.id;
        const name = body.user_name;
        const email = body.user_email;
        if (type == "0") {
            //monthly
            var plan_expiry_date = (0,helper/* addMonthsInDate */.e2)(1); // 1 month expiry date
            plan_expiry_date = (0,helper/* getDateTime */.Fc)(1, plan_expiry_date);
        } else {
            //yearly
            var plan_expiry_date = (0,helper/* addMonthsInDate */.e2)(12); // 1 year expiry date
            plan_expiry_date = (0,helper/* getDateTime */.Fc)(1, plan_expiry_date);
        }
        //check current plan is expired or not before the take new plan package of business
        const checkCureentPlan = await db.query("SELECT id FROM business_packages WHERE business_id= ? AND is_current=? AND (? BETWEEN begins_on AND ends_on)", [
            business_id,
            1,
            current_datetime
        ]);
        let is_current = 1; //current plan(1=>current plan)
        //if plan is active (in current date) then we add plan as upcoming(2=> upcoming plan)
        if (checkCureentPlan.length > 0 && ((ref = checkCureentPlan[0]) === null || ref === void 0 ? void 0 : ref.id) > 0) {
            is_current = 2; //upcoming plan
        }
        //insert the combo_packages_history
        const insertComboPackage = await db.query("INSERT INTO `combo_packages_history`(`combo_id`, `user_id`,`package_id`,`coupon_id`,`coupon_amount`,`payment_mode`,`transaction_id`,`transaction_amount`,`transaction_date`,`gst_amt`,`comment`,`expiry_date`,`total_amount`,`status`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
            combo_package_id,
            user_id,
            package_id,
            coupon_id,
            body.discount,
            payment_mode,
            transaction_id,
            total_payable_amount,
            current_datetime,
            gst,
            comment,
            plan_expiry_date,
            package_amount,
            1, 
        ]);
        if (insertComboPackage.affectedRows > 0 && insertComboPackage.insertId > 0) {
            const combo_id = insertComboPackage.insertId;
            //insert the business packages
            const insertBusinessPackage = await db.query("INSERT INTO `business_packages`(`business_id`,`combo_id`, `package_id`,`package_type`,`begins_on`,`ends_on`,`is_current`,`wallet_amount`,`coupon_amount`,`coupon_id`,`payment_mode`,`transaction_id`,`transaction_amount`,`transaction_date`,`gst`,`total_amount`,`comment`,`status`,`created_at`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                business_id,
                combo_id,
                package_id,
                type,
                current_date,
                plan_expiry_date,
                is_current,
                deduct_total_user_wallet_amount,
                body.discount,
                coupon_id,
                payment_mode,
                transaction_id,
                total_payable_amount,
                transaction_date,
                gst,
                package_amount,
                comment,
                1,
                current_datetime, 
            ]);
            //debit the user wallet amount
            if (deduct_total_user_wallet_amount > 0) {
                const insert_debit_credit_amount = await db.query("INSERT INTO user_wallets SET user_id=?,debit_credit=?,amount=?,description=?,type=?,type_id=?,created_at=?", [
                    user_id,
                    2,
                    deduct_total_user_wallet_amount,
                    wallet_description,
                    3,
                    insertBusinessPackage.insertId,
                    current_datetime, 
                ]);
                await db.end();
            }
            //Send email to user to purchase new plan
            const getTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                "21"
            ]);
            var emailval = getTemplate[0].description;
            //plan type
            if (type == "1") {
                var planTypeName = "Monthly";
            } else {
                //type == '4'
                var planTypeName = "Yearly";
            }
            var mapObj = {
                "@name": name,
                "@company": "Dailmenow",
                "@planname": newPackageDetail.name,
                "@planType": planTypeName,
                "@planAmount": package_amount
            };
            emailval = emailval.replace(/@name|@company|@planname|@planType|@planAmount/gi, function(matched) {
                return mapObj[matched];
            });
            const subject = getTemplate[0].title;
            const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                subject,
                emailval,
                email,
                current_datetime
            ]);
            return {
                status: 200,
                msg: "Form successfully submitted."
            };
        } else {
            return false;
        }
    } else {
        return false;
    }
}
async function ListingApplyCouponCode(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    //console.log('body------>>>', body)
    const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
    const current_date = (0,helper/* getDateTime */.Fc)(1); //current date time
    const session = await (0,react_.getSession)({
        req
    });
    let city_id = body.listing_city_id;
    // add notify me for package in business
    if (session && session.user.id > 0) {
        const user_id = session.user.id;
        let condition = "";
        if (city_id != "0") {
            condition = " AND  c.city_id REGEXP CONCAT('(^|,)(', REPLACE('" + city_id + "', ',', '|'), ')(,|$)') ";
        }
        //having
        let havingCond = " having c.user_limit > total_used_coupon_code and c.same_user_limit > total_user_used_coupon_code ";
        let dataArray = [
            body.user_id,
            body.package_id,
            body.coupon_code,
            current_date,
            current_date, 
        ];
        var couponRecords = await db.query("SELECT c.*,(select count(bp.id) from business_packages as bp  where bp.coupon_id = c.id) as total_used_coupon_code,(select count(b.id) FROM businesses as b LEFT JOIN business_packages as bp2 on bp2.business_id = b.id WHERE bp2.coupon_id = c.id and b.user_id = ?) as total_user_used_coupon_code FROM coupons as c WHERE c.is_active='1' AND c.deleted_at IS NULL AND c.package_name_id='1' AND (FIND_IN_SET(?,c.master_package_id)>0 OR c.master_package_id = '0') AND c.coupon_code=? AND DATE_FORMAT(c.coupon_start_date, '%Y-%m-%d') <= ? AND DATE_FORMAT(c.coupon_end_date, '%Y-%m-%d') >= ? " + condition + havingCond, dataArray);
        //console.log('condition--', condition, ' havingCond---', havingCond)
        //console.log('dataArray--', dataArray)
        //await db.end();
        if (couponRecords.length > 0) {
            return {
                status: 200,
                msg: "Coupon apply successfully",
                coupon_id: couponRecords[0].id,
                coupon_amount: couponRecords[0].discount,
                discount_percentage: couponRecords[0].discount
            };
        } else {
            return {
                status: 201,
                msg: "Coupon code invalid!"
            };
        }
    }
}
//check user already register or not with phone or email id
async function checkUserAlreadyRegister(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    //console.log("BODY OF User EXIST CHECK ==================> ", body)
    let phoneNum = body.phone || "";
    let email = body.email || "";
    let stateOTP = await (0,helper/* sendOTPphone */.dN)(db, "+91" + phoneNum); //send OTP
    if (stateOTP) {
        return {
            status: 200,
            msg: "OTP sent successfully."
        };
    } else {
        return {
            status: 201,
            msg: "OTP not sent."
        };
    }
}
//get city and state id by state name
async function GetCityAndStateIdByStateName(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    let stateName = req.body.state.toLowerCase(); //convert string in lower case
    // var stateRecords = await db.query("SELECT id,name FROM master_states WHERE is_active='1' AND deleted_at IS NULL AND LOWER(name)=?", [stateName]);
    var stateRecords = await db.query("SELECT id,name FROM master_states WHERE is_active='1' AND deleted_at IS NULL ORDER BY name ASC");
    //await db.end();
    if (stateRecords.length > 0) {
        var ref, ref11;
        //for get selected state id
        const filtered = stateRecords.filter((entry)=>Object.values(entry).some((val)=>typeof val === "string" && val.toLowerCase().includes(stateName)
            )
        );
        //const selected_state_id = filtered[0]?.id ? filtered[0]?.id : stateRecords[0].id
        const selected_state_id = ((ref = filtered[0]) === null || ref === void 0 ? void 0 : ref.id) ? (ref11 = filtered[0]) === null || ref11 === void 0 ? void 0 : ref11.id : "";
        //get city list by state id
        // var cityRecords = await db.query("SELECT id,name FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND state_id=?", [stateRecords[0].id]);
        var cityRecords = await db.query("SELECT id,name FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND state_id=? ORDER BY name ASC", [
            selected_state_id
        ]);
        await db.end();
        return {
            status: 200,
            message: "Data fetch successfully",
            state_records: stateRecords,
            city_records: cityRecords,
            selected_state_id: selected_state_id
        };
    } else {
        return {
            status: 201,
            msg: "No records found",
            state_records: [],
            city_records: [],
            selected_state_id: ""
        };
    }
}
//search subacategory from other information of free listing
/*
export async function searchSubcategories(db, req) {
    const forwarded = req.headers["x-forwarded-for"]
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
    const body = (typeof req.body === 'object') ? req.body : JSON.parse(req.body);
    const keywordValue = body.keyword || '';

    var categories = await db.query("SELECT id,name FROM master_categories WHERE is_active='1' AND deleted_at IS NULL order by sort asc")
    var arr = [];
    var condition = ''
    if (keywordValue) {
        condition = " AND name LIKE '%" + keywordValue + "%' "
    }
    for (var i = 0; i < categories.length; i++) {
        var categoryOption = await db.query("SELECT id,name FROM master_sub_categories WHERE is_active='1' AND deleted_at IS NULL " + condition + " AND category_id=? order by sort asc LIMIT 20", [categories[i].id])

        for (var j = 0; j < categoryOption.length; j++) {
            var data = {
                id: categoryOption[j].id,
                name: categoryOption[j].name,
                category_id: categories[i].id
            }
            arr.push(data)
        }


    }
    return { "status": 200, "records": arr };
}*/ async function searchSubcategories(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const keywordValue = body.keyword || "";
    var condition = "";
    if (keywordValue) {
        condition = " AND msc.name LIKE '%" + keywordValue + "%' ";
    }
    // var categoryOption = await db.query("SELECT msc.id,msc.name FROM master_sub_categories as msc LEFT JOIN master_categories as mc ON mc.id=msc.category_id WHERE mc.is_active='1' AND mc.deleted_at IS NULL AND msc.is_active='1' AND msc.deleted_at IS NULL AND msc.name LIKE ? " + condition + "  order by msc.sort asc LIMIT 20", ['%' + keywordValue + '%'])
    var categoryOption = await db.query("SELECT msc.id,msc.name FROM master_sub_categories as msc LEFT JOIN master_categories as mc ON mc.id=msc.category_id WHERE mc.is_active='1' AND mc.deleted_at IS NULL AND msc.is_active='1' AND msc.deleted_at IS NULL " + condition + "  order by msc.sort asc LIMIT 20");
    return {
        status: 200,
        records: categoryOption
    };
}
async function CreateFreeListing_userRegistration(db, argu) {
    if (argu.user_id == 0) {
        const current_datetime = getDateTime(); //current date time
        //generate 8 digit password
        const generatedPassword = generatePassword(8);
        var password = CryptoJS.MD5(generatedPassword).toString();
        const userRegistrationQuery = await db.query("INSERT INTO users SET name=?,email=?,is_verify_email='0',password=?,mobile=?,address=?,city_id=?,state_id=?,pincode=?,is_active='1',created_at=?,created_by_id=0", [
            argu.name,
            argu.email,
            password,
            argu.phone,
            argu.address,
            argu.city_id,
            argu.state_id,
            argu.pincode,
            current_datetime, 
        ]);
        //console.log(userRegistrationQuery.affectedRows, '<<<====>>>', userRegistrationQuery.insertId)
        if (userRegistrationQuery.affectedRows > 0 && userRegistrationQuery.insertId > 0) {
            //const user_id = userRegistrationQuery.insertId//user id
            //send email to new user
            //send Mail
            let keyVal = jwt.sign({
                sub: {
                    id: userRegistrationQuery.insertId
                }
            }, process.env.SECRET_KEYID);
            /*********Insert Registration Mail********************/ const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                "5"
            ]);
            var emailval = adminTemplate[0].description;
            var basrURL = process.env.BASE_URL + "/verify-mail/" + encodeURI(keyVal);
            var mapObj = {
                "@name": argu.name,
                "@company": "Dailmenow",
                "@link": basrURL,
                "@mail": argu.email,
                "@password": generatedPassword
            };
            emailval = emailval.replace(/@name|@company|@link|@mail|@password/gi, function(matched) {
                return mapObj[matched];
            });
            const subject = adminTemplate[0].title;
            const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                subject,
                emailval,
                argu.email,
                current_datetime
            ]);
            //await db.end();
            /*********END Insert Registration Mail********************/ //     return { "status": 200,"user_id":userRegistrationQuery.insertId }
            return userRegistrationQuery.insertId;
        } else {
            return 0;
        }
    } else {
        return argu.user_id;
    }
}
async function addKeywords(db, user_id, argu) {
    let keyword_ids = "";
    const keywords = argu.keywords;
    if (keywords && keywords.length > 0) {
        const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
        let keyword_idsArray = [];
        for (const keyword of keywords){
            if (keyword.key && keyword.id == "") {
                //for new keyword
                //console.log(keyword.key)
                let checkKeyword = await db.query("SELECT id,keyword FROM master_keywords WHERE keyword='" + keyword.key + "' AND is_active='1' AND is_approved='0' AND deleted_at IS NULL");
                if (checkKeyword[0] && checkKeyword[0].id > 0) {
                    //store id in array
                    keyword_idsArray.push(checkKeyword[0].id);
                } else {
                    //add keyword and get id
                    let insertKeyword = await db.query("INSERT INTO master_keywords SET keyword='" + keyword.key + "',is_active='1',created_at=?,created_by_id=?", [
                        current_datetime,
                        user_id
                    ]);
                    if (insertKeyword.affectedRows > 0 && insertKeyword.insertId > 0) {
                        keyword_idsArray.push(insertKeyword.insertId);
                    }
                }
            } else {
                keyword_idsArray.push(keyword.id);
            }
        }
        if (keyword_idsArray.length > 0) {
            //join keyword ids with seperate comma
            keyword_ids = keyword_idsArray.join(",");
        }
    //end
    }
    return keyword_ids;
}
function getWeekDaysShortName(dayFullName) {
    var shortName = [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN"
    ];
    var fullName = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday", 
    ];
    var getIndex = fullName.indexOf(dayFullName);
    return shortName[getIndex];
}
async function addAutoGeneratedBusinessFaq(db, argu) {
    var ref;
    let businesssFaqDataArray = [];
    //1st question
    if (argu.address && argu.address.length > 0) {
        let question1 = "What is address of " + argu.company_name + "?";
        let answer1 = argu.address;
        businesssFaqDataArray.push([
            argu.business_id,
            question1,
            answer1,
            1,
            1
        ]);
    }
    //2nd question
    if ((argu === null || argu === void 0 ? void 0 : argu.product_and_service) && (argu === null || argu === void 0 ? void 0 : (ref = argu.product_and_service) === null || ref === void 0 ? void 0 : ref.length) > 0) {
        let question2 = "What product&services offered by " + argu.company_name + "?";
        let answer2 = argu.product_and_service;
        businesssFaqDataArray.push([
            argu.business_id,
            question2,
            answer2,
            1,
            2
        ]);
    }
    //3rd question
    if ((argu === null || argu === void 0 ? void 0 : argu.payment_mode) && (argu === null || argu === void 0 ? void 0 : argu.payment_mode) != "") {
        let question3 = "What are the payment modes?";
        const getPaymentMode = await db.query("SELECT name FROM master_payment_modes WHERE id IN(?)", [
            argu.payment_mode
        ]);
        let paymentModeArray = [];
        getPaymentMode.length > 0 && getPaymentMode.map((element, index)=>{
            paymentModeArray.push(element.name);
        });
        let answer3 = paymentModeArray.join(",");
        businesssFaqDataArray.push([
            argu.business_id,
            question3,
            answer3,
            1,
            3
        ]);
    }
    //4th question
    let question4 = "What is the business timing?";
    let answer4 = argu.businessTiming;
    businesssFaqDataArray.push([
        argu.business_id,
        question4,
        answer4,
        1,
        4
    ]);
    //5th question
    if (argu.landmark && argu.landmark != "") {
        let question5 = "Which is the nearest landmark?";
        let answer5 = argu.landmark;
        businesssFaqDataArray.push([
            argu.business_id,
            question5,
            answer5,
            1,
            5
        ]);
    }
    //insert
    const insertBusinessFaq = await db.query("INSERT INTO business_faqs  (business_id,question,answer,type,sort) VALUES ?", [
        businesssFaqDataArray
    ]);
    await db.end();
}

;// CONCATENATED MODULE: ./methods/UserDetails.js



const fs = __webpack_require__(7147);
async function UserDetails(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const email = body.id || "";
    const { user  } = await (0,react_.getSession)({
        req
    });
    if (user) {
        var records = await db.query("SELECT id,name,mobile,is_verify_email,is_verify_mob,email,password,image FROM users WHERE is_active='1' AND deleted_at IS NULL AND id=? AND email=?", [
            user.id,
            user.email
        ]);
        if (records.length > 0) {
            var ref, ref1, ref2, ref3, ref4;
            let mobVerify = records[0].is_verify_mob == "1" ? true : false;
            let mailVerify = records[0].is_verify_email == "1" ? true : false;
            //get s3 image with path
            var logoID = ((ref = records[0]) === null || ref === void 0 ? void 0 : ref.image) != "undefined" && ((ref1 = records[0]) === null || ref1 === void 0 ? void 0 : ref1.image) !== null && ((ref2 = records[0]) === null || ref2 === void 0 ? void 0 : ref2.image) != "" ? "uploads/users/" + ((ref3 = records[0]) === null || ref3 === void 0 ? void 0 : ref3.image) : "";
            let imagePath = await (0,lib_S3img/* S3img */.y9)((ref4 = records[0]) === null || ref4 === void 0 ? void 0 : ref4.image, "uploads/users/");
            return {
                id: records[0].id,
                email: records[0].email,
                name: records[0].name,
                phone: records[0].mobile,
                is_verified_mob: mobVerify,
                is_verfied_email: mailVerify,
                image: imagePath
            };
        } else {
            //records not found session exist
            // destroy the session
            return {
                status: 301,
                msg: "No records found"
            };
        }
    } else {
        return {
            status: 201,
            msg: "No records found"
        }; // no records of this user logout
    }
}
async function getUserDetailsById(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const user_id = body.user_id || "";
        if (user_id) {
            var records = await db.query("SELECT id,name,mobile,is_verify_email,is_verify_mob,email,image FROM users WHERE  id=?", [
                user_id
            ]);
            if (records.length > 0) {
                var ref;
                let mobVerify = records[0].is_verify_mob == "1" ? true : false;
                let mailVerify = records[0].is_verify_email == "1" ? true : false;
                //get s3 image with path
                let imagePath = await (0,lib_S3img/* S3img */.y9)((ref = records[0]) === null || ref === void 0 ? void 0 : ref.image, "uploads/users/");
                return {
                    id: records[0].id,
                    email: records[0].email,
                    name: records[0].name,
                    phone: records[0].mobile,
                    is_verified_mob: mobVerify,
                    is_verfied_email: mailVerify,
                    image: imagePath
                };
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log("----API--get-user-detail-by-id--", err);
        return false;
    }
}
async function Listings(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const userIDmain = body.userID || "";
        const pageNum = body.page || "";
        let currentDay = (0,helper/* getDateTime */.Fc)(4);
        let currentDate = (0,helper/* getDateTime */.Fc)(1);
        //console.log("pageNum ", pageNum, "userIDmain ", userIDmain)
        const { user  } = await (0,react_.getSession)({
            req
        });
        //console.log("OUTER  ----  ", pageNum, user)
        if (pageNum && user) {
            var offset = 10 * (pageNum - 1);
            var limit = 10;
            var records = await db.query("SELECT mb.id,mb.name,mb.logo,mb.phone_number,concat_ws(', ',mb.address,ct.name,st.name) as full_address,mb.city_id,mb.lat,mb.lng,mb.is_claimed,mb.is_verified,de.store_front_image,IF((SELECT COUNT(id) FROM business_packages WHERE business_id =mb.id AND (? BETWEEN begins_on AND ends_on) LIMIT 1) > 0,1,2) as is_paid,de.ivr_number,mb.is_active as approved_status,DATE_FORMAT(mb.created_at,'%d %b %Y') as created_at FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_states st ON st.id = mb.state_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas ar ON ar.id = mb.area_id WHERE mb.deleted_at IS NULL AND mb.user_id=? LIMIT ?,?", [
                currentDate,
                user.id,
                offset,
                limit
            ]);
            //console.log("Search For  -----  ",currentDate, user.id, offset, limit)
            if (records.length > 0) {
                for(var i = 0; i < records.length; i++){
                    records[i].logo = await (0,lib_S3img/* S3img */.y9)(records[i].logo, "uploads/company/logo/", false, records[i].name);
                    records[i].mobile_emails = await db.query("SELECT id,type,text,is_verified,is_verified_phone,phone,email FROM business_mobile_emails WHERE business_id=? AND is_primary='1' AND (type='5')", [
                        records[i].id
                    ]);
                    records[i].packages = await db.query("SELECT m.id as plan_id,p.id,p.package_type,p.begins_on,DATE_FORMAT(p.ends_on,'%d %b %Y') as ends_on,DATEDIFF(ends_on,?) as remaining_days,m.name,m.description,IF(p.package_type='0',IF(m.offer_amt_month!='' && m.offer_amt_month is not null,m.offer_amt_month,m.amount_monthly),IF(m.offer_amt_year!='' && m.offer_amt_year is not null,m.offer_amt_year,m.amount_year)) as plan_price,p.is_current FROM business_packages p LEFT JOIN master_listing_packages m ON m.id = p.package_id WHERE  business_id = ? AND (? BETWEEN begins_on AND ends_on)", [
                        currentDate,
                        records[i].id,
                        currentDate
                    ]);
                //records[i].url = createBusinessURL(records, i)
                }
                return records;
            } else {
                return false;
            }
        } else {
            return false; // no records of this user logout
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
async function addImages(records) {
    const newData = [];
    ///console.log("records",records)
    for(var i = 0; i < records.length; i++){
        var ref, ref5, ref6, ref7;
        var logoID = ((ref = records[i]) === null || ref === void 0 ? void 0 : ref.logo) != "undefined" && ((ref5 = records[i]) === null || ref5 === void 0 ? void 0 : ref5.logo) !== null && ((ref6 = records[i]) === null || ref6 === void 0 ? void 0 : ref6.logo) != "" ? "uploads/category/images/" + ((ref7 = records[i]) === null || ref7 === void 0 ? void 0 : ref7.logo) : "";
        var newLogo = await S3img(logoID);
        //console.log("records[i]",i, records[i])
        var data = {
            ...records[i],
            ["logo"]: newLogo
        };
        newData.push(data);
    }
    records = await newData;
    return records;
}
async function UserDetails_ListingDetails(db, req) {
    try {
        //const body = (typeof req.body === 'object') ? req.body : JSON.parse(req.body);
        const body = req.body;
        //console.log("body", req)
        //const businesID = body.business_id || '';
        const { user  } = await getSession({
            req
        });
        //console.log("user", user)
        if (businesID && user) {
            var records = await db.query("SELECT mb.id,mb.name,mb.logo,mb.phone_number,mb.address,ct.name as city_name,mb.city_id,st.name as state_name,mb.state_id,mb.lat,mb.pincode,mb.lng,mb.is_claimed,mb.is_verified,mb.keywords,(SELECT GROUP_CONCAT(id) FROM master_keywords WHERE FIND_IN_SET(id,mb.keywords)) as keywords_name,mb.company_description,mb.additional_information,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,mb.logo,mb.contact_person,mb.phone_number,mb.tollfree,mb.landmark,mb.area_id,mr.name as area_name,mb.pincode,mb.category,(SELECT GROUP_CONCAT(name) FROM master_categories WHERE FIND_IN_SET(id,mb.category)) as category_name,mb.subcategory,(SELECT GROUP_CONCAT(name) FROM master_sub_categories WHERE FIND_IN_SET(id,mb.subcategory)) as subcategory_name,mb.type_of_business,(SELECT GROUP_CONCAT(name) FROM master_type_of_business WHERE FIND_IN_SET(id,mb.type_of_business)) as type_of_business_name,mb.prefrence,mb.is_active,de.year_establishment,de.whatsapp_no,de.ivr_number,de.book_now_url,de.business_pdf,de.gst_document,de.is_gst_verified,de.register_no,de.register_document,de.is_register_verified,de.pancard_number,de.pancard_document,de.is_pancard_verfied,de.store_front_image,de.store_back_image,de.head_office,de.branch_office,de.other_office,de.no_of_employee FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_states st ON st.id = mb.state_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas mr ON mr.id = mb.area_id WHERE mb.is_active = '1' AND mb.id = ?", [
                businesID
            ]);
            //console.log(records)
            if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
                //console.log("newData", records)
                return records;
            } else {
                return false;
            }
        } else {
            return false; // no records of this user logout
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
async function updateBsicDetails(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        // const body = req.body;
        console.log("body______________", body);
        //const businesID = body.business_id || '';
        var data = (body === null || body === void 0 ? void 0 : body.data) || [];
        if (data && (data === null || data === void 0 ? void 0 : data.id)) {
            var records = await db.query("SELECT id,business_id FROM req_businesses WHERE business_id=? AND request_status='0'", [
                data.id
            ]);
            //console.log(records)
            if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
                var pending_id = records[0].id;
                //update the records
                var updates = await db.query("UPDATE req_businesses SET name=?,address=?,landmark=?,area_id=?,pincode=?,city_id=?,state_id=?,lat=?,lng=? WHERE id=?", [
                    data.business_name,
                    data.address,
                    data.landmark,
                    data.area,
                    data.pincode,
                    data.city,
                    data.state,
                    data.lat,
                    data.long,
                    pending_id, 
                ]);
                // console.log("updatsess", updates)
                if (updates) {
                    var recordsUpdated = await db.query("SELECT mb.business_id as id,mb.name,mb.lat,mb.lng,mb.city_id,mb.state_id,mb.area_id,mb.address FROM req_businesses mb LEFT JOIN master_states st ON st.id = mb.state_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas mr ON mr.id = mb.area_id WHERE request_status='0' AND business_id=?", [
                        data.id
                    ]);
                    return (recordsUpdated === null || recordsUpdated === void 0 ? void 0 : recordsUpdated.length) > 0 ? recordsUpdated[0] : [];
                }
            } else {
                //insert new request
                // console.log(data.id, "business_id")
                var updates = await db.query("INSERT INTO req_businesses SET business_id=?,name=?,address=?,landmark=?,area_id=?,pincode=?,city_id=?,state_id=?,lat=?,lng=?", [
                    data.id,
                    data.business_name,
                    data.address,
                    data.landmark,
                    data.area,
                    data.pincode,
                    data.city,
                    data.state,
                    data.lat,
                    data.long,
                    pending_id, 
                ]);
                // console.log("updatsess", updates)
                if (updates) {
                    var recordsUpdated = await db.query("SELECT mb.business_id as id,mb.name,mb.lat,mb.lng,mb.city_id,mb.state_id,mb.area_id,mb.address FROM req_businesses mb LEFT JOIN master_states st ON st.id = mb.state_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas mr ON mr.id = mb.area_id WHERE request_status='0' AND business_id=?", [
                        data.id
                    ]);
                    // console.log("records", recordsUpdated)
                    return (recordsUpdated === null || recordsUpdated === void 0 ? void 0 : recordsUpdated.length) > 0 ? recordsUpdated[0] : [];
                }
                //console.log("error", err)
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
async function UserFeedback(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const userIDmain = body.userID || "";
        const pageNum = body.page || "";
        //console.log("pageNum ", pageNum, "userIDmain ", userIDmain)
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (pageNum && user) {
            var offset = 10 * (pageNum - 1);
            var limit = 10;
            var records = await db.query("SELECT r.id,r.business_id,r.rating,r.review,b.name,city.name as city_name,ma.name as area_name,DATE_FORMAT(r.created_at,'%M %d, %Y') as created_at,r.is_active from business_rating_reviews r left join businesses b on r.business_id=b.id LEFT JOIN master_cities as city on city.id = b.city_id LEFT JOIN master_areas as ma ON b.area_id=ma.id WHERE r.user_id =? AND (r.is_active='0' || r.is_active='1' || r.is_history='0') AND r.deleted_at IS NULL AND b.id NOT IN (SELECT parent_id FROM business_rating_reviews WHERE parent_id=b.id AND is_active='0') order by r.id desc LIMIT ?,? ", [
                user.id,
                offset,
                limit
            ]);
            //console.log('records===>>>>>>',records)
            if (records.length > 0) {
                for(var i = 0; i < records.length; i++){
                    records[i].url = (0,helper/* createBusinessURL */.Eo)(records[i].business_id, records[i].name, records[i].city_name, records[i].area_name);
                }
                return records;
            } else {
                return false;
            }
        } else {
            return false; // no records of this user logout
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
async function UserEnquiries(db, req) {
    try {
        var ref, ref8, ref9, ref10;
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const userIDmain = body.userID || "";
        const pageNum = body.page || "";
        const business_id = (body === null || body === void 0 ? void 0 : (ref = body.other) === null || ref === void 0 ? void 0 : ref.business_id) || "";
        const enquiryDate = (body === null || body === void 0 ? void 0 : (ref8 = body.other) === null || ref8 === void 0 ? void 0 : ref8.enquiryDate) || "";
        const businessEnquiryEmail = (body === null || body === void 0 ? void 0 : (ref9 = body.other) === null || ref9 === void 0 ? void 0 : ref9.businessEnquiryEmail) || "";
        const businessEnquiryCityId = (body === null || body === void 0 ? void 0 : (ref10 = body.other) === null || ref10 === void 0 ? void 0 : ref10.businessEnquiryCityId) || "";
        //console.log("pageNum ", pageNum, "userIDmain ", userIDmain)
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (pageNum && user) {
            var offset = 10 * (pageNum - 1);
            var limit = 10;
            //business id
            let condition = "";
            if (business_id && business_id != "" && business_id != undefined) {
                condition += " AND b.id=" + business_id;
            }
            if (enquiryDate && enquiryDate != "" && enquiryDate != undefined) {
                condition += " AND DATE_FORMAT(e.lead_date,'%Y-%m-%d')='" + enquiryDate + "' ";
            }
            if (businessEnquiryEmail && businessEnquiryEmail != "" && businessEnquiryEmail != undefined) {
                condition += " AND request.email='" + businessEnquiryEmail + "' ";
            }
            if (businessEnquiryCityId && businessEnquiryCityId != "" && businessEnquiryCityId != undefined) {
                condition += " AND request.city_id='" + businessEnquiryCityId + "' ";
            }
            var records = await db.query("SELECT b.id as business_id,e.id as enquiry_id,b.name as business_name,city.name as city_name,ma.name as area_name,request.name as Uname,request.email as Uemail,request.phone as Uphone,request.product,product_specification,DATE_FORMAT(lead_date,'%M %d, %Y') as lead_date from business_leads_histories as e LEFT JOIN businesses as b ON b.id = e.business_id LEFT JOIN user_requirement_requests as request on request.business_id = e.business_id LEFT JOIN master_cities as city on city.id = request.city_id LEFT JOIN master_areas as ma ON b.area_id=ma.id WHERE b.user_id =? and b.is_active='1' " + condition + " LIMIT ?,?", [
                user.id,
                offset,
                limit
            ]);
            console.log("condition--->>", condition);
            if (records.length > 0) {
                for(var i = 0; i < records.length; i++){
                    records[i].url = (0,helper/* createBusinessURL */.Eo)(records[i].business_id, records[i].business_name, records[i].city_name, records[i].area_name);
                }
                return records;
            } else {
                return false;
            }
        } else {
            return false; // no records of this user logout
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
//get user advertisement listing
async function UserAdvertises(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const userIDmain = body.userID || "";
        const pageNum = body.page || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        let currentDate = (0,helper/* getDateTime */.Fc)(1);
        if (pageNum && user) {
            var offset = 10 * (pageNum - 1);
            var limit = 10;
            var records = await db.query("SELECT businesses.package_type,businesses.city_id, businesses.package_id,businesses.id as ads_id,businesses.business_name,businesses.banner_image,businesses.banner_image_mobile,businesses.name as userName,businesses.email as userEmail,businesses.phone as userPhone,businesses.payment,businesses.per_click_price,businesses.per_impression_price,businesses.per_day_amount,DATEDIFF(businesses.expired_date,?) as remaining_days,DATE_FORMAT(businesses.expired_date,'%d-%m-%Y') as expired_date,(case WHEN(businesses.ads_status = '3') THEN 'Upcoming' WHEN(businesses.ads_status = '2') THEN 'Expaired'  WHEN(businesses.ads_status = '1') THEN 'Published' WHEN(businesses.ads_status = '0') THEN 'Pending' END) as ads_status,(case WHEN(businesses.is_active = '0') THEN 'Inactive'  WHEN(businesses.is_active = '1') THEN 'Active' END) as stop_start,(select GROUP_CONCAT(subCategory.name) as subcategory from master_sub_categories as subCategory where find_in_set(subCategory.id,businesses.sub_category_id) > 0 ) as subcatgoeryName,DATE_FORMAT(businesses.created_at,'%d %b %Y') as date,ct.name as city_name,package.name as package_name,businesses.sub_category_id,banner_position,ads_click,redirect_url,(SELECT count(id) as total_view FROM `ads_view_analytics` WHERE ads_id=businesses.id) as total_view,(SELECT count(id) as total_click FROM `ads_view_analytics` WHERE ads_id=businesses.id AND is_clicked=1) as total_click from advertise_bussiness_requestes as businesses LEFT JOIN master_cities ct ON ct.id = businesses.city_id LEFT JOIN master_ads_packages as package on package.id = businesses.package_id WHERE businesses.user_id =? AND businesses.deleted_at IS NULL ORDER BY businesses.created_at DESC LIMIT ?,? ", [
                currentDate,
                user.id,
                offset,
                limit
            ]);
            console.log("params--->>>", currentDate, user.id, offset, limit);
            if (records.length > 0) {
                const newData = [];
                ///console.log("records",records)
                for(var i = 0; i < records.length; i++){
                    var ref, ref11;
                    let totalUsedAdsAmount = 0;
                    console.log("package---type---", (ref = records[i]) === null || ref === void 0 ? void 0 : ref.package_type);
                    if (records && ((ref11 = records[i]) === null || ref11 === void 0 ? void 0 : ref11.package_type) == "1") {
                        var ref12;
                        //only  impressions
                        //total used amount
                        totalUsedAdsAmount = ((ref12 = records[i]) === null || ref12 === void 0 ? void 0 : ref12.total_view) * records[i].per_impression_price;
                    } else {
                        //total used amount
                        totalUsedAdsAmount = records[i].total_view * records[i].per_impression_price + records[i].total_click * records[i].per_click_price;
                    }
                    // var ads_view_records = await db.query("SELECT count(id) as total_view FROM `ads_view_analytics` WHERE ads_id=?", [records[i].ads_id]);
                    // var ads_click_records = await db.query("SELECT count(id) as total_click FROM `ads_view_analytics` WHERE ads_id=? and is_clicked=1", [records[i].ads_id]);
                    // var totalUsedAdsAmount = (ads_view_records[0].total_view * records[i].per_impression_price) + (ads_click_records[0].total_click * records[i].per_click_price);
                    var totalRemainingAmount = records[i].payment - totalUsedAdsAmount;
                    const isDesktop = useMediaQuery({
                        query: "(max-width: 767.98px)"
                    });
                    if (records[i].banner_image != "" && records[i].banner_image != undefined && records[i].banner_image != null && !isDesktop) {
                        var newBanner = await (0,lib_S3img/* S3img */.y9)(records[i].banner_image, "uploads/advertisements/", true);
                    } else if (records[i].banner_image_mobile != "" && records[i].banner_image_mobile != undefined && records[i].banner_image_mobile != null && isDesktop) {
                        var newBanner = await (0,lib_S3img/* S3img */.y9)(records[i].banner_image_mobile, "uploads/advertisements/", true);
                    } else {
                        var newBanner = "/images/no-image.png";
                    }
                    var ads_time_records = await db.query("SELECT `id`,`day`, `is_open`, `start_time`, `end_time` FROM `ads_show_times` WHERE ads_id=?", [
                        records[i].ads_id
                    ]);
                    var data = {
                        ...records[i],
                        ["imagePath"]: newBanner,
                        ["RemainingAmount"]: totalRemainingAmount,
                        ["no_of_click"]: records[i].total_click,
                        ["no_of_views"]: records[i].total_view,
                        ["ads_time_records"]: ads_time_records
                    };
                    newData.push(data);
                }
                //console.log('newData=======>>>>',newData)
                records = await newData;
                return records;
            } else {
                return false;
            }
        } else {
            return false; // no records of this user logout
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
function checkFileExist(img) {
    try {
        let currentDate = getDateTime(1);
        const path = "./public/temp/" + currentDate + "/";
        var imgPath = path + img;
        if (fs.existsSync(imgPath)) {
            var img = process.env.BASE_URL + "/temp/" + currentDate + "/" + img;
            return img;
        } else {
            return false;
        }
    } catch (err) {
        console.log("File CHEKC ERR", err);
        return false;
    }
}
async function updateMediaDetails(db, req) {
    try {
        //req = bodyParse(req);
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const { user  } = await (0,react_.getSession)({
            req
        });
        var data = (body === null || body === void 0 ? void 0 : body.data) || "";
        console.log("---------body--------------", body);
        //return false;
        if (user && data && (data === null || data === void 0 ? void 0 : data.id)) {
            var ref;
            let current = (0,helper/* getDateTime */.Fc)();
            let details = await db.query("SELECT id FROM business_details WHERE business_id=?", [
                data === null || data === void 0 ? void 0 : data.id
            ]);
            if (data === null || data === void 0 ? void 0 : data.is_video_type) {
                await db.query("UPDATE business_details SET video_type=? WHERE business_id=?", [
                    data.video_type,
                    data === null || data === void 0 ? void 0 : data.id
                ]);
            }
            if (data === null || data === void 0 ? void 0 : data.is_video) {
                let json = [
                    {
                        url: data.video,
                        type: data.video_type
                    }
                ];
                await db.query("INSERT INTO business_changes SET business_id=?,tbl_primary_id=?,change_value=?,user_id=?,tbl_column='video',tbl_name='business_details',created_at=?,action='2'", [
                    data === null || data === void 0 ? void 0 : data.id,
                    details[0].id,
                    JSON.stringify(json),
                    user.id,
                    current
                ]);
            }
            if ((data === null || data === void 0 ? void 0 : data.is_pdf) && (data === null || data === void 0 ? void 0 : data.pdf_blob)) {
                await db.query("INSERT INTO business_changes SET business_id=?,tbl_primary_id=?,change_value=?,user_id=?,tbl_column='business_pdf',tbl_name='business_details',created_at=?,action='2'", [
                    data === null || data === void 0 ? void 0 : data.id,
                    details[0].id,
                    data === null || data === void 0 ? void 0 : data.pdf_blob,
                    user.id,
                    current
                ]);
            }
            if ((data === null || data === void 0 ? void 0 : (ref = data.images) === null || ref === void 0 ? void 0 : ref.length) > 0) {
                var ref13;
                //console.log("------data?.images-------------", data?.images)
                for(var i = 0; i < (data === null || data === void 0 ? void 0 : (ref13 = data.images) === null || ref13 === void 0 ? void 0 : ref13.length); i++){
                    var ref14, ref15;
                    if (((ref14 = data === null || data === void 0 ? void 0 : data.images[i]) === null || ref14 === void 0 ? void 0 : ref14.key_id) == "" && ((ref15 = data === null || data === void 0 ? void 0 : data.images[i]) === null || ref15 === void 0 ? void 0 : ref15.file_name)) {
                        var ref16;
                        //insert new record
                        //upload on s3
                        //let uploadPdf = await S3imgUpload("upload/company/pdf/new_pdf.jpg", data?.images[i]?.url, true);
                        await db.query("INSERT INTO business_changes SET business_id=?,change_value=?,user_id=?,tbl_column='url',tbl_name='business_img_videos',created_at=?,action='1',about='New Image Added'", [
                            data === null || data === void 0 ? void 0 : data.id,
                            (ref16 = data === null || data === void 0 ? void 0 : data.images[i]) === null || ref16 === void 0 ? void 0 : ref16.file_name,
                            user.id,
                            current
                        ]);
                    }
                }
            }
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
async function deleteMediaDetails(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const { user  } = await (0,react_.getSession)({
            req
        });
        let imgID = (body === null || body === void 0 ? void 0 : body.img) || null;
        let businessID = (body === null || body === void 0 ? void 0 : body.business_id) || null;
        if (user && imgID && businessID) {
            await db.query("UPDATE business_img_videos SET is_active='3' WHERE id=? AND business_id=?", [
                imgID,
                businessID
            ]);
            return {
                status: 200,
                msg: "Image deleted successfully."
            };
        } else {
            return {
                status: 201,
                msg: "Not deleted"
            };
        }
    } catch (err) {
        console.log("----log----", err);
        return {
            status: 201,
            msg: "Not deleted"
        };
    }
}
async function ListingReviews(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const businessID = body.id || "";
        const pageNum = body.page || "";
        //console.log("pageNum ", pageNum, "userIDmain ", body)
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (businessID && user && pageNum) {
            var ref;
            var offset = 10 * (pageNum - 1);
            var limit = 10;
            let sort = (body === null || body === void 0 ? void 0 : (ref = body.other) === null || ref === void 0 ? void 0 : ref.sort) || "new";
            let orderBy = "order by de.created_at ASC";
            if (sort == "old") {
                orderBy = "order by de.created_at DESC";
            } else if (sort == "high-rate") {
                orderBy = "order by de.rating DESC";
            } else if (sort == "low-rate") {
                orderBy = "order by de.rating ASC";
            }
            var records = await db.query("SELECT de.id,mb.name as business_name,de.rating,de.review,u.name,u.image as user_image,DATE_FORMAT(de.created_at,'%d-%m-%Y') as date FROM  business_rating_reviews de LEFT JOIN businesses mb ON de.business_id = mb.id LEFT JOIN users u ON u.id = de.user_id WHERE mb.is_active='1' AND mb.user_id=? AND mb.id=? AND de.is_active='1' AND de.deleted_at IS NULL " + orderBy + " LIMIT ?,?", [
                user.id,
                businessID,
                offset,
                limit
            ]);
            //console.log(records)
            if (records.length > 0) {
                // var newData = await addImages(records);
                //console.log("newData", newData)
                return records;
            } else {
                return false;
            }
        } else {
            return false; // no records of this user logout
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
async function ReportListingInaccurate(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const data = body.form || "";
        const businessID = body.id || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user) {
            var ref;
            let currentTime = (0,helper/* getDateTime */.Fc)();
            if (businessID && (data === null || data === void 0 ? void 0 : (ref = data.wrong_type) === null || ref === void 0 ? void 0 : ref.length) > 0 && (data === null || data === void 0 ? void 0 : data.comment)) {
                let typesArr = data === null || data === void 0 ? void 0 : data.wrong_type.map((e)=>{
                    switch(e){
                        case "phone":
                            return 2;
                            break;
                        case "address":
                            return 3;
                            break;
                        case "closed":
                            return 6;
                            break;
                        default:
                            return 4;
                    }
                });
                let types = typesArr.toString();
                var records = await db.query("INSERT INTO business_abuse_incorrect_reportes SET business_id=?,user_id=?,type=?,comment=?,report_type='1',status='0',created_at=?", [
                    businessID,
                    user.id,
                    types,
                    data.comment,
                    currentTime
                ]);
                if ((records === null || records === void 0 ? void 0 : records.insertId) > 0) {
                    return {
                        status: 200,
                        msg: "Your request submitted successfully."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "Something went wrong! Please try after sometime."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "Something went wrong! Please try after sometime."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Please try to login first."
            };
        }
    } catch (err) {
        return {
            status: 201,
            msg: "Something went wrong! Please try after sometime."
        };
    }
}
async function ReportListingAbuse(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const data = body.form || "";
        const businessID = body.business_id || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user) {
            let currentTime = (0,helper/* getDateTime */.Fc)();
            if (businessID && (data === null || data === void 0 ? void 0 : data.comment)) {
                var records = await db.query("INSERT INTO business_abuse_incorrect_reportes SET business_id=?,user_id=?,comment=?,report_type='2',status='0',created_at=?", [
                    businessID,
                    user.id,
                    data.comment,
                    currentTime
                ]);
                if ((records === null || records === void 0 ? void 0 : records.insertId) > 0) {
                    return {
                        status: 200,
                        msg: "Your request submitted successfully."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "Something went wrong! Please try after sometime."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "Something went wrong! Please try after sometime."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Please try to login first."
            };
        }
    } catch (err) {
        console.log("ABUASE API error==========> ", err);
        return {
            status: 201,
            msg: "Something went wrong! Please try after sometime."
        };
    }
}
async function ReportComment(db, req) {
    try {
        var ref;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const data = body.form || "";
        const commentID = body.comment_id || "";
        const commentType = (body === null || body === void 0 ? void 0 : (ref = body.form) === null || ref === void 0 ? void 0 : ref.wrong_type) || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user) {
            let currentTime = (0,helper/* getDateTime */.Fc)();
            if (commentID && (data === null || data === void 0 ? void 0 : data.comment) && commentType) {
                //check comment already available or not
                var records = await db.query("INSERT INTO business_review_abuses SET review_id=?,user_id=?,comment=?,review_type=?,status='0',created_at=?", [
                    commentID,
                    user.id,
                    data.comment,
                    commentType,
                    currentTime
                ]);
                if ((records === null || records === void 0 ? void 0 : records.insertId) > 0) {
                    return {
                        status: 200,
                        msg: "Your request submitted successfully."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "Something went wrong! Please try after sometime."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "Something went wrong! Please try after sometime."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Please try to login first."
            };
        }
    } catch (err) {
        console.log("ReportComment API error==========> ", err);
        return {
            status: 201,
            msg: "Something went wrong! Please try after sometime."
        };
    }
}
async function ReviewSubmit(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const data = body.form || "";
        const reviewPKey = body.id || 0;
        const businessID = body.business_id || "";
        const comment = body.comment || "";
        const rating = (body === null || body === void 0 ? void 0 : body.rating) || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user) {
            let currentTime = (0,helper/* getDateTime */.Fc)();
            //console.log("--------------------------", body?.form,commentType, commentID, data?.comment)
            if (comment && rating) {
                if (reviewPKey > 0) {
                    var ref, ref17;
                    /*
                        //check review already approved or not admin side
                        let checkAlreadyApprovedOrNot = await db.query("SELECT id FROM business_rating_reviews WHERE id=?", [reviewPKey])

                        if (checkAlreadyApprovedOrNot && checkAlreadyApprovedOrNot?.length == 0) {
                            if (body.is_active && body.is_active == '1') {//When user edit the approved feedback
                                //add new record with parent id
                                var records = await db.query("INSERT INTO business_rating_reviews SET parent_id=?,business_id=?,rating=?,review=?,user_id=?,is_active='0',created_at=?", [reviewPKey, businessID, rating, comment, user.id, currentTime])

                            } else {
                                //Update review rating
                                var records = await db.query("UPDATE  business_rating_reviews SET rating=?,review=?,updated_at=? WHERE id=?", [rating, comment, currentTime, reviewPKey])
                            }

                            if (records) {
                                return { status: 200, msg: "Review updated successfully." }
                            }

                        } else {
                            return { status: 201, msg: "Your review already approved." }
                        }*/ //let checkAlreadyApprovedOrNot = await db.query("SELECT id FROM business_rating_reviews WHERE id=?", [reviewPKey])
                    let checkAlreadyApprovedOrNot = await db.query("SELECT id,is_active FROM business_rating_reviews WHERE id=? ", [
                        reviewPKey
                    ]);
                    if (checkAlreadyApprovedOrNot && ((ref = checkAlreadyApprovedOrNot[0]) === null || ref === void 0 ? void 0 : ref.is_active) == "0") {
                        if (body.is_active && body.is_active == "1") {
                            //When user edit the approved feedback
                            //add new record with parent id
                            var records = await db.query("INSERT INTO business_rating_reviews SET parent_id=?,business_id=?,rating=?,review=?,user_id=?,is_active='0',created_at=?", [
                                reviewPKey,
                                businessID,
                                rating,
                                comment,
                                user.id,
                                currentTime
                            ]);
                        } else {
                            //Update review rating
                            var records = await db.query("UPDATE  business_rating_reviews SET rating=?,review=?,updated_at=? WHERE id=?", [
                                rating,
                                comment,
                                currentTime,
                                reviewPKey
                            ]);
                        }
                        if (records) {
                            return {
                                status: 200,
                                msg: "Review updated successfully."
                            };
                        }
                    } else if (checkAlreadyApprovedOrNot && ((ref17 = checkAlreadyApprovedOrNot[0]) === null || ref17 === void 0 ? void 0 : ref17.is_active) == "1") {
                        //add new record with parent id
                        var records = await db.query("INSERT INTO business_rating_reviews SET parent_id=?,business_id=?,rating=?,review=?,user_id=?,is_active='0',created_at=?", [
                            reviewPKey,
                            businessID,
                            rating,
                            comment,
                            user.id,
                            currentTime
                        ]);
                        if (records) {
                            return {
                                status: 200,
                                msg: "Review updated successfully."
                            };
                        }
                    } else {
                        return {
                            status: 201,
                            msg: "Your review already approved."
                        };
                    }
                } else if (businessID && businessID != "") {
                    //insert review rating
                    let detailsReview = await db.query("SELECT id FROM business_rating_reviews WHERE business_id=? AND user_id=? AND deleted_at IS NULL AND is_active != '2' AND is_history='0'", [
                        businessID,
                        user.id
                    ]);
                    if ((detailsReview === null || detailsReview === void 0 ? void 0 : detailsReview.length) > 0) {
                        return {
                            status: 201,
                            msg: "Your review already submitted."
                        };
                    } else {
                        var records = await db.query("INSERT INTO business_rating_reviews SET business_id=?,rating=?,review=?,user_id=?,is_active='0',created_at=?", [
                            businessID,
                            rating,
                            comment,
                            user.id,
                            currentTime
                        ]);
                        if ((records === null || records === void 0 ? void 0 : records.insertId) > 0) {
                            return {
                                status: 200,
                                msg: "Your comment received successfully and under review."
                            };
                        } else {
                            return {
                                status: 201,
                                msg: "Something went wrong! Please try after sometime."
                            };
                        }
                    }
                }
            } else {
                return {
                    status: 201,
                    msg: "Something went wrong! Please try after sometime."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Please try to login first."
            };
        }
    } catch (err) {
        console.log("ReportComment API error==========> ", err);
        return {
            status: 201,
            msg: "Something went wrong! Please try after sometime."
        };
    }
}
async function DeleteReview(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const reviewPKey = body.id || 0;
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user) {
            let currentTime = (0,helper/* getDateTime */.Fc)();
            if (reviewPKey > 0) {
                if (reviewPKey > 0) {
                    //Update review rating
                    var records = await db.query("UPDATE  business_rating_reviews SET deleted_at=? WHERE id=?", [
                        currentTime,
                        reviewPKey
                    ]);
                    if (records) {
                        return {
                            status: 200,
                            msg: "Feedback successfully deleted."
                        };
                    }
                } else {
                    //insert review rating
                    return {
                        status: 201,
                        msg: "Something went wrong! Please try after sometime."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "Something went wrong! Please try after sometime."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Please try to login first."
            };
        }
    } catch (err) {
        console.log("Delete rating review API error==========> ", err);
        return {
            status: 201,
            msg: "Something went wrong! Please try after sometime."
        };
    }
}
//user active plan listing
async function UserActivePlanListing(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //console.log("pageNum ", pageNum, "userIDmain ", body)
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user) {
            let currentDate = (0,helper/* getDateTime */.Fc)(1);
            // let activePlanListing = await db.query("SELECT m.id as plan_id,b.id as business_id,p.id,p.package_type,p.begins_on,DATE_FORMAT(p.ends_on,'%d %b %Y') as ends_on,DATEDIFF(ends_on,?) as remaining_days,b.name as business_name,b.city_id,m.name,m.description,IF(p.package_type='0',IF(m.offer_amt_month!='' && m.offer_amt_month is not null,m.offer_amt_month,m.amount_monthly),IF(m.offer_amt_year!='' && m.offer_amt_year is not null,m.offer_amt_year,m.amount_year)) as plan_price,p.is_current  FROM business_packages p LEFT JOIN master_listing_packages m ON m.id = p.package_id LEFT JOIN businesses b ON p.business_id=b.id WHERE (p.is_current='1' || p.is_current='2') AND b.user_id=? AND (? BETWEEN p.begins_on AND p.ends_on) order by p.ends_on asc", [currentDate, user.id, currentDate])
            let activePlanListing = await db.query("SELECT m.id as plan_id,b.id as business_id,p.id,p.package_type,p.begins_on,DATE_FORMAT(p.ends_on,'%d %b %Y') as ends_on,DATEDIFF(ends_on,?) as remaining_days,b.name as business_name,b.city_id,m.name,m.description,IF(p.package_type='0',IF(m.offer_amt_month!='' && m.offer_amt_month is not null,m.offer_amt_month,m.amount_monthly),IF(m.offer_amt_year!='' && m.offer_amt_year is not null,m.offer_amt_year,m.amount_year)) as plan_price,p.is_current  FROM business_packages p LEFT JOIN master_listing_packages m ON m.id = p.package_id LEFT JOIN businesses b ON p.business_id=b.id WHERE (p.is_current='1' || p.is_current='2') AND b.user_id=? order by p.ends_on asc", [
                currentDate,
                user.id
            ]);
            if (activePlanListing.length > 0) {
                return activePlanListing;
            } else {
                return false;
            }
        } else {
            return false; // no records of this user logout
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
//user business listing
async function UserBusinessListing(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //console.log("pageNum ", pageNum, "userIDmain ", body)
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user) {
            let businessRecords = await db.query("SELECT  id,city_id,name  FROM businesses WHERE user_id=? AND is_active='1' AND deleted_at IS NULL", [
                user.id
            ]);
            if (businessRecords.length > 0) {
                return businessRecords;
            } else {
                return false;
            }
        } else {
            return false; // no records of this user logout
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
//get user wallet amount
async function getUserWalletAmount(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
    const current_date = (0,helper/* getDateTime */.Fc)(1); //current date time
    const session = await (0,react_.getSession)({
        req
    });
    // add notify me for package in business
    if (session && session.user.id > 0) {
        var ref, ref18;
        const user_id = session.user.id;
        var userWallet = await db.query("SELECT SUM(COALESCE(CASE WHEN debit_credit = 1 THEN amount END,0)) total_credits ,SUM(COALESCE(CASE WHEN debit_credit = 2 THEN amount END,0)) total_debits,SUM(COALESCE(CASE WHEN debit_credit = 1 THEN amount END,0))-SUM(COALESCE(CASE WHEN debit_credit = 2 THEN amount END,0)) total_balance FROM user_wallets WHERE user_id=?", [
            user_id
        ]);
        await db.end();
        let userWalletTotalAmount = ((ref = userWallet[0]) === null || ref === void 0 ? void 0 : ref.total_balance) ? (ref18 = userWallet[0]) === null || ref18 === void 0 ? void 0 : ref18.total_balance : 0.0;
        //check amount is negative than we store 0 in amount
        if (Math.sign(userWalletTotalAmount) === -1) {
            userWalletTotalAmount = 0.0;
        }
        return {
            status: 200,
            wallet_amount: userWalletTotalAmount
        };
    /*if (couponRecords.length > 0) {
            return { "status": 200, "wallet_amount": userWallet[0].total_balance }
        }
        else {
            return { "status": 201, "msg": "Some" };
        }*/ }
}
//user wallet history listing
async function getUserWalletHistoryListing(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const pageNum = body.page || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        // add notify me for package in business
        if (pageNum && user) {
            var offset = 10 * (pageNum - 1);
            var limit = 10;
            const user_id = user.id;
            var userWallet = await db.query("SELECT id,user_id,debit_credit,amount,description,type,(CASE WHEN type=1 THEN 'Advertisement' WHEN type=2 THEN 'Reffer and Earn' ELSE 'Business Packages' END) as txn_type,DATE_FORMAT(created_at,'%d-%m-%Y') as date FROM user_wallets WHERE user_id=? ORDER BY id DESC LIMIT ?,?", [
                user_id,
                offset,
                limit
            ]);
            await db.end();
            if (userWallet.length > 0) {
                //return {...userWallet,walletTotal}
                return userWallet;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log("error", err);
        return false;
    }
}
//debit and credit user wallet amount
async function DebitCreditUserWalletAmount(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const type = body.type;
    const type_id = body.type_id;
    const amount = body.amount;
    const debit_credit = body.debit_credit;
    //console.log(body);
    const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
    const session = await (0,react_.getSession)({
        req
    });
    // add notify me for package in business
    if (session && session.user.id > 0) {
        const user_id = session.user.id;
        //insert new records
        const insert_debit_credit_amount = await db.query("INSERT INTO user_wallets SET user_id=?,debit_credit=?,amount=?,type=?,type_id=?,created_at=?", [
            user_id,
            debit_credit,
            amount,
            type,
            type_id,
            current_datetime
        ]);
        await db.end();
        const credit_debit_type = debit_credit == 1 ? "Credit" : "Debit";
        if (insert_debit_credit_amount.affectedRows > 0) {
            return {
                status: 200,
                msg: "Wallet amount " + credit_debit_type + " successfully"
            };
        } else {
            return {
                status: 201,
                msg: "Something went wrong"
            };
        }
    }
}

;// CONCATENATED MODULE: ./methods/UpdateUserProfile.js




async function UpdateProfile(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const email = body.email || "";
    const name = body.name || "";
    const phone = body.phone || "";
    const address = body.address || "";
    const birthdate = body.birthdate || "";
    const anniversary = body.anniversary || null;
    const gender = body.gender || "";
    const pincode = body.pincode || "";
    const city_id = body.city_id || "";
    const state_id = body.state_id || "";
    const area_id = body.area_id || "";
    const occupation = body.occupation || "";
    const marital = body.marital || "";
    const password = body.password || "";
    const id = body.id || "";
    if (id != "" && email != "" && name != "" && phone != "" && address != "" && gender != "" && pincode != "" && city_id != "" && state_id != "" && occupation != "") {
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        const current_date = (0,helper/* getDateTime */.Fc)(1); //current date
        // check email or phone already exist 
        var checkMobile = await db.query("SELECT id FROM users WHERE mobile=? and id!=? and deleted_at IS NULL", [
            phone,
            id
        ]);
        var checkEmail = await db.query("SELECT id FROM users WHERE email=? and id!=? and deleted_at IS NULL", [
            email,
            id
        ]);
        if (checkMobile.length > 0) {
            return {
                "status": 201,
                "msg": "This phone number already exists please use another phone number."
            };
        } else if (checkEmail.length > 0) {
            return {
                "status": 201,
                "msg": "This email address already exists please use another email address."
            };
        } else {
            //Upload buisness logo image
            /*
             let userProfile = '';
             if (body.user_profile && body.user_profile.length > 0) {
                 var s3Patch = 'uploads/users/' + body.user_profile;
                 var imageURL = current_date + '/' + body.user_profile //get uploaded image from server
                 var uploadImageOnS3 = await S3imgUpload(s3Patch, imageURL)//upload image on s3
                 if (uploadImageOnS3) {
                     userProfile = body.user_profile
                     //unlink image from folder 
                     var filePath = `./public/temp/${current_date}/` + body.user_profile
                     if (fs.existsSync(filePath)) {
                         fs.unlinkSync(filePath)
                     }
 
                 }
             }
             console.log(userProfile)*/ //get user detail by id
            var getUserDetail = await db.query("SELECT id,mobile,email,is_verify_mob,is_verify_email FROM users WHERE id=?", [
                id
            ]);
            var verifyEmail = "1" //           
            ;
            if (phone && getUserDetail[0].email !== email || getUserDetail[0].email == email && getUserDetail[0].is_verify_email == "0") {
                verifyEmail = "0";
            }
            var verifyPhone = "1" //           
            ;
            if (phone && getUserDetail[0].mobile !== phone || getUserDetail[0].mobile == phone && getUserDetail[0].is_verify_mob == "0") {
                verifyPhone = "0";
            }
            // update the data for the user profile
            const updateRe = await db.query("UPDATE `users` SET `name`=?,`email`=?,`is_verify_email`=?,`mobile`=?,`is_verify_mob`=?,`sex`=?,`dob`=?,`date_of_anniversary`=?,`address`=?,`city_id`=?,`state_id`=?,`pincode`=?,`occupation`=?,`updated_at`=? WHERE id=?", [
                name,
                email,
                verifyEmail,
                phone,
                verifyPhone,
                gender,
                birthdate,
                anniversary,
                address,
                city_id,
                state_id,
                pincode,
                occupation,
                current_datetime,
                id
            ]);
            await db.end();
            return true;
        }
    } else {
        return false;
    }
}
//Update user profile image
async function UpdateUserProfileImage(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const user_profile = body.user_profile || "";
    const id = body.id || "";
    if (id != "" && user_profile != "") {
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        const current_date = (0,helper/* getDateTime */.Fc)(1); //current date        
        // update the data for the user profile
        const updateRecord = await db.query("UPDATE `users` SET `updated_at`=?,`image`=? WHERE id=?", [
            current_datetime,
            user_profile,
            id
        ]);
        await db.end();
        if (updateRecord.affectedRows < 1) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}

;// CONCATENATED MODULE: ./methods/Common.js





async function StateWiseCities(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        if (body.state) {
            var cities = await db.query("SELECT id,name FROM master_cities WHERE is_active='1' AND deleted_at IS NULL AND state_id=? ORDER BY name ASC", [
                body.state
            ]);
            await db.end();
            //console.log("CITIES")
            //console.log(cities)
            if (cities.length > 0) {
                return cities;
            }
            return false;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
async function StateList(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        var state = await db.query("SELECT id,name FROM master_states WHERE is_active='1' AND deleted_at IS NULL ORDER BY name ASC");
        await db.end();
        if (state.length > 0) {
            return state;
        }
        return false;
    } catch (err) {
        return false;
    }
}
async function CityWiseAreaList(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        if (body.city) {
            var area = await db.query("SELECT id,name FROM master_areas WHERE is_active='1' AND deleted_at IS NULL AND city_id=? ORDER BY name ASC", [
                body.city
            ]);
            await db.end();
            if (area.length > 0) {
                return area;
            }
            return false;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
async function ReferEarnService(db, req) {
    try {
        var ref, ref1, ref2, ref3, ref4;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //console.log("--- body ---------",body)
        let serviceID = (body === null || body === void 0 ? void 0 : (ref = body.form) === null || ref === void 0 ? void 0 : ref.services) || null;
        let email = (body === null || body === void 0 ? void 0 : (ref1 = body.form) === null || ref1 === void 0 ? void 0 : ref1.email) || null;
        let phone = (body === null || body === void 0 ? void 0 : (ref2 = body.form) === null || ref2 === void 0 ? void 0 : ref2.phone) || null;
        let name = (body === null || body === void 0 ? void 0 : (ref3 = body.form) === null || ref3 === void 0 ? void 0 : ref3.name) || null;
        let share_type = (body === null || body === void 0 ? void 0 : (ref4 = body.form) === null || ref4 === void 0 ? void 0 : ref4.share_type) || null;
        let { user  } = await (0,react_.getSession)({
            req
        });
        let userID = (user === null || user === void 0 ? void 0 : user.id) || null;
        if (serviceID && email && name && userID && phone) {
            //check self
            let check = await db.query("SELECT id FROM users WHERE id=? AND (mobile =? OR email=?)", [
                userID,
                phone,
                email
            ]);
            if ((check === null || check === void 0 ? void 0 : check.length) > 0) {
                return {
                    status: 201,
                    msg: "You can not refer to your self. Please share this with others, such as your friends or family."
                };
            } else {
                //	1=>whatapps,2=>facebook,3=>sms,4=>email ,5->twitter
                let objectShare = {
                    whatsapp: "1",
                    facebook: "2",
                    sms: "3",
                    email: "4",
                    twitter: "5"
                };
                let shareID = objectShare[share_type];
                let current = (0,helper/* getDateTime */.Fc)();
                let dataInsert = await db.query("INSERT INTO refer_earn SET user_id=?,service_id=?,refer_name=?,refer_type=?,refer_email=?,created_at=?,refer_phone=?", [
                    userID,
                    serviceID,
                    name,
                    shareID,
                    email,
                    current,
                    phone
                ]);
                if ((dataInsert === null || dataInsert === void 0 ? void 0 : dataInsert.insertId) > 0) {
                    /*const payload = { pkID: dataInsert?.insertId };
                    const secret = process.env.SECRET_KEYID;
                    const options = { algorithm: 'HS256' };
    
                    const payloadString = JSON.stringify(payload)
                    const payloadBuffer = Buffer.from(payloadString);
                    const compressed = zlib.deflateSync(payloadBuffer);
                    const token = jwt.sign(compressed, secret, options);*/ let token = external_crypto_js_default().AES.encrypt(JSON.stringify({
                        pkID: dataInsert === null || dataInsert === void 0 ? void 0 : dataInsert.insertId
                    }), process.env.SECRET_KEYID).toString();
                    token = btoa(token); // base 64 encode
                    //var token = jwt.sign({ pkID: dataInsert?.insertId }, process.env.SECRET_KEYID);
                    let url = process.env.BASE_URL + "/refer-earn/" + token;
                    const setting = await db.query("SELECT admin_email as email,company_name,phone FROM setting_company WHERE id=?", [
                        "1"
                    ]);
                    let adminPhone = setting[0].phone || "";
                    if (shareID == "3") {
                        let serviceName = await db.query("SELECT name FROM master_services WHERE id = ?", [
                            serviceID
                        ]);
                        //send SMS
                        const templateID = "1407168674591085127";
                        const template = encodeURIComponent(` Hello Admin, A New Enquiry  through Refer and Earn has been recieved on Website.,
              \n Referee Name :${user.name}
              \n Service Name : ${serviceName[0].name}
              \n Referer Name  : ${name}
              \n Thanks, 
              \n Dialmenow.in 
            `);
                        const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${adminPhone}&sms=${template}&tempid=${templateID}`;
                        try {
                            const msgReferToEarn = await fetch(APIpath);
                        } catch (error) {
                            console.error("Error sending SMS:", error);
                        }
                        db.query("INSERT INTO sms_logs SET subject='Refer and Earn',message=?,phone =?,created_at=?", [
                            template,
                            phone,
                            current
                        ]);
                        return {
                            status: 200,
                            msg: "Refer successfully.",
                            url: url
                        };
                    } else if (shareID == "4") {
                        var ref5;
                        //send Email
                        const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                            "25"
                        ]);
                        //console.log("adminTemplate", adminTemplate)
                        var emailval = adminTemplate[0].description;
                        var mapObj = {
                            "@referee_name": name,
                            "@user_name": user.name,
                            "@company": "Dailmenow",
                            "@url": url
                        };
                        emailval = emailval === null || emailval === void 0 ? void 0 : emailval.replace(/@referee_name|@user_name|@company|@url|@business_name/gi, function(matched) {
                            return mapObj[matched];
                        });
                        let subject = (ref5 = adminTemplate[0]) === null || ref5 === void 0 ? void 0 : ref5.title;
                        const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                            subject,
                            emailval,
                            email,
                            current
                        ]);
                        return {
                            status: 200,
                            msg: "Refer successfully.",
                            url: url
                        };
                    } else {
                        return {
                            status: 200,
                            msg: "success",
                            url: url
                        };
                    }
                } else {
                    return {
                        status: 201,
                        msg: "Something went wrong. Please try after sometime."
                    };
                }
            }
        } else {
            return {
                status: 201,
                msg: "Invalid request."
            };
        }
    } catch (err) {
        console.log("------- ---------- ", err);
        return {
            status: 201,
            msg: "Something went wrong. Please try after sometime."
        };
    }
}
async function ServiceList(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        // console.log("--- body ---------", body)
        let serviceID = (body === null || body === void 0 ? void 0 : body.service_id) || "";
        let details = await db.query("SELECT id,name,redirect_link FROM master_services WHERE is_active='1' AND deleted_at IS NULL ORDER BY name ASC");
        //console.log("sevice list --------",details)
        if (details.length > 0) {
            return {
                status: 200,
                data: details
            };
        } else {
            return {
                status: 201,
                msg: "No records"
            };
        }
    } catch (err) {
        return {
            status: 201,
            msg: "No records"
        };
    }
}
async function ReferEarnListing(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //console.log("--- body ---------", body)
        const pageNum = body.page || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (pageNum && user) {
            var offset = 20 * (pageNum - 1);
            var limit = 20;
            let details = await db.query("SELECT r.id,r.refer_name,s.name as service_name,r.refer_type,r.refer_email,DATE_FORMAT(r.created_at,'%d %b %Y') as send_date,r.is_approved,r.cashback_amt FROM refer_earn r LEFT JOIN master_services s ON s.id = r.service_id WHERE r.user_id=? AND r.status='1' ORDER BY r.created_at DESC LIMIT ?,?", [
                user.id,
                offset,
                limit
            ]);
            //console.log("ReferEarnListing list --------", details)
            if (details.length > 0) {
                return {
                    status: 200,
                    data: details
                };
            } else {
                return {
                    status: 201,
                    msg: "No records"
                };
            }
        } else {
            return {
                status: 201,
                msg: "No records"
            };
        }
    } catch (err) {
        console.log("error --------", err);
        return {
            status: 201,
            msg: "No records"
        };
    }
}
async function ReferDetails(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //console.log("--- body ReferDetails---------", body)
        let id = (body === null || body === void 0 ? void 0 : body.id) || "";
        if (id) {
            let originalKey = atob(id);
            //console.log("originalKey  ", originalKey)
            let decoded = external_crypto_js_default().AES.decrypt(originalKey, process.env.SECRET_KEYID).toString((external_crypto_js_default()).enc.Utf8);
            decoded = JSON.parse(decoded);
            //var decoded = jwt.verify(id, process.env.SECRET_KEYID);
            console.log("----  decoded    ------", decoded);
            let detailsID = (decoded === null || decoded === void 0 ? void 0 : decoded.pkID) || null;
            if (detailsID) {
                let details = await db.query("SELECT r.id,r.refer_name,s.name as service_name,r.refer_type,r.refer_email,DATE_FORMAT(r.created_at,'%d %b %Y') as send_date,r.refer_query,r.is_approved,r.cashback_amt,s.icon FROM refer_earn r LEFT JOIN master_services s ON s.id = r.service_id WHERE r.id=? AND r.status='1' ORDER BY r.created_at DESC", [
                    detailsID
                ]);
                if (details.length > 0) {
                    details[0].icon = await (0,lib_S3img/* S3img */.y9)(details[0].icon, "uploads/services/");
                    return {
                        status: 200,
                        data: details
                    };
                } else {
                    return {
                        status: 201,
                        msg: "No records"
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "No records"
                };
            }
        } else {
            return {
                status: 201,
                msg: "No records"
            };
        }
    } catch (err) {
        console.log("error --------", err);
        return {
            status: 201,
            msg: "No records"
        };
    }
}
async function ReferDetailsSubmit(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //console.log("--- body ReferDetails submit---------", body)
        let id = (body === null || body === void 0 ? void 0 : body.id) || "";
        let query = (body === null || body === void 0 ? void 0 : body.query) || "";
        if (id && query) {
            //var decoded = jwt.verify(id, process.env.SECRET_KEYID);
            // console.log("----  decoded   submit ------", decoded)
            let originalKey = atob(id); // decode base 64
            console.log(id, " --- originalKey  ", originalKey);
            let decoded = external_crypto_js_default().AES.decrypt(originalKey, process.env.SECRET_KEYID).toString((external_crypto_js_default()).enc.Utf8);
            decoded = JSON.parse(decoded);
            let detailsID = (decoded === null || decoded === void 0 ? void 0 : decoded.pkID) || null;
            if (detailsID) {
                let details = await db.query("SELECT r.id,r.refer_name,r.refer_query,s.name as service_name,r.refer_type,r.refer_email,DATE_FORMAT(r.created_at,'%d %b %Y') as send_date,r.is_approved,r.cashback_amt,s.icon,u.name as referer_name,u.mobile as referer_mobile FROM refer_earn r LEFT JOIN master_services s ON s.id = r.service_id LEFT JOIN users u ON u.id = r.user_id WHERE r.id=? AND r.status='1' ORDER BY r.created_at DESC", [
                    detailsID
                ]);
                if (details.length > 0) {
                    let current = (0,helper/* getDateTime */.Fc)();
                    let status = await db.query("UPDATE refer_earn SET refer_query=? WHERE id=?", [
                        query,
                        details[0].id
                    ]);
                    if ((status === null || status === void 0 ? void 0 : status.affectedRows) > 0) {
                        var ref;
                        const adminMail = await db.query("SELECT admin_email FROM setting_company WHERE id='1'");
                        const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                            "26"
                        ]);
                        //console.log("adminTemplate", adminTemplate)
                        var emailval = adminTemplate[0].description;
                        var mapObj = {
                            "@referee_name": details[0].refer_name,
                            "@referee_email": details[0].refer_email,
                            "@service_name": details[0].service_name,
                            "@referee_query": query,
                            "@referer_name": details[0].referer_name,
                            "@referer_mobile": details[0].referer_mobile
                        };
                        emailval = emailval === null || emailval === void 0 ? void 0 : emailval.replace(/@referee_name|@referee_email|@service_name|@referee_query|@referer_name|@referer_mobile/gi, function(matched) {
                            return mapObj[matched];
                        });
                        let subject = (ref = adminTemplate[0]) === null || ref === void 0 ? void 0 : ref.title;
                        const insertAdminEmail = db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                            subject,
                            emailval,
                            adminMail[0].admin_email,
                            current
                        ]);
                        return {
                            status: 200,
                            msg: "Your query submitted successfully."
                        };
                    } else {
                        return {
                            status: 201,
                            msg: "Something went wrong! Please try after some time."
                        };
                    }
                } else {
                    return {
                        status: 201,
                        msg: "Something went wrong! Please try after some time."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "Invalid link! Please try with another link."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Something went wrong! Please try after some time."
            };
        }
    } catch (err) {
        console.log("error --------", err);
        return {
            status: 201,
            msg: "Something went wrong! Please try after some time."
        };
    }
}
async function UserToeknNotify(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let token = (body === null || body === void 0 ? void 0 : body.token) || null;
        let { user  } = await (0,react_.getSession)({
            req
        });
        if (token && user) {
            db.query("UPDATE users SET fcm_token=? WHERE id=?", [
                token,
                user.id
            ]);
        } else {
            return false;
        }
    } catch  {
        return false;
    }
}
async function getFeedbackDetails(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const data = (body === null || body === void 0 ? void 0 : body.data) || null;
        //console.log("-------log of ----------",body)
        if (body.is_verify) {
            let codeVerify = body.code || "";
            try {
                var ref, ref6;
                let testKey = external_jsonwebtoken_default().sign({
                    data: {
                        type: "business",
                        id: 5,
                        mail_id: "rajas1@gmail.com"
                    }
                }, process.env.SECRET_KEYID);
                //console.log("         ",testKey)
                var decoded = external_jsonwebtoken_default().verify(codeVerify, process.env.SECRET_KEYID);
                //console.log(process.env.SECRET_KEYID,"-------DECODED DATA----------", decoded)
                var id = (decoded === null || decoded === void 0 ? void 0 : (ref = decoded.data) === null || ref === void 0 ? void 0 : ref.id) || "";
                var email = (decoded === null || decoded === void 0 ? void 0 : (ref6 = decoded.data) === null || ref6 === void 0 ? void 0 : ref6.mail_id) || "";
                if (id != "" && id !== "undefined" && email) {
                    var records = await db.query("SELECT id,status FROM users_feedbacks WHERE id=?", [
                        id
                    ]);
                    //console.log("RECORDS ======> ",records)
                    if (records.length > 0 && records[0].status == "0") {
                        if (data) {
                            //insert data
                            return {
                                status: 200,
                                msg: "Your feedback submitted successfully."
                            };
                        } else {
                            //return details
                            return {
                                status: 200,
                                msg: "Your feedback submitted successfully."
                            };
                        }
                    } else if (records.length > 0 && records[0].status == "1") {
                        return {
                            status: 201,
                            msg: "Your feedback already received."
                        };
                    } else {
                        return {
                            status: 201,
                            msg: "Sorry! your feedback link expired or invalid."
                        };
                    }
                } else {
                    return {
                        status: 201,
                        msg: "Sorry! your feedback link expired or invalid."
                    };
                }
            } catch (errD) {
                console.log(errD);
                return {
                    status: 201,
                    msg: "Sorry! your feedback link expired or invalid."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Sorry! your feedback link expired or invalid."
            };
        }
    } catch (err) {
        console.log(err);
        return {
            status: 201,
            msg: "Sorry! your feedback link expired or invalid."
        };
    }
}
async function submitFeedbackDetails(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const data = (body === null || body === void 0 ? void 0 : body.data) || null;
        const form = (body === null || body === void 0 ? void 0 : body.form) || null;
        let codeVerify = body.code || "";
        // console.log("-------log of ----------",body)
        if (form && codeVerify) {
            try {
                var ref, ref7;
                let json = [
                    {
                        label: "How was your experience at Dialmenow?",
                        value: form === null || form === void 0 ? void 0 : form.experiance
                    },
                    {
                        label: "User suggestion",
                        value: form === null || form === void 0 ? void 0 : form.message
                    }, 
                ];
                var decoded = external_jsonwebtoken_default().verify(codeVerify, process.env.SECRET_KEYID);
                //console.log(process.env.SECRET_KEYID,"-------DECODED DATA----------", decoded)
                var id = (decoded === null || decoded === void 0 ? void 0 : (ref = decoded.data) === null || ref === void 0 ? void 0 : ref.id) || "";
                var email = (decoded === null || decoded === void 0 ? void 0 : (ref7 = decoded.data) === null || ref7 === void 0 ? void 0 : ref7.mail_id) || "";
                if (id != "" && id !== "undefined" && email) {
                    var records = await db.query("SELECT id,status FROM users_feedbacks WHERE id=?", [
                        id
                    ]);
                    //console.log("RECORDS ======> ",records)
                    if (records.length > 0 && records[0].status == "0") {
                        if (form) {
                            let datetime = (0,helper/* getDateTime */.Fc)();
                            await db.query("UPDATE users_feedbacks SET comment=?,status='1',created_at=? WHERE id=?", [
                                JSON.stringify(json),
                                datetime,
                                id
                            ]);
                            //insert data
                            return {
                                status: 200,
                                msg: "Your feedback submitted successfully."
                            };
                        } else {
                            //return details
                            return {
                                status: 200,
                                msg: "You can submit feedback."
                            };
                        }
                    } else if (records.length > 0 && records[0].status == "1") {
                        return {
                            status: 201,
                            msg: "Your feedback already received."
                        };
                    } else {
                        return {
                            status: 201,
                            msg: "Sorry! your feedback link expired or invalid."
                        };
                    }
                } else {
                    return {
                        status: 201,
                        msg: "Sorry! your feedback link expired or invalid."
                    };
                }
            } catch (errD) {
                console.log(errD);
                return {
                    status: 201,
                    msg: "Sorry! your feedback link expired or invalid."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Sorry! your feedback link expired or invalid."
            };
        }
    } catch (err) {
        console.log(err);
        return {
            status: 201,
            msg: "Sorry! your feedback link expired or invalid."
        };
    }
}
async function mediaFeedDetails(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let slug = (body === null || body === void 0 ? void 0 : body.url) || "";
        let id = (body === null || body === void 0 ? void 0 : body.id) || "";
        if (slug && id) {
            let details = await db.query("SELECT id,title,description,meta_title,meta_description,meta_keywords,media_type,image_video FROM media_feeds WHERE status='1' AND slug=? AND id=?", [
                slug,
                id
            ]);
            if ((details === null || details === void 0 ? void 0 : details.length) > 0) {
                if (details[0].media_type == "1") {
                    let img = await (0,lib_S3img/* S3img */.y9)(details[0].image_video, "uploads/media_feeds/");
                    details[0].image_video = img;
                }
                let otherDetails = await db.query("SELECT id,title,slug,image_video,media_type,DATE_FORMAT(created_at,'%b %d, %Y') as date FROM media_feeds WHERE status='1' AND id != ? ORDER BY created_at ASC LIMIT 5", [
                    details[0].id
                ]);
                if ((otherDetails === null || otherDetails === void 0 ? void 0 : otherDetails.length) > 0) {
                    for(var i = 0; i < otherDetails.length; i++){
                        if (otherDetails[i].media_type == "1") {
                            let img = await (0,lib_S3img/* S3img */.y9)(otherDetails[i].image_video, "uploads/media_feeds/", false, otherDetails[i].title);
                            otherDetails[i].image_video = img;
                        }
                    }
                }
                return {
                    status: 200,
                    data: details[0],
                    other: otherDetails
                };
            } else {
                return {
                    status: 201,
                    msg: "No records available."
                };
            }
        } else {
            return {
                status: 201,
                msg: "No details found."
            };
        }
    } catch (err) {
        console.log("error in feeds ==========>", err);
        return {
            status: 201,
            msg: "No details found."
        };
    }
}
async function autoSearchSubcategories(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const keywordValue = body.keyword || "";
    if (keywordValue) {
        var categoryOption = await db.query("SELECT id,name as label FROM master_sub_categories WHERE is_active='1' AND deleted_at IS NULL AND name LIKE ?  order by sort asc LIMIT 20", [
            "%" + keywordValue + "%"
        ]);
        return {
            status: 200,
            data: categoryOption
        };
    } else {
        return {
            status: 201,
            msg: "No records found."
        };
    }
}
async function autoSearchKeywords(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const keywordValue = body.keyword || "";
    if (keywordValue) {
        var categoryOption = await db.query("SELECT id,keyword as label FROM master_keywords WHERE is_approved='1' AND is_active='1' AND deleted_at IS NULL AND keyword LIKE ?  order by keyword asc LIMIT 20", [
            "%" + keywordValue + "%"
        ]);
        return {
            status: 200,
            data: categoryOption
        };
    } else {
        return {
            status: 201,
            msg: "No records found."
        };
    }
}
async function updateMobileShowHide(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        // console.log("bodykp======", body);
        var state = await db.query("UPDATE business_mobile_emails SET is_display_mobile = ? WHERE id = ?", [
            body.data.value,
            body.data.primary_id
        ]);
        await db.end();
        return true;
    } catch (err) {
        return false;
    }
}

;// CONCATENATED MODULE: ./methods/SearchDetails.js


async function SearchingCities(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const currentCity = body.currentCity || "";
        var records = await db.query("SELECT id, id as value,name as label  FROM master_cities WHERE is_active='1' AND deleted_at IS NULL ORDER BY name ASC");
        if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
            await db.end();
            //console.log("CITIES RECORDS )********************* ", records)
            return records;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
async function SearchBusiness(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let cityID = body.city || "";
        let search = await body.string || "";
        //console.log(serach, cityID)
        if (cityID && search) {
            //console.log("CCCCCCCCCCCCCCCCCC city cityID", cityID, "search", search)
            search = search.trim().toLowerCase();
            let searchArr = search.split(" ");
            let searchString = "LOWER(b.name) LIKE ? OR LOWER(b.name) LIKE ? OR LOWER(b.name) LIKE ? OR (";
            let searchStringCat = "LOWER(c.name) LIKE ? OR LOWER(c.name) LIKE ? OR LOWER(c.name) LIKE ? OR (";
            let companySearchArr = [
                cityID,
                search,
                search + "%",
                "%" + search + "%"
            ];
            let categorySearchArr = [
                search,
                search + "%",
                "%" + search + "%"
            ];
            for(var i = 0; i < searchArr.length; i++){
                searchString += i == 0 ? " LOWER(b.name) LIKE ? " : " AND LOWER(b.name) LIKE ? ";
                searchStringCat += i == 0 ? " LOWER(c.name) LIKE ? " : " AND LOWER(c.name) LIKE ? ";
                companySearchArr.push("%" + searchArr[i] + "%");
                categorySearchArr.push("%" + searchArr[i] + "%");
            }
            searchString += ")";
            searchStringCat += ")";
            /*var records = await db.query("(SELECT b.id as value,CONCAT_WS('',b.name,' ','(',a.name,')') as label,REPLACE(a.name, ' ', '-') as area_name, '1' as type,REPLACE(b.name, ' ', '-') as slug,b.name as new_label FROM businesses b LEFT JOIN master_areas a ON a.id = b.area_id WHERE b.is_active ='1' AND b.deleted_at IS NULL AND b.approved_at IS NOT NULL AND b.city_id=? AND LOWER(b.name) LIKE ? ORDER BY label ASC LIMIT 10) UNION (SELECT c.id as value,c.name as label, '' as area_name,'2' as type,c.slug,c.name as new_label FROM master_sub_categories c WHERE c.is_active='1' AND c.deleted_at IS NULL AND c.name LIKE ? ORDER BY label ASC LIMIT 10) ORDER BY type DESC,label ASC LIMIT 10", [cityID, '%' + search + '%', '%' + search + '%']);*/ companySearchArr.push(search, search + "%", "%" + search + "%");
            categorySearchArr.push(search, search + "%", "%" + search + "%");
            //console.log(companySearchArr)
            let companies = await db.query("SELECT b.id as value,CONCAT_WS('',b.name,' ','(',a.name,')') as label,REPLACE(a.name, ' ', '-') as area_name, '1' as type,REPLACE(b.name, ' ', '-') as slug,b.name as new_label FROM businesses b LEFT JOIN master_areas a ON a.id = b.area_id WHERE b.is_active ='1' AND b.deleted_at IS NULL AND b.approved_at IS NOT NULL AND b.city_id=? AND (" + searchString + ") ORDER BY (CASE WHEN LOWER(b.name) LIKE ? THEN 1 WHEN LOWER(b.name) LIKE ? THEN 2 WHEN LOWER(b.name) LIKE ? THEN 3 ELSE 4 END) ASC,label ASC LIMIT 10", companySearchArr);
            //console.log("companies : ", companies)
            let categories = await db.query("SELECT c.id as value,c.name as label, '' as area_name,'2' as type,c.slug,c.name as new_label FROM master_sub_categories c WHERE c.is_active='1' AND c.deleted_at IS NULL AND (" + searchStringCat + ") ORDER BY (CASE WHEN LOWER(c.name) LIKE ? THEN 1 WHEN LOWER(c.name) LIKE ? THEN 2 WHEN LOWER(c.name) LIKE ? THEN 3 ELSE 4 END) ASC,label ASC LIMIT 10", categorySearchArr);
            console.log("searchStringCat   ", searchStringCat);
            console.log("categorySearchArr    ", categorySearchArr);
            // ORDER BY type DESC,label ASC
            //console.log("categories : ", categories)
            await db.end();
            // console.log("records", records)
            // Sevice/Product/Brand
            if (categories.length > 0 || companies.length > 0) {
                let optionGroup = "";
                let finalObject = [];
                //const toFindTypes = (arry,type) => arry.filter((item, index) => item.type == type)
                //let sevices = toFindTypes(records, '2')
                if (categories.length > 0) {
                    finalObject.push({
                        ["label"]: "Service/Product/Brand",
                        ["options"]: categories
                    });
                }
                //let company = toFindTypes(records, '1')
                if (companies.length > 0) {
                    finalObject.push({
                        ["label"]: "Company Name",
                        ["options"]: companies
                    });
                }
                //console.log("finalObject", finalObject)
                return finalObject;
            } else {
                return false;
            }
        //return records;
        } else {
            //console.log("ZZZZZZZZZZZZZZ")
            //console.log(serach, cityID)
            return false;
        }
    } catch (err) {
        console.log("_____searchingDetails Method_______________", err);
        return false;
    }
}
async function EnquriesForm(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let cityID = ((body === null || body === void 0 ? void 0 : body.city_id) && (body === null || body === void 0 ? void 0 : body.city_id) == "" ? null : body === null || body === void 0 ? void 0 : body.city_id) || null;
        let formData = body.form || "";
        console.log("formData----------------formData", formData);
        let currentDate = (0,helper/* getDateTime */.Fc)();
        if ((formData === null || formData === void 0 ? void 0 : formData.name) && (formData === null || formData === void 0 ? void 0 : formData.phone) && (formData === null || formData === void 0 ? void 0 : formData.search_query)) {
            let type = body.types || "1";
            let businessID = body.business_id || null;
            let categoryID = body.category_id || null;
            let product = (formData === null || formData === void 0 ? void 0 : formData.product) || null;
            let search = (formData === null || formData === void 0 ? void 0 : formData.keywords) || null;
            var records = await db.query("INSERT INTO user_requirement_requests SET business_id=?,sub_category_id=?,city_id=?,name=?,phone=?,email=?,product=?,product_specification=?,search=?,type=?,created_at=?", [
                businessID,
                categoryID,
                cityID,
                formData.name,
                formData.phone,
                formData === null || formData === void 0 ? void 0 : formData.email,
                product,
                formData.search_query,
                search,
                type,
                currentDate, 
            ]);
            await db.end();
            // Sevice/Product/Brand
            if ((records === null || records === void 0 ? void 0 : records.insertId) > 0) {
                if (type == "4" && businessID) {
                    // also send to business that enquiry
                    let insertID = records.insertId;
                    await db.query("INSERT INTO business_leads_histories SET business_id =?,lead_id =?,lead_date=?", [
                        businessID,
                        insertID,
                        currentDate
                    ]);
                    await db.query("UPDATE user_requirement_requests SET status ='3' WHERE id=?", [
                        insertID
                    ]);
                }
                if (type == "1" && businessID) {
                    // Send SMS Code by shakti singh
                    let BusinessDetails = await db.query("SELECT b.name,bm.phone from businesses b LEFT JOIN business_mobile_emails bm ON bm.business_id = b.id WHERE bm.business_id=? AND bm.type = ? ORDER BY bm.is_primary DESC LIMIT 1", [
                        businessID,
                        "5"
                    ]);
                    // also send to business that enquiry
                    let Settings = await db.query("SELECT phone from setting_company WHERE id=?", [
                        "1"
                    ]);
                    if (BusinessDetails[0].phone) {
                        const Temp = ".";
                        const templateID = "1407162668709029933";
                        const template = encodeURIComponent(`
            ${formData === null || formData === void 0 ? void 0 : formData.name} has just inquired about your company  ${BusinessDetails[0].name} listed on Dialmenow.in Contact on ${BusinessDetails[0].phone} Thank you for your relation with Dialmenow. 
            Feel free to call us on 9252392523 for ${formData.search_query} ${Temp} https://www.dialmenow.in
          `);
                        const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${BusinessDetails[0].phone}&sms=${template}&tempid=${templateID}`;
                        try {
                            const msgChangepwd = await fetch(APIpath);
                        } catch (error) {
                            console.error("Error sending SMS:", error);
                        }
                    }
                    // also send to business that enquiry
                    let insertID = records.insertId;
                    await db.query("INSERT INTO business_leads_histories SET business_id =?,lead_id =?,lead_date=?", [
                        businessID,
                        insertID,
                        currentDate
                    ]);
                    await db.query("UPDATE user_requirement_requests SET status ='3' WHERE id=?", [
                        insertID
                    ]);
                }
                //send business details on Email and SMS
                if (type == "3" && businessID) {
                    //insert into leads also
                    let BusinessDetails01 = await db.query("SELECT b.name,bm.name as contact_person,bm.phone as phone_number,mc.name as city_name from businesses b LEFT JOIN business_mobile_emails bm ON (bm.business_id = b.id AND bm.type = '5' AND is_primary = '1')LEFT JOIN master_cities mc ON mc.id = b.city_id   WHERE bm.business_id=? AND bm.type = ? ORDER BY bm.is_primary DESC LIMIT 1", [
                        businessID,
                        "5"
                    ]);
                    console.log("BusinessDetails01Business", BusinessDetails01);
                    const templateID = "1407162668699811234";
                    const adminPhone = await db.query("SELECT phone from setting_company WHERE id=?", [
                        "1"
                    ]);
                    const template = encodeURIComponent(`
          Dear ${formData.name}\nCompany Details Are\nName:${BusinessDetails01[0].name}\nPerson:${BusinessDetails01[0].contact_person}\nNumber : ${BusinessDetails01[0].phone_number}\nCity : ${BusinessDetails01[0].city_name}\nThank you for using Dial Me Now.\nIf you own a business, List it ${BusinessDetails01[0].name} on www.dialmenow.in\n${adminPhone[0].phone}`);
                    const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${formData.phone}&sms=${template}&tempid=${templateID}`;
                    if (businessID) {
                        const msgChangepwd = await fetch(APIpath);
                        console.log("msgChangepwd", msgChangepwd);
                    }
                    let insertID = records.insertId;
                    await db.query("INSERT INTO business_leads_histories SET business_id =?,lead_id =?,lead_date=?", [
                        businessID,
                        insertID,
                        currentDate
                    ]);
                    await db.query("UPDATE user_requirement_requests SET status ='3' WHERE id=?", [
                        insertID
                    ]);
                    // SMS Code hare
                    let BusinessDetails = await db.query("SELECT b.id,b.name,a.name as area_name,c.name as city_name from businesses b LEFT JOIN master_cities c ON b.city_id = c.id LEFT JOIN master_areas a ON a.id = b.area_id WHERE b.id=?", [
                        businessID
                    ]);
                    if ((BusinessDetails === null || BusinessDetails === void 0 ? void 0 : BusinessDetails.length) > 0) {
                        let url = (0,helper/* getBusinessUrl */.g9)(BusinessDetails[0].area_name, BusinessDetails[0].city_name, BusinessDetails[0].name, BusinessDetails[0].id);
                        if ((formData === null || formData === void 0 ? void 0 : formData.share_type) && (formData === null || formData === void 0 ? void 0 : formData.share_type.indexOf("email")) >= 0) {
                            var ref;
                            const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                                "12"
                            ]);
                            //console.log("adminTemplate", adminTemplate)
                            var emailval = adminTemplate[0].description;
                            var mapObj = {
                                "@name": formData.name,
                                "@company": "Dailmenow",
                                "@business": BusinessDetails[0].name,
                                "@url": url,
                                "@logo": ""
                            };
                            emailval = emailval === null || emailval === void 0 ? void 0 : emailval.replace(/@name|@company|@url|@business|@logo/gi, function(matched) {
                                return mapObj[matched];
                            });
                            const subject = (ref = adminTemplate[0]) === null || ref === void 0 ? void 0 : ref.title;
                            const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                                subject,
                                emailval,
                                formData.email,
                                currentDate
                            ]);
                        }
                        //insert into SMS logs also
                        //send SMS
                        if ((formData === null || formData === void 0 ? void 0 : formData.share_type) && (formData === null || formData === void 0 ? void 0 : formData.share_type.indexOf("sms")) >= 0) {
                            let text = "Business Name: " + BusinessDetails[0].name + ". \nFor more details checkout at dialmenow by click on this link: \n" + url;
                            text = encodeURIComponent(text);
                            db.query("INSERT INTO sms_logs SET subject='Business details',message=?,phone=?,created_at=?", [
                                text,
                                formData.phone,
                                currentDate
                            ]);
                        }
                        await db.end();
                    }
                }
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
async function SendVerifyBusinessNumber(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let business_id = (body === null || body === void 0 ? void 0 : body.businessID) || null;
        let userClaim = (body === null || body === void 0 ? void 0 : body.claim) || 0;
        let otp = (body === null || body === void 0 ? void 0 : body.otp) || null;
        let { user  } = await (0,react_.getSession)({
            req
        });
        let currentDate = (0,helper/* getDateTime */.Fc)("");
        if (business_id) {
            let businessDetails = await db.query("SELECT m.id as phoneid,b.id,b.name,m.is_verified,m.is_verified_phone,m.phone as mobile,m.email as email FROM businesses b LEFT JOIN business_mobile_emails m ON m.business_id = b.id AND m.type = '5' AND m.is_primary='1' WHERE b.id=? LIMIT 1", [
                business_id
            ]);
            console.log("businessDetails =========", businessDetails);
            if ((businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.length) > 0) {
                if (businessDetails[0].mobile) {
                    if (otp) {
                        //verify OTP
                        let optStatus = await verfyOTP(db, businessDetails[0].mobile, otp);
                        if (user && userClaim == "1") {
                            if (optStatus) {
                                await db.query("UPDATE business_mobile_emails SET is_verified_phone='1' WHERE id=?", [
                                    businessDetails[0].phoneid
                                ]);
                                await db.query("UPDATE businesses SET user_id=?,updated_at=?,is_claimed='1' WHERE id=?", [
                                    user === null || user === void 0 ? void 0 : user.id,
                                    currentDate,
                                    businessDetails[0].id
                                ]);
                                // send sms on claim
                                const templateID = "1407162668691863114";
                                const adminPhone = "9252392523";
                                const listing = "Listing";
                                const dot = ".";
                                const template = encodeURIComponent(`Dear ${user.name}\nThank you for Claiming your Listing\nYour claim for the Listing is now under review.\nWe will update you on email once it is approved\nFeel free to call us on ${adminPhone} for ${listing}${dot}\nDialmenow.in`);
                                const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${user.phone}&sms=${template}&tempid=${templateID}`;
                                try {
                                    const msgReferToEarn = await fetch(APIpath);
                                } catch (error) {
                                    console.error("Error sending SMS:", error);
                                }
                                return {
                                    status: 200,
                                    msg: "You have successfully claimed this business."
                                };
                            } else {
                                return {
                                    status: 201,
                                    msg: "Invalid OTP."
                                };
                            }
                        } else if (userClaim == "0") {
                            if (optStatus) {
                                await db.query("UPDATE business_mobile_emails SET is_verified_phone='1' WHERE id=?", [
                                    businessDetails.phoneid
                                ]);
                                return {
                                    status: 200,
                                    msg: "Business number verified successfully."
                                };
                            } else {
                                return {
                                    status: 201,
                                    msg: "Invalid OTP."
                                };
                            }
                        } else {
                            return {
                                status: 201,
                                msg: "Please login first, then try to claim."
                            };
                        }
                    } else {
                        let status = sendOTP(db, "+91" + businessDetails[0].mobile);
                        if (status) {
                            return {
                                status: 200,
                                msg: "OTP sent successfully",
                                mobile: "*******" + businessDetails[0].mobile.substr(-3)
                            };
                        } else {
                            return {
                                status: 201,
                                msg: "OTP sent failed",
                                mobile: "*******" + businessDetails[0].mobile.substr(-3)
                            };
                        }
                    }
                } else {
                    return {
                        status: 201,
                        msg: "Please contact to customer service via email."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "Something went wrong! Please try after some time"
                };
            }
        } else {
            return {
                status: 201,
                msg: "Something went wrong! Please try after some time"
            };
        }
    } catch (err) {
        console.log(err);
        return {
            status: 201,
            msg: "Something went wrong! Please try after some time"
        };
    }
}
async function verfyOTP(db, acPhone, receiverOTP) {
    try {
        let currentTime = (0,helper/* getDateTime */.Fc)();
        const optCheck = await db.query("SELECT id,phone FROM sms_otp_logs WHERE phone=? AND otp=? AND status='0' AND TIMESTAMPDIFF(MINUTE, created_at, ?) <= 10", [
            acPhone,
            receiverOTP,
            currentTime
        ]);
        console.log(" optCheck  ", optCheck, acPhone, receiverOTP, currentTime);
        //update OTP status
        if (optCheck === null || optCheck === void 0 ? void 0 : optCheck.length) {
            db.query("UPDATE sms_otp_logs SET status='1' WHERE id=?", [
                optCheck[0].id, 
            ]);
            db.query("UPDATE sms_otp_logs SET status='2' WHERE phone=?", [
                acPhone
            ]);
        }
        let otpStatus = optCheck.length > 0 && optCheck[0].phone == acPhone ? true : false;
        return otpStatus;
    } catch (err) {
        console.log("Err in verifyOTP claim businses ", err);
        return false;
    }
}
async function sendOTP(db, phone = "") {
    try {
        let justPhone = phone.replace("+91", "");
        //check OTP send in last 20 min if greater then 5 then STOP OTP
        let current_datetime = (0,helper/* getDateTime */.Fc)();
        let insertOTP = await db.query("INSERT INTO sms_otp_logs SET phone=?,otp=otpGenPhone(?),created_at=?", [
            justPhone,
            justPhone,
            current_datetime
        ]);
        if (insertOTP === null || insertOTP === void 0 ? void 0 : insertOTP.insertId) {
            let otp = await db.query("SELECT otp FROM sms_otp_logs WHERE id=?", [
                insertOTP === null || insertOTP === void 0 ? void 0 : insertOTP.insertId, 
            ]);
            let templateID = "1407167350837480457";
            let template = encodeURIComponent("Thank you for using Dial Me Now. Use " + otp[0].otp + " as your OTP. OTP is confidential and valid for 10 min. www.dialmenow.in Feel free to call us on 9252392523");
            const APIpath = "http://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=" + phone + "&sms=" + template + "&tempid=" + templateID;
            const resOTP = await fetch(APIpath);
            if (resOTP.status != "undefined" && resOTP.status == 200) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
async function ShareBusiness(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let cityID = ((body === null || body === void 0 ? void 0 : body.city_id) && (body === null || body === void 0 ? void 0 : body.city_id) == "" ? null : body === null || body === void 0 ? void 0 : body.city_id) || null;
        let formData = body.form || "";
        //console.log("Body------------",body)
        let currentDate = (0,helper/* getDateTime */.Fc)();
        let { user  } = await (0,react_.getSession)({
            req
        });
        let userID = (user === null || user === void 0 ? void 0 : user.id) || null;
        if (userID && (formData === null || formData === void 0 ? void 0 : formData.name) && (formData === null || formData === void 0 ? void 0 : formData.phone) && (formData === null || formData === void 0 ? void 0 : formData.email) && (formData === null || formData === void 0 ? void 0 : formData.share_type)) {
            let businessID = body.business_id || null;
            let categoryID = body.category_id || null;
            let share_type = (formData === null || formData === void 0 ? void 0 : formData.share_type) || null;
            let url = (body === null || body === void 0 ? void 0 : body.url) || null;
            //	1=>whatapps,2=>facebook,3=>sms,4=>email ,5->twitter
            let objectShare = {
                whatsapp: "1",
                facebook: "2",
                sms: "3",
                email: "4",
                twitter: "5"
            };
            let shareID = objectShare[share_type];
            let insertData = await db.query("INSERT INTO refer_a_list SET user_id=?,refer_type=?,refer_email=?,refer_phone=?,refer_name=?,status=?,business_id=?,business_url=?,created_at=?", [
                userID,
                shareID,
                formData === null || formData === void 0 ? void 0 : formData.email,
                formData === null || formData === void 0 ? void 0 : formData.phone,
                formData === null || formData === void 0 ? void 0 : formData.name,
                "1",
                businessID,
                url,
                currentDate, 
            ]);
            if ((insertData === null || insertData === void 0 ? void 0 : insertData.insertId) > 0) {
                if (shareID == "3") {
                    let businessName = await db.query("SELECT name from businesses WHERE id=?", [
                        businessID
                    ]);
                    //send SMS
                    const templateID = "1407168674730198957";
                    const template = encodeURIComponent(`Dear ${formData.name}, We have reached out to you as requested by ${user.name} You can check out the listing ${businessName[0].name} at dialmenow. 
            Click on the link to check the business details : https://www.dialmenow.in/${url} Dialmenow.in +919252392523`);
                    const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${formData.phone}&sms=${template}&tempid=${templateID}`;
                    try {
                        const msgReferToEarn = await fetch(APIpath);
                    } catch (error) {
                        console.error("Error sending SMS:", error);
                    }
                    return {
                        status: 200,
                        msg: "success"
                    };
                } else if (shareID == "4") {
                    var ref;
                    //send Email
                    let businessName = await db.query("SELECT name from businesses WHERE id=?", [
                        businessID
                    ]);
                    const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                        "23"
                    ]);
                    //console.log("adminTemplate", adminTemplate)
                    var emailval = adminTemplate[0].description;
                    var mapObj = {
                        "@referee_name": formData.name,
                        "@user_name": user.name,
                        "@company": "Dailmenow",
                        "@business_name": businessName[0].name,
                        "@url": url
                    };
                    emailval = emailval === null || emailval === void 0 ? void 0 : emailval.replace(/@referee_name|@user_name|@company|@url|@business_name/gi, function(matched) {
                        return mapObj[matched];
                    });
                    let subject = (ref = adminTemplate[0]) === null || ref === void 0 ? void 0 : ref.title;
                    subject = subject.replace("@business_name", businessName[0].name);
                    const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                        subject,
                        emailval,
                        formData.email,
                        currentDate
                    ]);
                    return {
                        status: 200,
                        msg: "success"
                    };
                } else {
                    return {
                        status: 200,
                        msg: "success"
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "Something went wrong! Please try after sometime."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Something went wrong! Please try after sometime."
            };
        }
    } catch (err) {
        console.log("---------error-----ShareBusiness API--------", err);
        return {
            status: 201,
            msg: "Something went wrong! Please try after sometime."
        };
    }
}

;// CONCATENATED MODULE: ./methods/Home.js



async function CategoriesHome(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const currentCity = body.currentCity || "";
        var records = await db.query("SELECT id, id as value,name as label,image,icon,slug FROM master_categories WHERE is_active='1' AND deleted_at IS NULL ORDER BY sort ASC");
        await db.end();
        if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
            for(var i = 0; i < records.length; i++){
                records[i].image = await (0,lib_S3img/* S3img */.y9)(records[i].image, "uploads/category/images/");
                records[i].icon = await (0,lib_S3img/* S3img */.y9)(records[i].icon, "uploads/category/icon/");
            }
            return records;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
async function CitiesHome(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const currentCity = body.currentCity || "";
        var records = await db.query("SELECT id, id as value,name as label,state_id,banner as banner_img,banner_video,image FROM master_cities WHERE is_display_home='1' AND is_active='1' AND deleted_at IS NULL ORDER BY sort ASC");
        if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
            for(var i = 0; i < records.length; i++){
                let citySlug = records[i].label.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                });
                citySlug = citySlug.replace(" ", "-");
                records[i].slug = citySlug;
                records[i].banner_img = await (0,lib_S3img/* S3img */.y9)(records[i].banner_img, "uploads/city/banner/");
                records[i].banner_video = await (0,lib_S3img/* S3img */.y9)(records[i].banner_video, "uploads/city/banner/", false);
                records[i].image = await (0,lib_S3img/* S3img */.y9)(records[i].image, "uploads/city/image/");
            }
            return records;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
async function GuestBlogs(db, req) {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const email = body.email || "";
        const phone = body.phone || "";
        const name = body.name || "";
        const company = body.company || "";
        const message = body.message || "";
        const amount = body.amount || 0;
        const total = body.total || 0;
        const gst = body.gst || 0;
        const trans_id = body.rojzar_payment_id || 0;
        const pay_status = body.payment_status || 0;
        const payment_type = body.pay_type || 0;
        const record_id = body.record_id || 0;
        //console.log(body)
        if (email != "" && name != "" && company != "" && message != "") {
            const current_datetime = (0,helper/* getDateTime */.Fc)();
            //let paymentDetails = await razorpayPaymentDetails(db,trans_id)
            //console.log("     ----------    ", paymentDetails.method_id)
            if (payment_type == "1") {
                const updateRe = await db.query("INSERT INTO `user_guest_blogs`(`company_name`, `name`, `email`,phone,`comment`, `created_at`,payment_amount,transaction_id,transaction_date,payment_status,gst_amt,total_amt) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [
                    company,
                    name,
                    email,
                    phone,
                    message,
                    current_datetime,
                    amount,
                    trans_id,
                    current_datetime,
                    pay_status,
                    gst,
                    total, 
                ]);
                // Retrieve the last inserted ID
                const lastInsertedIdResult = await db.query("SELECT LAST_INSERT_ID() as id");
                const lastInsertedId = lastInsertedIdResult[0].id;
                return lastInsertedId;
            } else {
                const updateRe = await db.query("UPDATE `user_guest_blogs` SET  `created_at`=?, `payment_amount`=?, `transaction_id`=?, `transaction_date`=?, `payment_status`=?, `gst_amt`=?, `total_amt`=? WHERE `id` = ? ", [
                    current_datetime,
                    amount,
                    trans_id,
                    current_datetime,
                    pay_status,
                    gst,
                    total,
                    // Add the value for your_condition_column in the WHERE clause
                    record_id, 
                ]);
            }
            //await db.end();
            // send the email to the admin
            const setting = await db.query("SELECT admin_email as email,company_name,phone FROM setting_company WHERE id=?", [
                "1"
            ]);
            const adminTemplate = await db.query("SELECT description FROM master_email_template WHERE id=?", [
                "19"
            ]);
            var emailval = adminTemplate[0].description;
            const temp = "Name :- " + name + " Email :- " + email + " Company Name :- " + company;
            //console.log("description-----",emailval)
            var mapObj = {
                "@title": "Guest Blog",
                "@detail": temp,
                "@company": setting[0].company_name
            };
            emailval = emailval.replace(/@title|@detail|@company/gi, function(matched) {
                return mapObj[matched];
            });
            const subject = "Guest blog request from " + name;
            const adminEmail = setting[0].email;
            const insertAdminEmail = db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                subject,
                emailval,
                adminEmail,
                current_datetime
            ]);
            // send the email to the user
            const userTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                "20"
            ]);
            var userEmailval = userTemplate[0].description;
            var userSubject = userTemplate[0].title;
            var mapObj = {
                "@name": name,
                "@company": setting[0].company_name
            };
            userEmailval = userEmailval.replace(/@name|@company/gi, function(matched) {
                return mapObj[matched];
            });
            userSubject = userSubject.replace(/@name/gi, function(matched) {
                return mapObj[matched];
            });
            const insertUserEmail = db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                userSubject,
                userEmailval,
                email,
                current_datetime
            ]);
            const templateID = "1407168690215724601";
            const template = encodeURIComponent(`Dear  ${name}, Thank you for connecting with us. We will respond as soon as possible for your guest blog request. Dialmenow.in +919252392523`);
            const APIpath = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${phone}&sms=${template}&tempid=${templateID}`;
            try {
                const blogPost = await fetch(APIpath);
            } catch (error) {
                console.error("Error sending SMS:", error);
            }
            // Admin SMS Send  : Developer Shakti singh
            const templateID1 = "1407168690219530751";
            const template1 = encodeURIComponent(`Hello Admin, You have recieved a new Guest Blog request. Thanks Dialmenow .in`);
            let adminPhone = setting[0].phone || "";
            if (adminPhone) {
                const APIadmin = `https://sms.smsmenow.in/sendsms.jsp?user=dialme&password=90e0551886XX&senderid=DIALME&mobiles=${adminPhone}&sms=${template1}&tempid=${templateID1}`;
                console.log("APIadmin", APIadmin);
                try {
                    const adminBlogResponse = await fetch(APIadmin);
                } catch (error) {
                    console.error("Error sending SMS:", error);
                }
            }
            return true;
        //}
        } else {
            return false;
        }
    } catch (err) {
        console.log("_____________blog request API________________", err);
        return false;
    }
}
async function guestBlogAmt(db, req) {
    try {
        let details = await db.query("SELECT guest_blog_package_amount FROM setting_company WHERE id='1'");
        if (details.length > 0) {
            return details[0].guest_blog_package_amount;
        } else {
            return "1100";
        }
    } catch (err) {
        return "1100";
    }
}

;// CONCATENATED MODULE: ./methods/getAreaListingByCityName.js

async function getAreaListing(db, req) {
    //console.log(req.body)
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    let city_id = req.body.city //convert string in lower case
    ;
    var records = await db.query("SELECT ma.id,ma.name FROM master_areas as ma LEFT JOIN master_cities as mc on ma.city_id=mc.id WHERE ma.is_active='1' AND mc.id=? and ma.is_approved = '1' ORDER BY ma.name ASC", [
        city_id
    ]);
    await db.end();
    //console.log('records===',records)
    return {
        "status": 200,
        "message": "Data fetch successfully",
        "records": records
    };
}

;// CONCATENATED MODULE: ./methods/packages.js
async function masterPackagesListing(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    let city_id = body.city_id || "";
    //let id = body.id || '';
    const package_id = body.package_id || "";
    const recordLimit = body.limit != undefined && body.limit != "" ? body.limit : "";
    if (package_id != "") {
        var packagesListing = await db.query("SELECT id,city_id,name,description,no_of_users,amount_monthly,amount_year,offer_amt_month,offer_amt_year,(select count(id) from business_packages where package_id = master_listing_packages.id and date_format(begins_on,'%Y-%m-%d') <= date_format(NOW(),'%Y-%m-%d') <= date_format(ends_on,'%Y-%m-%d')) as Business_package_count,is_best FROM master_listing_packages WHERE is_active='1' AND deleted_at IS NULL AND (FIND_IN_SET(0,city_id) > 0 OR FIND_IN_SET(?,city_id) > 0) AND id!=? ORDER BY priority ASC", [
            city_id,
            package_id
        ]);
    } else {
        //limit is use on premium listing page for business packages
        var limit = "";
        if (recordLimit != "") {
            limit = " LIMIT 0," + recordLimit;
        }
        //end
        var packagesListing = await db.query("SELECT id,city_id,name,description,no_of_users,amount_monthly,amount_year,offer_amt_month,offer_amt_year,(select count(id) from business_packages where package_id = master_listing_packages.id and date_format(begins_on,'%Y-%m-%d') <= date_format(NOW(),'%Y-%m-%d') <= date_format(ends_on,'%Y-%m-%d')) as Business_package_count,is_best FROM master_listing_packages WHERE is_active='1' AND deleted_at IS NULL AND (FIND_IN_SET(0,city_id) > 0 OR FIND_IN_SET(?,city_id) > 0) ORDER BY priority ASC " + limit, [
            city_id
        ]);
    }
    //End 
    return {
        "packageslisting": packagesListing
    };
}
async function packageDetailById(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    let id = (body === null || body === void 0 ? void 0 : body.id) || "";
    if (id != "") {
        var packagesDetail = await db.query("SELECT id,city_id,name,description,no_of_users,amount_monthly,amount_year,offer_amt_month,offer_amt_year,(select count(id) from business_packages where package_id = master_listing_packages.id and date_format(begins_on,'%Y-%m-%d') <= date_format(NOW(),'%Y-%m-%d') <= date_format(ends_on,'%Y-%m-%d')) as Business_package_count FROM master_listing_packages WHERE is_active='1' AND deleted_at IS NULL AND id =? ORDER BY priority ASC;", [
            id
        ]);
        return {
            "packagesDetail": packagesDetail
        };
    } else {
        return {
            "packagesDetail": []
        };
    }
}

;// CONCATENATED MODULE: ./methods/addAdvertisementRequest.js





async function addAdvertisementRequest(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const email = body.email || "";
    const name = body.name || "";
    const phone = body.phone || "";
    const packageDetail = body.new_package_detail;
    const city_id = body.city_id || "";
    const business_name = body.business_name || "";
    //const banner_position = body.banner_position || '';
    const ads_click = body.ads_click || "";
    //const redirect_url = body.redirect_url || '';
    const package_id = packageDetail.id;
    const per_day_amount = body.per_day_amount || "";
    const ads_id = body.ads_id || "";
    const session = await (0,react_.getSession)({
        req
    });
    const user_id = session ? session.user.id : "";
    const daysHourslistings = body.daysHourslist.length > 0 ? body.daysHourslist : [];
    const is_payment_from = body.is_payment_from;
    const total_gross_payment = (body === null || body === void 0 ? void 0 : body.total_payable_amount) || 0.00;
    const gst = body.gst != "" ? body.gst : null;
    const coupon_id = body.coupon_id != "" ? body.coupon_id : null;
    const coupon_discount = body.coupon_discount != "" ? body.coupon_discount : null;
    const deduct_total_user_wallet_amount = body.deduct_total_user_wallet_amount;
    const newPackageDetail = body.new_package_detail;
    const wallet_description = "Purchase " + (newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.name);
    if (user_id != "") {
        let ads_insert_id = "";
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        const current_date = (0,helper/* getDateTime */.Fc)(1); //current date
        //join subcategory ids with seperate comma
        let category_ids = "";
        if (body.categories && body.categories.length > 0) {
            let categoriesArrayObject = body.categories;
            let category_idsArray = [];
            categoriesArrayObject.map(async (category, keywordIndex)=>{
                if (category.id != "*") {
                    category_idsArray.push(category.id);
                }
            });
            if (category_idsArray.length > 0) {
                category_ids = category_idsArray.join(",");
            }
        }
        //Upload banner image 
        let bannerImage = (body === null || body === void 0 ? void 0 : body.banner_image) || "";
        // const PackageDetail = await db.query("select name,per_click_charge,offer_per_click_charge,per_impression_charge,offer_per_impression_charge,amount,offer_amount,type from master_ads_packages where id=?", [package_id]);
        // update the data for the advertisement
        const AdsMaxSort = await db.query("select max(sequence) as sort from advertise_bussiness_requestes where deleted_at IS NULL");
        var package_amount = packageDetail.offer_amount ? packageDetail.offer_amount : packageDetail.amount;
        if (packageDetail.type == "3" || packageDetail.type == "4") {
            var publishedDate = current_date;
            if (packageDetail.type == "3") {
                var expired_date = (0,helper/* addMonthsInDate */.e2)(1) // 1 month expiry date
                ;
                expired_date = (0,helper/* getDateTime */.Fc)(1, expired_date);
            } else {
                // else if(newPackageDetail.type=='4') {//Yearly                            
                var expired_date = (0,helper/* addMonthsInDate */.e2)(12) // 1 year expiry date
                ;
                expired_date = (0,helper/* getDateTime */.Fc)(1, expired_date);
            }
            var InsertAds = await db.query("INSERT INTO `advertise_bussiness_requestes`(`user_id`, `business_name`, `name`, `email`, `phone`, `package_id`,`package_type`, `city_id`, `sub_category_id`, `payment`,`package_amount`,`ads_status`,`sequence`, `per_day_amount`, `ads_click`,`published_date`,`expired_date`, `created_at`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                user_id,
                business_name,
                name,
                email,
                phone,
                package_id,
                packageDetail.type,
                city_id,
                category_ids,
                0.00,
                package_amount,
                1,
                AdsMaxSort[0].sort ? AdsMaxSort[0].sort + 1 : 1,
                per_day_amount ? per_day_amount : null,
                ads_click,
                publishedDate,
                expired_date,
                current_datetime
            ]);
            ads_insert_id = InsertAds.insertId;
        } else {
            var per_click_charge = packageDetail.offer_per_click_charge ? packageDetail.offer_per_click_charge : packageDetail.per_click_charge;
            var per_impression_charge = packageDetail.offer_per_impression_charge ? packageDetail.offer_per_impression_charge : packageDetail.per_impression_charge;
            var InsertAds = await db.query("INSERT INTO `advertise_bussiness_requestes`(`user_id`, `business_name`, `name`, `email`, `phone`, `package_id`,`package_type`, `city_id`, `sub_category_id`, `payment`,`package_amount`,`ads_status`,`sequence`, `per_click_price`, `per_impression_price`, `per_day_amount`, `ads_click`, `created_at`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                user_id,
                business_name,
                name,
                email,
                phone,
                package_id,
                packageDetail.type,
                city_id,
                category_ids,
                0.00,
                package_amount,
                1,
                AdsMaxSort[0].sort ? AdsMaxSort[0].sort + 1 : 1,
                per_click_charge,
                per_impression_charge,
                per_day_amount ? per_day_amount : null,
                ads_click,
                current_datetime
            ]);
            ads_insert_id = InsertAds.insertId;
        }
        //debit the user wallet amount
        if (deduct_total_user_wallet_amount > 0 && is_payment_from == "wallet") {
            const insert_debit_credit_amount = await db.query("INSERT INTO user_wallets SET user_id=?,debit_credit=?,amount=?,description=?,type=?,type_id=?,created_at=?", [
                user_id,
                2,
                deduct_total_user_wallet_amount,
                wallet_description,
                1,
                ads_insert_id,
                current_datetime
            ]);
            await db.end();
        }
        // insert the dayhours listing    
        if ((packageDetail.type == 1 || packageDetail.type == 2) && daysHourslistings.length > 0) {
            let daysDataArray = [];
            daysHourslistings.map(function(daysHourslisting, keyIndex) {
                let is_open = 2;
                if (daysHourslisting.open && daysHourslisting.open == 1) {
                    is_open = 1;
                    daysHourslisting.start_time = "";
                    daysHourslisting.end_time = "";
                } else if (daysHourslisting.close && daysHourslisting.close == 1) {
                    is_open = 0;
                    daysHourslisting.start_time = "";
                    daysHourslisting.end_time = "";
                }
                let dayname = daysHourslisting.value;
                dayname = dayname.toUpperCase(); //upper case
                //dayname = getWeekDaysShortName(dayname);
                daysDataArray.push([
                    ads_insert_id,
                    dayname,
                    is_open,
                    daysHourslisting.start_time ? daysHourslisting.start_time : null,
                    daysHourslisting.end_time ? daysHourslisting.end_time : null
                ]);
            });
            if (ads_id != "0" && ads_id != "") {
                const deleteAdsDays = await db.query("DELETE FROM `ads_show_times` WHERE ads_id=?", [
                    ads_id
                ]);
            }
            //console.log('daysDataArray-->>>', daysDataArray)
            const insertAdsDays = await db.query("INSERT INTO ads_show_times  (ads_id,day,is_open,start_time,end_time) VALUES ?", [
                daysDataArray
            ]);
            await db.end();
        }
        //if all payment deduct from wallet then we insert the entry in ads_payment table
        if (is_payment_from == "wallet") {
            //After payment update the package amount in advertisement business request
            const InsertAds = await db.query("UPDATE `advertise_bussiness_requestes` SET `payment`=?,`updated_at`=? WHERE `id`=?", [
                package_amount,
                current_datetime,
                ads_insert_id
            ]);
            const insertAdsPaymentDetail = await db.query("INSERT INTO ads_payments  (ads_id,package_type,coupon_id,coupon_amount,wallet_amount,transaction_mode,transaction_date,transaction_amount,gst,total_amount,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [
                ads_insert_id,
                packageDetail.type,
                coupon_id,
                coupon_discount,
                deduct_total_user_wallet_amount,
                0,
                current_datetime,
                total_gross_payment,
                gst,
                package_amount,
                1
            ]);
            //Send email to user to purchase new plan
            const getTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                "21"
            ]);
            var emailval = getTemplate[0].description;
            //plan type
            if (packageDetail.type == "1") {
                var planTypeName = "Only Impressions";
            } else if (packageDetail.type == "2") {
                var planTypeName = "Impressions and Clicks";
            } else if (packageDetail.type == "3") {
                var planTypeName = "Monthly";
            } else {
                var planTypeName = "Yearly";
            }
            var mapObj = {
                "@name": name,
                "@company": "Dailmenow",
                "@planname": packageDetail.name,
                "@planType": planTypeName,
                "@planAmount": package_amount
            };
            emailval = emailval.replace(/@name|@company|@planname|@planType|@planAmount/gi, function(matched) {
                return mapObj[matched];
            });
            //subject 
            var subject = getTemplate[0].title;
            var mapSubjectObj = {
                "@name": name
            };
            subject = subject.replace(/@name/gi, function(matched) {
                return mapSubjectObj[matched];
            });
            const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                subject,
                emailval,
                email,
                current_datetime
            ]);
        }
        return {
            "status": 200,
            "msg": "Payment successfully! Please wait while we are redirecting.",
            "ads_id": ads_insert_id
        };
    } else {
        return false;
    }
}
//Upgrade advertisement plan request
async function upgradeAdvertisementPlanRequest(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const email = body.email || "";
    const name = body.name || "";
    const phone = body.phone || "";
    const city_id = body.city_id || "";
    const business_name = body.business_name || "";
    const banner_position = body.banner_position || "";
    const bannerImage = body.banner_image || "";
    const redirect_url = body.redirect_url || "";
    const subcategory_ids = body.categories;
    const per_day_amount = body.per_day_amount || "";
    const ads_id = body.ads_id || "";
    const daysHourslistings = body.daysHourslist.length > 0 ? body.daysHourslist : [];
    const newPackageDetail = body.new_package_detail;
    const session = await (0,react_.getSession)({
        req
    });
    const user_id = session ? session.user.id : "";
    const old_package_type = body.old_package_type;
    const ads_click = body.ads_click;
    const is_payment_from = body.is_payment_from;
    const total_gross_payment = body.total_gross_payment;
    const gst = body.gst != "" ? body.gst : null;
    const coupon_id = body.coupon_id != "" ? body.coupon_id : null;
    const coupon_discount = body.coupon_discount != "" ? body.coupon_discount : null;
    const package_id = newPackageDetail.id;
    const comment = "Advertisement Plan Payment";
    const wallet_description = "Purchase " + (newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.name);
    const package_amount = (newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.offer_amount) != null && (newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.offer_amount) != "" ? newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.offer_amount : newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.amount;
    const per_click_charge = (newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.offer_per_click_charge) != null && (newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.offer_per_click_charge) != "" ? newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.offer_per_click_charge : newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.per_click_charge;
    const per_impression_charge = (newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.per_impression_charge) != null && (newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.offer_per_click_charge) != "" ? newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.per_impression_charge : newPackageDetail === null || newPackageDetail === void 0 ? void 0 : newPackageDetail.per_impression_charge;
    const deduct_total_user_wallet_amount = body.deduct_total_user_wallet_amount;
    const remaining_amount = body.remaining_amount;
    const is_use_user_wallet = body.is_use_user_wallet;
    //console.log('body----------->>>>>>>>>>>',body)
    if (user_id != "") {
        let ads_insert_id = "";
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        const current_date = (0,helper/* getDateTime */.Fc)(1); //current date       
        let newAdsStatus = "1" //1=>published
        ;
        let oldAdsStatus = "2" //2 =>expired
        ;
        // get the max sequence of the data for the advertisement
        const AdsMaxSort = await db.query("select max(sequence) as sort from advertise_bussiness_requestes where deleted_at IS NULL");
        let new_plan_published_Date = current_date;
        if (old_package_type == "3" || old_package_type == "4") {
            //if old package type is monthly or yeary than we check plan is expired or not in current date           
            const currentAdsRecord = await db.query("select id,DATE_FORMAT(expired_date,'%Y-%m-%d') as expired_date from advertise_bussiness_requestes where id=? AND (? BETWEEN published_date AND expired_date)", [
                ads_id,
                current_date
            ]);
            if (currentAdsRecord.length > 0 && currentAdsRecord[0].id > 0) {
                new_plan_published_Date = currentAdsRecord[0].expired_date;
                newAdsStatus = "3" // 3=>upcoming 
                ;
            } else {
                oldAdsStatus = "2" //2=>expired
                ;
                new_plan_published_Date = current_date;
            }
            //make the new plan start date if the current plan type is 3 or 4(monthly or yearly)
            if (newPackageDetail.type == "3" || newPackageDetail.type == "4") {
                new_plan_published_Date = new_plan_published_Date;
            }
        }
        //oldAdsStatus===2 means  old plan is expired then we update the old plan status otherwise not
        if (oldAdsStatus == "2") {
            const UpdateAds = await db.query("UPDATE `advertise_bussiness_requestes` SET `ads_status`=?,`updated_at`=? WHERE `id`=?", [
                "2",
                current_datetime,
                ads_id
            ]);
        }
        //make the new plan expiry date
        let new_plan_expiry_date = "";
        if (newPackageDetail.type == "3" || newPackageDetail.type == "4") {
            if (newPackageDetail.type == "3") {
                // add 1 day in date
                new_plan_published_Date = (0,helper/* addDayInDate */.a4)(1, new Date(new_plan_published_Date));
                // 1 month expiry date 
                var expired_date = (0,helper/* addMonthsInDate */.e2)(1, new Date(new_plan_published_Date));
                new_plan_expiry_date = (0,helper/* getDateTime */.Fc)(1, expired_date);
            } else {
                // else if(newPackageDetail.type=='4') {//Yearly      
                // add 1 day in date
                new_plan_published_Date = (0,helper/* addDayInDate */.a4)(1, new Date(new_plan_published_Date));
                // 1 year expiry date
                var expired_date = (0,helper/* addMonthsInDate */.e2)(12, new Date(new_plan_published_Date));
                new_plan_expiry_date = (0,helper/* getDateTime */.Fc)(1, expired_date);
            }
            var InsertAds = await db.query("INSERT INTO `advertise_bussiness_requestes`(`user_id`, `business_name`, `name`, `email`, `phone`, `package_id`,`package_type`, `city_id`, `sub_category_id`, `payment`,`package_amount`,`ads_status`,`comments`,`banner_position`,`banner_image`,`redirect_url`,`sequence`, `ads_click`,`published_date`,`expired_date`, `created_at`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                user_id,
                business_name,
                name,
                email,
                phone,
                package_id,
                newPackageDetail.type,
                city_id,
                subcategory_ids,
                0.00,
                package_amount,
                newAdsStatus,
                comment,
                banner_position,
                bannerImage,
                redirect_url,
                AdsMaxSort[0].sort ? AdsMaxSort[0].sort + 1 : 1,
                ads_click,
                new_plan_published_Date,
                new_plan_expiry_date,
                current_datetime
            ]);
        } else {
            var InsertAds = await db.query("INSERT INTO `advertise_bussiness_requestes`(`user_id`, `business_name`, `name`, `email`, `phone`, `package_id`,`package_type`, `city_id`, `sub_category_id`, `payment`,`package_amount`,`ads_status`,`comments`,`banner_position`,`banner_image`,`redirect_url`,`sequence`, `per_click_price`, `per_impression_price`,`per_day_amount`, `ads_click`,`created_at`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                user_id,
                business_name,
                name,
                email,
                phone,
                package_id,
                newPackageDetail.type,
                city_id,
                subcategory_ids,
                0.00,
                package_amount,
                newAdsStatus,
                comment,
                banner_position,
                bannerImage,
                redirect_url,
                AdsMaxSort[0].sort ? AdsMaxSort[0].sort + 1 : 1,
                per_click_charge,
                per_impression_charge,
                per_day_amount ? per_day_amount : null,
                ads_click,
                current_datetime
            ]);
        }
        ads_insert_id = InsertAds.insertId; //last inserted id         
        let daysDataArray = [];
        if ((newPackageDetail.type == 1 || newPackageDetail.type == 2) && daysHourslistings && daysHourslistings.length > 0) {
            daysHourslistings.map(function(daysHourslisting, keyIndex) {
                let is_open = 2;
                if (daysHourslisting.open && daysHourslisting.open == 1) {
                    is_open = 1;
                    daysHourslisting.start_time = "";
                    daysHourslisting.end_time = "";
                } else if (daysHourslisting.close && daysHourslisting.close == 1) {
                    is_open = 0;
                    daysHourslisting.start_time = "";
                    daysHourslisting.end_time = "";
                }
                let dayname = daysHourslisting.value;
                dayname = dayname.toUpperCase(); //upper case
                daysDataArray.push([
                    ads_insert_id,
                    dayname,
                    is_open,
                    daysHourslisting.start_time ? daysHourslisting.start_time : null,
                    daysHourslisting.end_time ? daysHourslisting.end_time : null
                ]);
            });
            if (daysDataArray.length > 0) {
                const insertAdsDays = await db.query("INSERT INTO ads_show_times  (ads_id,day,is_open,start_time,end_time) VALUES ?", [
                    daysDataArray
                ]);
                await db.end();
            }
        }
        //creadit the remaning amount of old ads in wallet
        if (remaining_amount > 0) {
        // const insert_debit_credit_amount = await db.query("INSERT INTO user_wallets SET user_id=?,debit_credit=?,amount=?,description=?,type=?,type_id=?,created_at=?", [user_id, 1, remaining_amount, 'Added the remaning amount of ads ', 1, ads_id, current_datetime])
        }
        /*
        //debit the wallet amount for new ads
        if (is_use_user_wallet == 'yes' && deduct_total_user_wallet_amount > 0) {
            const insert_debit_credit_amount = await db.query("INSERT INTO user_wallets SET user_id=?,debit_credit=?,amount=?,description=?,type=?,type_id=?,created_at=?", [user_id, 2, deduct_total_user_wallet_amount, wallet_description, 1, ads_insert_id, current_datetime])
        }*/ //if all payment deduct from wallet then we insert the entry in ads_payment table and send email to user
        if (is_payment_from == "wallet") {
            //After payment update the package amount in advertisement business request
            const InsertAds = await db.query("UPDATE `advertise_bussiness_requestes` SET `payment`=?,`updated_at`=? WHERE `id`=?", [
                package_amount,
                current_datetime,
                ads_insert_id
            ]);
            const insertAdsPaymentDetail = await db.query("INSERT INTO ads_payments  (ads_id,package_type,coupon_id,coupon_amount,wallet_amount,transaction_mode,transaction_date,transaction_amount,gst,total_amount,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [
                ads_insert_id,
                newPackageDetail.type,
                coupon_id,
                coupon_discount,
                deduct_total_user_wallet_amount,
                0,
                current_datetime,
                total_gross_payment,
                gst,
                package_amount,
                1
            ]);
            //Send email to user to purchase new plan
            const getTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                "21"
            ]);
            var emailval = getTemplate[0].description;
            //plan type
            if (newPackageDetail.type == "1") {
                var planTypeName = "Only Impressions";
            } else if (newPackageDetail.type == "2") {
                var planTypeName = "Impressions and Clicks";
            } else if (newPackageDetail.type == "3") {
                var planTypeName = "Monthly";
            } else {
                var planTypeName = "Yearly";
            }
            var mapObj = {
                "@name": name,
                "@company": "Dailmenow",
                "@planname": newPackageDetail.name,
                "@planType": planTypeName,
                "@planAmount": package_amount
            };
            emailval = emailval.replace(/@name|@company|@planname|@planType|@planAmount/gi, function(matched) {
                return mapObj[matched];
            });
            //subject
            var subject = getTemplate[0].title;
            var mapSubjectObj = {
                "@name": name
            };
            subject = subject.replace(/@name/gi, function(matched) {
                return mapSubjectObj[matched];
            });
            const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                subject,
                emailval,
                email,
                current_datetime
            ]);
        }
        return {
            "status": 200,
            "msg": "Payment successfully! Please wait while we are redirecting.",
            "ads_id": ads_insert_id
        };
    } else {
        return false;
    }
}
//after payment update the plan banner detail
async function upgradeAdvertisementPlanBannerDetail(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const bannerPosition = body.banner_position || "";
    const banner_image = body.banner_image || "";
    const redirect_url = body.redirect_url || "";
    const ads_id = body.ads_id || "";
    if (ads_id != "") {
        const InsertAds = await db.query("UPDATE `advertise_bussiness_requestes` SET `banner_position`=?,`banner_image`=?,`redirect_url`=? WHERE `id`=?", [
            bannerPosition,
            banner_image,
            redirect_url,
            ads_id
        ]);
        return {
            "status": 200,
            "msg": "Advertisement request upgrade successfully!"
        };
    } else {
        return false;
    }
}
//apply coupon code for ads
async function ApplyCouponCodeOnAdvertisement(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    //console.log(body);
    const current_datetime = (0,helper/* getDateTime */.Fc)(); //current date time
    const current_date = (0,helper/* getDateTime */.Fc)(1); //current date time
    const session = await (0,react_.getSession)({
        req
    });
    let city_id = body.city_id;
    // add notify me for package in business
    if (session && session.user.id > 0) {
        const user_id = session.user.id;
        let dataArray = [
            user_id,
            body.package_id,
            body.coupon_code,
            current_date,
            current_date
        ];
        let condition = "";
        if (city_id != "0") {
            condition = " AND  coupons.city_id REGEXP CONCAT('(^|,)(', REPLACE('" + city_id + "', ',', '|'), ')(,|$)') ";
        }
        //having
        let havingCond = " having coupons.user_limit > total_used_coupon_code and coupons.same_user_limit > total_user_used_coupon_code ";
        //select parameter
        var selectQuery = "SELECT coupons.*,(select count(adsp.id) from ads_payments as adsp WHERE adsp.coupon_id = coupons.id) as total_used_coupon_code,(select count(adsp.id) from ads_payments as adsp LEFT JOIN advertise_bussiness_requestes as abr ON abr.id=adsp.ads_id where adsp.coupon_id = coupons.id and abr.user_id = ?) as total_user_used_coupon_code FROM coupons WHERE coupons.is_active='1' AND coupons.deleted_at IS NULL AND (FIND_IN_SET(?,coupons.master_package_id)>0 OR coupons.master_package_id='0') AND coupons.package_name_id='3' AND coupons.coupon_code=? AND DATE_FORMAT(coupons.coupon_start_date, '%Y-%m-%d') <= ? AND DATE_FORMAT(coupons.coupon_end_date, '%Y-%m-%d') >= ? " + condition + havingCond;
        var couponRecords = await db.query(selectQuery, dataArray);
        await db.end();
        if (couponRecords.length > 0) {
            return {
                "status": 200,
                "msg": "Coupon apply successfully",
                "coupon_id": couponRecords[0].id,
                "coupon_amount": couponRecords[0].discount
            };
        } else {
            return {
                "status": 201,
                "msg": "Coupon code invalid!"
            };
        }
    }
}
async function updateAdvertisementPlanPaymentDetail(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const ads_id = body.ads_id || "";
    const razorpay_payment_id = body.razorpay_payment_id || "";
    const coupon_id = body.coupon_id != "" ? body.coupon_id : null;
    const coupon_discount = body.coupon_amount != "" ? body.coupon_amount : null;
    const deduct_total_user_wallet_amount = body.deduct_total_user_wallet_amount || 0;
    let transaction_amount = body.transaction_amount;
    // const transaction_mode = body.transaction_mode
    const total_amount = body.total_amount;
    const status = body.status;
    const gst = body.gst != "" ? body.gst : null;
    const session = await (0,react_.getSession)({
        req
    });
    const user_id = session ? session.user.id : "";
    const package_type = body.package_type;
    const package_name = body.package_name;
    const remaining_amount = body.remaining_amount;
    const wallet_description = "Purchase " + package_name;
    if (user_id != "" && ads_id != "" && razorpay_payment_id != "") {
        var ref, ref1;
        let username = session ? session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.name : "";
        let email = session === null || session === void 0 ? void 0 : (ref1 = session.user) === null || ref1 === void 0 ? void 0 : ref1.email;
        transaction_amount = parseFloat(transaction_amount / 100);
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        //get payment details
        let paymentDetails = await razorpayPaymentDetails(db, razorpay_payment_id);
        //End
        const transaction_mode = (paymentDetails === null || paymentDetails === void 0 ? void 0 : paymentDetails.method_id) || 0;
        const insertAdsPaymentDetail = await db.query("INSERT INTO ads_payments  (ads_id,package_type,coupon_id,coupon_amount,wallet_amount,transaction_id,transaction_mode,transaction_date,transaction_amount,gst,total_amount,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [
            ads_id,
            package_type,
            coupon_id,
            coupon_discount,
            deduct_total_user_wallet_amount,
            razorpay_payment_id,
            transaction_mode,
            current_datetime,
            transaction_amount,
            gst,
            total_amount,
            status
        ]);
        await db.end();
        //credit the remaning amount of old ads in wallet
        if (remaining_amount > 0) {
            const insert_credit_amount = await db.query("INSERT INTO user_wallets SET user_id=?,debit_credit=?,amount=?,description=?,type=?,type_id=?,created_at=?", [
                user_id,
                1,
                remaining_amount,
                "Added the remaning amount of ads ",
                1,
                ads_id,
                current_datetime
            ]);
        }
        //If user used the wallet amount to buy advertisement then debit from wallet
        if (deduct_total_user_wallet_amount > 0) {
            const insert_debit_amount = await db.query("INSERT INTO user_wallets SET user_id=?,debit_credit=?,amount=?,description=?,type=?,type_id=?,created_at=?", [
                user_id,
                2,
                deduct_total_user_wallet_amount,
                wallet_description,
                1,
                ads_id,
                current_datetime
            ]);
        }
        //After payment update the package amount in advertisement business request
        const InsertAds = await db.query("UPDATE `advertise_bussiness_requestes` SET `payment`=?,`updated_at`=? WHERE `id`=?", [
            total_amount,
            current_datetime,
            ads_id
        ]);
        //Send email to user to purchase new plan
        const getTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
            "21"
        ]);
        var emailval = getTemplate[0].description;
        //plan type
        if (package_type == "1") {
            var planTypeName = "Only Impressions";
        } else if (package_type == "2") {
            var planTypeName = "Impressions and Clicks";
        } else if (package_type == "3") {
            var planTypeName = "Monthly";
        } else {
            var planTypeName = "Yearly";
        }
        var mapObj = {
            "@name": username,
            "@company": "Dailmenow",
            "@planname": package_name,
            "@planType": planTypeName,
            "@planAmount": transaction_amount
        };
        emailval = emailval.replace(/@name|@company|@planname|@planType|@planAmount/gi, function(matched) {
            return mapObj[matched];
        });
        //subject 
        var subject = getTemplate[0].title;
        var mapSubjectObj = {
            "@name": username
        };
        subject = subject.replace(/@name/gi, function(matched) {
            return mapSubjectObj[matched];
        });
        const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
            subject,
            emailval,
            email,
            current_datetime
        ]);
        return {
            "status": 200,
            "msg": "Advertisement request upgrade successfully!"
        };
    } else {
        return false;
    }
}
async function addAdvertisementAmount(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const amount = body.amount || "";
    const ads_id = body.ads_id || "";
    const package_type = body.packageType || "";
    const session = await (0,react_.getSession)({
        req
    });
    const user_id = session ? session.user.id : "";
    const razorpay_payment_id = body.razorpay_payment_id;
    //get payment details
    let paymentDetails = await razorpayPaymentDetails(db, razorpay_payment_id);
    //End
    const transaction_mode = (paymentDetails === null || paymentDetails === void 0 ? void 0 : paymentDetails.method_id) || 0;
    if (user_id != "") {
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        //const current_date = getDateTime(1);//current date
        const AdsPaymentAmount = await db.query("select payment from advertise_bussiness_requestes where id=?", [
            ads_id
        ]);
        var TotalAmount = parseFloat(AdsPaymentAmount[0].payment) + parseFloat(amount);
        const InsertAds = await db.query("UPDATE `advertise_bussiness_requestes` SET `payment`=?,`updated_at`=? WHERE `id`=?", [
            TotalAmount,
            current_datetime,
            ads_id
        ]);
        //insert detail in ads payment
        const insertAdsPaymentDetail = await db.query("INSERT INTO ads_payments  (ads_id,package_type,transaction_id,transaction_mode,transaction_date,transaction_amount,status) VALUES (?,?,?,?,?,?,?)", [
            ads_id,
            package_type,
            razorpay_payment_id,
            transaction_mode,
            current_datetime,
            amount,
            1
        ]);
        return {
            "status": 200,
            "msg": "Advertisement amount added successfully!"
        };
    } else {
        return false;
    }
}
async function stopAdvertisement(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const status = body.status || "";
    const ads_id = body.ads_id || "";
    const session = await (0,react_.getSession)({
        req
    });
    const user_id = session ? session.user.id : "";
    if (user_id != "") {
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        const InsertAds = await db.query("UPDATE `advertise_bussiness_requestes` SET `is_active`=?,`updated_at`=? WHERE `id`=?", [
            status,
            current_datetime,
            ads_id
        ]);
        return {
            "status": 200,
            "msg": "Advertisement status updated successfully!"
        };
    } else {
        return false;
    }
}
async function UpdateAdvertisementDetail(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const per_day_amount = body.per_day_amount || "";
    const ads_id = body.ads_id || "";
    const session = await (0,react_.getSession)({
        req
    });
    const user_id = session ? session.user.id : "";
    if (user_id != "") {
        const current_datetime = (0,helper/* getDateTime */.Fc)();
        const InsertAds = await db.query("UPDATE `advertise_bussiness_requestes` SET `per_day_amount`=?,`updated_at`=? WHERE `id`=?", [
            per_day_amount ? per_day_amount : null,
            current_datetime,
            ads_id
        ]);
        if (body.daysHourslist && body.daysHourslist.length > 0) {
            const daysHourslistings = body.daysHourslist;
            let daysDataArray = [];
            daysHourslistings.map(function(daysHourslisting, keyIndex) {
                let is_open = 2;
                if (daysHourslisting.open && daysHourslisting.open == 1) {
                    is_open = 1;
                    daysHourslisting.start_time = "";
                    daysHourslisting.end_time = "";
                } else if (daysHourslisting.close && daysHourslisting.close == 1) {
                    is_open = 0;
                    daysHourslisting.start_time = "";
                    daysHourslisting.end_time = "";
                } else {
                    daysHourslisting.start_time = daysHourslisting.start_time ? daysHourslisting.start_time : "10:00";
                    daysHourslisting.end_time = daysHourslisting.end_time ? daysHourslisting.end_time : "19:00";
                }
                let dayname = daysHourslisting.value;
                dayname = dayname.toUpperCase(); //upper case
                const updateAdsDays = db.query("UPDATE `ads_show_times` SET `ads_id`=?,`day`=?,`is_open`=?,`start_time`=?,`end_time`=? where `id`=?", [
                    ads_id,
                    dayname,
                    is_open,
                    daysHourslisting.start_time ? daysHourslisting.start_time : null,
                    daysHourslisting.end_time ? daysHourslisting.end_time : null,
                    daysHourslisting.id
                ]);
            });
            await db.end();
        }
        return {
            "status": 200,
            "msg": "Advertisement updated successfully!"
        };
    } else {
        return false;
    }
}
async function GetAdvertisementDetail(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const from_date = body.from_date || "";
    const to_date = body.to_date || "";
    const ads_id = body.ads_id || "";
    const session = await (0,react_.getSession)({
        req
    });
    const user_id = session ? session.user.id : "";
    if (user_id != "") {
        if (from_date != "" && to_date != "") {
            var chartCount = await db.query("SELECT date_format(date_time,'%Y-%m-%d') as analysis_date,SUM(CASE WHEN is_clicked = 1 THEN 1 ELSE 0 END) AS total_clicks,COUNT(id) AS total_impression,date_format(date_time,'%d') as day FROM `ads_view_analytics` WHERE ads_id=? and date_format(date_time,'%Y-%m-%d') BETWEEN ? and ? group by date_format(date_time,'%Y-%m-%d')", [
                ads_id,
                from_date,
                to_date
            ]);
        } else {
            var chartCount = await db.query("SELECT date_format(date_time,'%Y-%m-%d') as analysis_date,SUM(CASE WHEN is_clicked = 1 THEN 1 ELSE 0 END) AS total_clicks,COUNT(id) AS total_impression,date_format(date_time,'%d') as day FROM `ads_view_analytics` WHERE ads_id=? and MONTH(date_time)=MONTH(now()) and YEAR(date_time)=YEAR(now()) group by date_format(date_time,'%d')", [
                ads_id
            ]);
        }
        return {
            "status": 200,
            "chartCount": chartCount
        };
    } else {
        return false;
    }
}
function addAdvertisementRequest_getWeekDaysShortName(dayFullName) {
    var shortName = [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN"
    ];
    var fullName = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    var getIndex = fullName.indexOf(dayFullName);
    return shortName[getIndex];
}

;// CONCATENATED MODULE: ./methods/ApplyJobs.js






async function ApplyForJob(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    const current_date = (0,helper/* getDateTime */.Fc)(1); //current date
    const brithDate = (0,helper/* getDateTime */.Fc)(1, body.date_of_birth);
    const currentDateTime = (0,helper/* getDateTime */.Fc)(); //current date time
    //Upload gst document on s3
    let resumeFilename = "";
    if (body.resume && body.resume.length > 0) {
        resumeFilename = body.resume;
        /*
        var s3Patch = 'uploads/resume/' + body.resume;
        var imageURL = current_date + '/' + body.resume //get uploaded image from server
        var uploadImageOnS3 = await S3imgUpload(s3Patch, imageURL)//upload image on s3
        console.log('uploadImageOnS3------->>',uploadImageOnS3)
        if (uploadImageOnS3) {
            resumeFilename = body.resume
            //unlink image from folder 
            var filePath = `./public/temp/${current_date}/` + body.resume
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
        }*/ let qualification = "";
        if ((body === null || body === void 0 ? void 0 : body.qualification) && body.qualification !== undefined && body.qualification != "") {
            qualification = body.qualification;
        }
        const insertBusiness = await db.query("INSERT INTO job_applicants SET vacancy_list_id=?,name=?,birth_date=?,email=?,mobile=?,educational_qualification=?,year_of_experience=?,resume=?,created_at=?", [
            body.vacancy_id,
            body.name,
            brithDate,
            body.email,
            body.phone,
            qualification,
            body.year_of_experience,
            resumeFilename,
            currentDateTime
        ]);
        if (insertBusiness.affectedRows > 0) {
            var ref;
            //send email to user of applying for job
            const userVacancy = await db.query("SELECT name FROM master_vacancy_lists WHERE id=?", [
                body.vacancy_id
            ]);
            /*********Insert admin apply job Mail********************/ const userTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                "28"
            ]);
            var userEmailval = userTemplate[0].description;
            var mapObj = {
                "@name": body.name,
                "@post_name": ((ref = userVacancy[0]) === null || ref === void 0 ? void 0 : ref.name) || ""
            };
            userEmailval = userEmailval.replace(/@name|@post_name/gi, (matched)=>{
                return mapObj[matched];
            });
            var userSubject = userTemplate[0].title;
            userSubject = userSubject.replace(/@name/gi, (matched)=>mapObj[matched]
            );
            const insertUserEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                userSubject,
                userEmailval,
                body.email,
                currentDateTime
            ]);
            await db.end();
            /*********END Insert admin apply job Mail********************/ //Send email to admin            
            const getAdminDetail = await db.query("SELECT admin_email FROM setting_company WHERE id=?", [
                "1"
            ]);
            /*********Insert admin apply job Mail********************/ const adminTemplate = await db.query("SELECT title,description FROM master_email_template WHERE id=?", [
                "29"
            ]);
            var emailval = adminTemplate[0].description;
            var mapObj = {
                "@name": body.name
            };
            emailval = emailval.replace(/@name/gi, function(matched) {
                return mapObj[matched];
            });
            const subject = adminTemplate[0].title;
            const insertAdminEmail = await db.query("INSERT INTO `email_logs`(`subject`, `description`, `email`,`created_at`) VALUES (?,?,?,?)", [
                subject,
                emailval,
                getAdminDetail[0].admin_email,
                currentDateTime
            ]);
            await db.end();
            /*********END Insert admin apply job Mail********************/ return {
                "status": 200,
                "msg": "Thanks for filling out our form!"
            };
        } else {
            return {
                "status": 201,
                "msg": "Something went wrong. Try after some time."
            };
        }
    } else {
        return {
            "status": 201,
            "msg": "Please upload resume."
        };
    }
}

;// CONCATENATED MODULE: ./methods/comboPackages.js
async function masterComboPackagesListing(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    var packageListings = await db.query("SELECT id,name,package_id,type,price,offer_price,(CASE WHEN offer_price IS NOT NULL && offer_price!='' THEN offer_price ELSE price END) as actual_price,description FROM master_combo_packages WHERE is_active='1' ORDER BY priority ASC");
    await db.end();
    //End 
    return {
        "packageListings": packageListings
    };
}
async function comboPackageById(db, req) {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
    let id = (body === null || body === void 0 ? void 0 : body.id) || "";
    if (id != "") {
        var packagesDetail = await db.query("SELECT mcp.id,mcp.name,mcp.package_id,mcp.type,mcp.price,mcp.offer_price,(CASE WHEN mcp.offer_price IS NOT NULL && mcp.offer_price!='' THEN mcp.offer_price ELSE mcp.price END) as actual_price,mcp.description,(select count(id) from business_packages where package_id = mlp.id and date_format(begins_on,'%Y-%m-%d') <= date_format(NOW(),'%Y-%m-%d') <= date_format(ends_on,'%Y-%m-%d')) as Business_package_count,mlp.no_of_users,mlp.city_id FROM master_combo_packages as mcp LEFT JOIN master_listing_packages as mlp ON mcp.package_id=mlp.id  WHERE mcp.is_active='1' AND mcp.id=?", [
            id
        ]);
        return {
            "packagesDetail": packagesDetail
        };
    } else {
        return {
            "packagesDetail": []
        };
    }
}

;// CONCATENATED MODULE: ./methods/EditListings.js



async function BusinessInformation(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const id = body.id || "";
        const userID = body.user_id || "";
        var records = await db.query("SELECT mb.id,mb.name,mb.address,ct.name as city_name,mb.city_id,st.name as state_name,mb.state_id,mb.lat,mb.pincode,mb.lng,mb.landmark,mb.area_id,mr.name as area_name FROM businesses mb LEFT JOIN master_states st ON st.id = mb.state_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas mr ON mr.id = mb.area_id WHERE mb.id = ? AND mb.user_id=?", [
            id,
            userID
        ]);
        await db.end();
        return records;
    } catch (err) {
        return false;
    }
}
async function updateBasicDetails(db, req) {
    try {
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user) {
            var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17;
            let time = (0,helper/* getDateTime */.Fc)();
            const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
            console.log(body);
            let values = "";
            let valuesArry = [];
            let query = "INSERT INTO business_changes (business_id,change_value,user_id,tbl_column,tbl_primary_id,tbl_name,status,created_at,action) VALUES ";
            if ((body === null || body === void 0 ? void 0 : (ref = body.data) === null || ref === void 0 ? void 0 : ref.state) && (body === null || body === void 0 ? void 0 : (ref1 = body.data) === null || ref1 === void 0 ? void 0 : ref1.state) != "") {
                var ref18, ref19, ref20;
                values = "(?,?,?,?,?,?,?,?,?)";
                valuesArry.push(body === null || body === void 0 ? void 0 : (ref18 = body.data) === null || ref18 === void 0 ? void 0 : ref18.business_id, body === null || body === void 0 ? void 0 : (ref19 = body.data) === null || ref19 === void 0 ? void 0 : ref19.state, user.id, "state_id", body === null || body === void 0 ? void 0 : (ref20 = body.data) === null || ref20 === void 0 ? void 0 : ref20.business_id, "businesses", "0", time, "2");
            }
            if ((body === null || body === void 0 ? void 0 : (ref2 = body.data) === null || ref2 === void 0 ? void 0 : ref2.city) && (body === null || body === void 0 ? void 0 : (ref3 = body.data) === null || ref3 === void 0 ? void 0 : ref3.city) != "") {
                var ref21, ref22, ref23;
                values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?)";
                valuesArry.push(body === null || body === void 0 ? void 0 : (ref21 = body.data) === null || ref21 === void 0 ? void 0 : ref21.business_id, body === null || body === void 0 ? void 0 : (ref22 = body.data) === null || ref22 === void 0 ? void 0 : ref22.city, user.id, "city_id", body === null || body === void 0 ? void 0 : (ref23 = body.data) === null || ref23 === void 0 ? void 0 : ref23.business_id, "businesses", "0", time, "2");
            }
            if ((body === null || body === void 0 ? void 0 : (ref4 = body.data) === null || ref4 === void 0 ? void 0 : ref4.area) && (body === null || body === void 0 ? void 0 : (ref5 = body.data) === null || ref5 === void 0 ? void 0 : ref5.area) != "") {
                var ref24, ref25, ref26, ref27;
                let area_id_kp = body === null || body === void 0 ? void 0 : (ref24 = body.data) === null || ref24 === void 0 ? void 0 : ref24.area;
                if ((body === null || body === void 0 ? void 0 : (ref25 = body.data) === null || ref25 === void 0 ? void 0 : ref25.area) == "other") {
                    var ref28, ref29, ref30, ref31;
                    const getArea = await db.query("SELECT id FROM master_areas WHERE lOWER(name) = ? and city_id = ? AND is_active = '1' and deleted_at IS NULL", [
                        body === null || body === void 0 ? void 0 : (ref28 = body.data) === null || ref28 === void 0 ? void 0 : ref28.areaName.toLowerCase(),
                        body === null || body === void 0 ? void 0 : (ref29 = body.data) === null || ref29 === void 0 ? void 0 : ref29.city
                    ]);
                    if ((ref30 = getArea[0]) === null || ref30 === void 0 ? void 0 : ref30.id) {
                        var ref32;
                        // in area id find then send area id
                        area_id_kp = (ref32 = getArea[0]) === null || ref32 === void 0 ? void 0 : ref32.id;
                    } else {
                        var ref33, ref34, ref35;
                        //insert new area
                        const insertArea = await db.query("INSERT INTO master_areas SET name=?,city_id =?,pincode=?,created_at=?", [
                            body === null || body === void 0 ? void 0 : (ref33 = body.data) === null || ref33 === void 0 ? void 0 : ref33.areaName,
                            body === null || body === void 0 ? void 0 : (ref34 = body.data) === null || ref34 === void 0 ? void 0 : ref34.city,
                            body === null || body === void 0 ? void 0 : (ref35 = body.data) === null || ref35 === void 0 ? void 0 : ref35.pincode,
                            time, 
                        ]);
                        if (insertArea.affectedRows > 0 && insertArea.insertId > 0) {
                            area_id_kp = insertArea.insertId;
                        }
                    }
                    body === null || body === void 0 ? void 0 : (ref31 = body.data) === null || ref31 === void 0 ? void 0 : ref31.city;
                }
                values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?)";
                valuesArry.push(body === null || body === void 0 ? void 0 : (ref26 = body.data) === null || ref26 === void 0 ? void 0 : ref26.business_id, area_id_kp, user.id, "area_id", body === null || body === void 0 ? void 0 : (ref27 = body.data) === null || ref27 === void 0 ? void 0 : ref27.business_id, "businesses", "0", time, "2");
            }
            if ((body === null || body === void 0 ? void 0 : (ref6 = body.data) === null || ref6 === void 0 ? void 0 : ref6.name) && (body === null || body === void 0 ? void 0 : (ref7 = body.data) === null || ref7 === void 0 ? void 0 : ref7.name) != "") {
                var ref36, ref37, ref38;
                values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?)";
                valuesArry.push(body === null || body === void 0 ? void 0 : (ref36 = body.data) === null || ref36 === void 0 ? void 0 : ref36.business_id, body === null || body === void 0 ? void 0 : (ref37 = body.data) === null || ref37 === void 0 ? void 0 : ref37.name, user.id, "name", body === null || body === void 0 ? void 0 : (ref38 = body.data) === null || ref38 === void 0 ? void 0 : ref38.business_id, "businesses", "0", time, "2");
            }
            if ((body === null || body === void 0 ? void 0 : (ref8 = body.data) === null || ref8 === void 0 ? void 0 : ref8.pincode) && (body === null || body === void 0 ? void 0 : (ref9 = body.data) === null || ref9 === void 0 ? void 0 : ref9.pincode) != "") {
                var ref39, ref40, ref41;
                values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?)";
                valuesArry.push(body === null || body === void 0 ? void 0 : (ref39 = body.data) === null || ref39 === void 0 ? void 0 : ref39.business_id, body === null || body === void 0 ? void 0 : (ref40 = body.data) === null || ref40 === void 0 ? void 0 : ref40.pincode, user.id, "pincode", body === null || body === void 0 ? void 0 : (ref41 = body.data) === null || ref41 === void 0 ? void 0 : ref41.business_id, "businesses", "0", time, "2");
            }
            if ((body === null || body === void 0 ? void 0 : (ref10 = body.data) === null || ref10 === void 0 ? void 0 : ref10.landmark) && (body === null || body === void 0 ? void 0 : (ref11 = body.data) === null || ref11 === void 0 ? void 0 : ref11.landmark) != "") {
                var ref42, ref43, ref44;
                values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?)";
                valuesArry.push(body === null || body === void 0 ? void 0 : (ref42 = body.data) === null || ref42 === void 0 ? void 0 : ref42.business_id, body === null || body === void 0 ? void 0 : (ref43 = body.data) === null || ref43 === void 0 ? void 0 : ref43.landmark, user.id, "landmark", body === null || body === void 0 ? void 0 : (ref44 = body.data) === null || ref44 === void 0 ? void 0 : ref44.business_id, "businesses", "0", time, "2");
            }
            if ((body === null || body === void 0 ? void 0 : (ref12 = body.data) === null || ref12 === void 0 ? void 0 : ref12.address) && (body === null || body === void 0 ? void 0 : (ref13 = body.data) === null || ref13 === void 0 ? void 0 : ref13.address) != "") {
                var ref45, ref46, ref47;
                values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?)";
                valuesArry.push(body === null || body === void 0 ? void 0 : (ref45 = body.data) === null || ref45 === void 0 ? void 0 : ref45.business_id, body === null || body === void 0 ? void 0 : (ref46 = body.data) === null || ref46 === void 0 ? void 0 : ref46.address, user.id, "address", body === null || body === void 0 ? void 0 : (ref47 = body.data) === null || ref47 === void 0 ? void 0 : ref47.business_id, "businesses", "0", time, "2");
            }
            if ((body === null || body === void 0 ? void 0 : (ref14 = body.data) === null || ref14 === void 0 ? void 0 : ref14.lat) && (body === null || body === void 0 ? void 0 : (ref15 = body.data) === null || ref15 === void 0 ? void 0 : ref15.lat) != "") {
                var ref48, ref49, ref50;
                values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?)";
                valuesArry.push(body === null || body === void 0 ? void 0 : (ref48 = body.data) === null || ref48 === void 0 ? void 0 : ref48.business_id, body === null || body === void 0 ? void 0 : (ref49 = body.data) === null || ref49 === void 0 ? void 0 : ref49.lat, user.id, "lat", body === null || body === void 0 ? void 0 : (ref50 = body.data) === null || ref50 === void 0 ? void 0 : ref50.business_id, "businesses", "0", time, "2");
            }
            if ((body === null || body === void 0 ? void 0 : (ref16 = body.data) === null || ref16 === void 0 ? void 0 : ref16.lng) && (body === null || body === void 0 ? void 0 : (ref17 = body.data) === null || ref17 === void 0 ? void 0 : ref17.lng) != "") {
                var ref51, ref52, ref53;
                values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?)";
                valuesArry.push(body === null || body === void 0 ? void 0 : (ref51 = body.data) === null || ref51 === void 0 ? void 0 : ref51.business_id, body === null || body === void 0 ? void 0 : (ref52 = body.data) === null || ref52 === void 0 ? void 0 : ref52.lng, user.id, "lng", body === null || body === void 0 ? void 0 : (ref53 = body.data) === null || ref53 === void 0 ? void 0 : ref53.business_id, "businesses", "0", time, "2");
            }
            if (values != "") {
                console.log(query, values, valuesArry.length);
                let status = await db.query(query + values, [
                    ...valuesArry
                ]);
                console.log("_________record____________", status);
                return {
                    status: 200,
                    msg: "Your request submitted successfully. You will be notified when changes approved."
                };
            } else {
                return {
                    status: 201,
                    msg: "Something went wrong, please try after some time."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Only registered users can request for changes."
            };
        }
    } catch (err) {
        console.log("_____updateBsicDetails_____", err);
        return {
            status: 201,
            msg: "Something went wrong, please try after some time."
        };
    }
}
async function BusinessCompanyInfo(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const id = body.id || "";
        const userID = body.user_id || "";
        var records = await db.query("SELECT mb.id,mb.logo,bd.year_establishment,mb.company_description,mb.additional_information,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,mb.product_and_services,mb.no_of_employee,mb.head_office,mb.branch_office FROM businesses mb INNER JOIN business_details bd ON bd.business_id = mb.id WHERE mb.id = ? AND mb.user_id=?", [
            id,
            userID
        ]);
        await db.end();
        if (records.length > 0) {
            records[0].logo = await (0,lib_S3img/* S3img */.y9)(records[0].logo, "uploads/company/logo/", false);
        }
        return records;
    } catch (err) {
        console.log("___API Company info______________", err);
        return false;
    }
}
async function updateCompanyDetails(db, req) {
    try {
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user) {
            let time = (0,helper/* getDateTime */.Fc)();
            let date = (0,helper/* getDateTime */.Fc)(1);
            const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
            // const body = req.body;
            console.log("______body____________", body);
            //console.log("FORM FILES", req.files)
            //const businesID = body.business_id || '';
            var data = (body === null || body === void 0 ? void 0 : body.data) || [];
            var businessID = (body === null || body === void 0 ? void 0 : body.business_id) || "";
            //console.log("SUMITTED DATA",data)
            var logo = (data === null || data === void 0 ? void 0 : data.new_logo) || null;
            var s3Img = "";
            if (data && businessID) {
                var ref, ref54, ref55, ref56, ref57, ref58, ref59, ref60, ref61, ref62, ref63, ref64, ref65, ref66, ref67, ref68, ref69, ref70, ref71, ref72, ref73, ref74;
                let detailsData = await db.query("SELECT id FROM business_details WHERE business_id=?", [
                    businessID
                ]);
                let action_type = detailsData.length > 0 ? "2" : "1";
                let about_desc = detailsData.length > 0 ? null : "New add request";
                let values = "";
                let valuesArry = [];
                let query = "INSERT INTO business_changes (business_id,change_value,user_id,tbl_column,tbl_primary_id,tbl_name,status,created_at,action,about) VALUES ";
                if ((body === null || body === void 0 ? void 0 : (ref = body.data) === null || ref === void 0 ? void 0 : ref.year_establish) && (body === null || body === void 0 ? void 0 : (ref54 = body.data) === null || ref54 === void 0 ? void 0 : ref54.year_establish) != "") {
                    var ref75;
                    values = "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref75 = body.data) === null || ref75 === void 0 ? void 0 : ref75.year_establish, user.id, "year_establishment", null, "business_details", "0", time, action_type, about_desc);
                }
                if (logo) {
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, logo, user.id, "logo", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref55 = body.data) === null || ref55 === void 0 ? void 0 : ref55.no_of_employee) && (body === null || body === void 0 ? void 0 : (ref56 = body.data) === null || ref56 === void 0 ? void 0 : ref56.no_of_employee) != "") {
                    var ref76;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref76 = body.data) === null || ref76 === void 0 ? void 0 : ref76.no_of_employee, user.id, "no_of_employee", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref57 = body.data) === null || ref57 === void 0 ? void 0 : ref57.product_and_services) && (body === null || body === void 0 ? void 0 : (ref58 = body.data) === null || ref58 === void 0 ? void 0 : ref58.product_and_services) != "") {
                    var ref77;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref77 = body.data) === null || ref77 === void 0 ? void 0 : ref77.product_and_services, user.id, "product_and_services", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref59 = body.data) === null || ref59 === void 0 ? void 0 : ref59.description) && (body === null || body === void 0 ? void 0 : (ref60 = body.data) === null || ref60 === void 0 ? void 0 : ref60.description) != "") {
                    var ref78;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref78 = body.data) === null || ref78 === void 0 ? void 0 : ref78.description, user.id, "company_description", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref61 = body.data) === null || ref61 === void 0 ? void 0 : ref61.more_desc) && (body === null || body === void 0 ? void 0 : (ref62 = body.data) === null || ref62 === void 0 ? void 0 : ref62.more_desc) != "") {
                    var ref79;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref79 = body.data) === null || ref79 === void 0 ? void 0 : ref79.more_desc, user.id, "business_more_info", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref63 = body.data) === null || ref63 === void 0 ? void 0 : ref63.head_office) && (body === null || body === void 0 ? void 0 : (ref64 = body.data) === null || ref64 === void 0 ? void 0 : ref64.head_office) != "") {
                    var ref80;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref80 = body.data) === null || ref80 === void 0 ? void 0 : ref80.head_office, user.id, "business_more_info", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref65 = body.data) === null || ref65 === void 0 ? void 0 : ref65.branch_office) && (body === null || body === void 0 ? void 0 : (ref66 = body.data) === null || ref66 === void 0 ? void 0 : ref66.branch_office) != "") {
                    var ref81;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref81 = body.data) === null || ref81 === void 0 ? void 0 : ref81.branch_office, user.id, "branch_office", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref67 = body.data) === null || ref67 === void 0 ? void 0 : ref67.association) && (body === null || body === void 0 ? void 0 : (ref68 = body.data) === null || ref68 === void 0 ? void 0 : ref68.association) != "") {
                    var ref82;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref82 = body.data) === null || ref82 === void 0 ? void 0 : ref82.association, user.id, "professional_association", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref69 = body.data) === null || ref69 === void 0 ? void 0 : ref69.expreience) && (body === null || body === void 0 ? void 0 : (ref70 = body.data) === null || ref70 === void 0 ? void 0 : ref70.expreience) != "") {
                    var ref83;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref83 = body.data) === null || ref83 === void 0 ? void 0 : ref83.expreience, user.id, "past_experience", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref71 = body.data) === null || ref71 === void 0 ? void 0 : ref71.awards) && (body === null || body === void 0 ? void 0 : (ref72 = body.data) === null || ref72 === void 0 ? void 0 : ref72.awards) != "") {
                    var ref84;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref84 = body.data) === null || ref84 === void 0 ? void 0 : ref84.awards, user.id, "awards", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if ((body === null || body === void 0 ? void 0 : (ref73 = body.data) === null || ref73 === void 0 ? void 0 : ref73.addi_info) && (body === null || body === void 0 ? void 0 : (ref74 = body.data) === null || ref74 === void 0 ? void 0 : ref74.addi_info) != "") {
                    var ref85;
                    values = values != "" ? values + ",(?,?,?,?,?,?,?,?,?,?)" : "(?,?,?,?,?,?,?,?,?,?)";
                    valuesArry.push(body === null || body === void 0 ? void 0 : body.business_id, body === null || body === void 0 ? void 0 : (ref85 = body.data) === null || ref85 === void 0 ? void 0 : ref85.addi_info, user.id, "additional_information", body === null || body === void 0 ? void 0 : body.business_id, "businesses", "0", time, "2", null);
                }
                if (values != "") {
                    console.log(query, values, valuesArry.length);
                    let status = await db.query(query + values, [
                        ...valuesArry
                    ]);
                    console.log("_________record____________", status);
                    return {
                        status: 200,
                        msg: "Your request submitted successfully. You will be notified when changes approved."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "Something went wrong, please try after some time."
                    };
                }
            } else {
                //console.log("NONONNOONNONONNONONO")
                return {
                    status: 201,
                    msg: "Something went wrong, please try after some time."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Only registered users can request for changes."
            };
        }
    } catch (err) {
        console.log("error", err);
        return {
            status: 201,
            msg: "Something went wrong, please try after some time."
        };
    }
}
async function BusinessMediaInfo(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const id = body.id || "";
        const userID = body.user_id || "";
        var imagesRecord = await db.query("SELECT img.url,img.id as key_id FROM business_img_videos img LEFT JOIN businesses mb ON mb.id = img.business_id WHERE mb.id = ? AND mb.user_id=? AND img.is_active='2'", [
            id,
            userID
        ]);
        var othRecord = await db.query("SELECT img.id as key_id,img.video_type,img.video,img.business_pdf FROM business_details img LEFT JOIN businesses mb ON mb.id = img.business_id WHERE mb.id = ? AND mb.user_id=?", [
            id,
            userID
        ]);
        await db.end();
        if (imagesRecord.length > 0) {
            for(var i = 0; i < imagesRecord.length; i++){
                imagesRecord[i].url = await (0,lib_S3img/* S3img */.y9)(imagesRecord[i].url, "uploads/company/image/", false);
            }
        }
        if (othRecord.length > 0) {
            othRecord[0].business_pdf = await (0,lib_S3img/* S3img */.y9)(othRecord[0].business_pdf, "uploads/company/pdf/", false);
        }
        console.log("images_________", imagesRecord, othRecord);
        return {
            images: imagesRecord,
            other: othRecord
        };
    } catch (err) {
        console.log("___API Company Media______________", err);
        return {
            images: [],
            other: []
        };
    }
}
async function BusinessReviewInfo(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const id = body.id || "";
        const userID = body.user_id || "";
        let details = await db.query("SELECT (SELECT (SUM(rating)/COUNT(id)) as rating from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL) as ratings,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL) as total_reviews,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='5') as five_rate,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='4') as four_rate,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='3') as three_rate,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='2') as two_rate,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = b.id AND is_active='1' AND deleted_at IS NULL and rating='1') as one_rate  FROM businesses b LEFT JOIN business_details de ON de.business_id = b.id WHERE b.id =? AND b.user_id=? AND b.deleted_at IS NULL", [
            id,
            userID
        ]);
        await db.end();
        return details;
    } catch (err) {
        return false;
    }
}
async function BusinessLeadsInfo(db, req) {
    try {
        var ref;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //console.log("___b___",body)
        const id = body.id || "";
        const userID = (body === null || body === void 0 ? void 0 : (ref = body.other) === null || ref === void 0 ? void 0 : ref.user_id) || "";
        const pageNum = body.page || "";
        var offset = 10 * (pageNum - 1);
        var limit = 10;
        if (userID && id) {
            let details = await db.query("SELECT h.id,r.name,r.phone,r.email,r.product_specification,DATE_FORMAT(h.lead_date,'%d %b %Y') as lead_date,c.name as city_name  FROM business_leads_histories h LEFT JOIN user_requirement_requests r ON r.id = h.lead_id LEFT JOIN businesses b ON h.business_id = b.id LEFT JOIN master_cities c ON c.id = r.city_id WHERE b.id =? AND b.user_id=? AND b.deleted_at IS NULL AND r.deleted_at IS NULL  LIMIT ?,?", [
                id,
                userID,
                offset,
                limit
            ]);
            // console.log("__________details______________", details.length, id, userID, offset, limit)
            await db.end();
            return details;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
async function BusinessLeadsGraph(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //console.log("___b___", body)
        const id = body.id || "";
        const from_date = body.from_date || "";
        const to_date = body.to_date || "";
        console.log("___ddd_____", body);
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && from_date && to_date && id) {
            let details = await db.query("SELECT date_format(h.lead_date,'%Y-%m-%d') as lead_date,date_format(h.lead_date,'%d %b') as day,COUNT(h.id) AS total_leads,GROUP_CONCAT(CONCAT_WS('','Name: ',r.name,' | Mob: ',r.phone,' ')) as details  FROM business_leads_histories h LEFT JOIN user_requirement_requests r ON r.id = h.lead_id LEFT JOIN businesses b ON h.business_id = b.id LEFT JOIN master_cities c ON c.id = r.city_id WHERE b.id =? AND b.user_id=? AND b.deleted_at IS NULL AND r.deleted_at IS NULL AND  (date_format(h.lead_date,'%Y-%m-%d') BETWEEN ? AND ?)  GROUP BY date_format(h.lead_date,'%Y-%m-%d')", [
                id,
                user.id,
                from_date,
                to_date
            ]);
            let leadsRecords = await db.query("SELECT COUNT(h.id) as total FROM business_leads_histories h LEFT JOIN user_requirement_requests r ON r.id = h.lead_id LEFT JOIN businesses b ON h.business_id = b.id LEFT JOIN master_cities c ON c.id = r.city_id WHERE b.id =? AND b.user_id=? AND b.deleted_at IS NULL AND r.deleted_at IS NULL", [
                id,
                user.id
            ]);
            //console.log(leadsRecords)
            let total = leadsRecords.length > 0 ? leadsRecords[0].total : 0;
            await db.end();
            return {
                details: details,
                total: total
            };
        } else {
            return false;
        }
    } catch (err) {
        console.log("________err_____________", err);
        return false;
    }
}
async function BusinessFaqs(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        //console.log("___b___", body)
        const id = body.id || "";
        const from_date = body.from_date || "";
        const to_date = body.to_date || "";
        console.log("___ddd_____", body);
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && id) {
            let details = await db.query("SELECT h.id,h.question,h.answer,h.type  FROM business_faqs h LEFT JOIN businesses b ON h.business_id = b.id WHERE b.id =? AND b.user_id=? AND b.deleted_at IS NULL and h.is_active='1' AND h.deleted_at IS NULL ORDER BY h.type ASC", [
                id,
                user.id
            ]);
            await db.end();
            return details;
        } else {
            return false;
        }
    } catch (err) {
        console.log("________err_____________", err);
        return false;
    }
}
async function BusinessContactInfo(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const id = body.id || "";
        console.log("___ddd_____", body);
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && id) {
            let detailsMob = await db.query("SELECT h.id,h.text,h.is_primary,h.is_verified,h.type,h.phone,h.name,h.email,h.is_verified_phone,h.is_display_mobile  FROM business_mobile_emails h LEFT JOIN businesses b ON h.business_id = b.id WHERE b.id =? AND b.user_id=? AND b.deleted_at IS NULL ORDER BY h.type ASC,h.is_primary DESC", [
                id,
                user.id
            ]);
            let basicDetails = await db.query("SELECT h.id,h.whatsapp_no,h.ivr_number,h.is_ivr_requested,b.tollfree,h.book_now_url  FROM business_details h LEFT JOIN businesses b ON h.business_id = b.id WHERE b.id =? AND b.user_id=? AND b.deleted_at IS NULL ", [
                id,
                user.id
            ]);
            let socialDetails = await db.query("SELECT h.id,h.social_name,h.social_link  FROM business_social_links h LEFT JOIN businesses b ON h.business_id = b.id WHERE b.id =? AND b.user_id=? AND b.deleted_at IS NULL ", [
                id,
                user.id
            ]);
            await db.end();
            return {
                mob_details: detailsMob,
                ivr_details: basicDetails,
                social_details: socialDetails
            };
        } else {
            return false;
        }
    } catch (err) {
        console.log("________err_____________", err);
        return false;
    }
}
async function BusinessOtherInfo(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        const id = body.id || "";
        console.log("___ddd_____", body);
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && id) {
            //type of business, subcategories, keywords ---- main table
            // payment option ------ payment tbl
            // Hours ----- hours tbl
            // Documents ------- other details tbl
            let detailsAll = await db.query("SELECT (SELECT group_concat(name SEPARATOR ', ') from master_type_of_business WHERE FIND_IN_SET(id,b.type_of_business) AND is_active='1' AND deleted_at IS NULL ) as type_of_business_name,(SELECT group_concat(CONCAT(id,',',name) SEPARATOR '$') from master_type_of_business WHERE FIND_IN_SET(id,b.type_of_business) AND is_active='1' AND deleted_at IS NULL ) as typeBuObj,b.type_of_business,b.keywords,b.subcategory,(SELECT GROUP_CONCAT(name SEPARATOR ', ') FROM master_sub_categories WHERE FIND_IN_SET(id,b.subcategory)) as subcat_name,(SELECT GROUP_CONCAT(CONCAT(id,',',name) SEPARATOR '$') FROM master_sub_categories WHERE FIND_IN_SET(id,b.subcategory)) as subcatObj,b.keywords,(SELECT GROUP_CONCAT(keyword SEPARATOR ', ') FROM master_keywords WHERE FIND_IN_SET(id,b.keywords) AND is_active='1' AND is_approved='1' AND deleted_at IS NULL) as keyword_name,(SELECT GROUP_CONCAT(CONCAT(id,',',keyword) SEPARATOR '$') FROM master_keywords WHERE FIND_IN_SET(id,b.keywords) AND is_active='1' AND is_approved='1' AND deleted_at IS NULL) as keywordObj,(SELECT GROUP_CONCAT(payment_mode_id) FROM business_payment_modes WHERE business_id = b.id AND status='1') as paymentOption FROM businesses b WHERE id=? AND user_id=?", [
                id,
                user.id
            ]);
            let businessTiming = await db.query("SELECT day as value,is_open,open_at as start_time,close_at as end_time,dual_open_at as dual_start_time,dual_close_at as dual_end_time,IF(dual_open_at IS NOT NULL AND dual_open_at != '','1','0') as is_dual,(CASE day when 'MON' then 1 when 'TUE' then 2 when 'WED' then 3 when 'THU' then 4 when 'FRI' then 5 when 'SAT' then 6 when 'SUN' then 7 END) as day_nr,IF(is_open = '1','1','') as open,IF(is_open = '0','1','') as close FROM business_timings WHERE business_id=? ORDER BY day_nr ASC", [
                id
            ]);
            let basicDetails = await db.query("SELECT h.id,h.whatsapp_no,h.ivr_number,h.is_ivr_requested,b.tollfree,h.book_now_url,h.gst_number,h.gst_document,h.is_gst_verified,h.register_no,h.register_document,h.is_register_verified,h.pancard_number,h.pancard_document,h.is_pancard_verfied,h.store_front_image,h.store_back_image FROM business_details h LEFT JOIN businesses b ON h.business_id = b.id WHERE b.id =? AND b.user_id=? AND b.deleted_at IS NULL ", [
                id,
                user.id
            ]);
            if (basicDetails.length > 0) {
                basicDetails[0].store_front_image = await (0,lib_S3img/* S3img */.y9)(basicDetails[0].store_front_image, "uploads/company/image/", false);
                basicDetails[0].store_back_image = await (0,lib_S3img/* S3img */.y9)(basicDetails[0].store_back_image, "uploads/company/image/", false);
                basicDetails[0].pancard_document = await (0,lib_S3img/* S3img */.y9)(basicDetails[0].pancard_document, "uploads/company/image/", false);
                basicDetails[0].register_document = await (0,lib_S3img/* S3img */.y9)(basicDetails[0].register_document, "uploads/company/image/", false);
                basicDetails[0].gst_document = await (0,lib_S3img/* S3img */.y9)(basicDetails[0].gst_document, "uploads/company/image/", false);
            }
            await db.end();
            return {
                detailsAll: detailsAll,
                basicDetails: basicDetails,
                businessTiming: businessTiming
            };
        } else {
            return false;
        }
    } catch (err) {
        console.log("________err_____________", err);
        return false;
    }
}
async function updateContactDetails(db, req) {
    try {
        var ref;
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        console.log(body, " ------ body------------");
        let data = (body === null || body === void 0 ? void 0 : body.data) || "";
        let businessID = (body === null || body === void 0 ? void 0 : (ref = body.data) === null || ref === void 0 ? void 0 : ref.business_id) || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && businessID) {
            var ref86, ref87, ref88, ref89;
            console.log("----data--------", data);
            let time = (0,helper/* getDateTime */.Fc)();
            if ((data === null || data === void 0 ? void 0 : data.whatsapp_no) && (data === null || data === void 0 ? void 0 : (ref86 = data.whatsapp_no) === null || ref86 === void 0 ? void 0 : ref86.length) == 10) {
                await db.query("UPDATE business_details SET whatsapp_no=? WHERE business_id=?", [
                    data === null || data === void 0 ? void 0 : data.whatsapp_no,
                    businessID
                ]);
            }
            if (data === null || data === void 0 ? void 0 : data.toll_free) {
                await db.query("UPDATE businesses SET tollfree=? WHERE id=?", [
                    data === null || data === void 0 ? void 0 : data.toll_free,
                    businessID, 
                ]);
            }
            if (data === null || data === void 0 ? void 0 : data.book_now_url) {
                await db.query("UPDATE business_details SET book_now_url=? WHERE business_id=?", [
                    data === null || data === void 0 ? void 0 : data.toll_free,
                    businessID
                ]);
            }
            //contact person details
            if (body === null || body === void 0 ? void 0 : body.contacts) {
                for(var i = 0; i < body.contacts.length; i++){
                    if (body.contacts[i].id > 0 && body.contacts[i].id) {
                        //update contacts
                        let detailsCon = await db.query("SELECT id,name,email,phone,is_verified,is_verified_phone FROM business_mobile_emails WHERE id=? AND business_id=?", [
                            body.contacts[i].id,
                            businessID
                        ]);
                        if (detailsCon.length > 0) {
                            let clumn = "";
                            let valuesClumn = [];
                            if (body.contacts[i].name && body.contacts[i].name != detailsCon[0].name) {
                                clumn = "name=?";
                                valuesClumn.push(body.contacts[i].name);
                            }
                            if (body.contacts[i].email && body.contacts[i].email != detailsCon[0].email) {
                                clumn = clumn ? clumn + ",email=?,is_verified='0'" : "email=?,is_verified='0'";
                                valuesClumn.push(body.contacts[i].email);
                            }
                            if (body.contacts[i].phone && body.contacts[i].phone != detailsCon[0].phone) {
                                clumn = clumn ? clumn + ",phone=?,is_verified_phone='0'" : "phone=?,is_verified_phone='0'";
                                valuesClumn.push(body.contacts[i].phone);
                            }
                            if (clumn) {
                                valuesClumn.push(detailsCon[0].id);
                                await db.query("UPDATE business_mobile_emails SET " + clumn + " WHERE id=?", valuesClumn);
                            }
                        }
                    } else {
                        var ref90, ref91, ref92, ref93;
                        //insert contacts
                        let name = ((ref90 = body.contacts[i]) === null || ref90 === void 0 ? void 0 : ref90.name) || null;
                        let mail = ((ref91 = body.contacts[i]) === null || ref91 === void 0 ? void 0 : ref91.email) || null;
                        let phone = ((ref92 = body.contacts[i]) === null || ref92 === void 0 ? void 0 : ref92.phone) || null;
                        let is_primary = ((ref93 = body.contacts[i]) === null || ref93 === void 0 ? void 0 : ref93.is_primary) || "0";
                        await db.query("INSERT INTO business_mobile_emails SET name=?,email=?,phone=?,is_primary=?,is_verified_phone='0',is_verified='0',type='5',business_id=?,updated_at=?", [
                            name,
                            mail,
                            phone,
                            is_primary,
                            businessID,
                            time
                        ]);
                    }
                }
            }
            if ((data === null || data === void 0 ? void 0 : data.landlines) && (data === null || data === void 0 ? void 0 : (ref87 = data.landlines) === null || ref87 === void 0 ? void 0 : ref87.length) > 0) {
                for(var i = 0; i < (data === null || data === void 0 ? void 0 : data.landlines.length); i++){
                    if ((data === null || data === void 0 ? void 0 : data.landlines[i].id) > 0 && !(data === null || data === void 0 ? void 0 : data.landlines[i].id.toString().includes("new"))) {
                        await db.query("UPDATE business_mobile_emails SET text=?,updated_at=? WHERE business_id=? AND id=?", [
                            data === null || data === void 0 ? void 0 : data.landlines[i].text,
                            time,
                            businessID,
                            data === null || data === void 0 ? void 0 : data.landlines[i].id
                        ]);
                    } else {
                        await db.query("INSERT INTO business_mobile_emails SET text=?,updated_at=?,business_id=?,type='4'", [
                            data === null || data === void 0 ? void 0 : data.landlines[i].text,
                            time,
                            businessID
                        ]);
                    }
                }
            }
            //console.log("data?.social----------", data?.social)
            if ((data === null || data === void 0 ? void 0 : data.social) && (data === null || data === void 0 ? void 0 : (ref88 = data.social) === null || ref88 === void 0 ? void 0 : ref88.length) > 0) {
                for(var i = 0; i < (data === null || data === void 0 ? void 0 : data.social.length); i++){
                    if ((data === null || data === void 0 ? void 0 : data.social[i].id) > 0 && !(data === null || data === void 0 ? void 0 : data.social[i].id.toString().includes("new"))) {
                        await db.query("UPDATE business_social_links SET social_link=? WHERE business_id=? AND id=?", [
                            data === null || data === void 0 ? void 0 : data.social[i].social_link,
                            businessID,
                            data === null || data === void 0 ? void 0 : data.social[i].id
                        ]);
                    } else {
                        await db.query("INSERT INTO business_social_links SET social_link=?,social_name=?,business_id=?", [
                            data === null || data === void 0 ? void 0 : data.social[i].social_link,
                            data === null || data === void 0 ? void 0 : data.social[i].social_name,
                            businessID, 
                        ]);
                    }
                }
            }
            if ((data === null || data === void 0 ? void 0 : data.webs) && (data === null || data === void 0 ? void 0 : (ref89 = data.webs) === null || ref89 === void 0 ? void 0 : ref89.length) > 0) {
                for(var i = 0; i < (data === null || data === void 0 ? void 0 : data.webs.length); i++){
                    if ((data === null || data === void 0 ? void 0 : data.webs[i].id) > 0 && !(data === null || data === void 0 ? void 0 : data.webs[i].id.toString().includes("new"))) {
                        await db.query("UPDATE business_mobile_emails SET text=?,updated_at=? WHERE business_id=? AND id=?", [
                            data === null || data === void 0 ? void 0 : data.webs[i].text,
                            time,
                            businessID,
                            data === null || data === void 0 ? void 0 : data.webs[i].id
                        ]);
                    } else {
                        await db.query("INSERT INTO business_mobile_emails SET text=?,updated_at=?,business_id=?,type='4'", [
                            data === null || data === void 0 ? void 0 : data.webs[i].text,
                            time,
                            businessID
                        ]);
                    }
                }
            }
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log("----updateContactDetails------", err);
        return false;
    }
}
async function BusinessFaqsUpdate(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let data = (body === null || body === void 0 ? void 0 : body.data) || "";
        let businessID = (body === null || body === void 0 ? void 0 : body.business_id) || "";
        console.log(body, "-------------------", businessID);
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && businessID) {
            console.log("----data--------", data);
            if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
                let current = (0,helper/* getDateTime */.Fc)();
                for(var i = 0; i < (data === null || data === void 0 ? void 0 : data.length); i++){
                    var ref;
                    if (data[i].id == "" || ((ref = data[i]) === null || ref === void 0 ? void 0 : ref.status)) {
                        //only new or update faq add
                        let changeJson = [
                            {
                                question: data[i].question,
                                answer: data[i].answer
                            }, 
                        ];
                        let action = data[i].id > 0 ? "2" : "1";
                        let about = data[i].id > 0 ? "FAQ update" : "New FAQ added";
                        let pkID = data[i].id > 0 ? data[i].id : null;
                        console.log("-pkID-------", pkID, "-----data---------", data[i].id, data[i]);
                        let update = await db.query("INSERT INTO business_changes SET business_id=?,change_value=?,user_id=?,tbl_name='business_faqs',tbl_column='question',created_at=?,action=?,about=?,tbl_primary_id=?", [
                            businessID,
                            JSON.stringify(changeJson),
                            user.id,
                            current,
                            action,
                            about,
                            pkID, 
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "You request regarding new changes submitted successfully. You will be notified when request approved."
                };
            } else {
                return {
                    status: 201,
                    msg: "No changes found. Try after some time."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Invalid request. Refresh the page and try again."
            };
        }
    } catch (err) {
        console.log("----update FAQ Details------", err);
        return {
            status: 201,
            msg: "Something went wrong! Try after some time."
        };
    }
}
async function BusinessOtherInfoUpdate(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let data = (body === null || body === void 0 ? void 0 : body.profile) || "";
        let businessID = (body === null || body === void 0 ? void 0 : body.business_id) || "";
        let formImg = (body === null || body === void 0 ? void 0 : body.form) || "";
        //console.log(data, "-------------------", businessID, formImg)
        //console.log(formImg,"  -------   ---------  ")
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && businessID) {
            var ref, ref94, ref95, ref96, ref97, ref98, ref99, ref100, ref101, ref102;
            let businessTypes = (data === null || data === void 0 ? void 0 : (ref = data.business) === null || ref === void 0 ? void 0 : (ref94 = ref.obj) === null || ref94 === void 0 ? void 0 : ref94.length) > 0 ? data === null || data === void 0 ? void 0 : (ref95 = data.business) === null || ref95 === void 0 ? void 0 : ref95.obj.map((a)=>a.value
            ).join(",") : null;
            let subcat = (data === null || data === void 0 ? void 0 : (ref96 = data.subcat) === null || ref96 === void 0 ? void 0 : (ref97 = ref96.obj) === null || ref97 === void 0 ? void 0 : ref97.length) > 0 ? data === null || data === void 0 ? void 0 : (ref98 = data.subcat) === null || ref98 === void 0 ? void 0 : ref98.obj.map((a)=>a.value
            ).join(",") : null;
            let keywords = (data === null || data === void 0 ? void 0 : (ref99 = data.keywords) === null || ref99 === void 0 ? void 0 : (ref100 = ref99.obj) === null || ref100 === void 0 ? void 0 : ref100.length) > 0 ? data === null || data === void 0 ? void 0 : (ref101 = data.keywords) === null || ref101 === void 0 ? void 0 : ref101.obj.map((a)=>a.value
            ).join(",") : null;
            let payments = (data === null || data === void 0 ? void 0 : data.payments) || null;
            //console.log("---- ------  ", keywords, subcat, businessTypes, businessID)
            let basicUpdate = await db.query("UPDATE businesses SET keywords=?,subcategory=?,type_of_business=? WHERE id=?", [
                keywords,
                subcat,
                businessTypes,
                businessID
            ]);
            //console.log("------- basicUpdate-------", payments)
            //insert payment modes
            if ((payments === null || payments === void 0 ? void 0 : payments.length) > 0) {
                let paymentArr = [];
                payments.split(",").map((val)=>{
                    paymentArr.push([
                        businessID,
                        val,
                        "1"
                    ]);
                });
                if (paymentArr.length > 0) {
                    let deletePay = await db.query("DELETE FROM business_payment_modes WHERE business_id=?", [
                        businessID
                    ]);
                    let insertPay = await db.query("INSERT INTO business_payment_modes (business_id,payment_mode_id,status) VALUES ? ", [
                        paymentArr
                    ]);
                }
            }
            //insert business Timings
            if ((data === null || data === void 0 ? void 0 : (ref102 = data.timings) === null || ref102 === void 0 ? void 0 : ref102.length) > 0) {
                let daysDataArray = [];
                data === null || data === void 0 ? void 0 : data.timings.map(function(daysHourslisting, keyIndex) {
                    let is_open = 2;
                    if (daysHourslisting.open && daysHourslisting.open == "1") {
                        is_open = 1;
                        daysHourslisting.start_time = null;
                        daysHourslisting.end_time = null;
                    } else if (daysHourslisting.close && daysHourslisting.close == "1") {
                        is_open = 0;
                        daysHourslisting.start_time = null;
                        daysHourslisting.end_time = null;
                    }
                    //for is dual timing
                    if (daysHourslisting.dual_start_time != "" && daysHourslisting.dual_end_time != "") {
                        daysHourslisting.dual_start_time = daysHourslisting.dual_start_time;
                        daysHourslisting.dual_end_time = daysHourslisting.dual_end_time;
                    } else {
                        daysHourslisting.dual_start_time = null;
                        daysHourslisting.dual_end_time = null;
                    }
                    let dayname = daysHourslisting.value;
                    dayname = dayname.toUpperCase(); //upper case
                    //dayname = getWeekDaysShortName(dayname)//upper case
                    daysDataArray.push([
                        businessID,
                        dayname,
                        is_open,
                        daysHourslisting.start_time,
                        daysHourslisting.end_time,
                        daysHourslisting.dual_start_time,
                        daysHourslisting.dual_end_time, 
                    ]);
                });
                //console.log(daysDataArray)
                if (daysDataArray.length > 0) {
                    console.log("---daysDataArray --------", daysDataArray);
                    let deleteTimings = await db.query("DELETE FROM business_timings WHERE business_id =?", [
                        businessID
                    ]);
                    const insertBusinessDays = await db.query("INSERT INTO business_timings  (business_id,day,is_open,open_at,close_at,dual_open_at,dual_close_at) VALUES ?", [
                        daysDataArray
                    ]);
                }
            }
            if (formImg === null || formImg === void 0 ? void 0 : formImg.gst) {
                var ref103, ref104, ref105;
                if (formImg === null || formImg === void 0 ? void 0 : (ref103 = formImg.gst) === null || ref103 === void 0 ? void 0 : (ref104 = ref103.image_data) === null || ref104 === void 0 ? void 0 : ref104.file_name) {
                    var ref106, ref107;
                    db.query("UPDATE business_details SET gst_document=?,is_gst_verified='0' WHERE business_id =?", [
                        formImg === null || formImg === void 0 ? void 0 : (ref106 = formImg.gst) === null || ref106 === void 0 ? void 0 : (ref107 = ref106.image_data) === null || ref107 === void 0 ? void 0 : ref107.file_name,
                        businessID
                    ]);
                }
                if (formImg === null || formImg === void 0 ? void 0 : (ref105 = formImg.gst) === null || ref105 === void 0 ? void 0 : ref105.gst_number) {
                    var ref108;
                    db.query("UPDATE business_details SET gst_number=?,is_gst_verified='0' WHERE business_id =?", [
                        formImg === null || formImg === void 0 ? void 0 : (ref108 = formImg.gst) === null || ref108 === void 0 ? void 0 : ref108.gst_number,
                        businessID
                    ]);
                }
            }
            if (formImg === null || formImg === void 0 ? void 0 : formImg.pancard) {
                var ref109, ref110, ref111;
                if (formImg === null || formImg === void 0 ? void 0 : (ref109 = formImg.pancard) === null || ref109 === void 0 ? void 0 : (ref110 = ref109.image_data) === null || ref110 === void 0 ? void 0 : ref110.file_name) {
                    var ref112, ref113;
                    db.query("UPDATE business_details SET pancard_document=?,is_pancard_verfied='0' WHERE business_id =?", [
                        formImg === null || formImg === void 0 ? void 0 : (ref112 = formImg.pancard) === null || ref112 === void 0 ? void 0 : (ref113 = ref112.image_data) === null || ref113 === void 0 ? void 0 : ref113.file_name,
                        businessID
                    ]);
                }
                if (formImg === null || formImg === void 0 ? void 0 : (ref111 = formImg.pancard) === null || ref111 === void 0 ? void 0 : ref111.pancard_number) {
                    var ref114;
                    db.query("UPDATE business_details SET pancard_number=?,is_pancard_verfied='0' WHERE business_id =?", [
                        formImg === null || formImg === void 0 ? void 0 : (ref114 = formImg.pancard) === null || ref114 === void 0 ? void 0 : ref114.pancard_number,
                        businessID
                    ]);
                }
            }
            return {
                status: 200,
                msg: "Changes has been updated successfully."
            };
        } else {
            return {
                status: 201,
                msg: "Invalid request. Refresh the page and try again."
            };
        }
    } catch (err) {
        console.log("----update Other Details------", err);
        return {
            status: 201,
            msg: "Something went wrong! Try after some time."
        };
    }
}
async function deleteBusiness(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let businessID = (body === null || body === void 0 ? void 0 : body.business_id) || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && businessID) {
            let time = (0,helper/* getDateTime */.Fc)();
            //console.log("---- ------  ", keywords, subcat, businessTypes, businessID)
            let basicUpdate = await db.query("UPDATE businesses SET deleted_at=? WHERE id=? AND user_id =?", [
                time,
                businessID,
                user.id
            ]);
            //console.log("basicUpdate -------", basicUpdate)
            if ((basicUpdate === null || basicUpdate === void 0 ? void 0 : basicUpdate.affectedRows) > 0) {
                return {
                    status: 200,
                    msg: "Business deleted successfully."
                };
            } else {
                return {
                    status: 201,
                    msg: "You can not delete this business. Contact to admin."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Invalid request. Refresh the page and try again."
            };
        }
    } catch (err) {
        console.log("----update Other Details------", err);
        return {
            status: 201,
            msg: "Something went wrong! Try after some time."
        };
    }
}
async function businessSuggestionsUpdate(db, req) {
    try {
        const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
        let businessID = (body === null || body === void 0 ? void 0 : body.business_id) || "";
        let form = (body === null || body === void 0 ? void 0 : body.form) || {};
        let typeOf = (body === null || body === void 0 ? void 0 : body.type) || "";
        const { user  } = await (0,react_.getSession)({
            req
        });
        if (user && businessID) {
            var ref, ref115, ref116;
            let time = (0,helper/* getDateTime */.Fc)();
            let businessDetails = await db.query("SELECT * FROM business_details WHERE business_id=?", [
                businessID
            ]);
            //   let businessdata = await db.query(
            //     "SELECT * FROM businesses WHERE id=?",
            //     [businessID]
            //   );
            if (typeOf == "contact" && (form === null || form === void 0 ? void 0 : form.contact)) {
                var ref117, ref118, ref119, ref120, ref121, ref122, ref123, ref124, ref125;
                //contact form changes
                //check contact person
                if (((ref117 = form.contact) === null || ref117 === void 0 ? void 0 : ref117.person) && ((ref118 = form.contact) === null || ref118 === void 0 ? void 0 : (ref119 = ref118.person) === null || ref119 === void 0 ? void 0 : ref119.length) > 0) {
                    var ref126;
                    for(var i = 0; i < ((ref126 = form.contact) === null || ref126 === void 0 ? void 0 : ref126.person.length); i++){
                        var ref127, ref128, ref129;
                        let column = "";
                        let json = {};
                        let columnVal = [];
                        if ((ref127 = form.contact) === null || ref127 === void 0 ? void 0 : ref127.person[i].name) {
                            var ref130;
                            json.name = (ref130 = form.contact) === null || ref130 === void 0 ? void 0 : ref130.person[i].name;
                            json["type"] = "5";
                        }
                        if ((ref128 = form.contact) === null || ref128 === void 0 ? void 0 : ref128.person[i].email) {
                            var ref131;
                            json["type"] = "5";
                            json.email = (ref131 = form.contact) === null || ref131 === void 0 ? void 0 : ref131.person[i].email;
                        }
                        if ((ref129 = form.contact) === null || ref129 === void 0 ? void 0 : ref129.person[i].phone) {
                            var ref132;
                            json["type"] = "5";
                            json.phone = (ref132 = form.contact) === null || ref132 === void 0 ? void 0 : ref132.person[i].phone;
                        }
                        if (Object.keys(json).length > 0) {
                            column = "change_value=?,business_id=?,user_id=?,action='1',tbl_column='',tbl_name='business_mobile_emails',about='New contat person add suggestion',created_at=?";
                            columnVal.push(JSON.stringify([
                                json
                            ]), businessID, user.id, time);
                            await db.query("INSERT INTO business_changes SET " + column, columnVal);
                        }
                    }
                }
                //website changes
                if (((ref120 = form.contact) === null || ref120 === void 0 ? void 0 : ref120.website) && ((ref121 = form.contact) === null || ref121 === void 0 ? void 0 : ref121.website.length) > 0) {
                    var ref133;
                    //Code By Gk for Check Duplicat Suggetion ====== Start
                    let businessMobileEmailData = await db.query("SELECT * FROM business_mobile_emails WHERE business_id=? and type = ? ", [
                        businessID,
                        "3"
                    ]);
                    let oldWebLink = [];
                    if (businessMobileEmailData.length > 0) {
                        let oldLinkCount = 0;
                        businessMobileEmailData.map((item)=>{
                            oldWebLink[oldLinkCount] = item.text;
                            oldLinkCount++;
                        });
                    }
                    //Code By Gk for Check Duplicat Suggetion ====== End
                    for(var i = 0; i < ((ref133 = form.contact) === null || ref133 === void 0 ? void 0 : ref133.website.length); i++){
                        var ref134;
                        if ((ref134 = form.contact) === null || ref134 === void 0 ? void 0 : ref134.website[i].url.trim()) {
                            var ref135, ref136;
                            let json = [
                                {
                                    text: (ref135 = form.contact) === null || ref135 === void 0 ? void 0 : ref135.website[i].url.trim(),
                                    type: "3"
                                }, 
                            ];
                            //Code By Gk for condition Duplicat Suggetion
                            if (!oldWebLink.includes((ref136 = form.contact) === null || ref136 === void 0 ? void 0 : ref136.website[i].url.trim())) {
                                await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='1',tbl_column='',tbl_name='business_mobile_emails',about='New web address suggestion',created_at=?", [
                                    JSON.stringify(json),
                                    businessID,
                                    user.id,
                                    time
                                ]);
                            }
                        }
                    }
                }
                //whatapp number cahnges
                if (((ref122 = form.contact) === null || ref122 === void 0 ? void 0 : ref122.whatsapp_no) && ((ref123 = form.contact) === null || ref123 === void 0 ? void 0 : ref123.whatsapp_no) != businessDetails[0].whatsapp_no) {
                    var ref137;
                    await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='whatsapp_no',tbl_name='business_details',about='Update whatapp number suggestion',created_at=?,tbl_primary_id=?", [
                        (ref137 = form.contact) === null || ref137 === void 0 ? void 0 : ref137.whatsapp_no,
                        businessID,
                        user.id,
                        time,
                        businessDetails[0].id, 
                    ]);
                }
                //lanline
                if ((ref124 = form.contact) === null || ref124 === void 0 ? void 0 : ref124.landline) {
                    var ref138;
                    let json = [
                        {
                            text: (ref138 = form.contact) === null || ref138 === void 0 ? void 0 : ref138.landline.trim(),
                            type: "4"
                        }
                    ];
                    //first check already have landline or not
                    let landlineData = await db.query("SELECT id,text FROM business_mobile_emails WHERE type = '4' AND business_id=?", [
                        businessID
                    ]);
                    if (landlineData.length > 0) {
                        var ref139;
                        //Code By Gk for condition Duplicat Suggetion
                        if (landlineData[0].text !== ((ref139 = form.contact) === null || ref139 === void 0 ? void 0 : ref139.landline.trim())) {
                            await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='',tbl_name='business_mobile_emails',about='Update landline suggestion',created_at=?,tbl_primary_id=?", [
                                JSON.stringify(json),
                                businessID,
                                user.id,
                                time,
                                landlineData[0].id, 
                            ]);
                        }
                    } else {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='1',tbl_column='',tbl_name='business_mobile_emails',about='New landline suggestion',created_at=?", [
                            JSON.stringify(json),
                            businessID,
                            user.id,
                            time
                        ]);
                    }
                }
                //toll free
                if ((ref125 = form.contact) === null || ref125 === void 0 ? void 0 : ref125.tollfree) {
                    let businessTollFree = await db.query("SELECT id , tollfree FROM businesses WHERE id=?", [
                        businessID
                    ]);
                    //Code By Gk for condition Duplicat Suggetion
                    if (businessTollFree.length > 0) {
                        var ref140;
                        if (businessTollFree[0].tollfree !== ((ref140 = form.contact) === null || ref140 === void 0 ? void 0 : ref140.tollfree)) {
                            var ref141;
                            await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='tollfree',tbl_name='businesses',about='Update toll free suggestion',created_at=?,tbl_primary_id=?", [
                                (ref141 = form.contact) === null || ref141 === void 0 ? void 0 : ref141.tollfree,
                                businessID,
                                user.id,
                                time,
                                businessID
                            ]);
                        }
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "timing" && (form === null || form === void 0 ? void 0 : form.timings)) {
                //timing form changes
                await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='1',tbl_column='',tbl_name='business_timings',about='New Timing suggestion',created_at=?", [
                    JSON.stringify(form === null || form === void 0 ? void 0 : form.timings),
                    businessID,
                    user.id,
                    time
                ]);
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "business_name" && (form === null || form === void 0 ? void 0 : form.business_name)) {
                //business name changes
                let businessName = await db.query("SELECT id,name FROM businesses WHERE id=?", [
                    businessID
                ]);
                if ((businessName === null || businessName === void 0 ? void 0 : businessName.length) > 0) {
                    if (businessName[0].name !== (form === null || form === void 0 ? void 0 : form.business_name)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='name',tbl_name='businesses',about='Update business name suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.business_name,
                            businessID,
                            user.id,
                            time,
                            businessID
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "address" && (form === null || form === void 0 ? void 0 : form.address)) {
                //business address changes
                let stat = false;
                let businessAddress = await db.query("SELECT id , landmark , address,area_id  FROM businesses WHERE id=?", [
                    businessID
                ]);
                if (businessAddress.length > 0) {
                    var ref142, ref143, ref144;
                    if (form === null || form === void 0 ? void 0 : (ref142 = form.address) === null || ref142 === void 0 ? void 0 : ref142.landmark) {
                        if (businessAddress[0].landmark !== (form === null || form === void 0 ? void 0 : form.address.landmark)) {
                            await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='landmark',tbl_name='businesses',about='Update business landmark suggestion',created_at=?,tbl_primary_id=?", [
                                form === null || form === void 0 ? void 0 : form.address.landmark,
                                businessID,
                                user.id,
                                time,
                                businessID
                            ]);
                            stat = true;
                        }
                    }
                    if (form === null || form === void 0 ? void 0 : (ref143 = form.address) === null || ref143 === void 0 ? void 0 : ref143.address) {
                        var ref145;
                        if (businessAddress[0].address !== (form === null || form === void 0 ? void 0 : (ref145 = form.address) === null || ref145 === void 0 ? void 0 : ref145.address)) {
                            await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='address',tbl_name='businesses',about='Update business address suggestion',created_at=?,tbl_primary_id=?", [
                                form === null || form === void 0 ? void 0 : form.address.address,
                                businessID,
                                user.id,
                                time,
                                businessID
                            ]);
                            stat = true;
                        }
                    }
                    if (form === null || form === void 0 ? void 0 : (ref144 = form.address) === null || ref144 === void 0 ? void 0 : ref144.area) {
                        var ref146, ref147;
                        let area_id = form === null || form === void 0 ? void 0 : (ref146 = form.address) === null || ref146 === void 0 ? void 0 : ref146.area;
                        if (form === null || form === void 0 ? void 0 : (ref147 = form.address) === null || ref147 === void 0 ? void 0 : ref147.areaName) {
                            var ref148, ref149;
                            const getArea = await db.query("SELECT id FROM master_areas WHERE lOWER(name) = ? and city_id = ? AND is_active = '1' and deleted_at IS NULL", [
                                form === null || form === void 0 ? void 0 : (ref148 = form.address) === null || ref148 === void 0 ? void 0 : ref148.areaName.toLowerCase(),
                                businessDetails[0].city_id, 
                            ]);
                            if ((ref149 = getArea[0]) === null || ref149 === void 0 ? void 0 : ref149.id) {
                                var ref150;
                                // in area id find then send area id
                                area_id = (ref150 = getArea[0]) === null || ref150 === void 0 ? void 0 : ref150.id;
                            } else {
                                var ref151;
                                //insert new area
                                const insertArea = await db.query("INSERT INTO master_areas SET name=?,city_id =?,created_at=?", [
                                    form === null || form === void 0 ? void 0 : (ref151 = form.address) === null || ref151 === void 0 ? void 0 : ref151.areaName,
                                    businessDetails[0].city_id,
                                    time
                                ]);
                                if (insertArea.affectedRows > 0 && insertArea.insertId > 0) {
                                    area_id = insertArea.insertId;
                                }
                            }
                        }
                        if (businessAddress[0].area_id !== area_id) {
                            await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='area_id',tbl_name='businesses',about='Update business area suggestion',created_at=?,tbl_primary_id=?", [
                                area_id,
                                businessID,
                                user.id,
                                time,
                                businessID
                            ]);
                            stat = true;
                        }
                    }
                }
                if (stat) {
                    return {
                        status: 200,
                        msg: "Your suggestion submitted successfully. You will be notified when approve."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "Something went wrong! Please try after some time."
                    };
                }
            } else if (typeOf == "head_office" && (form === null || form === void 0 ? void 0 : form.head_office)) {
                //business head office changes
                let headOffice = await db.query("SELECT id , head_office  FROM businesses WHERE id=?", [
                    businessID
                ]);
                if (headOffice.length > 0) {
                    if (headOffice[0].head_office !== (form === null || form === void 0 ? void 0 : form.head_office)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='head_office',tbl_name='businesses',about='Update Head office suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.head_office,
                            businessID,
                            user.id,
                            time,
                            businessID
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "branch_office" && (form === null || form === void 0 ? void 0 : form.branch_office)) {
                //business branch office
                let branchOffice = await db.query("SELECT id , branch_office  FROM businesses WHERE id=?", [
                    businessID
                ]);
                if (branchOffice.length > 0) {
                    if (branchOffice[0].branch_office !== (form === null || form === void 0 ? void 0 : form.branch_office)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='branch_office',tbl_name='businesses',about='Update branch office suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.branch_office,
                            businessID,
                            user.id,
                            time,
                            businessID
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "company_description" && (form === null || form === void 0 ? void 0 : form.company_description)) {
                //business branch office
                let companyDescription = await db.query("SELECT id , company_description  FROM businesses WHERE id=?", [
                    businessID
                ]);
                if (companyDescription.length > 0) {
                    if (companyDescription[0].company_description !== (form === null || form === void 0 ? void 0 : form.company_description)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='company_description',tbl_name='businesses',about='Update business description suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.company_description,
                            businessID,
                            user.id,
                            time,
                            businessID
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "business_more_info" && (form === null || form === void 0 ? void 0 : form.business_more_info)) {
                let businessMoreInfo = await db.query("SELECT id , business_more_info  FROM businesses WHERE id=?", [
                    businessID
                ]);
                //business branch office
                if (businessMoreInfo.length > 0) {
                    if (businessMoreInfo[0].business_more_info !== (form === null || form === void 0 ? void 0 : form.business_more_info)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='business_more_info',tbl_name='businesses',about='Update business more info suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.business_more_info,
                            businessID,
                            user.id,
                            time,
                            businessID
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "year_establishment" && (form === null || form === void 0 ? void 0 : form.year_establishment)) {
                //business branch office
                let yearEstablishment = await db.query("SELECT id , year_establishment  FROM business_details WHERE business_id=?", [
                    businessID
                ]);
                //business branch office
                if (yearEstablishment.length > 0) {
                    if (yearEstablishment[0].year_establishment !== (form === null || form === void 0 ? void 0 : form.year_establishment)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='year_establishment',tbl_name='business_details',about='Update year establishment suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.year_establishment,
                            businessID,
                            user.id,
                            time,
                            businessDetails[0].id, 
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "no_of_employee" && (form === null || form === void 0 ? void 0 : form.no_of_employee)) {
                //business branch office
                let numberOfEmployee = await db.query("SELECT id , no_of_employee  FROM businesses WHERE id=?", [
                    businessID
                ]);
                //business branch office
                if (numberOfEmployee.length > 0) {
                    if (numberOfEmployee[0].no_of_employee !== (form === null || form === void 0 ? void 0 : form.no_of_employee)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='no_of_employee',tbl_name='businesses',about='Update no. of employees suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.no_of_employee,
                            businessID,
                            user.id,
                            time,
                            businessID
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "awards" && (form === null || form === void 0 ? void 0 : form.awards)) {
                let awardsQue = await db.query("SELECT id , awards  FROM businesses WHERE id=?", [
                    businessID
                ]);
                //business branch office
                if (awardsQue.length > 0) {
                    if (awardsQue[0].awards !== (form === null || form === void 0 ? void 0 : form.awards)) {
                        //business branch office
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='awards',tbl_name='businesses',about='Update awards suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.awards,
                            businessID,
                            user.id,
                            time,
                            businessID
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "past_experience" && (form === null || form === void 0 ? void 0 : form.past_experience)) {
                //business branch office
                let pastExperience = await db.query("SELECT id , past_experience  FROM businesses WHERE id=?", [
                    businessID
                ]);
                //business branch office
                if (pastExperience.length > 0) {
                    if (pastExperience[0].past_experience !== (form === null || form === void 0 ? void 0 : form.past_experience)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='past_experience',tbl_name='businesses',about='Update awards suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.past_experience,
                            businessID,
                            user.id,
                            time,
                            businessID
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "additional_information" && (form === null || form === void 0 ? void 0 : form.additional_information)) {
                let additionalInformation = await db.query("SELECT id , additional_information  FROM businesses WHERE id=?", [
                    businessID
                ]);
                //business branch office
                if (additionalInformation.length > 0) {
                    if (additionalInformation[0].additional_information !== (form === null || form === void 0 ? void 0 : form.additional_information)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='additional_information',tbl_name='businesses',about='Update additional information suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.additional_information,
                            businessID,
                            user.id,
                            time,
                            businessID, 
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "product_and_services" && (form === null || form === void 0 ? void 0 : form.product_and_services)) {
                //business branch office
                let productAndServices = await db.query("SELECT id , product_and_services  FROM businesses WHERE id=?", [
                    businessID
                ]);
                //business branch office
                if (productAndServices.length > 0) {
                    if (productAndServices[0].product_and_services !== (form === null || form === void 0 ? void 0 : form.product_and_services)) {
                        await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='product_and_services',tbl_name='businesses',about='Update Products and Services suggestion',created_at=?,tbl_primary_id=?", [
                            form === null || form === void 0 ? void 0 : form.product_and_services,
                            businessID,
                            user.id,
                            time,
                            businessID, 
                        ]);
                    }
                }
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "payment_modes" && (form === null || form === void 0 ? void 0 : form.payment_modes)) {
                //business branch office
                await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='1',tbl_name='business_payment_modes',about='Add payment modes',created_at=?", [
                    form === null || form === void 0 ? void 0 : form.payment_modes,
                    businessID,
                    user.id,
                    time
                ]);
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "logo" && (form === null || form === void 0 ? void 0 : form.new_logo)) {
                //business branch office
                await db.query("INSERT INTO business_changes SET change_value=?,business_id=?,user_id=?,action='2',tbl_column='logo',tbl_name='businesses',about='Update logo suggestion',created_at=?,tbl_primary_id=?", [
                    form === null || form === void 0 ? void 0 : form.new_logo,
                    businessID,
                    user.id,
                    time,
                    businessID
                ]);
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "media" && (form === null || form === void 0 ? void 0 : form.images) && (form === null || form === void 0 ? void 0 : form.images.length) > 0) {
                var ref152;
                let up = false;
                for(var i = 0; i < (form === null || form === void 0 ? void 0 : (ref152 = form.images) === null || ref152 === void 0 ? void 0 : ref152.length); i++){
                    var ref153, ref154;
                    if (((ref153 = form === null || form === void 0 ? void 0 : form.images[i]) === null || ref153 === void 0 ? void 0 : ref153.key_id) == "" && ((ref154 = form === null || form === void 0 ? void 0 : form.images[i]) === null || ref154 === void 0 ? void 0 : ref154.file_name)) {
                        var ref155;
                        await db.query("INSERT INTO business_changes SET business_id=?,change_value=?,user_id=?,tbl_column='url',tbl_name='business_img_videos',created_at=?,action='1',about='New Image Added'", [
                            businessID,
                            (ref155 = form === null || form === void 0 ? void 0 : form.images[i]) === null || ref155 === void 0 ? void 0 : ref155.file_name,
                            user.id,
                            time
                        ]);
                        up = true;
                    }
                }
                if (up) {
                    return {
                        status: 200,
                        msg: "Your suggestion submitted successfully. You will be notified when approve."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "No images available to upload. Please try again."
                    };
                }
            } else if (typeOf == "categories" && (form === null || form === void 0 ? void 0 : form.subcat) && (form === null || form === void 0 ? void 0 : (ref = form.subcat) === null || ref === void 0 ? void 0 : ref.length) > 0) {
                let ids = form === null || form === void 0 ? void 0 : form.subcat.map((val)=>val.id
                );
                let newIds = ids.join(",");
                await db.query("INSERT INTO business_changes SET business_id=?,change_value=?,user_id=?,tbl_column='subcategory',tbl_name='businesses',created_at=?,action='2',about='Update sub categories suggestion',tbl_primary_id=?", [
                    businessID,
                    newIds,
                    user.id,
                    time,
                    businessID
                ]);
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "keyword" && (form === null || form === void 0 ? void 0 : form.keyword) && (form === null || form === void 0 ? void 0 : (ref115 = form.keyword) === null || ref115 === void 0 ? void 0 : ref115.length) > 0) {
                let ids = form === null || form === void 0 ? void 0 : form.keyword.map((val)=>val.id
                );
                let newIds = ids.join(",");
                await db.query("INSERT INTO business_changes SET business_id=?,change_value=?,user_id=?,tbl_column='keywords',tbl_name='businesses',created_at=?,action='2',about='Update keywords suggestion',tbl_primary_id=?", [
                    businessID,
                    newIds,
                    user.id,
                    time,
                    businessID
                ]);
                return {
                    status: 200,
                    msg: "Your suggestion submitted successfully. You will be notified when approve."
                };
            } else if (typeOf == "social" && (form === null || form === void 0 ? void 0 : form.social) && (form === null || form === void 0 ? void 0 : (ref116 = form.social) === null || ref116 === void 0 ? void 0 : ref116.length) > 0) {
                let up = false;
                for(var i = 0; i < (form === null || form === void 0 ? void 0 : form.social.length); i++){
                    if ((form === null || form === void 0 ? void 0 : form.social[i].social_link) && (form === null || form === void 0 ? void 0 : form.social[i].id) && (form === null || form === void 0 ? void 0 : form.social[i].change)) {
                        //with primary id
                        await db.query("INSERT INTO business_changes SET business_id=?,change_value=?,user_id=?,tbl_column='social_link',tbl_name='business_social_links',created_at=?,action='2',about='Update social link',tbl_primary_id=?", [
                            businessID,
                            form === null || form === void 0 ? void 0 : form.social[i].social_link,
                            user.id,
                            time,
                            form === null || form === void 0 ? void 0 : form.social[i].id, 
                        ]);
                        up = true;
                    } else if ((form === null || form === void 0 ? void 0 : form.social[i].social_link) && (form === null || form === void 0 ? void 0 : form.social[i].change)) {
                        //without id
                        let json = JSON.stringify([
                            {
                                type: form === null || form === void 0 ? void 0 : form.social[i].social_name,
                                link: form === null || form === void 0 ? void 0 : form.social[i].social_link
                            }, 
                        ]);
                        await db.query("INSERT INTO business_changes SET business_id=?,change_value=?,user_id=?,tbl_name='business_social_links',created_at=?,action='1',about='Update social link'", [
                            businessID,
                            json,
                            user.id,
                            time
                        ]);
                        up = true;
                    }
                }
                if (up) {
                    return {
                        status: 200,
                        msg: "Your suggestion submitted successfully. You will be notified when approve."
                    };
                } else {
                    return {
                        status: 201,
                        msg: "Something went wrong! Please try after some time."
                    };
                }
            } else {
                return {
                    status: 201,
                    msg: "Invalid request. Refresh the page and try again."
                };
            }
        } else {
            return {
                status: 201,
                msg: "Invalid request. Refresh the page and try again."
            };
        }
    } catch (err) {
        console.log("----update Other Details------", err);
        return {
            status: 201,
            msg: "Something went wrong! Try after some time."
        };
    }
}

// EXTERNAL MODULE: ./lib/dbConn.js + 1 modules
var dbConn = __webpack_require__(9090);
;// CONCATENATED MODULE: ./pages/api/protect/[route].js





















async function handler(req, res) {
    //console.log("DIRECTORY PATH___________", __dirname)
    const auth = await middleWareAPI(req, res); // authorized and post method allowed
    if (auth) {
        // only authorized admin request
        const db = await (0,dbConn/* default */.Z)();
        const { route  } = req.query;
        if (route == "login-user") {
            // admin login
            const data = await UserLogin(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    msg: "Login successfully.",
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "Invalid email or password.",
                    status: 201
                });
            }
        } else if (route == "login-google") {
            //login
            const data = await GoogleLogin(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    msg: "Login successfully.",
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "Invalid email or password.",
                    status: 201
                });
            }
        } else if (route == "login-facebook") {
            //login
            const data = await FacebookLogin(db, req);
            res.status(200).json(data);
        } else if (route == "send-otp") {
            //login
            const data = await OtpSend(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        msg: "OTP sent.",
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "Something went wrong.",
                    status: 201
                });
            }
        } else if (route == "send-otp-verify") {
            //verify
            const data = await OtpSendVerify(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        msg: "OTP verified.",
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "Invalid OTP.",
                    status: 201
                });
            }
        } else if (route == "otp-verify-and-user-registration") {
            //verify
            const data = await OtpVerifyAndUserRegistration(db, req, res);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        msg: "OTP verified and user registration successfully.",
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "Invalid OTP.",
                    status: 201
                });
            }
        } else if (route == "signup-details") {
            //verify
            const data = await SignBasicDetails(db, req, res);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "submit-details-signup") {
            //submit form
            const data = await SubmitSignUp(db, req, res);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "user-details") {
            //login
            const data = await UserDetails(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 301) {
                    // destroy the session
                    res.status(301).json({
                        msg: data.msg,
                        status: 301
                    });
                } else if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(201).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "Invalid email or password.",
                    status: 201
                });
            }
        } else if (route == "change-password") {
            //change password
            const data = await ChangePassword(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(201).json({
                        data: data,
                        msg: data.msg,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "Something went wrong. Try after sometime.",
                    status: 201
                });
            }
        } else if (route == "forgot-password") {
            //forgot password
            const data = await ForgotPassword(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(201).json({
                        data: data,
                        msg: data.msg,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "Something went wrong. Try after sometime.",
                    status: 201
                });
            }
        } else if (route == "verify-password") {
            //forgot password
            const data = await VerifyPassword(db, req);
            if (data) {
                if (data.status != "undefined" && data.status != 200) {
                    res.status(201).json({
                        msg: data.msg,
                        status: data.status
                    });
                } else {
                    res.status(201).json({
                        data: data,
                        msg: data.msg,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "Something went wrong. Try after sometime.",
                    status: 201
                });
            }
        } else if (route == "state-wise-cities") {
            //forgot password
            const data = await StateWiseCities(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "state-list") {
            //forgot password
            const data = await StateList(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "city-wise-area") {
            //forgot password
            const data = await CityWiseAreaList(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "check-mail") {
            //mail verify check
            const data = await VerifyMail(db, req);
            if (data) {
                res.status(200).json({
                    msg: data.msg,
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "business-check-mail") {
            //mail verify check
            const data = await BusinessVerifyMail(db, req);
            if (data) {
                res.status(200).json({
                    msg: data.msg,
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "dynamic-pages-content") {
            //mail verify check
            const data = await DynamicPagesContent(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "newsletter-subscriber") {
            // categories listing will call here
            const data = await UserNewsSubscriber(db, req);
            if (data.code === undefined && data !== false) {
                res.status(200).json({
                    msg: "Subscribe successfully!",
                    status: 200
                });
            } else if (data.code == 401) {
                res.status(200).json({
                    msg: "Already subscribed.",
                    status: 201
                });
            } else {
                res.status(200).json({
                    msg: "Something went wrong.",
                    status: 201
                });
            }
        } else if (route == "partner-with-us") {
            // categories listing will call here
            const data = await UserPartnerWithUs(db, req);
            if (data.code === undefined && data !== false) {
                res.status(200).json({
                    msg: "Request send successfully",
                    status: 200
                });
            } else if (data.code == 401) {
                res.status(200).json({
                    msg: "Already sent the request.",
                    status: 201
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "guest-blogs") {
            // categories listing will call here
            const data = await GuestBlogs(db, req);
            if (data.code === undefined && data !== false) {
                res.status(200).json({
                    msg: "Request send successfully",
                    status: 200,
                    id: data !== true ? data : undefined
                });
            } else if (data.code == 401) {
                res.status(200).json({
                    msg: "Already sent the request.",
                    status: 201
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "guest-blogs-amt") {
            // categories listing will call here
            const data = await guestBlogAmt(db, req);
            res.status(200).json({
                msg: "Request send successfully",
                status: 200,
                amt: data
            });
        } else if (route == "get-master-module-details") {
            // get all the master module detail those are used in the free listing
            const data = await GetMasterTableDetails(db, req);
            res.status(201).json({
                data: data,
                status: 200
            });
        } else if (route == "get-ads-package") {
            // get all the master module detail those are used in the free listing
            const data = await GetMasterAdsPackage(db, req);
            res.status(201).json({
                data: data,
                status: 200
            });
        } else if (route == "search-keywords") {
            // get all the master module detail those are used in the free listing
            const data = await SearchKeywords(db, req);
            res.status(201).json({
                data: data,
                status: 200
            });
        } else if (route == "search-subcategories") {
            // get all the master module detail those are used in the free listing
            const data = await searchSubcategories(db, req);
            res.status(201).json({
                data: data,
                status: 200
            });
        } else if (route == "auto-search-subcategories") {
            // get all the master module detail those are used in the free listing
            const data = await autoSearchSubcategories(db, req);
            res.status(200).json(data);
        } else if (route == "auto-search-keywords") {
            // get all the master module detail those are used in the free listing
            const data = await autoSearchKeywords(db, req);
            res.status(200).json(data);
        } else if (route == "all-cities-list") {
            //cities list for searching
            const data = await SearchingCities(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    msg: data.msg,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "categories-home") {
            //categories-home page
            const data = await CategoriesHome(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    msg: data.msg,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "cities-home") {
            //categories-home page
            const data = await CitiesHome(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    msg: data.msg,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "my-listings") {
            //categories-home page
            const data = await Listings(db, req);
            //console.log("dataOFFFFF", data)
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "my-feedbacks") {
            //categories-home page
            const data = await UserFeedback(db, req);
            //console.log("dataOFFFFF", data)
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "my-enquiries") {
            //categories-home page
            const data = await UserEnquiries(db, req);
            //console.log("dataOFFFFF", data)
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "enquiries-business-listing") {
            //categories-home page
            const data = await (0,UserDetails_namespaceObject.UserEnquiriesBusinessListing)(db, req);
            //console.log("dataOFFFFF", data)
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "my-advertises") {
            //categories-home page
            const data = await UserAdvertises(db, req);
            //console.log("dataOFFFFF", data)
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "business-details") {
            //categories-home page
            const data = await ListingDetails(db, req);
            //console.log("dataOFFFFF", data)
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "area-listing-by-city") {
            const data = await getAreaListing(db, req);
            res.status(200).json({
                data: data,
                status: 200
            });
        } else if (route == "city-state-listing-by-statename") {
            const data = await GetCityAndStateIdByStateName(db, req);
            res.status(200).json({
                data: data,
                status: 200
            });
        } else if (route == "check-user-already-register") {
            const data = await checkUserAlreadyRegister(db, req);
            if ((data === null || data === void 0 ? void 0 : data.status) == 200) {
                res.status(200).json(data);
            } else {
                res.status(201).json(data);
            }
        } else if (route == "save-free-listing") {
            //
            const data = await SaveFreeListing(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "save-package-notify") {
            //
            const data = await SavePackageNotify(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "save-buy-package-listing") {
            //
            const data = await SaveBuyPackageListing(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "save-buy-combo-business-package") {
            //
            const data = await SaveBuyComboPackage(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "apply-coupon-code-on-business") {
            //
            const data = await ListingApplyCouponCode(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "update-user-profile") {
            // categories listing will call here
            const data = await UpdateProfile(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        msg: "Request update successfully",
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "update-user-image") {
            // categories listing will call here
            const data = await UpdateUserProfileImage(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        msg: "Request update successfully",
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "contact-us") {
            // categories listing will call here
            const data = await ContactUs(db, req);
            if (data.code === undefined && data !== false) {
                res.status(200).json({
                    msg: "Request sent successfully",
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "faq-list") {
            // categories listing will call here
            const data = await FAQ(db, req);
            res.status(201).json({
                data: data,
                status: 200
            });
        } else if (route == "update-basic-listing") {
            // edit basic details
            const data = await updateBasicDetails(db, req);
            res.status(200).json(data);
        } else if (route == "update-company-details") {
            // categories listing will call here
            const data = await updateCompanyDetails(db, req);
            res.status(200).json(data);
        } else if (route == "update-media-details") {
            // media details
            const data = await updateMediaDetails(db, req);
            //console.log("FINAL GOES FROM ===========>>>>>>>>>>",data)
            if (data) {
                res.status(200).json({
                    msg: "You request regarding new changes submitted successfully. You will be notified when request approved.",
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "Something went wrong! Please try after sometime.",
                    status: 201
                });
            }
        } else if (route == "delete-media-images") {
            // media details
            const data = await deleteMediaDetails(db, req);
            res.status(200).json(data);
        } else if (route == "update-contact-listing") {
            // media details
            const data = await updateContactDetails(db, req);
            //console.log("FINAL GOES FROM ===========>>>>>>>>>>",data)
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "listing-reviews") {
            // media details
            const data = await ListingReviews(db, req);
            //console.log("FINAL GOES FROM ===========>>>>>>>>>>", data)
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "razorpay") {
            // media details
            const data = await razorpayPayment(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "master-package-listing") {
            // media details
            const data = await masterPackagesListing(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "business-package-by-id") {
            // media details
            const data = await packageDetailById(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "user-active-package-listing") {
            // user active plan listing
            const data = await UserActivePlanListing(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "user-business-listing") {
            // user active plan listing
            const data = await UserBusinessListing(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "add-advertisement-request") {
            // media details
            const data = await addAdvertisementRequest(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "upgrade-advertisement-request-plan") {
            // media details
            const data = await upgradeAdvertisementPlanRequest(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "update-advertisement-banner-detail") {
            // media details
            const data = await upgradeAdvertisementPlanBannerDetail(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "update-advertisement-plan-payment-detail") {
            // media details
            const data = await updateAdvertisementPlanPaymentDetail(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "add-advertisement-amount") {
            // media details
            const data = await addAdvertisementAmount(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "ads-stop") {
            // media details
            const data = await stopAdvertisement(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "search-businesses") {
            // common searching functions
            const data = await SearchBusiness(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "requirements-submit") {
            // common searching functions
            const data = await EnquriesForm(db, req);
            if (data) {
                res.status(200).json({
                    msg: "Request submitted successfully.",
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "update-advertisement-detail") {
            // common searching functions
            const data = await UpdateAdvertisementDetail(db, req);
            if (data) {
                res.status(200).json({
                    msg: "Record updated successfully.",
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "get-advertisement-analysis") {
            // common searching functions
            const data = await GetAdvertisementDetail(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "save-apply-job-form") {
            // common searching functions
            const data = await ApplyForJob(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "incorrect-listing") {
            // incorrect report
            const data = await ReportListingInaccurate(db, req);
            res.status(200).json(data);
        } else if (route == "listing-report-abuse") {
            // abuse report of listing
            const data = await ReportListingAbuse(db, req);
            res.status(200).json(data);
        } else if (route == "report-comment") {
            // abuse report of listing
            const data = await ReportComment(db, req);
            res.status(200).json(data);
        } else if (route == "sendotp-business") {
            // abuse report of listing
            const data = await SendVerifyBusinessNumber(db, req);
            res.status(200).json(data);
        } else if (route == "resend-otp") {
            // resend OTP common
            const data = await ResendOTPcommon(db, req);
            res.status(200).json(data);
        } else if (route == "review-submit") {
            //
            const data = await ReviewSubmit(db, req);
            res.status(200).json(data);
        } else if (route == "delete-review") {
            //
            const data = await DeleteReview(db, req);
            res.status(200).json(data);
        } else if (route == "business-basic-info") {
            //
            const data = await BusinessInformation(db, req);
            res.status(200).json(data);
        } else if (route == "business-company-info") {
            //
            const data = await BusinessCompanyInfo(db, req);
            res.status(200).json(data);
        } else if (route == "business-media-info") {
            //
            const data = await BusinessMediaInfo(db, req);
            res.status(200).json(data);
        } else if (route == "business-reviews-info") {
            //
            const data = await BusinessReviewInfo(db, req);
            res.status(200).json(data);
        } else if (route == "business-leads-info") {
            //
            const data = await BusinessLeadsInfo(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "business-leads-graph") {
            //
            const data = await BusinessLeadsGraph(db, req);
            if (data) {
                res.status(200).json({
                    data: data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "No records found.",
                    status: 201
                });
            }
        } else if (route == "business-faq-info") {
            //
            const data = await BusinessFaqs(db, req);
            res.status(200).json(data);
        } else if (route == "business-faq-update") {
            //
            const data = await BusinessFaqsUpdate(db, req);
            res.status(200).json(data);
        } else if (route == "update-other-details") {
            //
            const data = await BusinessOtherInfoUpdate(db, req);
            res.status(200).json(data);
        } else if (route == "refer-earn-form") {
            //
            const data = await ReferEarnService(db, req);
            res.status(200).json(data);
        } else if (route == "refer-earn-sevices") {
            // this used in refer earn service show and also used in footer services show so made changes accordingly
            const data = await ServiceList(db, req);
            res.status(200).json(data);
        } else if (route == "refer-earn-listings") {
            const data = await ReferEarnListing(db, req);
            res.status(200).json(data);
        } else if (route == "delete-business") {
            //
            const data = await deleteBusiness(db, req);
            res.status(200).json(data);
        } else if (route == "business-contact-info") {
            //
            const data = await BusinessContactInfo(db, req);
            res.status(200).json(data);
        } else if (route == "business-other-info") {
            //
            const data = await BusinessOtherInfo(db, req);
            res.status(200).json(data);
        } else if (route == "verify-otp-business") {
            // resend OTP common
            const data = await VerifyOtpBusiness(db, req);
            res.status(200).json(data);
        } else if (route == "apply-coupon-code-advertisement") {
            //
            const data = await ApplyCouponCodeOnAdvertisement(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(200).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "No records.",
                    status: 201
                });
            }
        } else if (route == "get-user-wallet-amount") {
            const data = await getUserWalletAmount(db, req);
            res.status(200).json(data);
        } else if (route == "get-user-wallet-listing") {
            const data = await getUserWalletHistoryListing(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "credit-debit-wallet-amount") {
            const data = await DebitCreditUserWalletAmount(db, req);
            res.status(200).json(data);
        } else if (route == "share-business") {
            const data = await ShareBusiness(db, req);
            res.status(200).json(data);
        } else if (route == "refer-details") {
            const data = await ReferDetails(db, req);
            res.status(200).json(data);
        } else if (route == "refer-details-submit") {
            const data = await ReferDetailsSubmit(db, req);
            res.status(200).json(data);
        } else if (route == "user-token-notify") {
            const data = await UserToeknNotify(db, req);
            res.status(200).json(data);
        } else if (route == "master-combo-package-listing") {
            // media details
            const data = await masterComboPackagesListing(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "combo-package-by-id") {
            // media details
            const data = await comboPackageById(db, req);
            if (data) {
                res.status(200).json({
                    data,
                    status: 200
                });
            } else {
                res.status(200).json({
                    msg: "something went wrong",
                    status: 201
                });
            }
        } else if (route == "get-feedback-details") {
            const data = await getFeedbackDetails(db, req);
            res.status(200).json(data);
        } else if (route == "feedbacks-submit") {
            const data = await submitFeedbackDetails(db, req);
            res.status(200).json(data);
        } else if (route == "media-details-page") {
            const data = await mediaFeedDetails(db, req);
            res.status(200).json(data);
        } else if (route == "business-suggestion-update") {
            const data = await businessSuggestionsUpdate(db, req);
            res.status(200).json(data);
        } else if (route == "get-user-detail-by-id") {
            //login
            const data = await getUserDetailsById(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(201).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "Invalid email or password.",
                    status: 201
                });
            }
        } else if (route == "update-mobile-show-hide") {
            const data = await updateMobileShowHide(db, req);
            if (data) {
                if (data.status != "undefined" && data.status == 201) {
                    res.status(201).json({
                        msg: data.msg,
                        status: 201
                    });
                } else {
                    res.status(201).json({
                        data: data,
                        status: 200
                    });
                }
            } else {
                res.status(200).json({
                    msg: "Something went wrong.",
                    status: 201
                });
            }
        } else {
            // invalid api call here
            res.status(200).json({
                msg: "Invalid request",
                status: 201
            });
        }
    } else {
        res.status(200).json({
            msg: "Unauthorized request",
            status: 500
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
var __webpack_exports__ = __webpack_require__.X(0, [8365,2212], () => (__webpack_exec__(7396)));
module.exports = __webpack_exports__;

})();