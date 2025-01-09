"use strict";
exports.id = 1636;
exports.ids = [1636];
exports.modules = {

/***/ 5698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const ImageLoader = (props)=>{
    const width = props.width, height = props.height, alt = props.alt, placeholder = props.placeholder, light = props.light;
    const shimmer = (w, h)=>`
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="${light ? "#352e44" : "#efedf0"}" offset="20%" />
          <stop stop-color="${light ? "#1f1b2d" : "#d8d7da"}" offset="50%" />
          <stop stop-color="${light ? "#352e44" : "#efedf0"}" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="${light ? "#352e44" : "#efedf0"}" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`
    ;
    const toBase64 = (str)=> true ? Buffer.from(str).toString("base64") : 0
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...props,
        placeholder: placeholder === false ? "empty" : "blur",
        blurDataURL: `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`,
        alt: alt
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageLoader);


/***/ }),

/***/ 9270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shimmer_Shimmer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9807);


const Loader = ({ Type =0  })=>{
    if (Type == 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shimmer_Shimmer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "loader",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loader-in",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `${process.env.BASE_URL}/loader-img.gif`,
                    alt: "loader-img"
                })
            })
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 5576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StickyNavbar = ({ children , className , ...props })=>{
    const { 0: sticky , 1: setSticky  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleSticky = (e)=>{
            if (e.currentTarget.pageYOffset > 20) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        if (window.pageYOffset > 20) {
            setSticky(true);
        } else {
            setSticky(false);
        }
        window.addEventListener("scroll", handleSticky);
        return ()=>window.removeEventListener("scroll", handleSticky)
        ;
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        ...props,
        className: `${className ? className : ""}${sticky ? " navbar-stuck" : ""}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickyNavbar);


/***/ }),

/***/ 1636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4934);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8582);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _StickyNavbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5576);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5698);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5941);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9270);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6865);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _partials_PushNotificationLayout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2722);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_11__, _partials_PushNotificationLayout__WEBPACK_IMPORTED_MODULE_17__]);
([swr__WEBPACK_IMPORTED_MODULE_11__, _partials_PushNotificationLayout__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ForgotPass = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 3930).then(__webpack_require__.bind(__webpack_require__, 3930))
, {
    loadableGenerated: {
        modules: [
            "../components/partials/CityGuidePageLayout.js -> " + "../partials/ForgotPass"
        ]
    }
});
const VerifyOtp = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 7936).then(__webpack_require__.bind(__webpack_require__, 7936))
, {
    loadableGenerated: {
        modules: [
            "../components/partials/CityGuidePageLayout.js -> " + "../partials/VerifyOtp"
        ]
    }
});
const Footer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(261), __webpack_require__.e(8176), __webpack_require__.e(6396), __webpack_require__.e(9500), __webpack_require__.e(9488)]).then(__webpack_require__.bind(__webpack_require__, 9488))
, {
    loadableGenerated: {
        modules: [
            "../components/partials/CityGuidePageLayout.js -> " + "../partials/Footer"
        ]
    }
});






const ConfirmationModal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 467).then(__webpack_require__.bind(__webpack_require__, 467))
, {
    loadableGenerated: {
        modules: [
            "../components/partials/CityGuidePageLayout.js -> " + "./ConfirmationModal"
        ]
    }
});

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
const ShareOptionModal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 4074).then(__webpack_require__.bind(__webpack_require__, 4074))
, {
    loadableGenerated: {
        modules: [
            "../components/partials/CityGuidePageLayout.js -> " + "../listings/modals/ShareOptionModal"
        ]
    }
});
const userPaths = [
    "/",
    "/city/[...city]"
];
const SignUpModalLight = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(261), __webpack_require__.e(7840), __webpack_require__.e(4178)]).then(__webpack_require__.bind(__webpack_require__, 4178))
, {
    loadableGenerated: {
        modules: [
            "../components/partials/CityGuidePageLayout.js -> " + "../partials/SignUpModalLight"
        ]
    }
});
const SignInModalLight = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(7936), __webpack_require__.e(7840), __webpack_require__.e(554)]).then(__webpack_require__.bind(__webpack_require__, 554))
, {
    loadableGenerated: {
        modules: [
            "../components/partials/CityGuidePageLayout.js -> " + "../partials/SignInModalLight"
        ]
    }
});
const CityGuidePageLayout = (props)=>{
    // Media query for displaying Offcanvas on screens larger than 991px
    const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_16__.useMediaQuery)({
        query: "(max-width: 991.98px)"
    });
    const routerUse = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const currentRoute = routerUse.route;
    //console.log("_____________Current Route------", currentRoute)
    const { 0: scrollCls , 1: setScrollCls  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: toggleCls , 1: setToggleCls  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: userImage , 1: setUserImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: offcanvaShow , 1: setOffcanvaShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const offCanvaHandle = ()=>setOffcanvaShow(false)
    ;
    const offCanvaTogg = ()=>setOffcanvaShow((pre)=>!pre
        )
    ;
    const { 0: shareOptionShow , 1: setShareOptionShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const shareOptionShowHide = ()=>{
        // ShareOption popup hide
        // console.log("Caaling")
        setShareOptionShow(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleWindowScroll = (event)=>{
            if (window.scrollY > 50 && userPaths.indexOf(currentRoute) < 0) {
                setScrollCls("headTop");
            } else if (userPaths.indexOf(currentRoute) < 0) {
                setScrollCls("");
            }
        };
        window.addEventListener("scroll", handleWindowScroll, {
            passive: true
        });
        window.addEventListener("touchmove", handleWindowScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleWindowScroll);
            window.removeEventListener("touchmove", handleWindowScroll);
        };
    }, [
        currentRoute,
        userPaths
    ]);
    const { data: session , status: status1  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_13__.useSession)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        /*****Location Popup*******/ if (navigator === null || navigator === void 0 ? void 0 : navigator.geolocation) {
            navigator.permissions.query({
                name: "geolocation"
            }).then(function(resultPer) {
                if (resultPer.state == "prompt") {
                    navigator === null || navigator === void 0 ? void 0 : navigator.geolocation.getCurrentPosition(showPosition, geoError);
                } else if (resultPer.state == "granted") {
                //console.log(navigator?.geolocation)
                }
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(//call on every refresh and session change and user details changes
    (a)=>{
        //console.log("session is      ",session)
        /**Google Popup
       */ window.onload = function() {
            google === null || google === void 0 ? void 0 : google.accounts.id.initialize({
                client_id: "626769812922-huvhs8k0rvplb7ia8g0eqnaktn7b68ac.apps.googleusercontent.com",
                callback: loginWithPopup
            });
            // console.log(session)
            if (session === null) {
                google === null || google === void 0 ? void 0 : google.accounts.id.prompt(); // also display the One Tap dialog
            }
        }; //end wind load
    //mutate(`/api/protect/user-details`,null,{revalidate:false})
    }, [
        session
    ]);
    const showNotification = ()=>{
        // console.log(document.visibilityState)
        //if (document.visibilityState === "visible") {
        //  return;
        //}
        /*const messaging = getMessaging();
    onMessage((message) => {
      console.log("message received----",message)
      var title = message?.notification?.title || "Dialmenow";
      var icon = "images/logo/logo.svg"
      var body = message?.notification?.body || "New Notification received"
      var notification = new Notification(title, { body: body, icon: icon });
      //console.log(notification)

      notification.onclick = () => {
        notification.close();
        window.parent.focus();
      }
    });*/ const messaging = firebase.messaging();
        messaging.onMessage((message)=>{
            console.log("Final Message", message);
        });
    };
    const loginWithPopup = (response)=>{
        //console.log("Encoded JWT ID token: " + response.credential);
        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_13__.signIn)("google");
    };
    const geoError = (position)=>{
    // console.log(position)
    };
    const showPosition = (position)=>{
        // get lat long
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var alreadyDetails = window.localStorage.getItem("hFilterItem");
        if (!alreadyDetails) {
            displayLocation(lat, lon);
        }
    };
    const displayLocation = (latitude, longitude)=>{
        try {
            var geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(latitude, longitude);
            geocoder === null || geocoder === void 0 ? void 0 : geocoder.geocode({
                latLng: latlng
            }, function(results, status) {
                if (status == (google === null || google === void 0 ? void 0 : google.maps.GeocoderStatus.OK)) {
                    if (results[0]) {
                        var ref;
                        var add = (ref = results[0]) === null || ref === void 0 ? void 0 : ref.formatted_address;
                        var addComp = results[0].address_components;
                        var pinCodeJSON = addComp.find((v)=>v.types.includes("postal_code")
                        );
                        var pinCode = (pinCodeJSON === null || pinCodeJSON === void 0 ? void 0 : pinCodeJSON.long_name) || "";
                        //console.log(addComp)
                        var stateJSON = addComp.find((v)=>v.types.includes("administrative_area_level_1")
                        );
                        var stateName = (stateJSON === null || stateJSON === void 0 ? void 0 : stateJSON.long_name) || "";
                        var cityJSON = addComp.find((v)=>v.types.includes("administrative_area_level_2")
                        );
                        var cityName = (cityJSON === null || cityJSON === void 0 ? void 0 : cityJSON.long_name) || "";
                        var areaJSON = addComp.find((v)=>v.types.includes("sublocality_level_1")
                        );
                        var areaName = (areaJSON === null || areaJSON === void 0 ? void 0 : areaJSON.long_name) || "";
                        window.localStorage.setItem("hFilterItem", JSON.stringify({
                            state: stateName,
                            city: cityName,
                            area: areaName,
                            pincode: pinCode
                        }));
                    } else {
                    //console.log("address not found")
                    }
                } else {
                //console.log("Geocoder failed due to: " + status)
                }
            });
        } catch (e) {
            console.log("Geo Location Error");
        }
    };
    //const { mutate } = useSWRConfig()
    const { 0: userDetail , 1: setUserDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: userRefreshed , 1: setUserRefreshed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const swrUserDetails = "";
    // Sign in modal
    const { 0: signinShow , 1: setSigninShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSigninClose = ()=>setSigninShow(false)
    ;
    const handleSigninShow = ()=>setSigninShow(true)
    ;
    // Sign up modal
    const { 0: signupShow , 1: setSignupShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSignupClose = ()=>setSignupShow(false)
    ;
    const handleSignupShow = ()=>setSignupShow(true)
    ;
    //forgot password
    const { 0: forgotShow , 1: setForgotShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleForgotClose = ()=>setForgotShow(false)
    ;
    const handleForgotShow = ()=>setForgotShow(true)
    ;
    const fetcher = async (url)=>{
        try {
            var ref;
            var resFet = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    id: ""
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            var userData = await resFet.json();
            if ((userData === null || userData === void 0 ? void 0 : userData.status) == "301" && (session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.id)) {
                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_13__.signOut)("user-login", {
                    redirect: false
                });
            }
            return userData;
        } catch (err) {
            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_13__.signOut)("user-login", {
                redirect: false
            });
            console.log("Err  ", err);
        }
    };
    const { data: userLogDetils , error , mutate ,  } = (0,swr__WEBPACK_IMPORTED_MODULE_11__["default"])(`/api/protect/user-details`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: true
    });
    //this is update on every changes regarding the user
    if (userLogDetils) {
        if (userLogDetils.data) {
            //console.log("SWR called")
            //console.log(data.data)
            swrUserDetails = userLogDetils.data;
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(//call on every refresh and session change and user details changes
    (a)=>{
        if (status1 == "loading") {}
        if (session === null || status1 == "unauthenticated") {
            props = {
                ...props,
                ["userLoggedIn"]: false
            };
            setUserDetail("");
            if (currentRoute.split("/").indexOf("user") == 0 || currentRoute.split("/").indexOf("user") == 1) {
                next_router__WEBPACK_IMPORTED_MODULE_12___default().router.push("/");
            }
        } else if (session) {
            if (!(swrUserDetails === null || swrUserDetails === void 0 ? void 0 : swrUserDetails.is_verified_mob)) {
                setOtpShow(true);
            }
            props = {
                ...props,
                ["userLoggedIn"]: true
            };
            if (swrUserDetails) {
                setUserDetail(swrUserDetails);
                if (props.updateUser) {
                    props.updateUser(swrUserDetails);
                }
            } else {
                setUserDetail(session.user);
                if (props.updateUser) {
                    props.updateUser(session.user);
                }
            }
        }
    }, [
        session,
        swrUserDetails === null || swrUserDetails === void 0 ? void 0 : swrUserDetails.is_verified_mob
    ]);
    //[session, swrUserDetails.is_verified_mob, swrUserDetails.image]
    // Swap modals
    const handleSignInToUp = (e)=>{
        e.preventDefault();
        setSigninShow(false);
        setSignupShow(true);
    };
    const handleForgotSignInToUp = (e)=>{
        e.preventDefault();
        setSigninShow(true);
        setForgotShow(false);
    };
    const handleForgotInToUp = (e)=>{
        e.preventDefault();
        setSigninShow(false);
        setForgotShow(true);
    };
    const handleSignUpToIn = (e)=>{
        e.preventDefault();
        setSigninShow(true);
        setSignupShow(false);
    };
    // mobilesidebar click sidebar
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClose = ()=>setShow(false)
    ;
    const handleShow = ()=>setShow(true)
    ;
    //verify OTP phone
    const { 0: otpShow , 1: setOtpShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOTPVerify = ()=>{
        mutate("/api/protect/user-details");
        setOtpShow(false); //call this after verify Phone
    };
    if (userDetail && !userDetail.is_verified_mob && !otpShow) {
        setOtpShow(true);
    }
    //this is running on every component loads
    if (status1 == "loading") {
    //show loader
    }
    if (session === null || status1 == "unauthenticated") {
        props = {
            ...props,
            ["userLoggedIn"]: false
        };
        if (userPaths.indexOf(currentRoute) >= 0) {
        //Router.router.push("/")
        }
    } else if (session) {
        //console.log("SESSION First-------------------")
        props = {
            ...props,
            ["userLoggedIn"]: true
        };
    }
    const setVerifiedUser = (status)=>{};
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if ((userDetail === null || userDetail === void 0 ? void 0 : userDetail.image) != undefined && (userDetail === null || userDetail === void 0 ? void 0 : userDetail.image) != "") {
            setUserImage(userDetail === null || userDetail === void 0 ? void 0 : userDetail.image);
        }
    }, [
        userDetail === null || userDetail === void 0 ? void 0 : userDetail.image
    ]);
    const { 0: confirmModalHideShow , 1: setConfirmModalHideShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleConfirmModalClose = ()=>setConfirmModalHideShow(false)
    ;
    const handleConfirmModalShow = ()=>setConfirmModalHideShow(true)
    ;
    const logoutUser = (e)=>{
        // e.preventDefault();
        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_13__.signOut)("user-login", {
            redirect: false
        });
    //Router.router.push("/")
    };
    //confirm modal for logout
    const confirmLogout = ()=>{
        setConfirmModalHideShow(true);
    };
    //handle blog click event
    const handleBlogClick = (e)=>{
        e.preventDefault();
        const newWindow = window.open();
        newWindow.opener = null;
        newWindow.location = "https://blog.dialmenow.in/";
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            status1 == "loading" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
            confirmModalHideShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmationModal, {
                centered: true,
                size: "lg",
                pillButtons: true,
                iconPath: "/images/MyAccount/ProfileMsgIcon.svg",
                show: confirmModalHideShow,
                onHide: handleConfirmModalClose,
                onSwap: handleConfirmModalShow,
                confirmActionFun: logoutUser,
                recordID: "1",
                messageBody: "Are you sure want to log out? All your unsaved data will be lost.",
                confirmBtnText: "Yes",
                cancelBtnText: "No"
            }),
            userDetail && !(userDetail === null || userDetail === void 0 ? void 0 : userDetail.is_verified_mob) && session ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VerifyOtp, {
                centered: true,
                size: "",
                pillButtons: true,
                setVerifiedUser: setVerifiedUser,
                phoneNumber: userDetail.phone,
                show: otpShow,
                userID: userDetail.id,
                titleMsg: "Verify Phone Number",
                removeClose: false,
                reLoadSess: true,
                onHide: handleOTPVerify
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ForgotPass, {
                centered: true,
                size: "",
                pillButtons: true,
                titleMsg: "Forgot Password",
                show: forgotShow,
                onHide: handleForgotClose,
                onSwap: handleForgotSignInToUp
            }),
            !props.userLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SignInModalLight, {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: signinShow,
                onHide: handleSigninClose,
                onSwap: handleSignInToUp,
                onSwapForgot: handleForgotInToUp
            }),
            !props.userLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SignUpModalLight, {
                centered: true,
                size: "lg",
                pillButtons: true,
                show: signupShow,
                onHide: handleSignupClose,
                onSwap: handleSignUpToIn
            }),
            shareOptionShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareOptionModal, {
                show: shareOptionShow,
                onHide: shareOptionShowHide,
                SocialButtonCls: "" //{styles.SocialButtonCSS}
                ,
                SocialButtonLineCls: "" //{styles.SocialButtonLine}
                ,
                shareUrl: process.env.BASE_URL,
                shareTags: "#dialmenow,#localbusiness,#businessdirectory,#businesslisting, #localsearch,#phonenumber, #reviews,#yellowpagesJaipur, #yellowpages, #businessDirectoryJaipur, #LocalBusinessDirectory, #DialmenowYellowPages",
                shareTitle: "Need to find a local business? Check out our website for all the information you need! Dialmenow.in | Jaipur Yellow Pages | Rajasthan Business Directory Online | DialMeNow"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "page-wrapper",
                id: "vk-id",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default()), {
                        as: _StickyNavbar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                        expand: "lg",
                        className: `${toggleCls} ${props.navbarExtraClass ? ` ${props.navbarExtraClass}` : ""} ${scrollCls} ${userPaths.indexOf(currentRoute) >= 0 ? "fixed-top" : ""}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/",
                                    passHref: true,
                                    prefetch: false,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default().Brand), {
                                        className: "me-3 me-xl-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            className: "webLogo",
                                            priority: true,
                                            src: "/images/logo/logo.svg",
                                            width: 252,
                                            height: 70,
                                            alt: "Dailmenow"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default().Toggle), {
                                    className: "ms-auto",
                                    onClick: ()=>{
                                        setToggleCls((pre)=>pre != "" ? "" : "navBarToggleActive"
                                        );
                                        offCanvaTogg();
                                    }
                                }),
                                props.userLoggedIn ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    className: "d-none d-lg-block order-lg-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex align-items-center ProfileHead",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/user/account-info",
                                                    passHref: true,
                                                    prefetch: false,
                                                    "aria-label": "Profile",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Toggle), {
                                                        as: (react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link),
                                                        className: "dropdown-toggle-flush d-flex py-1 px-0",
                                                        style: {
                                                            width: "40px"
                                                        },
                                                        children: userImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            src: userImage ? userImage : "/images/no-image.png",
                                                            width: 80,
                                                            height: 80,
                                                            className: "rounded-circle",
                                                            unoptimized: true,
                                                            //layout="responsive"
                                                            alt: userDetail.name
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "userProfileHead",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: userDetail.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-chevron-down"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Menu), {
                                            renderOnMount: true,
                                            align: "end",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex align-items-start border-bottom px-3 py-1 mb-2",
                                                    style: {
                                                        width: "16rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "profileImg",
                                                            children: (userDetail === null || userDetail === void 0 ? void 0 : userDetail.image) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                src: (userDetail === null || userDetail === void 0 ? void 0 : userDetail.image) ? userDetail === null || userDetail === void 0 ? void 0 : userDetail.image : "/images/no-image.png",
                                                                width: 48,
                                                                height: 48,
                                                                className: "rounded-circle",
                                                                unoptimized: true,
                                                                alt: userDetail.name
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "profileRight",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "fs-base mb-0",
                                                                    children: userDetail.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "fs-sm pt-0 pb-2",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "mt-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "fi-phone me-2"
                                                                                    }),
                                                                                    userDetail.phone
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "userMail",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fi-mail me-2"
                                                                                        }),
                                                                                        userDetail.email
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/user/account-info",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                        active: currentRoute == "/user/account-info" ? true : false,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-profile-sr me-2"
                                                            }),
                                                            "My Profile"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/user/account-wallet",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                        active: currentRoute == "/user/account-wallet" ? true : false,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-wallet me-2"
                                                            }),
                                                            "Wallet"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/user/account-feedback",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                        active: currentRoute == "/user/account-feedback" ? true : false,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-feedback-sr me-2"
                                                            }),
                                                            "Reviews"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/user/my-businesses",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                        active: currentRoute == "/user/my-businesses" ? true : false,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-listing-sr me-2"
                                                            }),
                                                            "Listings"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/user/refer-and-earn",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                        active: currentRoute == "/user/refer-and-earn" ? true : false,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-refer-earn me-2"
                                                            }),
                                                            "Refer & Earn"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/user/account-packages",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                        active: currentRoute == "/user/account-packages" ? true : false,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-package-sr me-2"
                                                            }),
                                                            "Packages"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/user/account-enquiries",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                        active: currentRoute == "/user/account-enquiries" ? true : false,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-enquiries-sr me-2"
                                                            }),
                                                            "Enquiries"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/user/my-advertises",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                        active: currentRoute == "/user/my-advertises" ? true : false,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fi-ads-sr me-2"
                                                            }),
                                                            "Display Advertisement"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Divider), {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        confirmLogout();
                                                    },
                                                    children: "Log Out"
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        variant: "sm log d-none d-lg-block order-lg-3 btn-light",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "glow",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-user me-2"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        onClick: handleSigninShow,
                                                        children: "Login"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                onClick: handleSigninShow,
                                                children: " | "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "glow",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    onClick: handleSignupShow,
                                                    children: "Sign Up"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                !isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default().Collapse), {
                                    id: "navbarNav",
                                    className: `order-md-2 me-2 `,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        navbarScroll: true,
                                        style: {
                                            maxHeight: "35rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                className: "",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/advertise-with-us",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                        active: currentRoute === "/advertise-with-us" ? true : false,
                                                        children: "Advertise"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                className: "",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/partner-with-us",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                        active: currentRoute === "/partner-with-us" ? true : false,
                                                        children: "Partner with us"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                className: "",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "https://blog.dialmenow.in/",
                                                    passHref: true,
                                                    prefetch: false,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    replace: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                        children: "Blog"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                className: "",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/guest-blog",
                                                    passHref: true,
                                                    prefetch: false,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                        active: currentRoute === "/guest-blog" ? true : false,
                                                        children: "Guest Blog"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/premium-listing",
                                                passHref: true,
                                                prefetch: false,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    size: "sm",
                                                    className: " order-lg-3 me-md-2 me-0 me-xs-0 ms-0 ms-md-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "",
                                                        children: "Premium Listing"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/free-listing",
                                                passHref: true,
                                                prefetch: false,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    size: "sm",
                                                    className: "upsale-button order-lg-3 me-0 me-xs-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "",
                                                        children: "Free Listing"
                                                    })
                                                })
                                            }),
                                            props.userLoggedIn ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                as: (react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default()),
                                                className: "d-lg-none",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Toggle), {
                                                        as: (react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link),
                                                        className: "d-flex align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                src: (userDetail === null || userDetail === void 0 ? void 0 : userDetail.image) ? userDetail === null || userDetail === void 0 ? void 0 : userDetail.image : "/images/no-image.png",
                                                                width: 30,
                                                                height: 30,
                                                                priority: true,
                                                                className: "rounded-circle",
                                                                //id='user-image-head'
                                                                alt: userDetail.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "ms-2",
                                                                children: userDetail.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Menu), {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: " mt-2",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "fs-sm pt-0 pb-3",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "mt-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "fi-phone me-2"
                                                                                    }),
                                                                                    userDetail.phone
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "mt-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "fi-mail me-2"
                                                                                    }),
                                                                                    userDetail.email
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/user/account-info",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                    active: currentRoute == "/user/account-info" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-profile-sr me-2"
                                                                        }),
                                                                        "My Profile"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/user/account-wallet",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                    active: currentRoute == "/user/account-wallet" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-wallet me-2"
                                                                        }),
                                                                        "Wallet"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/user/account-feedback",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                    active: currentRoute == "/user/account-feedback" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-feedback-sr me-2"
                                                                        }),
                                                                        "Feedbacks"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/user/my-businesses",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                    active: currentRoute == "/user/my-businesses" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-listing-sr me-2"
                                                                        }),
                                                                        "Listings"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/user/account-packages",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                    active: currentRoute == "/user/account-packages" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-package-sr me-2"
                                                                        }),
                                                                        "Packages"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/user/account-enquiries",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                    active: currentRoute == "/user/account-enquiries" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-enquiries-sr me-2"
                                                                        }),
                                                                        "Enquiries"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/user/my-advertises",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                    active: currentRoute == "/user/my-advertises" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-ads-sr me-2"
                                                                        }),
                                                                        "Display Advertisement"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Divider), {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    confirmLogout();
                                                                },
                                                                children: "Log Out"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                className: "d-lg-none",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                    onClick: handleSigninShow,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fi-user me-2"
                                                        }),
                                                        "Login"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    show: offcanvaShow,
                                    onHide: offCanvaHandle,
                                    scroll: true,
                                    className: "MobileMenu",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_15___default().Header), {
                                            closeButton: true,
                                            className: "border-bottom py-2 px-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_15___default().Title), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default().Brand), {
                                                    className: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                        className: "webLogo",
                                                        priority: true,
                                                        src: "/images/logo/logo.svg",
                                                        width: 180,
                                                        height: 50,
                                                        alt: "Dailmenow"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_15___default().Body), {
                                            className: "py-2 px-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/advertise-with-us",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                                    className: "px-0",
                                                                    active: currentRoute === "/advertise-with-us" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-ads-sr"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Advertise"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/partner-with-us",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                                    className: "px-0",
                                                                    active: currentRoute === "/partner-with-us" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-partner-sr"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Partner with us"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "https://blog.dialmenow.in/",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                                    className: "px-0",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            window.open("https://blog.dialmenow.in/", "_blank");
                                                                        },
                                                                        rel: "noopener noreferrer",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fi-blog-sr"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "Blog"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/guest-blog",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                                    className: "px-0",
                                                                    active: currentRoute === "/guest-blog" ? true : false,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-guest-blog-sr"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Guest Blog"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/premium-listing",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                                    className: "px-0",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-paid-list-sr"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Premium Listing"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/free-listing",
                                                                passHref: true,
                                                                prefetch: false,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                                    className: "px-0",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fi-free-list-sr"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Free Listing"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                onClick: ()=>setShareOptionShow(true)
                                                                ,
                                                                className: "referFriendLink py-1",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-link"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Refer A friend"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default().Collapse), {
                                                    id: "navbarNav",
                                                    className: "mt-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        navbarScroll: true,
                                                        className: "mt-0",
                                                        style: {
                                                            maxHeight: "35rem"
                                                        },
                                                        children: props.userLoggedIn ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "d-lg-none p-0 myProfilePart",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    children: "My Profile"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    as: (react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link),
                                                                    className: "d-flex align-items-center px-0",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                            src: (userDetail === null || userDetail === void 0 ? void 0 : userDetail.image) ? userDetail === null || userDetail === void 0 ? void 0 : userDetail.image : "/images/no-image.png",
                                                                            width: 30,
                                                                            height: 30,
                                                                            priority: true,
                                                                            className: "rounded-circle",
                                                                            //id='user-image-head'
                                                                            alt: userDetail.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "ms-2",
                                                                            children: userDetail.name
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "ps-4 ms-3 ",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "MobileProfileContact",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fi-phone"
                                                                                        }),
                                                                                        userDetail.phone
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fi-mail"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                userDetail.email,
                                                                                                " "
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                        href: "/user/account-info",
                                                                                        passHref: true,
                                                                                        prefetch: false,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fi-profile-sr me-2"
                                                                                                    }),
                                                                                                    "My Profile"
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                        href: "/user/account-wallet",
                                                                                        passHref: true,
                                                                                        prefetch: false,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fi-wallet me-2"
                                                                                                    }),
                                                                                                    "Wallet"
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                        href: "/user/account-feedback",
                                                                                        passHref: true,
                                                                                        prefetch: false,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fi-feedback-sr me-2"
                                                                                                    }),
                                                                                                    "Feedbacks"
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                        href: "/user/my-businesses",
                                                                                        passHref: true,
                                                                                        prefetch: false,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fi-listing-sr me-2"
                                                                                                    }),
                                                                                                    "Listings"
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                        href: "/user/refer-and-earn",
                                                                                        passHref: true,
                                                                                        prefetch: false,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fi-refer-earn me-2"
                                                                                                    }),
                                                                                                    "Refer & Earn"
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                        href: "/user/account-packages",
                                                                                        passHref: true,
                                                                                        prefetch: false,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fi-package-sr me-2"
                                                                                                    }),
                                                                                                    "Packages"
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                        href: "/user/account-enquiries",
                                                                                        passHref: true,
                                                                                        prefetch: false,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fi-enquiries-sr me-2"
                                                                                                    }),
                                                                                                    "Enquiries"
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                        href: "/user/my-advertises",
                                                                                        passHref: true,
                                                                                        prefetch: false,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fi-ads-sr me-2"
                                                                                                    }),
                                                                                                    "Display Advertisement"
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                                                                        className: "ps-0",
                                                                                        onClick: (e)=>{
                                                                                            e.preventDefault();
                                                                                            confirmLogout();
                                                                                        },
                                                                                        children: "Log Out"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                            className: "d-lg-none px-0",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default().Link), {
                                                                className: "px-0 mobile-menu",
                                                                onClick: handleSigninShow,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fi-user me-2"
                                                                    }),
                                                                    "Login"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    props.children
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CityGuidePageLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2722:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2881);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_firebase__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function PushNotificationLayout({ children  }) {
    const router = useRouter();
    useEffect(()=>{
        setToken();
        // Event listener that listens for the push notification event in the background
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.addEventListener("message", (event)=>{
                console.log("event for the service worker", event);
            });
            return ()=>{
                window.removeEventListener("message", (event)=>{
                    console.log("event for the service worker", event);
                });
            };
        }
        // Calls the getMessage() function if the token is there
        async function setToken() {
            try {
                const token = await firebaseCloudMessaging.init();
                if (token) {
                    getMessage();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }, []);
    // Handles the click function on the toast showing push notification
    const handleClickPushNotification = (url)=>{
        router.push(url);
    };
    // Get the push notification message and triggers a toast to display it
    function getMessage() {
        onMessageListener().then((payload)=>{
            console.log("payload final----------------", payload);
        }).catch((err)=>console.log("failed: ", err)
        );
    }
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: children
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PushNotificationLayout)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports firebaseCloudMessaging, onMessageListener */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3512);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3182);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_messaging__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_messaging__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({
    apiKey: "AIzaSyC2tsdcigyoMQCrYheeg6KLpj-1JfCnY1k",
    authDomain: "dialmenow-dev-mg.firebaseapp.com",
    projectId: "dialmenow-dev-mg",
    storageBucket: "dialmenow-dev-mg.appspot.com",
    messagingSenderId: "786694872901",
    appId: "1:786694872901:web:a2a48d9ec6dd378a61a82c"
});
const firebaseCloudMessaging = {
    init: async ()=>{
        if (!(firebaseApp === null || firebaseApp === void 0 ? void 0 : firebaseApp.length)) {
            // Initialize the Firebase app with the credentials
            try {
                //await localforage.removeItem("fcm_token");
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_1__.getMessaging)(firebaseApp);
                const tokenInLocalForage = await localforage__WEBPACK_IMPORTED_MODULE_2___default().getItem("fcm_token");
                // Return the token if it is alredy in our local storage
                if (tokenInLocalForage !== null) {
                    return tokenInLocalForage;
                }
                // Request the push notification permission from browser
                const status = await Notification.requestPermission();
                if (status && status === "granted") {
                    //console.log("INSIDE FCM CRETE")
                    // Get new token from Firebase
                    const fcm_token = await (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_1__.getToken)(messaging, {
                        vapidKey: "BKW0hY8WzQtyfxoiKtUrsqHhpTX_39hIDA8sMfun5WpNcjQwxwklinnA8AG1LYET32XOMTgAdO2fI6ALr1zPnw0"
                    });
                    // Set token in our local storage
                    if (fcm_token) {
                        localforage__WEBPACK_IMPORTED_MODULE_2___default().setItem("fcm_token", fcm_token);
                        return fcm_token;
                    }
                }
            } catch (error) {
                console.error(error);
                return null;
            }
        }
    }
};

const onMessageListener = ()=>new Promise(async (resolve)=>{
        const messaging = await getMessaging(firebaseApp);
        onMessage(messaging, (payload)=>{
            resolve(payload);
        });
    })
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;