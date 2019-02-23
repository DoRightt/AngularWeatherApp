import { Component, OnInit } from '@angular/core';
import {WeatherDescriptionService} from "../../weather-description.service";
import {WeatherService} from "../../weather.service";
import {CityService} from "../../city.service";

@Component({
  selector: 'app-tomorrow-weather',
  templateUrl: './tomorrow-weather.component.html',
  styleUrls: ['./tomorrow-weather.component.scss']
})
export class TomorrowWeatherComponent implements OnInit {
  weather;
  tomorrowWeather;
  weatherHourly;
  city;
  constructor(
    private weatherService: WeatherService,
    private interpretator: WeatherDescriptionService,
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.weatherService.getWeatherCatalog().subscribe((weather) => {
      this.weather = weather;
      this.tomorrowWeather = weather.data.weather[1].hourly;
      this.weatherHourly = this.interpretator.setWeatherBy('hours', this.tomorrowWeather)
    });

	  this.cityService.city$.subscribe(value => this.city = value);
  }
}
