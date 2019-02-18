import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWeeksWeatherComponent } from './two-weeks-weather.component';

describe('TwoWeeksWeatherComponent', () => {
  let component: TwoWeeksWeatherComponent;
  let fixture: ComponentFixture<TwoWeeksWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWeeksWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWeeksWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
