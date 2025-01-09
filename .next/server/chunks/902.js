"use strict";
exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5698);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4301);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9270);





const MultiImgUpload = ({ images , setProfile , limit =10 , setShowButton , removeImage , coloumnSize ="col-lg-2" , RowCenterCls ="" , hideUploadBtn =false , hideDeleteBtn =false ,  })=>{
    var ref, ref1;
    console.log("MULTi ---------------", images);
    const { 0: isLoading , 1: setIsloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); //use loder
    const { 0: msgModal , 1: setMsgModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        type: "",
        message: "",
        title: ""
    });
    const setMessageModal = (e)=>{
        setMsgModal((pre)=>{
            return {
                ...pre,
                ["message"]: "",
                ["type"]: "",
                ["title"]: ""
            };
        });
    };
    const loadImg = (url)=>new Promise((resolve)=>{
            const img = new Image();
            img.onload = ()=>resolve({
                    url,
                    width: img.naturalWidth,
                    height: img.naturalHeight
                })
            ;
            img.src = url;
        })
    ;
    const onSelectFile = async (event)=>{
        setIsloading(true); //show loder
        const selectedFiles = event.target.files;
        let allowedTypes = {
            jpg: "jpg",
            jpeg: "jpeg",
            png: "png",
            webp: "webp"
        };
        const selectedFilesArray = Array.from(selectedFiles);
        let imagesArray = [];
        if ((images === null || images === void 0 ? void 0 : images.length) + (selectedFilesArray === null || selectedFilesArray === void 0 ? void 0 : selectedFilesArray.length) <= limit) {
            for(var i = 0; i < selectedFilesArray.length; i++){
                //console.log("--------------", selectedFilesArray[i])
                let extension = selectedFilesArray[i].name.substring(selectedFilesArray[i].name.lastIndexOf(".") + 1).toLowerCase();
                if (selectedFilesArray[i].size / (1024 * 1024) > 10) {
                    setMsgModal((pre)=>{
                        return {
                            ...pre,
                            ["message"]: "Image size can not be greater than 10MB.",
                            ["type"]: "error",
                            ["title"]: "Warning"
                        };
                    });
                    break;
                } else if (allowedTypes[extension]) {
                    console.log(extension, "allowed----------", selectedFilesArray[i].size / (1024 * 1024));
                    //let url = await uploadFileOnS3(selectedFilesArray[i])
                    //imagesArray.push({ url: URL.createObjectURL(selectedFilesArray[i]), key_id: '', file_name: url })
                    //get the image height and width
                    let { url , width , height  } = await loadImg(URL.createObjectURL(selectedFilesArray[i]));
                    if (width >= 735 && height >= 262 && width <= 735 && height <= 262) {
                        let url = await uploadFileOnS3(selectedFilesArray[i]);
                        imagesArray.push({
                            url: URL.createObjectURL(selectedFilesArray[i]),
                            key_id: "",
                            file_name: url
                        });
                    } else {
                        setMsgModal((pre)=>{
                            return {
                                ...pre,
                                ["message"]: `The image must not be smaller than 735 x 262 pixels`,
                                ["type"]: "error",
                                ["title"]: "Warning"
                            };
                        });
                        break;
                    }
                } else {
                    //extension not allowed
                    setMsgModal((pre)=>{
                        return {
                            ...pre,
                            ["message"]: "Invalid images, try allowed images only.",
                            ["type"]: "error",
                            ["title"]: "Warning"
                        };
                    });
                    break;
                }
            }
        } else {
            setMsgModal((pre)=>{
                return {
                    ...pre,
                    ["message"]: "You can upload max " + limit + " images.",
                    ["type"]: "error",
                    ["title"]: "Warning"
                };
            });
        }
        /*
        
              const imagesArray = selectedFilesArray.map( (file) => {
                  let url = '';//await uploadFileOnS3(file)
                  return { url: URL.createObjectURL(file), key_id: '', file_name: url}
            });*/ console.log(imagesArray, "---imagesArray----");
        let newImages = images.concat(imagesArray);
        setProfile((pre)=>({
                ...pre,
                ["images"]: newImages
            })
        );
        // FOR BUG IN CHROME
        event.target.value = "";
        setShowButton(true);
        setIsloading(false); //hide loder
    };
    const uploadFileOnS3 = async (sourceFile, methodType = "POST")=>{
        const url = process.env.BASE_URL + "/api/upload-file";
        const formData = new FormData();
        formData.append("image", sourceFile);
        formData.append("fileName", sourceFile.name);
        formData.append("imgKey", "image");
        formData.append("uploadPath", "company/image/");
        const res = await fetch(url, {
            method: methodType,
            body: formData
        });
        const result = await res.json();
        console.log("-----upload image----------", result);
        if ((result === null || result === void 0 ? void 0 : result.status) == "200") {
            return result === null || result === void 0 ? void 0 : result.filename;
        } else {
            return false;
        }
    };
    async function deleteHandler(image, key = "") {
        console.log("_________delete key________", image, key);
        if (key != "") {
            if (removeImage && removeImage !== "") {
                //call API to remove IMage
                let res = await removeImage(key);
                console.log("-----res----------", res);
            }
            let imagesAfter = images.filter((e, inx)=>{
                if (e.url == image) {
                    return e.is_deleted = true;
                } else {
                    return e;
                }
            });
            setProfile((pre)=>({
                    ...pre,
                    ["images"]: imagesAfter
                })
            );
        } else {
            let imagesAfter = images.filter((e)=>e.url !== image
            );
            URL.revokeObjectURL(image);
            setProfile((pre)=>({
                    ...pre,
                    ["images"]: imagesAfter
                })
            );
        }
        setShowButton(true);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "",
        children: [
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                Type: 1
            }) : "",
            (msgModal === null || msgModal === void 0 ? void 0 : msgModal.message.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: msgModal === null || msgModal === void 0 ? void 0 : msgModal.title,
                message: msgModal === null || msgModal === void 0 ? void 0 : msgModal.message,
                setMessage: setMessageModal,
                status: true,
                type: msgModal === null || msgModal === void 0 ? void 0 : msgModal.type
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `row ${RowCenterCls}`,
                children: [
                    images && (images === null || images === void 0 ? void 0 : images.filter((e)=>{
                        return !(e === null || e === void 0 ? void 0 : e.is_deleted);
                    }).map((image, index)=>{
                        if (!(image === null || image === void 0 ? void 0 : image.is_deleted) || (image === null || image === void 0 ? void 0 : image.is_deleted) == "undefined") {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${coloumnSize}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "imageuploadBox",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `position-relative overflow-hidden imageuploadMain`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                src: image.url,
                                                alt: "",
                                                quality: 100,
                                                layout: "fill",
                                                objectFit: "contain",
                                                className: "position-relative p-2 rounded image"
                                            })
                                        }),
                                        !hideDeleteBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "deleteImg",
                                            onClick: ()=>deleteHandler(image.url, image.key_id)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-x-circle"
                                            })
                                        })
                                    ]
                                }, image.url)
                            }, index);
                        }
                    })),
                    !hideUploadBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${coloumnSize}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "AddImageLabel text-center d-flex align-items-center justify-content-center flex-column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fi-cloud-upload"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "mb-0",
                                    children: "Add More Images"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "file",
                                    name: "images",
                                    onChange: onSelectFile,
                                    multiple: true,
                                    accept: "image/png , image/jpeg, image/webp, image/jpg, image/svg"
                                })
                            ]
                        })
                    })
                ]
            }),
            ((ref = images.filter((e)=>{
                return !(e === null || e === void 0 ? void 0 : e.is_deleted);
            })) === null || ref === void 0 ? void 0 : ref.length) > 0 && ((images === null || images === void 0 ? void 0 : images.filter((e)=>{
                return !(e === null || e === void 0 ? void 0 : e.is_deleted);
            }).length) > 10 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "errorImgUpload",
                children: [
                    "You can't upload more than 10 images!",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "please delete",
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                children: [
                                    " ",
                                    ((ref1 = images.filter((e)=>{
                                        return !(e === null || e === void 0 ? void 0 : e.is_deleted);
                                    })) === null || ref1 === void 0 ? void 0 : ref1.length) - 10,
                                    " "
                                ]
                            }),
                            " of them",
                            " "
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "upload-btn d-none",
                onClick: ()=>{
                    console.log(images);
                },
                children: [
                    "UPLOAD ",
                    images === null || images === void 0 ? void 0 : images.filter((e)=>{
                        return !(e === null || e === void 0 ? void 0 : e.is_deleted);
                    }).length,
                    " IMAGE",
                    (images === null || images === void 0 ? void 0 : images.filter((e)=>{
                        return !(e === null || e === void 0 ? void 0 : e.is_deleted);
                    }).length) === 1 ? "" : "S"
                ]
            }))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiImgUpload);


/***/ })

};
;