import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service';
import { WeatherDescriptionService } from '../../weather-description.service';
import { weatherIconUrls } from '../../weatherIconUrls';
import { week } from '../../daysOfWeek';
import { description } from "../../weather-description-list"

@Component({
  selector: 'app-ten-days-weather',
  templateUrl: './ten-days-weather.component.html',
  styleUrls: ['./ten-days-weather.component.scss']
})
export class TenDaysWeatherComponent implements OnInit {
    weather;
    tenDaysWeather;
    weatherByDays;


  constructor(private weatherService: WeatherService, private interpretator: WeatherDescriptionService) { }

  ngOnInit() {
      this.weatherService.getWeatherCatalog().subscribe((weather) => {
          this.weather = weather;
          this.tenDaysWeather = this.weather.data.weather.slice(0,10);
          this.weatherByDays = this.setWeatherByDays(this.tenDaysWeather, this.interpretator)
      })
  }

    private setWeatherByDays(weather, int) {
        let result = [];

        for (let day of weather) {
            let precipTypes = day.hourly.map(i => i.weatherDesc[0].value)
                .map(i => int.descriptionInterpretator(i));
            let windSpeedArr = day.hourly.map(i => i.windspeedKmph);

            let item = {
                day: week[new Date(day.date).getDay()],
                date: new Date(day.date),
                iconUrl: weatherIconUrls[int.getMainWeather(precipTypes)],
                minTemp: day.mintempC,
                maxTemp: day.maxtempC,
                maxWind: Math.max(...windSpeedArr),
                description: description[int.getMainWeather(precipTypes)],
                precip: day.totalSnow_cm * 10,
                isWeekend: this.interpretator.checkWeekend(new Date(day.date).getDay())
            };
            result.push(item);
        }

        return result;
    }
}
