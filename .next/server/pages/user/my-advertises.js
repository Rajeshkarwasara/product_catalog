"use strict";
(() => {
var exports = {};
exports.id = 4116;
exports.ids = [4116];
exports.modules = {

/***/ 1866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ users_AdvertisementCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);
// EXTERNAL MODULE: ./styles/Myaccount.module.css
var Myaccount_module = __webpack_require__(7559);
var Myaccount_module_default = /*#__PURE__*/__webpack_require__.n(Myaccount_module);
// EXTERNAL MODULE: ./components/ImageLoader.js
var ImageLoader = __webpack_require__(5698);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "react-bootstrap/CloseButton"
var CloseButton_ = __webpack_require__(9044);
var CloseButton_default = /*#__PURE__*/__webpack_require__.n(CloseButton_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-bootstrap/Feedback"
const Feedback_namespaceObject = require("react-bootstrap/Feedback");
// EXTERNAL MODULE: ./components/ToastDismissible.js
var ToastDismissible = __webpack_require__(3198);
// EXTERNAL MODULE: ./helper/validation.js
var validation = __webpack_require__(261);
// EXTERNAL MODULE: external "react-google-recaptcha"
var external_react_google_recaptcha_ = __webpack_require__(5623);
var external_react_google_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_recaptcha_);
// EXTERNAL MODULE: ./lib/gcaptchVerify.js
var gcaptchVerify = __webpack_require__(8130);
// EXTERNAL MODULE: ./components/MessageModal.js
var MessageModal = __webpack_require__(4301);
// EXTERNAL MODULE: external "react-bootstrap/Spinner"
var Spinner_ = __webpack_require__(3742);
var Spinner_default = /*#__PURE__*/__webpack_require__.n(Spinner_);
;// CONCATENATED MODULE: ./components/partials/AddMoneyModal.js

















const AddMoneyModal = ({ csrfToken , onSwap , ads_id , package_type , name , email , phone , refreshAdsListings , pillButtons , ...props })=>{
    const { 0: formFields , 1: setFormFields  } = (0,external_react_.useState)({
        amount: "",
        ads_id: ads_id ? ads_id : "",
        packageType: package_type,
        userName: name ? name : "",
        userEmail: email ? email : "",
        userPhone: phone ? phone : ""
    });
    const { 0: formError , 1: setFormError  } = (0,external_react_.useState)({});
    const router = (0,router_.useRouter)();
    const { 0: messageType , 1: setMessageType  } = (0,external_react_.useState)("");
    const { 0: showToast , 1: setShowToast  } = (0,external_react_.useState)(false);
    const recaptchaRef = (0,external_react_.useRef)(); /// ref
    const { 0: error , 1: setError  } = (0,external_react_.useState)("");
    const { 0: popUpMsg , 1: setPopUpMsg  } = (0,external_react_.useState)("");
    const { 0: popupType , 1: setPopupType  } = (0,external_react_.useState)("success");
    const { 0: popupTitle , 1: setPopupTitle  } = (0,external_react_.useState)("Success");
    //defined the button disabled variable
    const { 0: isLoadingSpinner , 1: setLoadingSpinner  } = (0,external_react_.useState)(false);
    const formFieldChange = async (e)=>{
        console.log(formFields, "formFields formFields ........");
        e.preventDefault();
        formFields = {
            ...formFields,
            [e.target.name]: e.target.value
        };
        setFormFields(formFields);
        const formResponse = (0,validation/* addMoneyFormValidate */.Kh)(formFields);
        setFormError(formResponse);
    };
    const loadScript = (src)=>{
        return new Promise((resolve)=>{
            const script = document.createElement("script");
            script.src = src;
            script.onload = ()=>{
                resolve(true);
            };
            script.onerror = ()=>{
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };
    (0,external_react_.useEffect)(()=>{
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });
    const addMoneyFormSubmit = async (event)=>{
        await setShowToast(false);
        const formResponse = (0,validation/* addMoneyFormValidate */.Kh)(formFields);
        if (Object.entries(formResponse).length !== 0) {
            setFormError(formResponse);
            event.preventDefault();
            event.stopPropagation();
        } else {
            let captchVal = recaptchaRef.current.getValue();
            recaptchaRef.current.reset();
            if (captchVal) {
                var captchStatus = await (0,gcaptchVerify/* default */.Z)(captchVal);
                if (captchStatus) {
                    setLoadingSpinner(true);
                    razorpay_payment_gateway();
                } else {
                    setError("Invalid captcha.");
                    setMessageType("error");
                    setShowToast(true);
                }
            } else {
                setError("Invalid captcha.");
                setMessageType("error");
                setShowToast(true);
            }
        }
    };
    const razorpay_payment_gateway = async ()=>{
        const result = await fetch(process.env.BASE_URL + "/api/protect/razorpay", {
            method: "POST",
            body: JSON.stringify({
                plan_amount: formFields.amount
            })
        });
        const data1 = await result.json();
        if (data1.status == 200) {
            const options = {
                key: process.env.RAZORPAY_KEY_ID,
                currency: data1.data.currency,
                amount: data1.data.amount,
                name: formFields.userName,
                description: "Advertisement Plan Payment",
                image: process.env.BASE_URL + "/images/dialmenow_company_logo.png",
                order_id: data1.data.id,
                customer: {
                    name: formFields.userName,
                    email: formFields.userEmail,
                    contact: formFields.userPhone
                },
                notes: {
                    key: formFields.ads_id,
                    type: "ADS"
                },
                handler: async function(response) {
                    const data = {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ads_id: formFields.ads_id,
                            amount: formFields.amount,
                            packageType: package_type,
                            razorpay_payment_id: response === null || response === void 0 ? void 0 : response.razorpay_payment_id
                        })
                    };
                    const res = await fetch(`${process.env.BASE_URL}/api/protect/add-advertisement-amount`, data);
                    const resJson = await res.json();
                    if (resJson.status == 200) {
                        setLoadingSpinner(false);
                        props.onHide();
                        //open success modal popup            
                        setPopUpMsg("Advertisement amount added successfully!");
                        setPopupType("success");
                        setPopupTitle("Success");
                        //refresh the advertisement list
                        await refreshAdsListings();
                    // Router.router.push("/user/my-advertises")
                    } else {
                        return "";
                    }
                },
                prefill: {
                    name: formFields.userName,
                    email: formFields.userEmail,
                    contact: formFields.userPhone
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } else {
            setError("Something went wrong!");
            setMessageType("error");
            setShowToast(true);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (!props.show) {
            setFormFields({
                amount: "",
                ads_id: ads_id ? ads_id : "",
                userName: name ? name : "",
                userEmail: email ? email : "",
                userPhone: phone ? phone : ""
            });
            setShowToast(false);
            setError("");
            setMessageType("");
            setFormError({});
        }
    }, [
        props.show
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            popUpMsg && /*#__PURE__*/ jsx_runtime_.jsx(MessageModal/* default */.Z, {
                message: popUpMsg,
                title: popupTitle,
                status: true,
                setMessage: setPopUpMsg,
                type: popupType
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                centered: true,
                ...props,
                className: "signin-modal",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                    className: "p-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CloseButton_default()), {
                            onClick: props.onHide,
                            "aria-label": "Close modal",
                            className: "position-absolute top-0 end-0 mt-3 me-3"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row mx-0 align-items-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-12 px-4 pt-2 pb-4 px-sm-5 pt-md-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "blog-title text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-4 mt-3 mt-sm-0",
                                            children: "Please Add Money"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()), {
                                        id: "user-partner-add",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "hidden",
                                                name: "csrfToken",
                                                defaultValue: csrfToken
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                                controlId: "ps-name",
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Label, {
                                                        children: [
                                                            "Amount",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-danger",
                                                                children: "*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                                        type: "text",
                                                        placeholder: "Enter amount",
                                                        value: formFields.amount,
                                                        name: "amount",
                                                        onChange: formFieldChange,
                                                        className: `form-control ${formError.amount !== undefined ? "is-invalid" : ""}`,
                                                        required: true
                                                    }),
                                                    formError.amount !== undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Control.Feedback, {
                                                        type: "invalid",
                                                        tooltip: true,
                                                        children: [
                                                            " ",
                                                            formError.amount
                                                        ]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_google_recaptcha_default()), {
                                                ref: recaptchaRef,
                                                sitekey: "6LfZCy4jAAAAAKu0naozAJfLzSYZ1SjhhOTynzsQ",
                                                size: "normal"
                                            }),
                                            isLoadingSpinner ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                                variant: "primary",
                                                className: "btn-md ConfirmDelete",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Spinner_default()), {
                                                        animation: "border",
                                                        size: "sm",
                                                        role: "status",
                                                        className: "me-2"
                                                    }),
                                                    "wait..."
                                                ]
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                type: "button",
                                                size: "lg",
                                                variant: `primary ${pillButtons ? " " : ""} w-100 mt-3`,
                                                onClick: addMoneyFormSubmit,
                                                children: "Proceed to payment"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-12 px-8 pt-4 pb-8 px-sm-10 pb-sm-10 pt-md-10",
                                        children: showToast && /*#__PURE__*/ jsx_runtime_.jsx(ToastDismissible/* default */.Z, {
                                            showToast: showToast,
                                            message: "",
                                            messageType: messageType,
                                            title: error
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const partials_AddMoneyModal = (AddMoneyModal);

;// CONCATENATED MODULE: ./components/advertiseWithUs/users/AdvertisementCard.js










const CardImage = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 1634).then(__webpack_require__.bind(__webpack_require__, 1634))
, {
    loadableGenerated: {
        modules: [
            "../components/advertiseWithUs/users/AdvertisementCard.js -> " + "../../partials/CardImageFeatured"
        ]
    }
});

const AdvertisementCard = ({ ads_detail , images , href , title , category , createdDate , price , badges , wishlistButton ="" , dropdown , footer , horizontal , light , className , package_name , per_click_price , per_impression_price , stop_start , ads_status , RemainingAmount , no_of_click , no_of_views , ads_id , package_type , handlePlanUpgradeShow , refreshAdsListings , setPlanDetailValue , ...props })=>{
    console.log("package_type---adv-card--", package_type);
    // Add money modal
    const { 0: addMoneyShow , 1: setAddMoneyShow  } = (0,external_react_.useState)(false);
    const handleAddMoneyClose = ()=>setAddMoneyShow(false)
    ;
    const handleAddMoneyShow = ()=>setAddMoneyShow(true)
    ;
    // ads start and stop
    const { 0: AdsStop , 1: setAdsStop  } = (0,external_react_.useState)(stop_start);
    const horizontalClass = horizontal ? " card-horizontal" : "", extraClass = className ? ` ${className}` : "";
    let StopAdsChange = async (openHoursChecked)=>{
        console.log(openHoursChecked, "openHoursChecked..........");
        if (openHoursChecked == true) {
            await setAdsStop(1);
        } else {
            await setAdsStop(0);
        }
        const result = await fetch(process.env.BASE_URL + "/api/protect/ads-stop", {
            method: "POST",
            body: JSON.stringify({
                ads_id: ads_id,
                status: AdsStop
            })
        });
        const data = await result.json();
        if (data.status == 200) {}
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(partials_AddMoneyModal, {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: addMoneyShow,
                onHide: handleAddMoneyClose,
                onSwap: handleAddMoneyShow,
                ads_id: ads_id,
                package_type: package_type,
                name: ads_detail.userName,
                email: ads_detail.userEmail,
                phone: ads_detail.userPhone,
                refreshAdsListings: refreshAdsListings
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Myaccount_module_default()).DisplayAdvertisementMain}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ...props,
                        className: light ? ` ${horizontalClass}` : ` ${horizontalClass}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-sm-flex d-block align-items-center",
                            children: [
                                images && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: images.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `position-relative overflow-hidden ${(Myaccount_module_default()).BusinessDetailsHeroLeft + " " + (Myaccount_module_default()).AdvertisementBanner}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ImageLoader/* default */.Z, {
                                            src: images,
                                            alt: "",
                                            quality: 100,
                                            layout: "fill",
                                            objectFit: "contain",
                                            className: "position-relative p-1 rounded",
                                            loading: "eager"
                                        })
                                    }) : null
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `position-relative  ${(Myaccount_module_default()).AdvertisementRight}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/user/edit-advertise/${ads_id}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link p-0",
                                                children: title
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Myaccount_module_default()).AdvertisementRightDate}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: createdDate
                                            })
                                        }),
                                        horizontal && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: footer && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `${(Myaccount_module_default()).AdvertisementRightBottom} ${light ? " border-light" : ""} `,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "row",
                                                        children: footer.map((item, indx)=>{
                                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "col",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "",
                                                                        children: item[0]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "",
                                                                        children: item[1]
                                                                    })
                                                                ]
                                                            }, indx);
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(Myaccount_module_default()).AdvertisementPlanName}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-sm-flex d-block",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `${(Myaccount_module_default()).AdvertisementPlanNameLeft}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                children: [
                                                    "Active Plan - ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: package_name
                                                    })
                                                ]
                                            }),
                                            ads_status != "Expaired" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "mb-2",
                                                children: [
                                                    "You have only \u20B9",
                                                    RemainingAmount,
                                                    " remaining. ",
                                                    ads_detail.package_type == "1" || ads_detail.package_type == "2" ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-decoration-underline",
                                                        href: "#!",
                                                        onClick: handleAddMoneyShow,
                                                        children: "ADD MONEY"
                                                    }) : null,
                                                    " "
                                                ]
                                            }) : null
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `${(Myaccount_module_default()).AdvertisementPlanNameRight}`,
                                        children: ads_detail.package_type == "1" || ads_detail.package_type == "2" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: ads_status == "Published" ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                size: "sm",
                                                className: `upsale-button ${(Myaccount_module_default()).NewPlanBtn}`,
                                                onClick: ()=>{
                                                    ads_detail.remaining_amount = RemainingAmount;
                                                    handlePlanUpgradeShow(ads_detail);
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Plan Upgrade"
                                                })
                                            }) : null
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: ads_detail.remaining_days < 15 && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                size: "sm",
                                                className: `upsale-button ${(Myaccount_module_default()).NewPlanBtn}`,
                                                onClick: ()=>{
                                                    ads_detail.remaining_amount = RemainingAmount;
                                                    handlePlanUpgradeShow(ads_detail);
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Plan Upgrade"
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            ads_detail.package_type == "1" || ads_detail.package_type == "2" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `${(Myaccount_module_default()).ClickImpressions}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                                            children: [
                                                per_click_price ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4 col-md-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: no_of_click == 0 ? "0" : no_of_click
                                                                    }),
                                                                    " / Clicks "
                                                                ]
                                                            }),
                                                            "(price per click \u20B9",
                                                            per_click_price,
                                                            ")"
                                                        ]
                                                    })
                                                }) : null,
                                                per_impression_price ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6 col-md-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: no_of_views == 0 ? "0" : no_of_views
                                                                    }),
                                                                    " / Impressions "
                                                                ]
                                                            }),
                                                            "(price per impression \u20B9",
                                                            per_impression_price,
                                                            ")"
                                                        ]
                                                    })
                                                }) : null
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `${(Myaccount_module_default()).DispalyAdSwitch}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                            type: "switch",
                                            id: "switch-2",
                                            label: "Stop your ads",
                                            className: "d-inline-block",
                                            defaultChecked: `${stop_start == "1" ? "checked" : ""}`,
                                            onClick: (e)=>{
                                                StopAdsChange(e.target.checked);
                                            }
                                        })
                                    })
                                ]
                            }) : null
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const users_AdvertisementCard = (AdvertisementCard);


