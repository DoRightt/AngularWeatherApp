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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    CurrentWeatherComponent,
    CurrentDayWeatherComponent,
    CurrentWeekWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
