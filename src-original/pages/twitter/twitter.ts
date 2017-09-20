import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-twitter',
  templateUrl: 'twitter.html'
})
export class TwitterPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    window.open('https://twitter.com/', '_system', 'location=yes');
    return false;
  }

  ionViewDidEnter() {
    this.navCtrl.setRoot(HomePage);
  }

}
