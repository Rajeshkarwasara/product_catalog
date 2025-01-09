"use strict";
exports.id = 7666;
exports.ids = [7666];
exports.modules = {

/***/ 7666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7047);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_2__);



//const navigatorLoad = ""
const updateNavigator = (navigator)=>{
// navigatorLoad = navigator
};
const AutoComplete = ({ onChange , value , formError , onPlaceSelected , name ="address" ,  })=>{
    const autoCompleteRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: navigatorLoad , 1: setNavigatorLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("India");
    //   const options = {
    //     fields: ["address_components", "formatted_address", "geometry", "name"],
    //     strictBounds: false,
    //     types: ["establishment"],
    //   };
    const options = {
        fields: [
            "address_components",
            "formatted_address",
            "geometry",
            "name"
        ],
        strictBounds: false,
        types: [
            "establishment",
            "geocode"
        ],
        componentRestrictions: {
            country: "IN"
        }
    };
    if (typeof navigator !== "undefined") {
        updateNavigator(navigator);
    }
    const onChageText = (e)=>{
        setNavigatorLoad(navigator);
        onChange(e);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref5;
        if (window === null || window === void 0 ? void 0 : (ref5 = window.google) === null || ref5 === void 0 ? void 0 : ref5.maps) {
            //console.log("navigator-----",navigatorLoad)
            autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, options);
            autoCompleteRef.current.addListener("place_changed", async function() {
                var ref, ref1, ref2, ref3, ref4;
                const place = await autoCompleteRef.current.getPlace();
                console.log("test place kpppp ======= ", place);
                const formattedTitle = await (place === null || place === void 0 ? void 0 : (ref = place.formatted_address) === null || ref === void 0 ? void 0 : ref.split(",").splice((formattedTitle === null || formattedTitle === void 0 ? void 0 : formattedTitle.length) - 3, 3));
                let pinCode = "";
                place.address_components.forEach((val)=>{
                    if (val.types[0] == "postal_code") {
                        //console.log("val.short_name",val.short_name)
                        pinCode = val.short_name;
                    }
                });
                inputRef.current.value = formattedTitle.toString();
                onPlaceSelected(place === null || place === void 0 ? void 0 : (ref1 = place.geometry) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.location) === null || ref2 === void 0 ? void 0 : ref2.lat(), place === null || place === void 0 ? void 0 : (ref3 = place.geometry) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.location) === null || ref4 === void 0 ? void 0 : ref4.lng(), formattedTitle.toString(), pinCode);
            });
        }
    }, [
        navigatorLoad === null || navigatorLoad === void 0 ? void 0 : navigatorLoad.geolocation
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            ref: inputRef,
            name: name,
            placeholder: "Enter your address",
            className: `form-control ${formError && "is-invalid"}`,
            value: value,
            onChange: onChageText
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoComplete);


/***/ })

};
;