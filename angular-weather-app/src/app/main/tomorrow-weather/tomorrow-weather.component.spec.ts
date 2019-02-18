import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomorrowWeatherComponent } from './tomorrow-weather.component';

describe('TomorrowWeatherComponent', () => {
  let component: TomorrowWeatherComponent;
  let fixture: ComponentFixture<TomorrowWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomorrowWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomorrowWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
