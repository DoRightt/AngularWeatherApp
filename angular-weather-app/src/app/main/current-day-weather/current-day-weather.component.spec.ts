import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDayWeatherComponent } from './current-day-weather.component';

describe('CurrentDayWeatherComponent', () => {
  let component: CurrentDayWeatherComponent;
  let fixture: ComponentFixture<CurrentDayWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDayWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
