"use strict";
(() => {
var exports = {};
exports.id = 1198;
exports.ids = [1198];
exports.modules = {

/***/ 936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1636);
/* harmony import */ var _components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6439);
/* harmony import */ var _components_partials_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6625);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7047);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2635);
/* harmony import */ var react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8743);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helper_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(261);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(8176);
/* harmony import */ var _front_methods_UserDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1795);
/* harmony import */ var _lib_dbConn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4937);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_ToastDismissible__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3198);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5698);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_FilePondCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5641);
/* harmony import */ var react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3981);
/* harmony import */ var react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_MessageModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4301);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5941);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _components_listings_VerifyOtpBusiness__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(129);
/* harmony import */ var _components_AutoCompleteAddress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(7666);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_FilePondCard__WEBPACK_IMPORTED_MODULE_20__, react_hook_form__WEBPACK_IMPORTED_MODULE_22__, swr__WEBPACK_IMPORTED_MODULE_25__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__, _components_FilePondCard__WEBPACK_IMPORTED_MODULE_20__, react_hook_form__WEBPACK_IMPORTED_MODULE_22__, swr__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
































//import axios from 'axios';
const AccountInfoPage = ({ userDetail , user_id , csrfToken  })=>{
    var ref1;
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_16__.useSession)() //use login session
    ;
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: showButton , 1: setShowButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { register , handleSubmit , control , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_22__.useForm)();
    const { mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_25__.useSWRConfig)();
    //
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    const { 0: areas , 1: setAreas  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: pinstates , 1: setPinstates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: pincities , 1: setpincities  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: formFields , 1: setFormFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: userDetail.name ? userDetail.name : "",
        gender: userDetail.sex ? userDetail.sex : "1",
        birthdate: (userDetail === null || userDetail === void 0 ? void 0 : userDetail.dob) && (userDetail === null || userDetail === void 0 ? void 0 : userDetail.dob) != "0000-00-00" ? userDetail.dob : null,
        anniversary: (userDetail === null || userDetail === void 0 ? void 0 : userDetail.date_of_anniversary) && (userDetail === null || userDetail === void 0 ? void 0 : userDetail.date_of_anniversary) != "0000-00-00" ? userDetail.date_of_anniversary : null,
        email: userDetail.email ? userDetail.email : "",
        phone: userDetail.mobile ? userDetail.mobile : "",
        address: userDetail.address ? userDetail.address : "",
        pincode: userDetail.pincode ? userDetail.pincode : "",
        areaName: userDetail.areaName ? userDetail.areaName : "",
        area: userDetail.area_id ? userDetail.area_id : "",
        cityName: userDetail.cityName ? userDetail.cityName : "",
        city: userDetail.city_id ? userDetail.city_id : "",
        stateName: userDetail.stateName ? userDetail.stateName : "",
        state: userDetail.state_id ? userDetail.state_id : "",
        occupation: userDetail.occupation ? userDetail.occupation : "",
        occupationName: userDetail.occupation_name ? userDetail.occupation_name : "",
        marital: userDetail.marital_status ? userDetail.marital_status : "",
        password: ""
    });
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: messageType , 1: setMessageType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: showToast , 1: setShowToast  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: editProfileForm , 1: setEditProfileForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //For onchange upload image and image preview variable
    const { 0: selectedFile , 1: setSelectedFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: preview , 1: setPreview  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((formFields === null || formFields === void 0 ? void 0 : formFields.uploadedImage) || "");
    //success or error message modal popup variable
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: popupType , 1: setPopupType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("success");
    const { 0: popupTitle , 1: setPopupTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Success");
    const { 0: otpCheck , 1: setOtpCheck  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "show": false,
        "number": "",
        "id": ""
    });
    const { 0: dataRefresh , 1: setDataRefresh  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //onchange form filed data set in variable
    const formFieldChange = async (e)=>{
        var pinCodeCityState = "";
        e.preventDefault();
        formFields = {
            ...formFields,
            [e.target.name]: e.target.value
        };
        setFormFields(formFields);
        // Get city and state by pincode
        if (e.target.name == "pincode") {
            var pinCodeVal = e.target.value.trim();
            if (pinCodeVal.length == 6) {
                commonAddressChanges("pincode", pinCodeVal);
            }
        } else if (e.target.name == "city") {
            commonAddressChanges("city", "", "", e.target.value);
        } else if (e.target.name == "state") {
            commonAddressChanges("state", "", e.target.value.trim());
        } else if (e.target.name == "address") {
            console.log("address- --- ", e.target.name);
        }
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_13__/* .userProfileFormValidate */ .yf)(formFields);
        setFormError(formResponse);
    };
    //onchange gender
    const handleChangeGender = async (e)=>{
        formFields = {
            ...formFields,
            [e.target.name]: e.target.value
        };
        setFormFields(formFields);
    };
    //End
    const dateFieldChange = async (e)=>{
        formFields = {
            ...formFields,
            [e.name]: e.value
        };
        setFormFields(formFields);
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_13__/* .userProfileFormValidate */ .yf)(formFields);
        setFormError(formResponse);
    };
    //const userProfileFormSubmit = async (event) => {
    const onSubmit = async ()=>{
        await setShowToast(false);
        console.log("heyyyy");
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_13__/* .userProfileFormValidate */ .yf)(formFields);
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
        // event.preventDefault()
        //event.stopPropagation()
        } else {
            const data = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formFields.email,
                    name: formFields.name,
                    phone: formFields.phone,
                    address: formFields.address,
                    gender: formFields.gender,
                    birthdate: formFields.birthdate,
                    anniversary: formFields.anniversary,
                    pincode: formFields.pincode,
                    city_id: formFields.city,
                    state_id: formFields.state,
                    // area_id: formFields.area,
                    occupation: formFields.occupation,
                    // marital: formFields.marital,
                    password: formFields.password,
                    user_profile: formFields.user_profile,
                    id: user_id
                })
            };
            const resSubscriber = await fetch(`${process.env.BASE_URL}/api/protect/update-user-profile`, data);
            const response = await resSubscriber.json();
            if (response.status == 201) {
                setPopUpMsg(response.msg);
                setPopupType("error");
                setPopupTitle("Error");
            } else {
                setPopUpMsg(response.msg);
                setPopupType("success");
                setPopupTitle("Success");
                //update the session when change the data
                await resetTheSessionData();
                //redirect to the packages page
                setTimeout(function() {
                    next_router__WEBPACK_IMPORTED_MODULE_26___default().router.push("/user/account-info");
                }, 1000);
            }
        }
    };
    const SetEditProfile = ()=>{
        setEditProfileForm(true);
    };
    // Change password modal
    const { 0: changePasswordShow , 1: setChangePasswordShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChangePasswordClose = ()=>setChangePasswordShow(false)
    ;
    const handleChangePasswordShow = ()=>setChangePasswordShow(true)
    ;
    //set the first time gender default value
    //function for upload image at s3 server
    const onSelectFile = async (e)=>{
        const maxWidth = 200;
        const maxHeight = 200;
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        //get file size in KB
        const filesize = e.target.files[0].size * 0.001;
        if (filesize > 100) {
            setPopUpMsg("Image size can not be greater than 100 KB.");
            setPopupType("error");
            setPopupTitle("Error");
        } else {
            //get the image height and width   
            var img = new Image();
            img.src = URL.createObjectURL(e.target.files[0]);
            img.onload = async function() {
                //console.log('file size-->>>>', (e.target.files[0].size) * 0.001)
                if (img.naturalWidth == maxWidth && img.naturalHeight == maxHeight) {
                    //console.log(`${img.naturalWidth} x ${img.naturalHeight}`)
                    // The image is valid, you can submit the form or do whatever you want
                    // I've kept this example simple by using the first image instead of multiple
                    setSelectedFile(e.target.files[0]);
                    //set file preview
                    setPreview(URL.createObjectURL(e.target.files[0]));
                    formFields = {
                        ...formFields,
                        ["uploadedImage"]: URL.createObjectURL(e.target.files[0])
                    };
                    setFormFields(formFields);
                    ///
                    userDetail.image = URL.createObjectURL(e.target.files[0]);
                    //Upload image on S3 server   
                    await uploadFileOnS3(e.target.files[0]);
                } else {
                    // clear the input value
                    setPopUpMsg(`The image should be ${maxWidth} x ${maxHeight} pixels`);
                    setPopupType("error");
                    setPopupTitle("Error");
                }
            };
        }
    };
    //upload file to s3 server
    const uploadFileOnS3 = async (sourceFile)=>{
        var fileData = sourceFile;
        const url = process.env.BASE_URL + "/api/upload-file-on-s3";
        const formData = new FormData();
        formData.append("image", sourceFile);
        formData.append("fileName", sourceFile.name);
        const getAreas = await fetch(url, {
            method: "POST",
            body: formData
        }).then((response)=>response.json()
        ).then(async (result)=>{
            if (result.status == 201) {
                setPopUpMsg(result.msg);
                setPopupType("error");
                setPopupTitle("Error");
            } else {
                //save user image on database
                const data = {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user_profile: result.filename,
                        id: user_id
                    })
                };
                const resSubscriber = await fetch(`${process.env.BASE_URL}/api/protect/update-user-image`, data);
                const response = await resSubscriber.json();
                //update the session when change the data
                await resetTheSessionData();
            // setPopUpMsg(result.msg);          
            // setPopupType('success')
            // setPopupTitle('Success')
            }
        }).catch((error)=>{
        //console.error('Error:', error);
        });
    };
    //onclick trigger to open file browse modal
    const handleClick = ()=>{
        // 👇️ open file input box on click of other element   
        inputRef.current.click();
    };
    const handleFileUploads = (e)=>{
        setShowButton(true);
        if (e.length > 0) {
            setProfile({
                ...profile,
                ["logo"]: e
            });
            //set value in register
            setValue("user_profile", e[0].file.name, {
                shouldDirty: true
            });
            //set value in forms value
            var updateFormValues = {
                ...formFields,
                ["user_profile"]: e[0].file.name,
                ["user_profile_e"]: e
            };
            setFormFields((previous)=>({
                    ...previous,
                    ["user_profile"]: e[0].file.name,
                    ["user_profile_e"]: e
                })
            );
        } else {
            setProfile({
                ...profile,
                ["logo"]: null
            });
            setValue("user_profile", null, {
                shouldDirty: true
            });
            //set value in forms value
            var updateFormValues = {
                ...formFields,
                ["user_profile"]: null,
                ["user_profile_e"]: null
            };
            setFormFields((previous)=>({
                    ...previous,
                    ["user_profile"]: null,
                    ["user_profile_e"]: null
                })
            );
        }
    };
    const resetTheSessionData = async ()=>{
        //update the session when change name,email,mobile and image
        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_16__.signIn)("update-profile", {
            "user_id": user_id,
            redirect: false,
            "signin": false,
            "reLoadSess": true
        });
        //reload the session
        fetch(process.env.BASE_URL + "/api/auth/session");
    };
    const handleVerifyEmailData = async ()=>{
        //console.log('Yesss--------dataRefresh')
        setOtpCheck((pre)=>{
            return {
                ...pre,
                ["show"]: true,
                ["number"]: (formFields === null || formFields === void 0 ? void 0 : formFields.email).trim(),
                ["id"]: user_id
            };
        });
    };
    const dataRefrsh = (val)=>{
        console.log("val", val);
        if (val) {
            resetTheSessionData();
        }
    };
    //on selecte address get the state and city listings
    const onPlaceSelected = async (lat, lng, address, pinCode)=>{
        formFields = {
            ...formFields,
            ["address"]: address,
            ["pincode"]: pinCode,
            ["lat"]: lat,
            ["lng"]: lng
        };
        commonAddressChanges("pincode", pinCode);
        setFormFields(formFields);
        //check validations
        const formResponse = (0,_helper_validation__WEBPACK_IMPORTED_MODULE_13__/* .userProfileFormValidate */ .yf)(formFields);
        setFormError(formResponse);
    };
    const commonAddressChanges = async (type, pin = "", state = "", city = "")=>{
        if (type == "pincode") {
            let pinCodeCityState = await pincodeWiseState(pin);
            //console.log(pinCodeCityState)
            //get state details
            let stateData = pinstates.filter((val)=>val.name.toLowerCase() == pinCodeCityState.state.toLowerCase()
            );
            stateData = (stateData === null || stateData === void 0 ? void 0 : stateData.length) > 0 ? stateData[0] : {};
            let cityData = [];
            if (stateData === null || stateData === void 0 ? void 0 : stateData.id) {
                var ref2;
                //get city details
                cityData = await getCityStateListing(stateData === null || stateData === void 0 ? void 0 : stateData.id);
                let cityDetails = (cityData === null || cityData === void 0 ? void 0 : cityData.length) > 0 ? cityData.filter((val)=>val.name.toLowerCase() == pinCodeCityState.city.toLowerCase()
                ) : [];
                if (cityDetails && ((ref2 = cityDetails[0]) === null || ref2 === void 0 ? void 0 : ref2.id)) {
                    //area listing 
                    let areaData = await area_listing(cityDetails[0].id);
                    let areaRecord = (areaData === null || areaData === void 0 ? void 0 : areaData.length) > 0 ? areaData.filter((val)=>pinCodeCityState.area.toLowerCase().includes(val.name.toLowerCase())
                    ) : [];
                    setFormFields((pre)=>{
                        var ref;
                        return {
                            ...pre,
                            ["state"]: (stateData === null || stateData === void 0 ? void 0 : stateData.id) || "",
                            ["area"]: ((ref = areaRecord[0]) === null || ref === void 0 ? void 0 : ref.id) || "",
                            ["city"]: cityDetails[0].id
                        };
                    });
                } else {
                    //city list not found 
                    setFormFields((pre)=>{
                        return {
                            ...pre,
                            ["state"]: (stateData === null || stateData === void 0 ? void 0 : stateData.id) || "",
                            ["area"]: "",
                            ["city"]: ""
                        };
                    });
                }
            } else {
                //state list no found 
                setFormFields((pre)=>({
                        ...pre,
                        ["state"]: "",
                        ["area"]: "",
                        ["city"]: ""
                    })
                );
            }
        }
        if (type == "state") {
            let stateData = pinstates.filter((val)=>val.id == state
            );
            stateData = (stateData === null || stateData === void 0 ? void 0 : stateData.length) > 0 ? stateData[0] : {};
            let cityData = await getCityStateListing(state);
            setFormFields((pre)=>{
                return {
                    ...pre,
                    ["city"]: "",
                    ["state"]: (stateData === null || stateData === void 0 ? void 0 : stateData.id) || "",
                    ["area"]: "",
                    ["pincode"]: ""
                };
            });
        }
        if (type == "city") {
            let cityRe = (pincities === null || pincities === void 0 ? void 0 : pincities.length) > 0 ? pincities.filter((val)=>val.id == city
            ) : [];
            //get area list 
            let areaData = await area_listing(city);
            setFormFields((pre)=>{
                var ref;
                return {
                    ...pre,
                    ["area"]: "",
                    ["city"]: ((ref = cityRe[0]) === null || ref === void 0 ? void 0 : ref.id) || ""
                };
            });
        }
    };
    const allStates = async ()=>{
        try {
            var res = await await fetch(process.env.BASE_URL + "/api/protect/state-list", {
                method: "POST",
                //body:{'city':city_name},
                body: JSON.stringify({
                    state: ""
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            var resJson = await res.json();
            if (resJson.status == 200) {
                setPinstates(resJson.data);
            }
        } catch (err) {
            console.log("_________err__________", err);
        //return ""
        }
    };
    const pincodeWiseState = async (pin)=>{
        try {
            var pinSize = pin.length;
            if (pinSize == 6) {
                var APIpath = `https://api.postalpincode.in/pincode/${pin}`;
                var res = await fetch(APIpath);
                var resJson = await res.json();
                var pinState, pinCity;
                if (resJson[0].Status == "Success") {
                    // get the city id and state id 
                    pinState = resJson[0].PostOffice[0].State;
                    pinCity = resJson[0].PostOffice[0].District;
                    let area = resJson[0].PostOffice[0].Name;
                    console.log("Check   ", resJson[0]);
                    //Get city state listing by state name
                    await getCityStateListing(pinState);
                    return {
                        state: pinState,
                        city: pinCity,
                        area: area
                    };
                }
                return {
                    state: "",
                    city: "",
                    area: ""
                };
            }
            return {
                state: "",
                city: "",
                area: ""
            };
        } catch (err) {
            return {
                state: "",
                city: "",
                area: ""
            };
        }
    };
    //get state and city listing  by state name
    const getCityStateListing = async (stateName)=>{
        try {
            const getCityStateRecords = await fetch(process.env.BASE_URL + "/api/protect/state-wise-cities", {
                method: "POST",
                //body:{'city':city_name},
                body: JSON.stringify({
                    state: stateName
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const cityState = await getCityStateRecords.json();
            if ((cityState === null || cityState === void 0 ? void 0 : cityState.status) == "200") {
                setpincities(cityState === null || cityState === void 0 ? void 0 : cityState.data); //city dropdown
                return cityState === null || cityState === void 0 ? void 0 : cityState.data;
            } else {
                setpincities([]); //city dropdown
                return [];
            }
        } catch (err) {
            // console.log("err",err)
            return [];
        }
    };
    //vs get area listing 
    const area_listing = async (city_id)=>{
        try {
            const getAreas = await fetch(process.env.BASE_URL + "/api/protect/area-listing-by-city", {
                method: "POST",
                body: JSON.stringify({
                    city: city_id
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const areaslisting = await getAreas.json();
            if ((areaslisting === null || areaslisting === void 0 ? void 0 : areaslisting.status) == "200") {
                var ref, ref5;
                setAreas(areaslisting === null || areaslisting === void 0 ? void 0 : (ref = areaslisting.data) === null || ref === void 0 ? void 0 : ref.records);
                return areaslisting === null || areaslisting === void 0 ? void 0 : (ref5 = areaslisting.data) === null || ref5 === void 0 ? void 0 : ref5.records;
            } else {
                return [];
            }
        } catch (err) {
            return [];
        }
    };
    //console.log('u-session---', session)
    // Add class to body to enable gray background
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const body = document.querySelector("body");
        //document.body.classList.add('bg-secondary')
        if (userDetail.pincode) {
        // pincodeWiseState(userDetail.pincode);
        }
        if (formFields.state) {
            getCityStateListing(formFields.state);
        }
        let allState = allStates();
    //return () => body.classList.remove('bg-secondary')
    }, []);
    // create a preview as a side effect, whenever selected file is changed
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
        // free memory when ever this component is unmounted
        return ()=>URL.revokeObjectURL(objectUrl)
        ;
    }, [
        selectedFile
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        pageTitle: "Account - Personal Info",
        activeNav: "Account",
        updateUser: updateUserDetails,
        children: [
            otpCheck.show && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_listings_VerifyOtpBusiness__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                centered: true,
                size: "",
                pillButtons: true,
                phoneNumber: otpCheck.number,
                show: otpCheck.show,
                isPrimary: 0,
                titleMsg: "Verify OTP",
                removeClose: true,
                onHide: ()=>setOtpCheck((pre)=>{
                        return {
                            ...pre,
                            ["show"]: false,
                            ["number"]: "",
                            ["id"]: ""
                        };
                    })
                ,
                primaryID: otpCheck.id,
                businessID: otpCheck.id,
                setDataRefresh: dataRefrsh,
                sendType: "mail",
                verifyEmailType: "userEmail"
            }),
            popUpMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MessageModal__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                message: popUpMsg,
                title: popupTitle,
                status: true,
                setMessage: setPopUpMsg,
                type: popupType
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: changePasswordShow,
                onHide: handleChangePasswordClose,
                onSwap: handleChangePasswordShow,
                phone: userDetail.mobile ? userDetail.mobile : formFields.phone,
                user_id: user_id,
                className: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().ProfileMsg),
                ProfileMsgCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().ProfileMsg),
                ProfileMsgIconCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().ProfileMsgIcon),
                NoBtnCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().NoBtn),
                YesBtnCls: (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().YesBtn),
                type: "changePassword"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                userData: empDetails,
                accountPageTitle: "Personal Info",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8___default()), {
                        className: "shadow-none border-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8___default().Body), {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `d-sm-flex d-flex justify-content-between align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().ProfileHeading)}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                editProfileForm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#!",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().Backpage)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-arrow-long-left"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "h3 mb-0 ",
                                                    children: "My Profile"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn btn-secondary",
                                                    variant: "secondary",
                                                    onClick: handleChangePasswordShow,
                                                    children: "Change Password"
                                                }),
                                                editProfileForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#!",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn btn-secondary",
                                                        variant: "secondary",
                                                        children: "View Profile"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn btn-secondary",
                                                    variant: "secondary",
                                                    onClick: SetEditProfile,
                                                    children: "Edit Profile"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                editProfileForm == false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().PersonalInfo)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "mb-3",
                                                children: "Personal Information"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `position-relative flex-shrink-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().ProfileImg)}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                            src: preview || userDetail.image,
                                                            width: 115,
                                                            height: 115,
                                                            alt: formFields.name,
                                                            className: "rounded-3 border border-white"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().PersonalDetails)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                children: formFields.name
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: "mb-0",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-mail"
                                                                    }),
                                                                    formFields.email,
                                                                    "\xa0\xa0\xa0",
                                                                    (session === null || session === void 0 ? void 0 : (ref1 = session.user) === null || ref1 === void 0 ? void 0 : ref1.is_verfied_email) ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        onClick: handleVerifyEmailData,
                                                                        children: "Verify Email Now"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    formFields.phone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        md: 6,
                                                        sm: 6,
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().MyaccountView)}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().IconBox)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-phone"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().RightSideValue)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                                            children: [
                                                                                "+91",
                                                                                formFields.phone
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Mobile Number"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    formFields.birthdate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        md: 6,
                                                        sm: 6,
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().MyaccountView)}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().IconBox)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-date-new"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().RightSideValue)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_30__/* .getDateTime */ .Fc)(6, formFields.birthdate)
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Date of Birth"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    formFields.gender && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        md: 6,
                                                        sm: 6,
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().MyaccountView)}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().IconBox)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-gander-sr"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().RightSideValue)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: formFields.gender ? formFields.gender == 1 ? "Male" : formFields.gender == 2 ? "Female" : formFields.gender == 3 ? "Other" : "" : ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Gender"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    formFields.anniversary && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        md: 6,
                                                        sm: 6,
                                                        className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().MyaccountView)}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().IconBox)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-date-new"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().RightSideValue)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_30__/* .getDateTime */ .Fc)(6, formFields.anniversary)
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Date of Anniversary"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().contactInfoBox)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "mb-0",
                                                        children: "Contact Information"
                                                    }),
                                                    formFields.address && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                                md: 12,
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().MyaccountView)}`,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "d-flex align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().IconBox)}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fi-map-pin"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().RightSideValue)}`,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                    children: formFields.address
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    children: "Address"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            formFields.pincode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                                md: 6,
                                                                sm: 6,
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().MyaccountView)}`,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "d-flex align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().IconBox)}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fi-pincode-sr"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().RightSideValue)}`,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                    children: formFields.pincode
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    children: "Pincode"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            formFields.cityName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                                md: 6,
                                                                sm: 6,
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().MyaccountView)}`,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "d-flex align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().IconBox)}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fi-city-sr"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().RightSideValue)}`,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                    children: formFields.cityName
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    children: "City"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }) : // Edit form
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().EditProfile)}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        onSubmit: handleSubmit(onSubmit),
                                        id: "user-profile-update",
                                        autoComplete: "off",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "hidden",
                                                name: "csrfToken",
                                                defaultValue: csrfToken
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                children: "Personal Information"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                        controlid: "pr-company-logo-image1",
                                                        className: "position-relative flex-shrink-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `position-relative flex-shrink-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().ProfileImg)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                                src: preview || userDetail.image,
                                                                width: 115,
                                                                height: 115,
                                                                alt: "Annette Black",
                                                                className: "rounded-3 border border-white"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                        controlid: "pr-company-logo-image2",
                                                        className: "mt-20",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                style: {
                                                                    display: "none"
                                                                },
                                                                ref: inputRef,
                                                                type: "file",
                                                                onChange: onSelectFile,
                                                                accept: ".jpg, .jpeg, .png, .webp"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                className: `text-decoration-underline ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().ChangeProfileImg)}`,
                                                                onClick: handleClick,
                                                                children: "CHANGE PROFILE IMAGE"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().profileImgPixelsText)}`,
                                                                children: "(Size 200*200 pixels)"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        xs: 12,
                                                        sm: 6,
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                        controlid: "pr-name",
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                children: [
                                                                    "Name",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-danger",
                                                                        children: "\xa0*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), {
                                                                className: ` ${formError.name !== undefined ? "is-invalid" : ""}`,
                                                                value: formFields.name,
                                                                onChange: formFieldChange,
                                                                placeholder: "Enter your name",
                                                                name: "name"
                                                            }),
                                                            formError.name !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                type: "invalid",
                                                                tooltip: true,
                                                                children: [
                                                                    " ",
                                                                    formError.name
                                                                ]
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        xs: 12,
                                                        sm: 6,
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                        controlid: "pr-email",
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                children: [
                                                                    "Email",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-danger",
                                                                        children: "\xa0*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                className: ` ${formError.email !== undefined ? "is-invalid" : ""}`,
                                                                value: formFields.email,
                                                                onChange: formFieldChange,
                                                                placeholder: "Enter your email",
                                                                name: "email"
                                                            }),
                                                            formError.email !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                type: "invalid",
                                                                tooltip: true,
                                                                children: [
                                                                    " ",
                                                                    formError.email
                                                                ]
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        xs: 12,
                                                        sm: 6,
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                        controlid: "pr-phone",
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                children: [
                                                                    "Phone",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-danger",
                                                                        children: "\xa0*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                className: ` ${formError.phone !== undefined ? "is-invalid" : ""}`,
                                                                value: formFields.phone,
                                                                onChange: formFieldChange,
                                                                placeholder: "Enter your phone",
                                                                name: "phone"
                                                            }),
                                                            formError.phone !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                type: "invalid",
                                                                tooltip: true,
                                                                children: [
                                                                    " ",
                                                                    formError.phone
                                                                ]
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        xs: 12,
                                                        sm: 6,
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                htmlFor: "su-gender",
                                                                children: [
                                                                    "Gender",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-danger",
                                                                        children: "\xa0*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group), {
                                                                className: "",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Check), {
                                                                        inline: true,
                                                                        type: "radio",
                                                                        id: "radio-4",
                                                                        name: "gender",
                                                                        label: "Male",
                                                                        value: "1",
                                                                        onChange: handleChangeGender,
                                                                        //defaultChecked={true}
                                                                        defaultChecked: formFields.gender == "1" || formFields.gender != undefined || formFields.gender == ""
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Check), {
                                                                        inline: true,
                                                                        type: "radio",
                                                                        id: "radio-5",
                                                                        name: "gender",
                                                                        label: "Female",
                                                                        value: "2",
                                                                        onChange: handleChangeGender,
                                                                        defaultChecked: formFields.gender == "2"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Check), {
                                                                        inline: true,
                                                                        type: "radio",
                                                                        id: "radio-6",
                                                                        name: "gender",
                                                                        label: "Other",
                                                                        value: "3",
                                                                        onChange: handleChangeGender,
                                                                        defaultChecked: formFields.gender == "3"
                                                                    }),
                                                                    formError.gender !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: formError.gender
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        xs: 12,
                                                        sm: 6,
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                        controlid: "pr-occupation",
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                children: [
                                                                    "Occupation",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-danger",
                                                                        children: "\xa0*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                className: ` ${formError.occupation !== undefined ? "is-invalid" : ""}`,
                                                                name: "occupation",
                                                                value: formFields.occupation,
                                                                onChange: formFieldChange,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "",
                                                                        children: "Choose occupation"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "1",
                                                                        children: "Business"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "2",
                                                                        children: "Service"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "3",
                                                                        children: "Profession"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "4",
                                                                        children: "Other"
                                                                    })
                                                                ]
                                                            }),
                                                            formError.occupation !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                type: "invalid",
                                                                tooltip: true,
                                                                children: [
                                                                    " ",
                                                                    formError.occupation
                                                                ]
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        xs: 12,
                                                        sm: 6,
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                        controlid: "pr-dob",
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                children: [
                                                                    "Date of Birth",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-danger",
                                                                        children: "\xa0*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "position-relative ",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        as: (react_datepicker__WEBPACK_IMPORTED_MODULE_11___default()),
                                                                        selected: formFields.birthdate ? new Date(Date.parse(formFields.birthdate)) : "",
                                                                        onChange: (date)=>dateFieldChange({
                                                                                name: "birthdate",
                                                                                value: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_30__/* .getDateTime */ .Fc)("1", date)
                                                                            })
                                                                        ,
                                                                        dateFormat: "dd-MM-yyyy",
                                                                        name: "birthdate",
                                                                        placeholderText: "Choose date",
                                                                        className: `rounded pe-5 ${formError.birthdate !== undefined ? "is-invalid" : ""}`,
                                                                        showMonthDropdown: true,
                                                                        useShortMonthInDropdown: true,
                                                                        showYearDropdown: true,
                                                                        dropdownMode: "select",
                                                                        maxDate: new Date()
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-calendar position-absolute top-50 end-0 translate-middle-y me-3"
                                                                    })
                                                                ]
                                                            }),
                                                            formError.birthdate !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                type: "invalid",
                                                                tooltip: true,
                                                                children: [
                                                                    " ",
                                                                    formError.birthdate
                                                                ]
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        xs: 12,
                                                        sm: 6,
                                                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                        controlid: "pr-anniversary",
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                children: "Date of Anniversary"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        as: (react_datepicker__WEBPACK_IMPORTED_MODULE_11___default()),
                                                                        selected: formFields.anniversary ? new Date(Date.parse(formFields.anniversary)) : "",
                                                                        onChange: (date)=>dateFieldChange({
                                                                                name: "anniversary",
                                                                                value: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_30__/* .getDateTime */ .Fc)("1", date)
                                                                            })
                                                                        ,
                                                                        dateFormat: "dd-MM-yyyy",
                                                                        name: "anniversary",
                                                                        placeholderText: "Choose date",
                                                                        className: `rounded pe-5`,
                                                                        showMonthDropdown: true,
                                                                        useShortMonthInDropdown: true,
                                                                        showYearDropdown: true,
                                                                        dropdownMode: "select",
                                                                        maxDate: new Date()
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-calendar position-absolute top-50 end-0 translate-middle-y me-3"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `mt-4 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_29___default().contactInfoBox)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "mb-0",
                                                        children: "Contact Information"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                                xs: 12,
                                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                                controlid: "pr-address",
                                                                className: "mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                        children: [
                                                                            "Address",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AutoCompleteAddress__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                                                        ...register("address"),
                                                                        onPlaceSelected: onPlaceSelected,
                                                                        className: `mt-2 ${(formError === null || formError === void 0 ? void 0 : formError.address) !== undefined ? "is-invalid" : ""}`,
                                                                        name: "address",
                                                                        value: (formFields === null || formFields === void 0 ? void 0 : formFields.address) || "",
                                                                        onChange: formFieldChange,
                                                                        formError: (formError === null || formError === void 0 ? void 0 : formError.address) !== undefined ? "is-invalid" : ""
                                                                    }),
                                                                    formError.address !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: [
                                                                            " ",
                                                                            formError.address
                                                                        ]
                                                                    }) : ""
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                                xs: 12,
                                                                sm: 6,
                                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                                controlid: "pr-pincode",
                                                                className: "mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                        children: [
                                                                            "Pincode",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        className: ` ${formError.pincode !== undefined ? "is-invalid" : ""}`,
                                                                        value: formFields.pincode,
                                                                        onChange: formFieldChange,
                                                                        placeholder: "Enter your pincode",
                                                                        name: "pincode"
                                                                    }),
                                                                    formError.pincode !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: [
                                                                            " ",
                                                                            formError.pincode
                                                                        ]
                                                                    }) : ""
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                                xs: 12,
                                                                sm: 6,
                                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                                controlid: "pr-state",
                                                                className: "mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                        children: [
                                                                            "State",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                        className: ` ${formError.state !== undefined ? "is-invalid" : ""}`,
                                                                        name: "state",
                                                                        id: "state",
                                                                        value: formFields.state,
                                                                        onChange: formFieldChange,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "",
                                                                                children: "Choose state"
                                                                            }),
                                                                            (pinstates === null || pinstates === void 0 ? void 0 : pinstates.length) > 0 && pinstates.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: val.id,
                                                                                    children: val.name
                                                                                }, val.id)
                                                                            )
                                                                        ]
                                                                    }),
                                                                    formError.state !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: [
                                                                            " ",
                                                                            formError.state
                                                                        ]
                                                                    }) : ""
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                                xs: 12,
                                                                sm: 6,
                                                                as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group),
                                                                controlid: "pr-city",
                                                                className: "mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                                                                        children: [
                                                                            "City",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "\xa0*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_FormSelect__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                        className: `${formError.city !== undefined ? "is-invalid" : ""}`,
                                                                        name: "city",
                                                                        id: "city",
                                                                        value: formFields.city,
                                                                        onChange: formFieldChange,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "",
                                                                                children: "Choose city"
                                                                            }),
                                                                            (pincities === null || pincities === void 0 ? void 0 : pincities.length) > 0 && pincities.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: val.id,
                                                                                    children: val.name
                                                                                }, val.id)
                                                                            )
                                                                        ]
                                                                    }),
                                                                    formError.city !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control.Feedback), {
                                                                        type: "invalid",
                                                                        tooltip: true,
                                                                        children: [
                                                                            " ",
                                                                            formError.city
                                                                        ]
                                                                    }) : ""
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "d-flex align-items-center justify-content-end mt-sm-4 pt-sm-4 mt-3 pt-3 border-top",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    type: "submit",
                                                    variant: "primary px-3 px-sm-3",
                                                    children: "Update Profile"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
