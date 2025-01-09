"use strict";
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$Q": () => (/* binding */ advertisementEditFormValidate),
/* harmony export */   "AJ": () => (/* binding */ ReviewAndPayValidation),
/* harmony export */   "AT": () => (/* binding */ contactFormValidate),
/* harmony export */   "Bq": () => (/* binding */ ApplyForJobValidation),
/* harmony export */   "Cw": () => (/* binding */ freeListingValidate),
/* harmony export */   "Hl": () => (/* binding */ changePasswordFormValidate),
/* harmony export */   "Kh": () => (/* binding */ addMoneyFormValidate),
/* harmony export */   "Le": () => (/* binding */ emailValidator),
/* harmony export */   "cA": () => (/* binding */ signupValidations),
/* harmony export */   "dQ": () => (/* binding */ partnerFormValidate),
/* harmony export */   "fo": () => (/* binding */ editBusinessCompanyDetailsValid),
/* harmony export */   "hH": () => (/* binding */ advertiseFormValidate),
/* harmony export */   "lj": () => (/* binding */ advertiseWithUsValidate),
/* harmony export */   "wu": () => (/* binding */ guestBlogFormValidate),
/* harmony export */   "yf": () => (/* binding */ userProfileFormValidate)
/* harmony export */ });
/* unused harmony exports urlValidator, passwordValidator, confirmPasswordValidator, formValidate, editBusinessBasicDetailsValid */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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


/***/ })

};
;