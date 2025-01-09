"use strict";
exports.id = 2907;
exports.ids = [2907];
exports.modules = {

/***/ 2907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5178);
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_filepond__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2182);
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(855);
/* harmony import */ var filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8984);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3691);
/* harmony import */ var filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2679);
/* harmony import */ var filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7891);
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var filepond_plugin_file_rename__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7499);
/* harmony import */ var filepond_plugin_file_rename__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_rename__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5198);
/* harmony import */ var filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var filepond_plugin_pdf_preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1961);
/* harmony import */ var filepond_plugin_pdf_preview__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_pdf_preview__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var filepond_plugin_image_validate_size__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1787);
/* harmony import */ var filepond_plugin_image_validate_size__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_validate_size__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6555);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_12__]);
uuid__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const FilePondCard = ({ type , csrfToken , file: file1 , allowMultiple =false , maxFiles =1 , maxFileSize ="5MB" , handleFileUploads , acceptType =[
    "image/png",
    "image/jpeg",
    "image/jpg"
] , setFileUploadProgress ="" , fileUploadPath ="" , ...props })=>{
    if (type == "image" || type == "video") {
        (0,react_filepond__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)((filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_2___default()), (filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_3___default()), (filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4___default()), (filepond_plugin_image_crop__WEBPACK_IMPORTED_MODULE_5___default()), (filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_6___default()), (filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7___default()), (filepond_plugin_file_rename__WEBPACK_IMPORTED_MODULE_8___default()), (filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_9___default()), (filepond_plugin_pdf_preview__WEBPACK_IMPORTED_MODULE_10___default()), (filepond_plugin_image_validate_size__WEBPACK_IMPORTED_MODULE_11___default()));
    } else {
        (0,react_filepond__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)((filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_2___default()), (filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_3___default()), (filepond_plugin_pdf_preview__WEBPACK_IMPORTED_MODULE_10___default()));
    }
    const fetchPond = async (url, load)=>{
        console.log("URL IS =>>>>>>>>", url);
        let res = await fetch(url);
        let blob = await res.blob();
        load(blob);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_filepond__WEBPACK_IMPORTED_MODULE_1__.FilePond, {
        files: file1,
        allowImagePreview: true,
        maxFileSize: maxFileSize,
        allowMultiple: allowMultiple,
        maxFiles: maxFiles,
        labelMaxTotalFileSizeExceeded: "You can upload upto 10 images",
        labelMaxFileSize: `Maximum file size is ${maxFiles} `,
        onupdatefiles: (file)=>handleFileUploads(file)
        ,
        //onremovefile={(error,file)=>{console.log("---onremovefile--")}}
        name: "file",
        acceptedFileTypes: acceptType,
        labelFileTypeNotAllowed: "File of invalid type",
        stylePanelLayout: "compact",
        ...props,
        className: "file-uploader bg-secondary",
        fileRenameFunction: (file)=>{
            let unique_id = (0,uuid__WEBPACK_IMPORTED_MODULE_12__.v4)();
            unique_id = unique_id.slice(0, 15);
            let newName = unique_id + file.extension;
            return newName;
        },
        onprocessfileprogress: (file, progress)=>{
            if (progress == 1 && setFileUploadProgress != "") {
                setFileUploadProgress(true);
            } else {
                setFileUploadProgress(false);
            }
        //console.log('progress---->>>>',progress)
        },
        // onaddfilestart={(file) => { console.log("start"); setFileUploadProgress(false) }}
        //onaddfile={(error, file) => { console.log("onaddfile"); setFileUploadProgress(false) }}
        server: {
            // url: process.env.BASE_URL + '/api/upload-file',
            // method: "POST", 
            process: (fieldName, file, metadata, load, error, progress, abort, transfer, options)=>{
                ///console.log('file object------',file)
                // fieldName is the name of the input field
                // file is the actual file object to send
                const formData = new FormData();
                formData.append(fieldName, file, file.name);
                formData.append("s3On", true);
                formData.append("uploadPath", fileUploadPath);
                const request = new XMLHttpRequest();
                request.open("POST", process.env.BASE_URL + "/api/upload-file");
                // Should call the progress method to update the progress to 100% before calling load
                // Setting computable to false switches the loading indicator to infinite mode
                request.upload.onprogress = (e)=>{
                    progress(e.lengthComputable, e.loaded, e.total);
                };
                // Should call the load method when done and pass the returned server file id
                // this server file id is then used later on when reverting or restoring a file
                // so your server knows which file to return without exposing that info to the client
                request.onload = function() {
                    if (request.status >= 200 && request.status < 300) {
                        // the load method accepts either a string (id) or an object
                        //console.log('request-response--', request.response)
                        //let splitFileName = (request.response).split('"filename":"')[1]
                        //let filename = splitFileName.split('"}')[0]                          
                        load(request.responseText);
                    } else {
                        // Can call the error method if something is wrong, should exit after
                        error("oh no");
                    }
                };
                request.send(formData);
                // Should expose an abort method so the request can be cancelled
                return {
                    abort: ()=>{
                        // This function is entered if the user has tapped the cancel button
                        request.abort();
                        // Let FilePond know the request has been cancelled
                        abort();
                    }
                };
            },
            revert: (uniqueFileId, load, error)=>{
                //console.log('uniqueFileId--------', uniqueFileId)
                var fileData = JSON.parse(uniqueFileId);
                //console.log
                const request = new XMLHttpRequest();
                request.open("DELETE", process.env.BASE_URL + "/api/upload-file");
                request.setRequestHeader("X-CSRF-TOKEN", csrfToken);
                request.setRequestHeader("X-IMG-NAME", fileData.filename);
                request.send();
                error("oh no! Error");
                // Should call the load method when done, no parameters required
                load();
            },
            //fetch: fetchPond
            load: (source, load, error, progress, abort, headers)=>{
                console.log("POND_________source___________", source);
                var myRequest = new Request(source);
                fetch(myRequest).then(function(response) {
                    console.log("POND_________response___________", response);
                    response.blob().then(function(myBlob) {
                        load(myBlob);
                    });
                });
            }
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilePondCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;