import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { OnInit } from '@angular/core';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController,private iab: InAppBrowser) {

  }
  ngOnInit(){
    const browser = this.iab.create('http://www.mgconsultants.lk/','_self',{location:'no'});
  }
}
