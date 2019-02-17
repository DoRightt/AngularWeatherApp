import { Component, OnInit } from '@angular/core';
;
import { WeatherService } from '../../weather.service';
import { WeatherDescriptionService } from '../../weather-description.service';

@Component({
  selector: 'app-current-week-weather',
  templateUrl: './current-week-weather.component.html',
  styleUrls: ['./current-week-weather.component.scss']
})
export class CurrentWeekWeatherComponent implements OnInit {
  weather;
  weekWeather;
  weatherByDays;

  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService) { }

  ngOnInit() {
    this.weatherService.getWeatherCatalog().subscribe((weather) => {
      this.weather = weather;
      this.weekWeather = this.weather.data.weather.slice(0,7);
      this.weatherByDays = this.interpretator.setWeatherByDays(this.weekWeather, this.interpretator)
    })
  }
}
