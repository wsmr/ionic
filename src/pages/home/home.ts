import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { OnInit } from '@angular/core';


 import { NewpagePage } from '../newpage/newpage';
 import { NetworkPage } from '../network/network';
 import { RefreshPage } from '../refresh/refresh';
 import { EventPage } from '../event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

//  tab1Root:any = NewpagePage;
//  tab2Root:any = ContactPage;

data: string;

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
    ) {
      console.log("home-page->Constructor");
    }
  ionViewDidLoad() {
      console.log('home-page->ionViewDidLoad');
      this.data=this.navCtrl.getActive().component.name;    
    }
  ngOnInit(){
    console.log("home-page->ng-On-Init");
    }
   
  // IF LAZY-LOADED
  click1(){
    this.navCtrl.push(NewpagePage);
      }
  // IF LAZY-LOADED
  click2(){
    this.navCtrl.push(RefreshPage);
      }
      // IF LAZY-LOADED
  click3(){
    this.navCtrl.push(NetworkPage);
      }
  // IF LAZY-LOADED
  click4(){
    this.navCtrl.push(EventPage);
      }

}
