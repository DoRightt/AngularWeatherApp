import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public  state: any = {
    key: 'dd6301427900459c863160646190201',
    proxyUrl: 'https://cors-anywhere.herokuapp.com/',
    weatherCatalog: {},
    city: '',
    lat: '',
    lng: '',
    coords: [],
    queryString: '',
  };

  constructor() { }

  setPosition() {
    function setCoords(position) {
        this.state.lat = position.coords.latitude;
        this.state.lng = position.coords.longitude;
        this.state.coords = [position.coords.latitude, position.coords.longitude];
        this.state.queryString = `${this.state.proxyUrl}http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${this.state.key}&q=${position.coords.latitude},${position.coords.longitude}&num_of_days=14&tp=4&format=json`;
    }

    navigator.geolocation.getCurrentPosition(setCoords.bind(this))
  }

  getWeather(): Observable<any> {
    return of(this.state);
  }
}