async function getServerSideProps(ctx) {
    const db = await (0,_lib_dbConn__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    // const {business_id} = ctx.query;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_16__.getSession)(ctx);
    if (session) {
        const { user  } = session;
        const details = await (0,_front_methods_UserDetails__WEBPACK_IMPORTED_MODULE_14__/* .UserDetails */ .xt)(db, user.id);
        const data = JSON.parse(details);
        if (data.status == 200) {
            return {
                props: {
                    userDetail: data.data[0],
                    user_id: user.id
                }
            };
        } else {
            return {
                props: {
                    userDetail: [],
                    user_id: user.id
                }
            };
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: `/`
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountInfoPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 6936:
/***/ ((module) => {

module.exports = require("@aws-sdk/s3-request-presigner");

/***/ }),

/***/ 7499:
/***/ ((module) => {

module.exports = require("filepond-plugin-file-rename");

/***/ }),

/***/ 855:
/***/ ((module) => {

module.exports = require("filepond-plugin-file-validate-size");

/***/ }),

/***/ 2182:
/***/ ((module) => {

module.exports = require("filepond-plugin-file-validate-type");

/***/ }),

/***/ 3691:
/***/ ((module) => {

module.exports = require("filepond-plugin-image-crop");

/***/ }),

/***/ 5198:
/***/ ((module) => {

module.exports = require("filepond-plugin-image-edit");

/***/ }),

/***/ 8984:
/***/ ((module) => {

module.exports = require("filepond-plugin-image-preview");

/***/ }),

/***/ 2679:
/***/ ((module) => {

module.exports = require("filepond-plugin-image-resize");

/***/ }),

/***/ 7891:
/***/ ((module) => {

module.exports = require("filepond-plugin-image-transform");

/***/ }),

/***/ 1787:
/***/ ((module) => {

module.exports = require("filepond-plugin-image-validate-size");

/***/ }),

/***/ 1961:
/***/ ((module) => {

module.exports = require("filepond-plugin-pdf-preview");

/***/ }),

/***/ 3182:
/***/ ((module) => {

module.exports = require("localforage");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 8797:
/***/ ((module) => {

module.exports = require("next-share");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2899:
/***/ ((module) => {

module.exports = require("react-bootstrap/Alert");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 6810:
/***/ ((module) => {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ 9044:
/***/ ((module) => {

module.exports = require("react-bootstrap/CloseButton");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 3981:
/***/ ((module) => {

module.exports = require("react-bootstrap/Figure");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 7047:
/***/ ((module) => {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ 2635:
/***/ ((module) => {

module.exports = require("react-bootstrap/FormSelect");

/***/ }),

/***/ 2563:
/***/ ((module) => {

module.exports = require("react-bootstrap/InputGroup");

/***/ }),

/***/ 4692:
/***/ ((module) => {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 6865:
/***/ ((module) => {

module.exports = require("react-bootstrap/Offcanvas");

/***/ }),

/***/ 4165:
/***/ ((module) => {

module.exports = require("react-bootstrap/OverlayTrigger");

/***/ }),

/***/ 9736:
/***/ ((module) => {

module.exports = require("react-bootstrap/Popover");

/***/ }),

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 3742:
/***/ ((module) => {

module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ 972:
/***/ ((module) => {

module.exports = require("react-bootstrap/Toast");

/***/ }),

/***/ 871:
/***/ ((module) => {

module.exports = require("react-bootstrap/ToastContainer");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 6804:
/***/ ((module) => {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ 5178:
/***/ ((module) => {

module.exports = require("react-filepond");

/***/ }),

/***/ 5623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 9777:
/***/ ((module) => {

module.exports = require("react-shimmer-effects");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2261:
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ 7441:
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 3512:
/***/ ((module) => {

module.exports = import("firebase/messaging");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,7936,7840,4301,8176,7559,3198,467,6439,2907,4823,7666,129,50], () => (__webpack_exec__(936)));
module.exports = __webpack_exports__;

})();