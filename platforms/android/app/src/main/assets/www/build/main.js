webpackJsonp([2],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_online_status__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newpage_newpage__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OfflinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



var OfflinePage = /** @class */ (function () {
    function OfflinePage(platform, onlineStatusService, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.onlineStatusService = onlineStatusService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.onlineStatusService.status.subscribe(function (status) {
            _this.status = status;
            if (_this.status && _this.navCtrl.getActive().component.name === 'OfflinePage') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newpage_newpage__["a" /* NewpagePage */]);
            }
        });
    }
    OfflinePage.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    OfflinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offline',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\offline\offline.html"*/'<!--\n  Generated template for the OfflinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n<ion-content padding class="my-style">\n    <ion-footer>\n        <ion-toolbar>\n            <ion-buttons>\n                <ion-row>\n                    <ion-col width-50 style="text-align: center">\n                        <button ion-button round outline (click)="exitApp()">Exit MGC Action Traking</button>\n                    </ion-col>\n                </ion-row>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-footer> \n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\offline\offline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_online_status__["b" /* OnlineStatusService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OfflinePage);
    return OfflinePage;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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


var NetworkPage = /** @class */ (function () {
    function NetworkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        window.addEventListener('online', function () {
            console.log('online from constructor');
            alert('online');
            //        this.navCtrl.push(NewpagePage);
        });
        window.addEventListener('offline', function () {
            console.log('offline from constructor');
            alert('offline');
            //        this.navCtrl.push(HomePage);
        });
    }
    NetworkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NetworkPage');
    };
    // IF LAZY-LOADED
    NetworkPage.prototype.click1 = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    NetworkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-network',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\network\network.html"*/'<!--\n  Generated template for the NetworkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>network</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image" >\n\n<ion-grid>\n  <ion-row justify-content-between>\n    <ion-col col-6>\n      <button ion-button color="dark" round outline (click)="click1()">Retry</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\network\network.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NetworkPage);
    return NetworkPage;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/network/network.module": [
		682,
		1
	],
	"../pages/newpage/newpage.module": [
		683,
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
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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


/**
 * Generated class for the RefreshPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//import { NewpagePage } from '../newpage/newpage';
//import { NetworkPage } from '../network/network';
var RefreshPage = /** @class */ (function () {
    function RefreshPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RefreshPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RefreshPage');
    };
    RefreshPage.prototype.click1 = function () {
        this.checkNetwork();
    };
    RefreshPage.prototype.checkNetwork = function () {
        if (navigator.onLine) {
            console.log('online');
            alert('online');
            //    this.navCtrl.push(NewpagePage);
        }
        if (!navigator.onLine) {
            console.log('offline');
            alert('offline');
            //    this.navCtrl.push(NetworkPage);
        }
    };
    RefreshPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refresh',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\refresh\refresh.html"*/'<!--\n  Generated template for the RefreshPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Refresh</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>CheckNet Work</h1>\n  <button ion-button color="dark" round outline (click)="click1()">NetWork</button>\n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\refresh\refresh.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RefreshPage);
    return RefreshPage;
}());

//# sourceMappingURL=refresh.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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


