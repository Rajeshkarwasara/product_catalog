"use strict";
exports.id = 6256;
exports.ids = [6256];
exports.modules = {

/***/ 6256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);





const Option = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_select__WEBPACK_IMPORTED_MODULE_3__.components.Option, {
            ...props,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "checkbox",
                    checked: props.isSelected,
                    onChange: ()=>null
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: props.label
                })
            ]
        })
    });
};
const MySelect = (props)=>{
    const customStyles = {
        valueContainer: (base)=>({
                ...base,
                overflow: "hidden",
                paddingLeft: "20px",
                maxWidth: "350px",
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
        control: (base, state)=>{
            return {
                ...base,
                //border: state.isFocused ? 0 : 0,
                border: (props === null || props === void 0 ? void 0 : props.isBorder) ? "1px solid #d5d2dc" : 0,
                paddingLeft: !(props === null || props === void 0 ? void 0 : props.isBorder) ? "24px" : "",
                boxShadow: state.isFocused ? 0 : 0,
                background: "transparent",
                "&:hover": {
                    //border: state.isFocused ? 0 : 0
                    border: (props === null || props === void 0 ? void 0 : props.isBorder) ? "1px solid #d5d2dc" : 0
                }
            };
        }
    };
    if (props.allowSelectAll) {
        //console.log('props===>>', props)
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_3___default()), {
            ...props,
            options: [
                props.allOption,
                ...props.options
            ],
            //components={{ Option, MultiValue }}
            styles: customStyles,
            components: {
                Option
            },
            onChange: (selected, event)=>{
                if (selected !== null && selected.length > 0) {
                    if (selected[selected.length - 1].value === props.allOption.value) {
                        return props.onChange([
                            props.allOption,
                            ...props.options
                        ]);
                    }
                    let result = [];
                    if (selected.length === props.options.length) {
                        if (selected.includes(props.allOption)) {
                            result = selected.filter((option)=>option.value !== props.allOption.value
                            );
                        } else if (event.action === "select-option") {
                            result = [
                                props.allOption,
                                ...props.options
                            ];
                        }
                        return props.onChange(result);
                    }
                }
                return props.onChange(selected);
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_3___default()), {
        ...props,
        styles: customStyles
    });
};
MySelect.propTypes = {
    options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    allowSelectAll: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    ShowTree: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    allOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
    })
};
MySelect.defaultProps = {
    allOption: {
        label: "Select all",
        value: "*"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MySelect);


/***/ })

};
;