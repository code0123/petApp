webpackJsonp([15],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePageModule", function() { return AdminHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_home__ = __webpack_require__(573);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_home__["a" /* AdminHomePage */]),
            ],
        })
    ], AdminHomePageModule);
    return AdminHomePageModule;
}());

//# sourceMappingURL=admin-home.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(329);
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
    function AdminHomePage(navCtrl, navParams, authProvider, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    AdminHomePage.prototype.ionViewDidLoad = function () {
    };
    AdminHomePage.prototype.pushPage = function (page) {
        this.navCtrl.push(page);
    };
    AdminHomePage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Logout Confirmation?',
            message: 'Are you sure do you want to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.authProvider.logout().then(function () {
                            localStorage.clear();
                            _this.navCtrl.push('HomePage');
                        }).catch(function (err) {
                            var toast = _this.toastCtrl.create({
                                message: err.message,
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-home',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-home\admin-home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Purrs &amp; Paws Admin Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="box green" (click)="pushPage(\'AdminRegisteredUserPage\')">\n    <div class="iconBlock">\n      <ion-icon name="people"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">78</p>\n      <h3>Registered Users</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n\n  <div class="box blue" (click)="pushPage(\'AdminBuyAndSellPage\')">\n    <div class="iconBlock">\n      <ion-icon name="pricetag"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">25</p>\n      <h3>Buy &amp; Sell Pets</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n\n  <div class="box pink" (click)="pushPage(\'AdminLostPetsPage\')">\n    <div class="iconBlock">\n      <ion-icon name="paw"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">42</p>\n      <h3>Lost Pets</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n  <div class="box indigo" (click)="pushPage(\'AdminGroomPetPage\')">\n    <div class="iconBlock">\n      <ion-icon name="shirt"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">2</p>\n      <h3>Groom Pet Videos</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n  <div class="box amber" (click)="pushPage(\'AdminTrainPetPage\')">\n    <div class="iconBlock">\n      <ion-icon name="help-buoy"></ion-icon>\n    </div>\n    <div class="titleBlock">\n      <p class="count">1</p>\n      <h3>Train Pet Videos</h3>\n    </div>\n    <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n  </div>\n\n  <ion-fab bottom right>\n      <button ion-fab (click)="logout()" class="logout"><ion-icon name="log-out"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-home\admin-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AdminHomePage);
    return AdminHomePage;
}());

//# sourceMappingURL=admin-home.js.map

/***/ })

});
//# sourceMappingURL=15.js.map