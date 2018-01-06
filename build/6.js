webpackJsonp([6],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetPageModule", function() { return PetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pet__ = __webpack_require__(534);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PetPageModule = (function () {
    function PetPageModule() {
    }
    PetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pet__["a" /* PetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pet__["a" /* PetPage */]),
            ],
        })
    ], PetPageModule);
    return PetPageModule;
}());

//# sourceMappingURL=pet.module.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetPage; });
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
 * Generated class for the PetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PetPage = (function () {
    function PetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PetPage');
    };
    PetPage.prototype.openPage = function (p) {
    };
    PetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\pet\pet.html"*/'\n<ion-content class="card-background-page">\n    <ion-card>\n        <img src="https://i.amz.mshcdn.com/2xXpy52DS30uKJBrQm-qI1JDAbc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F454852%2Fc149fd02-3174-46f9-9b58-d7026cc5ada9.jpg"/>\n        <ion-card-content>\n            <ion-card-title>\n            Scarlet\n            <span class="price">Php 15,000</span>\n            </ion-card-title>\n            <div>\n                <span class="bold">Owner\'s Address:</span>\n                <span>Ortigas Pasig city</span>\n            </div>\n            <div>\n                <span class="bold">Owner\'s Contact #:</span>\n                <span>09123456789</span>\n            </div>\n            <button ion-button class="buyBtn">Buy</button>\n            <span class="datePosted">Posted: Jan 07, 2017</span>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <img src="https://i.amz.mshcdn.com/2xXpy52DS30uKJBrQm-qI1JDAbc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F454852%2Fc149fd02-3174-46f9-9b58-d7026cc5ada9.jpg"/>\n        <ion-card-content>\n            <ion-card-title>\n            Scarlet\n            <span class="price">Php 15,000</span>\n            </ion-card-title>\n            <div>\n                <span class="bold">Owner\'s Address:</span>\n                <span>Ortigas Pasig city</span>\n            </div>\n            <div>\n                <span class="bold">Owner\'s Contact #:</span>\n                <span>09123456789</span>\n            </div>\n            <button ion-button class="buyBtn">Buy</button>\n            <span class="datePosted">Posted: Jan 07, 2017</span>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <img src="https://i.amz.mshcdn.com/2xXpy52DS30uKJBrQm-qI1JDAbc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F454852%2Fc149fd02-3174-46f9-9b58-d7026cc5ada9.jpg"/>\n        <ion-card-content>\n            <ion-card-title>\n            Scarlet\n            <span class="price">Php 15,000</span>\n            </ion-card-title>\n            <div>\n                <span class="bold">Owner\'s Address:</span>\n                <span>Ortigas Pasig city</span>\n            </div>\n            <div>\n                <span class="bold">Owner\'s Contact #:</span>\n                <span>09123456789</span>\n            </div>\n            <button ion-button class="buyBtn">Buy</button>\n            <span class="datePosted">Posted: Jan 07, 2017</span>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-fab bottom right>\n        <button ion-fab><ion-icon name="add" (click)="editProfile()"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\pet\pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PetPage);
    return PetPage;
}());

//# sourceMappingURL=pet.js.map

/***/ })

});
//# sourceMappingURL=6.js.map