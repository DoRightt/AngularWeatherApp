import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherDescriptionService {

  constructor() { }
  
  public descriptionInterpretator(description): any {
    let result;

    if (description.indexOf('snow') > -1 || description.indexOf('Blizzard') > -1) {
      result = 'snow'
    } else if (description.indexOf('Partly cloudy') > -1 && new Date().getHours() > 4 && new Date().getHours() < 20) {
      result = 'partly-cloudy-day'
    } else if (description.indexOf('Partly cloudy') > -1 && new Date().getHours() < 4 || new Date().getHours() > 20) {
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

  public getMainWeather(descriptionArray) {
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
      mainWeather = 'partly-cloudy-day';
    } else if (descriptionArray.indexOf('cloudy') > -1) {
      mainWeather = 'cloudy';
    } else {
      mainWeather = 'clear-day'
    }
      return mainWeather;
  }
}