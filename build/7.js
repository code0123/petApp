webpackJsonp([7],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetPageModule", function() { return PetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pet__ = __webpack_require__(644);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pet__["a" /* PetPage */]),
            ],
        })
    ], PetPageModule);
    return PetPageModule;
}());

//# sourceMappingURL=pet.module.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_for_sale_pet_add_for_sale_pet__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buy_pet_details_buy_pet_details__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_for_sale_pet_edit_for_sale_pet__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PetPage = (function () {
    function PetPage(navCtrl, navParams, authProvider, modalCtrl, alertCtrl, toastCtrl, actionSheetCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.petsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.getItems();
    }
    PetPage.prototype.onSearch = function (ev) {
        var _this = this;
        this.pageLoaded = false;
        var val = ev.target.value;
        this.db.collection('buypets').where("isactive", "==", true).orderBy("datePosted", "desc").limit(1000).onSnapshot(function (snapshots) {
            console.log('snapshots', snapshots);
            var pets = [];
            snapshots.forEach(function (doc) {
                var docData = doc.data();
                var interestedUsers = docData['interestedUsers'];
                if (interestedUsers.indexOf(_this.userId) == -1) {
                    docData['interested'] = false;
                }
                else {
                    docData['interested'] = true;
                }
                docData['buyPetId'] = doc.id;
                pets.push(docData);
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
    PetPage.prototype.onCancel = function (ev) {
        this.getItems();
    };
    PetPage.prototype.getItems = function () {
        var _this = this;
        this.db.collection('buypets').where("isactive", "==", true).onSnapshot(function (snapshots) {
            console.log('snapshots', snapshots);
            var pets = [];
            snapshots.forEach(function (doc) {
                var docData = doc.data();
                var interestedUsers = docData['interestedUsers'];
                if (interestedUsers.indexOf(_this.userId) == -1) {
                    docData['interested'] = false;
                }
                else {
                    docData['interested'] = true;
                }
                docData['buyPetId'] = doc.id;
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
    PetPage.prototype.addForSalePet = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_for_sale_pet_add_for_sale_pet__["a" /* AddForSalePetPage */]);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    PetPage.prototype.removePost = function (buyPetId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Your pet was sold?',
            message: 'Are you sure do you want to remove your post?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.db.collection('buypets').doc(buyPetId).update({
                            isactive: false
                        });
                        var toast = _this.toastCtrl.create({
                            message: 'Post was removed',
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
    PetPage.prototype.action = function (petId) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: 'Purchase',
                    icon: 'cart',
                    handler: function () {
                        _this.removePost(petId);
                    }
                }, {
                    text: 'Edit',
                    icon: 'create',
                    handler: function () {
                        var data = {
                            petId: petId
                        };
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__edit_for_sale_pet_edit_for_sale_pet__["a" /* EditForSalePetPage */], data);
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
    PetPage.prototype.buyPetDetails = function (pet) {
        console.log('pet', pet);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__buy_pet_details_buy_pet_details__["a" /* BuyPetDetailsPage */], pet);
        modal.onDidDismiss(function (data) {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    };
    PetPage.prototype.thumbsUp = function (petId) {
        var _this = this;
        var petRef = this.db.collection('buypets').doc(petId);
        petRef.get().then(function (pet) {
            var data = pet.data();
            var interestedUsers = data['interestedUsers'];
            if (interestedUsers.indexOf(_this.userId) == -1) {
                interestedUsers.push(_this.userId);
                petRef.update({
                    interestedUsers: interestedUsers
                });
                var toast = _this.toastCtrl.create({
                    message: 'Interested!',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                interestedUsers.splice(_this.userId, 1);
                petRef.update({
                    interestedUsers: interestedUsers
                });
                var toast = _this.toastCtrl.create({
                    message: 'Not interested!',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }
            petRef.update({
                interestedCount: interestedUsers.length
            });
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    PetPage.prototype.interestedView = function (petId) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Fetching interested users",
            duration: 1000
        });
        loader.present();
        this.db.collection('buypets').doc(petId).get().then(function (res) {
            var names;
            var interestedUser = res.data()['interestedUsers'];
            var html = "";
            if (interestedUser.length > 0) {
                for (var _i = 0, interestedUser_1 = interestedUser; _i < interestedUser_1.length; _i++) {
                    var userId = interestedUser_1[_i];
                    _this.db.collection('users').doc(userId).get().then(function (user) {
                        var name = user.data()['name'];
                        html += '- ' + name + '<br>';
                    }).catch(function (err) {
                        console.log('err', err);
                    });
                }
            }
            else {
                html = 'No interested users yet.';
            }
            setTimeout(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Interested Users',
                    subTitle: html,
                    buttons: ['OK']
                });
                alert.present();
            }, 1000);
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    PetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pet',template:/*ion-inline-start:"C:\Users\ph2150108\Dropbox\petApp\src\pages\pet\pet.html"*/'\n<ion-content class="card-background-page">\n    <form action="" class="searchBar">\n        <ion-searchbar\n            [showCancelButton]="shouldShowCancel"\n            (ionInput)="onSearch($event)"\n            (ionCancel)="onCancel($event)"\n            [debounce]="700"\n            placeholder="Search Name, Breed, Type"\n        >\n        </ion-searchbar>\n    </form>\n    <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n    <div *ngIf="pageLoaded">\n        <p *ngIf="pets?.length == 0" class="noPetResult">No posted pet yet.</p>\n        <div *ngIf="pets?.length">\n            <ion-card *ngFor="let pet of pets">\n                <img [src]="pet?.image != \'\' && pet?.image != null ? pet?.image : \'assets/images/icon.png\'" [class.noImage]="pet?.image == \'\' || pet?.image == null"/>\n                <ion-card-content>\n                    <ion-card-title>{{pet.name}}  <span class="price">{{pet.price | currency:\'PHP\':true}}</span></ion-card-title>\n                    <div>\n                        <span class="bold">Breed:</span>\n                        <span>{{pet.breed}}</span>\n                    </div>\n                    <div>\n                        <span class="bold">Age:</span>\n                        <span>{{pet.age}}</span>\n                    </div>\n                    <button ion-button type="button" *ngIf="userId == pet?.uid" class="removeBtn" (click)="action(pet.buyPetId)">\n                        <ion-icon name="more"></ion-icon>\n                    </button>\n                    <button ion-button type="submit" class="btnDetails" (click)="buyPetDetails(pet)">More Details</button>\n                    <span class="datePosted">Posted: {{pet.datePosted | date:\'mediumDate\'}}</span>\n                    <div class="interestedBlock">\n                        <button ion-button type="button" class="thumbsUpBtn" [class.blue]="pet.interested">\n                        <ion-icon name="thumbs-up" (click)="thumbsUp(pet.buyPetId)"></ion-icon> &nbsp;<span (click)="interestedView(pet.buyPetId)">Interested ({{pet.interestedCount}})</span></button>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <ion-fab bottom right>\n        <button ion-fab (click)="addForSalePet()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\ph2150108\Dropbox\petApp\src\pages\pet\pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PetPage);
    return PetPage;
}());

//# sourceMappingURL=pet.js.map

/***/ })

});
//# sourceMappingURL=7.js.map