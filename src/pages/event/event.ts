import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/

// import { HomePage } from '../home/home';

declare let window: any;

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
    window.addEventListener('online',function(){
      console.log('EventPage->online from constructor');
      alert('online');
//      this.navCtrl.push(NewpagePage);
    });
    window.addEventListener('offline',function(){
      console.log('EventPage->offline from constructor');
      alert('offline');
//        this.navCtrl.push(HomePage);
    });
  }
  
  ionViewDidLoad() {
    console.log('EventPage->ionViewDidLoad');
  }
}
