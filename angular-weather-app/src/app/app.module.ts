import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { CurrentWeatherComponent } from './main/current-weather/current-weather.component';
import { CurrentDayWeatherComponent } from './main/current-day-weather/current-day-weather.component';
import { CurrentWeekWeatherComponent } from './main/current-week-weather/current-week-weather.component';
import { TenDaysWeatherComponent } from './main/ten-days-weather/ten-days-weather.component';
import { TwoWeeksWeatherComponent } from './main/two-weeks-weather/two-weeks-weather.component';
import { TomorrowWeatherComponent } from './main/tomorrow-weather/tomorrow-weather.component';
import { ThreeDaysWeatherComponent } from './main/three-days-weather/three-days-weather.component';
import { SearchLocationComponent } from './header/search-location/search-location.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    CurrentWeatherComponent,
    CurrentDayWeatherComponent,
    CurrentWeekWeatherComponent,
    TenDaysWeatherComponent,
    TwoWeeksWeatherComponent,
    TomorrowWeatherComponent,
    ThreeDaysWeatherComponent,
    SearchLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
