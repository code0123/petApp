webpackJsonp([5],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(539);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.profileChange = function () {
    };
    ProfilePage.prototype.profilePicUpload = function () {
    };
    ProfilePage.prototype.editProfile = function () {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\profile\profile.html"*/'<ion-content>\n<div class="profileBlock">\n    <input type="file" hidden #profilePicUpload name="profilePicUpload" (change)="profileChange($event)">\n    <img [src]="user?.photo != \'\' && user?.photo != null ? user?.photo : \'/assets/images/blank-profile.png\' " width="100" height="100" alt="" (click)="profilePicUpload.click()">\n    <ion-icon name="camera" class="camera" (click)="profilePicUpload.click()"></ion-icon>\n    \n    <h3 *ngIf="user?.name != \'\' || user?.name != null">{{user?.name}}</h3>\n    <h3 *ngIf="user?.name == \'\' || user?.name == null">N/A</h3>\n    </div>\n    \n    <table class="profileTbl">\n    <tr>\n        <td><ion-icon name="mail"></ion-icon></td>\n        <td>\n        <strong>Email Address</strong>\n        <p *ngIf="user?.email != \'\' && user?.email != null">{{user?.email}}</p>\n        <p *ngIf="user?.email == \'\' || user?.email == null">N/A</p>\n        </td>\n    </tr>\n    <tr>\n        <td><ion-icon name="call"></ion-icon></td>\n        <td>\n        <strong>Phone Number</strong>\n        <p *ngIf="user?.phone != \'\' && user?.phone != null">{{user?.phone}}</p>\n        <p *ngIf="user?.phone == \'\' || user?.phone == null">N/A</p>\n        </td>\n    </tr>\n    <tr>\n        <td><ion-icon name="navigate"></ion-icon></td>\n        <td>\n        <strong>Address</strong>\n        <p *ngIf="user?.address != \'\' && user?.address != null">{{user?.address}}</p>\n        <p *ngIf="user?.address == \'\' || user?.address == null">N/A</p>\n        </td>\n    </tr>\n    <tr>\n        <td><ion-icon name="log-out"></ion-icon></td>\n        <td (click)="logout()">\n        <strong>Log out</strong>\n        <p>Click to log out</p>\n        </td>\n    </tr>\n    </table>\n    \n    <ion-fab bottom right>\n        <button ion-fab><ion-icon name="create" (click)="editProfile()"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=5.js.map