import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'
import {Observable, interval, of} from "rxjs/index";
import {SimpleChanges} from "@angular/core";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  weather: Observable<any>;
  currentWeatherState;
  temp: number;
  wind;
  humidity;
  pressure;
  icon;
  desc;
  date = Date.now();

  constructor(private weatherService: WeatherService) {
    this.getWeather();
  }

  ngOnInit() {
  }

    async getWeather() {
        try {
            const position  = await this.weatherService.getCurrentPosition();
            this.weather = this.weatherService.getWeather(position);
            this.weather.subscribe(res => {
              this.currentWeatherState = res.data.current_condition[0]
              this.temp = this.currentWeatherState.temp_C;
              this.wind = Math.round(this.currentWeatherState.windspeedKmph / 3.6);
              this.humidity = this.currentWeatherState.humidity;
              this.pressure = this.currentWeatherState.pressure;
              this.icon = this.currentWeatherState.weatherIconUrl[0].value;
              this.desc = this.currentWeatherState.weatherDesc[0].value;
            })
        } catch(error) {
            this.weather = of(`You'll not get the Geolocation Services to work in this mode. Try Clicking on the 'Open in New Window LIVE' button to see if that works for you!`);
        }
    }

}
