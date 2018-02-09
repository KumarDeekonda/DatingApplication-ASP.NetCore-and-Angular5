import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any ;
  constructor(private _http: Http) { }

  ngOnInit() {
    this.getvalues();
  }

  registerToggle() {
    this.registerMode = true;
  }

  getvalues() {
    this._http.get('http://localhost:5000/api/values').subscribe(response => {
    this.values = response.json();
        });
}
cancelRegisterMode( registerMode: boolean) {
  this.registerMode = registerMode;
}
}
