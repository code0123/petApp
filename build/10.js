webpackJsonp([10],{

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(588);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(330);
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
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.isSubmitting = false;
        this.userId = '';
        this.isAdmin = 0;
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passwordCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: this.emailCtrl,
            password: this.passwordCtrl
        });
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        if (this.userId != '') {
            if (this.isAdmin == 1) {
                this.navCtrl.push('AdminHomePage');
            }
            else {
                this.navCtrl.push('TabsPage');
            }
        }
        else {
            return true;
        }
    };
    LoginPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page);
        return false;
    };
    LoginPage.prototype.loginSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.isSubmitting = true;
            this.authProvider.login(this.email, this.password).then(function (user) {
                console.log('user', user);
                if (user['emailVerified']) {
                    _this.isSubmitting = false;
                    _this.userId = user['uid'];
                    localStorage.setItem('userId', user['uid']);
                    localStorage.setItem('email', user['email']);
                    _this.authProvider.loadProfile(user['uid']).then(function (res) {
                        localStorage.setItem('isAdmin', res['isAdmin']);
                        if (res['isAdmin'] == 1) {
                            _this.isAdmin = 1;
                            _this.navCtrl.push('AdminHomePage');
                        }
                        else {
                            _this.isAdmin = 0;
                            _this.navCtrl.push('TabsPage');
                        }
                    }).catch(function (err) {
                        _this.isSubmitting = false;
                        var toast = _this.toastCtrl.create({
                            message: 'Invalid email or password',
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    });
                }
                else {
                    _this.isSubmitting = false;
                    var toast = _this.toastCtrl.create({
                        message: 'Login failed, your email address is not verified yet',
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }).catch(function (err) {
                _this.isSubmitting = false;
                var toast = _this.toastCtrl.create({
                    message: 'Invalid email or password',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            var toast = this.toastCtrl.create({
                message: 'Login failed',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\ph2150108\Dropbox\petApp\src\pages\login\login.html"*/'<ion-content padding>\n  <div>\n    <h1 class="headerLogo"><img src="assets/images/logo.png" alt=""></h1>\n    <p class="subTitle">Welcome to Purrs and Paws,<br> Login to your account</p>\n    <form [formGroup]="loginForm" (ngSubmit)="loginSubmit()">\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" formControlName="email" [(ngModel)]="email" name="email"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" formControlName="password" [(ngModel)]="password" name="password"></ion-input>\n      </ion-item>\n      <p>Don\'t have an account? <a (click)="goToPage(\'RegisterPage\')" class="blue">Sign Up</a></p>\n      <button ion-button type="submit" class="btnLogin" [disabled]="isSubmitting"><ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner><ion-icon name="log-in" *ngIf="isSubmitting == false"></ion-icon>&nbsp; Login</button>\n      <a class="forgotPassBtn" (click)="goToPage(\'ForgotPassPage\')">Forgot Password?</a>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ph2150108\Dropbox\petApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map