import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'
import { WeatherDescriptionService } from '../../weather-description.service'
import { backgroundUrls } from '../../backgroundUrls'
import { weatherIconUrls } from '../../weatherIconUrls'

@Component({
  selector: 'app-current-day-weather',
  templateUrl: './current-day-weather.component.html',
  styleUrls: ['./current-day-weather.component.scss']
})
export class CurrentDayWeatherComponent implements OnInit {
  weather;
  todayWeather;
  weatherHourly;

  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService) { }

  ngOnInit() {
    this.weatherService.getWeatherCatalog().subscribe((weather) => {
      this.weather = weather;
      this.todayWeather = weather.data.weather[0].hourly;
      this.weatherHourly = this.setWeatherByHour(this.todayWeather, this.interpretator.descriptionInterpretator)
    });
  }

  private setWeatherByHour(weather, int) {
    let result = [];


    for (let index of weather) {
      let item = {
        time: this.timeValidator(index.time),
        icon: int(index.weatherDesc[0].value),
        degrees: index.tempC,
        windSpeed: Math.round(index.windspeedKmph / 3.6),
      };
      
      result.push(item);
    }

    return result;
  }

  private timeValidator(time) {
    time = time > 0 ? time / 100 : '00';
    return time.toString().length < 2 ? '0' + time : time;
  }

}
