import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather.service'
import {Observable} from "rxjs/index";
import {SimpleChanges} from "@angular/core";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  weatherCatalog;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
      this.weatherService.setPosition();
  }

}
