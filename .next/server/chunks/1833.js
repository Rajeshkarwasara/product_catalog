"use strict";
exports.id = 1833;
exports.ids = [1833];
exports.modules = {

/***/ 7871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FormGroup = ({ children , light , className , ...props })=>{
    const isLight = light ? " form-group-light" : "", extraClass = className ? ` ${className}` : "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        ...props,
        className: `form-group${isLight}${extraClass}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormGroup);


/***/ }),

/***/ 7893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ head_SearchDiv)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./components/FormGroup.js
var FormGroup = __webpack_require__(7871);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(1929);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
// EXTERNAL MODULE: external "react-bootstrap/InputGroup"
var InputGroup_ = __webpack_require__(2563);
var InputGroup_default = /*#__PURE__*/__webpack_require__.n(InputGroup_);
// EXTERNAL MODULE: external "react-select/async"
var async_ = __webpack_require__(3618);
var async_default = /*#__PURE__*/__webpack_require__.n(async_);
// EXTERNAL MODULE: external "react-bootstrap/FormControl"
var FormControl_ = __webpack_require__(7047);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
;// CONCATENATED MODULE: ./components/partials/SearchingSelect.js






function SearchingSelect({ city: city1 , setSerachInput , voiceSearchText ="" , valueContainerSize , ...props1 }) {
    const { 0: focused , 1: setFocused  } = (0,external_react_.useState)(false);
    const inputRef = (0,external_react_.useRef)(null);
    //const [options, setOptions] = useState(null);
    const filterColors = async (inputValue)=>{
        let options = [];
        let cityID = (city1 === null || city1 === void 0 ? void 0 : city1.id) || "";
        //console.log("BEFORE PI -------", selectedCity, city)
        options = await getRecords(inputValue, cityID);
        //setSerachInput(inputValue)
        if (options) {
            return options;
        // console.log("datadata", options)
        } else {
            return options.filter((i)=>i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        }
    };
    const promiseOptions = (inputValue)=>{
        return new Promise((resolve)=>{
            //setSelectedOption(inputValue)
            //console.log("inputRef_____", inputRef.current)
            setTimeout(()=>{
                var ref;
                if (((ref = inputValue.trim()) === null || ref === void 0 ? void 0 : ref.length) > 1) {
                    resolve(filterColors(inputValue));
                //setSerachInput(inputValue)
                } else {
                    resolve([]);
                }
            });
        });
    };
    const Control = ({ children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-50 searchDiv",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((InputGroup_default()), {
                size: "lg",
                className: "border-start-md",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((InputGroup_default()).Text, {
                        className: "text-muted ps-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fi-search"
                        })
                    }),
                    children
                ]
            })
        })
    ;
    const Input = (props)=>{
        if (props.isHidden) {
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "100%",
                    margin: "2px",
                    visibility: "visible",
                    color: "hsl(0, 0%, 20%)",
                    "-webkit-flex": "1 1 auto",
                    "-ms-flex": "1 1 auto",
                    flex: "1 1 auto",
                    display: "inline-grid",
                    gridArea: "1/1/2/3",
                    gridTemplateColumns: "0 min-content",
                    boxSizing: "border-box"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                    "aria-label": "Search field",
                    ...props
                })
            });
        }
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                width: "100%"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                "aria-label": "Search field",
                ...props
            })
        });
    };
    const SelectContainer = ({ children , ...props })=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...props,
            children: children
        });
    };
    const ValueContainer = ({ children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...props,
            children: children
        })
    ;
    const Placeholder = (props)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...props,
            style: {
                color: "hsl(0, 0 %, 50 %)",
                gridArea: "1 / 1 / 2 / 3",
                marginLeft: "2px",
                marginRight: "2px",
                boxSizing: "border-box"
            }
        });
    };
    const getRecords = async (val, city)=>{
        if (val.length > 1) {
            let srRes = await fetch(`${process.env.BASE_URL}/api/protect/search-businesses`, {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: JSON.stringify({
                    city: city,
                    csrfToken: "",
                    string: val
                })
            });
            let srJson = await srRes.json();
            if ((srJson === null || srJson === void 0 ? void 0 : srJson.status) == "200") {
                return srJson.data;
            } else {
                return [];
            }
        } else {
            return [];
        }
    };
    const handleOptionSelected = (option)=>{
        if (option === null || option === void 0 ? void 0 : option.label) setSerachInput(option === null || option === void 0 ? void 0 : option.label);
        let cityName = city1 === null || city1 === void 0 ? void 0 : city1.label.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        cityName = cityName.replace(" ", "-");
        if (option && (option === null || option === void 0 ? void 0 : option.type) == "1") {
            //console.log(city.label)
            //console.log("OPTION 1", option)
            let areaName = option.area_name;
            let companyName = option.new_label.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            companyName = companyName.replaceAll(" ", "-");
            let url = "/" + cityName + "/" + areaName + "/" + companyName + "-contact-details/" + option.value;
            router_default().push(url, undefined, {
                shallow: false
            });
            return;
        } else if (option && (option === null || option === void 0 ? void 0 : option.type) == "2") {
            //console.log("OPTION 2", option)
            /*let subName = option.label.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });
            */ //subName = subName.replaceAll(" ", "-")
            let url = "/" + cityName + "/" + option.slug;
            router_default().push(url, undefined, {
                shallow: false
            });
            return;
        } else {
        //console.log("OPTION null", option)
        }
    };
    const onFocus = ()=>{
        return setFocused(true);
    };
    const unFocus = ()=>{
        setTimeout(()=>{
            if (focused) setFocused(true);
        }, 300);
    };
    const customStyles = {
        option: (styles, state)=>({
                ...styles,
                cursor: "pointer",
                overflow: "hidden",
                zIndex: 20000
            })
        ,
        singleValue: (base, state)=>({
                ...base,
                color: state.selectProps.menuIsOpen ? "transparent" : base.color
            })
        ,
        valueContainer: (base)=>({
                ...base,
                overflow: "hidden",
                maxWidth: valueContainerSize,
                "@media only screen and (max-width: 576px)": {
                    ...base["@media only screen and (max-width: 576px)"],
                    maxWidth: "250px"
                }
            })
        ,
        input: (base)=>({
                ...base,
                display: "block",
                "&:after": {
                    display: "none"
                }
            })
        ,
        control: (base, state)=>({
                ...base,
                cursor: "text",
                whiteSpace: "nowrap",
                border: state.isFocused ? 0 : 0,
                // This line disable the blue border
                boxShadow: state.isFocused ? 0 : 0,
                "&:hover": {
                    border: state.isFocused ? 0 : 0
                }
            })
        ,
        groupHeading: (provided)=>({
                ...provided,
                background: "#fec32b",
                padding: 0
            })
    };
    const handleInputChange = ()=>{
        const inputValue = voiceSearchText.replace(/\W/g, "");
        // this.setState({ inputValue });
        return inputValue;
    };
    const formatGroupLabel = (data)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    style: {
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#000000"
                    },
                    children: data.label
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    style: {
                        fontWeight: "bold",
                        fontStyle: "italic"
                    },
                    children: data.options.length
                })
            ]
        })
    ;
    const handleKeyDown = (event)=>{
        if (event.key === "Enter") {
            if (voiceSearchText.length >= 2) {
                //if (event.key === "Enter" || event.charCode === 13) {//vs comment this
                event.preventDefault(); // prevent the default behavior of selecting the first active option
                let cityName = city1 === null || city1 === void 0 ? void 0 : city1.label.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                });
                cityName = cityName.replace(" ", "-");
                let url = "/" + cityName + "?query=" + encodeURI(voiceSearchText) + "&cid=" + (city1 === null || city1 === void 0 ? void 0 : city1.id);
                router_default().push(url, null, {
                    shallow: false
                });
                return;
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((async_default()), {
        isSearchable: true,
        cacheOptions: true,
        label: "Search List",
        "aria-label": "Search List",
        noOptionsMessage: (e)=>{
            return e.inputValue.length > 1 ? "No Records Found" : "Minimum 2 characters";
        },
        //menuPosition="fixed"
        loadOptions: promiseOptions,
        getOptionLabel: (option)=>option.label
        ,
        getOptionValue: (option)=>option.value
        ,
        placeholder: "Search for anything...",
        ...props1,
        components: {
            DropdownIndicator: ()=>null
            ,
            IndicatorSeparator: ()=>null
        },
        onChange: handleOptionSelected,
        openMenuOnFocus: false,
        openMenuOnClick: false,
        isClearable: true,
        //defaultOptions
        //isFocused={() => console.log("Focused is")}
        //onFocus={() => setFocused(true)}
        //focused={focused}
        defaultInputValue: voiceSearchText ? voiceSearchText : undefined,
        //inputValue={voiceSearchText}
        //defaultOptions={voiceSearchText}
        //defaultValue={{ label: voiceSearchText, value: "" }}
        //value={{ label: voiceSearchText, value: "" }}
        styles: customStyles,
        onInputChange: (e, action)=>{
            if (action.action === "input-change") setSerachInput(e);
        },
        //autoFocus
        formatGroupLabel: formatGroupLabel,
        onKeyDown: handleKeyDown,
        //menuShouldBlockScroll={true}
        //menuShouldScrollIntoView={ true}
        clearInputOnBlur: false
    }, city1.label + inputRef.current);
};

;// CONCATENATED MODULE: ./components/searching/head/VoiceSearch.js

const VoiceSearch = ({ onClickListen , voiceListening =false  })=>{
    console.log("  voiceListening  ", voiceListening);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "dropdown voice-box",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "speechTop",
                onClick: onClickListen,
                children: [
                    !voiceListening && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pulse-ringTop "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `dropdown-toggle`,
                        type: "button",
                        id: "dropdownMenuButton1",
                        "data-bs-toggle": "dropdown",
                        "aria-expanded": "false",
                        "aria-label": "search",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fi-microphone-sr"
                        })
                    })
                ]
            }),
            voiceListening && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "listening-icon",
                style: {
                    position: "absolute"
                },
                "aria-labelledby": "dropdownMenuButton1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "speech",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pulse-ring"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mike-icon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fi-microphone-sr text-dark"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        children: [
                            "Listening",
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "loading-dots",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "dot-flashing"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const head_VoiceSearch = (VoiceSearch);

;// CONCATENATED MODULE: ./components/searching/head/SearchForm.js





//import MySelect from '../../MySelect';




//import { useRouter } from "next/router";
/*
let speech;
if (typeof window !== 'undefined' && window.webkitSpeechRecognition) {
    // eslint-disable-next-line
    const SpeechRecognition = webkitSpeechRecognition;
    speech = new SpeechRecognition();
    speech.continuous = true;
} else {
    speech = null;
}
*/ const SearchForm = ({ cityData , selectedCity , setCityBanner , setSelectedCity , valueContainerSize ="280px" ,  })=>{
    const { 0: serachInput , 1: setSerachInput  } = (0,external_react_.useState)("");
    const { 0: isListening , 1: setIsListening  } = (0,external_react_.useState)(false);
    const { 0: speech , 1: setSpeech  } = (0,external_react_.useState)(null);
    const { 0: formError , 1: setFormError  } = (0,external_react_.useState)({
        searchInput: ""
    });
    //const router = useRouter();
    const submitSearch = async (e)=>{
        console.log("values ---------submitSearch --------------- ", e);
        e.preventDefault();
        if (serachInput != "" && serachInput !== undefined && serachInput != null) {
            if (serachInput.length >= 2) {
                var ref;
                //Update the input form error
                var updateFormError = {
                    ...formError,
                    ["searchInput"]: ""
                };
                setFormError(updateFormError);
                //End
                let cityName = selectedCity === null || selectedCity === void 0 ? void 0 : (ref = selectedCity.label) === null || ref === void 0 ? void 0 : ref.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                });
                cityName = cityName.replace(" ", "-");
                let url = "/" + cityName + "?query=" + encodeURI(serachInput) + "&cid=" + (selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.id);
                //console.log("_____URL IS__________________",url)
                router_default().push(url, null, {
                    shallow: false
                });
                return;
            }
        // else{
        //     var error = { ['searchInput']: 'Please enter the text.' }
        //     await setFormError(error)
        // }
        } else {
            var error = {
                ["searchInput"]: "Please enter the text."
            };
            await setFormError(error);
        }
    };
    //handle the search input text field setSerachInput
    const handleOnchangeSearchInput = async (text)=>{
        setSerachInput(text);
        if (text != "" && text !== undefined && text != null) {
            //Update the input form error
            var updateFormError = {
                ...formError,
                ["searchInput"]: ""
            };
            setFormError(updateFormError);
        //End
        } else {
            var error = {
                ["searchInput"]: "Please enter the text."
            };
            await setFormError(error);
        }
    };
    const searchAfterVoice = (voiceSearch = "", selectedCityData)=>{
        if (voiceSearch && selectedCityData) {
            var ref;
            const cityName = selectedCityData === null || selectedCityData === void 0 ? void 0 : (ref = selectedCityData.label) === null || ref === void 0 ? void 0 : ref.toLowerCase().replace(/\b(\w)/g, (match)=>match.toUpperCase()
            ).replace(/ /g, "-");
            cityName = cityName == "undefined" ? "Jaipur" : cityName;
            let url = "/" + cityName + "?query=" + encodeURI(voiceSearch) + "&cid=" + (selectedCityData === null || selectedCityData === void 0 ? void 0 : selectedCityData.id);
            //console.log('vs=======>>>>',serachInput)
            router_default().push(url, null, {
                shallow: false
            });
            return;
        }
    };
    const citiesListHandleChange = async (selected)=>{
        var ref;
        await setSelectedCity(selected);
        setCityBanner((selected === null || selected === void 0 ? void 0 : selected.banner_img) ? selected === null || selected === void 0 ? void 0 : selected.banner_img : "/images/home/dialmenow-hero-bg-img.webp");
        window.localStorage.setItem("searchFilterItem", JSON.stringify(selected));
        // call API to show data according to selected city
        const newCity = selected;
        console.log("valuevaluevaluevaluevalue", newCity);
        console.log("selectedselectedselected", newCity);
        let cityName = newCity === null || newCity === void 0 ? void 0 : (ref = newCity.label) === null || ref === void 0 ? void 0 : ref.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        cityName = cityName.replace(" ", "-");
        console.log("newCityCity:", newCity);
        console.log("cityName:", cityName);
        const baseUrl = process.env.BASE_URL;
        const url = `${baseUrl}/city/${cityName}/${newCity === null || newCity === void 0 ? void 0 : newCity.id}`;
        console.log("URL is:", url);
        try {
            // Assuming Router is imported and available in your code.
            router_default().push(url, null, {
                shallow: false
            });
        } catch (error) {
            console.error("Router push error:", error);
        }
    };
    //start voice searching
    (0,external_react_.useEffect)(()=>{
        var ref;
        const queryParamVal = (router_default()) === null || (router_default()) === void 0 ? void 0 : (ref = (router_default()).query) === null || ref === void 0 ? void 0 : ref.query;
        // console.log("Param gets_______", queryParamVal)
        if (queryParamVal && queryParamVal.length > 0) {
            //console.log("checkec------", serachInput)
            setSerachInput(queryParamVal);
        }
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = "en-US";
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            recognition.onstart = ()=>{
                console.log("Speach Start");
                setIsListening(true);
            };
            recognition.onend = ()=>{
                setIsListening(false);
                console.log("Speach End");
            };
            recognition.onerror = (err)=>{
                console.log(err, " ERROR");
                setIsListening(false);
            };
            recognition.onresult = (event)=>{
                const transcript = event.results[0][0].transcript;
                console.log("Script of speech  ", transcript, selectedCity);
                setSerachInput(event.results[event.results.length - 1][0].transcript);
                //setIsListening(false);
                //speech.stop();
                searchAfterVoice(event.results[event.results.length - 1][0].transcript, selectedCity);
            // do something with the transcript, e.g. submit search query
            };
            setSpeech(recognition);
        }
    }, [
        selectedCity
    ]);
    const listen = ()=>{
        console.log(" isListening ", isListening);
        setIsListening(!isListening);
        if (isListening) {
            speech.stop();
        } else {
            var ref;
            (ref = navigator.mediaDevices) === null || ref === void 0 ? void 0 : ref.getUserMedia({
                audio: true
            }).then((stream)=>{
                speech.start();
            }).catch((err)=>{
                console.log("Error: microphone access denied");
                setIsListening(false);
            });
        }
    };
    const customStyles = {
        option: (styles, state)=>({
                ...styles,
                cursor: "pointer"
            })
        ,
        control: (base, state)=>({
                ...base,
                cursor: "pointer",
                border: state.isFocused ? 1 : 0,
                // This line disable the blue border
                boxShadow: state.isFocused ? 1 : 0,
                "&:hover": {
                    border: state.isFocused ? 1 : 0
                }
            })
    };
    // Add New function onchange city after call
    // const changeSearch = async (selectedCity) => {
    //   const newCity = selectedCity;
    //   console.log("valuevaluevaluevaluevalue", newCity);
    //   console.log("selectedselectedselected", newCity);
    // let cityName = selected?.label
    //   ?.toLowerCase()
    //   .replace(/\b[a-z]/g, function (letter) {
    //     return letter.toUpperCase();
    //   });
    // cityName = cityName.replace(" ", "-");
    // console.log("selectedCity:", selected);
    // console.log("cityName:", cityName);
    // const baseUrl = process.env.BASE_URL;
    // const url = `${baseUrl}/city/${cityName}/${selected?.id}`;
    // console.log("URL is:", url);
    // try {
    //   // Assuming Router is imported and available in your code.
    //   Router.push(url, null, { shallow: false });
    // } catch (error) {
    //   console.error("Router push error:", error);
    // }
    // };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FormGroup/* default */.Z, {
        onSubmit: submitSearch,
        "aria-label": "Search",
        className: "d-flex rounded-5 mb-2 mb-sm-0 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((InputGroup_default()).Text, {
                className: "text-muted ps-1 p-0 pb-0 searchclass CitySearchCls border-0 text-dark",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fi-geo text-dark"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                isSearchable: true,
                cacheOptions: true,
                label: "Search",
                "aria-label": "Search",
                options: cityData,
                components: {
                    IndicatorSeparator: ()=>null
                },
                closeMenuOnSelect: true,
                hideSelectedOptions: false,
                onChange: citiesListHandleChange,
                // onChange={(selectedCity) => {
                //   citiesListHandleChange(selectedCity); // You can keep this if needed
                //   changeSearch(selectedCity);
                // }}
                value: selectedCity,
                className: "w-lg-50 w-md-50 w-sm-50 ms-0 w-xs-100 ps-3 ps-sm-0 ps-md-0 ps-lg-0",
                styles: customStyles
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((InputGroup_default()), {
                size: "lg",
                className: "border-start-md d-flex border-start-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((InputGroup_default()).Text, {
                        className: "text-muted ps-3 pe-2 ps-col-2 p-0 pb-0 searchclass",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fi-search"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchingSelect, {
                        className: "p-0 flex-grow-1",
                        valueContainerSize: valueContainerSize,
                        city: selectedCity,
                        setSerachInput: handleOnchangeSearchInput,
                        voiceSearchText: serachInput
                    }),
                    formError.searchInput && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-danger searchBoxError",
                        children: formError.searchInput
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "d-md-none my-2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(head_VoiceSearch, {
                onClickListen: listen,
                voiceListening: isListening
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "d-sm-flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    size: "lg",
                    type: "submit",
                    className: "rounded-5 w-100 w-md-auto ms-sm-3",
                    children: "Search"
                })
            })
        ]
    });
};
/* harmony default export */ const head_SearchForm = (SearchForm);

// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./components/ImageLoader.js
var ImageLoader = __webpack_require__(5698);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
;// CONCATENATED MODULE: ./components/searching/head/SearchDiv.js







const BgParallax = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/searching/head/SearchDiv.js -> " + "../../BgParallax"
        ]
    },
    ssr: false
});
const SearchDiv = ({ dialmenowListingCategorTopCls ="" , ImgGradientOverlayCls , cityData , categoryHeadingCls ="" , defaultCity , bgShow ="1" , changeCity , noSearchPage =false , defaultImage ="/images/noSearch/NosearchingBgImg.jpg" , selectedUserCity ="" , altData ,  })=>{
    const { 0: selectedCity , 1: setSelectedCity  } = (0,external_react_.useState)("");
    const { 0: cityBanner , 1: setCityBanner  } = (0,external_react_.useState)("");
    const { 0: noSeachBanner , 1: setNoSeachBanner  } = (0,external_react_.useState)(defaultImage);
    (0,external_react_.useEffect)(()=>{
        if (selectedUserCity) {
            setSelectedCity(selectedUserCity); // default city show
            changeCity(selectedUserCity);
            setCityBanner((selectedUserCity === null || selectedUserCity === void 0 ? void 0 : selectedUserCity.banner_img) ? selectedUserCity === null || selectedUserCity === void 0 ? void 0 : selectedUserCity.banner_img : "/images/home/dialmenow-hero-bg-img.webp");
            window.localStorage.setItem("searchFilterItem", JSON.stringify(selectedUserCity));
        } else if (selectedCity == "" || selectedCity === undefined) {
            var ref, ref1;
            let cityLocation = ((ref = JSON.parse(window.localStorage.getItem("hFilterItem"))) === null || ref === void 0 ? void 0 : ref.city) || "";
            //get search city name from local storage
            let citySelected = ((ref1 = JSON.parse(window.localStorage.getItem("searchFilterItem"))) === null || ref1 === void 0 ? void 0 : ref1.id) || "";
            let allCities = cityData;
            if (citySelected && allCities !== undefined) {
                let cityDataFind = allCities.find((val)=>val.id == citySelected
                );
                if (cityDataFind !== undefined) {
                    setSelectedCity(cityDataFind);
                    changeCity(cityDataFind);
                    setCityBanner((cityDataFind === null || cityDataFind === void 0 ? void 0 : cityDataFind.banner_img) ? cityDataFind === null || cityDataFind === void 0 ? void 0 : cityDataFind.banner_img : "/images/home/dialmenow-hero-bg-img.webp");
                // call API to show data
                } else {
                    let cityLocationFind = allCities.find((val)=>val.label.toLowerCase() == cityLocation.toLowerCase()
                    );
                    if (cityLocationFind !== undefined) {
                        setSelectedCity(cityDataFind);
                        changeCity(cityDataFind);
                        setCityBanner((cityDataFind === null || cityDataFind === void 0 ? void 0 : cityDataFind.banner_img) ? cityDataFind === null || cityDataFind === void 0 ? void 0 : cityDataFind.banner_img : "/images/home/dialmenow-hero-bg-img.webp");
                    // call API to show data
                    } else {
                        setSelectedCity(defaultCity); // default city show
                        changeCity(defaultCity);
                        setCityBanner((defaultCity === null || defaultCity === void 0 ? void 0 : defaultCity.banner_img) ? defaultCity === null || defaultCity === void 0 ? void 0 : defaultCity.banner_img : "/images/home/dialmenow-hero-bg-img.webp");
                        window.localStorage.setItem("searchFilterItem", JSON.stringify(defaultCity));
                    }
                // call API to show data
                }
            } else {
                setSelectedCity(defaultCity); // default city show
                changeCity(defaultCity);
                setCityBanner((defaultCity === null || defaultCity === void 0 ? void 0 : defaultCity.banner_img) ? defaultCity === null || defaultCity === void 0 ? void 0 : defaultCity.banner_img : "/images/home/dialmenow-hero-bg-img.webp");
                window.localStorage.setItem("searchFilterItem", JSON.stringify(defaultCity));
            // call API to show data
            }
        }
    }, [
        selectedCity
    ]);
    const onCityChange = (city)=>{
        setSelectedCity(city);
        changeCity(city);
    };
    if (bgShow == "1") {
        return /*#__PURE__*/ jsx_runtime_.jsx(BgParallax, {
            imgSrc: cityBanner,
            type: "scroll" // scale, opacity, scroll-opacity, scale-opacity
            ,
            speed: 0.5,
            overlay: "gradient" // or overlay={50} from 0 to 100
            ,
            className: "position-relative zindex-1 py-xxl-5",
            children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                className: "pt-md-5 mb-lg-3 dialmenow-hero",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-5 mb-md-5 py-sm-5 pt-4 pb-3 mt-lg-5 mt-md-0 pt-lg-5 pt-md-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                            xl: 10,
                            lg: 8,
                            md: 10,
                            className: " mb-sm-0 mb-3 px-0 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "display-5 d-inline-flex flex-wrap align-items-center mt-sm-3 mt-4 my-1 overflow-hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "me-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: "Search"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "anim-typewriter",
                                                children: "and find what you are looking for"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "fs-lg fs-md",
                                    children: `Explore what you want...`
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                            xl: 8,
                            lg: 9,
                            md: 10,
                            className: "px-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(head_SearchForm, {
                                cityData: cityData,
                                selectedCity: selectedCity,
                                setSelectedCity: onCityChange,
                                setCityBanner: setCityBanner
                            })
                        })
                    ]
                })
            })
        });
    } else if (bgShow == "2") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " position-relative",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "searchingBgImg InnersearchingBgImg",
                    children: noSeachBanner && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            width: "100%",
                            height: "250px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ImageLoader/* default */.Z, {
                            loading: "lazy",
                            alt: altData + " Banner",
                            src: noSeachBanner,
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            quality: "100",
                            layout: "fill"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `dialmenowListingTop w-100 ${dialmenowListingCategorTopCls}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                        className: `dialmenow-hero  pb-0 ${noSearchPage ? "noSearchHero" : ""}`,
                        children: [
                            !noSearchPage && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: `display-5 d-flex flex-wrap align-items-center mt-sm-0 mb-2 ${categoryHeadingCls}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "me-2",
                                    children: noSearchPage ? "" : "Find exactly what you need"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    xl: 9,
                                    lg: 9,
                                    md: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(head_SearchForm, {
                                        cityData: cityData,
                                        selectedCity: selectedCity,
                                        setSelectedCity: onCityChange,
                                        setCityBanner: setCityBanner
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        });
    } else if (bgShow == "3") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "dialmenowListingTop w-100 mt-1 mb-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                        className: "dialmenow-hero pb-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                xl: 12,
                                lg: 12,
                                md: 12,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(head_SearchForm, {
                                    cityData: cityData,
                                    valueContainerSize: "450px",
                                    selectedCity: selectedCity,
                                    setSelectedCity: onCityChange,
                                    setCityBanner: setCityBanner
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " position-relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "searchingBgImg",
                            children: noSeachBanner && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    width: "100%",
                                    height: "300px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ImageLoader/* default */.Z, {
                                    src: noSeachBanner,
                                    quality: "100",
                                    layout: "fill",
                                    alt: altData + " Banner",
                                    objectFit: "contain"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `${ImgGradientOverlayCls}`
                        })
                    ]
                })
            ]
        });
    }
};
/* harmony default export */ const head_SearchDiv = (SearchDiv);


/***/ })

};
;