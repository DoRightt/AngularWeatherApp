///<reference path="../../node_modules/@angular/common/http/src/params.d.ts"/>
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {switchMap, tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private key = 'dd6301427900459c863160646190201';

  private queryString = null;

  constructor(private http: HttpClient) {}

  private getCurrentPosition(): Observable<Position> {
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        observer.next(position);
        observer.complete();
      }, (error) => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  private setQueryString(position: Position): void {
    this.queryString = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${this.key}&q=${position.coords.latitude},${position.coords.longitude}&num_of_days=14&tp=4&format=json`;
  }

  private getWeather() {
    return this.http.get(this.queryString);
  }

  public getWeatherCatalog(): Observable<any> {
    // получили `Position`
    return this.getCurrentPosition().pipe(
      // засеттили `queryString`
      tap((position) => this.setQueryString(position)),
      // делаем запрос на этот `queryString`
      switchMap(() => {
        return this.getWeather()
      })
    );
  }
}

