import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html'
})
export class FacebookPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    window.open('https://www.facebook.com/uTaxSoftware/', '_system', 'location=yes');
    return false;
  }

  ionViewDidEnter() {
    this.navCtrl.setRoot(HomePage);
  }

}
