import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {
  url: string = "https://www.mapquestapi.com/traffic/v2/incidents?&outFormat=json&boundingBox={lat}%2C{lng}%2C{lat}%2C{lng}&filters=construction%2Cincidents%2Cevent%2Ccongestion&key=MYGcf7V3UCkG1kAHX9G7jgGjBpfoDqGc";

  constructor(private http: HttpClient) { }

  getCurrentTraffic = (lat, lng) => {
    // const httpHeaders = new HttpHeaders({
    //   "Authorization": "Bearer " + ,
    // })
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.url.split("{lat}").join(lat).split("{lng}").join(lng)).subscribe(response => {
        
      })
    });
  }
}
