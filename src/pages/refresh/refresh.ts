import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RefreshPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//import { NewpagePage } from '../newpage/newpage';
//import { NetworkPage } from '../network/network';

@Component({
  selector: 'page-refresh',
  templateUrl: 'refresh.html',
})
export class RefreshPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }  
  ionViewDidLoad() {
    console.log('RefreshPage->ionViewDidLoad');
  }
public click1(){
  this.checkNetwork();
}
public checkNetwork() {
  if(navigator.onLine){
      console.log('RefreshPage->checkNetwork_online');
      alert('online');
//    this.navCtrl.push(NewpagePage);
  }
  if(!navigator.onLine){
      console.log('RefreshPage->checkNetwork_offline');
      alert('offline');
//    this.navCtrl.push(NetworkPage);
  }
}
}
