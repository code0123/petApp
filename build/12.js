webpackJsonp([12],{

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePageModule", function() { return AdminHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_home__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminHomePageModule = (function () {
    function AdminHomePageModule() {
    }
    AdminHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_home__["a" /* AdminHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_home__["a" /* AdminHomePage */]),
            ],
        })
    ], AdminHomePageModule);
    return AdminHomePageModule;
}());

//# sourceMappingURL=admin-home.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminHomePage = (function () {
    function AdminHomePage(navCtrl, navParams, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
    }
    AdminHomePage.prototype.ionViewDidLoad = function () {
    };
    AdminHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-home',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-home\admin-home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Admin Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="box green">\n    <div class="iconBlock">\n      <ion-icon name="people"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">78</p>\n      <h3>Registered Users</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n\n  <div class="box blue">\n    <div class="iconBlock">\n      <ion-icon name="pricetag"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">25</p>\n      <h3>Buy &amp; Sell Pets</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n\n  <div class="box pink">\n    <div class="iconBlock">\n      <ion-icon name="paw"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">42</p>\n      <h3>Lost Pets</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n  <div class="box indigo">\n    <div class="iconBlock">\n      <ion-icon name="shirt"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">2</p>\n      <h3>Groom Pet Videos</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n  <div class="box amber">\n    <div class="iconBlock">\n      <ion-icon name="help-buoy"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">1</p>\n      <h3>Train Pet Videos</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-home\admin-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], AdminHomePage);
    return AdminHomePage;
}());

//# sourceMappingURL=admin-home.js.map

/***/ })

});
//# sourceMappingURL=12.js.map