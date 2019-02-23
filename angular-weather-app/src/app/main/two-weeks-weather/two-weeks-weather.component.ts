import { Component, OnInit } from '@angular/core';
import {WeatherDescriptionService} from "../../weather-description.service";
import {WeatherService} from "../../weather.service";
import {CityService} from "../../city.service";

@Component({
  selector: 'app-two-weeks-weather',
  templateUrl: './two-weeks-weather.component.html',
  styleUrls: ['./two-weeks-weather.component.scss']
})
export class TwoWeeksWeatherComponent implements OnInit {
  weather;
  twoWeeksWeather;
  weatherByDays;
  city;

  constructor(
    private weatherService: WeatherService,
    private interpretator: WeatherDescriptionService,
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.weatherService.getWeatherCatalog().subscribe((weather) => {
      this.weather = weather;
      this.twoWeeksWeather = this.weather.data.weather.slice(0,14);
      this.weatherByDays = this.interpretator.setWeatherBy('days', this.twoWeeksWeather)
    })

	  this.cityService.city$.subscribe(value => this.city = value);
  }
}