var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        window.addEventListener('online', function () {
            console.log('online from constructor');
            alert('online');
            //      this.navCtrl.push(NewpagePage);
        });
        window.addEventListener('offline', function () {
            console.log('offline from constructor');
            alert('offline');
            //        this.navCtrl.push(HomePage);
        });
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\event\event.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_newpage_newpage__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_network_network__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_refresh_refresh__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_event__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_offline_offline__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_online_online__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_network_service_network_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_network_ngx__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_online_status__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_newpage_newpage__["a" /* NewpagePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_network_network__["a" /* NetworkPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_refresh_refresh__["a" /* RefreshPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_offline_offline__["a" /* OfflinePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_online_online__["a" /* OnlinePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/network/network.module#NetworkPageModule', name: 'NetworkPage', segment: 'network', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newpage/newpage.module#NewpagePageModule', name: 'NewpagePage', segment: 'newpage', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_ngx_online_status__["a" /* OnlineStatusModule */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_newpage_newpage__["a" /* NewpagePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_network_network__["a" /* NetworkPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_refresh_refresh__["a" /* RefreshPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_offline_offline__["a" /* OfflinePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_online_online__["a" /* OnlinePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_network_service_network_service__["a" /* NetworkServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_network_ngx__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_newpage_newpage__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

//import { NetworkPage } from '../pages/network/network';
// declare let window: any;
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //  rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_newpage_newpage__["a" /* NewpagePage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newpage_newpage__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_network__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__refresh_refresh__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_event__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, iab) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        console.log("home-page->Constructor");
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('home-page->ionViewDidLoad');
    };
    HomePage.prototype.ngOnInit = function () {
        console.log("home-page->ng-On-Init");
        //     const browser = this.iab.create('http://www.mgconsultants.lk/','_self',{location:'no'});
    };
    // IF LAZY-LOADED
    HomePage.prototype.click1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newpage_newpage__["a" /* NewpagePage */]);
    };
    // IF LAZY-LOADED
    HomePage.prototype.click2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__refresh_refresh__["a" /* RefreshPage */]);
    };
    // IF LAZY-LOADED
    HomePage.prototype.click3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__network_network__["a" /* NetworkPage */]);
    };
    // IF LAZY-LOADED
    HomePage.prototype.click4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_event__["a" /* EventPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>.Home_Page.</h1>\n  <!-- <button ion-button block >Click1 me</button>\n  <button ion-button block >Click2 me</button> -->\n\n  <button ion-button icon-start (click)="click1()">\n    <ion-icon name="star"></ion-icon>\n    NewpagePage\n  </button>\n  \n  <button ion-button icon-end (click)="click2()">\n    RefreshPage\n    <ion-icon name="star"></ion-icon>\n  </button>\n\n  <button ion-button icon-start (click)="click4()">\n      <ion-icon name="star"></ion-icon>\n      EventPage\n    </button>\n\n  <button ion-button icon-start (click)="click3()">\n    NetworkPage\n  </button>\n  \n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_online_status__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offline_offline__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OnlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


var OnlinePage = /** @class */ (function () {
    function OnlinePage(onlineStatusService, navCtrl, navParams) {
        var _this = this;
        this.onlineStatusService = onlineStatusService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.onlineStatusService.status.subscribe(function (status) {
            _this.status = status;
            _this.m();
        });
    }
    OnlinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnlinePage');
        if (!navigator.onLine) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__offline_offline__["a" /* OfflinePage */]);
        }
    };
    OnlinePage.prototype.m = function () {
        this.data = this.navCtrl.getActive().component.name;
        console.log(this.navCtrl.getActive().component.name);
        if (!navigator.onLine) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__offline_offline__["a" /* OfflinePage */]);
        }
    };
    OnlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-online',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\online\online.html"*/'<!--\n  Generated template for the OnlinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Online</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>This is On_Line Page</h1>\n\n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\online\online.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_online_status__["b" /* OnlineStatusService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OnlinePage);
    return OnlinePage;
}());

//# sourceMappingURL=online.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NetworkServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NetworkServiceProvider = /** @class */ (function () {
    function NetworkServiceProvider(http) {
        this.http = http;
        console.log('Hello NetworkServiceProvider Provider');
    }
    NetworkServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NetworkServiceProvider);
    return NetworkServiceProvider;
}());

//# sourceMappingURL=network-service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_online_status__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offline_offline__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



var NewpagePage = /** @class */ (function () {
    function NewpagePage(iab, onlineStatusService, navCtrl, navParams) {
        var _this = this;
        this.iab = iab;
        this.onlineStatusService = onlineStatusService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (!navigator.onLine) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__offline_offline__["a" /* OfflinePage */]);
        }
        this.onlineStatusService.status.subscribe(function (status) {
            _this.status = status;
            if (!_this.status && _this.navCtrl.getActive().component.name === 'NewpagePage') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__offline_offline__["a" /* OfflinePage */]);
            }
        });
    }
    //   m(){
    //     this.data = this.navCtrl.getActive().component.name;
    //     console.log(this.navCtrl.getActive().component.name);
    //     if(navigator.onLine || (this.data === "OnlinePage")){
    //       this.navCtrl.push(OnlinePage);
    //     }
    //     if (!navigator.onLine || (this.data === "OfflinePage") ) {
    //       this.navCtrl.push(OfflinePage);
    //     }
    // }
    NewpagePage.prototype.ngOnInit = function () {
        if (navigator.onLine) {
            console.log("new-page->ng-on-init");
            var browser = this.iab.create('http://www.mgconsultants.lk/', '_self', { location: 'no' });
        }
    };
    /*refresher*/
    NewpagePage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    NewpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newpage',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\newpage\newpage.html"*/'<!--\n  Generated template for the NewpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Newpage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class=\'my-component\'>\n  <h1>Base Page</h1>\n    <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n\n{{status}} <!--this will out put the status value-->\n{{data}}\n\n\n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\newpage\newpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_online_status__["b" /* OnlineStatusService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NewpagePage);
    return NewpagePage;
}());

//# sourceMappingURL=newpage.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map