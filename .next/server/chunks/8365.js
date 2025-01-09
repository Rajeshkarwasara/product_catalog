"use strict";
exports.id = 8365;
exports.ids = [8365];
exports.modules = {

/***/ 8365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EK": () => (/* binding */ DirectUploadFileAtS3),
/* harmony export */   "y9": () => (/* binding */ S3img)
/* harmony export */ });
/* unused harmony export S3imgUpload */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6936);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7441);
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sharp__WEBPACK_IMPORTED_MODULE_3__);




const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_2__.S3Client({
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
            const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_2__.GetObjectCommand(objectParams);
            const url = await (0,_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__.getSignedUrl)(client, command, {
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
            let blob = fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync(sourceFile);
            if (extn.toLocaleLowerCase() == "png" || extn.toLocaleLowerCase() == "jpg" || extn.toLocaleLowerCase() == "jpeg" || extn.toLocaleLowerCase() == "svg") {
                let processedImage = "";
                if (extn.toLocaleLowerCase() == "png") {
                    processedImage = await sharp__WEBPACK_IMPORTED_MODULE_3___default()(blob).png({
                        quality: 90
                    }).toBuffer();
                }
                if (extn.toLocaleLowerCase() == "jpg" || extn.toLocaleLowerCase() == "jpeg") {
                    processedImage = await sharp__WEBPACK_IMPORTED_MODULE_3___default()(blob).jpeg({
                        quality: 80
                    }).toBuffer();
                }
                if (extn.toLocaleLowerCase() == "svg") {
                    processedImage = await sharp__WEBPACK_IMPORTED_MODULE_3___default()(blob).svg({
                        quality: 90
                    }).toBuffer();
                }
                const putObjectParams = {
                    Bucket: "dialmenow",
                    Key: key,
                    Body: processedImage,
                    ContentType: contentType
                };
                const putCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_2__.PutObjectCommand(putObjectParams);
                const response = client.send(putCommand);
                return true;
            } else {
                const putObjectParams = {
                    Bucket: "dialmenow",
                    Key: key,
                    Body: blob,
                    ContentType: contentType
                };
                const putCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_2__.PutObjectCommand(putObjectParams);
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


/***/ })

};
;