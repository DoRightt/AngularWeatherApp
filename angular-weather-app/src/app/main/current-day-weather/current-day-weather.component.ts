import {Component, Input, OnInit} from '@angular/core';

import { WeatherService } from '../../weather.service'
import { WeatherDescriptionService } from '../../weather-description.service'
import {CityService} from "../../city.service";

@Component({
  selector: 'app-current-day-weather',
  templateUrl: './current-day-weather.component.html',
  styleUrls: ['./current-day-weather.component.scss']
})
export class CurrentDayWeatherComponent implements OnInit {
  weather;
  todayWeather;
  weatherHourly;
  coords;

  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService, private cityService: CityService) { }

  ngOnInit() {
	  this.cityService.coords$.subscribe(value => {
		  this.coords = value;
		  if (this.coords !== null) {
			  this.weatherService.getWeatherCatalogBySearch(value).subscribe((weather) => {
				  this.weather = weather;
				  this.todayWeather = this.weather.data.weather[0].hourly;
				  this.weatherHourly = this.interpretator.setWeatherBy('hours', this.todayWeather)
			  });
		  } else {
			  this.weatherService.getWeatherCatalog().subscribe((weather) => {
				  this.weather = weather;
				  this.todayWeather = weather.data.weather[0].hourly;
				  this.weatherHourly = this.interpretator.setWeatherBy('hours', this.todayWeather)
			  });
		  }
	  })
  }
}
