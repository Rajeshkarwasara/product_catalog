"use strict";
exports.id = 4823;
exports.ids = [4823];
exports.modules = {

/***/ 1795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nk": () => (/* binding */ AdvertisementDetails),
  "Le": () => (/* binding */ ListingDetails),
  "xt": () => (/* binding */ UserDetails),
  "UH": () => (/* binding */ UserEnquiriesBusinessListing)
});

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1423);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
// EXTERNAL MODULE: external "@aws-sdk/s3-request-presigner"
var s3_request_presigner_ = __webpack_require__(6936);
// EXTERNAL MODULE: external "@aws-sdk/client-s3"
var client_s3_ = __webpack_require__(1841);
// EXTERNAL MODULE: external "sharp"
var external_sharp_ = __webpack_require__(7441);
;// CONCATENATED MODULE: ./lib/S3img.js




const client = new client_s3_.S3Client({
    region: "ap-south-1",
    credentials: {
        secretAccessKey: "cKimZ9K4rdPtsSE+5WEIjTdh4pUqirshOb/QlS9I",
        accessKeyId: "AKIAXAZCBYOFVOBHLZHL"
    }
});
async function S3img(keyImg, path = "", isDefaultImage = true, firstName = "") {
    try {
        //let key = (keyImg !== null && keyImg != '') ? path + keyImg : ((isDefaultImage) ? 'uploads/images/no-image.png' : null)
        let key = keyImg !== null && keyImg != "" ? path + keyImg : null;
        if (key !== null && key != "") {
            const objectParams = {
                Bucket: "dialmenow",
                Key: key,
                Expires: 84600
            };
            // 'uploads/category/images/octqk0SfPUO99hZAk7GPfdJkWyhvsrCyuHpRhyeB.jpg'
            //const url = s3.getSignedUrl("getObject", objectParams);
            const command = new client_s3_.GetObjectCommand(objectParams);
            const url = await (0,s3_request_presigner_.getSignedUrl)(client, command, {
                expiresIn: 84600
            }).then((val)=>val
            );
            return url;
        } else {
            if (firstName) {
                var ref;
                let lttr = firstName.split("").filter((val)=>!Number.isInteger(parseInt(val.charAt(0))) ? val : null
                ).join("").trim();
                lttr = ((ref = lttr.trim()) === null || ref === void 0 ? void 0 : ref.length) > 0 ? lttr.substring(0, 1).toLocaleLowerCase() : "a";
                return "/images/avatars/" + lttr + ".webp";
            } else {
                return isDefaultImage ? "/images/no-image.png" : null;
            }
        }
    } catch (err) {
        console.log("_____________________________ERR S3 Image fetch Time_________________________", err);
        return null;
    }
}
async function S3imgUpload(key, source_url, isBlobKey = false) {
    try {
        console.log("____________upload img__________________", key, source_url, __dirname.split(".next"));
        let extn = key.split(".").pop();
        let contentType = "application/octet-stream";
        if (extn == "pdf") contentType = "application/pdf";
        if (extn == "png" || extn == "jpeg" || extn == "jpg" || extn == "gif" || extn == "webp" || extn == "svg") contentType = "image/" + extn;
        console.log("ext-->>>", extn);
        if (key !== null && key != "") {
            const imageURL = source_url;
            let blob = "";
            if (!isBlobKey) {
                let rootPath = __dirname.split(".next")[0] + "public/temp/" + source_url;
                /*let blob = await fs.readFile(rootPath, function (err, data) {
                    if (err) throw err // Fail if the file can't be read.
    
                    return data
                    
                })*/ blob = fs.readFileSync(rootPath);
            } else {
                // const file = new File([source_url], "filename");
                blob = source_url;
            }
            console.log("---blob---------", blob);
            if (blob != "") {
                const putObjectParams = {
                    Bucket: "dialmenow",
                    Key: key,
                    Body: blob,
                    ContentType: contentType
                };
                const putCommand = new PutObjectCommand(putObjectParams);
                const response = await client.send(putCommand);
                console.log("____________ response ______________", response);
                return true;
            } else {
                return false;
            }
        /*
            const putObjectParams = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
                Key: key,
                Body: data,

            }
            const putCommand = new PutObjectCommand(putObjectParams);


            const response = client.send(putCommand);
            */ /*const objectParams = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
                Key: key,

            }

            const command = new GetObjectCommand(objectParams);
            const url = await getSignedUrl(client, command, { expiresIn: 60 }).then((val) => val);
            console.log("______url____________", url)
            return url;*/ } else {
            return false;
        }
    } catch (err) {
        console.log("__________________S3 upload error______________________________", err);
        return false;
    }
}
//Direct file upload on S3
async function DirectUploadFileAtS3(key, sourceFile) {
    try {
        if (key !== null && key != "") {
            let extn = key.split(".").pop();
            let contentType = "application/octet-stream";
            if (extn == "pdf") contentType = "application/pdf";
            if (extn == "png" || extn == "jpeg" || extn == "jpg" || extn == "gif" || extn == "webp" || extn == "svg") contentType = "image/" + extn;
            let originalName = key.replace(extn, "");
            originalName = originalName + "webp";
            let blob = fs.readFileSync(sourceFile);
            if (extn.toLocaleLowerCase() == "png" || extn.toLocaleLowerCase() == "jpg" || extn.toLocaleLowerCase() == "jpeg" || extn.toLocaleLowerCase() == "svg") {
                let processedImage = "";
                if (extn.toLocaleLowerCase() == "png") {
                    processedImage = await sharp(blob).png({
                        quality: 90
                    }).toBuffer();
                }
                if (extn.toLocaleLowerCase() == "jpg" || extn.toLocaleLowerCase() == "jpeg") {
                    processedImage = await sharp(blob).jpeg({
                        quality: 80
                    }).toBuffer();
                }
                if (extn.toLocaleLowerCase() == "svg") {
                    processedImage = await sharp(blob).svg({
                        quality: 90
                    }).toBuffer();
                }
                const putObjectParams = {
                    Bucket: "dialmenow",
                    Key: key,
                    Body: processedImage,
                    ContentType: contentType
                };
                const putCommand = new PutObjectCommand(putObjectParams);
                const response = client.send(putCommand);
                return true;
            } else {
                const putObjectParams = {
                    Bucket: "dialmenow",
                    Key: key,
                    Body: blob,
                    ContentType: contentType
                };
                const putCommand = new PutObjectCommand(putObjectParams);
                const response = client.send(putCommand);
                return true;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log("__________________S3 upload error______________________________", err);
        return false;
    }
}

// EXTERNAL MODULE: ./helper/helper.js
var helper = __webpack_require__(8176);
;// CONCATENATED MODULE: ./front_methods/UserDetails.js



async function ListingDetails(db, business_id, user_id) {
    try {
        console.log("_______business_id,user_id_________", business_id, user_id);
        let businesID = business_id || "";
        let currentDate = (0,helper/* getDateTime */.Fc)(1);
        if (businesID) {
            var records = await db.query("SELECT mb.id,mb.name,mb.is_verified,IF((SELECT id FROM business_packages WHERE business_id =mb.id AND (? BETWEEN begins_on AND ends_on) LIMIT 1) > 0,1,2) as is_paid,mb.is_active as approved_status,(SELECT (SUM(rating)/COUNT(id)) as rating from business_rating_reviews WHERE business_id = mb.id AND is_active='1' AND deleted_at IS NULL) as ratings,(SELECT COUNT(id) from business_rating_reviews WHERE business_id = mb.id AND is_active='1' AND deleted_at IS NULL) as total_reviews FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_states st ON st.id = mb.state_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas ar ON ar.id = mb.area_id WHERE mb.deleted_at IS NULL AND mb.user_id=? AND mb.id=?", [
                currentDate,
                user_id,
                businesID
            ]);
            //console.log(records)
            if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
                records[0].all_list = await db.query("SELECT id,name FROM businesses WHERE user_id=? AND deleted_at IS NULL", [
                    user_id
                ]);
                return JSON.stringify({
                    "data": records,
                    status: 200
                });
            } else {
                return JSON.stringify({
                    status: 201
                });
            }
        } else {
            return JSON.stringify({
                status: 201
            });
        }
    } catch (err) {
        console.log("error", err);
        return JSON.stringify({
            status: 201
        });
    }
}
async function AdvertisementDetails(db, advertise_id) {
    try {
        let advertiseID = advertise_id || "";
        if (advertiseID) {
            var records = await db.query("SELECT businesses.package_type,businesses.city_id, businesses.package_id,businesses.id as ads_id,businesses.business_name,businesses.banner_image,businesses.name as userName,businesses.email as userEmail,businesses.phone as userPhone,businesses.payment,businesses.per_click_price,businesses.per_impression_price,businesses.per_day_amount,DATE_FORMAT(businesses.expired_date,'%d %b %Y') as expired_date,(case WHEN(businesses.ads_status = '2') THEN 'Expaired'  WHEN(businesses.ads_status = '1') THEN 'Published' WHEN(businesses.ads_status = '0') THEN 'Pending' END) as ads_status,(case WHEN(businesses.is_active = '0') THEN 'Inactive'  WHEN(businesses.is_active = '1') THEN 'Active' END) as stop_start,(select GROUP_CONCAT(subCategory.name) as subcategory from master_sub_categories as subCategory where find_in_set(subCategory.id,businesses.sub_category_id) > 0 ) as subcatgoeryName,DATE_FORMAT(businesses.created_at,'%d %b %Y') as date,ct.name as city_name,package.name as package_name,businesses.sub_category_id,banner_position,ads_click,redirect_url,(SELECT count(id) as total_view FROM `ads_view_analytics` WHERE ads_id=businesses.id) as total_view,(SELECT count(id) as total_click FROM `ads_view_analytics` WHERE ads_id=businesses.id AND is_clicked=1) as total_click from advertise_bussiness_requestes as businesses LEFT JOIN master_cities ct ON ct.id = businesses.city_id LEFT JOIN master_ads_packages as package on package.id = businesses.package_id WHERE businesses.id = ?", [
                advertiseID
            ]);
            if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
                var ref, ref1;
                const newData = [];
                var totalUsedAdsAmount = 0;
                if (records && ((ref = records[0]) === null || ref === void 0 ? void 0 : ref.package_type) == "1") {
                    var ref2;
                    //total used amount
                    totalUsedAdsAmount = ((ref2 = records[0]) === null || ref2 === void 0 ? void 0 : ref2.total_view) * records[0].per_impression_price;
                } else {
                    //total used amount
                    totalUsedAdsAmount = records[0].total_view * records[0].per_impression_price + records[0].total_click * records[0].per_click_price;
                }
                var totalRaminingAmount = records[0].payment - totalUsedAdsAmount;
                var newBanner = await S3img(records[0].banner_image, "uploads/advertisements/", false);
                var data = {
                    ...records[0],
                    ["imagePath"]: newBanner,
                    ["RemainingAmount"]: totalRaminingAmount,
                    ["no_of_click"]: records[0].total_click,
                    ["no_of_views"]: (ref1 = records[0]) === null || ref1 === void 0 ? void 0 : ref1.total_view
                };
                newData.push(data);
                records = await newData;
                // getting the time of the ads 
                var ads_time_records = await db.query("SELECT `id`,`day`, `is_open`, `start_time`, `end_time` FROM `ads_show_times` WHERE ads_id=?", [
                    records[0].ads_id
                ]);
                var ads_time_today_records = await db.query("SELECT `id`,`day`, `is_open`, `start_time`, `end_time` FROM `ads_show_times` WHERE ads_id=? and day= UPPER(SUBSTRING(DAYNAME(CURDATE()),1,3))", [
                    records[0].ads_id
                ]);
                //get the total click and total impression (view) by ads id
                var chartCount = await db.query("SELECT date_format(date_time,'%Y-%m-%d') as analysis_date,SUM(CASE WHEN is_clicked = 1 THEN 1 ELSE 0 END) AS total_clicks,COUNT(id) AS total_impression,date_format(date_time,'%d %b') as day FROM `ads_view_analytics` WHERE ads_id=? and MONTH(date_time)=MONTH(now()) and YEAR(date_time)=YEAR(now()) group by date_format(date_time,'%d')", [
                    records[0].ads_id
                ]);
                return JSON.stringify({
                    "data": records,
                    "time": ads_time_records,
                    "todaytime": ads_time_today_records,
                    "chartCount": chartCount,
                    status: 200
                });
            } else {
                return JSON.stringify({
                    status: 201
                });
            }
        } else {
            return JSON.stringify({
                status: 201
            });
        }
    } catch (err) {
        console.log("error", err);
        return JSON.stringify({
            status: 201
        });
    }
}
async function UserDetails(db, user_id) {
    try {
        const userID = user_id || "";
        if (userID) {
            var records = await db.query("SELECT users.id,users.name,mobile,is_verify_email,is_verify_mob,email,password,sex,DATE_FORMAT(dob,'%Y-%m-%d') as dob,DATE_FORMAT(date_of_anniversary,'%Y-%m-%d') as date_of_anniversary,address,area_id,area.name areaName,users.city_id,city.name as cityName,users.state_id,state.name as stateName,pincode,occupation,occupation.name as occupation_name,users.image,marital_status FROM users left join master_occupations as occupation on occupation.id = users.occupation left join master_cities as city on city.id = users.city_id left join master_states as state on state.id=users.state_id left join master_areas as area on area.id=users.area_id WHERE users.is_active='1' AND users.deleted_at IS NULL AND users.id =?", [
                userID
            ]);
            const newData = [];
            ///console.log("records",records)
            for(var i = 0; i < records.length; i++){
                var ref, ref3, ref4, ref5, ref6;
                var logoID = ((ref = records[i]) === null || ref === void 0 ? void 0 : ref.image) != "undefined" && ((ref3 = records[i]) === null || ref3 === void 0 ? void 0 : ref3.image) !== null && ((ref4 = records[i]) === null || ref4 === void 0 ? void 0 : ref4.image) != "" ? "uploads/users/" + ((ref5 = records[i]) === null || ref5 === void 0 ? void 0 : ref5.image) : null;
                var newLogo = await S3img((ref6 = records[i]) === null || ref6 === void 0 ? void 0 : ref6.image, "uploads/users/");
                // var newLogo = await S3img(logoID)
                var data = {
                    ...records[i],
                    ["image"]: newLogo
                };
                newData.push(data);
            }
            records = await newData;
            if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
                return JSON.stringify({
                    "data": records,
                    status: 200
                });
            } else {
                return JSON.stringify({
                    status: 201
                });
            }
        } else {
            return JSON.stringify({
                status: 201
            });
        }
    } catch (err) {
        console.log("error", err);
        return JSON.stringify({
            status: 201
        });
    }
}
//get user enquiries business listing 
async function UserEnquiriesBusinessListing(db, user_id) {
    try {
        if (user_id) {
            var records = await db.query("SELECT b.id,b.id as value,b.name as label from business_leads_histories as e LEFT JOIN businesses as b ON b.id = e.business_id LEFT JOIN user_requirement_requests as request on request.business_id = e.business_id WHERE b.user_id =? and b.is_active='1' GROUP by b.id ORDER BY b.name asc", [
                user_id
            ]);
            if ((records === null || records === void 0 ? void 0 : records.length) > 0) {
                return JSON.stringify({
                    "data": records,
                    status: 200
                });
            } else {
                return JSON.stringify({
                    status: 201
                });
            }
        } else {
            return JSON.stringify({
                status: 201
            });
        }
    } catch (err) {
        console.log("-----error------in UserEnquiriesBusinessListing API", err);
        return false;
    }
}


/***/ }),

/***/ 4937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ dbConn)
/* harmony export */ });
/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2261);
/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);

const db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({
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


/***/ })

};
;