webpackJsonp([17],{

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePageModule", function() { return AdminHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_home__ = __webpack_require__(634);
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

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__ = __webpack_require__(62);
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
    function AdminHomePage(navCtrl, navParams, authProvider, alertCtrl, toastCtrl, adminProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.adminProvider = adminProvider;
        this.pageLoaded = false;
        this.registeredUserCount();
    }
    AdminHomePage.prototype.registeredUserCount = function () {
        var _this = this;
        this.adminProvider.registeredUserCount().then(function (count01) {
            _this.userCount = count01;
            _this.adminProvider.buySellPetCount().then(function (count02) {
                _this.buySellPetCount = count02;
                _this.adminProvider.lostPetCount().then(function (count03) {
                    _this.lostPetsCount = count03;
                    _this.adminProvider.vaccineSchedCount().then(function (count4) {
                        _this.vaccineSchedCount = count4;
                        _this.adminProvider.groomPetCount().then(function (count5) {
                            _this.pageLoaded = true;
                            _this.groomPetCount = count5;
                        }).catch(function (err) {
                            console.log('err', err);
                        });
                    }).catch(function (err) {
                        console.log('err', err);
                    });
                }).catch(function (err) {
                    console.log('err', err);
                });
            }).catch(function (err) {
                console.log('err', err);
            });
        }).catch(function (err) {
            console.log('err', err);
        });
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
            selector: 'page-admin-home',template:/*ion-inline-start:"C:\Users\ph2150108\Dropbox\petApp\src\pages\admin-home\admin-home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Purrs &amp; Paws Admin Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n  <div *ngIf="pageLoaded">\n      <div class="box green" (click)="pushPage(\'AdminRegisteredUserPage\')">\n        <div class="iconBlock">\n          <ion-icon name="people"></ion-icon>\n        </div>\n        <div class="titleBlock">\n          <p class="count">{{userCount}}</p>\n          <h3>Registered Users</h3>\n        </div>\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n      </div>\n    \n      <div class="box blue" (click)="pushPage(\'AdminBuyAndSellPage\')">\n        <div class="iconBlock">\n          <ion-icon name="pricetag"></ion-icon>\n        </div>\n        <div class="titleBlock">\n          <p class="count">{{buySellPetCount}}</p>\n          <h3>Buy &amp; Sell Pets</h3>\n        </div>\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n      </div>\n    \n      <div class="box pink" (click)="pushPage(\'AdminLostPetsPage\')">\n        <div class="iconBlock">\n          <ion-icon name="paw"></ion-icon>\n        </div>\n        <div class="titleBlock">\n          <p class="count">{{lostPetsCount}}</p>\n          <h3>Lost Pets</h3>\n        </div>\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n      </div>\n\n      <div class="box cyan" (click)="pushPage(\'VaccinationSchedulePage\')">\n        <div class="iconBlock">\n          <ion-icon name="calendar"></ion-icon>\n        </div>\n        <div class="titleBlock">\n          <p class="count">{{vaccineSchedCount}}</p>\n          <h3>Vaccination Schedule</h3>\n        </div>\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n      </div>\n\n      <div class="box indigo" (click)="pushPage(\'AdminGroomPetPage\')">\n        <div class="iconBlock">\n          <ion-icon name="shirt"></ion-icon>\n        </div>\n        <div class="titleBlock">\n          <p class="count">{{groomPetCount}}</p>\n          <h3>Groom Pet Videos</h3>\n        </div>\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n      </div>\n      <div class="box amber" (click)="pushPage(\'AdminTrainPetPage\')">\n        <div class="iconBlock">\n          <ion-icon name="help-buoy"></ion-icon>\n        </div>\n        <div class="titleBlock">\n          <p class="count">1</p>\n          <h3>Train Pet Videos</h3>\n        </div>\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n      </div>\n\n      <ion-fab bottom right>\n        <button ion-fab (click)="logout()" class="logout"><ion-icon name="log-out"></ion-icon></button>\n      </ion-fab>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ph2150108\Dropbox\petApp\src\pages\admin-home\admin-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__["a" /* AdminProvider */]])
    ], AdminHomePage);
    return AdminHomePage;
}());

//# sourceMappingURL=admin-home.js.map

/***/ })

});
//# sourceMappingURL=17.js.map