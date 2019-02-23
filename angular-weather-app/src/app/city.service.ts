import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  city$ = new BehaviorSubject<string>(null);
  coords$ = new BehaviorSubject<string>(null);

	get city(): any {
		return this.city$.getValue();
	}

	get coords(): any {
		return this.coords$.getValue();
	}

  set city(value) {
		console.log(value, 'from service')
    this.city$.next(value)
  }

	set coords(value) {
		console.log(value, 'from service')
		this.coords$.next(value)
	}
}
