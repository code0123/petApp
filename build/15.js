webpackJsonp([15],{

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTrainPetPageModule", function() { return AdminTrainPetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_train_pet__ = __webpack_require__(637);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminTrainPetPageModule = (function () {
    function AdminTrainPetPageModule() {
    }
    AdminTrainPetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_train_pet__["a" /* AdminTrainPetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_train_pet__["a" /* AdminTrainPetPage */]),
            ],
        })
    ], AdminTrainPetPageModule);
    return AdminTrainPetPageModule;
}());

//# sourceMappingURL=admin-train-pet.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTrainPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_add_train_pet_admin_add_train_pet__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_train_pet_edit_train_pet__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminTrainPetPage = (function () {
    function AdminTrainPetPage(navCtrl, navParams, modalCtrl, toastCtrl, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.videosCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.isAdmin = parseInt(localStorage.getItem('isAdmin'));
        this.getTrainPetVideos();
        console.log('type', this.isAdmin);
    }
    AdminTrainPetPage.prototype.getTrainPetVideos = function () {
        var _this = this;
        this.db.collection('trainpetsvideos').where("isactive", "==", true).orderBy("datePosted", "desc").limit(1000).onSnapshot(function (snapshots) {
            var videos = [];
            snapshots.forEach(function (doc) {
                var docData = doc.data();
                docData['videoId'] = doc.id;
                videos.push(docData);
            });
            _this.videos = videos;
            _this.videosCount = Object.keys(videos).length;
            _this.pageLoaded = true;
            console.log('this.videos', _this.videos);
        }), (function (err) {
            var toast = _this.toastCtrl.create({
                message: err.message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    AdminTrainPetPage.prototype.addTrainPetVideos = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__admin_add_train_pet_admin_add_train_pet__["a" /* AdminAddTrainPetPage */]);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    AdminTrainPetPage.prototype.removePost = function (videoId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Remove this post?',
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
                        _this.db.collection('trainpetsvideos').doc(videoId).update({
                            isactive: false
                        }).then(function (res) {
                            var toast = _this.toastCtrl.create({
                                message: 'Video was deleted',
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function (err) {
                            var toast = _this.toastCtrl.create({
                                message: err.message,
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminTrainPetPage.prototype.action = function (videoId) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: 'Remove',
                    icon: 'trash',
                    handler: function () {
                        _this.removePost(videoId);
                    }
                }, {
                    text: 'Edit',
                    icon: 'create',
                    handler: function () {
                        var data = {
                            videoId: videoId
                        };
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__edit_train_pet_edit_train_pet__["a" /* EditTrainPetPage */], data);
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
    AdminTrainPetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-train-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-train-pet\admin-train-pet.html"*/'<ion-header [class.admin]="isAdmin == 1">\n\n  <ion-navbar>\n    <ion-title>Train Pet Videos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding [class.admin]="isAdmin == 1">\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n  <div *ngIf="pageLoaded">\n    <p *ngIf="videos?.length == 0" class="noPetResult">No train pet video yet.</p>\n    <div *ngIf="videos?.length">\n      <div class="videoPlayList" *ngFor="let video of videos">\n        <h5>{{video?.title}}</h5>\n        <video width="100%" controls poster="assets/images/icon.png">\n          <source src="{{video?.video}}" type="video/mp4">\n          <source src="{{video?.video}}" type="video/ogg"> Your browser does not support HTML5 video.\n        </video>\n        <button ion-button type="button" *ngIf="isAdmin == 1" class="listBtn" (click)="action(video.videoId)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n        <span class="datePosted">Posted: {{video.datePosted | date:\'mediumDate\'}}</span>\n      </div>\n    </div>\n    <ion-fab bottom right *ngIf="isAdmin == 1">\n      <button ion-fab (click)="addTrainPetVideos()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-train-pet\admin-train-pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AdminTrainPetPage);
    return AdminTrainPetPage;
}());

//# sourceMappingURL=admin-train-pet.js.map

/***/ })

});
//# sourceMappingURL=15.js.map