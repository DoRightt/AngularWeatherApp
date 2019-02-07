import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

    key = 'dd6301427900459c863160646190201';
    proxyUrl ='https://cors-anywhere.herokuapp.com/';
    weatherCatalog = {};
    city = '';
    lat = '';
    lng = '';
    coords = [];
    queryString = '';

  constructor(private http: HttpClient) { }

  setProps(position) {
      new Promise((resolve, reject) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.coords = [position.coords.latitude, position.coords.longitude];
          this.queryString = `${this.proxyUrl}http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${this.key}&q=${position.coords.latitude},${position.coords.longitude}&num_of_days=14&tp=4&format=json`;
          this.http.get(this.queryString)
              .toPromise()
              .then(res => this.weatherCatalog = res)
      })
  }

  setPosition() {
      navigator.geolocation.getCurrentPosition(this.setProps.bind(this))
  }
}
