import { Component, OnInit } from '@angular/core';
import {WeatherDescriptionService} from "../../weather-description.service";
import {WeatherService} from "../../weather.service";

@Component({
  selector: 'app-two-weeks-weather',
  templateUrl: './two-weeks-weather.component.html',
  styleUrls: ['./two-weeks-weather.component.scss']
})
export class TwoWeeksWeatherComponent implements OnInit {
  weather;
  twoWeeksWeather;
  weatherByDays;

  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService) { }

  ngOnInit() {
    this.weatherService.getWeatherCatalog().subscribe((weather) => {
      this.weather = weather;
      this.twoWeeksWeather = this.weather.data.weather.slice(0,14);
      this.weatherByDays = this.interpretator.setWeatherByDays(this.twoWeeksWeather, this.interpretator)
    })
  }
}
