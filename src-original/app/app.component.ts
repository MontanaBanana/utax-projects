import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ReturnPage } from '../pages/return/return';
import { RequestedPage } from '../pages/requested/requested';
import { AppointmentPage } from '../pages/appointment/appointment';
import { StaffPage } from '../pages/staff/staff';
import { ContactPage } from '../pages/contact/contact';
import { CompanyPage } from '../pages/company/company';
import { TwitterPage } from '../pages/twitter/twitter';
import { FacebookPage } from '../pages/facebook/facebook';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Return', component: ReturnPage },
      { title: 'Requested Forms', component: RequestedPage },
      { title: 'Appointment', component: AppointmentPage },
      { title: 'Staff', component: StaffPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Company', component: CompanyPage },
      { title: 'Twitter', component: TwitterPage },
      { title: 'Facebook', component: FacebookPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
