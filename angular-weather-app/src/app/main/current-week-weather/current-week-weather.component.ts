import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'
import { WeatherDescriptionService } from '../../weather-description.service'
import { backgroundUrls } from '../../backgroundUrls'
import { weatherIconUrls } from '../../weatherIconUrls'
import { week } from '../../daysOfWeek'

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
      this.weatherByDays = this.setWeatherByDays(this.weekWeather, this.interpretator.descriptionInterpretator)
    })
  }

  private setWeatherByDays(weather, int) {
    let result = [];

    for (let day of weather) {
      let item = {
        day: week[new Date(day.date).getDay()],
        date: '',
        // iconUrl: weatherIconUrls[int(day.weatherDesc[0].value)],
        // minTemp: day.tempC,
        // maxTemp: day.tempC,
        // windSpeed: Math.round(day.windspeedKmph / 3.6),
        // description: ''
      };
      
      result.push(item);
    }

    return result;
  }

}
