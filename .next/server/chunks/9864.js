"use strict";
exports.id = 9864;
exports.ids = [9864];
exports.modules = {

/***/ 9864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(127);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_PropertyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6492);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5698);









const MediaFeed = ({ SwiperPadding =""  })=>{
    const { 0: mediaFeedsItem , 1: setMediaFeedsItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: hasVideo , 1: setHasVideo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        let allMediaFeeds = await mediaFeeds();
        setMediaFeedsItem(allMediaFeeds);
    }, []);
    const mediaFeeds = async ()=>{
        try {
            var requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    "token": ""
                })
            };
            var APIpath = `${process.env.BASE_URL}/api/protect/media-feeds`;
            const res = await fetch(APIpath, requestOptions);
            const resJson = await res.json();
            if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
                var videoHas = resJson.data.filter((val)=>val.media_type == "2"
                );
                if ((videoHas === null || videoHas === void 0 ? void 0 : videoHas.length) > 0) {
                    setHasVideo(true);
                    return (videoHas === null || videoHas === void 0 ? void 0 : videoHas.length) > 1 ? resJson === null || resJson === void 0 ? void 0 : resJson.data.splice(0, 2) : resJson === null || resJson === void 0 ? void 0 : resJson.data.splice(0, 3);
                } else {
                    setHasVideo(false);
                    return resJson === null || resJson === void 0 ? void 0 : resJson.data;
                }
            //console.log("---media details- ----",resJson)
            } else {
                return [];
            }
        } catch (err) {
            return [];
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: mediaFeedsItem.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: `full pb-50  ${(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().mediafeeds)}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "text-start mb-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Media"
                            }),
                            " Feeds"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            mediaFeedsItem.length > 0 && mediaFeedsItem.map((videofeed, index)=>{
                                if (videofeed.media_type == "2") {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: process.env.BASE_URL + "/media/" + videofeed.slug + "/" + videofeed.id,
                                            passHref: true,
                                            prefetch: false,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageLoader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    src: "/images/banner/dialme_video_banner.webp",
                                                    width: 550,
                                                    height: 305,
                                                    alt: "Square image",
                                                    loading: "lazy"
                                                })
                                            })
                                        })
                                    }, videofeed.id);
                                } else {
                                    return null;
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: hasVideo ? "col-md-6" : "col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row h-100",
                                    children: mediaFeedsItem.length > 0 && mediaFeedsItem.map((feed, index)=>{
                                        if (feed.media_type == "1") {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: hasVideo ? "col-md-6 col-sm-6 col-6" : "col-md-3 col-sm-4 col-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PropertyCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    href: process.env.BASE_URL + "/media/" + feed.slug + "/" + feed.id,
                                                    images: [
                                                        [
                                                            feed.image_video,
                                                            306,
                                                            200,
                                                            feed.short_description
                                                        ], 
                                                    ],
                                                    title: feed.short_description,
                                                    footer: [
                                                        [
                                                            "fi-bed",
                                                            3
                                                        ], 
                                                    ],
                                                    // light // Optionally pass light prop so the card works well on dark backgrounds
                                                    className: `mx-auto h-md-100 h-auto ${(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().properImg)} ${hasVideo ? "" : (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().properImgNew)}`,
                                                    ratingsShow: false,
                                                    ratingNews: true,
                                                    mobilenumbers: false,
                                                    date: feed.created_at
                                                })
                                            }, feed.id);
                                        } else {
                                            return null;
                                        }
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaFeed);


/***/ })

};
;