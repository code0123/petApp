webpackJsonp([21],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostpetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(65);
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
    LostpetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LostpetProvider);
    return LostpetProvider;
}());

//# sourceMappingURL=lostpet.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuypetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(65);
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
    BuypetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BuypetProvider);
    return BuypetProvider;
}());

//# sourceMappingURL=buypet.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(65);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(65);
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

/***/ 194:
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
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-for-sale-pet/add-for-sale-pet.module": [
		534,
		44
	],
	"../pages/add-lost-pet-form/add-lost-pet-form.module": [
		545,
		43
	],
	"../pages/admin-home/admin-home.module": [
		535,
		36
	],
	"../pages/admin/admin.module": [
		568,
		35
	],
	"../pages/buy-pet-details/buy-pet-details.module": [
		538,
		42
	],
	"../pages/editprofile/editprofile.module": [
		536,
		41
	],
	"../pages/groompet/groompet.module": [
		537,
		34
	],
	"../pages/home/home.module": [
		539,
		33
	],
	"../pages/login/login.module": [
		547,
		32
	],
	"../pages/lost-pet-details/lost-pet-details.module": [
		540,
		40
	],
	"../pages/lostpets/lostpets.module": [
		541,
		31
	],
	"../pages/other/other.module": [
		542,
		30
	],
	"../pages/pet/pet.module": [
		543,
		29
	],
	"../pages/place-detail/place-detail.module": [
		544,
		39
	],
	"../pages/profile/profile.module": [
		551,
		28
	],
	"../pages/register-pet-form/register-pet-form.module": [
		554,
		38
	],
	"../pages/register/register.module": [
		546,
		27
	],
	"../pages/registered-pet-details/registered-pet-details.module": [
		553,
		37
	],
	"../pages/registerpets/registerpets.module": [
		548,
		26
	],
	"../pages/searchvet/searchvet.module": [
		549,
		25
	],
	"../pages/tabs/tabs.module": [
		550,
		24
	],
	"../pages/trainpets/trainpets.module": [
		552,
		23
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
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(65);
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

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddForSalePetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__ = __webpack_require__(136);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__["a" /* BuypetProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddForSalePetPage);
    return AddForSalePetPage;
}());

//# sourceMappingURL=add-for-sale-pet.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(182);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_buypet_buypet__ = __webpack_require__(136);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_buypet_buypet__["a" /* BuypetProvider */]])
    ], BuyPetDetailsPage);
    return BuyPetDetailsPage;
}());

//# sourceMappingURL=buy-pet-details.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lostpet_lostpet__ = __webpack_require__(108);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_lostpet_lostpet__["a" /* LostpetProvider */]])
    ], LostPetDetailsPage);
    return LostPetDetailsPage;
}());

//# sourceMappingURL=lost-pet-details.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLostPetFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__ = __webpack_require__(108);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__["a" /* LostpetProvider */]])
    ], AddLostPetFormPage);
    return AddLostPetFormPage;
}());

//# sourceMappingURL=add-lost-pet-form.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());

//# sourceMappingURL=place-detail.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPetFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__ = __webpack_require__(158);
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
            selector: 'page-register-pet-form',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\register-pet-form\register-pet-form.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Register Pet Form\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="profileBlock">\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/blank_pet.png\' " width="100" height="100"\n      alt="" (click)="petPicUpload.click()">\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n  </div>\n\n  <form [formGroup]="registerPetForm" (ngSubmit)="registerPetFormSubmit()">\n    <ion-item hidden>\n      <ion-label floating>Image</ion-label>\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Pet Type</ion-label>\n      <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n        <ion-option value="Dog">Dog</ion-option>\n        <ion-option value="Cat">Cat</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Breed</ion-label>\n      <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Color</ion-label>\n      <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Age</ion-label>\n      <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Gender</ion-label>\n      <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n        <ion-option value="Female">Female</ion-option>\n        <ion-option value="Male">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Date of last vaccine</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Remarks</ion-label>\n      <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n    </ion-item>\n  \n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\register-pet-form\register-pet-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__["a" /* RegisterPetProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], RegisterPetFormPage);
    return RegisterPetFormPage;
}());

//# sourceMappingURL=register-pet-form.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_pet_register_pet__ = __webpack_require__(158);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_pet_register_pet__["a" /* RegisterPetProvider */]])
    ], RegisteredPetDetailsPage);
    return RegisteredPetDetailsPage;
}());

//# sourceMappingURL=registered-pet-details.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_editprofile_editprofile__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_lost_pet_form_add_lost_pet_form__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_place_detail_place_detail__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lost_pet_details_lost_pet_details__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_for_sale_pet_add_for_sale_pet__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_buy_pet_details_buy_pet_details__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_pet_form_register_pet_form__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_registered_pet_details_registered_pet_details__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_profile_profile__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_google_cloud_vision_google_cloud_vision__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_lostpet_lostpet__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_buypet_buypet__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_register_pet_register_pet__ = __webpack_require__(158);
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
                __WEBPACK_IMPORTED_MODULE_16__pages_registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/add-for-sale-pet/add-for-sale-pet.module#AddForSalePetPageModule', name: 'AddForSalePetPage', segment: 'add-for-sale-pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-home/admin-home.module#AdminHomePageModule', name: 'AdminHomePage', segment: 'admin-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groompet/groompet.module#GroompetPageModule', name: 'GroompetPage', segment: 'groompet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-pet-details/buy-pet-details.module#BuyPetDetailsPageModule', name: 'BuyPetDetailsPage', segment: 'buy-pet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lost-pet-details/lost-pet-details.module#LostPetDetailsPageModule', name: 'LostPetDetailsPage', segment: 'lost-pet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lostpets/lostpets.module#LostpetsPageModule', name: 'LostpetsPage', segment: 'lostpets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pet/pet.module#PetPageModule', name: 'PetPage', segment: 'pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule', name: 'PlaceDetailPage', segment: 'place-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-lost-pet-form/add-lost-pet-form.module#AddLostPetFormPageModule', name: 'AddLostPetFormPage', segment: 'add-lost-pet-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registerpets/registerpets.module#RegisterpetsPageModule', name: 'RegisterpetsPage', segment: 'registerpets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchvet/searchvet.module#SearchvetPageModule', name: 'SearchvetPage', segment: 'searchvet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trainpets/trainpets.module#TrainpetsPageModule', name: 'TrainpetsPage', segment: 'trainpets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registered-pet-details/registered-pet-details.module#RegisteredPetDetailsPageModule', name: 'RegisteredPetDetailsPage', segment: 'registered-pet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-pet-form/register-pet-form.module#RegisterPetFormPageModule', name: 'RegisterPetFormPage', segment: 'register-pet-form', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_lost_pet_form_add_lost_pet_form__["a" /* AddLostPetFormPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lost_pet_details_lost_pet_details__["a" /* LostPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_for_sale_pet_add_for_sale_pet__["a" /* AddForSalePetPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_buy_pet_details_buy_pet_details__["a" /* BuyPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_pet_form_register_pet_form__["a" /* RegisterPetFormPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_google_cloud_vision_google_cloud_vision__["a" /* GoogleCloudVisionProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_20__providers_lostpet_lostpet__["a" /* LostpetProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_buypet_buypet__["a" /* BuypetProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_register_pet_register_pet__["a" /* RegisterPetProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
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
        //rootPage:string = "TabsPage";
        this.rootPage = "HomePage";
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCloudVisionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
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

/***/ })

},[336]);
//# sourceMappingURL=main.js.map