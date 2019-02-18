import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'
import { WeatherDescriptionService } from '../../weather-description.service'
import { backgroundUrls } from '../../backgroundUrls'
import { weatherIconUrls } from '../../weatherIconUrls'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit{
  weather = null;
  currentWeather;
  date = Date.now();
  temp;
  humidity;
  iconUrl;
  description;
  pressure;
  wind;
  background;
  test

  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService) {}

  ngOnInit() {
    this.weatherService.getWeatherCatalog().subscribe((weather) => {
      this.weather = weather;
      this.currentWeather = this.weather.data.current_condition[0];
      this.pressure = this.currentWeather.pressure;
      this.humidity = this.currentWeather.humidity;
      this.temp = this.currentWeather.temp_C;
      this.wind = Math.round(this.currentWeather.windspeedKmph / 3.6);
      this.description = this.currentWeather.weatherDesc[0].value;
      this.background = backgroundUrls[this.interpretator.descriptionInterpretator(this.description)];
      this.iconUrl = weatherIconUrls[this.interpretator.descriptionInterpretator(this.description)];
      this.test = this.interpretator.descriptionInterpretator(this.description)
    });
  }
}
