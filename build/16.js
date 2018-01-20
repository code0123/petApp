webpackJsonp([16],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGroomPetPageModule", function() { return AdminGroomPetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_groom_pet__ = __webpack_require__(572);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminGroomPetPageModule = (function () {
    function AdminGroomPetPageModule() {
    }
    AdminGroomPetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_groom_pet__["a" /* AdminGroomPetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_groom_pet__["a" /* AdminGroomPetPage */]),
            ],
        })
    ], AdminGroomPetPageModule);
    return AdminGroomPetPageModule;
}());

//# sourceMappingURL=admin-groom-pet.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGroomPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGroomPetPage = (function () {
    function AdminGroomPetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminGroomPetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminGroomPetPage');
    };
    AdminGroomPetPage.prototype.addVideo = function () {
        console.log('add');
    };
    AdminGroomPetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-groom-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-groom-pet\admin-groom-pet.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Groom Pet Videos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <div class="videoPlayList">\n    <h5>How to Use Clippers when Grooming a Shaggy-Haired Dog : Dog Grooming</h5>\n    <video width="100%" height="100%" poster="https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/images%2Ficon.png?alt=media&token=78c28f13-9417-43a9-bea7-d5feb44dacb7" controls>\n      <source src="https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/videos%2Fgroom%2Fdog%20grooming.MP4?alt=media&token=50637728-adb6-4c52-810e-77c51d34a7f8" type="video/mp4">\n    </video>\n  </div>\n\n  <div class="videoPlayList">\n    <h5>How to Use Clippers when Grooming a Shaggy-Haired Dog : Dog Grooming</h5>\n    <video width="100%" height="100%" poster="https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/images%2Ficon.png?alt=media&token=78c28f13-9417-43a9-bea7-d5feb44dacb7" controls>\n      <source src="https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/videos%2Fgroom%2Fdog%20grooming.MP4?alt=media&token=50637728-adb6-4c52-810e-77c51d34a7f8" type="video/mp4">\n    </video>\n  </div>\n\n  <div class="videoPlayList">\n    <h5>How to Use Clippers when Grooming a Shaggy-Haired Dog : Dog Grooming</h5>\n    <video width="100%" height="100%" poster="https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/images%2Ficon.png?alt=media&token=78c28f13-9417-43a9-bea7-d5feb44dacb7" controls>\n      <source src="https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/videos%2Fgroom%2Fdog%20grooming.MP4?alt=media&token=50637728-adb6-4c52-810e-77c51d34a7f8" type="video/mp4">\n    </video>\n  </div>\n\n  <ion-fab bottom right>\n      <button ion-fab (click)="addVideo()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-groom-pet\admin-groom-pet.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], AdminGroomPetPage);
    return AdminGroomPetPage;
    var _a, _b;
}());

//# sourceMappingURL=admin-groom-pet.js.map

/***/ })

});
//# sourceMappingURL=16.js.map