import { Injectable } from '@angular/core';

import { weatherIconUrls } from './weatherIconUrls';
import { week } from './daysOfWeek';
import { description } from './weather-description-list';

@Injectable({
  providedIn: 'root'
})
export class WeatherDescriptionService {

  constructor() { }

  descriptionInterpretator(description): string {
    let result;

    if (description.indexOf('snow') > -1 || description.indexOf('Blizzard') > -1) {
      result = 'snow'
    } else if (description.indexOf('Partly cloudy') > -1) {
      result = 'partly-cloudy-day'
    } else if (description.indexOf('Partly cloudy') > -1) {
      result = 'partly-cloudy-night'
    } else if (description.indexOf('Cloudy') > -1 || description.indexOf('Overcast') > -1) {
      result = 'cloudy'
    } else if (description.indexOf('Mist') > -1 || description.indexOf("Freezing fog") > -1) {
      result = 'fog'
    } else if (description.indexOf('sleet') > -1) {
      result = 'sleet'
    } else if (description.indexOf('rain') > -1 || description.indexOf('Light drizzle') > -1) {
      result = 'rain'
    } else {
      result = new Date().getHours() > 4 && new Date().getHours() < 20 ? 'clear-day' : 'clear-night'
    }

    return result;
  }

  getMainWeather(descriptionArray): string {
    let mainWeather;

    if (descriptionArray.indexOf('snow') > -1) {
      mainWeather = 'snow';
    } else if (descriptionArray.indexOf('rain') > -1) {
      mainWeather = 'rain';
    } else if (descriptionArray.indexOf('sleet') > -1) {
      mainWeather = 'sleet';
    } else if (descriptionArray.indexOf('wind') > -1) {
      mainWeather = 'wind';
    } else if (descriptionArray.indexOf('partly-cloudy-day') > -1) {
      mainWeather = 'partly-cloudy-day';
    } else if (descriptionArray.indexOf('partly-cloudy-night') > -1) {
      mainWeather = 'partly-cloudy-night';
    } else if (descriptionArray.indexOf('cloudy') > -1) {
      mainWeather = 'cloudy';
    } else {
      mainWeather = 'clear-day'
    }

      return mainWeather;
  }

  checkWeekend(day): boolean {
    if (day === 0 || day === 6) {
      return true
    } else {
      return false;
    }
  }

  setWeatherBy(weatherBy, weather) {
    if (weatherBy === 'days') {
	    return this.setWeatherByDays(weather)
    } else if (weatherBy === 'hours') {
	    return this.setWeatherByHour(weather)
    }
  }

  timeValidator(time) {
    time = time > 0 ? time / 100 : '00';
    return time.toString().length < 2 ? '0' + time : time;
  }

	setWeatherByDays(weather): Array<{}> {
		let result = [];

		for (let day of weather) {
			let precipTypes = day.hourly.map(i => i.weatherDesc[0].value).map(i => this.descriptionInterpretator(i));
			let windSpeedArr = day.hourly.map(i => i.windspeedKmph);

			let item = {
				day: week[new Date(day.date).getDay()],
				date: new Date(day.date),
				iconUrl: weatherIconUrls[this.getMainWeather(precipTypes)],
				minTemp: day.mintempC,
				maxTemp: day.maxtempC,
				maxWind: Math.max(...windSpeedArr),
				description: description[this.getMainWeather(precipTypes)],
				precip: day.totalSnow_cm * 10,
				isWeekend: this.checkWeekend(new Date(day.date).getDay())
			};

			result.push(item);
		}

		return result;
	}

	setWeatherByHour(weather) {
		let result = [];

		for (let hour of weather) {
			let item = {
				time: this.timeValidator(hour.time),
				iconUrl: weatherIconUrls[this.descriptionInterpretator(hour.weatherDesc[0].value)],
				degrees: hour.tempC,
				windSpeed: Math.round(hour.windspeedKmph / 3.6),
				description: hour.weatherDesc[0].value,
				precip: hour.precipMM
			};
			result.push(item);
		}

		return result;
	}
}
