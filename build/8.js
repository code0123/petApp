webpackJsonp([8],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostpetsPageModule", function() { return LostpetsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lostpets__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LostpetsPageModule = (function () {
    function LostpetsPageModule() {
    }
    LostpetsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lostpets__["a" /* LostpetsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lostpets__["a" /* LostpetsPage */]),
            ],
        })
    ], LostpetsPageModule);
    return LostpetsPageModule;
}());

//# sourceMappingURL=lostpets.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostpetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_lost_pet_form_add_lost_pet_form__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LostpetsPage = (function () {
    function LostpetsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    LostpetsPage.prototype.addLostPet = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_lost_pet_form_add_lost_pet_form__["a" /* AddLostPetFormPage */]);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    LostpetsPage.prototype.getItems = function () {
    };
    LostpetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lostpets',template:/*ion-inline-start:"C:\Users\ph2150108\Dropbox\petApp\src\pages\lostpets\lostpets.html"*/'\n<ion-content class="card-background-page">\n    <form action="" class="searchBar">\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </form>\n    <ion-card>\n        <img src="https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg"/>\n        <ion-card-content>\n            <ion-card-title>\n            Kitty\n            <span class="price">Php 15,000</span>\n            </ion-card-title>\n            <div>\n                <span class="bold">Owner\'s Address:</span>\n                <span>Ortigas Pasig city</span>\n            </div>\n            <div>\n                <span class="bold">Owner\'s Contact #:</span>\n                <span>09123456789</span>\n            </div>\n            <span class="datePosted">Posted: Jan 07, 2017</span>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <img src="https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg"/>\n        <ion-card-content>\n            <ion-card-title>\n            Kitty\n            <span class="price">Php 15,000</span>\n            </ion-card-title>\n            <div>\n                <span class="bold">Owner\'s Address:</span>\n                <span>Ortigas Pasig city</span>\n            </div>\n            <div>\n                <span class="bold">Owner\'s Contact #:</span>\n                <span>09123456789</span>\n            </div>\n            <span class="datePosted">Posted: Jan 07, 2017</span>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <img src="https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg"/>\n        <ion-card-content>\n            <ion-card-title>\n            Kitty\n            <span class="price">Php 15,000</span>\n            </ion-card-title>\n            <div>\n                <span class="bold">Owner\'s Address:</span>\n                <span>Ortigas Pasig city</span>\n            </div>\n            <div>\n                <span class="bold">Owner\'s Contact #:</span>\n                <span>09123456789</span>\n            </div>\n            <span class="datePosted">Posted: Jan 07, 2017</span>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-fab bottom right>\n        <button ion-fab (click)="addLostPet()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\ph2150108\Dropbox\petApp\src\pages\lostpets\lostpets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], LostpetsPage);
    return LostpetsPage;
}());

//# sourceMappingURL=lostpets.js.map

/***/ })

});
//# sourceMappingURL=8.js.map