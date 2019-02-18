import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service';
import { WeatherDescriptionService } from '../../weather-description.service';

@Component({
  selector: 'app-ten-days-weather',
  templateUrl: './ten-days-weather.component.html',
  styleUrls: ['./ten-days-weather.component.scss']
})
export class TenDaysWeatherComponent implements OnInit {
  weather;
  tenDaysWeather;
  weatherByDays;

  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService) { }

  ngOnInit() {
    this.weatherService.getWeatherCatalog().subscribe((weather) => {
      this.weather = weather;
      this.tenDaysWeather = this.weather.data.weather.slice(0,10);
      this.weatherByDays = this.interpretator.setWeatherBy('days', this.tenDaysWeather)
    })
  }
}
