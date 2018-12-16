import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the NetworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
})
export class NetworkPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }
  ionViewDidLoad() {
        console.log('NetworkPage->ionViewDidLoad');
      }
  // IF LAZY-LOADED
  click1(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    console.log("After click refresh button page name: ",this.navCtrl.getActive().component.name);
      }
    /*refresher*/
  doRefresh(event) {
    console.log('NetworkPage->Begin async operation');
    setTimeout(() => {
      console.log('NetworkPage->Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}