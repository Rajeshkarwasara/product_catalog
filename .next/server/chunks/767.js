exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 8358:
/***/ ((module) => {

// Exports
module.exports = {
	"weekDays_selector": "DualTime_weekDays_selector__xnOjY",
	"checkToogle": "DualTime_checkToogle__hEnIy",
	"TimeValue": "DualTime_TimeValue__LqdwH",
	"AddMoreBtn": "DualTime_AddMoreBtn__LbGbj",
	"daySubmitBtn": "DualTime_daySubmitBtn__X3fJF"
};


/***/ }),

/***/ 767:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var _components_freelisting_DualTimeModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7896);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _components_freelisting_DualTimeModal__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _components_freelisting_DualTimeModal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import { useEffect, useState, useRef } from "react";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import { useForm } from "react-hook-form";
// import DualTimeModal from "../components/freelisting/DualTimeModal";
// import { getWeekDaysFullName } from "../helper/helper";
// const OpenHour = ({
//   OpenHourHeadCls = "",
//   colPaddingCls = "",
//   timeborderCls = "",
//   DayGapCls = "",
//   csrfToken,
//   days,
//   SetDays,
//   AddMoreBtnCls = "",
//   formValues,
//   setFormValues,
//   is_dual_button,
//   labelColumnSize = "2",
//   switchBtnColumnSize = "2",
//   switchBtnColumnSizeXL = "3",
//   switchBtnColumnSizeXS = "5",
//   businessOtherDetailsSize = "2",
//   specifyOpeningHoursChange,
//   setDaysOnClickOnDualButton,
//   dayValueCls,
//   TimeValueCls,
//   handleSubmitTime,
//   ...props
// }) => {
//   const { register, errors, handleSubmit, setValue } = useForm();
//   const [showing, SetShowing] = useState(is_dual_button); // if ture then show the plus button other wise hide
//   // Dual Time modal
//   const [dualTimeShow, setDualTimeShow] = useState(false);
//   const [toggle, setToggle] = useState(false);
//   const handleDualTimeClose = () => {
//     setDualTimeShow(false);
//     setToggle(false);
//   };
//   const handleDualTimeShow = () => {
//     setDualTimeShow(true);
//     setToggle(true);
//   };
//   useEffect(() => {
//     days.map((day, index) => {
//       if (day.open == 1 || day.close == 1) {
//         document.getElementById("start_time_id" + index).style.display = "none";
//         document.getElementById("end_time_id" + index).style.display = "none";
//       } else {
//         document.getElementById("start_time_id" + index).style.display =
//           "block";
//         document.getElementById("end_time_id" + index).style.display = "block";
//       }
//     });
//   }, [days]);
//   let hideStartEndTimehandleChange = async (e, index, type) => {
//     if (type == "open") {
//       document.getElementById("close" + index).checked = false;
//     } else {
//       document.getElementById("open" + index).checked = false;
//     }
//     let newState;
//     if (e == true) {
//       document.getElementById("start_time_id" + index).style.display = "none";
//       document.getElementById("end_time_id" + index).style.display = "none";
//       //if (is_dual_button) { document.getElementById("plusbutton" + index).style.display = "none"; }
//       newState = days.map((day, Dayindex) => {
//         if (Dayindex === index) {
//           // return { ...day, ["is_dual"]: "0" };
//           day = { ...day, ["is_dual"]: "0" };
//           //This is use for set the open close checkbox value
//           day = { ...day, [type]: "1" };
//           //Reset the value of open and close
//           if (type == "open") {
//             day = { ...day, ["close"]: "" };
//           } else if (type == "close") {
//             day = { ...day, ["open"]: "" };
//           }
//           return day;
//         }
//         return day;
//       });
//       await SetDays(newState);
//     } else {
//       document.getElementById("start_time_id" + index).style.display = "block";
//       document.getElementById("end_time_id" + index).style.display = "block";
//       //if (is_dual_button) { document.getElementById("plusbutton" + index).style.display = "block" };
//       //unset the checkbox when not checked
//       newState = days.map((day, Dayindex) => {
//         if (Dayindex === index) {
//           //This is use for set the open close checkbox value
//           if (day.start_time == null || day.start_time == "") {
//             day = {
//               ...day,
//               [type]: "",
//               ["start_time"]: "",
//               ["end_time"]: "",
//             };
//           } else {
//             day = { ...day, [type]: "" };
//           }
//           return day;
//         }
//         return day;
//       });
//       await SetDays(newState);
//     }
//     var updateFormValues = { ...formValues, ["daysHourslist"]: newState };
//     setFormValues(updateFormValues);
//   };
//   // Add dual time or not on particular day
//   let AddDualTime = async (dayValue) => {
//     const newState = days.map((day) => {
//       if (day["value"] === dayValue) {
//         return {
//           ...day,
//           ["is_dual"]: "1",
//           ["dual_start_time"]: "",
//           ["dual_end_time"]: "",
//         };
//       }
//       return day;
//     });
//     await SetDays(newState);
//     var updateFormValues = { ...formValues, ["daysHourslist"]: newState };
//     setFormValues(updateFormValues);
//     //set value function
//     setDaysOnClickOnDualButton(newState);
//     // console.log('add')
//   };
//   // Remove dual time or not on particular day
//   let RemoveDualTime = async (dayValue) => {
//     const newState = days.map((day) => {
//       if (day["value"] === dayValue) {
//         return {
//           ...day,
//           ["is_dual"]: "0",
//           ["dual_start_time"]: "",
//           ["dual_end_time"]: "",
//         };
//       }
//       return day;
//     });
//     await SetDays(newState);
//     var updateFormValues = { ...formValues, ["daysHourslist"]: newState };
//     setFormValues(updateFormValues);
//     //set value
//     //setValue('daysHourslist', newState)
//     setDaysOnClickOnDualButton(newState);
//     // console.log('remove')
//   };
//   return (
//     <>
//       {/* Dual time modal */}
//       <DualTimeModal
//         centered
//         size="lg"
//         pillButtons
//         show={dualTimeShow}
//         mainDays={SetDays}
//         daysArray={days}
//         onHide={handleDualTimeClose}
//         onSwap={handleDualTimeShow}
//         is_dual_button={is_dual_button}
//       />
//       <Row className={`${DayGapCls}`}>
//         <Col xs={6} sm="8">
//           <h6 className={`${OpenHourHeadCls}`}>
//             Specify Opening Hours<span className="text-danger">*</span>
//           </h6>
//         </Col>
//         <Col
//           xs={6}
//           sm="4"
//           as={Form.Group}
//           controlId="pr-job-title"
//           className="text-end"
//         >
//           <Form.Check
//             type="switch"
//             label="&nbsp; Same every day"
//             className="d-inline-flex"
//             name="showDualtime"
//             checked={toggle}
//             onChange={(e) => {
//               handleDualTimeShow();
//             }}
//           />
//         </Col>
//       </Row>
//       {days.map((day, index) => (
//         <div className={`mb-1 mt-2 ${timeborderCls}`} key={index}>
//           <Row className={`mb-md-3 mb-lg-1 align-items-center`}>
//             <Col
//               xs={12}
//               sm="2"
//               lg={2}
//               md={2}
//               xl={labelColumnSize}
//               className={`pe-0 ${colPaddingCls}`}
//             >
//               <h6 className={`mb-2 mb-sm-0 ${dayValueCls}`}>
//                 {getWeekDaysFullName(day["value"])}
//               </h6>
//             </Col>
//             <Col
//               xs={switchBtnColumnSizeXS}
//               sm="4"
//               lg={2}
//               md={4}
//               xl={2}
//               id={`start_time_id${index}`}
//             >
//               <div className="OpenTime"></div>
//               <Form.Control
//                 type="time"
//                 id={`start_time${index}`}
//                 name="start_time"
//                 //defaultValue={day['start_time'] || ''}
//                 value={day["start_time"] || ""}
//                 {...register(`daysHourslist.${index}.start_time`, {
//                   required: true, // Add this line to make the field required
//                 })}
//                 aria-describedby="addon2"
//                 style={{
//                   display: day["open"] || day["close"] ? "none" : "block",
//                 }}
//                 onChange={(e) => {
//                   specifyOpeningHoursChange(e, index, "start_time");
//                   handleSubmitTime();
//                 }}
//                 className={` ${TimeValueCls}`}
//               />
//             </Col>
//             <Col
//               xs={switchBtnColumnSizeXS}
//               sm="4"
//               lg={2}
//               md={4}
//               xl={2}
//               id={`end_time_id${index}`}
//             >
//               <Form.Control
//                 type="time"
//                 id={`end_time${index}`}
//                 name="end_time"
//                 //defaultValue={day['end_time'] || ''}
//                 value={day["end_time"] || ""}
//                 {...register(`daysHourslist.${index}.end_time`, {
//                   required: true, // Add this line to make the field required
//                 })}
//                 aria-describedby="addon2"
//                 style={{
//                   display: day["open"] || day["close"] ? "none" : "block",
//                 }}
//                 onChange={(e) => {
//                   specifyOpeningHoursChange(e, index, "end_time");
//                 }}
//                 className={`${TimeValueCls}`}
//               />
//             </Col>
//             {day["open"] != 1 && day["close"] != 1 && is_dual_button ? (
//               <Col xs={2} sm="1">
//                 {day["is_dual"] == "0" ? (
//                   <Button
//                     className={`mt-0 ${AddMoreBtnCls}`}
//                     onClick={(e) => {
//                       AddDualTime(day["value"]);
//                     }}
//                     id={`plusbutton${index}`}
//                     style={{ display: showing ? "block" : "none" }}
//                   >
//                     <i className="fi-plus"></i>
//                   </Button>
//                 ) : (
//                   <Button
//                     className={`mt-0 ${AddMoreBtnCls}`}
//                     onClick={(e) => {
//                       RemoveDualTime(day["value"]);
//                     }}
//                     id={`plusbutton${index}`}
//                     style={{ display: showing ? "block" : "none" }}
//                   >
//                     <i className="fi-minus"></i>
//                   </Button>
//                 )}
//               </Col>
//             ) : null}
//             <Col
//               xs={12}
//               lg={4}
//               md={6}
//               xl={switchBtnColumnSizeXL}
//               sm={switchBtnColumnSize}
//               className="mt-md-2 mt-lg-0"
//             >
//               <div className="d-flex align-items-center justify-content-between">
//                 <Form.Check
//                   type="switch"
//                   label="Open 24 Hours"
//                   className="mt-2 mt-md-0"
//                   checked={day["open"] ? true : false}
//                   id={`open${index}`}
//                   name="open"
//                   {...register(`daysHourslist.${index}.open`)}
//                   onChange={(e) => {
//                     hideStartEndTimehandleChange(
//                       e.target.checked,
//                       index,
//                       "open"
//                     );
//                   }}
//                 />
//                 <Form.Check
//                   type="switch"
//                   label="Close"
//                   className="mt-2 mt-md-0"
//                   checked={day["close"] ? true : false}
//                   id={`close${index}`}
//                   name="close"
//                   {...register(`daysHourslist.${index}.close`)}
//                   onChange={(e) => {
//                     hideStartEndTimehandleChange(
//                       e.target.checked,
//                       index,
//                       "close"
//                     );
//                   }}
//                 />
//               </div>
//             </Col>
//           </Row>
//           {day["is_dual"] == "0" ? null : (
//             <Row className="mb-0 mt-2 mt-sm-2 mt-md-0">
//               <Col xs={12} sm="2" md="2" xl={businessOtherDetailsSize}></Col>
//               <Col xs={6} sm="4" md="2">
//                 <Form.Control
//                   type="time"
//                   id={`dual_start_time${index}`}
//                   name="dual_start_time"
//                   className={`${TimeValueCls}`}
//                   //defaultValue={day['dual_start_time'] || ''}
//                   value={day["dual_start_time"] || ""}
//                   {...register(`daysHourslist.${index}.dual_start_time`, {
//                     required: true, // Add this line to make the field required
//                   })}
//                   aria-describedby="addon2"
//                   onChange={(e) => {
//                     specifyOpeningHoursChange(e, index, "dual_start_time");
//                   }}
//                 />
//               </Col>
//               <Col xs={6} sm="4" md="2">
//                 <Form.Control
//                   type="time"
//                   id={`dual_end_time${index}`}
//                   name="dual_end_time"
//                   className={`${TimeValueCls}`}
//                   //defaultValue={day['dual_end_time'] || ''}
//                   value={day["dual_end_time"] || ""}
//                   {...register(`daysHourslist.${index}.dual_end_time`, {
//                     required: true, // Add this line to make the field required
//                   })}
//                   aria-describedby="addon2"
//                   onChange={(e) => {
//                     specifyOpeningHoursChange(e, index, "dual_end_time");
//                   }}
//                 />
//               </Col>
//             </Row>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };
// export default OpenHour;








