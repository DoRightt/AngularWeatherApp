import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'
import { WeatherDescriptionService } from '../../weather-description.service'

@Component({
  selector: 'app-current-day-weather',
  templateUrl: './current-day-weather.component.html',
  styleUrls: ['./current-day-weather.component.scss']
})
export class CurrentDayWeatherComponent implements OnInit {
  weather;
  todayWeather;
  weatherHourly;

  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService) { }

  ngOnInit() {
    this.weatherService.getWeatherCatalog().subscribe((weather) => {
      this.weather = weather;
      this.todayWeather = weather.data.weather[0].hourly;
      this.weatherHourly = this.interpretator.setWeatherBy('hours', this.todayWeather)
    });
  }
}
