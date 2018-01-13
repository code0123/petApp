webpackJsonp([8],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostpetsPageModule", function() { return LostpetsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lostpets__ = __webpack_require__(543);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lostpets__["a" /* LostpetsPage */]),
            ],
        })
    ], LostpetsPageModule);
    return LostpetsPageModule;
}());

//# sourceMappingURL=lostpets.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostpetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_lost_pet_form_add_lost_pet_form__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lost_pet_details_lost_pet_details__ = __webpack_require__(326);
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
    function LostpetsPage(navCtrl, navParams, modalCtrl, lostpetProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.lostpetProvider = lostpetProvider;
        this.alertCtrl = alertCtrl;
        this.petsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.getItems();
    }
    LostpetsPage.prototype.addLostPet = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_lost_pet_form_add_lost_pet_form__["a" /* AddLostPetFormPage */]);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    LostpetsPage.prototype.getItems = function () {
        var _this = this;
        this.db.collection('lostpets').where("status", "==", false).onSnapshot(function (snapshots) {
            console.log('snapshots', snapshots);
            var pets = [];
            snapshots.forEach(function (doc) {
                var docData = doc.data();
                docData['lostPetId'] = doc.id;
                pets.push(docData);
            });
            _this.pets = pets;
            console.log('this.pets', _this.pets);
            _this.petsCount = Object.keys(pets).length;
            _this.pageLoaded = true;
        }), (function (err) {
            console.log('err', err);
        });
    };
    LostpetsPage.prototype.lostPetDetails = function (pet) {
        console.log('pet', pet);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__lost_pet_details_lost_pet_details__["a" /* LostPetDetailsPage */], pet);
        modal.onDidDismiss(function (data) {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    };
    LostpetsPage.prototype.removeLostPet = function (lostPetId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Lost pet was found?',
            message: 'Are you sure do you want to remove your post?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.db.collection('lostpets').doc(lostPetId).update({
                            status: true
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    LostpetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lostpets',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lostpets\lostpets.html"*/'\n<ion-content class="card-background-page">\n    <form action="" class="searchBar">\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </form>\n    <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n    <div *ngIf="pageLoaded">\n        <p *ngIf="pets?.length == 0" class="noPetResult">No lost pet yet.</p>\n        <div *ngIf="pets?.length">\n            <ion-card *ngFor="let pet of pets">\n                <img [src]="pet?.image != \'\' && pet?.image != null ? pet?.image : \'assets/images/blank-profile.png\'" />\n                <ion-card-content>\n                    <ion-card-title>{{pet.name}}</ion-card-title>\n                    <div>\n                        <span class="bold">Place of lost:</span>\n                        <span>{{pet.placeLost}}</span>\n                    </div>\n                    <div>\n                        <span class="bold">Lost date #:</span>\n                        <span>{{pet.lostDate | date:\'mediumDate\'}}</span>\n                    </div>\n                    <button ion-button type="button" *ngIf="userId == pet?.uid" class="removeBtn" (click)="removeLostPet(pet.lostPetId)"><ion-icon name="close"></ion-icon></button>\n                    <button ion-button type="submit" class="btnDetails" (click)="lostPetDetails(pet)">More Details</button>\n                    <span class="datePosted">Posted: {{pet.lostDate | date:\'mediumDate\'}}</span>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <ion-fab bottom right>\n        <button ion-fab (click)="addLostPet()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lostpets\lostpets.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__["a" /* LostpetProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__["a" /* LostpetProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], LostpetsPage);
    return LostpetsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=lostpets.js.map

/***/ })

});
//# sourceMappingURL=8.js.map