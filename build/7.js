webpackJsonp([7],{

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPageModule", function() { return OtherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other__ = __webpack_require__(544);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__other__["a" /* OtherPage */]),
            ],
        })
    ], OtherPageModule);
    return OtherPageModule;
}());

//# sourceMappingURL=other.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
    function OtherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OtherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherPage');
    };
    OtherPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page);
    };
    OtherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-other',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\other\other.html"*/'<ion-content>\n  <ion-list>\n    <button ion-item (click)="goToPage(\'TrainpetsPage\')">\n      <ion-icon name="help-buoy" class="preIcon"></ion-icon> &nbsp;<span class="listName">Train Your Pet</span>\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n    </button>\n    <button ion-item (click)="goToPage(\'SearchvetPage\')">\n      <ion-icon name="shirt" class="preIcon"></ion-icon> &nbsp;\n      <span class="listName">Groom Pet</span>\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n    </button>\n    <button ion-item (click)="goToPage(\'SearchvetPage\')">\n      <ion-icon name="search" class="preIcon"></ion-icon> &nbsp;<span class="listName">Find Vet Clinics</span>\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\other\other.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=other.js.map

/***/ })

});
//# sourceMappingURL=7.js.map