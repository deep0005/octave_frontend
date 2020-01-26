import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: string = "http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&APPID=165cdf6b63c070aa38cc7821e6c2f93c";

  constructor(private http: HttpClient) { }

  getCurrentWeather = () => {
    // const httpHeaders = new HttpHeaders({
    //   "Authorization": "Bearer " + ,
    // })
    return this.http.get<any>(this.url);
  }
}
