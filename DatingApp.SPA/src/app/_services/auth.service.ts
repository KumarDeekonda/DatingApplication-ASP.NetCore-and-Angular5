import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth/';
    userToken: any;

constructor(private _http: Http) { }

  login(model: any) {
    const headers = new Headers({'Content-type': 'application/json'});
    const options = new RequestOptions({ headers: headers});
    return this._http.post(this.baseUrl + 'login', model, options).map(( response: Response) => {
      const user  = response.json();
      if (user) {
        localStorage.setItem('token', user.tokenString);
        this.userToken = user.tokenString;
      }
    });
 }
}
