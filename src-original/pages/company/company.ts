import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-company',
  templateUrl: 'company.html'
})
export class CompanyPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    window.open('https://www.utaxsoftware.com', '_system', 'location=yes'); 
    return false;
  }

  ionViewDidEnter() {
    this.navCtrl.setRoot(HomePage);
  }

}
