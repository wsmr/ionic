import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {InAppBrowser} from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewpagePage } from '../pages/newpage/newpage';
import { NetworkPage } from '../pages/network/network';
import { RefreshPage } from '../pages/refresh/refresh';
import { EventPage } from '../pages/event/event';
import { OfflinePage } from '../pages/offline/offline';


import { NetworkServiceProvider } from '../providers/network-service/network-service';
import { Network } from '@ionic-native/network/ngx';

import { OnlineStatusModule } from 'ngx-online-status';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewpagePage,
    NetworkPage,
    RefreshPage,
    EventPage,
    OfflinePage,
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    OnlineStatusModule
  ],

  bootstrap: [
    IonicApp
  ],
  
  entryComponents: [
    MyApp,
    HomePage,
    NewpagePage,
    NetworkPage,
    RefreshPage,
    EventPage,
    OfflinePage,
    
  ],

  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkServiceProvider,
    Network
  ]
  
})


export class AppModule {}
