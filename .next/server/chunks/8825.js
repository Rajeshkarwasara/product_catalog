"use strict";
exports.id = 8825;
exports.ids = [8825];
exports.modules = {

/***/ 8825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I9": () => (/* binding */ referDetails),
/* harmony export */   "P": () => (/* binding */ OurPulications),
/* harmony export */   "dv": () => (/* binding */ CitiesData),
/* harmony export */   "fn": () => (/* binding */ HomeCitiesCategories),
/* harmony export */   "jo": () => (/* binding */ PopularServices),
/* harmony export */   "ky": () => (/* binding */ AnalyticsData)
/* harmony export */ });
/* unused harmony exports CategoriesList, HomeCities */
async function CategoriesList() {
    try {
        let addOptionsc = {
            method: "POST",
            body: JSON.stringify({
                "currentCity": ""
            })
        };
        let addResc = await fetch(`${process.env.BASE_URL}/api/protect/categories-home`, addOptionsc);
        let addJsonc = await addResc.json();
        //console.log(addJsonc, "YYOOOOOOOOOOOO")
        if ((addJsonc === null || addJsonc === void 0 ? void 0 : addJsonc.status) == 200) {
            return addJsonc === null || addJsonc === void 0 ? void 0 : addJsonc.data;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}
async function HomeCities() {
    try {
        let addOptionsc = {
            method: "POST",
            body: JSON.stringify({
                "currentCity": ""
            })
        };
        let addResc = await fetch(`${process.env.BASE_URL}/api/protect/cities-home`, addOptionsc);
        let addJsonc = await addResc.json();
        //console.log(addJsonc, "YYOOOOOOOOOOOO")
        if ((addJsonc === null || addJsonc === void 0 ? void 0 : addJsonc.status) == 200) {
            return addJsonc === null || addJsonc === void 0 ? void 0 : addJsonc.data;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}
async function HomeCitiesCategories() {
    try {
        let addResc = await fetch(`${process.env.BASE_URL}/api/protect/home-list`);
        let addJsonc = await addResc.json();
        if ((addJsonc === null || addJsonc === void 0 ? void 0 : addJsonc.status) == 200) {
            return addJsonc === null || addJsonc === void 0 ? void 0 : addJsonc.data;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}
async function OurPulications() {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "token": ""
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/our-publications`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
            return resJson === null || resJson === void 0 ? void 0 : resJson.data;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}
async function PopularServices() {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "token": ""
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/popular-services`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
            return resJson === null || resJson === void 0 ? void 0 : resJson.data;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}
async function CitiesData() {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "token": ""
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/cities-list`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
            return resJson === null || resJson === void 0 ? void 0 : resJson.data;
        } else {
            return [];
        }
    } catch (err) {
        return [];
    }
}
async function AnalyticsData() {
    try {
        var requestOptions = {
            method: "GET"
        };
        var APIpath = `${process.env.BASE_URL}/api/analytics`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        return resJson;
    } catch (err) {
        return {
            status: 201,
            msg: "Something went wrong"
        };
    }
}
async function referDetails(id) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({
                "id": id
            })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/refer-details`;
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        //console.log("      json         ", resJson)
        if ((resJson === null || resJson === void 0 ? void 0 : resJson.status) == 200) {
            return resJson === null || resJson === void 0 ? void 0 : resJson.data;
        } else {
            return [];
        }
    } catch (err) {
        console.log("---home fun-err---------", err);
        return [];
    }
}


/***/ })

};
;