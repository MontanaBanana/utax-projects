import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { LoadingController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ReturnPage } from '../pages/return/return';
import { RequestedPage } from '../pages/requested/requested';
import { AppointmentPage } from '../pages/appointment/appointment';
import { StaffPage } from '../pages/staff/staff';
import { ContactPage } from '../pages/contact/contact';
import { CompanyPage } from '../pages/company/company';
import { TwitterPage } from '../pages/twitter/twitter';
import { FacebookPage } from '../pages/facebook/facebook';
import { PhotosPage } from '../pages/photos/photos';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'http://utax.montanab.com/apptemplate/app/12'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  lang: string = "en";
  translate: TranslateService;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public trans: TranslateService) {
    this.initializeApp();

	this.translate = trans;
    this.translate.setDefaultLang(this.lang);
	//translate.use('es');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Return', component: ReturnPage },
      //{ title: 'Requested Forms', component: RequestedPage },
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
  
  swapLanguage() {
	  if (this.lang == 'en') {
		  this.lang = 'es';
	  }
	  else {
		  this.lang = 'en';
	  }
	  this.translate.use(this.lang);

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
