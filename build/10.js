webpackJsonp([10],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostpetsPageModule", function() { return LostpetsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lostpets__ = __webpack_require__(645);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lostpets__["a" /* LostpetsPage */]),
            ],
        })
    ], LostpetsPageModule);
    return LostpetsPageModule;
}());

//# sourceMappingURL=lostpets.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostpetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_lost_pet_form_add_lost_pet_form__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lost_pet_details_lost_pet_details__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_lost_pet_edit_lost_pet__ = __webpack_require__(349);
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
    function LostpetsPage(navCtrl, navParams, modalCtrl, lostpetProvider, alertCtrl, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.lostpetProvider = lostpetProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.petsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.searchFocus = 0;
        this.getItems();
    }
    LostpetsPage.prototype.ionViewDidEnter = function () {
        this.searchFocus = 0;
    };
    LostpetsPage.prototype.action = function (petId, status) {
        var _this = this;
        var text = '';
        if (status == 0) {
            text = 'Mark as found';
        }
        else {
            text = 'Mark as lost';
        }
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: text,
                    icon: 'checkbox-outline',
                    handler: function () {
                        _this.removeLostPet(petId, status);
                    }
                }, {
                    text: 'Edit',
                    icon: 'create',
                    handler: function () {
                        var data = {
                            petId: petId
                        };
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__edit_lost_pet_edit_lost_pet__["a" /* EditLostPetPage */], data);
                        modal.onDidDismiss(function (data) {
                        });
                        modal.present();
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    LostpetsPage.prototype.onSearch = function (ev) {
        var _this = this;
        this.pageLoaded = false;
        var val = ev.target.value;
        this.db.collection('lostpets').orderBy("datePosted", "desc").limit(1000).onSnapshot(function (snapshots) {
            var pets = [];
            snapshots.forEach(function (doc) {
                var docData = doc.data();
                docData['lostPetId'] = doc.id;
                pets.push(docData);
            });
            _this.pets = pets;
            _this.petsCount = Object.keys(pets).length;
            if (val && val.trim() != '') {
                _this.pets = _this.pets.filter(function (el) {
                    return (el.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                        (el.placeLost.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                        (el.petType.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            setTimeout(function () {
                _this.pageLoaded = true;
            }, 700);
        }), (function (err) {
            console.log('err', err);
        });
    };
    LostpetsPage.prototype.onCancel = function (ev) {
        this.getItems();
    };
    LostpetsPage.prototype.addLostPet = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_lost_pet_form_add_lost_pet_form__["a" /* AddLostPetFormPage */]);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    LostpetsPage.prototype.getItems = function () {
        var _this = this;
        this.db.collection('lostpets').orderBy("datePosted", "desc").onSnapshot(function (snapshots) {
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
    LostpetsPage.prototype.removeLostPet = function (lostPetId, status) {
        var _this = this;
        var title = '';
        var message = '';
        if (status == 1) {
            title = 'Pet was lost?';
            message = 'Are you sure do you want to mark this pet as lost?';
        }
        else {
            title = 'Pet was found?';
            message = 'Are you sure do you want to mark this pet as found?';
        }
        var confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.db.collection('lostpets').doc(lostPetId).update({
                            status: !status
                        });
                        var toast = _this.toastCtrl.create({
                            message: 'Post was updated',
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }
            ]
        });
        confirm.present();
    };
    LostpetsPage.prototype.checkFocus = function () {
        if (this.searchFocus == 0) {
            var toast = this.toastCtrl.create({
                message: 'You can search by pet name, type and breed',
                showCloseButton: true,
                duration: 5000,
                closeButtonText: 'Ok',
                dismissOnPageChange: true
            });
            toast.present();
        }
        this.searchFocus = 1;
    };
    LostpetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lostpets',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lostpets\lostpets.html"*/'\n<ion-content class="card-background-page">\n    <form action="" class="searchBar">\n        <ion-searchbar\n            [showCancelButton]="shouldShowCancel"\n            (ionInput)="onSearch($event)"\n            (ionCancel)="onCancel($event)"\n            [debounce]="700"\n            placeholder="Search"\n            (ionFocus)="checkFocus()"\n        >\n    </ion-searchbar>\n    </form>\n    <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n    <div *ngIf="pageLoaded">\n        <p *ngIf="pets?.length == 0" class="noPetResult">No lost pet yet.</p>\n        <div *ngIf="pets?.length">\n            <ion-card *ngFor="let pet of pets">\n                <img [src]="pet?.image != \'\' && pet?.image != null ? pet?.image : \'assets/images/icon.png\'" [class.noImage]="pet?.image == \'\' || pet?.image == null"/>\n                <ion-card-content>\n                    <ion-card-title>{{pet.name}}</ion-card-title>\n                    <div>\n                        <span class="bold">Place of lost:</span>\n                        <span>{{pet.placeLost}}</span>\n                    </div>\n                    <div>\n                        <span class="bold">Lost date:</span>\n                        <span>{{pet.lostDate | date:\'mediumDate\'}}</span>\n                    </div>\n                    <div>\n                        <span class="bold">Status:</span>\n                        <span [class.blue]="pet.status" [class.red]="!pet.status">{{pet.status ? \'Found\' : \'Lost\'}}</span>\n                    </div>\n                    <button ion-button type="button" *ngIf="userId == pet?.uid" class="removeBtn" (click)="action(pet.lostPetId, pet.status)"><ion-icon name="more"></ion-icon></button>\n                    <button ion-button type="submit" class="btnDetails" (click)="lostPetDetails(pet)">More Details</button>\n                    <span class="datePosted">Posted: {{pet.lostDate | date:\'mediumDate\'}}</span>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <ion-fab bottom right>\n        <button ion-fab (click)="addLostPet()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lostpets\lostpets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__["a" /* LostpetProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], LostpetsPage);
    return LostpetsPage;
}());

//# sourceMappingURL=lostpets.js.map

/***/ })

});
//# sourceMappingURL=10.js.map