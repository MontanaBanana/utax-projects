import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, BaseRequestOptions, RequestOptions, HttpModule, JsonpModule, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-contact',
  templateUrl: 'http://utax.montanab.com/apptemplate/contact/12'
})

export class ContactPage {
  location_items = [];

  constructor(public navCtrl: NavController, public http: Http) {
		var locations = this.http.get('http://utax.montanab.com/account/project/applocations/12');
		locations
			.map(res => res.json())
			.subscribe(data => {
				this.location_items = data.locations;
				console.log('my data: ', data);
			});
  }

}
