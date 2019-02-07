import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
    test: any ;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.setPosition()
    this.getWeather()
  }

  getWeather(): void {
   this.weatherService.getWeather(this.weatherService.queryString)
       .subscribe(data => this.test = data);
  }

}
