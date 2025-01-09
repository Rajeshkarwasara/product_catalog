"use strict";
exports.id = 5415;
exports.ids = [5415];
exports.modules = {

/***/ 5415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_subDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5358);
/* harmony import */ var date_fns_subDays__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_subDays__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2659);
/* harmony import */ var date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3864);
/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6011);
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_addDays__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5914);
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6924);
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4538);
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8176);
/* harmony import */ var react_multi_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3456);
/* harmony import */ var react_multi_date_picker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_multi_date_picker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_multi_date_picker_plugins_date_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3371);
/* harmony import */ var react_multi_date_picker_plugins_date_panel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_multi_date_picker_plugins_date_panel__WEBPACK_IMPORTED_MODULE_10__);

//import { DateRangePicker } from 'rsuite';

//import "rsuite/dist/rsuite.min.css";
//const { allowedMaxDays, afterToday, combine } = DateRangePicker;











// Main wrapper
const CalendarPicker = ({ setDatepickerValue  })=>{
    const calenderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: valueChange , 1: setValueChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_11__/* .getDateTime */ .Fc)(),
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_11__/* .getDateTime */ .Fc)()
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_date_picker__WEBPACK_IMPORTED_MODULE_9___default()), {
            ref: calenderRef,
            range: true,
            className: "rmdp-mobile p-3",
            inputClass: "custom-input",
            //calendarPosition="top-left"
            //fixMainPosition
            value: valueChange,
            //minDate={new DateObject().toFirstOfMonth()}
            //maxDate={new DateObject().toLastOfMonth()}
            placeholder: "Select date range",
            onChange: (dateObjects)=>{
                console.log(new react_multi_date_picker__WEBPACK_IMPORTED_MODULE_9__.DateObject(dateObjects), "selected dates :\n" + dateObjects.join(","));
                let dates = dateObjects.join(",");
                if (dates.split(",").length > 1) {
                    setValueChange([
                        dates.split(",")[0],
                        dates.split(",")[1]
                    ]);
                    setDatepickerValue([
                        dates.split(",")[0],
                        dates.split(",")[1]
                    ]);
                } else {
                    setValueChange([
                        dates.split(",")[0],
                        new Date()
                    ]);
                    setDatepickerValue([
                        dates.split(",")[0],
                        new Date()
                    ]);
                }
            },
            format: "YYYY-MM-DD",
            containerStyle: {
                width: "100%"
            },
            style: {
                backgroundColor: "#fff",
                height: "44px",
                borderRadius: "6px",
                fontSize: "16px",
                padding: "3px 10px",
                width: "100%",
                border: "solid 1px #C6C7CE",
                color: "#727272"
            },
            mobileLabels: {
                Yes: "OK"
            },
            mobileButtons: [
                {
                    label: "Yesterday",
                    type: "button",
                    className: "rmdp-button rmdp-action-button",
                    onClick: ()=>{
                        setValueChange([
                            date_fns_addDays__WEBPACK_IMPORTED_MODULE_5___default()(new Date(), -1),
                            date_fns_addDays__WEBPACK_IMPORTED_MODULE_5___default()(new Date(), -1)
                        ]);
                        setDatepickerValue([
                            date_fns_addDays__WEBPACK_IMPORTED_MODULE_5___default()(new Date(), -1),
                            date_fns_addDays__WEBPACK_IMPORTED_MODULE_5___default()(new Date(), -1)
                        ]);
                        calenderRef.current.closeCalendar();
                    }
                },
                {
                    label: "Last 7 Days",
                    type: "button",
                    className: "rmdp-button rmdp-action-button",
                    onClick: ()=>{
                        setValueChange([
                            date_fns_subDays__WEBPACK_IMPORTED_MODULE_2___default()(new Date(), 6),
                            new Date()
                        ]);
                        setDatepickerValue([
                            date_fns_subDays__WEBPACK_IMPORTED_MODULE_2___default()(new Date(), 6),
                            new Date()
                        ]);
                        calenderRef.current.closeCalendar();
                    }
                },
                {
                    label: "Last Month",
                    type: "button",
                    className: "rmdp-button rmdp-action-button",
                    onClick: ()=>{
                        setValueChange([
                            date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_6___default()(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8___default()(new Date(), -1)),
                            date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_7___default()(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8___default()(new Date(), -1))
                        ]);
                        setDatepickerValue([
                            date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_6___default()(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8___default()(new Date(), -1)),
                            date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_7___default()(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8___default()(new Date(), -1))
                        ]);
                        calenderRef.current.closeCalendar();
                    }
                },
                {
                    label: "This Month",
                    type: "button",
                    className: "rmdp-button rmdp-action-button",
                    onClick: ()=>{
                        setValueChange([
                            date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_6___default()(new Date()),
                            new Date()
                        ]);
                        setDatepickerValue([
                            date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_6___default()(new Date()),
                            new Date()
                        ]);
                        calenderRef.current.closeCalendar();
                    }
                }
            ],
            plugins: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_date_picker_plugins_date_panel__WEBPACK_IMPORTED_MODULE_10___default()), {
                    className: "p-3 w-100"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPicker);


/***/ })

};
;