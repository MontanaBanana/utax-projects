import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, BaseRequestOptions, RequestOptions, HttpModule, JsonpModule, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { PhotosPage } from '../photos/photos';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-return',
  templateUrl: 'http://utax.montanab.com/apptemplate/return/{project.id}'
})
export class ReturnPage {

  constructor(public navCtrl: NavController, public http: Http) {

  }

  public submitReturn(form: any): void {
		//console.log('you submitted value:', form);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
		console.log(options);
        var p = this.http.post('https://utax.montanab.com/account/project/submitreturn', form, options)
				   .toPromise()
                   .then(
						data => { 
							//var response = data["user_id"];
							console.log(data.json());
							var my_data = data.json();
							console.log(my_data.user_id);
							//console.log(response.user_id);
							this.navCtrl.push(PhotosPage, {user_id: my_data.user_id});							
						}
					)
                   .catch(this.handleErrorPromise);
        console.log(p);
  }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }


}
