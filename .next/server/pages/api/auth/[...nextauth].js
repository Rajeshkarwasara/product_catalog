"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 6209:
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3598);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6209);
/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);




const createOpt = (req1)=>{
    return {
        session: {
            jwt: true,
            maxAge: 60 * 60 * 24 * 90
        },
        providers: [
            next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({
                // The name to display on the sign in form (e.g. 'Sign in with...')
                id: "user-login",
                name: "Login",
                // The credentials is used to generate a suitable form on the sign in page.
                // You can specify whatever fields you are expecting to be submitted.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                credentials: {
                    username: {
                        label: "Username",
                        type: "text",
                        placeholder: ""
                    },
                    password: {
                        label: "Password",
                        type: "password"
                    }
                },
                async authorize (credentials, req) {
                    // You need to provide your own logic here that takes the credentials
                    // submitted and returns either a object representing a user or value
                    // that is false/null if the credentials are invalid.
                    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                    // You can also use the `req` object to obtain additional parameters
                    // (i.e., the request IP address)
                    try {
                        const res = await fetch(`${process.env.BASE_URL}/api/protect/login-user`, {
                            method: "POST",
                            body: JSON.stringify(credentials),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        const user = await res.json();
                        console.log(user);
                        if (user.status !== undefined && user.status == 200) {
                            return user.data;
                        } else {
                            console.log(user);
                            //return user;
                            throw new Error("Invalid email or password");
                        }
                    } catch (err) {
                        console.log(err);
                        throw new Error("Invalid email or password");
                    }
                }
            }),
            next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({
                // The name to display on the sign in form (e.g. 'Sign in with...')
                id: "update-profile",
                name: "Update profile",
                // The credentials is used to generate a suitable form on the sign in page.
                // You can specify whatever fields you are expecting to be submitted.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                credentials: {
                    user_id: {
                        label: "User id",
                        type: "text",
                        placeholder: "Enter user id"
                    }
                },
                async authorize (credentials, req) {
                    console.log("credentials IS----Update profile");
                    console.log(credentials);
                    // You need to provide your own logic here that takes the credentials
                    // submitted and returns either a object representing a user or value
                    // that is false/null if the credentials are invalid.
                    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                    // You can also use the `req` object to obtain additional parameters
                    // (i.e., the request IP address)
                    try {
                        const res = await fetch(`${process.env.BASE_URL}/api/protect/get-user-detail-by-id`, {
                            method: "POST",
                            body: JSON.stringify(credentials),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        const user = await res.json();
                        console.log("RESPONSE of the ");
                        console.log(user);
                        if (user.status !== undefined && user.status == 200) {
                            return user.data;
                        } else {
                            console.log(user);
                            //return user;
                            throw new Error("Invalid user id");
                        }
                    } catch (err) {
                        console.log(err);
                        throw new Error("Invalid email or password");
                    }
                }
            }),
            next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({
                // The name to display on the sign in form (e.g. 'Sign in with...')
                id: "phone-login",
                name: "Login with Phone",
                // The credentials is used to generate a suitable form on the sign in page.
                // You can specify whatever fields you are expecting to be submitted.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                credentials: {
                    phone: {
                        label: "Phone",
                        type: "text",
                        placeholder: "Enter Phone Number"
                    },
                    otp: {
                        label: "OTP",
                        type: "text",
                        placeholder: "Enter OTP"
                    }
                },
                async authorize (credentials, req) {
                    console.log("credentials IS");
                    console.log(credentials);
                    // You need to provide your own logic here that takes the credentials
                    // submitted and returns either a object representing a user or value
                    // that is false/null if the credentials are invalid.
                    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                    // You can also use the `req` object to obtain additional parameters
                    // (i.e., the request IP address)
                    try {
                        const res = await fetch(`${process.env.BASE_URL}/api/protect/send-otp-verify`, {
                            method: "POST",
                            body: JSON.stringify(credentials),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        const user = await res.json();
                        console.log("RESPONSE of the ");
                        console.log(user);
                        if (user.status !== undefined && user.status == 200) {
                            return user.data;
                        } else {
                            console.log(user);
                            //return user;
                            throw new Error("Invalid email or password");
                        }
                    } catch (err) {
                        console.log(err);
                        throw new Error("Invalid email or password");
                    }
                }
            }),
            next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({
                // The name to display on the sign in form (e.g. 'Sign in with...')
                id: "login-via-otp",
                name: "Login via otp",
                // The credentials is used to generate a suitable form on the sign in page.
                // You can specify whatever fields you are expecting to be submitted.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                credentials: {
                    phone: {
                        label: "Phone",
                        type: "text",
                        placeholder: "Enter Phone Number"
                    },
                    name: {
                        label: "Name",
                        type: "text",
                        placeholder: "Enter Name"
                    },
                    email: {
                        label: "Email",
                        type: "text",
                        placeholder: "Enter Email"
                    },
                    otp: {
                        label: "OTP",
                        type: "text",
                        placeholder: "Enter OTP"
                    }
                },
                async authorize (credentials, req) {
                    console.log("credentials IS");
                    //console.log(JSON.parse(credentials.formdata))
                    // You need to provide your own logic here that takes the credentials
                    // submitted and returns either a object representing a user or value
                    // that is false/null if the credentials are invalid.
                    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                    // You can also use the `req` object to obtain additional parameters
                    // (i.e., the request IP address)
                    try {
                        const res = await fetch(`${process.env.BASE_URL}/api/protect/otp-verify-and-user-registration`, {
                            method: "POST",
                            body: JSON.stringify(credentials),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        const user = await res.json();
                        console.log("RESPONSE of the ");
                        console.log(user);
                        if (user.status !== undefined && user.status == 200) {
                            return user.data;
                        //console.log(user.data)
                        } else if ((user === null || user === void 0 ? void 0 : user.status) == 201 && (user === null || user === void 0 ? void 0 : user.msg) !== undefined) {
                            throw new Error(user.msg);
                        } else {
                            //console.log(user)                     
                            throw new Error("Invalid email or password");
                        }
                    } catch (err) {
                        //console.log(err)
                        throw new Error("Invalid email or password");
                    }
                }
            }),
            next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({
                // The name to display on the sign in form (e.g. 'Sign in with...')
                id: "fb-login",
                name: "Login via FB",
                // The credentials is used to generate a suitable form on the sign in page.
                // You can specify whatever fields you are expecting to be submitted.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                async authorize (credentials, req) {
                    try {
                        console.log(JSON.parse(credentials === null || credentials === void 0 ? void 0 : credentials.data));
                        let receivedData = JSON.parse(credentials === null || credentials === void 0 ? void 0 : credentials.data);
                        let userFBid = (receivedData === null || receivedData === void 0 ? void 0 : receivedData.userID) || null;
                        let userName = (receivedData === null || receivedData === void 0 ? void 0 : receivedData.name) || null;
                        let userEmail = (receivedData === null || receivedData === void 0 ? void 0 : receivedData.email) || null;
                        if (userFBid) {
                            const res = await fetch(`${process.env.BASE_URL}/api/protect/login-facebook`, {
                                method: "POST",
                                body: JSON.stringify({
                                    id: userFBid,
                                    name: userName,
                                    email: userEmail
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                            const user = await res.json();
                            console.log("RESPONSE of the ");
                            console.log(user);
                            if (user.status !== undefined && user.status == 200) {
                                return user.data;
                            //console.log(user.data)
                            } else {
                                throw new Error((user === null || user === void 0 ? void 0 : user.msg) || "Something went wrong! Please try after some time.");
                            }
                        } else {
                            throw new Error("No response received from facebook. Please try after sometime.");
                        }
                    } catch (err) {
                        //console.log(err)
                        throw new Error("Something went wrong! Please try after sometime.");
                    }
                }
            }),
            next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                authorization: {
                    params: {
                        prompt: "consent",
                        access_type: "offline",
                        response_type: "code"
                    }
                },
                async profile (credentials, req) {
                    console.log("Yes Checking");
                    console.log("Google User ID: " + credentials.sub);
                    console.log(req.query, req.body);
                    if (credentials.email_verified) {
                        const res = await fetch(`${process.env.BASE_URL}/api/protect/login-google`, {
                            method: "POST",
                            body: JSON.stringify({
                                "username": credentials.email,
                                "password": "using_google",
                                "access_token": req.id_token
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        const user = await res.json();
                        if (user.status !== undefined && user.status == 200) {
                            //console.log(user)
                            return user.data;
                        } else {
                            throw new Error("Unable to login now.");
                        }
                    } else {
                        throw new Error("Your google account not verified.");
                    }
                }
            }),
            next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({
                clientId: process.env.FACEBOOK_CLIENT_ID,
                clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
                idToken: true,
                authorization: {
                    params: {
                        prompt: "consent",
                        scope: "email public_profile",
                        response_type: "code"
                    }
                },
                async profile (credentials, req) {
                    console.log("fb User ID: -------------------- ", credentials, req.body);
                }
            })
        ],
        secret: process.env.NEXTAUTH_SECRET,
        callbacks: {
            async signIn ({ user , account , profile  }) {
                console.log("----user----------", user, account);
                return true;
            },
            async redirect ({ url , baseUrl  }) {
                // Allows relative callback URLs
                if (url.startsWith("/")) return `${baseUrl}${url}`;
                else if (new URL(url).origin === baseUrl) return url;
                return baseUrl;
            },
            async jwt ({ token , user  }) {
                //console.log("Profile-----",profile)
                if (user !== undefined) {
                    token.id = user.id;
                    token.userLoggedIn = true;
                    token.name = user.name;
                    token.email = user.email;
                    token.user_token = user.user_token;
                    token.phone = user.phone;
                    token.is_verfied_email = user.is_verfied_email;
                    token.is_verified_mob = user.is_verified_mob;
                    token.image = (user === null || user === void 0 ? void 0 : user.image) || null;
                }
                return token;
            },
            async session ({ session , token  }) {
                session.user = session.user || {};
                session.user.id = token.id;
                session.user.userLoggedIn = token.userLoggedIn;
                session.user.user_token = token.user_token;
                session.user.phone = token.phone;
                session.user.is_verfied_email = token.is_verfied_email;
                session.user.is_verified_mob = token.is_verified_mob;
                session.user.image = (token === null || token === void 0 ? void 0 : token.image) || null;
                return session;
            }
        },
        pages: {
            signIn: "/",
            error: "/"
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    return next_auth__WEBPACK_IMPORTED_MODULE_3___default()(req, res, createOpt(req));
}); //export default NextAuth(req,res, createOpt(req));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(870));
module.exports = __webpack_exports__;

})();