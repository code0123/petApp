webpackJsonp([18],{

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGroomPetPageModule", function() { return AdminGroomPetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_groom_pet__ = __webpack_require__(582);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminGroomPetPageModule = (function () {
    function AdminGroomPetPageModule() {
    }
    AdminGroomPetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_groom_pet__["a" /* AdminGroomPetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_groom_pet__["a" /* AdminGroomPetPage */]),
            ],
        })
    ], AdminGroomPetPageModule);
    return AdminGroomPetPageModule;
}());

//# sourceMappingURL=admin-groom-pet.module.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGroomPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGroomPetPage = (function () {
    function AdminGroomPetPage(navCtrl, navParams, streamingMedia) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.streamingMedia = streamingMedia;
    }
    AdminGroomPetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminGroomPetPage');
    };
    AdminGroomPetPage.prototype.playVideo = function (videoLink) {
        console.log('videoLink', videoLink);
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            orientation: 'portrait'
        };
        this.streamingMedia.playVideo(videoLink, options);
    };
    AdminGroomPetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-groom-pet',template:/*ion-inline-start:"C:\Users\ph2150108\Dropbox\petApp\src\pages\admin-groom-pet\admin-groom-pet.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Groom Pet Videos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <div class="videoPlayList">\n    <h5>How to Use Clippers when Grooming a Shaggy-Haired Dog : Dog Grooming</h5>\n    <!-- <video width="100%" poster="https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/videos%2Fgroom%2Fdog%20grooming.MP4?alt=media&token=3d227d77-1170-434b-9f87-22ace107e66d">\n      <source src="" type="video/mp4">\n    </video> -->\n\n    <video width="100%" controls>\n      <source src="https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/videos%2Fgroom%2Fdog%20grooming.MP4?alt=media&token=3d227d77-1170-434b-9f87-22ace107e66d" type="video/mp4">\n      <source src="https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/videos%2Fgroom%2Fdog%20grooming.MP4?alt=media&token=3d227d77-1170-434b-9f87-22ace107e66d" type="video/ogg"> Your browser does not support HTML5 video.\n    </video>\n    <button (click)="playVideo(\'https://firebasestorage.googleapis.com/v0/b/purrspaws-87594.appspot.com/o/videos%2Fgroom%2Fdog%20grooming.MP4?alt=media&token=3d227d77-1170-434b-9f87-22ace107e66d\')"><ion-icon name="play"></ion-icon></button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ph2150108\Dropbox\petApp\src\pages\admin-groom-pet\admin-groom-pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], AdminGroomPetPage);
    return AdminGroomPetPage;
}());

//# sourceMappingURL=admin-groom-pet.js.map

/***/ })

});
//# sourceMappingURL=18.js.map