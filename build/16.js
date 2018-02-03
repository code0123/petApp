webpackJsonp([16],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegisteredUserPageModule", function() { return AdminRegisteredUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_registered_user__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminRegisteredUserPageModule = (function () {
    function AdminRegisteredUserPageModule() {
    }
    AdminRegisteredUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_registered_user__["a" /* AdminRegisteredUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_registered_user__["a" /* AdminRegisteredUserPage */]),
            ],
        })
    ], AdminRegisteredUserPageModule);
    return AdminRegisteredUserPageModule;
}());

//# sourceMappingURL=admin-registered-user.module.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRegisteredUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_view_profile_admin_view_profile__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminRegisteredUserPage = (function () {
    function AdminRegisteredUserPage(navCtrl, navParams, alertCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.usersCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.pageLoaded = false;
    }
    AdminRegisteredUserPage.prototype.ionViewDidLoad = function () {
        this.loadRegisteredUsers();
        var toast = this.toastCtrl.create({
            message: 'Slide the list to perform an action',
            duration: 5000,
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    AdminRegisteredUserPage.prototype.viewProfile = function (userId) {
        var user = {
            userId: userId
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__admin_view_profile_admin_view_profile__["a" /* AdminViewProfilePage */], user);
        modal.onDidDismiss(function (data) {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    };
    AdminRegisteredUserPage.prototype.loadRegisteredUsers = function () {
        var _this = this;
        this.db.collection('users').orderBy("dateAdded").limit(1000).onSnapshot(function (res) {
            var users = [];
            res.forEach(function (doc) {
                users.push(doc.data());
            });
            _this.pageLoaded = true;
            _this.users = users;
        }), (function (err) {
            console.log('err', err);
        });
    };
    AdminRegisteredUserPage.prototype.deleteUser = function (event, uid, name) {
        var _this = this;
        event.stopPropagation();
        console.log('uid', uid);
        var confirm = this.alertCtrl.create({
            title: 'Delete User?',
            message: "Are you sure do you want to delete <strong>" + name + "</strong> user account?",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.db.collection('users').doc(uid).delete().then(function () {
                            var toast = _this.toastCtrl.create({
                                message: 'User was deleted',
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function (err) {
                            var toast = _this.toastCtrl.create({
                                message: err.message,
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        confirm.present();
        return false;
    };
    AdminRegisteredUserPage.prototype.editRole = function (event, uid, name, isAdmin) {
        var _this = this;
        event.stopPropagation();
        var confirm = this.alertCtrl.create({
            title: 'Update user role?',
            message: "Are you sure do you want to update " + name + "'s role in the app?",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        if (isAdmin == 1) {
                            isAdmin = 0;
                        }
                        else {
                            isAdmin = 1;
                        }
                        _this.db.collection('users').doc(uid).update({
                            isAdmin: isAdmin,
                            adminSwitchUser: isAdmin
                        }).then(function () {
                            var toast = _this.toastCtrl.create({
                                message: name + "'s user role was updated",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function (err) {
                            var toast = _this.toastCtrl.create({
                                message: err.message,
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        confirm.present();
        return false;
    };
    AdminRegisteredUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-registered-user',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-registered-user\admin-registered-user.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registered Users</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="list-avatar-page" padding>\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n  <ion-list *ngIf="pageLoaded">\n     <ion-item-sliding *ngFor="let user of users" (click)="viewProfile(user?.uid)">\n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="user?.photo != \'\' && user?.photo != null ? user?.photo : \'assets/images/blank-profile.png\'">\n        </ion-avatar>\n        <h2>{{user?.name}} <ion-badge color="primary">{{user?.isAdmin == 1 ? \'Admin\' : \'User\'}}</ion-badge></h2>\n        <p>{{user?.email}}</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="primary" icon-start (click)="editRole($event, user?.uid, user?.name, user?.isAdmin)">\n          <ion-icon name="create"></ion-icon>\n          Role\n        </button>\n        <button ion-button color="danger" icon-start (click)="deleteUser($event, user?.uid, user?.name)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-registered-user\admin-registered-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AdminRegisteredUserPage);
    return AdminRegisteredUserPage;
}());

//# sourceMappingURL=admin-registered-user.js.map

/***/ })

});
//# sourceMappingURL=16.js.map