webpackJsonp([2],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the NetworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NetworkPage = /** @class */ (function () {
    function NetworkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NetworkPage.prototype.ionViewDidLoad = function () {
        console.log('NetworkPage->ionViewDidLoad');
    };
    // IF LAZY-LOADED
    NetworkPage.prototype.click1 = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        console.log("After click refresh button page name: ", this.navCtrl.getActive().component.name);
    };
    /*refresher*/
    NetworkPage.prototype.doRefresh = function (event) {
        console.log('NetworkPage->Begin async operation');
        setTimeout(function () {
            console.log('NetworkPage->Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    NetworkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-network',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\network\network.html"*/'<!--\n  Generated template for the NetworkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>network</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n<ion-grid>\n  <ion-row justify-content-between>\n    <ion-col col-6>\n      <button ion-button color="dark" round outline (click)="click1()">Refresh</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<h1>Set Root Page</h1>\n  <p>In this method set this page as root page</p><br>\n<h1>Pull down to refresh</h1>\n  <br><br><br><br><br>\n  <p>press F12 and watch the console log</p>\n</ion-content>'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\network\network.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], NetworkPage);
    return NetworkPage;
    var _a, _b;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/network/network.module": [
		681,
		1
	],
	"../pages/newpage/newpage.module": [
		682,
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
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_online_status__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newpage_newpage__ = __webpack_require__(86);
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

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newpage_newpage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_network__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__refresh_refresh__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_event__ = __webpack_require__(256);
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
        this.data = this.navCtrl.getActive().component.name;
    };
    HomePage.prototype.ngOnInit = function () {
        console.log("home-page->ng-On-Init");
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
            selector: 'page-home',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>.Home_Page.</h1>\n    \n    {{data}}\n    <br><br><br>\n\n  <button ion-button icon-start (click)="click1()">\n    <ion-icon name="star"></ion-icon>\n    Base Page\n  </button>\n  \n  <button ion-button icon-end (click)="click3()">\n      setRoot Page\n    <ion-icon name="star"></ion-icon>\n  </button>\n\n  <button ion-button (click)="click4()">\n      Event\n    </button>\n\n  <button ion-button (click)="click2()">\n      Refresh\n  </button>\n  \n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
        console.log('RefreshPage->ionViewDidLoad');
    };
    RefreshPage.prototype.click1 = function () {
        this.checkNetwork();
    };
    RefreshPage.prototype.checkNetwork = function () {
        if (navigator.onLine) {
            console.log('RefreshPage->checkNetwork_online');
            alert('online');
            //    this.navCtrl.push(NewpagePage);
        }
        if (!navigator.onLine) {
            console.log('RefreshPage->checkNetwork_offline');
            alert('offline');
            //    this.navCtrl.push(NetworkPage);
        }
    };
    RefreshPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refresh',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\refresh\refresh.html"*/'<!--\n  Generated template for the RefreshPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Refresh</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>CheckNet Work</h1>\n  <button ion-button color="dark" round outline (click)="click1()">Refresh</button>\n  <p>In this method check network only one time. And this method can redirect another page</p><br>\n  <h2>Trun Your WIFI off and Refresh</h2>\n  <p>it will give offline alert</p>\n  <h2>Trun Your WIFI on and Refresh</h2>\n  <p>it will give online alert</p><br><br><br>\n  <p>press F12 and watch the console log</p>\n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\refresh\refresh.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RefreshPage);
    return RefreshPage;
}());

//# sourceMappingURL=refresh.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
            console.log('EventPage->online from constructor');
            alert('online');
            //      this.navCtrl.push(NewpagePage);
        });
        window.addEventListener('offline', function () {
            console.log('EventPage->offline from constructor');
            alert('offline');
            //        this.navCtrl.push(HomePage);
        });
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('EventPage->ionViewDidLoad');
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\event\event.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Event Listener</h1>\n  <p>In this method cann\'t redirect another page</p><br>\n  <h2>Trun Your WIFI off</h2>\n  <p>it will give offline alert</p>\n  <h2>Trun Your WIFI on</h2>\n  <p>it will give online alert</p><br><br><br>\n  <p>press F12 and watch the console log</p>\n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_newpage_newpage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_network_network__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_refresh_refresh__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_event__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_offline_offline__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_network_service_network_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_network_ngx__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_online_status__ = __webpack_require__(115);
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
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/network/network.module#NetworkPageModule', name: 'NetworkPage', segment: 'network', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newpage/newpage.module#NewpagePageModule', name: 'NewpagePage', segment: 'newpage', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_ngx_online_status__["a" /* OnlineStatusModule */]
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
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_network_service_network_service__["a" /* NetworkServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_network_ngx__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { NewpagePage } from '../pages/newpage/newpage';
//import { NetworkPage } from '../pages/network/network';
// declare let window: any;
var MyApp = /** @class */ (function () {
    //  rootPage:any = NewpagePage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(398);
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_online_status__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offline_offline__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(116);
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
    NewpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newpage',template:/*ion-inline-start:"E:\@Projects\Ionic\mgg\src\pages\newpage\newpage.html"*/'<!--\n  Generated template for the NewpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Newpage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class=\'my-component\'>\n  <h1>Base Page</h1>\n\n{{status}} <!--this will out put the status value-->\n{{data}}\n\n\n</ion-content>\n'/*ion-inline-end:"E:\@Projects\Ionic\mgg\src\pages\newpage\newpage.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_online_status__["b" /* OnlineStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_online_status__["b" /* OnlineStatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _d || Object])
    ], NewpagePage);
    return NewpagePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=newpage.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.js.map