const OpenHour = ({ OpenHourHeadCls ="" , colPaddingCls ="" , timeborderCls ="" , DayGapCls ="" , csrfToken , days , SetDays , AddMoreBtnCls ="" , formValues , setFormValues , is_dual_button , labelColumnSize ="2" , switchBtnColumnSize ="2" , switchBtnColumnSizeXL ="3" , switchBtnColumnSizeXS ="5" , businessOtherDetailsSize ="2" , specifyOpeningHoursChange , setDaysOnClickOnDualButton , dayValueCls , TimeValueCls , handleSubmitTime , ...props })=>{
    const { register , errors , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    const { 0: showing , 1: SetShowing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(is_dual_button);
    // Dual Time modal
    const { 0: dualTimeShow , 1: setDualTimeShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: toggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleDualTimeClose = ()=>{
        setDualTimeShow(false);
        setToggle(false);
    };
    const handleDualTimeShow = ()=>{
        setDualTimeShow(true);
        setToggle(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        days.map((day, index)=>{
            if (day.open == 1 || day.close == 1) {
                document.getElementById("start_time_id" + index).style.display = "none";
                document.getElementById("end_time_id" + index).style.display = "none";
            } else {
                document.getElementById("start_time_id" + index).style.display = "block";
                document.getElementById("end_time_id" + index).style.display = "block";
            }
        });
    }, [
        days
    ]);
    let hideStartEndTimehandleChange = async (e, index, type)=>{
        if (type === "open") {
            document.getElementById("close" + index).checked = false;
        } else {
            document.getElementById("open" + index).checked = false;
        }
        let newState;
        if (e === true) {
            document.getElementById("start_time_id" + index).style.display = "none";
            document.getElementById("end_time_id" + index).style.display = "none";
            newState = days.map((day, Dayindex)=>{
                if (Dayindex === index) {
                    day = {
                        ...day,
                        ["is_dual"]: "0"
                    };
                    day = {
                        ...day,
                        [type]: "1"
                    };
                    if (type === "open") {
                        day = {
                            ...day,
                            ["close"]: ""
                        };
                    } else if (type === "close") {
                        day = {
                            ...day,
                            ["open"]: ""
                        };
                    }
                    return day;
                }
                return day;
            });
            await SetDays(newState);
        } else {
            document.getElementById("start_time_id" + index).style.display = "block";
            document.getElementById("end_time_id" + index).style.display = "block";
            newState = days.map((day, Dayindex)=>{
                if (Dayindex === index) {
                    if (day.start_time == null || day.start_time == "") {
                        day = {
                            ...day,
                            [type]: "",
                            ["start_time"]: "",
                            ["end_time"]: ""
                        };
                    } else {
                        day = {
                            ...day,
                            [type]: ""
                        };
                    }
                    return day;
                }
                return day;
            });
            await SetDays(newState);
        }
        var updateFormValues = {
            ...formValues,
            ["daysHourslist"]: newState
        };
        setFormValues(updateFormValues);
    };
    let AddDualTime = async (dayValue)=>{
        const newState = days.map((day)=>{
            if (day["value"] === dayValue) {
                return {
                    ...day,
                    ["is_dual"]: "1",
                    ["dual_start_time"]: "",
                    ["dual_end_time"]: ""
                };
            }
            return day;
        });
        await SetDays(newState);
        var updateFormValues = {
            ...formValues,
            ["daysHourslist"]: newState
        };
        setFormValues(updateFormValues);
        setDaysOnClickOnDualButton(newState);
    };
    let RemoveDualTime = async (dayValue)=>{
        const newState = days.map((day)=>{
            if (day["value"] === dayValue) {
                return {
                    ...day,
                    ["is_dual"]: "0",
                    ["dual_start_time"]: "",
                    ["dual_end_time"]: ""
                };
            }
            return day;
        });
        await SetDays(newState);
        var updateFormValues = {
            ...formValues,
            ["daysHourslist"]: newState
        };
        setFormValues(updateFormValues);
        setDaysOnClickOnDualButton(newState);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_freelisting_DualTimeModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: dualTimeShow,
                mainDays: SetDays,
                daysArray: days,
                onHide: handleDualTimeClose,
                onSwap: handleDualTimeShow,
                is_dual_button: is_dual_button
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: `${DayGapCls}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                        xs: 6,
                        sm: "8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                            className: `${OpenHourHeadCls}`,
                            children: [
                                "Specify Opening Hours",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-danger",
                                    children: "*"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                        xs: 6,
                        sm: "4",
                        as: (react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group),
                        controlId: "pr-job-title",
                        className: "text-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Check), {
                            type: "switch",
                            label: "\xa0 Same every day",
                            className: "d-inline-flex",
                            name: "showDualtime",
                            checked: toggle,
                            onChange: (e)=>{
                                handleDualTimeShow();
                            }
                        })
                    })
                ]
            }),
            days.map((day, index)=>{
                var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `mb-1 mt-2 ${timeborderCls}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: `mb-md-3 mb-lg-1 align-items-center`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    xs: 12,
                                    sm: "2",
                                    lg: 2,
                                    md: 2,
                                    xl: labelColumnSize,
                                    className: `pe-0 ${colPaddingCls}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: `mb-2 mb-sm-0 ${dayValueCls}`,
                                        children: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_8__/* .getWeekDaysFullName */ .Z8)(day["value"])
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    xs: switchBtnColumnSizeXS,
                                    sm: "4",
                                    lg: 2,
                                    md: 4,
                                    xl: 2,
                                    id: `start_time_id${index}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "OpenTime"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
                                            type: "time",
                                            id: `start_time${index}`,
                                            name: `daysHourslist.${index}.start_time`,
                                            value: day["start_time"] || "",
                                            ...register(`daysHourslist.${index}.start_time`, {
                                                required: "This field is required"
                                            }),
                                            "aria-describedby": "addon2",
                                            style: {
                                                display: day["open"] || day["close"] ? "none" : "block"
                                            },
                                            onChange: (e)=>{
                                                specifyOpeningHoursChange(e, index, "start_time");
                                                handleSubmitTime();
                                            },
                                            className: ` ${TimeValueCls}`
                                        }),
                                        (errors === null || errors === void 0 ? void 0 : errors.daysHourslist) && (errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) && ((ref = errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) === null || ref === void 0 ? void 0 : ref.start_time) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-danger",
                                            children: (ref1 = errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) === null || ref1 === void 0 ? void 0 : ref1.start_time.message
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    xs: switchBtnColumnSizeXS,
                                    sm: "4",
                                    lg: 2,
                                    md: 4,
                                    xl: 2,
                                    id: `end_time_id${index}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
                                            type: "time",
                                            id: `end_time${index}`,
                                            name: `daysHourslist.${index}.end_time`,
                                            value: day["end_time"] || "",
                                            ...register(`daysHourslist.${index}.end_time`, {
                                                required: "This field is required"
                                            }),
                                            "aria-describedby": "addon2",
                                            style: {
                                                display: day["open"] || day["close"] ? "none" : "block"
                                            },
                                            onChange: (e)=>{
                                                specifyOpeningHoursChange(e, index, "end_time");
                                            },
                                            className: `${TimeValueCls}`
                                        }),
                                        (errors === null || errors === void 0 ? void 0 : errors.daysHourslist) && (errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) && ((ref2 = errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) === null || ref2 === void 0 ? void 0 : ref2.end_time) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-danger",
                                            children: (ref3 = errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) === null || ref3 === void 0 ? void 0 : ref3.end_time.message
                                        })
                                    ]
                                }),
                                day["open"] != 1 && day["close"] != 1 && is_dual_button ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    xs: 2,
                                    sm: "1",
                                    children: day["is_dual"] == "0" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: `mt-0 ${AddMoreBtnCls}`,
                                        onClick: (e)=>{
                                            AddDualTime(day["value"]);
                                        },
                                        id: `plusbutton${index}`,
                                        style: {
                                            display: showing ? "block" : "none"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-plus"
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: `mt-0 ${AddMoreBtnCls}`,
                                        onClick: (e)=>{
                                            RemoveDualTime(day["value"]);
                                        },
                                        id: `plusbutton${index}`,
                                        style: {
                                            display: showing ? "block" : "none"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-minus"
                                        })
                                    })
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    xs: 12,
                                    lg: 4,
                                    md: 6,
                                    xl: switchBtnColumnSizeXL,
                                    sm: switchBtnColumnSize,
                                    className: "mt-md-2 mt-lg-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex align-items-center justify-content-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Check), {
                                                type: "switch",
                                                label: "Open 24 Hours",
                                                className: "mt-2 mt-md-0",
                                                checked: day["open"] ? true : false,
                                                id: `open${index}`,
                                                name: `daysHourslist.${index}.open`,
                                                ...register(`daysHourslist.${index}.open`),
                                                onChange: (e)=>{
                                                    hideStartEndTimehandleChange(e.target.checked, index, "open");
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Check), {
                                                type: "switch",
                                                label: "Close",
                                                className: "mt-2 mt-md-0",
                                                checked: day["close"] ? true : false,
                                                id: `close${index}`,
                                                name: `daysHourslist.${index}.close`,
                                                ...register(`daysHourslist.${index}.close`),
                                                onChange: (e)=>{
                                                    hideStartEndTimehandleChange(e.target.checked, index, "close");
                                                }
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        day["is_dual"] == "0" ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "mb-0 mt-2 mt-sm-2 mt-md-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    xs: 12,
                                    sm: "2",
                                    md: "2",
                                    xl: businessOtherDetailsSize
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    xs: 6,
                                    sm: "4",
                                    md: "2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
                                            type: "time",
                                            id: `dual_start_time${index}`,
                                            name: `daysHourslist.${index}.dual_start_time`,
                                            className: `${TimeValueCls}`,
                                            value: day["dual_start_time"] || "",
                                            ...register(`daysHourslist.${index}.dual_start_time`, {
                                                required: "This field is required"
                                            }),
                                            "aria-describedby": "addon2",
                                            onChange: (e)=>{
                                                specifyOpeningHoursChange(e, index, "dual_start_time");
                                            }
                                        }),
                                        (errors === null || errors === void 0 ? void 0 : errors.daysHourslist) && (errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) && ((ref4 = errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) === null || ref4 === void 0 ? void 0 : ref4.dual_start_time) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-danger",
                                            children: (ref5 = errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) === null || ref5 === void 0 ? void 0 : ref5.dual_start_time.message
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    xs: 6,
                                    sm: "4",
                                    md: "2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
                                            type: "time",
                                            id: `dual_end_time${index}`,
                                            name: `daysHourslist.${index}.dual_end_time`,
                                            className: `${TimeValueCls}`,
                                            value: day["dual_end_time"] || "",
                                            ...register(`daysHourslist.${index}.dual_end_time`, {
                                                required: "This field is required"
                                            }),
                                            "aria-describedby": "addon2",
                                            onChange: (e)=>{
                                                specifyOpeningHoursChange(e, index, "dual_end_time");
                                            }
                                        }),
                                        (errors === null || errors === void 0 ? void 0 : errors.daysHourslist) && (errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) && ((ref6 = errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) === null || ref6 === void 0 ? void 0 : ref6.dual_end_time) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-danger",
                                            children: (ref7 = errors === null || errors === void 0 ? void 0 : errors.daysHourslist[index]) === null || ref7 === void 0 ? void 0 : ref7.dual_end_time.message
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, index);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenHour);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9044);
/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8358);
/* harmony import */ var _styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_7__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const DualTimeModal = ({ csrfToken , mainDays , daysArray , onSwap , pillButtons , is_dual_button , ...props })=>{
    var days = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];
    const { 0: checkedDays , 1: setCheckedDays  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: dualData , 1: setDualData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: formDualFrmValues , 1: setFormDualFrmValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        selectedDays: [],
        switchOpen: false,
        switchClose: false,
        open_time: "10:00",
        close_time: "19:00",
        dual_start_time: "10:00",
        dual_end_time: "19:00",
        is_dual: 0
    });
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); /// ref
    const { 0: isCheckedOpen , 1: setIsCheckedOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isCheckedClose , 1: setIsCheckedClose  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: dualTime , 1: SetDualTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1");
    const { register , unregister , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    console.log(dualTime, "dualTime...............11");
    //onChange open and close toggle 
    let hideStartEndTimeChange = async (openHoursChecked, type)=>{
        if (type == "open") {
            setIsCheckedOpen(openHoursChecked);
            document.getElementById("close").checked = false;
            setFormDualFrmValues({
                ...formDualFrmValues,
                ["switchOpen"]: openHoursChecked,
                ["switchClose"]: false
            });
        } else {
            setIsCheckedClose(openHoursChecked);
            document.getElementById("open").checked = false;
            setFormDualFrmValues({
                ...formDualFrmValues,
                ["switchClose"]: openHoursChecked,
                ["switchOpen"]: false
            });
        }
        if (openHoursChecked == true) {
            document.getElementById("start_time").style.display = "none";
            document.getElementById("end_time").style.display = "none";
            if (is_dual_button) {
                document.getElementById("is_dual").style.display = "none";
            }
            SetDualTime("1");
        } else {
            document.getElementById("start_time").style.display = "block";
            document.getElementById("end_time").style.display = "block";
            if (is_dual_button) {
                document.getElementById("is_dual").style.display = "block";
            }
        }
    };
    let AddDualTime = ()=>{
        // set the minus icon for the timing
        SetDualTime("0");
        setFormDualFrmValues({
            ...formDualFrmValues,
            ["is_dual"]: 1
        });
        console.log("Add", dualTime);
    };
    let RemoveDualTime = ()=>{
        // set the plus icon for the timing
        SetDualTime("1");
        setFormDualFrmValues({
            ...formDualFrmValues,
            ["is_dual"]: 0
        });
        console.log("remove", dualTime);
    };
    //set the days array on click
    const handleDaysChange = function(e) {
        const target = e.target;
        var value = target.name;
        let newcheckedDays = checkedDays;
        if (target.checked) {
            newcheckedDays.push(value);
        } else {
            var index = newcheckedDays.indexOf(value);
            if (index !== -1) {
                newcheckedDays.splice(index, 1);
            }
        }
        setCheckedDays(newcheckedDays);
        setFormError({
            formError
        }) //remove errors
        ;
        setFormDualFrmValues({
            ...formDualFrmValues,
            ["selectedDays"]: newcheckedDays
        });
    };
    //set start time
    const handleStartTimeChange = function(e, is_dual) {
        const target = e.target;
        var startTime = target.value;
        if (is_dual == 1) {
            setFormDualFrmValues({
                ...formDualFrmValues,
                ["dual_start_time"]: startTime,
                ["is_dual"]: is_dual
            });
        } else {
            setFormDualFrmValues({
                ...formDualFrmValues,
                ["open_time"]: startTime,
                ["is_dual"]: is_dual
            });
        }
    };
    //set end time
    const handleEndTimeChange = function(e, is_dual) {
        const target = e.target;
        var endTime = target.value;
        if (is_dual == 1) {
            setFormDualFrmValues({
                ...formDualFrmValues,
                ["dual_end_time"]: endTime,
                ["is_dual"]: is_dual
            });
        } else {
            setFormDualFrmValues({
                ...formDualFrmValues,
                ["close_time"]: endTime,
                ["is_dual"]: is_dual
            });
        }
    };
    //submit the form
    const onSubmitDualFrm = ()=>{
        let getCheckedDays = formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.selectedDays;
        let getdaysArray = [
            ...daysArray
        ] //get selected day and time object
        ;
        if (getCheckedDays != undefined && (getCheckedDays === null || getCheckedDays === void 0 ? void 0 : getCheckedDays.length) > 0) {
            let is_open = (formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.switchOpen) ? "1" : "";
            let is_close = (formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.switchClose) ? "1" : "";
            let is_dual = (formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.is_dual) && (formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.is_dual) == "1" ? "1" : "0";
            //for set dual button variable
            var dual_start_time = "";
            var dual_end_time = "";
            //end
            if (is_open == "1" || is_close == "1") {
                var open_time = "";
                var close_time = "";
                is_dual = "0";
            } else {
                var open_time = (formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.open_time) ? formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.open_time : "";
                var close_time = (formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.close_time) ? formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.close_time : "";
                var dual_start_time = (formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.is_dual) && is_dual == "1" ? formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.dual_start_time : "";
                var dual_end_time = (formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.is_dual) && is_dual == "1" ? formDualFrmValues === null || formDualFrmValues === void 0 ? void 0 : formDualFrmValues.dual_end_time : "";
            }
            days.map((day, index)=>{
                if (getCheckedDays.includes(day)) {
                    //setup the dual start and end time
                    getdaysArray[index].is_dual = is_dual;
                    getdaysArray[index].dual_start_time = dual_start_time;
                    getdaysArray[index].dual_end_time = dual_end_time;
                    getdaysArray[index].open = is_open;
                    getdaysArray[index].close = is_close;
                    getdaysArray[index].start_time = open_time;
                    getdaysArray[index].end_time = close_time;
                }
            });
            mainDays(getdaysArray) //set days arrays on other detail page 'specify opening hours' section
            ;
            setFormDualFrmValues({
                selectedDays: [],
                switchOpen: false,
                switchClose: false,
                open_time: "10:00",
                close_time: "19:00",
                dual_start_time: "10:00",
                dual_end_time: "19:00",
                is_dual: 0
            });
            SetDualTime("1") //hide the dual time button
            ;
            setCheckedDays([]) //set checked array black        
            ;
            props.onHide() //close the modal
            ;
        } else {
            setFormError({
                ...formError,
                ["select_days"]: "Please select the days."
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        className: "signin-modal dialmenowModal",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
            className: " ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
                ref: formRef,
                id: "dualTimeModalFrm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                        onClick: props.onHide,
                        "aria-label": "Close modal",
                        className: "position-absolute top-0 end-0 mt-3 me-3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row mx-0 align-items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-12 p-sm-3 pt-sm-4 p-0 pt-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "h4 mb-4 text-center pt-1",
                                    children: "Select Days & Time"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                    xs: 12,
                                    className: `d-flex  justify-content-between  ${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().weekDays_selector)}`,
                                    children: days.map((name, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Check), {
                                            onChange: (e)=>handleDaysChange(e)
                                            ,
                                            variant: "outline-secondary",
                                            name: name,
                                            className: "rounded-circle px-0 mb-0",
                                            type: "checkbox",
                                            id: `weekday-${name}`,
                                            label: name
                                        }, index)
                                    )
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: "red"
                                        },
                                        children: formError.select_days !== undefined ? formError.select_days : ""
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {
                                    className: "mb-3 mt-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                            xs: 6,
                                            sm: "6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Check), {
                                                button: {
                                                    color: "primary"
                                                },
                                                type: "switch",
                                                label: "Open 24 Hours",
                                                className: `${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().checkToogle)}`,
                                                id: "open",
                                                onChange: (e)=>{
                                                    hideStartEndTimeChange(e.target.checked, "open");
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                            xs: 6,
                                            sm: "6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Check), {
                                                type: "switch",
                                                label: "Closed",
                                                id: "close",
                                                className: `${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().checkToogle)}`,
                                                onChange: (e)=>{
                                                    hideStartEndTimeChange(e.target.checked, "close");
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {
                                    className: "gy-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                            xs: 12,
                                            sm: "6",
                                            md: "4",
                                            id: "start_time",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                                    children: "Open Time"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                    type: "time",
                                                    defaultValue: "10:00",
                                                    "aria-describedby": "addon2",
                                                    id: "open_time",
                                                    className: `${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().TimeValue)}`,
                                                    onChange: (e)=>{
                                                        handleStartTimeChange(e, 0);
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                            xs: 12,
                                            sm: "6",
                                            md: "4",
                                            id: "end_time",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                                    children: "Close Time"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                    type: "time",
                                                    defaultValue: "19:00",
                                                    "aria-describedby": "addon2",
                                                    className: `${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().TimeValue)}`,
                                                    id: "close_time",
                                                    onChange: (e)=>{
                                                        handleEndTimeChange(e, 0);
                                                    }
                                                })
                                            ]
                                        }),
                                        is_dual_button ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                            xs: 12,
                                            sm: "2",
                                            id: "is_dual",
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
                                                    className: "w-100 d-md-block d-sm-block d-none",
                                                    children: "\xa0"
                                                }),
                                                dualTime == "1" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    className: ` ${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().AddMoreBtn)}`,
                                                    onClick: (e)=>{
                                                        AddDualTime();
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-plus"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    className: ` ${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().AddMoreBtn)}`,
                                                    onClick: (e)=>{
                                                        RemoveDualTime();
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-minus"
                                                    })
                                                })
                                            ]
                                        }) : null
                                    ]
                                }),
                                dualTime == "1" ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                            xs: 12,
                                            sm: "4",
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                type: "time",
                                                defaultValue: "10:00",
                                                "aria-describedby": "addon2",
                                                className: `${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().TimeValue)}`,
                                                id: "dual_start_time",
                                                onChange: (e)=>{
                                                    handleStartTimeChange(e, 1);
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                            xs: 12,
                                            sm: "4",
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
                                                type: "time",
                                                defaultValue: "19:00",
                                                "aria-describedby": "addon2",
                                                className: `${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().TimeValue)}`,
                                                id: "dual_end_time",
                                                onChange: (e)=>{
                                                    handleEndTimeChange(e, 1);
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                            xs: 12,
                                            sm: "10"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                            xs: 12,
                                            sm: "12",
                                            className: "text-end mt-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                className: `${(_styles_DualTime_module_css__WEBPACK_IMPORTED_MODULE_8___default().daySubmitBtn)}`,
                                                onClick: onSubmitDualFrm,
                                                size: "md",
                                                variant: "primary",
                                                children: "Submit"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DualTimeModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;