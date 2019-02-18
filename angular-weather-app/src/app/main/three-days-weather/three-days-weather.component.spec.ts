import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDaysWeatherComponent } from './three-days-weather.component';

describe('ThreeDaysWeatherComponent', () => {
  let component: ThreeDaysWeatherComponent;
  let fixture: ComponentFixture<ThreeDaysWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDaysWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDaysWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
