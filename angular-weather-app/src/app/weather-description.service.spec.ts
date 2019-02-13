import { TestBed } from '@angular/core/testing';

import { WeatherDescriptionService } from './weather-description.service';

describe('WeatherDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherDescriptionService = TestBed.get(WeatherDescriptionService);
    expect(service).toBeTruthy();
  });
});
