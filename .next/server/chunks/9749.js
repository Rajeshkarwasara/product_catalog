"use strict";
exports.id = 9749;
exports.ids = [9749];
exports.modules = {

/***/ 348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ usePagination)
/* harmony export */ });
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1448);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_infinite__WEBPACK_IMPORTED_MODULE_0__]);
swr_infinite__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var PAGE_SIZE = 10;
const usePagination = (urlLink, mainID = "", otherData = "", pageSize = 10)=>{
    var ref, ref1;
    PAGE_SIZE = pageSize;
    const businessFetcher = async (url, pageNum, id, other)=>{
        var resFet = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "id": id,
                "page": pageNum,
                "other": other
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        var allList = await resFet.json();
        if ((allList === null || allList === void 0 ? void 0 : allList.status) == 200) {
            return allList.data;
        } else {
            return [];
        }
    };
    const { data: dataPagination , error , mutate , size , setSize , isValidating  } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_0__["default"])((index, preViouseData)=>{
        index = index + 1;
        //console.log("INDEX IS => ",index)
        if (preViouseData && !preViouseData.length) return null;
        return [
            `${process.env.BASE_URL}${urlLink}`,
            index,
            mainID,
            otherData
        ];
    }, businessFetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateFirstPage: false
    });
    const businessRecords = dataPagination ? dataPagination === null || dataPagination === void 0 ? void 0 : dataPagination.flat() : [];
    const isLoadingInitialData = !dataPagination && !error;
    const isLoadingMore = isLoadingInitialData || size > 0 && dataPagination && typeof dataPagination[size - 1] === "undefined";
    const isEmpty = (dataPagination === null || dataPagination === void 0 ? void 0 : (ref = dataPagination[0]) === null || ref === void 0 ? void 0 : ref.length) === 0;
    const isReachingEnd = isEmpty || dataPagination && ((ref1 = dataPagination[dataPagination.length - 1]) === null || ref1 === void 0 ? void 0 : ref1.length) < PAGE_SIZE;
    const isRefreshing = isValidating && dataPagination && dataPagination.length === size;
    //console.log("isValidating", isValidating, "size", size, "isLoadingInitialData", isLoadingInitialData, "isLoadingMore", isLoadingMore, "isReachingEnd", isReachingEnd, "isRefreshing", isRefreshing)
    return {
        businessRecords,
        isLoadingMore,
        isReachingEnd,
        isRefreshing,
        size,
        setSize,
        isLoadingInitialData,
        mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;