import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { NewpagePage } from '../pages/newpage/newpage';
//import { NetworkPage } from '../pages/network/network';



// declare let window: any;


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
//  rootPage:any = NewpagePage;


  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen
    ){
  }
}

