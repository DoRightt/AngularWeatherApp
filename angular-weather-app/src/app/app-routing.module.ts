import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainComponent} from "./main/main.component";
import {TomorrowWeatherComponent} from "./main/tomorrow-weather/tomorrow-weather.component";
import {ThreeDaysWeatherComponent} from "./main/three-days-weather/three-days-weather.component";
import {TenDaysWeatherComponent} from "./main/ten-days-weather/ten-days-weather.component";
import {TwoWeeksWeatherComponent} from "./main/two-weeks-weather/two-weeks-weather.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'tomorrow', component: TomorrowWeatherComponent },
  { path: '3days', component: ThreeDaysWeatherComponent },
  { path: '10days', component: TenDaysWeatherComponent },
  { path: '2weeks', component: TwoWeeksWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
