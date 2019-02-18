import { Component, OnInit } from '@angular/core';
import {WeatherDescriptionService} from "../../weather-description.service";
import {WeatherService} from "../../weather.service";

@Component({
  selector: 'app-tomorrow-weather',
  templateUrl: './tomorrow-weather.component.html',
  styleUrls: ['./tomorrow-weather.component.scss']
})
export class TomorrowWeatherComponent implements OnInit {
  weather;
  tomorrowWeather;
  weatherHourly;

  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService) { }

  ngOnInit() {
    this.weatherService.getWeatherCatalog().subscribe((weather) => {
      this.weather = weather;
      this.tomorrowWeather = weather.data.weather[1].hourly;
      this.weatherHourly = this.interpretator.setWeatherByHour(this.tomorrowWeather, this.interpretator.descriptionInterpretator)
    });
  }
}
