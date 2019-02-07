import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
    query: any ;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.setPosition()
  }

}
