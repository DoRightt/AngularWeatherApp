import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDaysWeatherComponent } from './ten-days-weather.component';

describe('TenDaysWeatherComponent', () => {
  let component: TenDaysWeatherComponent;
  let fixture: ComponentFixture<TenDaysWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenDaysWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenDaysWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
