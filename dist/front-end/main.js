(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\"\n     [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n  {{message.text}}\n</div>\n"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alert.service */ "./src/app/_services/alert.service.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, service) {
        this.router = router;
        this.service = service;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        try {
            if (!localStorage.getItem('currentUser')) {
                // return false if localStorage is available but user has not registered
                this.router.navigate(['/auth/register']); // redirect to register page
                return false;
            }
            else {
                var user = JSON.parse(localStorage.getItem('currentUser'));
                this.service.setItem('currentUser');
                if (!user.loggedin) {
                    // if user has registered but not logged in, redirect to login page
                    this.router.navigate(['/auth/login']);
                }
                return user.loggedin;
            }
        }
        catch (e) {
            console.log('This browser does not support local storage.');
            return true;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
    };
    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(obj) {
        this.username = obj.username;
        this.displayname = obj.displayname ? obj.displayname : obj.username;
        this.email = obj.email;
        this.phone = obj.phone;
        this.birthday = obj.birthday;
        this.zipcode = obj.zipcode;
        this.password = obj.password;
        this.loggedin = obj.loggedin;
        this.avatar = obj.avatar ? obj.avatar : 'assets/images/profile-image.jpeg';
        this.status = obj.status ? obj.status : 'Hey! I\'m new to here :)';
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(config.apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: StorageService, AlertService, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "./src/app/_services/storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]; });






/***/ }),

/***/ "./src/app/_services/storage.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/storage.service.ts ***!
  \**********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var StorageService = /** @class */ (function () {
    function StorageService() {
        this.storageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    StorageService.prototype.watchStorage = function () {
        return this.storageSubject.asObservable();
    };
    StorageService.prototype.setItem = function (displayName) {
        this.storageSubject.next(displayName);
    };
    StorageService.prototype.waitForUserLogin = function () {
        return new Promise(function (resolve, reject) {
            try {
                if (localStorage.getItem('currentUser')) {
                    while (JSON.parse(localStorage.getItem('currentUser')) === null ||
                        JSON.parse(localStorage.getItem('currentUser')).loggedin === false) { }
                    resolve();
                }
                else {
                    reject();
                }
            }
            catch (e) {
                console.log('This browser does not support local storage. [StorageService]');
                reject();
            }
        });
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var src_app_guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_guards */ "./src/app/_guards/index.ts");








var routes = [
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], canActivate: [src_app_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'auth/login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'auth/register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [src_app_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'main' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var src_app_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var src_app_main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var src_app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var src_app_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var src_app_main_user_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/main/user/user.component */ "./src/app/main/user/user.component.ts");
/* harmony import */ var src_app_main_imagepost_imagepost_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/main/imagepost/imagepost.component */ "./src/app/main/imagepost/imagepost.component.ts");
/* harmony import */ var src_app_main_textpost_textpost_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/main/textpost/textpost.component */ "./src/app/main/textpost/textpost.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                src_app_directives__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"],
                src_app_main_user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"],
                src_app_main_imagepost_imagepost_component__WEBPACK_IMPORTED_MODULE_19__["ImagepostComponent"],
                src_app_main_textpost_textpost_component__WEBPACK_IMPORTED_MODULE_20__["TextpostComponent"],
                src_app_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
                src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                src_app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                src_app_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"]
            ],
            providers: [
                src_app_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
                src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
                src_app_services__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
                src_app_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: src_app_helpers__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: src_app_helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                src_app_helpers__WEBPACK_IMPORTED_MODULE_7__["fakeBackendProvider"]
            ],
            entryComponents: [src_app_main_imagepost_imagepost_component__WEBPACK_IMPORTED_MODULE_19__["ImagepostComponent"], src_app_main_textpost_textpost_component__WEBPACK_IMPORTED_MODULE_20__["TextpostComponent"], src_app_main_user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: relative;\n  margin: 50px 0 25px 0;\n  font-size: 2.3em;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1MHB4IDAgMjVweCAwO1xuICBmb250LXNpemU6IDIuM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");





var AuthService = /** @class */ (function () {
    function AuthService(httpService, storageService) {
        this.httpService = httpService;
        this.storageService = storageService;
    }
    AuthService.checkUnderage = function (birthday) {
        var today = new Date(Date.now());
        var year = today.getFullYear() - birthday.getFullYear();
        var month = today.getMonth() - birthday.getMonth();
        var day = today.getDate() - birthday.getDate() - 1; // Do not use getDay()
        if (year < 18 || (year === 18 && month < 0) || (year === 18 && month === 0 && day < 0)) {
            alert('Sorry, you are underage!\n\nOnly individuals 18 years of age ' +
                'or older on the day of registration are allowed to register');
            return false;
        }
        return true;
    };
    AuthService.checkPasswordEquality = function (pswd1, pswd2) {
        if (pswd1 !== pswd2) {
            alert('ERROR: The passwords you entered do not match.');
            return false;
        }
        return true;
    };
    AuthService.prototype.makeNewUser = function (obj) {
        try {
            var user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"](obj);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.storageService.setItem('New user stored!');
        }
        catch (e) {
            console.log('This browser does not support local storage.');
        }
    };
    AuthService.prototype.checkLogin = function (username, password) {
        var _this = this;
        return this.httpService.get('assets/profile.json').toPromise().then(function (data) {
            if (data[username]) {
                if (password === data[username].password) {
                    var user = {
                        username: data[username].username,
                        displayname: data[username].displayname,
                        email: data[username].email,
                        phone: data[username].phone,
                        birthday: data[username].birthday,
                        zipcode: data[username].zipcode,
                        password: data[username].password,
                        loggedin: true,
                        status: data[username].status,
                        avatar: data[username].avatar
                    };
                    _this.makeNewUser(user);
                    return true;
                }
            }
            return false;
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  display: inline-block;\n  position: absolute;\n  background: rgba(215, 102, 102, 0.9);\n  padding: .8em;\n  z-index: 2;\n  color: #FFF;\n  font-size: 0.8125rem;\n  border-radius: 0.25em;\n  /* prevent click and touch events */\n  pointer-events: none;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.2s 0, visibility 0 0;\n}\n\n.error-message::after {\n  /* triangle */\n  content: '';\n  position: absolute;\n  left: 22px;\n  bottom: 100%;\n  height: 0;\n  width: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid rgba(215, 102, 102, 0.9);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTtFQUNSLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsaURBQWlEO0FBQ25EIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTUsIDEwMiwgMTAyLCAwLjkpO1xuICBwYWRkaW5nOiAuOGVtO1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgLyogcHJldmVudCBjbGljayBhbmQgdG91Y2ggZXZlbnRzICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgMCwgdmlzaWJpbGl0eSAwIDA7XG59XG5cbi5lcnJvci1tZXNzYWdlOjphZnRlciB7XG4gIC8qIHRyaWFuZ2xlICovXG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIycHg7XG4gIGJvdHRvbTogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCByZ2JhKDIxNSwgMTAyLCAxMDIsIDAuOSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"login\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" id=\"login-form\">\n\n    <header><b>--- Welcome back! ---</b></header>\n\n    <input type=\"text\" placeholder=\"Username\" formControlName=\"username\" (change)=\"removeMsg()\">\n    <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" id=\"last_field\" (change)=\"removeMsg()\">\n    <span class=\"error-message\" *ngIf=\"submitted && invalid\">\n      Please enter both of your username and your password!\n    </span>\n    <span class=\"error-message\" *ngIf=\"submitted && notMatch\">\n      Username and password do not match!\n    </span>\n\n    <div class=\"buttons\">\n      <input type=\"submit\" class=\"submit\" value=\"Log In\">\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authService, storageService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.submitted = false;
        this.invalid = false;
        this.notMatch = false;
        this.loginEmiiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.removeMsg = function () {
        this.invalid = false;
        this.notMatch = false;
        this.submitted = false;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.invalid = false;
        this.notMatch = false;
        this.submitted = true;
        // check if the input fields are filled
        if (this.loginForm.invalid) {
            this.invalid = true;
            return;
        }
        // check if the username and password match
        this.authService.checkLogin(this.loginForm.get('username').value, this.loginForm.get('password').value).then(function (match) {
            if (match) {
                _this.storageService.waitForUserLogin().then(function () {
                    _this.router.navigate(['/main']);
                });
            }
            else {
                _this.notMatch = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "loginEmiiter", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ../auth.component.css */ "./src/app/auth/auth.component.css"), __webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"registration\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" id=\"registration-form\">\n\n    <header><b>--- Welcome! ---</b></header>\n\n    <input type=\"text\" placeholder=\"Account Name\" formControlName=\"username\">\n    <input type=\"text\" placeholder=\"Display Name (Optional)\" formControlName=\"displayname\">\n    <input type=\"text\" placeholder=\"E-mail Address\" formControlName=\"email\">\n    <input type=\"text\" placeholder=\"Phone Number: 000-000-0000\"formControlName=\"phone\">\n    <!-- The \"date\" type does not work on Safari or IE -->\n    <input type=\"date\" placeholder=\"Date of Birth: YYYY-MM-DD\" formControlName=\"birthday\">\n    <input type=\"text\" placeholder=\"Zip Code: XXXXX\" formControlName=\"zipcode\">\n    <input type=\"password\" placeholder=\"Password\" formControlName=\"password1\">\n    <input type=\"password\" placeholder=\"Confirm Password\" formControlName=\"password2\" id=\"last_field\">\n\n    <!--<input type=\"hidden\" id=\"timestamp\" name=\"time\">-->\n\n    <div class=\"buttons\">\n      <input type=\"submit\" class=\"submit\" value=\"Submit\">\n      <input type=\"reset\" class=\"clear\" value=\"Clear\">\n    </div>\n\n    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.username.errors.required\">Username required</div>\n      <div *ngIf=\"f.username.errors.pattern\">Username does not match</div>\n    </div>\n    <div *ngIf=\"submitted && f.birthday.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.birthday.errors.required\">Birthday required</div>\n      <div *ngIf=\"f.birthday.errors.pattern\">Birthday does not match</div>\n    </div>\n    <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.phone.errors.required\">Phone required</div>\n      <div *ngIf=\"f.phone.errors.pattern\">Phone does not match</div>\n    </div>\n    <div *ngIf=\"submitted && f.zipcode.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.zipcode.errors.required\">Zip Code required</div>\n      <div *ngIf=\"f.zipcode.errors.pattern\">Zip Code does not match</div>\n    </div>\n    <div *ngIf=\"submitted && f.password1.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.password1.errors.required\">Password required</div>\n      <div *ngIf=\"f.password1.errors.pattern\">Password does not match</div>\n    </div>\n\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/storage.service */ "./src/app/_services/storage.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, storageService, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.storageService = storageService;
        this.authService = authService;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z]([a-zA-Z0-9]+)*')])],
            displayname: ['', null],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+')])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[1-9]\\d{2}-\\d{3}-\\d{4}')])],
            birthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^\\d{4}[\\/\\-](0?[1-9]|1[012])[\\/\\-](0?[1-9]|[12][0-9]|3[01])')])],
            zipcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^\\d{5}$')])],
            password1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var age = _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].checkUnderage(new Date(this.registerForm.value.birthday));
        var pswd = _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].checkPasswordEquality(this.registerForm.value.password1, this.registerForm.value.password2);
        this.submitted = true;
        if (age && pswd && this.registerForm.valid) {
            var user = {
                username: this.registerForm.value.username,
                displayname: this.registerForm.value.displayname,
                email: this.registerForm.value.email,
                phone: this.registerForm.value.phone,
                birthday: this.registerForm.value.birthday,
                zipcode: this.registerForm.value.zipcode,
                password: this.registerForm.value.password1,
                loggedin: true
            };
            this.authService.makeNewUser(user);
            alert(this.registerForm.value.username + ', you have successfully registered!');
            this.router.navigate(['/auth/login']);
            this.storageService.setItem(this.registerForm.value.displayname === null || this.registerForm.value.displayname === '' ?
                this.registerForm.value.username : this.registerForm.value.displayname);
        }
        return false;
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ../auth.component.css */ "./src/app/auth/auth.component.css"), __webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  height: 80px;\n  background: #555;\n  opacity: 0.9;\n}\n\n.display-name {\n  float: left;\n  margin: 15px;\n}\n\n.user-info {\n  float: right;\n}\n\n#username, #status {\n  margin: 10px;\n  line-height: 12px;\n  text-align: left;\n}\n\nimg {\n  height: 50px;\n  width: auto;\n}\n\n.left-part {\n  position: fixed;\n  right: 75px;\n  top: 15px;\n}\n\n.right-div {\n  position: fixed;\n  right: 15px;\n  top: 15px;\n}\n\n.icon {\n  -webkit-filter: invert(100%);\n}\n\n.link-text {\n  position: fixed;\n  right: 25px;\n  top: 20px;\n  color: white;\n  text-decoration: none;\n}\n\n.main-text {\n  position: fixed;\n  right: 84px;\n  top: 20px;\n  color: white;\n  text-decoration: none;\n}\n\n.profile-text {\n  position: fixed;\n  right: 78px;\n  top: 20px;\n  color: white;\n  text-decoration: none;\n}\n\n.register-text {\n  position: fixed;\n  right: 15px;\n  top: 28px;\n  color: white;\n  text-decoration: none;\n}\n\n.link-text:hover {\n  text-decoration: underline;\n}\n\n.main-text:hover {\n  text-decoration: underline;\n}\n\n.profile-text:hover {\n  text-decoration: underline;\n}\n\n.register-text:hover {\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogIzU1NTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uZGlzcGxheS1uYW1lIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLnVzZXItaW5mbyB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuI3VzZXJuYW1lLCAjc3RhdHVzIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmxlZnQtcGFydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDc1cHg7XG4gIHRvcDogMTVweDtcbn1cblxuLnJpZ2h0LWRpdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbn1cblxuLmljb24ge1xuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xufVxuXG4ubGluay10ZXh0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjVweDtcbiAgdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1haW4tdGV4dCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDg0cHg7XG4gIHRvcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9maWxlLXRleHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiA3OHB4O1xuICB0b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucmVnaXN0ZXItdGV4dCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMjhweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5saW5rLXRleHQ6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm1haW4tdGV4dDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHJvZmlsZS10ZXh0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5yZWdpc3Rlci10ZXh0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"display-name\" *ngIf=\"hasLogOut()\">\n    <img class=\"profile-image\" [src]=\"avatar\" alt=\"\">\n    <div class=\"user-info\">\n      <div id=\"username\">{{ name }}</div>\n      <div id=\"status\"><b>Status:</b> {{ status }}</div>\n    </div>\n  </div>\n  <div class=\"left-part\" *ngIf=\"hasMain()\">\n    <img class=\"icon\" src=\"assets/images/main-page-icon.png\" alt=\"\">\n    <a class=\"main-text\" routerLink=\"/main\">Main<br>Page</a>\n  </div>\n  <div class=\"left-part\" *ngIf=\"hasProfile()\">\n    <img class=\"icon\" src=\"assets/images/profile-icon.png\" alt=\"\">\n    <a class=\"profile-text\" routerLink=\"/profile\">Your<br>Profile</a>\n  </div>\n  <div class=\"right-div\" *ngIf=\"hasLogIn()\">\n    <img class=\"icon\" src=\"assets/images/profile-icon.png\" alt=\"\">\n    <a class=\"link-text\" routerLink=\"/auth/login\">Log<br>In</a>\n  </div>\n  <div class=\"right-div\" *ngIf=\"hasLogOut()\">\n    <img class=\"icon\" src=\"assets/images/profile-icon.png\" alt=\"\">\n    <a class=\"link-text\" routerLink=\"/auth/login\" (click)=\"logOut()\">Log<br>Out</a>\n  </div>\n  <div class=\"right-div\" *ngIf=\"hasRegister()\">\n    <img class=\"icon\" src=\"assets/images/profile-icon.png\" alt=\"\">\n    <a class=\"register-text\" routerLink=\"/auth/register\">Register</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(location, storageService) {
        var _this = this;
        this.location = location;
        this.storageService = storageService;
        this.storageService.watchStorage().subscribe(function (data) {
            console.log('Saw change(s) on data: ' + data);
            _this.updateName();
            _this.updateStatus();
            _this.updateAvatar();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.updateName();
        this.updateStatus();
        this.updateAvatar();
    };
    HeaderComponent.prototype.updateName = function () {
        try {
            if (localStorage.getItem('currentUser')) {
                var user = JSON.parse(localStorage.getItem('currentUser'));
                this.name = user.displayname === null || user.displayname === '' ?
                    user.username : user.displayname;
            }
            else {
                this.name = 'Default User';
            }
        }
        catch (e) {
            console.log('This browser does not support local storage. [Header]');
        }
    };
    HeaderComponent.prototype.updateStatus = function () {
        try {
            if (localStorage.getItem('currentUser')) {
                var user = JSON.parse(localStorage.getItem('currentUser'));
                this.status = user.status;
            }
            else {
                this.status = 'Hey! I\'m new to here :)';
            }
        }
        catch (e) {
            console.log('This browser does not support local storage. [Header]');
        }
    };
    HeaderComponent.prototype.updateAvatar = function () {
        try {
            if (localStorage.getItem('currentUser')) {
                var user = JSON.parse(localStorage.getItem('currentUser'));
                this.avatar = user.avatar;
            }
            else {
                this.avatar = 'assets/images/profile-image.jpeg';
            }
        }
        catch (e) {
            console.log('This browser does not support local storage. [Header]');
        }
    };
    HeaderComponent.prototype.hasMain = function () {
        return this.location.path().indexOf('/profile') > -1;
    };
    HeaderComponent.prototype.hasProfile = function () {
        return this.location.path().indexOf('/main') > -1;
    };
    HeaderComponent.prototype.hasLogIn = function () {
        return this.location.path().indexOf('/auth/register') > -1;
    };
    HeaderComponent.prototype.hasLogOut = function () {
        return this.location.path().indexOf('/main') > -1 ||
            this.location.path().indexOf('/profile') > -1;
    };
    HeaderComponent.prototype.hasRegister = function () {
        return this.location.path().indexOf('/auth/login') > -1;
    };
    HeaderComponent.prototype.logOut = function () {
        try {
            localStorage.removeItem('currentUser');
        }
        catch (e) {
            console.log('This browser does not support local storage. [Header]');
        }
        this.storageService.setItem('User removed!');
        // const user: User = JSON.parse(localStorage.getItem('currentUser'));
        // const obj = {
        //   username: user.username,
        //   displayname: user.displayname,
        //   email: user.email,
        //   phone: user.phone,
        //   birthday: user.birthday,
        //   zipcode: user.zipcode,
        //   password: user.password,
        //   loggedin: false,
        //   status: user.status,
        //   avatar: user.avatar
        // };
        // AuthService.makeNewUser(obj);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"] }
            ],
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            src_app_services__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/imagepost/imagepost.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/imagepost/imagepost.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-post {\n  position: relative;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  width: 800px !important;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n.image-post:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.comment-area {\n  position: relative;\n  background-color: white;\n  width: 800px !important;\n  margin-top: 5px;\n}\n\n.no-comment, .comment {\n  padding: 10px;\n}\n\n.card {\n  position: relative;\n  background-color: white;\n  height: 300px !important;\n  overflow: hidden;\n  display: flex;\n}\n\n.author-field {\n  display: -webkit-box;\n  margin-top: 20px;\n  margin-left: 30px;\n  overflow: hidden;\n}\n\n.img-holder {\n  width: 500px !important;\n  float: right;\n  overflow: hidden;\n}\n\n.text-holder {\n  width: 300px !important;\n  height: 130px !important;\n  float: left;\n}\n\n.action-bar {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 300px;\n  height: 80px;\n  box-sizing: border-box;\n  transition: left 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  text-align: center;\n}\n\n.action-button, .see-comments-button {\n  outline: none;\n  position: relative;\n  display: inline-block;\n  line-height: 40px;\n  padding: 0 16px;\n  width: 150px;\n  color: white;\n  border: 1px solid white;\n  background: #FF7171;\n  -webkit-appearance: button;\n  text-transform: none;\n  font-family: sans-serif;\n  font-size: 90%;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.see-comments-button {\n  width: 300px;\n  bottom: 2px;\n}\n\n.action-button:hover {\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);\n}\n\n.see-comments-button:hover {\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);\n}\n\np {\n  display: -webkit-box;\n  margin: 10px 30px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 5;\n}\n\n@media (max-width: 1300px) {\n  .image-post {\n    width: 500px !important;\n  }\n\n  .card {\n    height: 500px !important;\n    width: 500px !important;\n    clear: both;\n  }\n\n  .author-field {\n    margin-top: -5px;\n  }\n\n  .img-holder {\n    position: absolute;\n    margin: 0;\n    clear: both;\n    overflow: visible;\n  }\n\n  .text-holder {\n    width: 500px !important;\n    clear: both;\n    padding-top: 280px;\n    margin: auto;\n  }\n\n  .action-bar {\n    width: 500px !important;\n    height: 40px !important;\n  }\n\n  .see-comments-button {\n    width: 166px;\n    bottom: 0;\n    border-left: 0;\n  }\n\n  .action-button {\n    width: 166px;\n  }\n\n  p {\n    -webkit-line-clamp: 3;\n    margin-top: 10px;\n  }\n\n  .comment-area {\n    width: 500px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbWFnZXBvc3QvaW1hZ2Vwb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDBEQUEwRDtFQUMxRCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUVqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9pbWFnZXBvc3QvaW1hZ2Vwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtcG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW1hZ2UtcG9zdDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi5jb21tZW50LWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubm8tY29tbWVudCwgLmNvbW1lbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmF1dGhvci1maWVsZCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZy1ob2xkZXIge1xuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGV4dC1ob2xkZXIge1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMzBweCAhaW1wb3J0YW50O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmFjdGlvbi1iYXIge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zaXRpb246IGxlZnQgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGlvbi1idXR0b24sIC5zZWUtY29tbWVudHMtYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI0ZGNzE3MTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA5MCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlZS1jb21tZW50cy1idXR0b24ge1xuICB3aWR0aDogMzAwcHg7XG4gIGJvdHRvbTogMnB4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAycHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5zZWUtY29tbWVudHMtYnV0dG9uOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDJweCA0cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxucCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBtYXJnaW46IDEwcHggMzBweDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuaW1hZ2UtcG9zdCB7XG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgLmF1dGhvci1maWVsZCB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuXG4gIC5pbWctaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLnRleHQtaG9sZGVyIHtcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBwYWRkaW5nLXRvcDogMjgwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmFjdGlvbi1iYXIge1xuICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlZS1jb21tZW50cy1idXR0b24ge1xuICAgIHdpZHRoOiAxNjZweDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDE2NnB4O1xuICB9XG5cbiAgcCB7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuY29tbWVudC1hcmVhIHtcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/imagepost/imagepost.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/imagepost/imagepost.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-post\">\n  <div class=\"card\">\n    <div class=\"text-holder\">\n      <div class=\"author-field\">\n        <b>{{ author }}</b>:\n      </div>\n      <article>\n        <p>{{ content }}</p>\n      </article>\n    </div>\n    <div class=\"img-holder\">\n      <img [src]=\"image\" class=\"original-img\" alt=\"\">\n    </div>\n    <div class=\"action-bar\">\n      <button class=\"action-button\">Comment</button>\n      <button class=\"action-button\" style=\"border-left:0;\">Edit</button>\n      <button class=\"see-comments-button\" (click)=\"loadComments()\">{{ btnText }}</button>\n    </div>\n  </div>\n  <div class=\"comment-area\" *ngIf=\"showComments\">\n    <div class=\"no-comment\" *ngIf=\"showComments && this.comments.length === 0\">\n      This post has no comment yet! Shall we leave one here?\n    </div>\n    <div class=\"comment\" *ngFor=\"let comment of comments\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/imagepost/imagepost.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/imagepost/imagepost.component.ts ***!
  \*******************************************************/
/*! exports provided: ImagepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagepostComponent", function() { return ImagepostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/main/main.service */ "./src/app/main/main.service.ts");



var ImagepostComponent = /** @class */ (function () {
    function ImagepostComponent(service) {
        this.service = service;
        this.comments = [];
        this.showComments = false;
        this.btnText = 'See Comments';
    }
    ImagepostComponent.prototype.ngOnInit = function () { };
    ImagepostComponent.prototype.loadComments = function () {
        var _this = this;
        if (!this.showComments) {
            this.service.loadComments(this.author, this.postID).then(function (comments) {
                _this.showComments = true;
                _this.btnText = 'Fold Comments';
                _this.comments = comments;
            });
        }
        else {
            this.showComments = false;
            this.btnText = 'See Comments';
            this.comments = [];
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ImagepostComponent.prototype, "postID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImagepostComponent.prototype, "author", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImagepostComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImagepostComponent.prototype, "image", void 0);
    ImagepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-imagepost',
            template: __webpack_require__(/*! ./imagepost.component.html */ "./src/app/main/imagepost/imagepost.component.html"),
            styles: [__webpack_require__(/*! ./imagepost.component.css */ "./src/app/main/imagepost/imagepost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], ImagepostComponent);
    return ImagepostComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-page {\n  position: absolute;\n  top: 30px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 1150px;\n}\n\n.dashboard {\n  margin-left: 22em;\n}\n\n.userpane {\n  position: fixed;\n  height: 500px !important;\n  width: 20.5em !important;\n  margin-right: 0;\n}\n\n.following {\n  height: 500px !important;\n  width: 20.5em !important;\n  overflow-y: scroll;\n  background-color: #F6F6F6;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n}\n\n.user-grid {\n  grid-gap: 49px;\n}\n\n.post-grid {\n  width: 800px;\n  grid-gap: 20px;\n}\n\n@media (max-width: 1300px) {\n  .main-page {\n    width: 852px;\n  }\n\n  .post-grid {\n    width: 500px;\n    flex-wrap: wrap;\n    line-height: 1.2em;\n  }\n\n  .footer {\n    width: 500px !important;\n  }\n}\n\n.footer {\n  margin: 50px 0;\n  text-align: center;\n}\n\n.accordion_search_bar_container {\n  position: relative;\n  width: 500px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  margin-bottom: 50px;\n  font-size: 20px;\n}\n\n.accordion_search_bar_container:after {\n  content: url('search-icon.png');\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  right: 20px;\n  bottom: 10px;\n}\n\n.accordion_search_bar_container .accordion_search_bar {\n  display: block;\n  margin: 10px auto;\n  width: 100%;\n  padding: 7px 10px;\n  border: 2px solid #cacaca;\n  border-radius: 25px;\n  outline: 0;\n}\n\n.input-box {\n  text-align: center;\n  display: flex;\n  align-items: center;\n}\n\n.input-style-post {\n  background-color: #ffffff;\n  opacity: 0.8;\n  border: none;\n  border-radius: 10px;\n  font-size: 15px;\n  width: 500px;\n  float: left;\n  margin-left: 50px;\n}\n\n.input-button {\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  /* prevents bg color from leaking outside the border */\n  display: inline-block;\n  border: 0;\n  -webkit-appearance: button;\n  /* for input */\n  -webkit-user-select: none;\n  /* for button */\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n\n.btn {\n  background: lightpink;\n  color: #fff;\n  text-align: center;\n  padding: 10px 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  float: right;\n  width: 100px;\n  height: 25px;\n  margin-left: 50px;\n}\n\n.btn {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn input {\n  position: absolute;\n  top: 0;\n  right: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.user_search_bar_container {\n  width: 19em !important;\n  margin-top: 30px;\n  margin-left: 11px;\n}\n\n.user_search_bar {\n  display: block;\n  width: 100%;\n  padding: 7px 10px;\n  border: 2px solid #cacaca;\n  border-radius: 25px;\n  outline: 0;\n}\n\n#add-user {\n  width: 16em !important;\n  margin: 10px;\n}\n\n.profile-msg {\n  margin: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQkFBbUQ7RUFDbkQsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLHNEQUFzRDtFQUN0RCxxQkFBcUI7RUFDckIsU0FBUztFQUNULDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMTE1MHB4O1xufVxuXG4uZGFzaGJvYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDIyZW07XG59XG5cbi51c2VycGFuZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAuNWVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmZvbGxvd2luZyB7XG4gIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwLjVlbSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG59XG5cbi51c2VyLWdyaWQge1xuICBncmlkLWdhcDogNDlweDtcbn1cblxuLnBvc3QtZ3JpZCB7XG4gIHdpZHRoOiA4MDBweDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLm1haW4tcGFnZSB7XG4gICAgd2lkdGg6IDg1MnB4O1xuICB9XG5cbiAgLnBvc3QtZ3JpZCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luOiA1MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjY29yZGlvbl9zZWFyY2hfYmFyX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYWNjb3JkaW9uX3NlYXJjaF9iYXJfY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZycpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5hY2NvcmRpb25fc2VhcmNoX2Jhcl9jb250YWluZXIgLmFjY29yZGlvbl9zZWFyY2hfYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYWNhY2E7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5pbnB1dC1ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1zdHlsZS1wb3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMC44O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5pbnB1dC1idXR0b24ge1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBwcmV2ZW50cyBiZyBjb2xvciBmcm9tIGxlYWtpbmcgb3V0c2lkZSB0aGUgYm9yZGVyICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogZm9yIGlucHV0ICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIGZvciBidXR0b24gKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogbGlnaHRwaW5rO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyX3NlYXJjaF9iYXJfY29udGFpbmVyIHtcbiAgd2lkdGg6IDE5ZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG5cbi51c2VyX3NlYXJjaF9iYXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2FjYWNhO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvdXRsaW5lOiAwO1xufVxuXG4jYWRkLXVzZXIge1xuICB3aWR0aDogMTZlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5wcm9maWxlLW1zZyB7XG4gIG1hcmdpbjogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content main-page\">\n\n  <div class=\"input-box\">\n    <textarea class=\"input-style-post\" placeholder=\"What's on your mind?\" rows=\"5\" [(ngModel)]=\"postText\"></textarea>\n    <div class=\"btn\">\n      <span>upload</span>\n      <input class=\"upload-image-input input-button\" type=\"file\">\n    </div>\n    <div class=\"btn\" (click)=\"makePost()\">\n      <span>to post</span>\n    </div>\n    <div class=\"btn\" (click)=\"changeStatus(postText);this.postText = '';\">\n      <span>to status</span>\n    </div>\n    <div class=\"btn\" (click)=\"this.postText = '';\">\n      <span>cancel</span>\n    </div>\n  </div>\n\n  <div class=\"accordion_search_bar_container\">\n    <input type=\"search\" class=\"accordion_search_bar\" placeholder=\"  Search Posts\" [(ngModel)]=\"searchText\"\n           (change)=\"search()\" (keyup)=\"search()\" (paste)=\"search()\" (click)=\"search()\"/>\n  </div>\n\n  <div class=\"userpane\">\n    <div class=\"following\">\n      <div class=\"grid-container user-grid\" #userContainer></div>\n    </div>\n    <div class=\"user_search_bar_container\">\n      <input type=\"search\" class=\"user_search_bar\" placeholder=\"  Search User\" [(ngModel)]=\"addText\"\n             (change)=\"this.adding = false;\" (keyup)=\"this.adding = false;\" (paste)=\"this.adding = false;\"\n             (click)=\"this.adding = false;\"/>\n    </div>\n    <div class=\"btn\" id=\"add-user\" (click)=\"addFollowee();\">\n      <span>Add</span>\n    </div>\n    <div class=\"profile-msg\" *ngIf=\"adding && addSuccess\">\n      > User added! You're now following \"<b>{{ lastFollowed }}</b>\".\n    </div>\n    <div class=\"profile-msg\" *ngIf=\"adding && addFailure\">\n      > ERROR! Could not find user \"<b>{{ lastFollowed }}</b>\".\n    </div>\n    <div class=\"profile-msg\" *ngIf=\"adding && addMyself\">\n      > ERROR! You cannot follow yourself.\n    </div>\n    <div class=\"profile-msg\" *ngIf=\"adding && addAlreadyFollowing\">\n      > ERROR! You're already following user \"<b>{{ addText }}</b>\".\n    </div>\n  </div>\n\n  <div class=\"dashboard\">\n    <div class=\"grid-container post-grid\" #postContainer></div>\n    <div id=\"footer\" class=\"footer\" [innerHtml]=\"footer\"></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _imagepost_imagepost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagepost/imagepost.component */ "./src/app/main/imagepost/imagepost.component.ts");
/* harmony import */ var _textpost_textpost_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textpost/textpost.component */ "./src/app/main/textpost/textpost.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/main/user/user.component.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.service */ "./src/app/main/main.service.ts");







var MainComponent = /** @class */ (function () {
    function MainComponent(sanitizer, resolver, service) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.resolver = resolver;
        this.service = service;
        this.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.users = [];
        this.content = [];
        this.image = [];
        this.searchText = '';
        this.addText = '';
        this.posts = [];
        this.cleared = true;
        this.adding = false;
        this.lastFollowed = '';
        this.addSuccess = false;
        this.addMyself = false;
        this.addFailure = false;
        this.addAlreadyFollowing = false;
        this.nextID = 0;
        this.postText = '';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var text = '@Copyright: Rylie Gao<br/>' + new Date(Number(Date.now()));
        this.footer = this.sanitizer.bypassSecurityTrustHtml(text);
        this.serviceSubscription = this.service.onRemove.subscribe({
            next: function (event) {
                _this.loadPosts();
            }
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadPosts();
    };
    MainComponent.prototype.addFollowee = function () {
        var _this = this;
        this.addSuccess = false;
        this.addFailure = false;
        this.addMyself = false;
        this.addAlreadyFollowing = false;
        this.adding = true;
        if (this.addText === this.currentUser.username) {
            this.addMyself = true;
            return;
        }
        else if (this.service.followInfo.following.indexOf(this.addText) >= 0) {
            this.addAlreadyFollowing = true;
            return;
        }
        this.lastFollowed = this.addText;
        this.service.addFollowee(this.addText).then(function (newFollowee) {
            if (newFollowee) {
                _this.addSuccess = true;
                _this.addUser(newFollowee.username, newFollowee.displayname, newFollowee.avatar, newFollowee.status, false, 0);
                _this.loadPosts();
            }
            else {
                _this.addFailure = true;
            }
        });
    };
    MainComponent.prototype.loadUsers = function () {
        var _this = this;
        this.service.loadUsers(this.currentUser.username).then(function (data) {
            var _loop_1 = function (i) {
                _this.service.getFolloweeInfo(data.following[i]).then(function (followee) {
                    if (followee) {
                        _this.addUser(followee.username, followee.displayname, followee.avatar, followee.status, i === 0);
                    }
                });
            };
            for (var i = 0; i < data.following.length; i++) {
                _loop_1(i);
            }
        });
    };
    MainComponent.prototype.loadPosts = function () {
        var _this = this;
        this.service.loadPosts().then(function (data) {
            _this.posts = data;
            _this.nextID = 0;
            for (var i = 0; i < data.length; i++) {
                // only clear former posts on entry
                if (data[i].author === _this.currentUser.username) {
                    _this.nextID++;
                }
                if (data[i].image || data[i].image === '') {
                    _this.createImagePost(data[i].postID, data[i].author, data[i].content, data[i].image, i === 0);
                }
                else {
                    _this.createTextPost(data[i].postID, data[i].author, data[i].content, i === 0);
                }
            }
        });
    };
    MainComponent.prototype.search = function () {
        if (this.searchText === null || this.searchText === '') {
            if (!this.cleared) {
                this.cleared = true;
                this.loadPosts();
            }
            return;
        }
        this.cleared = false;
        var found = false;
        for (var i = 0; i < this.posts.length; i++) {
            var str = this.posts[i].content;
            if (str.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0) {
                this.createImagePost(this.posts[i].postID, this.posts[i].author, this.posts[i].content, this.posts[i].image, !found);
                found = true;
            }
        }
        if (!found) {
            this.postContainer.clear();
        }
    };
    MainComponent.prototype.makePost = function () {
        this.createTextPost(this.nextID, this.currentUser.username, this.postText, false, 0);
        this.postText = '';
        this.nextID++;
    };
    MainComponent.prototype.createTextPost = function (postID, author, content, clear, index) {
        if (index === void 0) { index = this.postContainer.length; }
        if (clear) {
            this.postContainer.clear();
            index = 0;
        }
        var factory = this.resolver.resolveComponentFactory(_textpost_textpost_component__WEBPACK_IMPORTED_MODULE_4__["TextpostComponent"]);
        this.post2Ref = this.postContainer.createComponent(factory, index);
        this.post2Ref.instance.postID = postID;
        this.post2Ref.instance.author = author;
        this.post2Ref.instance.content = content;
    };
    MainComponent.prototype.createImagePost = function (postID, author, content, image, clear, index) {
        if (index === void 0) { index = this.postContainer.length; }
        if (clear) {
            this.postContainer.clear();
            index = 0;
        }
        var factory = this.resolver.resolveComponentFactory(_imagepost_imagepost_component__WEBPACK_IMPORTED_MODULE_3__["ImagepostComponent"]);
        this.post1Ref = this.postContainer.createComponent(factory, index);
        this.post1Ref.instance.postID = postID;
        this.post1Ref.instance.author = author;
        this.post1Ref.instance.content = content;
        this.post1Ref.instance.image = image;
    };
    MainComponent.prototype.addUser = function (username, displayname, avatar, status, clear, index) {
        if (index === void 0) { index = this.userContainer.length; }
        if (clear) {
            this.userContainer.clear();
        }
        var factory = this.resolver.resolveComponentFactory(_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]);
        this.userRef = this.userContainer.createComponent(factory, index);
        this.userRef.instance.username = username;
        this.userRef.instance.displayname = displayname;
        this.userRef.instance.avatar = avatar;
        this.userRef.instance.status = status;
    };
    MainComponent.prototype.changeStatus = function (status) {
        this.service.changeStatus(status);
    };
    MainComponent.prototype.ngOnDestroy = function () {
        if (this.post1Ref) {
            this.post1Ref.destroy();
        }
        if (this.post2Ref) {
            this.post2Ref.destroy();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('postContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainComponent.prototype, "postContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainComponent.prototype, "userContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainComponent.prototype, "eventEmitter", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            providers: [_imagepost_imagepost_component__WEBPACK_IMPORTED_MODULE_3__["ImagepostComponent"], _textpost_textpost_component__WEBPACK_IMPORTED_MODULE_4__["TextpostComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]],
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.service.ts":
/*!**************************************!*\
  !*** ./src/app/main/main.service.ts ***!
  \**************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




var MainService = /** @class */ (function () {
    function MainService(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MainService.prototype.loadUsers = function (username) {
        var _this = this;
        this.username = username;
        return this.httpService.get('assets/following.json').toPromise().then(function (data) {
            var followers = [];
            var following = [];
            if (data[username]) {
                followers = data[username].followers;
                following = data[username].following;
            }
            _this.followInfo = { followers: followers, following: following };
            return { followers: followers, following: following };
        }, function (err) {
            console.log(err.message);
            _this.followInfo = { followers: [], following: [] };
            return { followers: [], following: [] };
        });
    };
    MainService.prototype.getFolloweeInfo = function (followee) {
        return this.httpService.get('assets/profile.json').toPromise().then(function (userinfo) {
            if (userinfo[followee]) {
                return {
                    username: userinfo[followee].username,
                    displayname: userinfo[followee].displayname ? userinfo[followee].displayname : userinfo[followee].username,
                    status: userinfo[followee].status,
                    avatar: userinfo[followee].avatar,
                };
            }
            else {
                return null;
            }
        }, function (err) {
            console.log(err.message);
            return null;
        });
    };
    MainService.prototype.loadPosts = function () {
        var _this = this;
        return this.httpService.get('assets/posts.json').toPromise().then(function (posts) {
            var followeePosts = [];
            if (posts[_this.username]) {
                followeePosts.push.apply(followeePosts, posts[_this.username]);
            }
            for (var _i = 0, _a = _this.followInfo.following; _i < _a.length; _i++) {
                var followee = _a[_i];
                if (posts[followee]) {
                    followeePosts.push.apply(followeePosts, posts[followee]);
                }
            }
            return followeePosts;
        });
    };
    MainService.prototype.addFollowee = function (username) {
        var _this = this;
        return this.httpService.get('assets/profile.json').toPromise().then(function (userinfo) {
            if (userinfo[username]) {
                _this.followInfo.following.push(userinfo[username].username);
                // write to server side file
                // add this user to followee's followers' list
                return {
                    username: userinfo[username].username,
                    displayname: userinfo[username].displayname ? userinfo[username].displayname : userinfo[username].username,
                    status: userinfo[username].status,
                    avatar: userinfo[username].avatar,
                };
            }
            else {
                return null;
            }
        }, function (err) {
            console.log(err.message);
            return null;
        });
    };
    MainService.prototype.removeFollowee = function (username) {
        for (var i = 0; i < this.followInfo.following.length; i++) {
            if (this.followInfo.following[i] === username) {
                this.followInfo.following.splice(i, 1);
            }
        }
        this.onRemove.emit();
        // write to server side file
        // remove this user from followee's followers' list
    };
    MainService.prototype.changeStatus = function (status) {
        try {
            if (localStorage.getItem('currentUser')) {
                var user = JSON.parse(localStorage.getItem('currentUser'));
                var newUser = {
                    username: user.username,
                    displayname: user.displayname,
                    email: user.email,
                    phone: user.phone,
                    birthday: user.birthday,
                    zipcode: user.zipcode,
                    password: user.password,
                    loggedin: user.loggedin,
                    avatar: user.avatar,
                    status: status
                };
                this.authService.makeNewUser(newUser);
            }
        }
        catch (e) {
            console.log('This browser does not support local storage.');
        }
    };
    MainService.prototype.loadComments = function (author, postID) {
        return this.httpService.get('assets/posts.json').toPromise().then(function (data) {
            var comments = [];
            if (data[author]) {
                for (var _i = 0, _a = data[author]; _i < _a.length; _i++) {
                    var post = _a[_i];
                    if (post.postID === postID) {
                        comments = post.comments;
                        break;
                    }
                }
            }
            return comments;
        });
    };
    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/main/textpost/textpost.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/textpost/textpost.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-post {\n  position: relative;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  width: 800px !important;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n.text-post:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.comment-area {\n  position: relative;\n  background-color: white;\n  width: 800px !important;\n  margin-top: 5px;\n}\n\n.no-comment, .comment {\n  padding: 10px;\n}\n\n.author-field {\n  float: left;\n  display: -webkit-box;\n  margin: 20px 10px 20px 30px;\n  overflow: hidden;\n}\n\n.card {\n  position: relative;\n  background-color: white;\n  height: 130px !important;\n  overflow: hidden;\n  display: flex;\n}\n\n.text-holder {\n  width: 450px !important;\n  height: 60px !important;\n  float: right;\n}\n\n.action-bar {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 300px;\n  height: 130px;\n  box-sizing: border-box;\n  transition: left 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  text-align: center;\n}\n\n.action-button, .see-comments-button {\n  outline: none;\n  position: relative;\n  display: inline-block;\n  line-height: 65px;\n  padding: 0 16px;\n  width: 150px;\n  color: white;\n  border: 1px solid white;\n  background: #FF7171;\n  -webkit-appearance: button;\n  text-transform: none;\n  font-family: sans-serif;\n  font-size: 90%;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.see-comments-button {\n  width: 300px;\n  bottom: 2px;\n}\n\n.see-comments-button {\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);\n}\n\n.action-button:hover {\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);\n}\n\np {\n  display: -webkit-box;\n  margin: 20px 10px 20px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 5;\n}\n\n@media (max-width: 1300px) {\n  .text-post {\n    width: 500px !important;\n  }\n\n  .card {\n    height: 180px !important;\n    clear: both;\n  }\n\n  .img-holder {\n    position: absolute;\n    margin: 0;\n    clear: both;\n    overflow: visible;\n  }\n\n  .text-holder {\n    width: 500px !important;\n    clear: both;\n  }\n\n  .action-bar {\n    width: 500px !important;\n    height: 40px !important;\n  }\n\n  .see-comments-button {\n    bottom: 0;\n    border-left: 0;\n  }\n\n  .action-button, .see-comments-button {\n    width: 166px;\n    height: 40px;\n    line-height: 40px;\n  }\n\n  p {\n    -webkit-line-clamp: 3;\n    margin-right: 20px;\n  }\n\n  .comment-area {\n    width: 500px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90ZXh0cG9zdC90ZXh0cG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMERBQTBEO0VBQzFELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBRXhCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi90ZXh0cG9zdC90ZXh0cG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGV4dC1wb3N0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLmNvbW1lbnQtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5uby1jb21tZW50LCAuY29tbWVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hdXRob3ItZmllbGQge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1hcmdpbjogMjBweCAxMHB4IDIwcHggMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZXh0LWhvbGRlciB7XG4gIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYWN0aW9uLWJhciB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiBsZWZ0IDIwMG1zIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24tYnV0dG9uLCAuc2VlLWNvbW1lbnRzLWJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogNjVweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNGRjcxNzE7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWUtY29tbWVudHMtYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3R0b206IDJweDtcbn1cblxuLnNlZS1jb21tZW50cy1idXR0b24ge1xuICB0ZXh0LXNoYWRvdzogMnB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uYWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAycHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbnAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgbWFyZ2luOiAyMHB4IDEwcHggMjBweCAwO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC50ZXh0LXBvc3Qge1xuICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuXG4gIC5pbWctaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLnRleHQtaG9sZGVyIHtcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuXG4gIC5hY3Rpb24tYmFyIHtcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWUtY29tbWVudHMtYnV0dG9uIHtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbiwgLnNlZS1jb21tZW50cy1idXR0b24ge1xuICAgIHdpZHRoOiAxNjZweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIH1cblxuICBwIHtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLmNvbW1lbnQtYXJlYSB7XG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/textpost/textpost.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/textpost/textpost.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-post\">\n  <div class=\"card\">\n    <div class=\"text-holder\">\n      <div class=\"author-field\">\n        <b>{{ author }}</b>:\n      </div>\n      <article>\n        <p>{{ content }}</p>\n      </article>\n    </div>\n    <div class=\"action-bar\">\n      <button class=\"action-button\">Comment</button>\n      <button class=\"action-button\" style=\"border-left:0;\">Edit</button>\n      <button class=\"see-comments-button\" (click)=\"loadComments()\">{{ btnText }}</button>\n    </div>\n  </div>\n  <div class=\"comment-area\" *ngIf=\"showComments\">\n    <div class=\"no-comment\" *ngIf=\"showComments && this.comments.length === 0\">\n      This post has no comment yet! Shall we leave one here?\n    </div>\n    <div class=\"comment\" *ngFor=\"let comment of comments\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/textpost/textpost.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/textpost/textpost.component.ts ***!
  \*****************************************************/
/*! exports provided: TextpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextpostComponent", function() { return TextpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/main/main.service */ "./src/app/main/main.service.ts");



var TextpostComponent = /** @class */ (function () {
    function TextpostComponent(service) {
        this.service = service;
        this.comments = [];
        this.showComments = false;
        this.btnText = 'See Comments';
    }
    TextpostComponent.prototype.ngOnInit = function () { };
    TextpostComponent.prototype.loadComments = function () {
        var _this = this;
        if (!this.showComments) {
            this.service.loadComments(this.author, this.postID).then(function (comments) {
                _this.showComments = true;
                _this.btnText = 'Fold Comments';
                _this.comments = comments;
            });
        }
        else {
            this.showComments = false;
            this.btnText = 'See Comments';
            this.comments = [];
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextpostComponent.prototype, "postID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextpostComponent.prototype, "author", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextpostComponent.prototype, "content", void 0);
    TextpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-textpost',
            template: __webpack_require__(/*! ./textpost.component.html */ "./src/app/main/textpost/textpost.component.html"),
            styles: [__webpack_require__(/*! ./textpost.component.css */ "./src/app/main/textpost/textpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], TextpostComponent);
    return TextpostComponent;
}());



/***/ }),

/***/ "./src/app/main/user/user.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/user/user.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway|Varela+Round|Coda);\n@import url(http://weloveiconfonts.com/api/?family=entypo);\n[class*=\"entypo-\"]:before {\n  font-family: 'entypo', sans-serif;\n}\n.user-profile {\n  width: 20em !important;\n  height: 8em;\n  background: #fff;\n  border-radius: .3em;\n  margin-bottom: 50px;\n}\n.user-profile  .username {\n  margin: -7em auto auto 7.9em;\n  color: #658585;\n  font-size: 1em;\n  font-family: \"Coda\", sans-serif;\n  font-weight: bold;\n}\n.user-profile  .bio {\n  display: inline-block;\n  margin: auto auto auto 9em;\n  color: #e76043;\n  font-size: .87em;\n  font-family: \"varela round\", sans-serif;\n}\n.user-profile > .status {\n  margin: 0.1em 0 auto auto;\n  width: 14em;\n  height: 4.8em;\n  color: #c0c5c5;\n  font-size: .87em;\n  font-family: \"varela round\", sans-serif;\n  -webkit-line-clamp: 3;\n}\n.user-profile > img.avatar {\n  padding: .7em;\n  margin-left: 0.25em;\n  margin-top: 0.3em;\n  height: 6.23em;\n  width: 6.23em;\n  border-radius: 18em;\n}\n.user-profile ul.data {\n  margin: 1em auto;\n  height: 3em;\n  background: #C0C0C0;\n  text-align: center;\n  border-radius: 0 0 .3em .3em;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n.user-profile li {\n  margin: 0 auto;\n  padding: 0.8em;\n  width: 25%;\n  display: table-cell;\n  text-align: center;\n}\n.user-profile span {\n  font-family: \"varela round\", sans-serif;\n  color: #F6F6F6;\n  white-space: nowrap;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n.user-profile span:hover {\n  color: #E2E2E2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUFDOUUsMERBQTBEO0FBRTFEO0VBQ0UsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUNBQXVDO0FBQ3pDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDBCQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXl8VmFyZWxhK1JvdW5kfENvZGEpO1xuQGltcG9ydCB1cmwoaHR0cDovL3dlbG92ZWljb25mb250cy5jb20vYXBpLz9mYW1pbHk9ZW50eXBvKTtcblxuW2NsYXNzKj1cImVudHlwby1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdlbnR5cG8nLCBzYW5zLXNlcmlmO1xufVxuXG4udXNlci1wcm9maWxlIHtcbiAgd2lkdGg6IDIwZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA4ZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi51c2VyLXByb2ZpbGUgIC51c2VybmFtZSB7XG4gIG1hcmdpbjogLTdlbSBhdXRvIGF1dG8gNy45ZW07XG4gIGNvbG9yOiAjNjU4NTg1O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1mYW1pbHk6IFwiQ29kYVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVzZXItcHJvZmlsZSAgLmJpbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byA5ZW07XG4gIGNvbG9yOiAjZTc2MDQzO1xuICBmb250LXNpemU6IC44N2VtO1xuICBmb250LWZhbWlseTogXCJ2YXJlbGEgcm91bmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnVzZXItcHJvZmlsZSA+IC5zdGF0dXMge1xuICBtYXJnaW46IDAuMWVtIDAgYXV0byBhdXRvO1xuICB3aWR0aDogMTRlbTtcbiAgaGVpZ2h0OiA0LjhlbTtcbiAgY29sb3I6ICNjMGM1YzU7XG4gIGZvbnQtc2l6ZTogLjg3ZW07XG4gIGZvbnQtZmFtaWx5OiBcInZhcmVsYSByb3VuZFwiLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG59XG5cbi51c2VyLXByb2ZpbGUgPiBpbWcuYXZhdGFyIHtcbiAgcGFkZGluZzogLjdlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcbiAgbWFyZ2luLXRvcDogMC4zZW07XG4gIGhlaWdodDogNi4yM2VtO1xuICB3aWR0aDogNi4yM2VtO1xuICBib3JkZXItcmFkaXVzOiAxOGVtO1xufVxuXG4udXNlci1wcm9maWxlIHVsLmRhdGEge1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBoZWlnaHQ6IDNlbTtcbiAgYmFja2dyb3VuZDogI0MwQzBDMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwIDAgLjNlbSAuM2VtO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xufVxuXG4udXNlci1wcm9maWxlIGxpIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAuOGVtO1xuICB3aWR0aDogMjUlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyLXByb2ZpbGUgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcInZhcmVsYSByb3VuZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0Y2RjZGNjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51c2VyLXByb2ZpbGUgc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiAjRTJFMkUyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/user/user.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/user/user.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js\"></script>\n<div class=\"user-profile\" *ngIf=\"show\">\n  <img class=\"avatar\" [src]=\"avatar\" alt=\"\"/>\n  <div class=\"username\">{{ displayname }}</div>\n  <div class=\"status\">{{ status }}</div>\n  <ul class=\"data\">\n    <li>\n      <span class=\"entypo-heart\"> {{ hearts }}</span>\n    </li>\n    <li>\n      <span class=\"entypo-eye\"> {{ following }}</span>\n    </li>\n    <li>\n      <span class=\"entypo-user\"> {{ followers }}</span>\n    </li>\n    <li (click)=\"removeFollowee()\">\n      <span>Unfollow</span>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/main/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/main/main.service */ "./src/app/main/main.service.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent(service) {
        this.service = service;
        this.show = true;
        this.hearts = 127;
        this.following = 853;
        this.followers = 505;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.removeFollowee = function () {
        this.show = false;
        this.service.removeFollowee(this.username);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserComponent.prototype, "displayname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserComponent.prototype, "avatar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserComponent.prototype, "status", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/main/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/main/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n.edit-profile {\n  position: absolute;\n  left: 10%;\n  display: flex;\n}\n\n.profile-input {\n  border: solid 1px #969696;\n}\n\n.form-header {\n  text-align: center;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #474747;\n  padding: 1rem;\n  margin: 0 0 1.5rem;\n  position: relative;\n  right: 1rem;\n  top: 1.25rem;\n  transition: color .2s ease;\n}\n\n.form-grp label {\n  display: block;\n  margin: 0.5rem 0;\n  font-weight: 700;\n  letter-spacing: .2px;\n  font-size: .875rem;\n  color: #474747;\n}\n\n.form-grp label.inline {\n  display: inline-block;\n  width: 100px;\n}\n\n.form-grp label.inline.right {\n  text-align: right;\n  padding-right: .5rem;\n}\n\n.submit-button {\n  background: transparent;\n  color: #474747;\n  width:150px;\n  height: 50px;\n  margin: 25px 0;\n}\n\n.submit-button:hover {\n  background: #969696;\n}\n\n.left-pane {\n  float: left;\n}\n\n.right-pane {\n  float: right;\n  height: 500px;\n  margin: 100px;\n  line-height: 2em;\n}\n\n.profile-msg {\n  padding: 20px;\n}\n\n.input-button {\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  /* prevents bg color from leaking outside the border */\n  display: inline-block;\n  border: 0;\n  -webkit-appearance: button;\n  /* for input */\n  -webkit-user-select: none;\n  /* for button */\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n\n.btn {\n  background: lightpink;\n  color: #fff;\n  text-align: center;\n  padding: 10px 25px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.btn {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn input {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-height: 100%;\n  min-width: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEOztBQUU5RDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLHNEQUFzRDtFQUN0RCxxQkFBcUI7RUFDckIsU0FBUztFQUNULDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcblxuLmVkaXQtcHJvZmlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvZmlsZS1pbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICM5Njk2OTY7XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ3NDc0NztcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwIDAgMS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxcmVtO1xuICB0b3A6IDEuMjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlO1xufVxuXG4uZm9ybS1ncnAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgY29sb3I6ICM0NzQ3NDc7XG59XG5cbi5mb3JtLWdycCBsYWJlbC5pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmZvcm0tZ3JwIGxhYmVsLmlubGluZS5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM0NzQ3NDc7XG4gIHdpZHRoOjE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5Njk2OTY7XG59XG5cbi5sZWZ0LXBhbmUge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJpZ2h0LXBhbmUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5cbi5wcm9maWxlLW1zZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbnB1dC1idXR0b24ge1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBwcmV2ZW50cyBiZyBjb2xvciBmcm9tIGxlYWtpbmcgb3V0c2lkZSB0aGUgYm9yZGVyICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogZm9yIGlucHV0ICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIGZvciBidXR0b24gKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogbGlnaHRwaW5rO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG4gaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content edit-profile\">\n\n  <div class=\"left-pane\">\n    <div class=\"form-header\">Edit Your Profile</div>\n    <div class=\"btn btn\">\n      <span>Upload Your Profile Picture</span>\n      <input class=\"upload-image-input input-button\" type=\"file\">\n    </div>\n    <div class=\"form-grp\">\n      <label>Display Name</label>\n      <input class=\"profile-input\"\n             placeholder=\"Current display name: {{ displayname }}\"\n             [(ngModel)]=\"dn\"\n             type=\"text\"/>\n    </div>\n    <div class=\"form-grp\">\n      <label>Email Address</label>\n      <input class=\"profile-input\"\n             placeholder=\"Current email address: {{ email }}\"\n             [(ngModel)]=\"ea\"\n             type=\"text\"/>\n    </div>\n    <div class=\"form-grp\">\n      <label>Phone Number</label>\n      <input class=\"profile-input\"\n             placeholder=\"Current phone number: {{ phone }}\"\n             [(ngModel)]=\"ph\"\n             type=\"text\"/>\n    </div>\n    <div class=\"form-grp\">\n      <label>Zip Code</label>\n      <input class=\"profile-input\"\n             placeholder=\"Current zip code: {{ zipcode }}\"\n             [(ngModel)]=\"zc\"\n             type=\"text\"/>\n    </div>\n    <div class=\"form-grp\">\n      <label>Password</label>\n      <input class=\"profile-input\" [(ngModel)]=\"pw1\" type=\"password\"/>\n    </div>\n    <div class=\"form-grp\">\n      <label>Confirm Password</label>\n      <input class=\"profile-input\" [(ngModel)]=\"pw2\" type=\"password\"/>\n    </div>\n    <button id=\"submit-change\" class=\"buttons submit submit-button\" (click)=\"onSubmit()\">Submit Changes</button>\n  </div>\n\n  <div class=\"right-pane\">\n    <div class=\"profile-msg\" *ngIf=\"pwError\">\n      > ERROR: The passwords you entered do not match.\n    </div>\n    <div class=\"profile-msg\" *ngIf=\"pwSuccess\">\n      > You have successfully updated your password.\n    </div>\n    <br>\n    <div class=\"profile-msg\" *ngIf=\"dnSuccess\">\n      > You have successfully updated your display name.\n    </div>\n    <br>\n    <div class=\"profile-msg\" *ngIf=\"eaError\">\n      > Please enter a valid email address.\n    </div>\n    <div class=\"profile-msg\" *ngIf=\"eaSuccess\">\n      > You have successfully updated your email address.\n    </div>\n    <br>\n    <div class=\"profile-msg\" *ngIf=\"phError\">\n      > Please enter a valid phone number matching the format: 000-000-0000\n    </div>\n    <div class=\"profile-msg\" *ngIf=\"phSuccess\">\n      > You have successfully updated your phone number.\n    </div>\n    <br>\n    <div class=\"profile-msg\" *ngIf=\"zcError\">\n      > Please enter a valid five-digit zip code.\n    </div>\n    <div class=\"profile-msg\" *ngIf=\"zcSuccess\">\n      > You have successfully updated your zip code.\n    </div>\n    <br>\n    <div class=\"profile-msg\" *ngIf=\"submitted && !(pwError || pwSuccess || dnSuccess || eaError || eaSuccess ||\n    phError || phSuccess || zcError || zcSuccess)\">\n      > Nothing have changed. Please try again.\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.displayname = '';
        this.email = '';
        this.phone = '';
        this.zipcode = '';
        this.password = '';
        this.submitted = false;
        this.pwError = false;
        this.pwSuccess = false;
        this.dnSuccess = false;
        this.eaError = false;
        this.eaSuccess = false;
        this.phError = false;
        this.phSuccess = false;
        this.zcError = false;
        this.zcSuccess = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        try {
            if (localStorage.getItem('currentUser')) {
                var user = JSON.parse(localStorage.getItem('currentUser'));
                this.displayname = user.displayname;
                this.email = user.email;
                this.phone = user.phone;
                this.zipcode = user.zipcode;
                this.password = user.password;
            }
        }
        catch (e) {
            console.log('This browser does not support local storage.');
        }
    };
    ProfileComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.pwError = false;
        this.pwSuccess = false;
        this.dnSuccess = false;
        this.eaError = false;
        this.eaSuccess = false;
        this.phError = false;
        this.phSuccess = false;
        this.zcError = false;
        this.zcSuccess = false;
        if (this.pw1 !== this.pw2) {
            this.pwError = true;
        }
        else if (this.pw1) {
            if (this.password !== this.pw1) {
                this.password = this.pw1;
                this.pwSuccess = true;
            }
        }
        if (this.dn && this.dn !== this.displayname) {
            this.displayname = this.dn;
            this.dnSuccess = true;
        }
        if (this.ea && this.ea !== this.email) {
            if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(this.ea)) {
                this.email = this.ea;
                this.eaSuccess = true;
            }
            else {
                this.eaError = true;
            }
        }
        if (this.ph && this.ph !== this.phone) {
            if (/^[1-9]\d{2}-\d{3}-\d{4}$/.test(this.ph)) {
                this.phone = this.ph;
                this.phSuccess = true;
            }
            else {
                this.phError = true;
            }
        }
        if (this.zc && this.zc !== this.zipcode) {
            if (/^\d{5}$/.test(this.zc)) {
                this.zipcode = this.zc;
                this.zcSuccess = true;
            }
            else {
                this.zcError = true;
            }
        }
        try {
            if (localStorage.getItem('currentUser')) {
                var user = JSON.parse(localStorage.getItem('currentUser'));
                var newUser = {
                    username: user.username,
                    displayname: this.displayname,
                    email: this.email,
                    phone: this.phone,
                    birthday: user.birthday,
                    zipcode: this.zipcode,
                    password: this.password,
                    loggedin: true,
                    status: user.status,
                    avatar: user.avatar
                };
                this.authService.makeNewUser(newUser);
            }
        }
        catch (e) {
            console.log('This browser does not support local storage.');
        }
        if (!(this.pwError || this.eaError || this.phError || this.zcError)) {
            this.pw1 = '';
            this.pw2 = '';
            this.dn = '';
            this.ea = '';
            this.ph = '';
            this.zc = '';
        }
        this.submitted = false;
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gyuanrui/Desktop/front-end-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map