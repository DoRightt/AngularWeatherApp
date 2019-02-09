///<reference path="../../node_modules/@angular/common/http/src/params.d.ts"/>
import { Injectable } from '@angular/core';
import {Observable, of, Subject} from "rxjs/index";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    key = 'dd6301427900459c863160646190201';
    proxyUrl ='https://cors-anywhere.herokuapp.com/';
    weatherCatalog;

  constructor(private http: HttpClient) { }

    getWeather(position) {
        const { latitude, longitude } = position.coords;
        const queryString = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${this.key}&q=${latitude},${longitude}&num_of_days=14&tp=4&format=json`;
        return this.http.get(queryString);
    }

    async getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                res => resolve(res),
                err => reject(err)
            );
        });
    }

}