/***/ }),

/***/ 8130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ gVerify)
/* harmony export */ });
async function gVerify(token) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "token": token
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/captch-verify`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if (resJson.status == 200) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
};


/***/ }),

/***/ 4121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1636);
/* harmony import */ var _components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6439);
/* harmony import */ var _components_advertiseWithUs_users_AdvertisementCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1866);
/* harmony import */ var _components_advertiseWithUs_users_UpgradeAdsPlan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8621);
/* harmony import */ var _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(348);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9270);
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5698);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4692);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7559);
/* harmony import */ var _styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__, _components_advertiseWithUs_users_UpgradeAdsPlan__WEBPACK_IMPORTED_MODULE_8__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_9__]);
([_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__, _components_advertiseWithUs_users_UpgradeAdsPlan__WEBPACK_IMPORTED_MODULE_8__, _front_methods_Paginations__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













// import styles from '../../styles/Advertise.module.css'




const MyAdvertises = ({ csrfToken , ...props })=>{
    //console.log('=========props=========',props)
    // set the variable to load the plan upgrade module
    const { 0: planUpgradeShow , 1: setPlanUpgradeShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentPlanDetailValue , 1: setCurrentPlanDetailValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        daysHourslist: [
            {
                "value": "Mon",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Tue",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Wed",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Thu",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Fri",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Sat",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            },
            {
                "value": "Sun",
                "open": "",
                "close": "",
                "start_time": "10:00",
                "end_time": "19:00",
                "is_dual": "0",
                "dual_start_time": "",
                "dual_end_time": ""
            }
        ],
        per_day_amount: ""
    });
    const { 0: packages , 1: setPackages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { businessRecords , isLoadingMore , isReachingEnd , isRefreshing , size , setSize , mutate  } = (0,_front_methods_Paginations__WEBPACK_IMPORTED_MODULE_9__/* .usePagination */ .h)("/api/protect/my-advertises");
    //console.log('businessRecords====>>>>', businessRecords)
    //define the blank step variable
    const { 0: step , 1: setStep  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    //const businessRecords = []
    const { 0: empDetails , 1: setEmpDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const updateUserDetails = (data)=>{
        setEmpDetails(data);
    };
    let handlePlanUpgradeShow = async (ads_detail)=>{
        setPlanUpgradeShow(true);
        var updateFormValues = {
            ...currentPlanDetailValue,
            ads_detail,
            ["redirect_url_after_payment"]: "user/my-advertises"
        };
        setCurrentPlanDetailValue(updateFormValues);
        const getAdsPackage = await fetch(process.env.BASE_URL + "/api/protect/get-ads-package", {
            method: "POST",
            body: JSON.stringify({
                city_id: ads_detail.city_id,
                package_id: ads_detail.package_id,
                package_type: ads_detail.package_type
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const areaslisting = await getAdsPackage.json();
        setPackages(areaslisting.data.records);
        //scroll top to particular id
        window.scrollTo({
            top: document.getElementById("subscription-plan").offsetTop - 60,
            behavior: "smooth"
        });
    };
    const refreshAdsListings = async ()=>{
        //refresh the listing
        await mutate();
    };
    var ref;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CityGuidePageLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        pageTitle: "Advertises",
        activeNav: "Account",
        updateUser: updateUserDetails,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_AccountLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            userData: empDetails,
            accountPageTitle: "Advertises",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "shadow-none border-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default().Body), {
                    className: "",
                    children: planUpgradeShow ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_advertiseWithUs_users_UpgradeAdsPlan__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        packages: packages,
                        currentPlanDetailValue: currentPlanDetailValue,
                        setCurrentPlanDetailValue: setCurrentPlanDetailValue,
                        csrfToken: csrfToken,
                        setStep: setStep,
                        ...props
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex justify-content-between align-items-center ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().ProfileHeading)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "h3 mb-0 ",
                                        children: "Display Advertisesment"
                                    }),
                                    (businessRecords === null || businessRecords === void 0 ? void 0 : businessRecords.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "btn-group ms-n2 ms-sm-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `${process.env.BASE_URL}/advertise-with-us/detail`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "btn btn-primary",
                                                children: "Start advertising"
                                            })
                                        })
                                    })
                                ]
                            }),
                            businessRecords.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `d-sm-flex d-block align-items-center justify-content-between ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoAdvertiseTop)}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().feedbackIcon)}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                        src: "/images/MyAccount/NoAdvertisesImg.svg",
                                                        width: 85,
                                                        height: 86,
                                                        alt: "Square image"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoAdvertiseTopText)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-0",
                                                            children: "No Advertises yet"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mb-0",
                                                            children: "No Advertise has been made yet."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().StartAdvertising)}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "btn-group ms-sm-0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `${process.env.BASE_URL}/advertise-with-us/detail`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "btn btn-primary",
                                                        children: "Start advertising"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
                                next: ()=>setSize(size + 1)
                                ,
                                hasMore: !isReachingEnd,
                                loader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        animation: "border",
                                        role: "status",
                                        className: " position-relative overflow-hidden",
                                        style: {
                                            width: "1rem",
                                            height: "1rem"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Loading..."
                                        })
                                    })
                                }),
                                endMessage: "",
                                dataLength: (ref = businessRecords === null || businessRecords === void 0 ? void 0 : businessRecords.length) !== null && ref !== void 0 ? ref : 0,
                                children: businessRecords.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: businessRecords.map((property, indx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_advertiseWithUs_users_AdvertisementCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            ads_detail: property,
                                            images: `${property.imagePath}`,
                                            title: property.business_name,
                                            createdDate: property.date,
                                            price: `₹${property.payment}`,
                                            package_name: property.package_name,
                                            per_click_price: property.per_click_price,
                                            per_impression_price: property.per_impression_price,
                                            per_day_amount: property.per_day_amount,
                                            stop_start: property.stop_start == "Active" ? "0" : "1",
                                            ads_status: property.ads_status,
                                            RemainingAmount: property.RemainingAmount,
                                            no_of_click: property.no_of_click,
                                            no_of_views: property.no_of_views,
                                            ads_id: property.ads_id,
                                            package_type: property.package_type,
                                            handlePlanUpgradeShow: handlePlanUpgradeShow,
                                            // setPlanUpgradeShow={setPlanUpgradeShow}
                                            refreshAdsListings: refreshAdsListings,
                                            footer: [
                                                [
                                                    "Category",
                                                    property.subcatgoeryName
                                                ],
                                                [
                                                    "City",
                                                    property.city_name
                                                ],
                                                [
                                                    "Status",
                                                    property.ads_status
                                                ]
                                            ],
                                            horizontal: true,
                                            className: indx === businessRecords.length - 1 ? "" : "mb-4"
                                        }, indx)
                                    )
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: ``,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefits)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: "Create & Manage Your Ad With Ease"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    as: "ul",
                                                    className: "d-block",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: " Pay per click "
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Customize your ad "
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Create your ad goal"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Define your target audience"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Set a budget that works for you"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Track your results"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefits) + " " + (_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().AdBenefits)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: "Benefits"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    as: "ul",
                                                    className: "d-block",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "The right ads for your audience"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "You\u2019re in control"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_14___default().Item), {
                                                            as: "li",
                                                            className: `border-0 ${(_styles_Myaccount_module_css__WEBPACK_IMPORTED_MODULE_16___default().NoFeedbackBenefitsLi)}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-check-circle"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Single Image ads"
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAdvertises);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

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

/***/ 1553:
/***/ ((module) => {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ 972:
/***/ ((module) => {

module.exports = require("react-bootstrap/Toast");

/***/ }),

/***/ 871:
/***/ ((module) => {

module.exports = require("react-bootstrap/ToastContainer");

/***/ }),

/***/ 4013:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tooltip");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 6804:
/***/ ((module) => {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ 5623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

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

/***/ 1448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,1486,9807,1636,261,4301,8176,7559,3198,467,6439,767,8633,9749,8621], () => (__webpack_exec__(4121)));
module.exports = __webpack_exports__;

})();