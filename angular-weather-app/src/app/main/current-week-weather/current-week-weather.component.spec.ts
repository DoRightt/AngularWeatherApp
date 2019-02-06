import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeekWeatherComponent } from './current-week-weather.component';

describe('CurrentWeekWeatherComponent', () => {
  let component: CurrentWeekWeatherComponent;
  let fixture: ComponentFixture<CurrentWeekWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeekWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeekWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
