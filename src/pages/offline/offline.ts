import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfflinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { NewpagePage } from '../newpage/newpage';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-offline',
  templateUrl: 'offline.html',
})
export class OfflinePage {

  status: OnlineStatusType;
  data: string;

  constructor(
    public platform: Platform, 
    private onlineStatusService: OnlineStatusService,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
        this.status = status;
        if(this.status && this.navCtrl.getActive().component.name === 'OfflinePage'){
          this.navCtrl.push(NewpagePage);
        }
      });
  }

  exitApp(){
    this.platform.exitApp();
 }
}
