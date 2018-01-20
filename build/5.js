webpackJsonp([5],{

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(577);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, authProvider, toastCtrl, modalCtrl, profileProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.profileProvider = profileProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.loadProfile();
    };
    ProfilePage.prototype.loadProfile = function () {
        var _this = this;
        this.profileProvider.loadProfile().then(function (userData) {
            console.log('userData', userData);
            _this.user = userData;
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.profileChange = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Uploading your profile picture, please wait...'
        });
        loading.present();
        this.profileProvider.uploadPhoto(event.target.files.item(0)).then(function (photo) {
            _this.profileProvider.saveFileData(photo).then(function (res) {
                _this.loadProfile();
                loading.dismiss();
            });
        }).catch(function (err) {
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: err.message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__["a" /* EditprofilePage */], this.user);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.loadProfile();
            }
        });
        modal.present();
    };
    ProfilePage.prototype.logout = function () {
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
    ProfilePage.prototype.registeredPetsClick = function () {
        this.navCtrl.push('RegisterpetsPage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\profile\profile.html"*/'<ion-content>\n<div class="profileBlock">\n    <input type="file" hidden #profilePicUpload name="profilePicUpload" (change)="profileChange($event)">\n    <img [src]="user?.photo != \'\' && user?.photo != null ? user?.photo : \'assets/images/blank-profile.png\' " width="124" height="124" alt="" (click)="profilePicUpload.click()">\n    <ion-icon name="camera" class="camera" (click)="profilePicUpload.click()"></ion-icon>\n    \n    <h3 *ngIf="user?.name != \'\' || user?.name != null">{{user?.name}}</h3>\n    <h3 *ngIf="user?.name == \'\' || user?.name == null">N/A</h3>\n    </div>\n    \n    <table class="profileTbl">\n        <tr>\n            <td><ion-icon name="mail"></ion-icon></td>\n            <td>\n                <strong>Email Address</strong>\n                <p *ngIf="user?.email != \'\' && user?.email != null">{{user?.email}}</p>\n                <p *ngIf="user?.email == \'\' || user?.email == null">N/A</p>\n            </td>\n        </tr>\n        <tr>\n            <td><ion-icon name="call"></ion-icon></td>\n            <td>\n                <strong>Phone Number</strong>\n                <p *ngIf="user?.phone != \'\' && user?.phone != null">{{user?.phone}}</p>\n                <p *ngIf="user?.phone == \'\' || user?.phone == null">N/A</p>\n            </td>\n        </tr>\n        <tr>\n            <td><ion-icon name="locate"></ion-icon></td>\n            <td>\n                <strong>Address</strong>\n                <p *ngIf="user?.address != \'\' && user?.address != null">{{user?.address}}</p>\n                <p *ngIf="user?.address == \'\' || user?.address == null">N/A</p>\n            </td>\n        </tr>\n        <tr>\n            <td><ion-icon name="paw"></ion-icon></td>\n            <td>\n                <strong (click)="registeredPetsClick()">Registered Pets</strong>\n                <p (click)="registeredPetsClick()">Click to see registered pets</p>\n            </td>\n        </tr>\n        <tr>\n            <td><ion-icon name="log-out"></ion-icon></td>\n            <td>\n                <strong (click)="logout()">Log out</strong>\n                <p (click)="logout()">Click to log out</p>\n            </td>\n        </tr>\n    </table>\n    \n    <ion-fab bottom right (click)="editProfile()">\n        <button ion-fab><ion-icon name="create"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=5.js.map