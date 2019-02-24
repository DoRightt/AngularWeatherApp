import { Component, OnInit } from '@angular/core';
;
import { WeatherService } from '../../weather.service';
import { WeatherDescriptionService } from '../../weather-description.service';
import {CityService} from "../../city.service";

@Component({
  selector: 'app-current-week-weather',
  templateUrl: './current-week-weather.component.html',
  styleUrls: ['./current-week-weather.component.scss']
})
export class CurrentWeekWeatherComponent implements OnInit {
  weather;
  weekWeather;
  weatherByDays;
  coords;

  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService, private cityService: CityService) { }

  ngOnInit() {
	  this.cityService.coords$.subscribe(value => {
		  this.coords = value;
		  if (this.coords !== null) {
			  this.weatherService.getWeatherCatalogBySearch(value).subscribe((weather) => {
				  this.weather = weather;
				  this.weekWeather = this.weather.data.weather.slice(0,7);
				  this.weatherByDays = this.interpretator.setWeatherBy('days', this.weekWeather)
			  });
		  } else {
			  this.weatherService.getWeatherCatalog().subscribe((weather) => {
				  this.weather = weather;
				  this.weekWeather = this.weather.data.weather.slice(0,7);
				  this.weatherByDays = this.interpretator.setWeatherBy('days', this.weekWeather)
			  })
		  }
	  })

  }
}
