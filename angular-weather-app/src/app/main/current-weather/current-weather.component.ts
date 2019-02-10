import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'
import { backgroundUrls } from '../../backgroundUrls'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
    public weather = null;
    public currentWeather;
    public date = Date.now();
    public temp;
    public humidity;
    public iconUrl;
    public descr;
    public pressure;
    public wind;
    public backgroundUrls = backgroundUrls;
    public background;

    constructor(private weatherService: WeatherService) {
        this.weatherService.getWeatherCatalog().subscribe((weather) => {
            this.weather = weather;
            this.currentWeather = this.weather.data.current_condition[0];
            this.pressure = this.currentWeather.pressure;
            this.humidity = this.currentWeather.humidity;
            this.temp = this.currentWeather.temp_C;
            this.wind = Math.round(this.currentWeather.windspeedKmph / 3.6);
            this.iconUrl = this.currentWeather.weatherIconUrl[0].value;
            this.descr = this.currentWeather.weatherDesc[0].value;
            this.background = this.backgroundUrls[this.descr]

            console.log(this.background)
        });
    }
}
