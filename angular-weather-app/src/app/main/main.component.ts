import {Component, Input, OnInit, Output} from '@angular/core';
import {CityService} from "../city.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  city;

  constructor(private cityService: CityService) {}

  ngOnInit() {
	  this.cityService.city$.subscribe(value => this.city = value)
  }

}
