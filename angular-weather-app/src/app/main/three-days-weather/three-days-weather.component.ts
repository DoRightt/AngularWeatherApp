import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service';
import { WeatherDescriptionService } from '../../weather-description.service';
import {weatherIconUrls} from "../../weatherIconUrls";

@Component({
  selector: 'app-three-days-weather',
  templateUrl: './three-days-weather.component.html',
  styleUrls: ['./three-days-weather.component.scss']
})
export class ThreeDaysWeatherComponent implements OnInit {
	weather;
	threeDaysWeather;
	weatherByDays;

	constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService) { }

	ngOnInit() {
		this.weatherService.getWeatherCatalog().subscribe((weather) => {
			this.weather = weather;
			this.threeDaysWeather = this.weather.data.weather.slice(0,3);
			this.weatherByDays = this.interpretator.setWeatherBy('days', this.threeDaysWeather)

			for (let index = 0; index < this.weatherByDays.length; index++) {
				this.weatherByDays[index].hourly = this.threeDaysWeather[index].hourly.slice(1);
				this.weatherByDays[index].hourly.forEach(index => {
					index.iconUrl = weatherIconUrls[this.interpretator.descriptionInterpretator(index.weatherDesc[0].value)];
					index.windSpeed = Math.round(index.windspeedKmph / 3.6)
				})
			}
		})
	}
}
