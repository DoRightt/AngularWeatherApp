import {Component, Input, OnInit, Output} from '@angular/core';
import {CityService} from "../city.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  city;
  coords;

  constructor(private cityService: CityService) {}

  ngOnInit() {
	  this.cityService.city$.subscribe(value => this.city = value)
	  this.cityService.coords$.subscribe(value => this.coords = value)
  }

}
