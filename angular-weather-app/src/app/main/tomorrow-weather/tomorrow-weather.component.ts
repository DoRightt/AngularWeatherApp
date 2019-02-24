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
  coords;

  constructor(
    private weatherService: WeatherService,
    private interpretator: WeatherDescriptionService,
    private cityService: CityService
  ) { }

  ngOnInit() {
	  this.cityService.city$.subscribe(value => this.city = value);
	  this.cityService.coords$.subscribe(value => {
		  this.coords = value;
		  if (this.coords !== null) {
			  this.weatherService.getWeatherCatalogBySearch(value).subscribe((weather) => {
				  this.weather = weather;
				  this.tomorrowWeather = this.weather.data.weather[1].hourly;
				  this.weatherHourly = this.interpretator.setWeatherBy('hours', this.tomorrowWeather)
			  });
		  } else {
			  this.weatherService.getWeatherCatalog().subscribe((weather) => {
				  this.weather = weather;
				  this.tomorrowWeather = weather.data.weather[1].hourly;
				  this.weatherHourly = this.interpretator.setWeatherBy('hours', this.tomorrowWeather)
			  });
		  }
	  })
  }
}
