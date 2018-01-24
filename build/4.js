webpackJsonp([4],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpetsPageModule", function() { return RegisterpetsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerpets__ = __webpack_require__(602);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterpetsPageModule = (function () {
    function RegisterpetsPageModule() {
    }
    RegisterpetsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registerpets__["a" /* RegisterpetsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registerpets__["a" /* RegisterpetsPage */]),
            ],
        })
    ], RegisterpetsPageModule);
    return RegisterpetsPageModule;
}());

//# sourceMappingURL=registerpets.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterpetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_pet_form_register_pet_form__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registered_pet_details_registered_pet_details__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_registered_pet_edit_registered_pet__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterpetsPage = (function () {
    function RegisterpetsPage(navCtrl, navParams, modalCtrl, alertCtrl, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.petsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.getRegisteredPets();
    }
    RegisterpetsPage.prototype.onSearch = function (ev) {
        var _this = this;
        this.pageLoaded = false;
        var val = ev.target.value;
        this.db.collection('registerpets').where("isvisible", "==", true).onSnapshot(function (snapshots) {
            var pets = [];
            snapshots.forEach(function (doc) {
                var docData = doc.data();
                docData['regPetId'] = doc.id;
                if (docData['uid'] == _this.userId) {
                    pets.push(docData);
                }
            });
            _this.pets = pets;
            _this.petsCount = Object.keys(pets).length;
            if (val && val.trim() != '') {
                _this.pets = _this.pets.filter(function (el) {
                    return (el.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                        (el.breed.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
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
    RegisterpetsPage.prototype.onCancel = function (ev) {
        this.getRegisteredPets();
    };
    RegisterpetsPage.prototype.addPet = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__register_pet_form_register_pet_form__["a" /* RegisterPetFormPage */]);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    RegisterpetsPage.prototype.getRegisteredPets = function () {
        var _this = this;
        this.db.collection('registerpets').where("isvisible", "==", true).onSnapshot(function (snapshots) {
            console.log('snapshots', snapshots);
            var pets = [];
            snapshots.forEach(function (doc) {
                var docData = doc.data();
                docData['regPetId'] = doc.id;
                if (docData['uid'] == _this.userId) {
                    pets.push(docData);
                }
            });
            _this.pets = pets;
            console.log('this.pets', _this.pets);
            _this.petsCount = Object.keys(pets).length;
            _this.pageLoaded = true;
        }), (function (err) {
            console.log('err', err);
        });
    };
    RegisterpetsPage.prototype.removeRegisteredPet = function (petId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Remove Confirmation?',
            message: 'Are you sure do you want to remove your registered pet?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.db.collection('registerpets').doc(petId).update({
                            isvisible: false
                        });
                        var toast = _this.toastCtrl.create({
                            message: 'Registered pet was removed',
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
    RegisterpetsPage.prototype.registeredPetDetails = function (pet) {
        console.log('pet', pet);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */], pet);
        modal.onDidDismiss(function (data) {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    };
    RegisterpetsPage.prototype.action = function (petId) {
        var _this = this;
        console.log('petId', petId);
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: 'Remove',
                    icon: 'trash',
                    handler: function () {
                        _this.removeRegisteredPet(petId);
                    }
                }, {
                    text: 'Edit',
                    icon: 'create',
                    handler: function () {
                        var data = {
                            petId: petId
                        };
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__edit_registered_pet_edit_registered_pet__["a" /* EditRegisteredPetPage */], data);
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
    RegisterpetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registerpets',template:/*ion-inline-start:"C:\Users\ph2150108\Dropbox\petApp\src\pages\registerpets\registerpets.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Registered Pets</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <form action="" class="searchBar">\n        <ion-searchbar\n            [showCancelButton]="shouldShowCancel"\n            (ionInput)="onSearch($event)"\n            (ionCancel)="onCancel($event)"\n            [debounce]="700"\n            placeholder="Search Name, Breed, Type"\n        >\n        </ion-searchbar>\n    </form>\n    <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n    <div *ngIf="pageLoaded">\n        <p *ngIf="pets?.length == 0" class="noPetResult">No registered pet yet.</p>\n        <div *ngIf="pets?.length">\n            <ion-card *ngFor="let pet of pets">\n                <img [src]="pet?.image != \'\' && pet?.image != null ? pet?.image : \'assets/images/icon.png\'" [class.noImage]="pet?.image == \'\' || pet?.image == null"/>\n                <ion-card-content>\n                    <ion-card-title>{{pet.name}}</ion-card-title>\n                    <div>\n                        <span class="bold">Breed:</span>\n                        <span>{{pet.breed}}</span>\n                    </div>\n                    <div>\n                        <span class="bold">Age:</span>\n                        <span>{{pet.age}}</span>\n                    </div>\n                    <button ion-button type="button" *ngIf="userId == pet?.uid" class="removeBtn" (click)="action(pet.regPetId)"><ion-icon name="more"></ion-icon></button>\n                    <button ion-button type="submit" class="btnDetails" (click)="registeredPetDetails(pet)">More Details</button>\n                    <span class="datePosted">Date added: {{pet.datePosted | date:\'mediumDate\'}}</span>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <ion-fab bottom right>\n        <button ion-fab (click)="addPet()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\ph2150108\Dropbox\petApp\src\pages\registerpets\registerpets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], RegisterpetsPage);
    return RegisterpetsPage;
}());

//# sourceMappingURL=registerpets.js.map

/***/ })

});
//# sourceMappingURL=4.js.map