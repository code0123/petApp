webpackJsonp([4],{

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(326);
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
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, authProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.isSubmitting = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passwordCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: this.nameCtrl,
            email: this.emailCtrl,
            password: this.passwordCtrl
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goToLoginPage = function () {
        this.navCtrl.push('LoginPage');
    };
    RegisterPage.prototype.registerSubmit = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.isSubmitting = true;
            var userData_1 = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            this.authProvider.register(userData_1).then(function (userId) {
                if (userId != '') {
                    _this.authProvider.saveRegisteredUser(userId, userData_1).then(function (res) {
                        _this.authProvider.sendEmailVerification().then(function (emailRes) {
                            _this.isSubmitting = false;
                            _this.name = "";
                            _this.email = "";
                            _this.password = "";
                            _this.navCtrl.push('LoginPage');
                            var toast = _this.toastCtrl.create({
                                message: 'Email verification was sent to your email, please verify your account to login',
                                duration: 7000,
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
            console.log('this.registerForm', this.registerForm);
            var toast = this.toastCtrl.create({
                message: 'Please fill out the fields properly',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="registerForm" (ngSubmit)="registerSubmit()">\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" formControlName="email" [(ngModel)]="email" name="email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password" [(ngModel)]="password" name="password"></ion-input>\n    </ion-item>\n    <p>Don\'t have an account? <a (click)="goToLoginPage()" class="blue">Sign in</a></p>\n    <button ion-button class="btnRegister" type="submit" [disabled]="isSubmitting"><ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner><ion-icon name="person-add" *ngIf="isSubmitting == false"></ion-icon>&nbsp; Register</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=4.js.map