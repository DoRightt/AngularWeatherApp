"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="../../node_modules/@angular/common/http/src/params.d.ts"/>
var core_1 = require('@angular/core');
var index_1 = require("rxjs/index");
var operators_1 = require("rxjs/internal/operators");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.key = 'dd6301427900459c863160646190201';
        this.queryString = null;
    }
    WeatherService.prototype.getCurrentPosition = function () {
        return new index_1.Observable(function (observer) {
            navigator.geolocation.getCurrentPosition(function (position) {
                observer.next(position);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    WeatherService.prototype.setQueryString = function (position) {
        this.queryString = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=" + this.key + "&q=" + position.coords.latitude + "," + position.coords.longitude + "&num_of_days=14&tp=4&format=json";
    };
    WeatherService.prototype.getWeather = function () {
        return this.http.get(this.queryString);
    };
    WeatherService.prototype.getWeatherCatalog = function () {
        var _this = this;
        // получили `Position`
        return this.getCurrentPosition().pipe(
        // засеттили `queryString`
        operators_1.tap(function (position) { return _this.setQueryString(position); }), 
        // делаем запрос на этот `queryString`
        operators_1.switchMap(function () { return _this.getWeather(); }));
    };
    WeatherService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map