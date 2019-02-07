import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  constructor(private weather: WeatherService) { }
  test: any;

  ngOnInit() {
    this.weather.setPosition();

    this.getWeather()
  }

  getWeather(): void {
    // this.test =  this.weather.state.queryString.subscribe();
    
    this.weather.getWeather()
        .subscribe(weather => this.test = weather);
    
  }

}
