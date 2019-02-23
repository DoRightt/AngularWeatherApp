import {Component, OnInit} from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-weather-app';
  city;
  coords;

  constructor(private cityService: CityService) {}

  changeCity(e): any {
  	this.cityService.city = e;
  	this.city = this.cityService.city
  }

  changeCoords(e): any {
    this.cityService.coords = e;
    this.coords = this.cityService.coords
  }

  ngOnInit() {}
}
