import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";
import {tap} from "rxjs/internal/operators/tap";
import {switchMap} from "rxjs/internal/operators/switchMap";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss']
})
export class SearchLocationComponent implements OnInit {
  cityData;
  coords;
  city = new FormControl('');
  queryString;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

	@Output() onSearch = new EventEmitter();
	@Output() getCoords = new EventEmitter();

  setSearchedCity() {
    let city = this.cityNameValidator(this.city.value)
    return new Observable((observer) => {
      observer.next(city);
      observer.complete();
    })
  }

  setQueryString(city) {
    this.queryString = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=d6cef581061d400cb369d95fa9ede066&language=en`;
  }

  getCity() {
    this.city.setValue('')
    return this.http.get(this.queryString)
  }

  send() {
    this.onSearch.emit(this.city.value)
    return this.setSearchedCity().pipe(
      tap((city) => this.setQueryString(city)),
      switchMap(() => this.getCity()),
      tap(data => console.log(data))
    ).subscribe(data => {
      this.cityData = data;
      this.coords = this.cityData.results[0].geometry;
	    this.getCoords.emit(this.coords)
    })
  };

  cityNameValidator(cityName) {
    return cityName.replace(' ', '%20')
  }
}
