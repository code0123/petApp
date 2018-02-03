webpackJsonp([9],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPageModule", function() { return OtherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other__ = __webpack_require__(642);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OtherPageModule = (function () {
    function OtherPageModule() {
    }
    OtherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__other__["a" /* OtherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__other__["a" /* OtherPage */]),
            ],
        })
    ], OtherPageModule);
    return OtherPageModule;
}());

//# sourceMappingURL=other.module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtherPage = (function () {
    function OtherPage(navCtrl, navParams, alertCtrl, authProvider, app, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.isAdmin = parseInt(localStorage.getItem('isAdmin'));
        this.userId = localStorage.getItem('userId');
    }
    OtherPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page);
    };
    OtherPage.prototype.logout = function () {
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
                            _this.app.getRootNav().setRoot('HomePage');
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
    OtherPage.prototype.switchRole = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Switch Role Confirmation?',
            message: 'Are you sure do you want to switch user role?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.authProvider.switchRole(_this.userId, 1).then(function () {
                            _this.navCtrl.push('AdminHomePage');
                            var toast = _this.toastCtrl.create({
                                message: 'Switching role completed',
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
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
    OtherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-other',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\other\other.html"*/'<ion-content>\n  <ion-list>\n    <button ion-item (click)="goToPage(\'ProfilePage\')">\n      <ion-icon name="person" class="preIcon"></ion-icon> &nbsp;\n      <span class="listName">Profile</span>\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n    </button>\n    <button ion-item (click)="goToPage(\'VaccinationSchedulePage\')">\n      <ion-icon name="calendar" class="preIcon"></ion-icon> &nbsp;\n      <span class="listName">Vaccination Schedules</span>\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n    </button>\n    <button ion-item (click)="goToPage(\'AdminTrainPetPage\')">\n      <ion-icon name="help-buoy" class="preIcon"></ion-icon> &nbsp;<span class="listName">Train Your Pet</span>\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n    </button>\n    <button ion-item (click)="goToPage(\'AdminGroomPetPage\')">\n      <ion-icon name="shirt" class="preIcon"></ion-icon> &nbsp;\n      <span class="listName">Groom Pet</span>\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n    </button>\n    <button ion-item (click)="goToPage(\'SearchvetPage\')">\n      <ion-icon name="search" class="preIcon"></ion-icon> &nbsp;<span class="listName">Find Vet Clinics</span>\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n    </button>\n    <button ion-item (click)="switchRole()" *ngIf="isAdmin">\n      <ion-icon name="switch" class="preIcon"></ion-icon> &nbsp;\n      <span class="listName">Switch to admin</span>\n    </button>\n    <button ion-item (click)="logout()">\n      <ion-icon name="log-out" class="preIcon"></ion-icon> &nbsp;\n      <span class="listName">Log out</span>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\other\other.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=other.js.map

/***/ })

});
//# sourceMappingURL=9.js.map