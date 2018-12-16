import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { OfflinePage } from '../offline/offline';
import { OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html',
})
export class NewpagePage implements OnInit{

  status: OnlineStatusType;
  data: string;

  constructor(
    private iab: InAppBrowser,
    private onlineStatusService: OnlineStatusService,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      if(!navigator.onLine){
        this.navCtrl.push(OfflinePage);
        }
      this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
        this.status = status;
      if(!this.status && this.navCtrl.getActive().component.name === 'NewpagePage'){
        this.navCtrl.push(OfflinePage);
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
  
  ngOnInit(){
    if(navigator.onLine){
      console.log("new-page->ng-on-init");
      const browser = this.iab.create('http://www.mgconsultants.lk/','_self',{location:'no'});
    }
  }

}
