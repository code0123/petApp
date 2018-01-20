webpackJsonp([31],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuypetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuypetProvider = (function () {
    function BuypetProvider(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
    }
    BuypetProvider.prototype.randomCharacters = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    BuypetProvider.prototype.uploadPhoto = function (upload) {
        var _this = this;
        var uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        var promise = new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + upload.name).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, function (error) {
                reject(error);
            }, function () {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    };
    BuypetProvider.prototype.saveLostPet = function (pet) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            pet['uid'] = _this.userId;
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            _this.db.collection('buypets').doc().set(pet).then(function (res) {
                resolve(1);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    BuypetProvider.prototype.saveUpdatedPetInfo = function (pet, petId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            _this.db.collection('buypets').doc(petId).update(pet).then(function (res) {
                resolve(1);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    BuypetProvider.prototype.ownerInfo = function (uid) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(uid).get().then(function (snapshots) {
                resolve(snapshots.data());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    BuypetProvider.prototype.getPetInfo = function (petId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('buypets').doc(petId).get().then(function (pet) {
                resolve(pet.data());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    BuypetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BuypetProvider);
    return BuypetProvider;
}());

//# sourceMappingURL=buypet.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPetProvider = (function () {
    function RegisterPetProvider(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
        console.log('Hello RegisterPetProvider Provider');
    }
    RegisterPetProvider.prototype.randomCharacters = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    RegisterPetProvider.prototype.uploadPhoto = function (upload) {
        var _this = this;
        var uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        var promise = new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + upload.name).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, function (error) {
                reject(error);
            }, function () {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    };
    RegisterPetProvider.prototype.saveLostPet = function (pet) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            pet['uid'] = _this.userId;
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            pet['isvisible'] = true;
            _this.db.collection('registerpets').doc().set(pet).then(function (res) {
                resolve(1);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RegisterPetProvider.prototype.saveUpdates = function (pet, petId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('registerpets').doc(petId).update(pet).then(function (res) {
                resolve(1);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RegisterPetProvider.prototype.ownerInfo = function (uid) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(uid).get().then(function (snapshots) {
                resolve(snapshots.data());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RegisterPetProvider.prototype.getRegisterPetInfo = function (petId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('registerpets').doc(petId).get().then(function (pet) {
                resolve(pet.data());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RegisterPetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RegisterPetProvider);
    return RegisterPetProvider;
}());

//# sourceMappingURL=register-pet.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_pet_register_pet__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisteredPetDetailsPage = (function () {
    function RegisteredPetDetailsPage(navCtrl, navParams, viewCtrl, registerPetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.registerPetProvider = registerPetProvider;
    }
    RegisteredPetDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('navParams', this.navParams);
        this.name = this.navParams.get('name');
        this.breed = this.navParams.get('breed');
        this.color = this.navParams.get('color');
        this.gender = this.navParams.get('gender');
        this.vaccineDate = this.navParams.get('vaccineDate');
        this.remarks = this.navParams.get('remarks');
        this.ownerUid = this.navParams.get('uid');
        this.type = this.navParams.get('petType');
        this.getOwnerInfo();
    };
    RegisteredPetDetailsPage.prototype.getOwnerInfo = function () {
        var _this = this;
        this.registerPetProvider.ownerInfo(this.ownerUid).then(function (owner) {
            _this.ownerName = owner['name'];
            _this.ownerEmail = owner['email'];
            _this.ownerPhone = owner['phone'];
            _this.ownerAddress = owner['address'];
        });
    };
    RegisteredPetDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RegisteredPetDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registered-pet-details',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\registered-pet-details\registered-pet-details.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Pet Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<table class="profileTbl">\n  <tr>\n    <td>\n      <ion-icon name="paw"></ion-icon>\n    </td>\n    <td>\n      <strong>Name</strong>\n      <p>{{name}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="checkbox-outline"></ion-icon>\n    </td>\n    <td>\n      <strong>Type</strong>\n      <p *ngIf="type == \'\' || type == undefined">N/A</p>\n      <p *ngIf="type">{{type}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="bookmark"></ion-icon>\n    </td>\n    <td>\n      <strong>Breed</strong>\n      <p *ngIf="breed == \'\' || breed == null">N/A</p>\n      <p *ngIf="breed">{{breed}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="color-fill"></ion-icon>\n    </td>\n    <td>\n      <strong>Color</strong>\n      <p *ngIf="color == \'\' || color == null">N/A</p>\n      <p *ngIf="color">{{color}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="heart"></ion-icon>\n    </td>\n    <td>\n      <strong>Gender</strong>\n      <p *ngIf="gender == \'\' || gender == null">N/A</p>\n      <p *ngIf="gender">{{gender}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="calendar"></ion-icon>\n    </td>\n    <td>\n      <strong>Last Vaccine Date</strong>\n      <p *ngIf="vaccineDate == \'\' || vaccineDate == null">N/A</p>\n      <p *ngIf="vaccineDate">{{vaccineDate | date:\'mediumDate\'}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="md-contact"></ion-icon>\n    </td>\n    <td>\n      <strong>Owner Name</strong>\n      <p *ngIf="ownerName == \'\' || ownerName == null">N/A</p>\n      <p *ngIf="ownerName">{{ownerName}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="mail"></ion-icon>\n    </td>\n    <td>\n      <strong>Email Address</strong>\n      <p *ngIf="ownerEmail == \'\' || ownerEmail == null">N/A</p>\n      <p *ngIf="ownerEmail">{{ownerEmail}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="call"></ion-icon>\n    </td>\n    <td>\n      <strong>Phone Number</strong>\n      <p *ngIf="ownerPhone == \'\' || ownerPhone == null">N/A</p>\n      <p *ngIf="ownerPhone">{{ownerPhone}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="locate"></ion-icon>\n    </td>\n    <td>\n      <strong>Address</strong>\n      <p *ngIf="ownerAddress == \'\' || ownerAddress == null">N/A</p>\n      <p *ngIf="ownerAddress">{{ownerAddress}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="information-circle"></ion-icon>\n    </td>\n    <td>\n      <strong>Remarks</strong>\n      <p *ngIf="remarks == \'\' || remarks == null">N/A</p>\n      <p *ngIf="remarks">{{remarks}}</p>\n    </td>\n  </tr>\n</table>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\registered-pet-details\registered-pet-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_pet_register_pet__["a" /* RegisterPetProvider */]])
    ], RegisteredPetDetailsPage);
    return RegisteredPetDetailsPage;
}());

//# sourceMappingURL=registered-pet-details.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminProvider = (function () {
    function AdminProvider(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.userId = localStorage.getItem('userId');
        console.log('Hello AdminProvider Provider');
    }
    AdminProvider.prototype.loadProfile = function (userId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(userId).get().then(function (doc) {
                resolve(doc.data());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AdminProvider.prototype.registeredUserCount = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').get().then(function (user) {
                resolve(user.docs.length);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AdminProvider.prototype.buySellPetCount = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('buypets').where("isactive", "==", true).get().then(function (user) {
                resolve(user.docs.length);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AdminProvider.prototype.lostPetCount = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('lostpets').where("status", "==", false).get().then(function (user) {
                resolve(user.docs.length);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AdminProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AdminProvider);
    return AdminProvider;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewUserRegisteredPetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registered_pet_details_registered_pet_details__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminViewUserRegisteredPetsPage = (function () {
    function AdminViewUserRegisteredPetsPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.petsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.pageLoaded = false;
    }
    AdminViewUserRegisteredPetsPage.prototype.ionViewDidLoad = function () {
        this.userId = this.navParams.get('userId');
        this.getRegisteredPets();
    };
    AdminViewUserRegisteredPetsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AdminViewUserRegisteredPetsPage.prototype.onSearch = function (ev) {
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
                        (el.breed.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            setTimeout(function () {
                _this.pageLoaded = true;
            }, 700);
        }), (function (err) {
            console.log('err', err);
        });
    };
    AdminViewUserRegisteredPetsPage.prototype.onCancel = function (ev) {
        this.getRegisteredPets();
    };
    AdminViewUserRegisteredPetsPage.prototype.getRegisteredPets = function () {
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
    AdminViewUserRegisteredPetsPage.prototype.registeredPetDetails = function (pet) {
        console.log('pet', pet);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */], pet);
        modal.onDidDismiss(function (data) {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    };
    AdminViewUserRegisteredPetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-view-user-registered-pets',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-view-user-registered-pets\admin-view-user-registered-pets.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Registered Pets\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <form action="" class="searchBar">\n        <ion-searchbar\n            [showCancelButton]="shouldShowCancel"\n            (ionInput)="onSearch($event)"\n            (ionCancel)="onCancel($event)"\n            [debounce]="700"\n            placeholder="Search Name or Breed"\n        >\n        </ion-searchbar>\n    </form>\n    <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n    <div *ngIf="pageLoaded">\n        <p *ngIf="pets?.length == 0" class="noPetResult">No registered pet yet.</p>\n        <div *ngIf="pets?.length">\n            <ion-card *ngFor="let pet of pets">\n                <img [src]="pet?.image != \'\' && pet?.image != null ? pet?.image : \'assets/images/icon.png\'" [class.noImage]="pet?.image == \'\' || pet?.image == null"/>\n                <ion-card-content>\n                    <ion-card-title>{{pet.name}}</ion-card-title>\n                    <div>\n                        <span class="bold">Breed:</span>\n                        <span>{{pet.breed}}</span>\n                    </div>\n                    <div>\n                        <span class="bold">Age:</span>\n                        <span>{{pet.age}}</span>\n                    </div>\n                    <button ion-button type="submit" class="btnDetails" (click)="registeredPetDetails(pet)">More Details</button>\n                    <span class="datePosted">Date added: {{pet.datePosted | date:\'mediumDate\'}}</span>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n  </ion-content>\n  \n  '/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-view-user-registered-pets\admin-view-user-registered-pets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], AdminViewUserRegisteredPetsPage);
    return AdminViewUserRegisteredPetsPage;
}());

//# sourceMappingURL=admin-view-user-registered-pets.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileProvider = (function () {
    function ProfileProvider(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
        console.log('Hello ProfileProvider Provider', this.userId);
    }
    ProfileProvider.prototype.loadProfile = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(_this.userId).get().then(function (doc) {
                resolve(doc.data());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ProfileProvider.prototype.editProfile = function (userData) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(userData['uid']).update(userData).then(function () {
                resolve(1);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ProfileProvider.prototype.randomCharacters = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    ProfileProvider.prototype.uploadPhoto = function (upload) {
        var _this = this;
        var uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        var promise = new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + upload.name).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, function (error) {
                reject(error);
            }, function () {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    };
    ProfileProvider.prototype.saveFileData = function (uploadedFilePath) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(_this.userId).update({
                photo: uploadedFilePath
            }).then(function () {
                resolve(1);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-for-sale-pet/add-for-sale-pet.module": [
		541,
		30
	],
	"../pages/add-lost-pet-form/add-lost-pet-form.module": [
		540,
		29
	],
	"../pages/admin-buy-and-sell/admin-buy-and-sell.module": [
		542,
		17
	],
	"../pages/admin-groom-pet/admin-groom-pet.module": [
		543,
		16
	],
	"../pages/admin-home/admin-home.module": [
		544,
		15
	],
	"../pages/admin-lost-pets/admin-lost-pets.module": [
		545,
		14
	],
	"../pages/admin-registered-user/admin-registered-user.module": [
		546,
		13
	],
	"../pages/admin-train-pet/admin-train-pet.module": [
		547,
		12
	],
	"../pages/admin-view-profile/admin-view-profile.module": [
		548,
		28
	],
	"../pages/admin-view-user-registered-pets/admin-view-user-registered-pets.module": [
		550,
		27
	],
	"../pages/buy-pet-details/buy-pet-details.module": [
		549,
		26
	],
	"../pages/edit-for-sale-pet/edit-for-sale-pet.module": [
		551,
		25
	],
	"../pages/edit-lost-pet/edit-lost-pet.module": [
		553,
		24
	],
	"../pages/edit-registered-pet/edit-registered-pet.module": [
		554,
		23
	],
	"../pages/editprofile/editprofile.module": [
		552,
		22
	],
	"../pages/groompet/groompet.module": [
		555,
		11
	],
	"../pages/home/home.module": [
		556,
		10
	],
	"../pages/login/login.module": [
		557,
		9
	],
	"../pages/lost-pet-details/lost-pet-details.module": [
		558,
		21
	],
	"../pages/lostpets/lostpets.module": [
		560,
		8
	],
	"../pages/other/other.module": [
		559,
		7
	],
	"../pages/pet/pet.module": [
		561,
		6
	],
	"../pages/place-detail/place-detail.module": [
		562,
		20
	],
	"../pages/profile/profile.module": [
		563,
		5
	],
	"../pages/register-pet-form/register-pet-form.module": [
		565,
		19
	],
	"../pages/register/register.module": [
		564,
		4
	],
	"../pages/registered-pet-details/registered-pet-details.module": [
		566,
		18
	],
	"../pages/registerpets/registerpets.module": [
		568,
		3
	],
	"../pages/searchvet/searchvet.module": [
		569,
		2
	],
	"../pages/tabs/tabs.module": [
		570,
		1
	],
	"../pages/trainpets/trainpets.module": [
		567,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        console.log('Hello AuthProvider Provider', this.db);
    }
    AuthProvider.prototype.login = function (email, password) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AuthProvider.prototype.capitalize = function (str) {
        var wordCount = str.split(' ');
        var upperStr = '';
        for (var x = 0; x <= wordCount.length - 1; x++) {
            if (x > 0) {
                upperStr += ' ';
            }
            upperStr += wordCount[x].charAt(0).toUpperCase() + wordCount[x].slice(1).toLowerCase();
        }
        return upperStr;
    };
    AuthProvider.prototype.register = function (userData) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(userData['email'], userData['password']).then(function (user) {
                resolve(user['uid']);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AuthProvider.prototype.saveRegisteredUser = function (userId, userData) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            userData['phone'] = '';
            userData['address'] = '';
            userData['photo'] = '';
            userData['isAdmin'] = 0;
            userData['uid'] = userId;
            userData['dateAdded'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            _this.db.collection('users').doc(userId).set(userData).then(function () {
                resolve(1);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AuthProvider.prototype.sendEmailVerification = function () {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                user.sendEmailVerification().then(function (data) {
                    resolve(data);
                }).catch(function (err) {
                    resolve(err);
                });
            });
        });
        return promise;
    };
    AuthProvider.prototype.isAuthenticated = function () {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    if (user['emailVerified']) {
                        resolve(1);
                    }
                    else {
                        resolve(0);
                    }
                }
                else {
                    resolve(0);
                }
            });
        });
        return promise;
    };
    AuthProvider.prototype.logout = function () {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AuthProvider.prototype.loadProfile = function (userId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(userId).get().then(function (doc) {
                resolve(doc.data());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLostPetFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddLostPetFormPage = (function () {
    function AddLostPetFormPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, lostpetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.lostpetProvider = lostpetProvider;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.placeLost = '';
        this.lostDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.placeLostCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.lostDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addLostPetForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            placeLost: this.placeLostCtrl,
            lostDate: this.lostDateCtrl,
            remarks: this.remarksCtrl
        });
    }
    AddLostPetFormPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddLostPetFormPage.prototype.petPicUploadEvent = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.lostpetProvider.uploadPhoto(event.target.files.item(0)).then(function (photo) {
            console.log('photo', photo);
            _this.image = photo;
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Photo was uploaded',
                duration: 5000,
                position: 'bottom'
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
    AddLostPetFormPage.prototype.petLostSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        if (this.addLostPetForm.valid) {
            console.log('valid');
            var petInfo = {
                name: this.name,
                petType: this.petType,
                image: this.image,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                placeLost: this.placeLost,
                lostDate: this.lostDate,
                remarks: this.remarks,
            };
            this.lostpetProvider.saveLostPet(petInfo).then(function (res) {
                _this.isSubmitting = false;
                _this.viewCtrl.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Lost pet was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(function (err) {
                console.log('err', err);
                _this.isSubmitting = false;
                var toast = _this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            var toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    AddLostPetFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-lost-pet-form',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-lost-pet-form\add-lost-pet-form.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add Lost Pet\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="profileBlock">\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n      alt="" (click)="petPicUpload.click()">\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n  </div>\n\n  <form [formGroup]="addLostPetForm" (ngSubmit)="petLostSubmit()">\n    <ion-item hidden>\n      <ion-label floating>Image</ion-label>\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Pet Type</ion-label>\n      <ion-select formControlName="petType" [(ngModel)]="petType" name="gender">\n        <ion-option value="Dog">Dog</ion-option>\n        <ion-option value="Cat">Cat</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Breed</ion-label>\n      <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Color</ion-label>\n      <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Age</ion-label>\n      <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Gender</ion-label>\n      <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n        <ion-option value="Female">Female</ion-option>\n        <ion-option value="Male">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Place of lost</ion-label>\n      <ion-input type="text" formControlName="placeLost" [(ngModel)]="placeLost" name="placeLost"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Lost Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="lostDate" [(ngModel)]="lostDate" name="lostDate"></ion-datetime>\n    </ion-item>\n\n      <ion-item>\n        <ion-label floating>Remarks</ion-label>\n        <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n      </ion-item>\n  \n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-lost-pet-form\add-lost-pet-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__["a" /* LostpetProvider */]])
    ], AddLostPetFormPage);
    return AddLostPetFormPage;
}());

//# sourceMappingURL=add-lost-pet-form.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddForSalePetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddForSalePetPage = (function () {
    function AddForSalePetPage(navCtrl, navParams, viewCtrl, loadingCtrl, buypetProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.buypetProvider = buypetProvider;
        this.toastCtrl = toastCtrl;
        this.image = '';
        this.name = '';
        this.price = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.priceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addForSalePet = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            price: this.priceCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
    }
    AddForSalePetPage.prototype.addForSalePetSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        if (this.addForSalePet.valid) {
            var petInfo = {
                name: this.name,
                image: this.image,
                price: this.price,
                petType: this.petType,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                vaccineDate: this.vaccineDate,
                remarks: this.remarks,
                isactive: true,
                interestedCount: 0,
                interestedUsers: []
            };
            this.buypetProvider.saveLostPet(petInfo).then(function (res) {
                _this.isSubmitting = false;
                _this.viewCtrl.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Pet was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(function (err) {
                console.log('err', err);
                _this.isSubmitting = false;
                var toast = _this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            var toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    AddForSalePetPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddForSalePetPage.prototype.petPicUploadEvent = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.buypetProvider.uploadPhoto(event.target.files.item(0)).then(function (photo) {
            console.log('photo', photo);
            _this.image = photo;
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Photo was uploaded',
                duration: 5000,
                position: 'bottom'
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
    AddForSalePetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-for-sale-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-for-sale-pet\add-for-sale-pet.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Post your pet\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="profileBlock">\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n      alt="" (click)="petPicUpload.click()">\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n  </div>\n\n  <form [formGroup]="addForSalePet" (ngSubmit)="addForSalePetSubmit()">\n    <ion-item hidden>\n      <ion-label floating>Image</ion-label>\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Price in Peso</ion-label>\n      <ion-input type="number" formControlName="price" [(ngModel)]="price" name="price"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Pet Type</ion-label>\n      <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n        <ion-option value="Dog">Dog</ion-option>\n        <ion-option value="Cat">Cat</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Breed</ion-label>\n      <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Color</ion-label>\n      <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Age</ion-label>\n      <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Gender</ion-label>\n      <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n        <ion-option value="Female">Female</ion-option>\n        <ion-option value="Male">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Date of last vaccine</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n    </ion-item>\n\n      <ion-item>\n        <ion-label floating>Remarks</ion-label>\n        <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n      </ion-item>\n  \n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-for-sale-pet\add-for-sale-pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__["a" /* BuypetProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AddForSalePetPage);
    return AddForSalePetPage;
}());

//# sourceMappingURL=add-for-sale-pet.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_buypet_buypet__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyPetDetailsPage = (function () {
    function BuyPetDetailsPage(navCtrl, navParams, viewCtrl, buypetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.buypetProvider = buypetProvider;
    }
    BuyPetDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('navParams', this.navParams);
        this.name = this.navParams.get('name');
        this.breed = this.navParams.get('breed');
        this.color = this.navParams.get('color');
        this.gender = this.navParams.get('gender');
        this.vaccineDate = this.navParams.get('vaccineDate');
        this.remarks = this.navParams.get('remarks');
        this.ownerUid = this.navParams.get('uid');
        this.type = this.navParams.get('petType');
        this.getOwnerInfo();
    };
    BuyPetDetailsPage.prototype.getOwnerInfo = function () {
        var _this = this;
        this.buypetProvider.ownerInfo(this.ownerUid).then(function (owner) {
            _this.ownerName = owner['name'];
            _this.ownerEmail = owner['email'];
            _this.ownerPhone = owner['phone'];
            _this.ownerAddress = owner['address'];
        });
    };
    BuyPetDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BuyPetDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-pet-details',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\buy-pet-details\buy-pet-details.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Pet Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<table class="profileTbl">\n  <tr>\n    <td>\n      <ion-icon name="paw"></ion-icon>\n    </td>\n    <td>\n      <strong>Name</strong>\n      <p>{{name}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="checkbox-outline"></ion-icon>\n    </td>\n    <td>\n      <strong>Type</strong>\n      <p *ngIf="type == \'\' || type == undefined">N/A</p>\n      <p *ngIf="type">{{type}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="bookmark"></ion-icon>\n    </td>\n    <td>\n      <strong>Breed</strong>\n      <p *ngIf="breed == \'\' || breed == null">N/A</p>\n      <p *ngIf="breed">{{breed}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="color-fill"></ion-icon>\n    </td>\n    <td>\n      <strong>Color</strong>\n      <p *ngIf="color == \'\' || color == null">N/A</p>\n      <p *ngIf="color">{{color}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="heart"></ion-icon>\n    </td>\n    <td>\n      <strong>Gender</strong>\n      <p *ngIf="gender == \'\' || gender == null">N/A</p>\n      <p *ngIf="gender">{{gender}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="md-contact"></ion-icon>\n    </td>\n    <td>\n      <strong>Owner Name</strong>\n      <p *ngIf="ownerName == \'\' || ownerName == null">N/A</p>\n      <p *ngIf="ownerName">{{ownerName}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="mail"></ion-icon>\n    </td>\n    <td>\n      <strong>Email Address</strong>\n      <p *ngIf="ownerEmail == \'\' || ownerEmail == null">N/A</p>\n      <p *ngIf="ownerEmail">{{ownerEmail}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="call"></ion-icon>\n    </td>\n    <td>\n      <strong>Phone Number</strong>\n      <p *ngIf="ownerPhone == \'\' || ownerPhone == null">N/A</p>\n      <p *ngIf="ownerPhone">{{ownerPhone}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="locate"></ion-icon>\n    </td>\n    <td>\n      <strong>Address</strong>\n      <p *ngIf="ownerAddress == \'\' || ownerAddress == null">N/A</p>\n      <p *ngIf="ownerAddress">{{ownerAddress}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="information-circle"></ion-icon>\n    </td>\n    <td>\n      <strong>Remarks</strong>\n      <p *ngIf="remarks == \'\' || remarks == null">N/A</p>\n      <p *ngIf="remarks">{{remarks}}</p>\n    </td>\n  </tr>\n</table>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\buy-pet-details\buy-pet-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_buypet_buypet__["a" /* BuypetProvider */]])
    ], BuyPetDetailsPage);
    return BuyPetDetailsPage;
}());

//# sourceMappingURL=buy-pet-details.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditForSalePetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditForSalePetPage = (function () {
    function EditForSalePetPage(navCtrl, navParams, viewCtrl, loadingCtrl, buypetProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.buypetProvider = buypetProvider;
        this.toastCtrl = toastCtrl;
        this.image = '';
        this.name = '';
        this.price = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.priceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addForSalePet = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            price: this.priceCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
        this.petId = this.navParams.get('petId');
        this.getPetInfo();
    }
    EditForSalePetPage.prototype.getPetInfo = function () {
        var _this = this;
        this.buypetProvider.getPetInfo(this.petId).then(function (pet) {
            _this.image = pet['image'];
            _this.name = pet['name'];
            _this.price = pet['price'];
            _this.petType = pet['petType'];
            _this.breed = pet['breed'];
            _this.color = pet['color'];
            _this.age = pet['color'];
            _this.gender = pet['gender'];
            _this.vaccineDate = pet['vaccineDate'];
            _this.remarks = pet['remarks'];
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    EditForSalePetPage.prototype.addForSalePetSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        if (this.addForSalePet.valid) {
            var petInfo = {
                name: this.name,
                image: this.image,
                price: this.price,
                petType: this.petType,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                vaccineDate: this.vaccineDate,
                remarks: this.remarks,
                isactive: true,
            };
            this.buypetProvider.saveUpdatedPetInfo(petInfo, this.petId).then(function (res) {
                _this.isSubmitting = false;
                _this.viewCtrl.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Updates was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(function (err) {
                console.log('err', err);
                _this.isSubmitting = false;
                var toast = _this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            var toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    EditForSalePetPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditForSalePetPage.prototype.petPicUploadEvent = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.buypetProvider.uploadPhoto(event.target.files.item(0)).then(function (photo) {
            console.log('photo', photo);
            _this.image = photo;
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Photo was uploaded',
                duration: 5000,
                position: 'bottom'
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
    EditForSalePetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-for-sale-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-for-sale-pet\edit-for-sale-pet.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Edit Pet Details\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="profileBlock">\n      <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n      <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n        alt="" (click)="petPicUpload.click()">\n      <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n    </div>\n  \n    <form [formGroup]="addForSalePet" (ngSubmit)="addForSalePetSubmit()">\n      <ion-item hidden>\n        <ion-label floating>Image</ion-label>\n        <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Price in Peso</ion-label>\n        <ion-input type="number" formControlName="price" [(ngModel)]="price" name="price"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Pet Type</ion-label>\n        <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n          <ion-option value="Dog">Dog</ion-option>\n          <ion-option value="Cat">Cat</ion-option>\n        </ion-select>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Breed</ion-label>\n        <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Color</ion-label>\n        <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Age</ion-label>\n        <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Gender</ion-label>\n        <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n          <ion-option value="Female">Female</ion-option>\n          <ion-option value="Male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Date of last vaccine</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n      </ion-item>\n  \n        <ion-item>\n          <ion-label floating>Remarks</ion-label>\n          <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n        </ion-item>\n    \n      <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n        <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n        <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n    </form>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-for-sale-pet\edit-for-sale-pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__["a" /* BuypetProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], EditForSalePetPage);
    return EditForSalePetPage;
}());

//# sourceMappingURL=edit-for-sale-pet.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lostpet_lostpet__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LostPetDetailsPage = (function () {
    function LostPetDetailsPage(navCtrl, navParams, viewCtrl, lostpetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.lostpetProvider = lostpetProvider;
    }
    LostPetDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('navParams', this.navParams);
        this.name = this.navParams.get('name');
        this.breed = this.navParams.get('breed');
        this.color = this.navParams.get('color');
        this.gender = this.navParams.get('gender');
        this.placeLost = this.navParams.get('placeLost');
        this.lostDate = this.navParams.get('lostDate');
        this.remarks = this.navParams.get('remarks');
        this.ownerUid = this.navParams.get('uid');
        this.type = this.navParams.get('petType');
        this.getOwnerInfo();
    };
    LostPetDetailsPage.prototype.getOwnerInfo = function () {
        var _this = this;
        this.lostpetProvider.ownerInfo(this.ownerUid).then(function (owner) {
            _this.ownerName = owner['name'];
            _this.ownerEmail = owner['email'];
            _this.ownerPhone = owner['phone'];
            _this.ownerAddress = owner['address'];
        });
    };
    LostPetDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LostPetDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lost-pet-details',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lost-pet-details\lost-pet-details.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Lost Pet Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<table class="profileTbl">\n  <tr>\n    <td>\n      <ion-icon name="paw"></ion-icon>\n    </td>\n    <td>\n      <strong>Name</strong>\n      <p>{{name}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="checkbox-outline"></ion-icon>\n    </td>\n    <td>\n      <strong>Type</strong>\n      <p *ngIf="type == \'\' || type == undefined">N/A</p>\n      <p *ngIf="type">{{type}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="bookmark"></ion-icon>\n    </td>\n    <td>\n      <strong>Breed</strong>\n      <p *ngIf="breed == \'\' || breed == null">N/A</p>\n      <p *ngIf="breed">{{breed}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="color-fill"></ion-icon>\n    </td>\n    <td>\n      <strong>Color</strong>\n      <p *ngIf="color == \'\' || color == null">N/A</p>\n      <p *ngIf="color">{{color}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="heart"></ion-icon>\n    </td>\n    <td>\n      <strong>Gender</strong>\n      <p *ngIf="gender == \'\' || gender == null">N/A</p>\n      <p *ngIf="gender">{{gender}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="locate"></ion-icon>\n    </td>\n    <td>\n      <strong>Place of Lost</strong>\n      <p *ngIf="placeLost == \'\' || placeLost == null">N/A</p>\n      <p *ngIf="placeLost">{{placeLost}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="calendar"></ion-icon>\n    </td>\n    <td>\n      <strong>Lost Date</strong>\n      <p *ngIf="lostDate == \'\' || lostDate == null">N/A</p>\n      <p *ngIf="lostDate">{{lostDate | date:\'mediumDate\'}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="md-contact"></ion-icon>\n    </td>\n    <td>\n      <strong>Owner Name</strong>\n      <p *ngIf="ownerName == \'\' || ownerName == null">N/A</p>\n      <p *ngIf="ownerName">{{ownerName}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="mail"></ion-icon>\n    </td>\n    <td>\n      <strong>Email Address</strong>\n      <p *ngIf="ownerEmail == \'\' || ownerEmail == null">N/A</p>\n      <p *ngIf="ownerEmail">{{ownerEmail}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="call"></ion-icon>\n    </td>\n    <td>\n      <strong>Phone Number</strong>\n      <p *ngIf="ownerPhone == \'\' || ownerPhone == null">N/A</p>\n      <p *ngIf="ownerPhone">{{ownerPhone}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="locate"></ion-icon>\n    </td>\n    <td>\n      <strong>Address</strong>\n      <p *ngIf="ownerAddress == \'\' || ownerAddress == null">N/A</p>\n      <p *ngIf="ownerAddress">{{ownerAddress}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="information-circle"></ion-icon>\n    </td>\n    <td>\n      <strong>Remarks</strong>\n      <p *ngIf="remarks == \'\' || remarks == null">N/A</p>\n      <p *ngIf="remarks">{{remarks}}</p>\n    </td>\n  </tr>\n</table>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lost-pet-details\lost-pet-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_lostpet_lostpet__["a" /* LostpetProvider */]])
    ], LostPetDetailsPage);
    return LostPetDetailsPage;
}());

//# sourceMappingURL=lost-pet-details.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLostPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditLostPetPage = (function () {
    function EditLostPetPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, lostpetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.lostpetProvider = lostpetProvider;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.placeLost = '';
        this.lostDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.placeLostCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.lostDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addLostPetForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            placeLost: this.placeLostCtrl,
            lostDate: this.lostDateCtrl,
            remarks: this.remarksCtrl
        });
        this.petId = this.navParams.get('petId');
        this.getLostPetInfo();
    }
    EditLostPetPage.prototype.getLostPetInfo = function () {
        var _this = this;
        this.lostpetProvider.getLostPetInfo(this.petId).then(function (pet) {
            _this.image = pet['image'];
            _this.name = pet['name'];
            _this.petType = pet['petType'];
            _this.breed = pet['breed'];
            _this.color = pet['color'];
            _this.age = pet['age'];
            _this.gender = pet['gender'];
            _this.placeLost = pet['placeLost'];
            _this.lostDate = pet['lostDate'];
            _this.remarks = pet['remarks'];
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    EditLostPetPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditLostPetPage.prototype.petPicUploadEvent = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.lostpetProvider.uploadPhoto(event.target.files.item(0)).then(function (photo) {
            console.log('photo', photo);
            _this.image = photo;
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Photo was uploaded',
                duration: 5000,
                position: 'bottom'
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
    EditLostPetPage.prototype.petLostSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        if (this.addLostPetForm.valid) {
            var petInfo = {
                name: this.name,
                petType: this.petType,
                image: this.image,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                placeLost: this.placeLost,
                lostDate: this.lostDate,
                remarks: this.remarks,
            };
            this.lostpetProvider.saveUpdates(petInfo, this.petId).then(function (res) {
                _this.isSubmitting = false;
                _this.viewCtrl.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Updates was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(function (err) {
                console.log('err', err);
                _this.isSubmitting = false;
                var toast = _this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            var toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    EditLostPetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-lost-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-lost-pet\edit-lost-pet.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Edit Pet Details\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="profileBlock">\n      <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n      <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n        alt="" (click)="petPicUpload.click()">\n      <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n    </div>\n  \n    <form [formGroup]="addLostPetForm" (ngSubmit)="petLostSubmit()">\n      <ion-item hidden>\n        <ion-label floating>Image</ion-label>\n        <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Pet Type</ion-label>\n        <ion-select formControlName="petType" [(ngModel)]="petType" name="gender">\n          <ion-option value="Dog">Dog</ion-option>\n          <ion-option value="Cat">Cat</ion-option>\n        </ion-select>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Breed</ion-label>\n        <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Color</ion-label>\n        <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Age</ion-label>\n        <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Gender</ion-label>\n        <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n          <ion-option value="Female">Female</ion-option>\n          <ion-option value="Male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Place of lost</ion-label>\n        <ion-input type="text" formControlName="placeLost" [(ngModel)]="placeLost" name="placeLost"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Lost Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" formControlName="lostDate" [(ngModel)]="lostDate" name="lostDate"></ion-datetime>\n      </ion-item>\n  \n        <ion-item>\n          <ion-label floating>Remarks</ion-label>\n          <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n        </ion-item>\n    \n      <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n        <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n        <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n    </form>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-lost-pet\edit-lost-pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__["a" /* LostpetProvider */]])
    ], EditLostPetPage);
    return EditLostPetPage;
}());

//# sourceMappingURL=edit-lost-pet.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admin_admin__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_view_user_registered_pets_admin_view_user_registered_pets__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminViewProfilePage = (function () {
    function AdminViewProfilePage(navCtrl, navParams, viewCtrl, adminProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.adminProvider = adminProvider;
        this.modalCtrl = modalCtrl;
    }
    AdminViewProfilePage.prototype.ionViewDidLoad = function () {
        this.userId = this.navParams.get('userId');
        this.loadProfile();
    };
    AdminViewProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AdminViewProfilePage.prototype.loadProfile = function () {
        var _this = this;
        this.adminProvider.loadProfile(this.userId).then(function (user) {
            _this.user = user;
        });
    };
    AdminViewProfilePage.prototype.registeredPetsClick = function () {
        var user = {
            userId: this.userId
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__admin_view_user_registered_pets_admin_view_user_registered_pets__["a" /* AdminViewUserRegisteredPetsPage */], user);
        modal.onDidDismiss(function (data) {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    };
    AdminViewProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-view-profile',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-view-profile\admin-view-profile.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      User Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="profileBlock">\n        <img [src]="user?.photo != \'\' && user?.photo != null ? user?.photo : \'assets/images/blank-profile.png\' " width="124" height="124" alt="">\n        <h3 *ngIf="user?.name != \'\' || user?.name != null">{{user?.name}}</h3>\n        <h3 *ngIf="user?.name == \'\' || user?.name == null">N/A</h3>\n    </div>\n    \n    <table class="profileTbl">\n        <tr>\n            <td><ion-icon name="mail"></ion-icon></td>\n            <td>\n                <strong>Email Address</strong>\n                <p *ngIf="user?.email != \'\' && user?.email != null">{{user?.email}}</p>\n                <p *ngIf="user?.email == \'\' || user?.email == null">N/A</p>\n            </td>\n        </tr>\n        <tr>\n            <td><ion-icon name="call"></ion-icon></td>\n            <td>\n                <strong>Phone Number</strong>\n                <p *ngIf="user?.phone != \'\' && user?.phone != null">{{user?.phone}}</p>\n                <p *ngIf="user?.phone == \'\' || user?.phone == null">N/A</p>\n            </td>\n        </tr>\n        <tr>\n            <td><ion-icon name="locate"></ion-icon></td>\n            <td>\n                <strong>Address</strong>\n                <p *ngIf="user?.address != \'\' && user?.address != null">{{user?.address}}</p>\n                <p *ngIf="user?.address == \'\' || user?.address == null">N/A</p>\n            </td>\n        </tr>\n        <tr>\n            <td><ion-icon name="paw"></ion-icon></td>\n            <td>\n                <strong (click)="registeredPetsClick()">Registered Pets</strong>\n                <p (click)="registeredPetsClick()">Click to see registered pets</p>\n            </td>\n        </tr>\n    </table>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-view-profile\admin-view-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_admin_admin__["a" /* AdminProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], AdminViewProfilePage);
    return AdminViewProfilePage;
}());

//# sourceMappingURL=admin-view-profile.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, viewCtrl, toastCtrl, profileProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.profileProvider = profileProvider;
        this.isSubmitting = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(EMAIL_REGEX)]);
        this.phoneCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addressCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.editForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: this.nameCtrl,
            email: this.emailCtrl,
            phone: this.phoneCtrl,
            address: this.addressCtrl
        });
        this.name = navParams.get('name');
        this.email = navParams.get('email');
        this.phone = navParams.get('phone');
        this.address = navParams.get('address');
        this.userId = navParams.get('uid');
    }
    EditprofilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditprofilePage.prototype.editProfileSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        if (this.editForm.valid) {
            var userData = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                address: this.address,
                uid: this.userId
            };
            this.profileProvider.editProfile(userData).then(function (res) {
                _this.viewCtrl.dismiss(1);
                _this.isSubmitting = false;
                var toast = _this.toastCtrl.create({
                    message: 'Profile information was updated',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(function (err) {
                _this.isSubmitting = false;
                var toast = _this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            var toast = this.toastCtrl.create({
                message: 'Invalid email address',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\editprofile\editprofile.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Edit Profile\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="editForm" (ngSubmit)="editProfileSubmit()">\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" formControlName="email" [(ngModel)]="email" name="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Phone number</ion-label>\n      <ion-input type="text" formControlName="phone" [(ngModel)]="phone" name="phone"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Address</ion-label>\n        <ion-input type="text" formControlName="address" [(ngModel)]="address" name="address"></ion-input>\n      </ion-item>\n  \n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting"><ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner><ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\editprofile\editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRegisteredPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRegisteredPetPage = (function () {
    function EditRegisteredPetPage(navCtrl, navParams, viewCtrl, loadingCtrl, registerPetProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerPetProvider = registerPetProvider;
        this.toastCtrl = toastCtrl;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.registerPetForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
        this.petId = this.navParams.get('petId');
        console.log('this.petId', this.petId);
        this.getRegisterPetInfo();
    }
    EditRegisteredPetPage.prototype.getRegisterPetInfo = function () {
        var _this = this;
        this.registerPetProvider.getRegisterPetInfo(this.petId).then(function (pet) {
            _this.image = pet['image'];
            _this.name = pet['name'];
            _this.petType = pet['petType'];
            _this.breed = pet['breed'];
            _this.color = pet['color'];
            _this.age = pet['age'];
            _this.gender = pet['gender'];
            _this.vaccineDate = pet['vaccineDate'];
            _this.remarks = pet['remarks'];
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    EditRegisteredPetPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditRegisteredPetPage.prototype.petPicUploadEvent = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.registerPetProvider.uploadPhoto(event.target.files.item(0)).then(function (photo) {
            console.log('photo', photo);
            _this.image = photo;
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Photo was uploaded',
                duration: 5000,
                position: 'bottom'
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
    EditRegisteredPetPage.prototype.registerPetFormSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        if (this.registerPetForm.valid) {
            console.log('valid');
            var petInfo = {
                name: this.name,
                petType: this.petType,
                image: this.image,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                remarks: this.remarks,
                vaccineDate: this.vaccineDate
            };
            this.registerPetProvider.saveUpdates(petInfo, this.petId).then(function (res) {
                _this.isSubmitting = false;
                _this.viewCtrl.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Updates was saved',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(function (err) {
                console.log('err', err);
                _this.isSubmitting = false;
                var toast = _this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            var toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    EditRegisteredPetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-registered-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-registered-pet\edit-registered-pet.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Edit Pet Details\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="profileBlock">\n      <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n      <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n        alt="" (click)="petPicUpload.click()">\n      <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n    </div>\n  \n    <form [formGroup]="registerPetForm" (ngSubmit)="registerPetFormSubmit()">\n      <ion-item hidden>\n        <ion-label floating>Image</ion-label>\n        <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Pet Type</ion-label>\n        <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n          <ion-option value="Dog">Dog</ion-option>\n          <ion-option value="Cat">Cat</ion-option>\n        </ion-select>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Breed</ion-label>\n        <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Color</ion-label>\n        <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Age</ion-label>\n        <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Gender</ion-label>\n        <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n          <ion-option value="Female">Female</ion-option>\n          <ion-option value="Male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Date of last vaccine</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Remarks</ion-label>\n        <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n      </ion-item>\n    \n      <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n        <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n        <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n    </form>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-registered-pet\edit-registered-pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__["a" /* RegisterPetProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], EditRegisteredPetPage);
    return EditRegisteredPetPage;
}());

//# sourceMappingURL=edit-registered-pet.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
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


var PlaceDetailPage = (function () {
    function PlaceDetailPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PlaceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('navParams', this.navParams);
        this.name = this.navParams.get('name');
        this.address = this.navParams.get('vicinity');
        console.log('this.name', this.name);
    };
    PlaceDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PlaceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place-detail',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\place-detail\place-detail.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Place Detail\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<table class="profileTbl">\n  <tr>\n    <td>\n      <ion-icon name="paw"></ion-icon>\n    </td>\n    <td>\n      <strong>Clinic Name</strong>\n      <p>{{name}}</p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ion-icon name="locate"></ion-icon>\n    </td>\n    <td>\n      <strong>Address</strong>\n      <p>{{address}}</p>\n    </td>\n  </tr>\n</table>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\place-detail\place-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());

//# sourceMappingURL=place-detail.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPetFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPetFormPage = (function () {
    function RegisterPetFormPage(navCtrl, navParams, viewCtrl, loadingCtrl, registerPetProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerPetProvider = registerPetProvider;
        this.toastCtrl = toastCtrl;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.registerPetForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
    }
    RegisterPetFormPage.prototype.petPicUploadEvent = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.registerPetProvider.uploadPhoto(event.target.files.item(0)).then(function (photo) {
            console.log('photo', photo);
            _this.image = photo;
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Photo was uploaded',
                duration: 5000,
                position: 'bottom'
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
    RegisterPetFormPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RegisterPetFormPage.prototype.registerPetFormSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        if (this.registerPetForm.valid) {
            console.log('valid');
            var petInfo = {
                name: this.name,
                petType: this.petType,
                image: this.image,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                remarks: this.remarks,
                vaccineDate: this.vaccineDate
            };
            this.registerPetProvider.saveLostPet(petInfo).then(function (res) {
                _this.isSubmitting = false;
                _this.viewCtrl.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Lost pet was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(function (err) {
                console.log('err', err);
                _this.isSubmitting = false;
                var toast = _this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            var toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    RegisterPetFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-pet-form',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\register-pet-form\register-pet-form.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Register Pet Form\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="profileBlock">\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n      alt="" (click)="petPicUpload.click()">\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n  </div>\n\n  <form [formGroup]="registerPetForm" (ngSubmit)="registerPetFormSubmit()">\n    <ion-item hidden>\n      <ion-label floating>Image</ion-label>\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Pet Type</ion-label>\n      <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n        <ion-option value="Dog">Dog</ion-option>\n        <ion-option value="Cat">Cat</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Breed</ion-label>\n      <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Color</ion-label>\n      <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Age</ion-label>\n      <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Gender</ion-label>\n      <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n        <ion-option value="Female">Female</ion-option>\n        <ion-option value="Male">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Date of last vaccine</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Remarks</ion-label>\n      <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n    </ion-item>\n  \n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\register-pet-form\register-pet-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__["a" /* RegisterPetProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], RegisterPetFormPage);
    return RegisterPetFormPage;
}());

//# sourceMappingURL=register-pet-form.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_editprofile_editprofile__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_lost_pet_form_add_lost_pet_form__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_place_detail_place_detail__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lost_pet_details_lost_pet_details__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_for_sale_pet_add_for_sale_pet__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_buy_pet_details_buy_pet_details__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_pet_form_register_pet_form__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_registered_pet_details_registered_pet_details__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_admin_view_profile_admin_view_profile__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_admin_view_user_registered_pets_admin_view_user_registered_pets__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_for_sale_pet_edit_for_sale_pet__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_edit_lost_pet_edit_lost_pet__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_edit_registered_pet_edit_registered_pet__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_profile_profile__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_google_cloud_vision_google_cloud_vision__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_lostpet_lostpet__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_buypet_buypet__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_register_pet_register_pet__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_admin_admin__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Plugins

// Components














// Providers







// Firebase Setup
var config = {
    apiKey: "AIzaSyCEc_GbF6xYYsd82ddTLgoFU0DNsGUXbpc",
    authDomain: "purrspaws-87594.firebaseapp.com",
    databaseURL: "https://purrspaws-87594.firebaseio.com",
    projectId: "purrspaws-87594",
    storageBucket: "purrspaws-87594.appspot.com",
    messagingSenderId: "1015253898291"
};
__WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_lost_pet_form_add_lost_pet_form__["a" /* AddLostPetFormPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lost_pet_details_lost_pet_details__["a" /* LostPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_for_sale_pet_add_for_sale_pet__["a" /* AddForSalePetPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_buy_pet_details_buy_pet_details__["a" /* BuyPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_pet_form_register_pet_form__["a" /* RegisterPetFormPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_view_profile_admin_view_profile__["a" /* AdminViewProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_view_user_registered_pets_admin_view_user_registered_pets__["a" /* AdminViewUserRegisteredPetsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_for_sale_pet_edit_for_sale_pet__["a" /* EditForSalePetPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_edit_lost_pet_edit_lost_pet__["a" /* EditLostPetPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_edit_registered_pet_edit_registered_pet__["a" /* EditRegisteredPetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/add-lost-pet-form/add-lost-pet-form.module#AddLostPetFormPageModule', name: 'AddLostPetFormPage', segment: 'add-lost-pet-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-for-sale-pet/add-for-sale-pet.module#AddForSalePetPageModule', name: 'AddForSalePetPage', segment: 'add-for-sale-pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-buy-and-sell/admin-buy-and-sell.module#AdminBuyAndSellPageModule', name: 'AdminBuyAndSellPage', segment: 'admin-buy-and-sell', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-groom-pet/admin-groom-pet.module#AdminGroomPetPageModule', name: 'AdminGroomPetPage', segment: 'admin-groom-pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-home/admin-home.module#AdminHomePageModule', name: 'AdminHomePage', segment: 'admin-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-lost-pets/admin-lost-pets.module#AdminLostPetsPageModule', name: 'AdminLostPetsPage', segment: 'admin-lost-pets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-registered-user/admin-registered-user.module#AdminRegisteredUserPageModule', name: 'AdminRegisteredUserPage', segment: 'admin-registered-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-train-pet/admin-train-pet.module#AdminTrainPetPageModule', name: 'AdminTrainPetPage', segment: 'admin-train-pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-view-profile/admin-view-profile.module#AdminViewProfilePageModule', name: 'AdminViewProfilePage', segment: 'admin-view-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-pet-details/buy-pet-details.module#BuyPetDetailsPageModule', name: 'BuyPetDetailsPage', segment: 'buy-pet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-view-user-registered-pets/admin-view-user-registered-pets.module#AdminViewUserRegisteredPetsPageModule', name: 'AdminViewUserRegisteredPetsPage', segment: 'admin-view-user-registered-pets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-for-sale-pet/edit-for-sale-pet.module#EditForSalePetPageModule', name: 'EditForSalePetPage', segment: 'edit-for-sale-pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-lost-pet/edit-lost-pet.module#EditLostPetPageModule', name: 'EditLostPetPage', segment: 'edit-lost-pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-registered-pet/edit-registered-pet.module#EditRegisteredPetPageModule', name: 'EditRegisteredPetPage', segment: 'edit-registered-pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groompet/groompet.module#GroompetPageModule', name: 'GroompetPage', segment: 'groompet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lost-pet-details/lost-pet-details.module#LostPetDetailsPageModule', name: 'LostPetDetailsPage', segment: 'lost-pet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lostpets/lostpets.module#LostpetsPageModule', name: 'LostpetsPage', segment: 'lostpets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pet/pet.module#PetPageModule', name: 'PetPage', segment: 'pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule', name: 'PlaceDetailPage', segment: 'place-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-pet-form/register-pet-form.module#RegisterPetFormPageModule', name: 'RegisterPetFormPage', segment: 'register-pet-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registered-pet-details/registered-pet-details.module#RegisteredPetDetailsPageModule', name: 'RegisteredPetDetailsPage', segment: 'registered-pet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trainpets/trainpets.module#TrainpetsPageModule', name: 'TrainpetsPage', segment: 'trainpets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registerpets/registerpets.module#RegisterpetsPageModule', name: 'RegisterpetsPage', segment: 'registerpets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchvet/searchvet.module#SearchvetPageModule', name: 'SearchvetPage', segment: 'searchvet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_lost_pet_form_add_lost_pet_form__["a" /* AddLostPetFormPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lost_pet_details_lost_pet_details__["a" /* LostPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_for_sale_pet_add_for_sale_pet__["a" /* AddForSalePetPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_buy_pet_details_buy_pet_details__["a" /* BuyPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_pet_form_register_pet_form__["a" /* RegisterPetFormPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_view_profile_admin_view_profile__["a" /* AdminViewProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_view_user_registered_pets_admin_view_user_registered_pets__["a" /* AdminViewUserRegisteredPetsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_for_sale_pet_edit_for_sale_pet__["a" /* EditForSalePetPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_edit_lost_pet_edit_lost_pet__["a" /* EditLostPetPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_edit_registered_pet_edit_registered_pet__["a" /* EditRegisteredPetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_google_cloud_vision_google_cloud_vision__["a" /* GoogleCloudVisionProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_25__providers_lostpet_lostpet__["a" /* LostpetProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_buypet_buypet__["a" /* BuypetProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_register_pet_register_pet__["a" /* RegisterPetProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_admin_admin__["a" /* AdminProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        if (localStorage.getItem('uid') != '') {
            if (localStorage.getItem('isAdmin') == '1') {
                this.rootPage = "AdminHomePage";
            }
            else {
                this.rootPage = "TabsPage";
            }
        }
        else {
            this.rootPage = "HomePage";
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCloudVisionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleCloudVisionProvider = (function () {
    function GoogleCloudVisionProvider(http) {
        this.http = http;
        console.log('Hello GoogleCloudVisionProvider Provider');
    }
    GoogleCloudVisionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GoogleCloudVisionProvider);
    return GoogleCloudVisionProvider;
}());

//# sourceMappingURL=google-cloud-vision.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostpetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LostpetProvider = (function () {
    function LostpetProvider(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
    }
    LostpetProvider.prototype.randomCharacters = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    LostpetProvider.prototype.uploadPhoto = function (upload) {
        var _this = this;
        var uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        var promise = new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + upload.name).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, function (error) {
                reject(error);
            }, function () {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    };
    LostpetProvider.prototype.saveLostPet = function (pet) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            pet['uid'] = _this.userId;
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            pet['status'] = false;
            _this.db.collection('lostpets').doc().set(pet).then(function (res) {
                resolve(1);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    LostpetProvider.prototype.saveUpdates = function (pet, petId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('lostpets').doc(petId).update(pet).then(function (res) {
                resolve(1);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    LostpetProvider.prototype.ownerInfo = function (uid) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(uid).get().then(function (snapshots) {
                resolve(snapshots.data());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    LostpetProvider.prototype.getLostPetInfo = function (petId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('lostpets').doc(petId).get().then(function (pet) {
                resolve(pet.data());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    LostpetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LostpetProvider);
    return LostpetProvider;
}());

//# sourceMappingURL=lostpet.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map