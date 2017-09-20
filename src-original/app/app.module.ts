import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReturnPage } from '../pages/return/return';
import { RequestedPage } from '../pages/requested/requested';
import { AppointmentPage } from '../pages/appointment/appointment';
import { StaffPage } from '../pages/staff/staff';
import { ContactPage } from '../pages/contact/contact';
import { CompanyPage } from '../pages/company/company';
import { TwitterPage } from '../pages/twitter/twitter';
import { FacebookPage } from '../pages/facebook/facebook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReturnPage,
    RequestedPage,
    AppointmentPage,
    StaffPage,
    ContactPage,
    CompanyPage,
    TwitterPage,
    FacebookPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReturnPage,
    RequestedPage,
    AppointmentPage,
    StaffPage,
    ContactPage,
    CompanyPage,
    TwitterPage,
    FacebookPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
