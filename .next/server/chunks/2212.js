"use strict";
exports.id = 2212;
exports.ids = [2212];
exports.modules = {

/***/ 2212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eo": () => (/* binding */ createBusinessURL),
/* harmony export */   "F2": () => (/* binding */ generatePassword),
/* harmony export */   "Fc": () => (/* binding */ getDateTime),
/* harmony export */   "Wr": () => (/* binding */ formatAmPm),
/* harmony export */   "a4": () => (/* binding */ addDayInDate),
/* harmony export */   "dN": () => (/* binding */ sendOTPphone),
/* harmony export */   "e2": () => (/* binding */ addMonthsInDate),
/* harmony export */   "g9": () => (/* binding */ getBusinessUrl)
/* harmony export */ });
/* unused harmony exports getFileExtension, businessOpen, listToMatrix, createSubCategoryURL, getWeekDaysFullName, getCompanyDescription, formatFileSize */
// type define as '' => datetime , 1=> date , 2=>time , 3=>year, 4 => short day name, 5=> Long day Name,6=> "30 Oct 2022"  type date format
const getDateTime = (type = "", dateNow = "")=>{
    const timeZone = process.env.TZ;
    //console.log("timeZone  ",timeZone)
    var now = dateNow != "" ? new Date(dateNow).toLocaleString("en-US", {
        timeZone
    }).toString() : new Date().toLocaleString("en-US", {
        timeZone
    }).toString();
    now = new Date(now);
    //var now = (dateNow != '') ? new Date(dateNow) : new Date();
    console.log("   ", now);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = "0" + month;
    }
    if (day.toString().length == 1) {
        day = "0" + day;
    }
    if (hour.toString().length == 1) {
        hour = "0" + hour;
    }
    if (minute.toString().length == 1) {
        minute = "0" + minute;
    }
    if (second.toString().length == 1) {
        second = "0" + second;
    }
    if (type == 2) {
        var dateTime = hour + ":" + minute + ":" + second;
    } else if (type == 1) {
        var dateTime = year + "-" + month + "-" + day;
    } else if (type == 3) {
        var dateTime = year;
    } else if (type == 4) {
        var day = now.getDay();
        let weekday = [
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
        ][day];
        var dateTime = weekday;
    } else if (type == 5) {
        var day = now.getDay();
        let weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ][day];
        var dateTime = weekday;
    } else if (type == 6) {
        var month = now.getMonth();
        const monthsName = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ][month];
        var dateTime = day + " " + monthsName + " " + year;
    } else {
        var dateTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }
    return dateTime;
};
async function sendOTPphone(db, phone = "") {
    try {
        let justPhone = phone.replace("+91", "");
        //check OTP send in last 20 min if greater then 5 then STOP OTP
        let current_datetime = getDateTime();
        let insertOTP = await db.query("INSERT INTO sms_otp_logs SET phone=?,otp=otpGenPhone(?),created_at=?", [
            justPhone,
            justPhone,
            current_datetime
        ]);
        if (insertOTP === null || insertOTP === void 0 ? void 0 : insertOTP.insertId) {
            let otp = await db.query("SELECT otp FROM sms_otp_logs WHERE id=?", [
                insertOTP === null || insertOTP === void 0 ? void 0 : insertOTP.insertId
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
const generatePassword = (passwordLength)=>{
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var special_char = "!@#$%()";
    var allChars = numberChars + upperChars + lowerChars + special_char;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray[3] = special_char;
    randPasswordArray = randPasswordArray.fill(allChars, 4);
    return shuffleArray(randPasswordArray.map(function(x) {
        return x[Math.floor(Math.random() * x.length)];
    })).join("");
};
function shuffleArray(array) {
    for(var i = array.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//get file extension using filename
const getFileExtension = (filename)=>{
    var re = /(?:\.([^.]+))?$/;
    var ext = re.exec(filename)[1]; // "txt"
    return ext;
};
const formatAmPm = (dateTimeIn, timeForm = "2", inFormat = "full", outFormat = "full")=>{
    //inFormat -> full (2022-09-09 10:10:00) , H:i , Hi, H:i:s
    // tomeForm -> //1 -> Military, 2 -> AM/PM
    if (dateTimeIn === null || typeof dateTimeIn === "undefined" || dateTimeIn == "") {
        return "";
    } else {
        //get format
        var company_time_format = timeForm;
        dateTimeIn = dateTimeIn.trim();
        if (inFormat == "H:i") {
            //add static date
            var dateTime = "2021/06/03 " + dateTimeIn;
        } else if (inFormat == "Hi") {
            var dateTime = "2021/06/03 " + dateTimeIn.substr(0, 2) + ":" + dateTimeIn.substr(2, 2);
        } else if (inFormat == "H:i:s") {
            var dateTime = "2021/06/03 " + dateTimeIn;
        } else {
            //if date format is Y-m-d then change it to Y/m/d
            var dateTime = dateTimeIn.replaceAll(/-/g, "/");
        }
        dateTime = new Date(dateTime);
        var hours = dateTime.getHours();
        var minutes = dateTime.getMinutes();
        var ampm = "";
        if (company_time_format == 2) {
            ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
        }
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var date = "";
        if (outFormat == "H:i") {
            var time = hours + ":" + minutes + " " + ampm;
            var outDateTime = time;
        } else if (outFormat == "Hi") {
            var time = hours + "" + minutes + " " + ampm;
            var outDateTime = time;
        } else {
            month = "" + (dateTime.getMonth() + 1), day = "" + dateTime.getDate(), year = dateTime.getFullYear();
            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;
            date = [
                year,
                month,
                day
            ].join("-");
            var time = hours + ":" + minutes + " " + ampm;
            var outDateTime = date + " " + time;
        }
        return outDateTime;
    }
};
const businessOpen = (times)=>{
    let dateNow = getDateTime(2); // time now
    let timeArry = (times === null || times === void 0 ? void 0 : times.split(",")) || [];
    if ((timeArry === null || timeArry === void 0 ? void 0 : timeArry.length) > 0) {
        if (timeArry[0] == "open") {
            return true; // open now
        } else if (timeArry[0] == "close") {
            return false; // closed now
        } else {
            if (timeArry[0] <= dateNow && dateNow <= timeArry[1]) {
                return true; // open now
            } else if (2 in timeArry) {
                //dual Time exists
                if (timeArry[2] <= dateNow && dateNow <= timeArry[3]) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    } else {
        return false;
    }
};
const getBusinessUrl = (area, city, businessName, id)=>{
    try {
        let cityName = city === null || city === void 0 ? void 0 : city.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        cityName = cityName.replaceAll(" ", "-");
        let areaName = area === null || area === void 0 ? void 0 : area.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        areaName = areaName.replaceAll(" ", "-");
        let companyName = businessName === null || businessName === void 0 ? void 0 : businessName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        companyName = companyName.replaceAll(" ", "-");
        let url = process.env.BASE_URL + "/" + cityName + "/" + areaName + "/" + companyName + "-contact-details/" + id;
        return url;
    } catch (err) {
        return process.env.BASE_URL;
    }
};
//Convert simple array into two-dimensional array (matrix)
const listToMatrix = (list, elementsPerSubArray)=>{
    var matrix = [], i, k;
    for(i = 0, k = -1; i < list.length; i++){
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
};
//Create business url
const createBusinessURL = (business_id, business_name, city_name, area_name)=>{
    //console.log(listings,"listings...........",x)
    if (business_id && business_name && city_name && area_name) {
        let cityName = city_name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        // console.log(cityName,"cityName....")
        cityName = cityName.replaceAll(" ", "-");
        let areaname = area_name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        areaname = areaname.replaceAll(" ", "-");
        let business = business_name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        business = business.replaceAll(" ", "-");
        let url = process.env.BASE_URL + "/" + cityName + "/" + areaname + "/" + business + "-contact-details/" + business_id;
        return url;
    } else {
        return false;
    }
};
const createSubCategoryURL = (catSlug, city_name, withoutBaseURL = false)=>{
    if (catSlug && city_name) {
        let cityName = city_name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        // console.log(cityName,"cityName....")
        cityName = cityName.replaceAll(" ", "-");
        let url = withoutBaseURL ? cityName + "/" + catSlug : process.env.BASE_URL + "/" + cityName + "/" + catSlug;
        return url;
    } else {
        return null;
    }
};
//add number of months in date
const addMonthsInDate = (numOfMonths, date = new Date())=>{
    date.setMonth(date.getMonth() + numOfMonths);
    return date;
};
//add day in date
const addDayInDate = (num, date = new Date())=>{
    date.setDate(date.getDate() + num);
    return date;
};
function getWeekDaysFullName(dayName) {
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
    if (dayName.toUpperCase().length == 3) {
        var getIndex = shortName.indexOf(dayName.toUpperCase());
        return fullName[getIndex];
    } else {
        return dayName;
    }
}
function getCompanyDescription(name = "", address = "", products = "", subcategories = "", phone = "") {
    let description = "";
    if (address) {
        description = name + " is situated at " + address + "\n";
    }
    if (phone) {
        description = description + "You can contact " + name + " on " + phone + "\n";
    }
    if (products) {
        description = description + name + " provides the following products/services: \n" + products + "\n";
    }
    if (subcategories) {
        description = description + name + " is most searched in " + subcategories;
    }
    return description;
}
function formatFileSize(bytes, decimalPoint) {
    if (bytes == 0) return "0 Bytes";
    var k = 1000, dm = decimalPoint || 2, sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ], i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}


/***/ })

};
;